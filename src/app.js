// Version 2: her light, then the reel.
//
// The page opens on her light (light.js). Touching a ray shows its work; touching it
// again opens the ray into that work, and the reel (reel.js) plays the rooms of
// version 1 like her stories, with its twelve moves between works. Every work and
// stop has its own address (#P05, #P05/3); every slide stays one click from its
// credit and original file.

import './style.css';
import './v2.css';
import { rooms } from './rooms.js';
import assets from './scroll-assets.json';
import plates from './plates.json';
import slots from './v2-assets.json';
import { mountReel } from './reel.js';
import { mountLight, RAYS } from './light.js';
import { sample } from './stage.js';
import { mountCollection } from './collection.js';
import { createScore } from './sound.js';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const url = path => window.__carryFiles?.[path] ?? new URL(path, document.baseURI).href;
const liveOrigin = 'https://carryistic.vercel.app/';
const repository = 'https://github.com/bobshenruililin/Carryistic';
const colourOf = Object.fromEntries(RAYS);
const indexOf = id => rooms.findIndex(room => room.id === id);
const instagramOf = id => plates.find(plate => plate.postId === id)?.instagramUrl;
const works = Object.fromEntries(rooms.map((room, i) => [room.id, { title: room.title, slides: room.slides.length, ground: room.ground, index: i }]));
const pad = n => String(n).padStart(2, '0');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}
function external(label, href) {
  const a = element('a', label + ' ↗');
  Object.assign(a, { href, target: '_blank', rel: 'noreferrer' });
  return a;
}

const landing = $('#landing'), reelUI = $('#reel-ui'), stageEl = $('#stage');
let mode = 'light';

// ---- Sound: on by default, from the first gesture ------------------------------------
const score = createScore(url, slots);
const soundButton = $('#sound');
// The single-file edition carries no music.
if (window.__carryFiles && !window.__carryFiles['sound/E3-night.mp3']) soundButton.hidden = true;
function showSound() {
  soundButton.setAttribute('aria-pressed', String(score.on));
  soundButton.setAttribute('aria-label', score.on ? 'Sound on' : 'Sound off');
}
showSound();
soundButton.addEventListener('click', () => { score.unlock(); score.toggle(); showSound(); });
const unlock = () => { score.unlock(); for (const type of ['pointerdown', 'keydown', 'touchend']) removeEventListener(type, unlock, true); };
for (const type of ['pointerdown', 'keydown', 'touchend']) addEventListener(type, unlock, true);
document.addEventListener('visibilitychange', () => (document.hidden ? score.pause() : score.resume()));
score.setWork('light');

// ---- Her light --------------------------------------------------------------------------
const lit = $('#lit'), hello = $('.hello');
let litWork = null;
const light = mountLight($('#light'), {
  works,
  url,
  onLit(work, how) {
    litWork = work;
    lit.hidden = !work;
    hello.classList.toggle('quiet', !!work);
    if (!work) return;
    $('.lit-chip', lit).style.background = work.color;
    $('.lit-t', lit).textContent = work.title;
    lit.classList.toggle('touched', how !== 'tour');
    lit.setAttribute('aria-label', `Enter ${work.title}`);
  },
  onRay: i => score.note(i),
  onEnter(work) {
    score.effect('open');
    score.setWork(work.id);
    landing.classList.add('entering');
  },
  onEntered: id => openWork(indexOf(id)),
});
lit.addEventListener('click', () => { if (litWork) light.enter(litWork.id); });
addEventListener('keydown', event => {
  if (mode !== 'light' || document.querySelector('dialog[open]') || !$('#works').hidden) return;
  if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') { event.preventDefault(); light.select((light.active < 0 ? 1 : light.active) - 1); }
  if (event.key === 'ArrowRight' || event.key === 'ArrowUp') { event.preventDefault(); light.select(light.active + 1); }
  if (event.key === 'Enter' && light.active >= 0 && event.target === document.body) light.enter(light.works[light.active].id);
});

