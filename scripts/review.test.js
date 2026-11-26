import test from 'node:test';
import assert from 'node:assert/strict';
import { cleanReview, decodeReview, encodeReview } from '../src/review.js';

test('a shared note keeps the artist’s exact words and both slider endpoints', () => {
  const note = { version: 1, note: '红色 🏀\nThe edge, then the hand. <cut>', views: { gesture: 0, object: 100 } };
  const token = encodeReview(note);
  assert.match(token, /^[\w-]+$/);
  assert.deepEqual(decodeReview(token), note);
});

test('limits note length without splitting a character, and omits invalid views', () => {
  const note = '🏀'.repeat(1801);
  const saved = cleanReview({ version: 1, note, views: { gesture: -1, object: 11.5, other: 40 } });
  assert.equal(saved.note, '🏀'.repeat(1800));
  assert.deepEqual(saved.views, {});
});

test('rejects a damaged response and incompatible versions', () => {
  for (const token of ['', '🤍', 'abc=', 'a'.repeat(19001), 'e30', '____']) assert.throws(() => decodeReview(token));
  assert.throws(() => cleanReview({ version: 2, note: '', views: {} }));
});
