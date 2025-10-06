import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { randomUUID } from 'node:crypto';
import { writeFile, readFile, rm } from 'node:fs/promises';

import memoize from 'memoize';

const execFileAsync = promisify(execFile);

export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory('src');
  eleventyConfig.addPairedAsyncShortcode('lilypond', memoize(async content => {
    const uuid = randomUUID();

    await writeFile(`${uuid}.ly`, content);

    const { stderr } = await execFileAsync('lilypond', ['--svg', '-dcrop', '--define-default', 'no-point-and-click', '--silent', '--output', uuid, `${uuid}.ly`]);

    const svg = stderr ? null : await readFile(`${uuid}.cropped.svg`, 'utf-8');

    await Promise.all([rm(`${uuid}.ly`), rm(`${uuid}.svg`), rm(`${uuid}.cropped.svg`)]);

    if (svg) {
      return svg;
    } else {
      throw new Error(stderr);
    }
  }));
}