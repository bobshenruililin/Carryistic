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

test('the scroll preserves each room’s art and gives Carry the choice about the linen', () => {
  const byRoom = new Map(rooms.map(room => [room.id, room]));
  for (const plate of plates) {
    const room = byRoom.get(plate.postId);
    assert.ok(room.slides.includes(plate.id), plate.id);
    const layers = room.beats.flatMap(beat => beat.layers);
    const strip = layers.find(layer => layer.kind === 'strip');
    if (plate.id === 'P07-11') {
      assert.ok(!strip?.ids.includes(plate.id), 'the linen awaits Carry’s decision before entering the strip');
      assert.ok(!layers.some(layer => layer.id === plate.id), 'the linen awaits Carry’s decision before entering the ending');
      continue;
    }
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

test('every room hands on with its own move, never the same one twice in a row', () => {
  const moves = ['cross', 'flood', 'shutters', 'window', 'rise', 'iris', 'spin', 'flash', 'star', 'flip', 'slices', 'drain', 'unfold'];
  for (const [i, room] of rooms.entries()) {
    const layers = room.beats.flatMap(beat => beat.layers);
    if (i === rooms.length - 1) { assert.equal(room.handoff, 'end'); continue; }
    const exit = layers.find(layer => layer.kind === 'exit' || layer.kind === 'flood');
    assert.ok(exit, `${room.id} has no exit beat`);
    assert.equal(exit.kind === 'flood' ? 'flood' : exit.type, room.handoff, room.id);
    assert.ok(moves.includes(room.handoff), room.handoff);
    if (exit.kind === 'flood') assert.equal(exit.color, rooms[i + 1].ground, `${room.id} floods into ${rooms[i + 1].id}`);
    if (i) assert.notEqual(room.handoff, rooms[i - 1].handoff, `${rooms[i - 1].id} and ${room.id} use the same move`);
  }
  const used = rooms.slice(0, -1).map(room => room.handoff);
  assert.ok(new Set(used).size >= 12, 'at least twelve different moves across fourteen handoffs');
});

test('a generated passage is used only once Astra delivers it', async () => {
  const layers = rooms.flatMap(room => room.beats.flatMap(beat => beat.layers));
  for (const [key, clip] of Object.entries(motion)) {
    assert.match(key, /^[HM]\d+$/);
    assert.match(clip.file, /^motion\/[HM]\d+\.mp4$/);
    assert.equal(typeof clip.ready, 'boolean');
    assert.equal(layers.filter(layer => layer.kind === 'video' && layer.file === clip.file).length, clip.ready ? 1 : 0, key);
    if (clip.ready) assert.ok(await exists(`public/${clip.file}`), `${key} is marked ready but ${clip.file} is missing`);
  }
});
