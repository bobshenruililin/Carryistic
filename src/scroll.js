// One fixed stage, driven by scroll. Each room is a list of beats laid end to
// end in screen heights; each beat contributes layers whose keyframes are
// written in the beat's own 0–1 time. The engine converts them to room time,
// interpolates, and writes transforms only for the room on screen (and the
// next one, underneath, during a crossfade handoff).

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const mix = (a, b, t) => a + (b - a) * t;
const smooth = t => t * t * (3 - 2 * t);
const DEFAULTS = { o: 1, s: 1, x: 0, y: 0, r: 0, f: 0, c: [0, 0, 0, 0] };

function buildRoom(room) {
  let cursor = 0;
  const layers = [];
  let previous = [];
  for (const beat of room.beats) {
    const start = cursor - (beat.lead || 0);
    const placed = beat.layers.map(layer => ({ ...layer, start, dur: beat.dur }));
    // The picture a room ends on stays whole until its exit move has finished.
    if (beat.layers.some(layer => layer.kind === 'exit' || layer.kind === 'flood')) for (const layer of previous) layer.holdToEnd = true;
    layers.push(...placed);
    previous = placed;
    cursor = start + beat.dur;
  }
  const length = cursor;
  for (const layer of layers) {
    let previous = { ...DEFAULTS };
    layer.keys = layer.keys.map(([t, values]) => {
      const filled = { ...previous, ...values };
      previous = filled;
      return [(layer.start + t * layer.dur) / length, filled];
    });
    const last = layer.keys.at(-1);
    if (layer.holdToEnd && last[1].o > 0 && last[0] < 1) layer.keys.push([1, { ...last[1] }]);
  }
  return { ...room, length, layers };
}

function sample(keys, p, reduced) {
  if (p < keys[0][0] || p > keys[keys.length - 1][0]) return null;
  let i = 0;
  while (i < keys.length - 2 && p > keys[i + 1][0]) i++;
  const [t0, a] = keys[i];
  const [t1, b] = keys[Math.min(i + 1, keys.length - 1)];
  const t = t1 > t0 ? smooth(clamp((p - t0) / (t1 - t0))) : 1;
  const value = {};
  for (const key of ['o', 's', 'x', 'y', 'r', 'f']) value[key] = mix(a[key], b[key], key === 'f' ? clamp((p - t0) / Math.max(t1 - t0, 1e-6)) : t);
  value.c = a.c.map((v, j) => mix(v, b.c[j], t));
  if (reduced) { value.s = 1; value.x = 0; value.y = 0; value.r = 0; }
  return value;
}

