import { readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const types = { '.webp': 'image/webp', '.jpg': 'image/jpeg', '.mp4': 'video/mp4', '.mp3': 'audio/mpeg', '.glb': 'model/gltf-binary', '.woff2': 'font/woff2', '.vtt': 'text/vtt' };

async function dataUrl(path) {
  const type = types[extname(path)];
  if (!type) throw new Error(`Unknown offline media type for ${path}`);
  return `data:${type};base64,${(await readFile(path)).toString('base64')}`;
}

async function* walk(directory) {
  for (const name of (await readdir(directory)).sort()) {
    const path = join(directory, name);
    if ((await stat(path)).isDirectory()) yield* walk(path);
    else yield path;
  }
}

// The scroll's stills, thumbnails, reel and orbit frames, generated passages and
// the first film. The viewer shows each still from the scroll copy; the three
// source movies and full-resolution files open online.
const assets = {};
// The score stays online only; the sound button hides itself in this edition.
for (const group of ['scroll', 'motion', 'sculpture', 'film']) {
  try {
    for await (const path of walk(join(dist, group))) assets[relative(dist, path).split('\\').join('/')] = await dataUrl(path);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}

const html = await readFile(join(dist, 'index.html'), 'utf8');
const moduleTag = html.match(/<script\b[^>]*\bsrc="([^"]+)"[^>]*><\/script>/);
const styleTag = html.match(/<link\b[^>]*\brel="stylesheet"[^>]*\bhref="([^"]+)"[^>]*>/);
if (!moduleTag || !styleTag) throw new Error('Expected one compiled module and one stylesheet in the Vite entry.');

const js = await readFile(resolve(dist, moduleTag[1]), 'utf8');
const cssPath = resolve(dist, styleTag[1]);
let css = await readFile(cssPath, 'utf8');
for (const [expression, url] of [...css.matchAll(/url\(["']?([^)'"\s]+)["']?\)/g)]) {
  if (url.startsWith('data:')) continue;
  css = css.replaceAll(expression, `url("${await dataUrl(resolve(dirname(cssPath), url))}")`);
}

const embedded = `<script>window.__carryFiles=${JSON.stringify(assets)}</script>\n`;
const script = `<script type="module">${js.replace(/<\/script/gi, '<\\/script')}</script>`;
const offline = html.replace(/<link\b[^>]*\brel="preload"[^>]*>\s*/g, '')
  .replace(moduleTag[0], '')
  .replace(styleTag[0], () => `<style>${css}</style>`)
  .replace('</body>', () => `${embedded}${script}\n</body>`);
await writeFile(join(dist, 'Carryistic.html'), offline);
console.log(`Offline edition: ${Object.keys(assets).length} embedded assets, ${(Buffer.byteLength(offline)/1e6).toFixed(1)} MB`);
