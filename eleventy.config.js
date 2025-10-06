import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { hash } from 'node:crypto';
import { writeFile, readFile, rm, access, rename } from 'node:fs/promises';

const execFileAsync = promisify(execFile);

export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory('src');
  eleventyConfig.addPairedShortcode('lilypond', async function (content, id = hash('sha256', content)) {
    try {
      await access(`_lilypond/${id}.ly`);
    } catch {
      await writeFile(`_lilypond/${id}.ly`, content);
    }

    let svg = null;
    try {
      svg = await readFile(`_lilypond/${id}.svg`, 'utf-8');
    } catch {
      const { stderr } = await execFileAsync('lilypond', ['--svg', '-dcrop', '--define-default', 'no-point-and-click', '--silent', '--output', `_lilypond/${id}`, `_lilypond/${id}.ly`]);
      if (!stderr) {
        await rm(`_lilypond/${id}.svg`);
        await rename(`_lilypond/${id}.cropped.svg`, `_lilypond/${id}.svg`);
      }
      svg = await readFile(`_lilypond/${id}.svg`, 'utf-8');
    }

    return svg;
  });
}