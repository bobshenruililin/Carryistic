import './style.css';
import { cleanReview, decodeReview, encodeReview, kinds, viewNames } from './review.js';
import { liveOrigin, repository, works } from './works.js';
import { mountCollection } from './collection.js';
import archive from './archive.json';
import print from './blackout-print.json';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const asset = path => window.__carryFiles?.[path] ?? new URL(path, document.baseURI).href;
const art = name => asset('art/' + name);
for (const img of $$('img[data-art]')) img.src = art(img.dataset.art);
for (const word of $$('[data-ink]')) word.style.setProperty('--type-source', `url("${art(word.dataset.ink)}")`);
for (const a of $$('[data-repo]')) a.href = repository + '/tree/main/' + a.dataset.repo;

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}
function external(label, href) {
  const a = element('a', label.replace(/\s*↗$/, ''));
  const arrow = element('span', undefined, 'arrow');
  arrow.setAttribute('aria-hidden', 'true');
  a.append(' ', arrow);
  a.href = href;
  a.target = '_blank';
  a.rel = 'noreferrer';
  return a;
}
function photo(name, alt) {
  const img = element('img');
  img.src = art(name);
  img.alt = alt;
  img.loading = 'lazy';
  return img;
}
const dialog = $('#detail-dialog');
const dialogBody = $('#dialog-content');
let invoker = null;
function popup(title, label, content, source) {
  pauseFilm();
  if (movingStudy) stopMotion(movingStudy);
  invoker = source || document.activeElement;
  dialogBody.replaceChildren(element('p', label, 'kicker'));
  const heading = element('h2', title);
  heading.id = 'dialog-title';
  dialogBody.append(heading, ...content);
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
}
$('.dialog-close', dialog).addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => {
  dialogBody.querySelectorAll('video').forEach(video => video.pause());
  if (invoker instanceof HTMLElement && invoker.isConnected) invoker.focus({preventScroll:true});
});
function pictureRow(pictures) {
  const row = element('div', undefined, 'detail-pictures');
  for (const [name, caption] of pictures) {
    const figure = element('figure');
    figure.append(photo(name, caption), element('figcaption', caption));
    row.append(figure);
  }
  return row;
}
function showWork(work, source) {
  const links = element('p', undefined, 'dialog-links');
  links.append(external('Source post ↗', work.url), external('Slide index ↗', repository + '/blob/main/archive/Image%20index.csv'));
  popup(work.title, work.medium, [element('p', work.note), pictureRow(work.pictures), element('p', work.credit), links], source);
}
for (const work of works) {
  const card = element('button', undefined, 'work-card');
  card.type = 'button';
  const thumb = element('span', undefined, 'work-thumb');
  thumb.append(photo(work.image, ''));
  card.append(thumb, element('strong', work.title), element('small', work.medium));
  card.addEventListener('click', () => showWork(work, card));
  $('#works').append(card);
}

$('#browse-archive').addEventListener('click', event => {
  const controls = element('div', undefined, 'archive-controls');
  const previous = element('button', '←');
  previous.setAttribute('aria-label', 'Previous post');
  const picker = element('select');
  picker.setAttribute('aria-label', 'Choose an archive post');
  archive.forEach((post, index) => picker.add(new Option(`${post.id} · ${post.title}`, String(index))));
  const next = element('button', '→');
  next.setAttribute('aria-label', 'Next post');
  controls.append(previous, picker, next);
  const sheet = element('img', undefined, 'archive-sheet');
  const credit = element('p', undefined, 'archive-credit');
  const note = element('p');
  const links = element('p', undefined, 'dialog-links');
  const update = index => {
    const post = archive[index];
    picker.value = String(index);
    previous.disabled = index === 0;
    next.disabled = index === archive.length - 1;
    sheet.src = art(post.image);
    sheet.alt = `${post.title}, ${post.count} published ${post.count === 1 ? 'position' : 'positions'} in reading order.`;
    credit.textContent = `${post.id} · Posted by ${post.credit}`;
    note.textContent = post.note;
    links.replaceChildren(external('Original post ↗', post.url), external('Full-resolution files ↗', repository+'/tree/main/archive/artworks/'+encodeURIComponent(post.folder)));
  };
  picker.addEventListener('change', () => update(Number(picker.value)));
  previous.addEventListener('click', () => update(Number(picker.value) - 1));
  next.addEventListener('click', () => update(Number(picker.value) + 1));
  update(0);
  popup('All 15 posts', 'Source archive', [controls, sheet, credit, note, links], event.currentTarget);
});

