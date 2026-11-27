import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { rooms } from '../src/rooms.js';
import { buildRoom } from '../src/stage.js';
import { RAYS } from '../src/light.js';

const root = new URL('../', import.meta.url);
const exists = path => access(new URL(path, root)).then(() => true, () => false);

test('her light has one ray per work, each in a colour, and its picture and figure are on disk', async () => {
  assert.deepEqual(RAYS.map(([id]) => id).sort(), rooms.map(room => room.id).sort());
  for (const [id, colour] of RAYS) assert.match(colour, /^#[0-9a-f]{6}$/, id);
  for (const file of ['public/landing/photo.webp', 'public/landing/figure.png', 'archive/profile/carry-outline.json']) assert.ok(await exists(file), file);
  for (const [id] of RAYS) assert.ok(await exists(`public/scroll/h/${id}-01.webp`), `${id}'s first slide shows inside its ray`);
});

test('every work stops at least once, in order, and its move between works starts at a stop', () => {
  for (const spec of rooms) {
    const room = buildRoom(spec);
    assert.ok(room.holds.length >= 1, room.id);
    for (const [k, h] of room.holds.entries()) {
      assert.ok(h > 0 && h <= 1, `${room.id} stop ${k} inside the room`);
      if (k) assert.ok(h > room.holds[k - 1], `${room.id} stops in order`);
    }
    if (room.exitAt < 1) assert.ok(room.holds.some(h => Math.abs(h - room.exitAt) < 1e-9), `${room.id}'s move begins at a stop`);
  }
  const last = buildRoom(rooms.at(-1));
  assert.equal(last.holds.at(-1), 1, 'the film ends on its last picture');
});

test('the page is version 2: her light first, then the reel', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(html, /src="\/src\/app\.js"/);
  assert.match(html, /Hi, I’m Carry\./);
  for (const id of ['light', 'stage', 'works', 'plates']) assert.match(html, new RegExp(`id="${id}"`), id);
});