// ---- The reel ----------------------------------------------------------------------------
const bars = $('#bars'), title = $('#title'), ticks = $('#ticks'), held = $('#held');
let titleTimer = 0;
const reel = mountReel({
  stage: stageEl,
  rooms,
  assets,
  url,
  onOpenPlate: id => openPlate(id),
  onRoom(room, i) {
    score.setWork(room.id);
    document.documentElement.dataset.ink = room.ink;
    $('meta[name="theme-color"]').content = room.ground;
    bars.replaceChildren(...room.holds.map(() => element('i')));
    [...ticks.children].forEach((tick, j) => tick.toggleAttribute('aria-current', j === i));
    $('.title-n', title).textContent = pad(i + 1);
    $('.title-t', title).textContent = room.title;
    title.classList.add('shown');
    clearTimeout(titleTimer);
    titleTimer = setTimeout(() => { if (held.hidden) title.classList.remove('shown'); }, 3400);
  },
  onStop(stop, room) {
    [...bars.children].forEach((bar, k) => { bar.style.setProperty('--fill', k < stop.k ? 1 : 0); });
    const address = `#${room.id}/${stop.k + 1}`;
    if (mode === 'reel' && location.hash !== address && !location.hash.startsWith('#work-')) history.replaceState(null, '', address);
  },
  onTick(fill) {
    const stop = reel?.stop;
    if (stop && bars.children[stop.k]) bars.children[stop.k].style.setProperty('--fill', fill.toFixed(3));
  },
  onGesture(kind, value) {
    if (kind === 'move') score.effect(value.exit?.kind === 'flood' ? 'flood' : value.exit?.type);
    else if (kind === 'hold') showHeld(value);
    else if (kind === 'down') backToLight();
    else if (kind === 'up') openWorks();
  },
  onEnd: () => backToLight(),
});
for (const [i, room] of rooms.entries()) {
  const tick = element('i');
  tick.style.background = colourOf[room.id];
  tick.title = `${pad(i + 1)} ${room.title}`;
  ticks.append(tick);
}
ticks.addEventListener('click', () => openWorks());

// Hold: the reel pauses and the picture's work, post and every slide are one touch away.
function visibleSlide() {
  const stop = reel.stop, room = rooms[stop.i];
  const p = stop.G - stop.i;
  let best = null;
  for (const layer of reel.view.rooms[stop.i].layers) {
    if (layer.kind !== 'img' || !layer.id) continue;
    const v = sample(layer.keys, p, false);
    if (v && v.o > .5 && (!best || (layer.z || 0) >= (best.z || 0))) best = layer;
  }
  return best?.id || room.slides[0];
}
function showHeld(on) {
  held.hidden = !on;
  document.body.classList.toggle('held-on', on);
  title.classList.toggle('shown', on);
  if (!on) return;
  const room = rooms[reel.stop.i], slide = visibleSlide();
  $('.held-n', held).textContent = `${pad(reel.stop.i + 1)} · slide ${Number(slide.slice(4))} of ${room.slides.length}`;
  $('.held-t', held).textContent = room.title;
  const every = element('button', 'Every slide');
  every.type = 'button';
  every.addEventListener('click', () => openPlate(slide));
  $('.held-links', held).replaceChildren(external('Instagram', instagramOf(room.id)), every);
}

function openWork(i, { k = null, cut = false } = {}) {
  if (i < 0) return;
  mode = 'reel';
  closeWorks();
  landing.hidden = true;
  landing.classList.remove('entering');
  light.hide();
  reelUI.hidden = false;
  document.body.dataset.mode = 'reel';
  reel.open(i, { k, cut });
}
function backToLight() {
  if (mode === 'light') return;
  mode = 'light';
  reel.hide();
  showHeld(false);
  reelUI.hidden = true;
  landing.hidden = false;
  document.body.dataset.mode = 'light';
  document.documentElement.dataset.ink = 'light';
  $('meta[name="theme-color"]').content = '#05070a';
  history.replaceState(null, '', location.pathname + location.search);
  score.setWork('light');
  light.show();
}
$('#mark').addEventListener('click', backToLight);
$('#play').addEventListener('click', () => {
  score.unlock();
  score.setWork(rooms[0].id);
  openWork(0);
});

// ---- All works: the fan laid flat --------------------------------------------------------
const worksPanel = $('#works');
const worksList = $('#works-list');
for (const [id, color] of RAYS) {
  const work = works[id];
  const item = element('li');
  const button = element('button');
  button.type = 'button';
  button.style.setProperty('--ray', color);
  button.append(element('span', pad(work.index + 1), 'works-n'), element('span', work.title, 'works-t'), element('span', `${work.slides}`, 'works-c'));
  button.setAttribute('aria-label', `${pad(work.index + 1)} ${work.title}, ${work.slides} slide${work.slides > 1 ? 's' : ''}`);
  button.addEventListener('click', () => {
    closeWorks();
    if (mode === 'light') light.enter(id);
    else openWork(work.index, { cut: true });
  });
  item.append(button);
  worksList.append(item);
}
function openWorks() {
  worksPanel.hidden = false;
  requestAnimationFrame(() => worksPanel.classList.add('open'));
  reel.pause(true);
  $('button', worksList)?.focus({ preventScroll: true });
}
function closeWorks() {
  worksPanel.classList.remove('open');
  worksPanel.hidden = true;
  reel.pause(false);
}
$('.works-close', worksPanel).addEventListener('click', closeWorks);
worksPanel.addEventListener('keydown', event => { if (event.key === 'Escape') closeWorks(); });