const video = $('#afterimage');
const stage = $('#film-stage');
const cover = $('#enter-film');
let isFilmOpen = false;
const player = $('.film-player');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const filmTitle = $('.film-title', cover);
const coverImage = $('.cover-image', cover);
cover.addEventListener('pointermove', event => {
  if (event.pointerType === 'touch' || reducedMotion.matches) return;
  const bounds = filmTitle.getBoundingClientRect();
  const amount = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
  cover.style.setProperty('--revealed', (amount * 100).toFixed(1) + '%');
  const imageBounds = coverImage.getBoundingClientRect();
  const imageX = (event.clientX - imageBounds.left) / imageBounds.width;
  cover.style.setProperty('--window-x', (imageX * 100).toFixed(1) + '%');
  cover.classList.toggle('has-window', imageX > .08 && imageX < .98 && event.clientY < bounds.top);
});
cover.addEventListener('pointerleave', () => { cover.style.removeProperty('--revealed'); cover.classList.remove('has-window'); });
cover.addEventListener('focus', () => { if (cover.matches(':focus-visible')) cover.style.setProperty('--revealed', '70%'); });
cover.addEventListener('blur', () => cover.style.removeProperty('--revealed'));
let entryTimer;
function finishOpening() {
  clearTimeout(entryTimer);
  stage.classList.remove('is-opening', 'is-revealing');
  cover.hidden = isFilmOpen;
}
function pauseFilm() {
  for (const media of $$('video')) { if (!media.paused) media.pause(); }
  if (!isFilmOpen) return;
  if (stage.classList.contains('is-opening')) finishOpening();
}
function closeFilm() {
  isFilmOpen = false;
  video.pause();
  finishOpening();
  player.hidden = true;
  cover.disabled = false;
  stage.classList.remove('is-playing');
  cover.focus({preventScroll:true});
}
function playFilm() {
  if (isFilmOpen) return;
  if (movingStudy) stopMotion(movingStudy);
  if (!video.getAttribute('src')) {
    const captions = document.createElement('track');
    captions.kind = 'captions';
    captions.label = 'English · sound cues';
    captions.srclang = 'en';
    captions.src = asset('film/afterimage.en.vtt');
    video.append(captions);
    video.src = asset('film/afterimage.mp4');
  }
  isFilmOpen = true;
  cover.disabled = true;
  player.hidden = false;
  stage.classList.add('is-playing', 'is-opening');
  if (video.ended) video.currentTime = 0;
  if (reducedMotion.matches) finishOpening();
  video.play().catch(() => { if (isFilmOpen) finishOpening(); });
  video.focus({preventScroll:true});
}
document.addEventListener('play', event => {
  if (!(event.target instanceof HTMLMediaElement)) return;
  for (const other of $$('video')) { if (other !== event.target && !other.paused) other.pause(); }
  if (movingStudy) stopMotion(movingStudy);
}, true);
video.addEventListener('playing', () => {
  if (!stage.classList.contains('is-opening')) return;
  if (reducedMotion.matches) return finishOpening();
  stage.classList.add('is-revealing');
  entryTimer = setTimeout(finishOpening, 560);
});
video.addEventListener('error', finishOpening);
cover.addEventListener('click', playFilm);
$('#close-film').addEventListener('click', closeFilm);
document.addEventListener('keydown', event => { if (event.key === 'Escape' && isFilmOpen && !dialog.open && !document.fullscreenElement) closeFilm(); });
video.addEventListener('ended', () => {
  const bounds = stage.getBoundingClientRect();
  if (dialog.open || movingStudy || bounds.bottom < innerHeight * .18 || bounds.top >= innerHeight) return;
  closeFilm();
  $('#spatial-studies').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
});
function showCredits(source) {
  const list = element('ul');
  for (const line of [
    'Carry posted the paintings, Fly photo compositions and graphic edits under @carryistic.',
    'The sculpture and drawing posts were published by @20.09.07.29 and appear on Carry’s grid.',
    'The record-store series credits @bigartparty for photography. The companion shoot credits @ca.m.z for help taking photographs.',
    'The film edit, wordless stereo score and spatial staging were made for this portfolio from the credited works.'
  ]) list.append(element('li',line));
  const links = element('p',undefined,'dialog-links');
  links.append(external('Film ledger ↗',repository+'/blob/main/film/shots.csv'),external('Source archive ↗',repository+'/tree/main/archive'));
  popup('Credits','Source and interpretation',[list,links],source);
}
for (const btn of $$('[data-open]')) btn.addEventListener('click',()=>{
  if (btn.dataset.open==='credits') return showCredits(btn);
  const cues=element('ol');
  for(const line of ['00:00 · The eye moves from photograph to pencil to paint.','00:04 · Four figures fall out of the waterfront and into blocks.','00:09 · The blue block opens on a red cap. Its printed echoes lift to reveal the camera frame.','00:12 · Two hands hold the records. The picture turns around the red label and opens on a gold rim.','00:17 · A basketball returns the dream to the painting and its maker.']) cues.append(element('li',line));
  const experiment = element('details', undefined, 'material-test');
  experiment.append(element('summary', 'See the four-second Higgsfield material test'));
  const clip = element('video');
  clip.controls = true;
  clip.playsInline = true;
  clip.preload = 'none';
  clip.poster = art('liquid-detail.webp');
  clip.setAttribute('aria-label', 'Silent generated camera study of the sculpture’s red beads');
  experiment.addEventListener('toggle', () => {
    if (experiment.open && !clip.hasAttribute('src')) clip.src = asset('film/bead-study.mp4');
    if (!experiment.open) clip.pause();
  });
  experiment.append(clip, element('p', 'Seedance follows the hanging beads to the right. In the finished film, the camera tracks down Carry’s photograph into the bead pile just before the ball drops.'));
  const links=element('p',undefined,'dialog-links');
  links.append(external('Shot ledger ↗',repository+'/blob/main/film/shots.csv'),external('Higgsfield bead test ↗',repository+'/tree/main/film/experiments'));
  popup('Afterimage','Opening film · 22 seconds',[element('p','The same eye holds through a photograph, a pencil line and layers of oil. Later, a record label leads to a gold rim and the basketball. Listen for the bead taps just before the bounce.'),cues,experiment,links],btn);
});