export function mountScroll({ stage, track, rooms: roomSpecs, assets, url, onOpenPlate, onRoom, pace = .78 }) {
  const reducedQuery = matchMedia('(prefers-reduced-motion: reduce)');
  const rooms = roomSpecs.map(buildRoom);
  const doc = document;
  const state = { W: innerWidth, H: innerHeight, active: -1, loaded: new Set(), frame: 0 };

  const aspectOf = id => { const [w, h] = assets.hero[id]; return w / h; };
  const heroUrl = id => url(`scroll/h/${id}.webp`);

  for (const [index, room] of rooms.entries()) {
    const spacer = doc.createElement('section');
    spacer.className = 'spacer';
    spacer.id = room.id.toLowerCase();
    // One beat unit is `pace` screen heights of scrolling.
    spacer.style.setProperty('--length', (room.length * pace).toFixed(3));
    spacer.setAttribute('aria-labelledby', `title-${room.id}`);
    const heading = doc.createElement('h2');
    heading.id = `title-${room.id}`;
    heading.className = 'sr-only';
    heading.textContent = room.title;
    const list = doc.createElement('ul');
    list.className = 'sr-only';
    for (const id of room.slides) {
      const item = doc.createElement('li');
      const link = doc.createElement('a');
      link.href = `#work-${id}`;
      link.textContent = `${room.title}, slide ${Number(id.slice(4))}`;
      item.append(link);
      list.append(item);
    }
    spacer.append(heading, list);
    track.append(spacer);
    room.spacer = spacer;

    const el = doc.createElement('div');
    el.className = 'room';
    el.style.background = room.ground;
    el.dataset.ink = room.ink;
    el.hidden = true;
    room.el = el;
    for (const layer of room.layers) {
      if (layer.kind === 'exit' || layer.kind === 'flood') room.exit = layer;
      layer.el = makeLayer(layer, room);
      if (layer.el) el.append(layer.el);
      if (layer.hintEl) el.append(layer.hintEl);
    }
    if (room.exit?.rendered) room.renderedExit = room.layers.find(layer => layer.file === room.exit.rendered);
    for (const layer of room.layers) {
      if (layer.fallbackFor) layer.motionReplacement = room.layers.find(item => item.file === layer.fallbackFor);
    }
    stage.append(el);
    room.index = index;
  }

  function turnable(node, layer, perWidth, hint) {
    node.classList.add('turnable');
    layer.hintEl = doc.createElement('span');
    layer.hintEl.className = 'turn-hint';
    layer.hintEl.textContent = hint;
    let grip = null;
    node.addEventListener('pointerdown', event => {
      if (event.button) return;
      grip = { x: event.clientX, turn: layer.turn || 0, id: event.pointerId };
      node.setPointerCapture(event.pointerId);
      node.classList.add('turning');
    });
    node.addEventListener('pointermove', event => {
      if (!grip || event.pointerId !== grip.id) return;
      layer.turn = grip.turn + (event.clientX - grip.x) / Math.max(node.clientWidth, 1) * perWidth;
      if (Math.abs(event.clientX - grip.x) > 6) layer.touched = true;
      queue();
    });
    const release = () => { grip = null; node.classList.remove('turning'); };
    node.addEventListener('pointerup', release);
    node.addEventListener('pointercancel', release);
  }

  function makeLayer(layer, room) {
    let node;
    if (layer.kind === 'exit') return null;
    if (layer.kind === 'img') {
      node = doc.createElement('img');
      node.alt = '';
      node.decoding = 'async';
      node.draggable = false;
      layer.aspect ??= layer.crop ? layer.crop : aspectOf(layer.id);
      if (layer.crop) { node.style.objectFit = 'cover'; node.style.objectPosition = layer.pos || '50% 50%'; }
      node.dataset.src = heroUrl(layer.id);
    } else if (layer.kind === 'flip') {
      node = doc.createElement('img');
      node.alt = '';
      node.draggable = false;
      const [w, h] = assets[layer.set].size;
      layer.aspect = w / h;
      layer.urls = assets[layer.set].times.map((_, i) => url(`scroll/${layer.set}/${String(i).padStart(3, '0')}.webp`));
      node.dataset.src = layer.urls[0];
      // Turn Carry's own filmed orbit by hand; the scroll still moves it too.
      if (layer.drag) turnable(node, layer, layer.urls.length * 1.2, '← drag to turn →');
    } else if (layer.kind === 'model') {
      // The reconstruction turns a full circle with the scroll, and by hand.
      node = doc.createElement('canvas');
      layer.aspect = 1;
      layer.src = url(layer.file);
      turnable(node, layer, 360, layer.hint || '← drag to turn →');
    } else if (layer.kind === 'video') {
      node = doc.createElement('video');
      node.muted = true;
      node.playsInline = true;
      node.preload = 'auto';
      node.dataset.src = url(layer.file);
      layer.aspect ??= 1;
      node.addEventListener('loadedmetadata', queue);
      node.addEventListener('loadeddata', () => { layer.hasFrame = true; queue(); });
      node.addEventListener('error', () => { layer.hasFrame = false; queue(); });
    } else if (layer.kind === 'strip') {
      node = doc.createElement('div');
      node.className = `strip strip-${layer.dir || 'h'}`;
      const [top, height] = layer.band || [.755, .15];
      if (layer.dir === 'v') {
        node.style.left = `${top * 100}%`;
        node.style.width = `${height * 100}%`;
      } else if (layer.dir === 'd') {
        node.style.height = `${height * 100}vmin`;
      } else {
        node.style.top = `${top * 100}%`;
        node.style.height = `${height * 100}%`;
      }
      for (const id of layer.ids) {
        const button = doc.createElement('button');
        button.type = 'button';
        button.tabIndex = -1;
        button.dataset.plate = id;
        const [w, h] = assets.thumb[id];
        const thumb = doc.createElement('img');
        thumb.alt = '';
        thumb.dataset.src = url(`scroll/t/${id}.webp`);
        thumb.style.aspectRatio = `${w} / ${h}`;
        button.append(thumb);
        button.addEventListener('click', () => onOpenPlate(id));
        node.append(button);
      }
    } else if (layer.kind === 'flood') {
      node = doc.createElement('div');
      node.className = 'flood';
      for (let i = 0; i < 4; i++) {
        const square = doc.createElement('i');
        square.style.background = layer.color;
        node.append(square);
      }
    }
    node.classList.add('layer');
    if (layer.z) node.style.zIndex = layer.z;
    return node;
  }

  function measure() {
    state.W = stage.clientWidth;
    state.H = stage.clientHeight;
    for (const room of rooms) {
      const placed = new Map();
      for (const layer of room.layers) {
        if (layer.kind === 'flood' || layer.kind === 'strip' || layer.kind === 'exit') continue;
        const { W, H } = state;
        const portrait = W < H * .9;
        const size = (portrait && layer.sizeP) || layer.size || { fit: .84 };
        const aspect = layer.aspect;
        let w;
        if (size.ref) w = placed.get(size.ref).w * (size.k ?? 1);
        else if (size.cover) w = Math.max(W, H * aspect) * size.cover;
        else if (size.box) w = Math.min(W * size.box[0], H * size.box[1] * aspect);
        else if (size.w) w = W * size.w;
        else if (size.h) w = H * size.h * aspect;
        else w = Math.min(W * size.fit, H * size.fit * aspect);
        if (size.max) w = Math.min(w, size.max * Math.min(W, H) * Math.max(aspect, 1));
        const h = w / aspect;
        const [ax, ay] = layer.a || [.5, .5];
        const [sx, sy] = (portrait && layer.atP) || layer.at || [.5, .5];
        let left = sx * W - ax * w, top = sy * H - ay * h;
        if (layer.on) {
          // Register to another layer: [name, u, v] is a point on that layer, in its own 0–1 space.
          const [ref, u, v] = layer.on;
          const base = placed.get(ref);
          left = base.left + u * base.w - ax * w;
          top = base.top + v * base.h - ay * h;
        }
        placed.set(layer.name || layer.id, { w, h, left, top });
        room.placed = placed;
        Object.assign(layer.el.style, {
          width: `${w}px`, height: `${h}px`,
          left: `${left}px`, top: `${top}px`,
          transformOrigin: (([ox, oy]) => `${ox * 100}% ${oy * 100}%`)(layer.origin || [ax, ay]),
        });
        if (layer.kind === 'model') layer.view?.resize(w, h, Math.min(devicePixelRatio || 1, 2));
      }
    }
    queue();
  }

  function load(room) {
    if (!room || state.loaded.has(room.index)) return;
    state.loaded.add(room.index);
    for (const node of room.el.querySelectorAll('[data-src]')) {
      node.src = node.dataset.src;
      node.removeAttribute('data-src');
    }
    for (const layer of room.layers) {
      if (layer.kind === 'flip') layer.cache = layer.urls.map(src => { const im = new Image(); im.src = src; return im; });
      if (layer.kind === 'model' && !layer.view) {
        import('./sculpture.js').then(({ createSculpture }) => {
          layer.view = createSculpture(layer.el, layer.src, { onReady: () => { layer.ready = true; queue(); }, onError: () => { layer.failed = true; queue(); } });
          if (!layer.view) layer.failed = true;
          measure();
        }).catch(() => { layer.failed = true; });
      }
    }
  }

  function paint(room, p, under, handoffProgress = 0) {
    const reduced = reducedQuery.matches;
    const replaceOutgoing = !reduced && room.renderedExit?.hasFrame && handoffProgress >= .74;
    const { W, H } = state;
    room.el.hidden = false;
    room.el.classList.toggle('under', under);
    for (const layer of room.layers) {
      if (!layer.el) continue;
      const v = sample(layer.keys, p, reduced);
      const node = layer.el;
      if (!v || v.o <= .001 || (!reduced && layer.motionReplacement?.hasFrame) || (replaceOutgoing && layer.holdToEnd)) {
        node.style.visibility = 'hidden';
        layer.hintEl?.classList.remove('shown');
        continue;
      }
      if (layer.kind === 'video') {
        if (reduced) { node.style.visibility = 'hidden'; continue; }
        if (node.readyState >= 1 && Number.isFinite(node.duration)) {
          const time = v.f * Math.max(0, node.duration - .04);
          if (Math.abs(node.currentTime - time) > .02) node.currentTime = time;
        }
        if (!layer.hasFrame) { node.style.visibility = 'hidden'; continue; }
      }
      node.style.visibility = 'visible';
      node.style.opacity = v.o.toFixed(3);
      if (layer.kind === 'strip') {
        if (layer.dir === 'v') {
          node.style.transform = `translate3d(0,${(H - v.f * (H + node.scrollHeight)).toFixed(1)}px,0)`;
        } else if (layer.dir === 'd') {
          // Along Fly's diagonal: top left to bottom right.
          const D = Math.hypot(W, H);
          node.style.transform = `translate(${W / 2}px,${H / 2}px) rotate(${layer.angle ?? 32}deg) translate(${(D / 2 - v.f * (D + node.scrollWidth)).toFixed(1)}px,-50%)`;
        } else {
          node.style.transform = `translate3d(${(W - v.f * (W + node.scrollWidth)).toFixed(1)}px,0,0)`;
        }
        continue;
      }
      if (layer.kind === 'flood') {
        paintFlood(node, v.f, reduced);
        continue;
      }
      if (layer.kind === 'flip' && layer.cache) {
        const last = layer.urls.length - 1;
        const base = v.f * last;
        if (layer.turn) layer.turn = clamp(layer.turn, -base, last - base);
        const index = Math.round(base + (layer.turn || 0));
        if (layer.shown !== index) { layer.shown = index; node.src = layer.urls[index]; }
      }
      if (layer.kind === 'model') {
        if (!layer.ready || layer.failed) { node.style.visibility = 'hidden'; layer.hintEl?.classList.remove('shown'); continue; }
        layer.view.draw(+((layer.yaw ?? 0) + v.f * 360 + (layer.turn || 0)).toFixed(2));
      }
      if (layer.hintEl) layer.hintEl.classList.toggle('shown', v.o > .6 && !layer.touched);
      node.style.transform = `translate3d(${(v.x * W / 100).toFixed(1)}px,${(v.y * H / 100).toFixed(1)}px,0) scale(${v.s.toFixed(4)}) rotate(${v.r.toFixed(2)}deg)`;
      const [t, r, b, l] = v.c;
      node.style.clipPath = t || r || b || l ? `inset(${t.toFixed(2)}% ${r.toFixed(2)}% ${b.toFixed(2)}% ${l.toFixed(2)}%)` : '';
    }
  }

  function paintFlood(node, f, reduced) {
    const { W, H } = state;
    const squares = node.children;
    if (reduced) {
      for (const [i, sq] of [...squares].entries()) sq.style.cssText = `background:${sq.style.background};left:0;top:0;width:${W}px;height:${H}px;opacity:${i === 3 ? smooth(f) : 0}`;
      return;
    }
    // Four squares grow down the diagonal Carry drew in Fly (P05-03); the last one floods the stage.
    const unit = Math.min(W, H);
    const plan = [[.15, .2, .05], [.3, .36, .1], [.5, .55, .19]];
    for (let i = 0; i < 4; i++) {
      const sq = squares[i];
      const bg = sq.style.background;
      if (i < 3) {
        const [cx, cy, size] = plan[i];
        const grow = smooth(clamp((f - i * .14) / .22));
        const side = size * unit * grow;
        sq.style.cssText = `background:${bg};width:${side}px;height:${side}px;left:${cx * W - side / 2}px;top:${cy * H - side / 2}px;opacity:${grow > 0 ? 1 : 0}`;
      } else {
        const grow = smooth(clamp((f - .42) / .58));
        const side = mix(.3 * unit, Math.hypot(W, H) * 1.5, grow);
        const cx = mix(.74 * W, .5 * W, grow), cy = mix(.74 * H, .5 * H, grow);
        sq.style.cssText = `background:${bg};width:${side}px;height:${side}px;left:${cx - side / 2}px;top:${cy - side / 2}px;opacity:${f > .42 ? 1 : 0}`;
      }
    }
  }

  function frame() {
    state.frame = 0;
    let index = rooms.length - 1, p = 1;
    for (const room of rooms) {
      const rect = room.spacer.getBoundingClientRect();
      if (rect.bottom > 0) { index = room.index; p = clamp(-rect.top / rect.height); break; }
    }
    const room = rooms[index];
    const next = rooms[index + 1];
    load(room); load(next); load(rooms[index + 2]);
    const exit = room.exit ? sample(room.exit.keys, p, false) : null;
    const f = !room.exit ? 0 : exit ? exit.f : (p >= room.exit.keys.at(-1)[0] ? 1 : 0);
    const showNext = next && f > 0;
    for (const other of rooms) {
      if (other !== room && !(showNext && other === next)) other.el.hidden = true;
    }
    paint(room, p, false, f);
    if (showNext) paint(next, 0, true);
    handoff(room, showNext ? next : null, f);
    if (state.active !== index) {
      state.active = index;
      onRoom?.(room, index);
    }
    stage.style.setProperty('--progress', p.toFixed(4));
  }

  // Each handoff reveals the next room through a shape or move from Carry's own work.
  const flashlight = doc.createElement('div');
  flashlight.className = 'flashlight';
  stage.append(flashlight);
  const IRREGULAR = [1, .8, 1.12, .9, 1.04, .76, 1.14, .86, .97, 1.02];
  const rect = (x, y, w, h) => `M${x.toFixed(1)} ${y.toFixed(1)}h${w.toFixed(1)}v${h.toFixed(1)}h${(-w).toFixed(1)}Z`;
  const circle = (cx, cy, r) => `M${(cx - r).toFixed(1)} ${cy.toFixed(1)}a${r.toFixed(1)} ${r.toFixed(1)} 0 1 0 ${(2 * r).toFixed(1)} 0a${r.toFixed(1)} ${r.toFixed(1)} 0 1 0 ${(-2 * r).toFixed(1)} 0Z`;
  function star(cx, cy, R, turn) {
    const points = [];
    for (let i = 0; i < 20; i++) {
      const r = i % 2 ? R * .44 : R * IRREGULAR[i / 2];
      const a = turn + i * Math.PI / 10 - Math.PI / 2;
      points.push(`${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`);
    }
    return `M${points.join('L')}Z`;
  }
  function point(room, params = {}) {
    const { W, H } = state;
    if (params.on && room.placed?.get(params.on[0])) {
      const box = room.placed.get(params.on[0]);
      return [box.left + params.on[1] * box.w, box.top + params.on[2] * box.h];
    }
    const [x, y] = params.at || [.5, .5];
    return [x * W, y * H];
  }
  function clear(r) {
    if (!r) return;
    Object.assign(r.el.style, { opacity: '', clipPath: '', transform: '', transformOrigin: '', filter: '', maskImage: '', webkitMaskImage: '', zIndex: '' });
  }
  function handoff(room, next, f) {
    for (const r of rooms) if (r === room || r === next) clear(r);
    flashlight.style.opacity = '0';
    stage.style.background = room.ground;
    if (!next || f <= 0) return;
    const { W, H } = state;
    const out = room.el.style, inn = next.el.style;
    const e = smooth(f);
    let type = room.exit.kind === 'flood' ? 'flood' : room.exit.type;
    if (reducedQuery.matches && type !== 'flood') type = 'cross';
    const params = room.exit.params || {};
    const on = top => { inn.zIndex = top ? '3' : '0'; out.zIndex = '2'; };
    const rendered = room.renderedExit;
    if (!reducedQuery.matches && rendered?.hasFrame) {
      on(false);
      const landing = next.placed.get(params.landing);
      if (landing) {
        // The filmed square settles on the middle of the original portrait before it takes over.
        const clip = room.placed.get(rendered.name);
        const scale = mix(1, landing.w / clip.w, smooth(clamp((f - .74) / .18)));
        rendered.el.style.transform = `scale(${scale.toFixed(4)})`;
      }
      out.opacity = String(1 - smooth(clamp((f - .92) / .08)));
      return;
    }
    switch (type) {
      case 'flood':
        on(false);
        break;
      case 'cross':
        on(false); out.opacity = String(1 - e);
        break;
      case 'shutters': {
        // The three panels of the BLACKOUT triptych (P02-01), split at its own gutters, drop in turn.
        on(true);
        const cuts = [0, .433, .693, 1];
        let path = '';
        for (let k = 0; k < 3; k++) {
          const drop = smooth(clamp((f - k * .18) / .64)) * H;
          if (drop > .5) path += rect(cuts[k] * W, 0, (cuts[k + 1] - cuts[k]) * W + 1, drop);
        }
        inn.clipPath = path ? `path('${path}')` : 'inset(50%)';
        break;
      }
      case 'window': {
        // An inset in the outgoing picture grows until it is the whole page.
        on(true);
        const [x, y, w, h] = params.rect || [.38, .32, .24, .3];
        inn.clipPath = `path('${rect(mix(x * W, 0, e), mix(y * H, 0, e), mix(w * W, W, e), mix(h * H, H, e))}')`;
        inn.transform = `scale(${mix(params.scale ?? 1.25, 1, e).toFixed(4)})`;
        inn.transformOrigin = `${(x + w / 2) * 100}% ${(y + h / 2) * 100}%`;
        break;
      }
      case 'rise': {
        on(true);
        const edge = mix(-25, 105, e);
        const mask = `linear-gradient(to top, #000 ${edge.toFixed(1)}%, transparent ${(edge + 22).toFixed(1)}%)`;
        inn.maskImage = mask; inn.webkitMaskImage = mask;
        break;
      }
      case 'iris': {
        on(true);
        const [cx, cy] = point(room, params);
        const r = mix(params.from ?? 0, Math.hypot(Math.max(cx, W - cx), Math.max(cy, H - cy)) + 2, e);
        inn.clipPath = `path('${circle(cx, cy, Math.max(r, .1))}')`;
        break;
      }
      case 'spin': {
        // The outgoing picture turns like a record and closes into its centre.
        on(false);
        const [cx, cy] = point(room, params);
        const R = Math.hypot(Math.max(cx, W - cx), Math.max(cy, H - cy));
        out.transformOrigin = `${cx}px ${cy}px`;
        out.transform = `rotate(${(e * (params.turn ?? 300)).toFixed(2)}deg)`;
        out.clipPath = `path('${circle(cx, cy, Math.max(mix(R, 0, e), .1))}')`;
        break;
      }
      case 'flash': {
        on(f >= .5);
        if (f < .5) inn.opacity = '0';
        flashlight.style.opacity = String(Math.max(0, 1 - Math.abs(f - .5) * 2.6).toFixed(3));
        break;
      }
      case 'star': {
        // Carry's starburst (P09-01, P10-08) spins open on the next room.
        on(true);
        const [cx, cy] = point(room, params);
        const R = mix(0, Math.hypot(W, H) * 1.35, smooth(clamp(f * 1.08)));
        inn.clipPath = `path('${star(cx, cy, Math.max(R, .1), e * Math.PI * .9)}')`;
        break;
      }
      case 'flip': {
        // The page turns over like the bench in P06-08.
        stage.style.background = next.ground;
        const persp = `perspective(${Math.max(W, H) * 1.6}px)`;
        if (f < .5) { on(false); inn.opacity = '0'; out.transform = `${persp} rotateY(${(e * 180).toFixed(2)}deg)`; }
        else { on(true); out.opacity = '0'; inn.transform = `${persp} rotateY(${((e - 1) * 180).toFixed(2)}deg)`; }
        break;
      }
      case 'slices': {
        // Horizontal bands slide in from alternate sides, like the gallery strip in P04-06.
        on(true);
        const n = params.bands || 6;
        let path = '';
        for (let k = 0; k < n; k++) {
          const w = smooth(clamp((f - k * .06) / .7)) * W;
          const y = k * H / n;
          if (w > .5) path += rect(k % 2 ? W - w : 0, y, w, H / n + 1);
        }
        inn.clipPath = path ? `path('${path}')` : 'inset(50%)';
        break;
      }
      case 'drain': {
        on(false);
        out.filter = `grayscale(${smooth(clamp(f / .55)).toFixed(3)}) brightness(${mix(1, 1.9, smooth(clamp((f - .35) / .65))).toFixed(3)})`;
        out.opacity = String(1 - smooth(clamp((f - .55) / .45)));
        break;
      }
      case 'unfold': {
        // A pencil line opens into a page.
        on(true);
        const a = smooth(clamp(f / .42)), b = smooth(clamp((f - .38) / .62));
        const w = a * W, h = Math.max(2, b * H);
        inn.clipPath = `path('${rect((W - w) / 2, (H - h) / 2, w, h)}')`;
        break;
      }
      default:
        on(false); out.opacity = String(1 - e);
    }
  }

  function queue() {
    if (!state.frame) state.frame = requestAnimationFrame(frame);
  }

  addEventListener('scroll', queue, { passive: true });
  addEventListener('resize', measure);
  reducedQuery.addEventListener?.('change', queue);
  measure();
  frame();

  return {
    rooms,
    jump(index) {
      const target = rooms[index]?.spacer;
      if (!target) return;
      const top = target.getBoundingClientRect().top + scrollY + 2;
      scrollTo({ top, behavior: reducedQuery.matches ? 'instant' : 'smooth' });
    },
  };
}
