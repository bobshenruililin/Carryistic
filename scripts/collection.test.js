import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { test } from 'node:test';

const root = new URL('../', import.meta.url);
const plates = JSON.parse(await readFile(new URL('src/plates.json', root), 'utf8'));

test('every source position has an ordered, credited, self-hosted edition', async () => {
  const source = await readFile(new URL('archive/Image index.csv', root), 'utf8');
  const ids = Array.from(source.matchAll(/^(P\d\d-\d\d),/gm), match => match[1]);
  assert.deepEqual(plates.map(plate => plate.id), ids);
  assert.equal(new Set(plates.map(plate => plate.postId)).size, 15);
  assert.equal(plates.filter(plate => plate.kind === 'image').length, 150);
  const files = new Set(await readdir(new URL('public/plates/', root)));
  for (const plate of plates) {
    assert.ok(plate.width > 0 && plate.height > 0 && files.has(plate.filename), plate.id);
    assert.ok(plate.observation && plate.credit && plate.instagramUrl && plate.originalUrl, plate.id);
  }
  const films = plates.filter(plate => plate.kind === 'video');
  assert.equal(films.length, 3);
  for (const film of films) assert.ok(film.duration > 0 && files.has(film.movie), film.id);
});

test('the two Blackout prints come from a continuous passage in the archived film', async () => {
  const print = JSON.parse(await readFile(new URL('src/blackout-print.json', root), 'utf8'));
  const film = plates.find(plate => plate.id === 'P03-01');
  assert.ok(print.count > 1 && print.count <= print.columns * print.rows);
  assert.equal(print.sourceFrames.length, print.count);
  for (const [i, frame] of print.sourceFrames.entries()) {
    assert.ok(Number.isInteger(frame) && frame / print.sourceFps >= 0 && frame / print.sourceFps < film.duration);
    if (i) assert.ok(frame > print.sourceFrames[i-1]);
  }
});