const storageKey = 'carryistic.dream-note.v1';
let draft = {version:1,note:'',views:{}};
try { const stored=localStorage.getItem(storageKey); if(stored) draft=cleanReview(JSON.parse(stored)); } catch { /* Private sessions can still export. */ }
function persist() { try{localStorage.setItem(storageKey,JSON.stringify(draft));}catch{ /* Sharing works without local persistence. */ } }
let toastTimer;
function toast(text) {
  const node=$('#toast');node.textContent=text;node.classList.add('visible');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('visible'),2400);
}
const studies = new Map();
let movingStudy = null;
let motionFrame = 0;
const durations = { gesture: 6200, room: 7800, object: 6000 };
const motionVisibility = 'IntersectionObserver' in window ? new IntersectionObserver(changes => {
  for (const change of changes) {
    if (!change.isIntersecting && movingStudy?.section === change.target) stopMotion(movingStudy);
  }
}) : null;

function updatePlayButton(entry) {
  const playing = movingStudy === entry;
  const action = playing ? 'Pause' : entry.value === 100 ? 'Replay' : 'Play';
  entry.play.setAttribute('aria-label', action + ' ' + viewNames[entry.kind]);
  entry.play.setAttribute('aria-pressed', String(playing));
  $('span', entry.play).textContent = action + ' study';
}
function stopMotion(entry) {
  if (movingStudy !== entry) return;
  cancelAnimationFrame(motionFrame);
  motionFrame = 0;
  movingStudy = null;
  entry.fromHere = true;
  motionVisibility?.unobserve(entry.section);
  updatePlayButton(entry);
}
function runMotion(entry) {
  if (movingStudy !== entry || motionFrame || !(entry.ready || entry.staticOnly)) return;
  const from = entry.position;
  let start;
  function step(time) {
    if (movingStudy !== entry) return;
    start ??= time;
    const next = from + (time - start) * 100 / durations[entry.kind];
    setValue(entry, next);
    if (next >= 100) stopMotion(entry);
    else motionFrame = requestAnimationFrame(step);
  }
  motionFrame = requestAnimationFrame(step);
}
function toggleMotion(entry) {
  if (movingStudy === entry) return stopMotion(entry);
  pauseFilm();
  if (movingStudy) stopMotion(movingStudy);
  if (!entry.fromHere || entry.value === 100) setValue(entry, 0);
  movingStudy = entry;
  updatePlayButton(entry);
  motionVisibility?.observe(entry.section);
  loadScene(entry);
  runMotion(entry);
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden && movingStudy) stopMotion(movingStudy);
});
function refreshPinButton(entry) {
  const matched = draft.views[entry.kind] === entry.value;
  entry.pin.setAttribute('aria-pressed', String(matched));
  entry.pin.textContent = matched ? 'View remembered ✓' : 'Remember this view ＋';
}
function refreshPins() {
  const wrap=$('#pins');wrap.replaceChildren();
  for (const kind of kinds) {
    const value = draft.views[kind];
    const entry=studies.get(kind);
    if (entry) refreshPinButton(entry);
    if (value===undefined) continue;
    const chip=element('span',viewNames[kind]+' · '+value+'%','pin-chip');
    const remove=element('button','×');remove.type='button';remove.setAttribute('aria-label','Remove remembered '+viewNames[kind]+' view');
    remove.addEventListener('click',()=>{delete draft.views[kind];persist();refreshPins();clearShare();});
    chip.append(remove);wrap.append(chip);
  }
}
const fallbackFrames = {
  gesture: ['fly-water.webp', 'fly-figures.webp', 'fly-blocks.webp'],
  room: ['blackout-cut.webp', 'blackout-room-inset.webp', 'blackout-hall.webp'],
  object: ['liquid-front.webp', 'liquid-rim.webp', 'liquid-detail.webp'],
};
function fallback(entry) {
  const el=$('.scene-fallback img',entry.section);
  const v=entry.value;
  const name=fallbackFrames[entry.kind][v<34?0:v<67?1:2];
  if (el.dataset.art !== name) { el.dataset.art = name; el.src = art(name); }
}
function valueLabel(kind, n) {
  if (kind === 'gesture') return n + '% separated';
  if (kind === 'object') return n + '% through the camera arc';
  const layer = n < 18 ? 'paper cutout' : n < 48 ? 'room emerging' : n < 57 ? 'bouquet photograph' : n < 95 ? 'three panels opening' : 'empty hall';
  return n + '% · ' + layer;
}
function setValue(entry, n) {
  entry.position = Math.max(0, Math.min(100, n));
  entry.renderer?.setProgress(entry.position / 100);
  const value = Math.round(entry.position);
  if (entry.value === value) return;
  entry.value = value;
  entry.section.style.setProperty('--revealed', value + '%');
  entry.range.value = String(value);
  entry.output.textContent = value + '%';
  entry.range.setAttribute('aria-valuetext', valueLabel(entry.kind, value));
  if (!entry.ready) fallback(entry);
  refreshPinButton(entry);
  if (movingStudy !== entry) updatePlayButton(entry);
}
function scrub(entry, n) {
  pauseFilm();
  if (movingStudy) stopMotion(movingStudy);
  entry.fromHere = true;
  setValue(entry, n);
}
async function loadScene(entry) {
  if (entry.loading) return;
  entry.loading = true;
  const mode = $('.scene-mode', entry.scene);
  const ready = () => {
    entry.ready = true;
    entry.scene.classList.add('ready');
    mode.textContent = '';
    runMotion(entry);
  };
  function stills() {
    entry.ready = false;
    entry.scene.classList.remove('ready');
    mode.textContent = 'Source image sequence';
    entry.staticOnly = true;
    fallback(entry);
    runMotion(entry);
  }
  function mount(factory, canvas, onError) {
    entry.renderer = factory(canvas, entry.kind, {assetUrl: art, onReady: ready, onError});
    entry.renderer.setProgress(entry.position / 100);
    entry.renderer.resize();
  }
  let recovering = false;
  async function useCanvas() {
    if (recovering) return;
    recovering = true;
    entry.renderer?.dispose();
    entry.renderer = null;
    entry.ready = false;
    entry.scene.classList.remove('ready');
    const old = $('canvas', entry.scene);
    const canvas = old.cloneNode(false);
    old.replaceWith(canvas);
    try {
      const {createFallback} = await import('./spatial-fallback.js');
      mount(createFallback, canvas, stills);
    } catch { stills(); }
  }
  try {
    if (entry.kind === 'room') {
      const {createFallback} = await import('./spatial-fallback.js');
      mount(createFallback, $('canvas', entry.scene), stills);
      return;
    }
    const {createStudy} = await import('./spatial.js');
    mount(createStudy, $('canvas', entry.scene), useCanvas);
  } catch { if (entry.kind === 'room') stills(); else await useCanvas(); }
}
function bindHorizontalDrag(surface, getValue, setProgress, span) {
  let drag;
  surface.addEventListener('pointerdown', event => {
    if (event.button === 0) drag = {id:event.pointerId, x:event.clientX, y:event.clientY, start:getValue(), active:false};
  });
  surface.addEventListener('pointermove', event => {
    if (!drag || event.pointerId !== drag.id) return;
    const dx = event.clientX - drag.x, dy = event.clientY - drag.y;
    if (!drag.active && Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 9) { drag = null; return; }
    if (!drag.active && Math.abs(dx) > 5) { drag.active = true; surface.setPointerCapture(event.pointerId); }
    if (drag.active) { event.preventDefault(); setProgress(drag.start + dx * span / Math.max(surface.clientWidth * .7, 1)); }
  });
  for (const name of ['pointerup','pointercancel','lostpointercapture']) surface.addEventListener(name, () => { drag = null; });
}

