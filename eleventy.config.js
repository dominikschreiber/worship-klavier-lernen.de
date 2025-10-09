import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { dirname } from 'node:path';
import { hash } from 'node:crypto';
import { writeFile, readFile, rm, access, mkdir } from 'node:fs/promises';
import { optimize } from 'svgo';

const execFileAsync = promisify(execFile);

const SECONDS = 1000;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;
const DAYS = 24 * HOURS;

const LILYPOND_DIR = '_lilypond';
const SVG_DIR = 'src/assets/svg';

function durationToString(ms) {
  return ms > DAYS ? `${Math.floor(ms / DAYS)}d ${durationToString(ms - Math.floor(ms / DAYS) * DAYS)}`
    : ms > HOURS ? `${Math.floor(ms / HOURS)}h ${durationToString(ms - Math.floor(ms / HOURS) * HOURS)}`
      : ms > MINUTES ? `${Math.floor(ms / MINUTES)}m ${durationToString(ms - Math.floor(ms / MINUTES) * MINUTES)}`
        : ms > SECONDS ? `${Math.floor(ms / SECONDS)}s ${durationToString(ms - Math.floor(ms / SECONDS) * SECONDS)}`
          : `${ms}ms`;
}

export default function (eleventyConfig) {
  const urlFilter = eleventyConfig.getFilter('url');

  eleventyConfig.setInputDirectory('src');

  eleventyConfig.addGlobalData('layout', 'page.njk');

  eleventyConfig.addPassthroughCopy('**/*.css');
  eleventyConfig.addPassthroughCopy('**/*.svg');

  eleventyConfig.addPairedShortcode('lilypond', async function (content, id = hash('sha256', content)) {
    const before = new Date();

    await Promise.all([
      access(LILYPOND_DIR).catch(() => mkdir(LILYPOND_DIR, { recursive: true })),
      access(SVG_DIR).catch(() => mkdir(SVG_DIR, { recursive: true }))
    ]);

    const lyFile = `${LILYPOND_DIR}/${id}.ly`;

    let shouldWriteLy = true;
    let shouldExec = true;

    try {
      const lyContent = await readFile(lyFile, 'utf-8');

      if (lyContent === content) {
        shouldWriteLy = false;
        shouldExec = false;
      }
    } catch { }

    if (shouldWriteLy) {
      await writeFile(lyFile, content);
    }

    const svgFile = `${SVG_DIR}/${id}.svg`;
    try {
      if (!shouldExec) {
        await access(svgFile);
      }
    } catch {
      shouldExec = true;
    }

    let svgContent;

    if (shouldExec) {
      const croppedSvgFile = `${SVG_DIR}/${id}.cropped.svg`;
      await execFileAsync('lilypond', ['--svg', '-dcrop', '--define-default', 'no-point-and-click', '--silent', '--output', `${SVG_DIR}/${id}`, `${LILYPOND_DIR}/${id}.ly`]);
      const croppedSvgContent = await readFile(croppedSvgFile, 'utf-8');
      svgContent = optimize(croppedSvgContent, { path: svgFile }).data;
      await Promise.all([
        writeFile(svgFile, svgContent),
        rm(croppedSvgFile)
      ]);
    }

    if (!svgContent) {
      svgContent = await readFile(svgFile, 'utf-8');
    }

    const url = `assets/svg/${id}.svg`;
    const outputSvgFile = `${this.eleventy.directories.output}${url}`;
    let shouldCopy = true;
    try {
      await mkdir(dirname(outputSvgFile), { recursive: true });
      const outputSvgContent = await readFile(outputSvgFile, 'utf-8');

      if (outputSvgContent === svgContent) {
        shouldCopy = false;
      }
    } catch { }

    if (shouldCopy) {
      await writeFile(outputSvgFile, svgContent);
    }

    console.log(`${shouldWriteLy ? '📦 compiled' : shouldExec ? '♻️ recompiled' : '☕️ served'} ${id}.ly in ${durationToString(new Date().valueOf() - before.valueOf())}`);

    return `\n\n<img src="${urlFilter('/' + url)}" class="lilypond" alt="${id}"/>\n\n`;
  });
}