// ---- Every slide stays one click from its credit and original file ------------------------
const platesDialog = $('#plates');
let collectionMounted = false;
function openPlate(id) {
  const hash = '#work-' + id;
  if (location.hash !== hash) history.pushState(null, '', hash);
  if (!platesDialog.open) platesDialog.showModal();
  if (!collectionMounted) { mountCollection($('#collection'), { asset: url, onlineBase: liveOrigin }); collectionMounted = true; }
  else window.dispatchEvent(new HashChangeEvent('hashchange'));
  $('.collection-stage', platesDialog)?.focus({ preventScroll: true });
}
for (const dialog of $$('dialog')) {
  $('.sheet-close', dialog).addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    dialog.querySelectorAll('video').forEach(video => video.pause());
    if (dialog === platesDialog && location.hash.startsWith('#work-')) {
      const stop = reel.stop;
      history.replaceState(null, '', mode === 'reel' && stop ? `#${rooms[stop.i].id}/${stop.k + 1}` : location.pathname + location.search);
    }
    score.duck(false);
    reel.pause(false);
  });
  new MutationObserver(() => { if (dialog.open) { score.duck(true); reel.pause(true); } }).observe(dialog, { attributes: true, attributeFilter: ['open'] });
}

// ---- Credits ------------------------------------------------------------------------------
const info = $('#info'), infoBody = $('#info-body');
function showCredits() {
  const list = element('ul', undefined, 'credit-list');
  for (const line of [
    'Paintings, the Fly compositions, the graphic edits and the travel posts were posted by Carry as @carryistic.',
    'To Bleed in Liquid Gold and First Weeks at RISD were posted by @20.09.07.29 and appear on Carry’s grid.',
    'The record-store portraits credit @bigartparty for photography. The record-store shoot was posted by @bigartparty with help from @ca.m.z. The graphic pose studies credit @bigartparty as model.',
    'Museum works and architecture photographed in DC Chronicles, Streets of New York, Italy in motion and Domus Dei belong to their makers and appear as Carry saw them.',
    'The opening is Carry’s own profile picture. Each ray takes its colour from its work.',
    'Opus directed the light, the reel and the moves between works. Higgsfield generated the moving glints, dusk light, water and paper for this edition. The figures in Fly come from Carry’s original photograph throughout.',
    'The turning sculpture in To Bleed in Liquid Gold is a 3D reconstruction (Tripo, through Higgsfield) from Carry’s photographs and filmed orbit, not a scan; her own film of the object plays first. The music was generated with ElevenLabs Music through Higgsfield.',
  ]) list.append(element('li', line));
  const links = element('p', undefined, 'sheet-links');
  links.append(external('Direction', repository + '/blob/review/frontend-narrative/direction/plan-v2.md'), external('Source archive', repository + '/tree/main/archive'));
  const heading = element('h2', 'Credits');
  heading.id = 'info-title';
  infoBody.replaceChildren(element('p', 'Sources and interpretation', 'kicker'), heading, list, links);
  if (!info.open) info.showModal();
}
for (const button of $$('[data-open]')) {
  button.addEventListener('click', () => {
    if (button.dataset.open === 'works') openWorks();
    if (button.dataset.open === 'credits') showCredits();
  });
}

// ---- Arriving by address ------------------------------------------------------------------
function route() {
  const plate = location.hash.match(/^#work-(P\d{2}-\d{2})$/)?.[1];
  if (plate) { if (!platesDialog.open) openPlate(plate); return true; }
  const place = location.hash.match(/^#(P\d{2})(?:\/(\d+))?$/);
  if (place && indexOf(place[1]) >= 0) {
    const i = indexOf(place[1]);
    const k = place[2] ? Math.min(Number(place[2]), reel.rooms[i].holds.length) - 1 : 0;
    openWork(i, { k, cut: true });
    return true;
  }
  return false;
}
addEventListener('hashchange', route);
document.body.dataset.mode = 'light';
document.documentElement.dataset.ink = 'light';
light.show({ fresh: true });
route();
if (reducedMotion.matches) document.body.classList.add('still');
window.carry = { light, reel, score, openWork, backToLight };