const printImage = $('#print-landscape');
const printControl = $('#print-frame');
const printReadout = $('#print-time');
printImage.style.aspectRatio = print.frameWidth + ' / ' + print.frameHeight;
printImage.style.backgroundSize = `${print.columns * 100}% ${print.rows * 100}%`;
printControl.max = String(print.count - 1);
function showPrintFrame(value) {
  const frame = Math.max(0, Math.min(print.count - 1, Math.round(value)));
  const x = frame % print.columns, y = Math.floor(frame / print.columns);
  printImage.style.backgroundPosition = `${100 * x / Math.max(1, print.columns - 1)}% ${100 * y / Math.max(1, print.rows - 1)}%`;
  const seconds = print.sourceFrames[frame] / print.sourceFps;
  printControl.value = String(frame);
  printReadout.textContent = seconds.toFixed(2) + ' s';
  printControl.setAttribute('aria-valuetext', `Frame ${frame + 1} of ${print.count}, ${seconds.toFixed(2)} seconds into the original film`);
}
function scrubPrint(value) {
  pauseFilm();
  if (movingStudy) stopMotion(movingStudy);
  showPrintFrame(value);
}
function loadPrint() { printImage.style.backgroundImage = `url("${art('blackout-print-strip.webp')}")`; }
if ('IntersectionObserver' in window) {
  const printObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) { loadPrint(); printObserver.disconnect(); }
  }, {rootMargin:'350px'});
  printObserver.observe(printImage);
} else loadPrint();
showPrintFrame(Math.round((print.count - 1) * .55));
printControl.addEventListener('input', () => scrubPrint(Number(printControl.value)));
bindHorizontalDrag(printImage, () => Number(printControl.value), scrubPrint, print.count - 1);

