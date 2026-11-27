import './style.css';
import { mountScroll } from './scroll.js';
import { rooms } from './rooms.js';
import assets from './scroll-assets.json';
import { mountCollection } from './collection.js';
import { cleanReview, decodeReview, encodeReview } from './review.js';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const repository = 'https://github.com/bobshenruililin/Carryistic';
const liveOrigin = 'https://carryistic.vercel.app/';
const url = path => window.__carryFiles?.[path] ?? new URL(path, document.baseURI).href;

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}
function external(label, href) {
  const a = element('a', label + ' ↗');
  a.href = href;
  a.target = '_blank';
  a.rel = 'noreferrer';
  return a;
}

// The rail: one square per room, in the colour Carry's own slide gave that room.
const rail = $('#rail');
const label = $('.label');
const stage = $('#stage');
const railButtons = rooms.map((room, index) => {
  const button = element('button');
  button.type = 'button';
  button.style.setProperty('--swatch', room.ground);
  button.setAttribute('aria-label', `${String(index + 1).padStart(2, '0')} ${room.title}`);
  button.addEventListener('click', () => scroll.jump(index));
  rail.append(button);
  return button;
});

const scroll = mountScroll({
  stage,
  track: $('#track'),
  rooms,
  assets,
  url,
  onOpenPlate: id => openPlate(id),
  onRoom(room, index) {
    document.documentElement.dataset.ink = room.ink;
    document.querySelector('meta[name="theme-color"]').content = room.ground;
    railButtons.forEach((button, i) => button.toggleAttribute('aria-current', i === index));
    label.classList.remove('shown');
    requestAnimationFrame(() => {
      $('.label-n', label).textContent = String(index + 1).padStart(2, '0');
      $('.label-t', label).textContent = room.title;
      label.classList.add('shown');
    });
  },
});
addEventListener('scroll', () => document.body.classList.toggle('moved', scrollY > 40), { passive: true });

