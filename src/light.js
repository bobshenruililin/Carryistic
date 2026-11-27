// Her light: the landing. Carry's profile picture, whole, and fifteen flat rays
// coming out of the light on her face, one per work, each in a colour taken from
// that work. The picture comes first; then the light sweeps across the rays from
// right to left and each one shines as it arrives. Touch a ray and its work
// appears inside it; touch it again and the ray opens until its colour is the
// whole page, the room's own ground, where the reel takes over.
//
// Her figure is kept off the rays by a soft mask (public/landing/figure.png,
// from scripts/prepare-profile-masks.py): crisp along her profile, where the
// edge is the light itself, and blurred wide over her hair and shoulders.

// Round her head from night to day: blues low in front of her face, through
// reds and earth, to gold, yellow and white behind her. Each colour comes from
// its work (direction/plan-v2.md).
export const RAYS = [
  ['P01', '#3a6fa0'], ['P10', '#0c15bd'], ['P05', '#2c7abc'], ['P04', '#df5877'], ['P06', '#922626'],
  ['P03', '#6d2423'], ['P08', '#b3150d'], ['P13', '#a84a32'], ['P14', '#b4531f'], ['P07', '#885529'],
  ['P11', '#c28356'], ['P15', '#b8913f'], ['P09', '#f8fb04'], ['P12', '#b0aaa7'], ['P02', '#fefefe'],
];

const LIGHT = [518 / 1080, 423 / 1080];      // the light on her cheek, in photo fractions
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = t => t * t * (3 - 2 * t);
const rgb = h => [1, 3, 5].map(k => parseInt(h.slice(k, k + 2), 16));
const towardWhite = (h, t) => `rgb(${rgb(h).map(v => Math.round(v + (255 - v) * t)).join(',')})`;
const load = src => new Promise((ok, no) => { const im = new Image(); im.decoding = 'async'; im.onload = () => ok(im); im.onerror = no; im.src = src; });