const observer='IntersectionObserver' in window ? new IntersectionObserver(changes=>{for(const change of changes){if(change.isIntersecting){const e=studies.get(change.target.dataset.kind);loadScene(e);observer.unobserve(change.target);}}},{rootMargin:'180px 0px'}):null;
for(const section of $$('.study[data-kind]')) {
  const kind=section.dataset.kind;
  const range=$('.scrub',section);
  const scene=$('.scene',section);
  const entry={kind,section,scene,range,output:$('output',section),pin:$('.pin',section),play:$('.motion-toggle',section),value:null,position:0,fromHere:false,ready:false,staticOnly:false,loading:false,renderer:null};
  studies.set(kind,entry);
  setValue(entry, Number(range.value));
  range.addEventListener('input',()=>scrub(entry,Number(range.value)));
  entry.play.addEventListener('click',()=>toggleMotion(entry));
  entry.pin.addEventListener('click',()=>{if(movingStudy)stopMotion(movingStudy);draft.views[kind]=entry.value;persist();refreshPins();clearShare();toast('View added to your note');});
  bindHorizontalDrag(scene, () => entry.value, value => scrub(entry, value), 100);
  if(observer)observer.observe(section);else loadScene(entry);
}
refreshPins();
const reflection=$('#reflection');
reflection.value=draft.note;
function clearShare(){ $('#share-result').hidden=true; }
reflection.addEventListener('input',()=>{draft.note=reflection.value;persist();clearShare();});
function hasResponse(){return Boolean(draft.note.trim()||Object.keys(draft.views).length);}
function requireResponse(){if(hasResponse())return true;$('#response-status').textContent='Write a thought or remember a view first.';reflection.focus();return false;}
$('#response-form').addEventListener('submit',ev=>{
  ev.preventDefault();if(!requireResponse())return;
  const base=location.protocol==='file:'?liveOrigin:location.origin+location.pathname;
  const url=base.split('#')[0]+'#response='+encodeReview(draft);
  $('#response-link').value=url;$('#share-result').hidden=false;
  $('#response-status').textContent='Ready to send to your director. Anyone holding this response link can read the included note.';
  $('#response-link').focus();$('#response-link').select();
});
$('#copy-response').addEventListener('click',async()=>{
  const input=$('#response-link');input.focus();input.select();
  try{await navigator.clipboard.writeText(input.value);toast('Response link copied');}catch{if(document.execCommand('copy'))toast('Response link copied');else $('#response-status').textContent='The link is selected. Copy it to share your response.';}
});
$('#download-note').addEventListener('click',()=>{
  if(!requireResponse())return;
  const body=JSON.stringify(cleanReview(draft),null,2);
  const url=URL.createObjectURL(new Blob([body],{type:'application/json'}));
  const a=element('a');a.href=url;a.download='carryistic-reflection.json';document.body.append(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1500);toast('Response file prepared');
});
function openSharedResponse(){
  const prefix='#response=';
  if(!location.hash.startsWith(prefix))return;
  try {
    const shared=decodeReview(location.hash.slice(prefix.length));
    const nodes=[];
    if(shared.note)nodes.push(element('p',shared.note,'shared-note'));
    for(const [kind,value] of Object.entries(shared.views)){
      const b=element('button','Open '+viewNames[kind]+' at '+value+'% →','underlink');
      b.type='button';
      b.addEventListener('click',()=>{dialog.close();const entry=studies.get(kind);scrub(entry,value);entry.section.scrollIntoView();entry.range.focus({preventScroll:true});});
      nodes.push(b);
    }
    if(!nodes.length)nodes.push(element('p','This response has no saved views or text.'));
    popup('A response','Artist’s notebook',nodes);
  }catch{toast('This response link could not be read.');}
}
mountCollection($('#collection'), {asset, onlineBase: liveOrigin});
openSharedResponse();window.addEventListener('hashchange',openSharedResponse);
