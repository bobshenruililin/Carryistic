export const viewNames = { gesture: 'The fall', room: 'The room', object: 'The orbit' };
export const kinds = Object.keys(viewNames);
const noteLimit = 1800;

export function cleanReview(input) {
  if (!input || typeof input !== 'object' || input.version !== 1 || typeof input.note !== 'string') throw new Error('This response format is unavailable.');
  const views = {};
  for (const key of kinds) {
    const value = input.views?.[key];
    if (Number.isInteger(value) && value >= 0 && value <= 100) views[key] = value;
  }
  return { version: 1, note: Array.from(input.note).slice(0, noteLimit).join(''), views };
}

export function encodeReview(value) {
  const bytes = new TextEncoder().encode(JSON.stringify(cleanReview(value)));
  return btoa(Array.from(bytes, byte => String.fromCharCode(byte)).join('')).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
}

export function decodeReview(text) {
  if (!text || text.length > 19000 || !/^[\w-]+$/.test(text)) throw new Error('This response link is incomplete.');
  const raw = atob(text.replaceAll('-', '+').replaceAll('_', '/'));
  const bytes = Uint8Array.from(raw, char => char.charCodeAt(0));
  return cleanReview(JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes)));
}