export function mountLight(canvas, { works, url, living, onLit, onRay, onShine, onEnter, onEntered }) {
  const ctx = canvas.getContext('2d');
  const rays = document.createElement('canvas'), rctx = rays.getContext('2d');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const W_ = RAYS.map(([id, color], i) => ({ ...works[id], id, color, i }));
  const s = {
    W: 0, H: 0, DPR: 1, O: [0, 0], R: 0, rect: [0, 0, 0], arc: [106, 228],
    born: 0, visible: false, k: W_.map(() => 0), dim: 0, shone: false,
    hover: -1, active: -1, tour: -1, tourAt: 0, enter: -1, enterAt: 0, touch: false, frame: 0, assets: null,
  };

  function layout() {
    s.DPR = Math.min(2, devicePixelRatio || 1);
    s.W = canvas.clientWidth; s.H = canvas.clientHeight;
    canvas.width = rays.width = Math.round(s.W * s.DPR);
    canvas.height = rays.height = Math.round(s.H * s.DPR);
    const wide = s.W / s.H > 1;
    // The photograph fills the page: its full height on a laptop, edge to edge on a phone.
    const size = wide ? s.H * 1.08 : s.H * 1.02;
    s.O = wide ? [s.W * .63, s.H * .5] : [s.W * .62, s.H * .4];
    // On a phone her head fills the space behind her, so the fan ends straight above it.
    s.arc = wide ? [106, 228] : [112, 178];
    s.rect = [s.O[0] - LIGHT[0] * size, s.O[1] - LIGHT[1] * size, size];
    s.R = Math.max(...[[0, 0], [s.W, 0], [0, s.H], [s.W, s.H]].map(([x, y]) => Math.hypot(x - s.O[0], y - s.O[1]))) * 1.05;
    queue();
  }

  const angleOf = i => s.arc[0] + (i + .5) * s.arc[1] / W_.length;
  const baseWidth = w => 1.6 + Math.sqrt(w.slides) * .7;   // a work with more slides throws a slightly wider ray
  // The opening: the picture, then the light sweeps from the last ray (behind her) to the first.
  const SWEEP_AT = .9, SWEEP = 1.7;
  function arrival(w, t) {
    if (reduced.matches) return 1;
    const at = SWEEP_AT + SWEEP * (W_.length - 1 - w.i) / (W_.length - 1);
    return (t - at) / .38;
  }

  function wedge(c, a, half, len) {
    c.beginPath(); c.moveTo(s.O[0], s.O[1]);
    const n = Math.max(2, Math.ceil(half * 2 / .08));
    for (let j = 0; j <= n; j++) { const b = a - half + (2 * half) * j / n; c.lineTo(s.O[0] + Math.cos(b) * len, s.O[1] + Math.sin(b) * len); }
    c.closePath();
  }

  function geometry(w, t) {
    const k = s.k[w.i];
    const sway = reduced.matches ? 0 : Math.sin(t * .25 + w.i * 1.7) * .35;
    const half = baseWidth(w) * (1 + k * 3.4) * (1 - s.dim * (1 - k) * .2);
    return [(angleOf(w.i) + sway) * Math.PI / 180, half * Math.PI / 180];
  }

  // A ray is a flat, hard-edged shape in one colour, like her cut paper. Lit, it holds its work.
  function drawRay(c, w, t) {
    const g = ease(clamp(arrival(w, t)));
    if (g <= 0 || s.enter === w.i) return;
    const [a, half] = geometry(w, t), k = s.k[w.i], len = s.R * g;
    // As the light arrives the ray shines, then settles into its own colour.
    const shine = reduced.matches ? 0 : 1 - ease(clamp((arrival(w, t) - .5) / 1.6));
    c.globalAlpha = .9 * (1 - s.dim * (1 - k) * .85);
    c.fillStyle = shine > .01 ? towardWhite(w.color, .7 * shine) : w.color;
    wedge(c, a, half, len); c.fill();
    const img = s.assets.covers[w.id];
    if (img && k > .01) {
      c.save(); wedge(c, a, half * .94, len); c.clip();
      c.globalAlpha = k;
      const d = s.R * .5, size = s.R * 1.15;
      c.drawImage(img, s.O[0] + Math.cos(a) * d - size / 2, s.O[1] + Math.sin(a) * d - size / 2, size, size);
      c.restore();
    }
    c.globalAlpha = 1;
  }

  function frame(now = performance.now()) {
    s.frame = 0;
    if (!s.visible || !s.assets) return;
    if (!s.born) s.born = now;
    const t = (now - s.born) / 1000;
    const touched = s.enter >= 0 ? s.enter : s.active >= 0 ? s.active : s.hover;
    const target = touched >= 0 ? touched : s.tour;
    const level = touched >= 0 ? 1 : .55;
    s.k = s.k.map((v, i) => v + ((i === target ? level : 0) - v) * (reduced.matches ? 1 : .18));
    s.dim += ((touched >= 0 ? 1 : 0) - s.dim) * (reduced.matches ? 1 : .16);
    const [x0, y0, size] = s.rect, { W, H, DPR, O, R } = s;
    if (s.living && s.living.video.readyState >= 2 && !s.living.video.paused) s.living.compose(s.living.video);
    const on = reduced.matches ? 1 : ease(clamp(t / .8));

    rctx.setTransform(1, 0, 0, 1, 0, 0); rctx.clearRect(0, 0, rays.width, rays.height);
    rctx.setTransform(DPR, 0, 0, DPR, 0, 0); rctx.globalCompositeOperation = 'source-over';
    for (const w of W_) if (w.i !== target) drawRay(rctx, w, t);
    if (target >= 0) drawRay(rctx, W_[target], t);
    // the glint that carries the light across, right to left
    const sweep = (t - SWEEP_AT) / SWEEP;
    if (!reduced.matches && sweep > -.05 && sweep < 1.15) {
      if (!s.shone && sweep >= 0 && s.enter < 0) s.shone = onShine?.(t - SWEEP_AT) === true;
      const deg = s.arc[0] + s.arc[1] * (1 - sweep);
      rctx.globalAlpha = .85 * (1 - ease(clamp((sweep - .9) / .25)));
      rctx.fillStyle = '#fffdf6';
      wedge(rctx, deg * Math.PI / 180, .9 * Math.PI / 180, R);
      rctx.fill();
      rctx.globalAlpha = 1;
    }
    rctx.globalCompositeOperation = 'destination-out';
    rctx.drawImage(s.assets.figure, x0, y0, size, size);
    rctx.globalCompositeOperation = 'source-over';

    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
    ctx.fillStyle = '#05070a'; ctx.fillRect(0, 0, W, H);
    ctx.globalAlpha = on * (1 - s.dim * .4);
    ctx.drawImage(s.assets.room, x0, y0, size, size);
    ctx.globalAlpha = 1;
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.drawImage(rays, 0, 0); ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    // the light falls off towards the foot of the page, where her words and the buttons sit
    const foot = ctx.createLinearGradient(0, H * (W > H ? .74 : .68), 0, H);
    foot.addColorStop(0, 'rgba(5,7,10,0)'); foot.addColorStop(1, 'rgba(5,7,10,.72)');
    ctx.fillStyle = foot; ctx.fillRect(0, 0, W, H);
    // and at the head of the page, so the mark and Sound stay readable over the brightest rays
    const head = ctx.createLinearGradient(0, 0, 0, Math.min(110, H * .14));
    head.addColorStop(0, 'rgba(5,7,10,.62)'); head.addColorStop(1, 'rgba(5,7,10,0)');
    ctx.fillStyle = head; ctx.fillRect(0, 0, W, H);

    // Entering: the ray swings open until its colour, the room's ground, is the whole page.
    if (s.enter >= 0) {
      const w = W_[s.enter], img = s.assets.covers[w.id];
      const e = reduced.matches ? 1 : clamp((now - s.enterAt) / 1000 / .95);
      const [a, half0] = geometry(w, t);
      const half = half0 + (Math.PI * 1.06 - half0) * ease(clamp(e / .78));
      ctx.save(); wedge(ctx, a, half, R); ctx.clip();
      ctx.fillStyle = w.ground; ctx.fillRect(0, 0, W, H);
      ctx.globalAlpha = 1 - ease(clamp((e - .25) / .55));
      const d = R * .5, side = R * 1.15;
      if (img) ctx.drawImage(img, O[0] + Math.cos(a) * d - side / 2, O[1] + Math.sin(a) * d - side / 2, side, side);
      ctx.restore();
      if (e >= 1) { const id = w.id; s.enter = -1; s.active = -1; onEntered?.(id); return; }
    }

    // The slow tour: one ray at a time shows its work, so the page shows what a touch does.
    if (touched < 0 && t > SWEEP_AT + SWEEP + 1.6) {
      if (now > s.tourAt) {
        if (s.tour >= 0) { s.tour = -1; s.tourAt = now + 900; onLit?.(null, 'tour'); }
        else { s.tour = s.nextTour; s.nextTour = (s.nextTour + 1) % W_.length; s.tourAt = now + 2600; onLit?.(W_[s.tour], 'tour'); }
      }
    }
    queue();
  }

  function queue() { if (!s.frame && s.visible) s.frame = requestAnimationFrame(frame); }

  function pick(x, y) {
    let deg = Math.atan2(y - s.O[1], x - s.O[0]) * 180 / Math.PI;
    if (deg < s.arc[0]) deg += 360;
    const end = s.arc[0] + s.arc[1];
    if (deg > end) return deg - end < s.arc[0] + 360 - deg ? W_.length - 1 : 0;
    return clamp(Math.floor((deg - s.arc[0]) / (s.arc[1] / W_.length)), 0, W_.length - 1);
  }
  function light(i, how) {
    if (i === s.active && how !== 'hover') return;
    if (s.tour >= 0) s.tour = -1;
    if (how === 'hover') { if (s.hover === i) return; s.hover = i; }
    else s.active = i;
    s.tourAt = performance.now() + 6000;
    onLit?.(i >= 0 ? W_[i] : null, how);
    if (i >= 0) onRay?.(i);
    queue();
  }
  function enter(i) {
    if (s.enter >= 0 || i < 0) return;
    s.enter = i; s.enterAt = performance.now(); s.active = i;
    onEnter?.(W_[i]);
    queue();
  }

  canvas.addEventListener('pointermove', e => {
    if (!s.visible || s.enter >= 0) return;
    if (e.pointerType === 'mouse') light(pick(e.clientX, e.clientY), 'hover');
    else if (s.touch && e.buttons) light(pick(e.clientX, e.clientY), 'touch');   // slide a finger round her head to run through the works
  });
  canvas.addEventListener('pointerleave', () => { if (s.hover >= 0) { s.hover = -1; onLit?.(null, 'hover'); queue(); } });
  canvas.addEventListener('pointerdown', e => {
    if (!s.visible || s.enter >= 0) return;
    const i = pick(e.clientX, e.clientY);
    if (e.pointerType === 'mouse' || s.active === i) enter(i);
    else { light(i, 'touch'); s.touch = true; }
  });
  canvas.addEventListener('pointerup', () => { s.touch = false; });
  addEventListener('resize', layout);

  (async () => {
    const [photo, figure, ...covers] = await Promise.all([
      load(url('landing/photo.webp')), load(url('landing/figure.png')),
      ...W_.map(w => load(url(`scroll/h/${w.id}-01.webp`)).catch(() => null)),
    ]);
    // the room: the photograph, its square edges feathered into the page
    const S = photo.width, room = document.createElement('canvas');
    room.width = room.height = S;
    const rc = room.getContext('2d');
    const feather = document.createElement('canvas');
    feather.width = feather.height = S;
    const fc0 = feather.getContext('2d');
    fc0.fillStyle = '#000'; fc0.fillRect(0, 0, S, S);
    fc0.globalCompositeOperation = 'destination-in';
    for (const [x0, y0, x1, y1] of [[0, 0, S * .16, 0], [S, 0, S * .84, 0], [0, 0, 0, S * .16], [0, S, 0, S * .84]]) {
      const g = fc0.createLinearGradient(x0, y0, x1, y1);
      g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,1)');
      fc0.fillStyle = g; fc0.fillRect(0, 0, S, S);
    }
    const compose = source => {
      rc.globalCompositeOperation = 'copy';
      rc.drawImage(source, 0, 0, S, S);
      rc.globalCompositeOperation = 'destination-in';
      rc.drawImage(feather, 0, 0);
      rc.globalCompositeOperation = 'source-over';
    };
    compose(photo);
    // L1: the photograph alive (her hair stirs), drawn in place of the still once it plays.
    if (living && !reduced.matches) {
      const video = document.createElement('video');
      Object.assign(video, { muted: true, loop: true, playsInline: true, preload: 'auto', src: living });
      video.setAttribute('playsinline', '');
      video.play().catch(() => {});
      s.living = { video, compose };
    }
    // her figure: the mask's grey becomes alpha, so the rays can be cut away where she stands
    const fig = document.createElement('canvas');
    fig.width = figure.width; fig.height = figure.height;
    const fc = fig.getContext('2d');
    fc.drawImage(figure, 0, 0);
    const data = fc.getImageData(0, 0, fig.width, fig.height);
    for (let i = 0; i < data.data.length; i += 4) { data.data[i + 3] = data.data[i]; data.data[i] = data.data[i + 1] = data.data[i + 2] = 0; }
    fc.putImageData(data, 0, 0);
    s.assets = { room, figure: fig, covers: Object.fromEntries(W_.map((w, i) => [w.id, covers[i]])) };
    layout();
    queue();
  })();

  // The first ray the tour lights follows the visitor's time of day: night rays at night, daylight by day.
  const hour = new Date().getHours();
  s.nextTour = Math.round(((hour + 3) % 24) / 24 * (W_.length - 1));

  return {
    works: W_,
    show({ fresh = false } = {}) {
      s.visible = true;
      if (fresh || !s.born) { s.born = s.assets ? performance.now() : 0; s.shone = false; }
      else s.born = performance.now() - (SWEEP_AT + SWEEP + .8) * 1000;   // back from a work: the rays are already there
      s.enter = -1; s.active = -1; s.hover = -1; s.tour = -1; s.tourAt = performance.now() + 1800;
      layout();
    },
    hide() { s.visible = false; },
    enter(id) { enter(W_.findIndex(w => w.id === id)); },
    select(i) { light(clamp(i, 0, W_.length - 1), 'touch'); },
    get active() { return s.active; },
    get ready() { return !!s.assets; },
  };
}
