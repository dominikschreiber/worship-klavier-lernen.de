import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { hash } from 'node:crypto';
import { writeFile, readFile, rm, access, rename } from 'node:fs/promises';
import { optimize } from 'svgo';

const execFileAsync = promisify(execFile);

const SECONDS = 1000;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;
const DAYS = 24 * HOURS;

function durationToString(ms) {
  return ms > DAYS ? `${Math.floor(ms / DAYS)}d ${durationToString(ms - Math.floor(ms / DAYS) * DAYS)}`
    : ms > HOURS ? `${Math.floor(ms / HOURS)}h ${durationToString(ms - Math.floor(ms / HOURS) * HOURS)}`
      : ms > MINUTES ? `${Math.floor(ms / MINUTES)}m ${durationToString(ms - Math.floor(ms / MINUTES) * MINUTES)}`
        : ms > SECONDS ? `${Math.floor(ms / SECONDS)}s ${durationToString(ms - Math.floor(ms / SECONDS) * SECONDS)}`
          : `${ms}ms`;
}

export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory('src');
  eleventyConfig.addPairedShortcode('lilypond', async function (content, id = hash('sha256', content)) {
    const before = new Date();

    const lyFile = `_lilypond/${id}.ly`;
    const svgFile = `_lilypond/${id}.svg`;
    const croppedSvgFile = `_lilypond/${id}.cropped.svg`;

    let shouldWriteLy = true;
    let shouldExec = true;

    try {
      const lyContent = await readFile(lyFile, 'utf-8');

      if (lyContent) {
        const lyHash = hash('sha256', lyContent);
        const contentHash = hash('sha256', content);

        if (lyHash === contentHash) {
          shouldWriteLy = false;
          shouldExec = false;
        }
      }
    } catch { }

    if (shouldWriteLy) {
      await writeFile(lyFile, content);
    }

    try {
      if (!shouldExec) {
        await access(svgFile);
      }
    } catch {
      shouldExec = true;
    }

    let svgContent;

    if (shouldExec) {
      await execFileAsync('lilypond', ['--svg', '-dcrop', '--define-default', 'no-point-and-click', '--silent', '--output', `_lilypond/${id}`, `_lilypond/${id}.ly`]);
      const croppedSvgContent = await readFile(croppedSvgFile, 'utf-8');
      svgContent = optimize(croppedSvgContent, { path: svgFile }).data;
      await Promise.all([
        writeFile(svgFile, svgContent),
        rm(croppedSvgFile)
      ]);
    }

    if (!svgContent) {
      svgContent = readFile(svgFile, 'utf-8');
    }

    console.log(`${shouldWriteLy ? '📦 compiled' : shouldExec ? '♻️ recompiled' : '☕️ served'} ${id}.ly in ${durationToString(new Date().valueOf() - before.valueOf())}`);

    return svgContent;
  });
}