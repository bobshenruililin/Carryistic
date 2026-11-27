import assert from 'node:assert/strict';
import { access, readFile, stat } from 'node:fs/promises';
import { test } from 'node:test';
import { rooms } from '../src/rooms.js';
import { CHAPTERS, chapterOf } from '../src/sound.js';

const root = new URL('../', import.meta.url);
const exists = path => access(new URL(path, root)).then(() => true, () => false);

test('the sculpture follows Carry’s film and is light enough for a phone', async () => {
  const room = rooms.find(r => r.id === 'P08');
  const layers = room.beats.flatMap(beat => beat.layers);
  const film = layers.findIndex(layer => layer.kind === 'flip' && layer.set === 'orbit' && layer.drag);
  const model = layers.findIndex(layer => layer.kind === 'model');
  assert.ok(film >= 0 && model > film, 'her filmed orbit comes before the reconstruction');
  assert.match(layers[model].hint, /reconstruction/, 'the reconstruction says what it is');
  const file = new URL(`public/${layers[model].file}`, root);
  const bytes = await readFile(file);
  assert.equal(bytes.toString('latin1', 0, 4), 'glTF');
  assert.ok((await stat(file)).size < 8e6, 'under 8 MB');
  const json = JSON.parse(bytes.toString('utf8', 20, 20 + bytes.readUInt32LE(12)));
  assert.deepEqual(json.extensionsRequired, ['KHR_mesh_quantization']);
});

test('every room belongs to exactly one chapter of the score, and every cue is on disk', async () => {
  const all = Object.values(CHAPTERS).flat();
  assert.deepEqual([...all].sort(), rooms.map(room => room.id).sort());
  assert.equal(new Set(all).size, all.length);
  for (const room of rooms) assert.ok(chapterOf(room.id), room.id);
  for (const name of Object.keys(CHAPTERS)) assert.ok(await exists(`public/sound/E3-${name}.mp3`), name);
});
