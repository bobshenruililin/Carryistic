// Version 2's driver: the rooms play like her stories. The reel stops at each
// picture (a room's holds), waits, then travels to the next stop. Between works
// it plays the room's exit move on its own clock, so the twelve moves look the
// same however fast someone taps. Taps, swipes, the wheel and the keys only
// choose where to go next; the clock decides how the stage gets there.

import { createStage } from './stage.js';

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const SECONDS_PER_BEAT = 1.25;   // one beat of the scroll version, played at reading pace
const MOVE_SECONDS = 1.35;       // every move between works
const HOLD_SECONDS = 2.9;        // how long a picture stays before the reel moves on

export function mountReel({ stage, rooms: roomSpecs, assets, url, onOpenPlate, onStop, onRoom, onTick, onGesture, onEnd }) {
  let frameId = 0;
  const queue = () => { if (!frameId) frameId = requestAnimationFrame(frame); };
  const view = createStage({ stage, rooms: roomSpecs, assets, url, onOpenPlate, onChange: queue });
  const { rooms } = view;

  // Every stop in the film, in order: [room, hold] and its global position G = room + p.
  const stops = rooms.flatMap((room, i) => room.holds.map((h, k) => ({ i, k, G: i + h, last: k === room.holds.length - 1 })));
  const firstStop = i => stops.findIndex(s => s.i === i);

  const state = { G: 0, stop: -1, path: null, playing: false, wait: null, active: -1, visible: false, held: false, paused: false, grace: 0 };

  const posOf = G => {
    const i = Math.min(rooms.length - 1, Math.floor(G + 1e-9));
    return [i, clamp(G - i)];
  };

  // Seconds a stretch of one room takes: its beats at reading pace, never faster than what it shows.
  function stretchSeconds(room, p0, p1) {
    let seconds = (p1 - p0) * room.length * SECONDS_PER_BEAT;
    let pictures = 0;
    for (const layer of room.layers) {
      const start = layer.keys[0][0];
      if (start < p0 - 1e-6 || start >= p1) continue;
      if (layer.kind === 'img') pictures++;
      if (layer.kind === 'flip') seconds = Math.max(seconds, 3.6);
      if (layer.kind === 'model') seconds = Math.max(seconds, 7);
      if (layer.kind === 'strip') seconds = Math.max(seconds, 4.6);
      if (layer.kind === 'video') seconds = Math.max(seconds, (layer.el?.duration || 5) * .98);
    }
    return Math.max(seconds, pictures * .45, .5);
  }

  // The way from G0 forward to G1, split where a move between works begins.
  function route(G0, G1) {
    const parts = [];
    let G = G0;
    while (G < G1 - 1e-6) {
      const [i, p] = posOf(G);
      const room = rooms[i];
      const end = Math.min(G1, i + 1);
      const pEnd = end - i;
      if (p < room.exitAt - 1e-6 && pEnd > room.exitAt + 1e-6) {
        parts.push({ from: G, to: i + room.exitAt, seconds: stretchSeconds(room, p, room.exitAt) });
        G = i + room.exitAt;
        continue;
      }
      const move = p >= room.exitAt - 1e-6 && room.exitAt < 1;
      const seconds = move ? (room.renderedExit?.hasFrame ? (room.renderedExit.el.duration || 5) : MOVE_SECONDS) * (pEnd - p) / (1 - room.exitAt)
        : stretchSeconds(room, p, pEnd);
      parts.push({ from: G, to: end, seconds, move: move ? room : null });
      G = end;
    }
    return parts;
  }

  function travel(to, { cut = false, rewind = false } = {}) {
    const target = stops[to];
    if (!target) return;
    clearWait();
    if (cut || view.reduced()) {
      state.G = target.G;
      state.path = null;
      arrive(to);
      return;
    }
    const now = performance.now();
    if (rewind || target.G < state.G) {
      state.path = { parts: [{ from: state.G, to: target.G, seconds: .55 }], to, start: now, index: 0 };
    } else {
      const parts = route(state.G, target.G);
      for (const part of parts) if (part.move) onGesture?.('move', part.move);
      state.path = { parts, to, start: now, index: 0 };
    }
    state.stop = -1;
    queue();
  }

  function arrive(index) {
    state.stop = index;
    const stop = stops[index];
    onStop?.(stop, rooms[stop.i]);
    if (state.playing) wait();
    queue();
  }

  function holdSeconds(stop) {
    const room = rooms[stop.i];
    const near = room.layers.some(layer => (layer.kind === 'model' || layer.kind === 'flip') && Math.abs(layer.keys.at(-1)[0] - (stop.G - stop.i)) < .15);
    return near ? 5.5 : stop.k === 0 ? 3.4 : HOLD_SECONDS;
  }
  function wait() {
    const stop = stops[state.stop];
    if (!stop) return;
    const ending = state.stop === stops.length - 1;
    state.wait = { total: (ending ? 4.2 : holdSeconds(stop)) * 1000, done: 0, last: performance.now(), ending };
    queue();
  }
  function clearWait() { state.wait = null; }

  function frame(now = performance.now()) {
    frameId = 0;
    if (!state.visible) return;
    const path = state.path;
    if (path) {
      let part = path.parts[path.index];
      let t = (now - path.start) / 1000 / part.seconds;
      while (t >= 1 && path.index < path.parts.length - 1) {
        path.start += part.seconds * 1000;
        path.index++;
        part = path.parts[path.index];
        t = (now - path.start) / 1000 / part.seconds;
      }
      const u = clamp(t);
      state.G = part.from + (part.to - part.from) * u;
      if (u >= 1 && path.index === path.parts.length - 1) {
        state.path = null;
        state.G = stops[path.to].G;
        arrive(path.to);
      }
    }
    const [i, p] = posOf(state.G);
    view.render(i, p);
    if (state.active !== i) { state.active = i; onRoom?.(rooms[i], i); }
    // Waiting at a stop: the bar fills, then the reel moves on unless something holds it.
    let fill = 0;
    const wait = state.wait;
    if (wait && !state.path) {
      const held = state.held || state.paused || now < state.grace || document.hidden;
      if (!held) wait.done += Math.min(now - wait.last, 100);
      wait.last = now;
      fill = clamp(wait.done / wait.total);
      if (fill >= 1) {
        clearWait();
        if (wait.ending) onEnd?.();
        else next();
      }
    }
    onTick?.(state.path ? 0 : fill, state.path ? 1 : 0);
    if (state.path || state.wait) queue();
  }

  const current = () => (state.stop >= 0 ? state.stop : state.path ? state.path.to : Math.max(0, stops.findIndex(s => s.G >= state.G - 1e-6)));
  function next() {
    if (state.path) {
      // A move between works keeps its own clock; anything else finishes at once.
      if (state.path.parts[state.path.index].move) return;
      const to = state.path.to;
      state.path = null;
      state.G = stops[to].G;
      arrive(to);
      return;
    }
    const at = current();
    if (at < stops.length - 1) travel(at + 1);
    else onEnd?.();
  }
  function prev() {
    const at = current();
    const back = Math.max(0, at - 1);
    travel(back, { cut: stops[back].i !== stops[at].i, rewind: true });
  }
  function nextWork() {
    const i = stops[current()].i;
    if (i >= rooms.length - 1) return;
    // Skip what is left of this work, then play its move into the next.
    const exitStop = stops.findIndex(s => s.i === i && Math.abs(s.G - (i + rooms[i].exitAt)) < 1e-6);
    if (exitStop >= 0 && state.G < stops[exitStop].G - 1e-6) { state.G = stops[exitStop].G; state.path = null; }
    travel(firstStop(i + 1));
  }
  function prevWork() {
    const i = stops[current()].i;
    travel(firstStop(Math.max(0, stop0(i) === current() ? i - 1 : i)), { cut: true });
  }
  const stop0 = i => firstStop(i);

  // Gestures on the stage: tap a side, swipe between works, swipe down for her light, hold to pause.
  let press = null;
  stage.addEventListener('pointerdown', event => {
    if (!state.visible || event.button) return;
    if (event.target.closest('.turnable, .strip button')) { state.grace = performance.now() + 9000; return; }
    press = { x: event.clientX, y: event.clientY, t: performance.now(), id: event.pointerId, long: false };
    press.timer = setTimeout(() => { if (!press) return; press.long = true; state.held = true; onGesture?.('hold', true); queue(); }, 380);
  });
  const release = event => {
    if (!press || event.pointerId !== press.id) return;
    clearTimeout(press.timer);
    const dx = event.clientX - press.x, dy = event.clientY - press.y;
    const was = press;
    press = null;
    if (was.long) { state.held = false; onGesture?.('hold', false); queue(); return; }
    if (event.type === 'pointercancel') return;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.2) { (dx < 0 ? nextWork : prevWork)(); return; }
    if (Math.abs(dy) > 60 && Math.abs(dy) > Math.abs(dx) * 1.2) { onGesture?.(dy > 0 ? 'down' : 'up'); return; }
    if (Math.hypot(dx, dy) < 12) (event.clientX < stage.clientWidth * .3 ? prev : next)();
  };
  stage.addEventListener('pointerup', release);
  stage.addEventListener('pointercancel', release);
  stage.addEventListener('pointermove', event => {
    if (press && Math.hypot(event.clientX - press.x, event.clientY - press.y) > 12) clearTimeout(press.timer);
    // On a laptop the cursor says which way a click goes.
    if (event.pointerType === 'mouse') {
      const back = event.clientX < stage.clientWidth * .3;
      stage.classList.toggle('go-back', back);
      stage.classList.toggle('go-on', !back);
    }
  });
  let wheelAt = 0, wheelSum = 0;
  addEventListener('wheel', event => {
    if (!state.visible || document.querySelector('dialog[open], .works.open')) return;
    event.preventDefault();
    const now = performance.now();
    wheelSum += Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
    if (now - wheelAt < 520) { wheelSum = 0; return; }
    if (Math.abs(wheelSum) < 24) return;
    wheelAt = now;
    (wheelSum > 0 ? next : prev)();
    wheelSum = 0;
  }, { passive: false });
  addEventListener('keydown', event => {
    if (!state.visible || event.metaKey || event.ctrlKey || event.altKey || document.querySelector('dialog[open], .works.open')) return;
    const key = event.key;
    if (key === 'ArrowRight' || key === 'ArrowDown' || key === 'PageDown') { event.preventDefault(); next(); }
    else if (key === 'ArrowLeft' || key === 'ArrowUp' || key === 'PageUp') { event.preventDefault(); prev(); }
    else if (key === ' ') { event.preventDefault(); state.held = !state.held; onGesture?.('hold', state.held); queue(); }
    else if (key === 'Escape') onGesture?.('down');
  });
  document.addEventListener('visibilitychange', queue);

  view.measure();

  return {
    rooms,
    stops,
    view,
    get stop() { return stops[current()]; },
    // Open a work (or a stop) and start playing. From her light, the reel starts at the room's
    // beginning and plays its first entrance; from a link it cuts straight to the stop.
    open(i, { k = null, cut = false } = {}) {
      state.visible = true;
      state.playing = true;
      state.held = false;
      if (k === null) {
        state.G = i;
        state.path = null;
        state.stop = -1;
        state.active = -1;
        travel(firstStop(i));
      } else {
        travel(Math.max(0, stops.findIndex(s => s.i === i && s.k === k)), { cut: true });
      }
      queue();
    },
    hide() { state.visible = false; clearWait(); state.path = null; },
    next, prev, nextWork, prevWork,
    hold(flag) { state.held = flag; queue(); },
    pause(flag) { state.paused = flag; queue(); },
    pauseFor(ms) { state.grace = performance.now() + ms; queue(); },
  };
}