// Every slide stays one click from its credit and original file.
const plates = $('#plates');
let collectionMounted = false;
function openPlate(id) {
  const hash = '#work-' + id;
  if (location.hash !== hash) history.pushState(null, '', hash);
  if (!plates.open) plates.showModal();
  // The viewer reads the slide from the address; once mounted it follows hash changes.
  if (!collectionMounted) {
    mountCollection($('#collection'), { asset: url, onlineBase: liveOrigin });
    collectionMounted = true;
  } else {
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }
  // Arrow keys step through slides from the picture itself.
  $('.collection-stage', plates)?.focus({ preventScroll: true });
}
function closeSheets(dialog) {
  dialog.querySelectorAll('video').forEach(video => video.pause());
  if (dialog === plates && location.hash.startsWith('#work-')) history.replaceState(null, '', location.pathname + location.search);
}
for (const dialog of $$('dialog')) {
  $('.sheet-close', dialog).addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => closeSheets(dialog));
}
function linkedPlate() {
  return location.hash.match(/^#work-(P\d{2}-\d{2})$/)?.[1];
}
addEventListener('hashchange', () => { const id = linkedPlate(); if (id && !plates.open) openPlate(id); });

// The quiet things at the end of the film.
const info = $('#info');
const infoBody = $('#info-body');
function sheet(title, kicker, ...content) {
  const heading = element('h2', title);
  heading.id = 'info-title';
  infoBody.replaceChildren(element('p', kicker, 'kicker'), heading, ...content);
  if (!info.open) info.showModal();
}
function showCredits() {
  const list = element('ul', undefined, 'credit-list');
  for (const line of [
    'Paintings, the Fly compositions, the graphic edits and the travel posts were posted by Carry as @carryistic.',
    'To Bleed in Liquid Gold and First Weeks at RISD were posted by @20.09.07.29 and appear on Carry’s grid.',
    'The record-store portraits credit @bigartparty for photography. The record-store shoot was posted by @bigartparty with help from @ca.m.z. The graphic pose studies credit @bigartparty as model.',
    'Museum works and architecture photographed in DC Chronicles, Streets of New York, Italy in motion and Domus Dei belong to their makers and appear as Carry saw them.',
    'The order of the scroll, its colour handoffs and any generated passage between two of Carry’s images were made for this portfolio and are recorded in the repository.',
  ]) list.append(element('li', line));
  const links = element('p', undefined, 'sheet-links');
  links.append(external('Direction', repository + '/blob/main/direction/scroll-direction.md'), external('Source archive', repository + '/tree/main/archive'));
  sheet('Credits', 'Sources and interpretation', list, links);
}
function showFilm() {
  const video = element('video');
  video.controls = true;
  video.playsInline = true;
  video.preload = 'metadata';
  video.src = url('film/afterimage.mp4');
  const track = element('track');
  Object.assign(track, { kind: 'captions', label: 'English · sound cues', srclang: 'en', src: url('film/afterimage.en.vtt') });
  video.append(track);
  video.setAttribute('aria-label', 'Afterimage, a 22-second wordless film with sound captions');
  const links = element('p', undefined, 'sheet-links');
  links.append(external('Shot ledger', repository + '/blob/main/film/shots.csv'));
  sheet('Afterimage', 'The first film · 22 seconds', video, element('p', 'The first cut of this portfolio: one glance through photograph, pencil and oil, the fall in Fly, a record that becomes a gold rim, and the basketball.'), links);
}

// Carry's notebook: words that travel in a link or a file and nowhere else.
const storageKey = 'carryistic.dream-note.v1';
let draft = { version: 1, note: '', views: {} };
try { const stored = localStorage.getItem(storageKey); if (stored) draft = cleanReview(JSON.parse(stored)); } catch { /* A private window can still share by link or file. */ }
function persist() { try { localStorage.setItem(storageKey, JSON.stringify(draft)); } catch { /* Sharing works without local storage. */ } }
function toast(text) {
  const node = $('#toast');
  node.textContent = text;
  node.classList.add('visible');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => node.classList.remove('visible'), 2400);
}
function showNote(shared) {
  const form = element('form', undefined, 'note');
  const field = element('label', 'Your words');
  field.htmlFor = 'note-text';
  const text = element('textarea');
  Object.assign(text, { id: 'note-text', rows: 6, maxLength: 1800, placeholder: 'A picture, a cut, a moment you would hold longer…', value: draft.note });
  const status = element('p', 'Your words stay on this device until you make a link or save a file.', 'note-status');
  status.setAttribute('role', 'status');
  const make = element('button', 'Make a response link', 'note-primary');
  make.type = 'submit';
  const save = element('button', 'Save as a file');
  save.type = 'button';
  const output = element('input');
  Object.assign(output, { type: 'text', readOnly: true, hidden: true });
  output.setAttribute('aria-label', 'Response link');
  text.addEventListener('input', () => { draft.note = text.value; persist(); output.hidden = true; });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const base = location.protocol === 'file:' ? liveOrigin : location.href;
    output.value = base.split('#')[0] + '#response=' + encodeReview(draft);
    output.hidden = false;
    output.select();
    try { await navigator.clipboard.writeText(output.value); toast('Link copied'); } catch { status.textContent = 'Copy the link above to send it.'; }
  });
  save.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(cleanReview(draft), null, 2)], { type: 'application/json' });
    const a = element('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'carryistic-note.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });
  const actions = element('div', undefined, 'note-actions');
  actions.append(make, save);
  form.append(field, text, actions, output, status);
  sheet(shared ? 'A note for the next edit' : 'What stayed with you?', shared ? 'Shared with you' : 'For Carry and the editors', form);
}
const prefix = '#response=';
if (location.hash.startsWith(prefix)) {
  try {
    draft = decodeReview(location.hash.slice(prefix.length));
    persist();
    showNote(true);
  } catch (error) {
    toast(error.message);
  }
}

for (const button of $$('[data-open]')) {
  button.addEventListener('click', () => {
    const kind = button.dataset.open;
    if (kind === 'plates') openPlate(rooms[0].slides[0]);
    else if (kind === 'credits') showCredits();
    else if (kind === 'film') showFilm();
    else if (kind === 'note') showNote(false);
  });
}

if (linkedPlate()) openPlate(linkedPlate());
