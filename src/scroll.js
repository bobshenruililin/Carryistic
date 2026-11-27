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
  for (const beat of room.beats) {
    const start = cursor - (beat.lead || 0);
    for (const layer of beat.layers) layers.push({ ...layer, start, dur: beat.dur });
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
      layer.el = makeLayer(layer, room);
      el.append(layer.el);
    }
    stage.append(el);
    room.index = index;
  }

  function makeLayer(layer, room) {
    let node;
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
    } else if (layer.kind === 'video') {
      node = doc.createElement('video');
      node.muted = true;
      node.playsInline = true;
      node.preload = 'auto';
      node.dataset.src = url(layer.file);
      layer.aspect ??= 1;
    } else if (layer.kind === 'strip') {
      node = doc.createElement('div');
      node.className = 'strip';
      const [top, height] = layer.band || [.755, .15];
      node.style.top = `${top * 100}%`;
      node.style.height = `${height * 100}%`;
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
        if (layer.kind === 'flood' || layer.kind === 'strip') continue;
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
        Object.assign(layer.el.style, {
          width: `${w}px`, height: `${h}px`,
          left: `${left}px`, top: `${top}px`,
          transformOrigin: (([ox, oy]) => `${ox * 100}% ${oy * 100}%`)(layer.origin || [ax, ay]),
        });
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
    }
  }

  function paint(room, p, under) {
    const reduced = reducedQuery.matches;
    const { W, H } = state;
    room.el.hidden = false;
    room.el.classList.toggle('under', under);
    if (room.handoff === 'cross' && !under) room.el.style.opacity = String(1 - smooth(clamp((p - .9) / .1)));
    else room.el.style.opacity = '';
    for (const layer of room.layers) {
      const v = sample(layer.keys, p, reduced);
      const node = layer.el;
      if (!v || v.o <= .001) { node.style.visibility = 'hidden'; continue; }
      node.style.visibility = 'visible';
      node.style.opacity = v.o.toFixed(3);
      if (layer.kind === 'strip') {
        const width = node.scrollWidth;
        node.style.transform = `translate3d(${(W - v.f * (W + width)).toFixed(1)}px,0,0)`;
        continue;
      }
      if (layer.kind === 'flood') {
        paintFlood(node, v.f, reduced);
        continue;
      }
      if (layer.kind === 'flip' && layer.cache) {
        const index = Math.round(v.f * (layer.urls.length - 1));
        if (layer.shown !== index) { layer.shown = index; node.src = layer.urls[index]; }
      }
      if (layer.kind === 'video' && node.readyState >= 1 && node.duration) {
        const time = v.f * (node.duration - .04);
        if (Math.abs(node.currentTime - time) > .02) node.currentTime = time;
      }
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
    const showNext = next && p > .86;
    for (const other of rooms) {
      if (other !== room && !(showNext && other === next)) other.el.hidden = true;
    }
    paint(room, p, false);
    if (showNext) paint(next, 0, true);
    if (state.active !== index) {
      state.active = index;
      onRoom?.(room, index);
    }
    stage.style.setProperty('--progress', p.toFixed(4));
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
