import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { rooms } from '../src/rooms.js';

const root = new URL('../', import.meta.url);
const read = async path => JSON.parse(await readFile(new URL(path, root), 'utf8'));
const plates = await read('src/plates.json');
const assets = await read('src/scroll-assets.json');
const motion = await read('src/motion.json');
const exists = path => access(new URL(path, root)).then(() => true, () => false);

test('the scroll follows the light: dusk, night, gold, neon, day, studio', () => {
  assert.deepEqual(rooms.map(room => room.id), [
    'P01', 'P02', 'P03', 'P13', 'P15', 'P08', 'P11', 'P09', 'P10', 'P05', 'P06', 'P04', 'P14', 'P12', 'P07',
  ]);
  for (const room of rooms) {
    assert.match(room.ground, /^#[0-9a-f]{6}$/, room.id);
    assert.ok(['light', 'dark'].includes(room.ink), room.id);
  }
});

test('every one of the 153 positions is in its own room, large and in its strip', () => {
  const byRoom = new Map(rooms.map(room => [room.id, room]));
  for (const plate of plates) {
    const room = byRoom.get(plate.postId);
    assert.ok(room.slides.includes(plate.id), plate.id);
    const layers = room.beats.flatMap(beat => beat.layers);
    const strip = layers.find(layer => layer.kind === 'strip');
    assert.ok(strip?.ids.includes(plate.id), `${plate.id} is missing from the strip`);
    if (plate.id === 'P03-01') assert.ok(layers.some(layer => layer.kind === 'flip' && layer.set === 'reel'));
    else assert.ok(layers.some(layer => layer.id === plate.id), `${plate.id} never appears large`);
  }
});

test('every still, thumbnail and flipbook frame the scroll asks for is on disk', async () => {
  for (const plate of plates) {
    assert.ok(assets.hero[plate.id] && assets.thumb[plate.id], plate.id);
    assert.ok(await exists(`public/scroll/h/${plate.id}.webp`), plate.id);
    assert.ok(await exists(`public/scroll/t/${plate.id}.webp`), plate.id);
  }
  for (const set of ['reel', 'orbit']) {
    for (const [i] of assets[set].times.entries()) assert.ok(await exists(`public/scroll/${set}/${String(i).padStart(3, '0')}.webp`), `${set} ${i}`);
  }
});

test('rooms change ground through a flood or a crossfade, and the last one ends the film', () => {
  for (const [i, room] of rooms.entries()) {
    const last = room.beats.at(-1).layers;
    if (i === rooms.length - 1) { assert.equal(room.handoff, 'end'); continue; }
    if (room.handoff === 'flood') {
      const flood = last.find(layer => layer.kind === 'flood');
      assert.equal(flood?.color, rooms[i + 1].ground, `${room.id} floods into ${rooms[i + 1].id}`);
    } else {
      assert.equal(room.handoff, 'cross', room.id);
    }
  }
});

test('a generated passage is used only once Astra delivers it', async () => {
  for (const [key, clip] of Object.entries(motion)) {
    assert.match(key, /^H\d+$/);
    assert.match(clip.file, /^motion\/H\d+\.mp4$/);
    assert.equal(typeof clip.ready, 'boolean');
    if (clip.ready) assert.ok(await exists(`public/${clip.file}`), `${key} is marked ready but ${clip.file} is missing`);
  }
});
