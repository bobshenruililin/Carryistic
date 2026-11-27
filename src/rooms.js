// The film, written as rooms. Each room is one of Carry's posts, in the order
// of the light in her photographs: dusk, night, gold, neon, day, the studio.
// A room's ground is a colour sampled from one of her slides; each handoff is
// an object or colour that appears in both works (direction/scroll-direction.md).
//
// Beat durations are in screen heights of scrolling. Keyframe times inside a
// beat run 0–1 and may reach past 1 to overlap the next beat.

import plates from './plates.json' with { type: 'json' };
import motion from './motion.json' with { type: 'json' };

const slidesOf = post => plates.filter(plate => plate.postId === post).map(plate => plate.id);
const OPEN = [0, 0, 0, 0];

// A picture enters (through a window, a fade, a rise or already present),
// optionally travels in scale, and leaves (fade, or stays to the beat's end).
function image(id, o = {}) {
  const { from = 'window', zoom = [1, 1], inAt = .3, outAt = 1, out = 'fade', outLen = .1, rotate } = o;
  const window = o.window || [30, 32, 30, 32];
  const start = {
    o: from === 'none' ? 1 : 0,
    s: zoom[0],
    c: from === 'window' ? window : OPEN,
    y: from === 'rise' ? 5 : 0,
    r: rotate ? rotate[0] : 0,
  };
  const keys = [[0, start], [from === 'none' ? .001 : inAt, { o: 1, c: OPEN, y: 0 }]];
  if (from === 'window') keys.splice(1, 0, [inAt * .35, { o: 1 }]);
  if (rotate) keys.push([rotate[2] ?? .25, { r: rotate[0] }], [rotate[3] ?? .8, { r: rotate[1] }]);
  keys.push([outAt, { s: zoom[1] }]);
  if (out === 'fade') keys.push([outAt + outLen, { o: 0 }]);
  return { kind: 'img', id, keys: keys.sort((a, b) => a[0] - b[0]), ...pick(o) };
}

function pick(o) {
  const { size, sizeP, a, at, atP, on, crop, pos, z, name, origin } = o;
  return Object.fromEntries(Object.entries({ size, sizeP, a, at, atP, on, crop, pos, z, name, origin }).filter(([, v]) => v !== undefined));
}

const show = (id, dur, o = {}) => ({ dur, lead: o.lead, layers: [image(id, o)] });

// Several pictures arrive one by one in one of Carry's own arrangements, then leave together.
const paths = {
  row: n => Array.from({ length: n }, (_, i) => ({ at: [.5 + (i - (n - 1) / 2) * .92 / n, .48], size: { box: [.86 / n, .74] }, atP: [.5, .5 + (i - (n - 1) / 2) * .86 / n], sizeP: { box: [.84, .8 / n] } })),
  pair: () => [{ at: [.275, .48], size: { box: [.42, .78] }, atP: [.5, .28], sizeP: { box: [.86, .4] } }, { at: [.725, .48], size: { box: [.42, .78] }, atP: [.5, .72], sizeP: { box: [.86, .4] } }],
  // Fly's descent (P05-03): each step lands lower, further right and larger.
  diag: n => Array.from({ length: n }, (_, i) => {
    const t = n === 1 ? 1 : i / (n - 1);
    return { at: [.24 + .5 * t, .28 + .42 * t], size: { fit: .26 + .2 * t }, atP: [.3 + .4 * t, .2 + .6 * t], sizeP: { fit: .34 + .18 * t } };
  }),
  // The portraits in P06-09 climb a white field like steps.
  steps: n => Array.from({ length: n }, (_, i) => {
    const t = n === 1 ? 0 : i / (n - 1);
    return { at: [.22 + .56 * t, .7 - .4 * t], size: { fit: .36 }, atP: [.32 + .36 * t, .78 - .56 * t], sizeP: { fit: .42 } };
  }),
};

function cascade(ids, dur, o = {}) {
  const spots = paths[o.path || 'row'](ids.length);
  const layers = ids.map((id, i) => {
    const enter = .06 + .5 * i / Math.max(ids.length, 1);
    return image(id, { from: 'rise', inAt: enter + .16, ...spots[i], out: 'fade', outAt: .92 + i * .015, outLen: .14, ...o.each });
  });
  for (const [i, layer] of layers.entries()) {
    const enter = .06 + .5 * i / Math.max(ids.length, 1);
    layer.keys[0][0] = enter;
  }
  return { dur, lead: o.lead, layers };
}

// A run of pictures in one place, each taking over from the last, like a contact sheet read at speed.
function flash(ids, dur, o = {}) {
  const n = ids.length;
  const step = 1 / n;
  const layers = ids.map((id, i) => {
    const t0 = i * step;
    const keys = [[Math.max(0, t0 - step * .3), { o: 0, s: 1.04 }], [t0 + step * .05, { o: 1 }], [t0 + step, { s: 1 }]];
    keys.push([i === n - 1 ? 1 : t0 + step * 1.25, { o: i === n - 1 ? 1 : 0 }]);
    if (i === n - 1) keys.push([1.15, { o: 0 }]);
    return { kind: 'img', id, keys, size: o.size || { fit: .84 }, z: i + 1 };
  });
  return { dur, lead: o.lead, layers };
}

// Registered pictures of one subject, each wiped over the last while the camera moves as one.
function peel(stack, dur, o = {}) {
  const layers = stack.map(([id, anchor, wipe], i) => {
    // The first picture sits centred and zooms about its landmark; the others register their
    // landmark to that same point at the same width, so the camera moves them as one.
    const base = i
      ? { kind: 'img', id, name: id, a: anchor, on: [stack[0][0], ...stack[0][1]], size: { ref: stack[0][0] }, z: i + 1 }
      : { kind: 'img', id, name: id, at: o.at || [.5, .5], origin: anchor, size: o.size, z: 1 };
    const zooms = o.zoom || [[0, 1], [1, 1]];
    const keys = [];
    const [w0, w1] = wipe || [0, 0];
    keys.push([i ? w0 : 0, { o: 1, c: i ? [0, 100, 0, 0] : OPEN }]);
    if (i) keys.push([w1, { c: OPEN }]);
    for (const [t, s] of zooms) keys.push([t, { s }]);
    const end = stack[i + 1] ? stack[i + 1][2][1] + .02 : 1;
    keys.push([end, {}]);
    if (!stack[i + 1]) keys.push([1 + (o.outLen ?? .16), { o: 0 }]);
    keys.sort((a, b) => a[0] - b[0]);
    // Carry forward the zoom at each wipe so registered layers move together.
    return { ...base, keys: keys.filter(([t]) => t >= (i ? w0 : 0) && t <= (stack[i + 1] ? end : 9)).map(([t, v]) => [t, { ...v, s: v.s ?? zoomAt(zooms, t) }]) };
  });
  return { dur, lead: o.lead, layers };
}

function zoomAt(zooms, t) {
  let i = 0;
  while (i < zooms.length - 1 && t > zooms[i + 1][0]) i++;
  const [t0, s0] = zooms[i];
  const [t1, s1] = zooms[Math.min(i + 1, zooms.length - 1)];
  if (t1 === t0) return s1;
  const u = Math.min(1, Math.max(0, (t - t0) / (t1 - t0)));
  return s0 + (s1 - s0) * u * u * (3 - 2 * u);
}

const flip = (set, dur, o = {}) => ({
  dur, lead: o.lead,
  layers: [{ kind: 'flip', set, size: o.size || { fit: .9 }, sizeP: o.sizeP, keys: [[0, { o: o.from === 'none' ? 1 : 0, f: 0 }], [.06, { o: 1 }], [o.end ?? .96, { f: 1 }], [1, { f: 1 }], ...(o.out === 'none' ? [] : [[1.12, { o: 0 }]])] }],
});

// Every slide of the post, in one of Carry's own layouts: a band across the field
// (P04-06, P09-01, P10-08), a column (P13-04, P14-16) or Fly's diagonal (P05-03).
const strip = (post, dur, lead, o = {}) => ({
  dur, lead,
  layers: [{ kind: 'strip', ids: slidesOf(post), band: o.band, dir: o.dir, angle: o.angle, z: 40, keys: [[0, { o: 1, f: 0 }], [1, { f: 1 }]] }],
});

// The move that hands a room to the next one. It overlaps the room's last beat.
const flood = (color, dur) => ({ dur, lead: dur * .45, layers: [{ kind: 'flood', color, z: 50, keys: [[0, { f: 0 }], [1, { f: 1 }]] }] });
function exit(type, dur, params = {}) {
  const keys = [[0, { f: 0 }], [1, { f: 1 }]];
  const clip = params.clip && motion[params.clip];
  // A rendered version of the move (Astra's M shots) replaces the code-built one once it is ready.
  if (clip?.ready) {
    return { dur, lead: dur * .45, layers: [
      { kind: 'video', file: clip.file, aspect: clip.aspect || 1, size: { fit: .84 }, z: 30, keys: [[0, { o: 1, f: 0 }], [.92, { f: 1 }], [1, { f: 1 }]] },
      { kind: 'exit', type: 'cross', keys },
    ] };
  }
  return { dur, lead: dur * .45, layers: [{ kind: 'exit', type, params, keys }] };
}

// A generated passage Astra renders between two of Carry's frames. Until the
// clip is delivered and marked ready in motion.json, the straight cut plays:
// the first picture travels toward its landmark and the second takes its place.
function bridge(key, from, to, dur, o = {}) {
  const clip = motion[key];
  const box = { size: o.size || { fit: .84 } };
  if (clip?.ready) {
    return { dur, lead: o.lead, layers: [{ kind: 'video', file: clip.file, aspect: clip.aspect || 1, ...box, z: 5, keys: [[0, { o: 1, f: 0 }], [1, { f: 1 }], [1.1, { o: 0 }]] }] };
  }
  const name = `${from.id}@bridge`;
  if (!to) {
    // The next room is revealed by the room's exit move; this picture travels toward its landmark until then.
    return { dur, lead: o.lead, layers: [{ kind: 'img', id: from.id, name, crop: from.crop, pos: from.pos, origin: from.at, ...box, z: 5, keys: [[0, { o: 1, s: 1 }], [1, { s: from.zoom || 1.5 }]] }] };
  }
  const fromLayer = { kind: 'img', id: from.id, name, crop: from.crop, pos: from.pos, origin: from.at, ...box, z: 5, keys: [[0, { o: 1, s: 1 }], [.62, { s: from.zoom || 1.5 }], [.9, { o: 0, s: (from.zoom || 1.5) * 1.06 }]] };
  const toLayer = { kind: 'img', id: to.id, crop: to.crop, pos: to.pos, origin: to.at, ...box, z: 6, keys: [[.5, { o: 0, s: to.zoom || 1.4 }], [.86, { o: 1 }], [1, { s: 1 }], [1.1, {}]] };
  return { dur, lead: o.lead, layers: [fromLayer, toLayer] };
}

// A generated movement inside one picture (Astra renders it from that picture).
// Until it is delivered, the still itself plays with a slow camera move.
function living(key, id, dur, o = {}) {
  const clip = motion[key];
  if (!clip?.ready) return show(id, dur, o);
  const keys = [[0, { o: o.from === 'none' ? 1 : 0, f: 0 }], [.12, { o: 1 }], [1, { f: 1 }]];
  if (o.out !== 'none') keys.push([1.12, { o: 0 }]);
  return { dur, lead: o.lead, layers: [{ kind: 'video', file: clip.file, aspect: clip.aspect || 1, size: o.size, keys }] };
}

const EYE = { oil: [.575, .47], line: [.605, .493], photo: [.602, .494] };
const BOUQUET = 1080;

export const rooms = [
  {
    id: 'P01', title: 'Dusk til Dawn', ground: '#040406', ink: 'light', handoff: 'shutters',
    beats: [
      // The entrance: the painting, whole, then the same glance in pencil and in the photograph it came from.
      peel([
        ['P01-02', EYE.oil],
        ['P01-08', EYE.line, [.4, .55]],
        ['P01-09', EYE.photo, [.62, .76]],
      ], 2.6, { size: { fit: .86 }, at: [.5, .5], zoom: [[0, 1], [.12, 1], [.4, 2.35], [1, 2.5]] }),
      show('P01-07', .9, { size: { fit: .9 }, zoom: [1.1, 1] }),
      show('P01-06', .9, { size: { fit: .88 }, from: 'fade', zoom: [1, 1.05] }),
      cascade(['P01-01', 'P01-03', 'P01-05'], 1.1),
      strip('P01', 1.5, 1.2),
      // White flecks of paint, then the BLACKOUT triptych drops in panel by panel.
      bridge('H1', { id: 'P01-04', crop: 1, pos: '50% 0%', at: [.64, .15], zoom: 2.4 }, null, 1.5),
      exit('shutters', .95, { clip: 'M3' }),
    ],
  },
  {
    id: 'P02', title: 'Blackout photographs', ground: '#000000', ink: 'light', handoff: 'window',
    beats: [
      show('P02-01', .7, { from: 'none', size: { fit: .84 }, zoom: [1, 1.05] }),
      show('P02-06', 1, { size: { cover: 1 }, zoom: [1.08, 1] }),
      cascade(['P02-02', 'P02-03', 'P02-07'], 1.1),
      // The bouquet holds still while the room assembles around the cut-out (src/blackout-registration.json).
      {
        dur: 1.3, layers: [
          { kind: 'img', id: 'P02-05', name: 'room', size: { fit: .82 }, z: 1, keys: [[.32, { o: 0, c: [12.5, 12.5, 12.5, 12.5] }], [.4, { o: 1 }], [.72, { c: OPEN }], [1, {}], [1.15, { o: 0 }]] },
          { kind: 'img', id: 'P02-04', size: { ref: 'room', k: .749849576 }, a: [0, 0], on: ['room', 134.751865 / BOUQUET, 135.211213 / BOUQUET], z: 2, keys: [[0, { o: 0, y: 3 }], [.18, { o: 1, y: 0 }], [.42, {}], [.6, { o: 0 }]] },
        ],
      },
      cascade(['P02-08', 'P02-09'], .9, { path: 'pair' }),
      cascade(['P02-10', 'P02-11'], .9, { path: 'pair' }),
      strip('P02', 1.7, 1.5),
      show('P02-12', .7, { size: { fit: .84 } }),
      living('H2', 'P02-13', 1.4, { size: { cover: 1 }, zoom: [1, 1.3], out: 'none' }),
      // The film opens in the far window of the empty hall.
      exit('window', .9, { rect: [.41, .36, .18, .22], scale: 1.4 }),
    ],
  },
  {
    id: 'P03', title: 'The Blackout Awaits', ground: '#2e2c32', ink: 'light', handoff: 'cross',
    beats: [
      flip('reel', 3.4, { size: { cover: 1 }, sizeP: { fit: 1 }, from: 'none', out: 'none' }),
      strip('P03', 1, 1, { band: [.06, .14] }),
      exit('cross', .5),
    ],
  },
  {
    id: 'P13', title: 'Artful and Grateful', ground: '#060201', ink: 'light', handoff: 'rise',
    beats: [
      show('P13-02', .9, { from: 'fade', size: { cover: 1 }, zoom: [1.12, 1] }),
      cascade(['P13-01', 'P13-03', 'P13-07'], 1.1),
      show('P13-04', .8, { size: { fit: .86 } }),
      show('P13-05', .9, { size: { cover: 1 }, zoom: [1, 1.08] }),
      cascade(['P13-08', 'P13-09'], .9, { path: 'pair' }),
      strip('P13', 1.6, 1.4, { dir: 'v', band: [.84, .1] }),
      // The quiet image: a flame over its reflection, held.
      show('P13-06', 1.1, { from: 'fade', size: { fit: .72 }, out: 'none' }),
      // The flame's light rises into a gold dome.
      bridge('H3', { id: 'P13-06', at: [.45, .4], zoom: 1.8 }, null, 1.1, { size: { fit: .72 } }),
      exit('rise', .95),
    ],
  },
  {
    id: 'P15', title: 'Domus Dei', ground: '#264050', ink: 'light', handoff: 'iris',
    beats: [
      show('P15-01', .9, { from: 'none', size: { fit: .72 }, zoom: [1, 1.6] }),
      show('P15-04', .8, { size: { cover: 1 }, zoom: [1.08, 1] }),
      show('P15-05', .9, { size: { cover: 1 }, zoom: [1, 1.14], rotate: [0, 9, 0, 1] }),
      cascade(['P15-02', 'P15-03', 'P15-09'], 1.1),
      living('H6', 'P15-06', .9, { size: { fit: .84 }, zoom: [1, 1.05] }),
      show('P15-08', .8, { size: { cover: 1 }, zoom: [1.06, 1] }),
      strip('P15', 1.5, 1.3),
      show('P15-07', .8, { size: { fit: .84 } }),
      // The halo's ring opens on the sculpture's gold rim.
      bridge('H4', { id: 'P15-07', at: [.5, .26], zoom: 2.6 }, null, 1.2),
      exit('iris', .85, { on: ['P15-07@bridge', .5, .26], from: 30 }),
    ],
  },
  {
    id: 'P08', title: 'To Bleed in Liquid Gold', ground: '#940103', ink: 'light', handoff: 'spin',
    beats: [
      show('P08-04', .9, { from: 'none', size: { fit: .84 } }),
      flip('orbit', 1.5, { size: { fit: .84 } }),
      show('P08-03', .9, { size: { cover: 1 }, zoom: [1, 1.18] }),
      cascade(['P08-01', 'P08-05', 'P08-06'], 1.1),
      show('P08-07', .8, { size: { fit: .7 } }),
      strip('P08', 1.4, 1.2),
      show('P08-02', .6, { size: { fit: .84 }, out: 'none' }),
      // The circle hands on: the gold rim of the opening becomes a record's red label.
      bridge('H7', { id: 'P08-04', at: [.62, .44], zoom: 2.4 }, null, 1.1),
      exit('spin', .95, { on: ['P08-04@bridge', .62, .44] }),
    ],
  },
  {
    id: 'P11', title: 'Record-store shoot', ground: '#251202', ink: 'light', handoff: 'flash',
    beats: [
      show('P11-01', .9, { from: 'none', size: { fit: .84 } }),
      flash(['P11-02', 'P11-03', 'P11-04', 'P11-05', 'P11-07', 'P11-08', 'P11-09', 'P11-11', 'P11-12', 'P11-13', 'P11-14'], 2.8),
      show('P11-10', .9, { size: { fit: .86 } }),
      strip('P11', 1.8, 1.6),
      show('P11-06', .8, { size: { fit: .84 }, out: 'none' }),
      // A camera flash, as in the shoot.
      exit('flash', .55),
    ],
  },
  {
    id: 'P09', title: 'Graphic pose studies', ground: '#f9ff01', ink: 'dark', handoff: 'cross',
    beats: [
      show('P09-05', .7, { from: 'none', size: { fit: .84 } }),
      flash(['P09-02', 'P09-03', 'P09-07', 'P09-08', 'P09-09', 'P09-11', 'P09-12'], 2.1),
      cascade(['P09-04', 'P09-06'], .9, { path: 'pair' }),
      show('P09-10', .6, { size: { fit: .84 } }),
      show('P09-13', .6, { size: { fit: .84 }, from: 'fade' }),
      show('P09-14', .7, { size: { fit: .86 } }),
      strip('P09', 1.2, .3, { band: [.41, .18] }),
      show('P09-01', .9, { size: { fit: .84 }, out: 'none' }),
      // The same template, violet into red.
      exit('cross', .7),
    ],
  },
  {
    id: 'P10', title: 'Record-store portraits', ground: '#0007ba', ink: 'light', handoff: 'star',
    beats: [
      show('P10-08', .7, { from: 'none', size: { fit: .84 } }),
      // The held cap, then its echoes arrive left to right.
      { dur: 1.1, layers: [{ kind: 'img', id: 'P10-01', size: { fit: .86 }, keys: [[0, { o: 0, c: [0, 58, 0, 0] }], [.12, { o: 1 }], [.78, { c: OPEN }], [1, {}], [1.15, { o: 0 }]] }] },
      flash(['P10-02', 'P10-03', 'P10-04', 'P10-07', 'P10-09'], 1.5),
      show('P10-05', .8, { size: { fit: .84 } }),
      flash(['P10-06', 'P10-11'], .8),
      cascade(['P10-10', 'P10-12'], .8, { path: 'pair' }),
      strip('P10', 1.2, .3, { band: [.41, .18] }),
      // The red starburst spins open on Fly's sky.
      show('P10-08', 1.1, { size: { fit: .84 }, name: 'P10-08@end', out: 'none' }),
      exit('star', 1, { on: ['P10-08@end', .72, .27] }),
    ],
  },
  {
    id: 'P05', title: 'Fly', ground: '#0a80da', ink: 'light', handoff: 'flood',
    beats: [
      // Fly read backwards: the blocks become the bodies, the bodies find the waterfront.
      {
        dur: 2.1, layers: [
          { kind: 'img', id: 'P05-03', size: { fit: .84 }, z: 1, keys: [[0, { o: 0, c: [30, 32, 30, 32] }], [.06, { o: 1 }], [.2, { c: OPEN }], [.58, {}]] },
          { kind: 'img', id: 'P05-02', size: { fit: .84 }, z: 2, keys: [[.3, { o: 1, c: [0, 100, 100, 0] }], [.52, { c: OPEN }], [.86, {}]] },
          { kind: 'img', id: 'P05-01', size: { fit: .84 }, z: 3, keys: [[.62, { o: 1, c: [0, 100, 100, 0] }], [.84, { c: OPEN }], [1, {}], [1.12, { o: 0 }]] },
        ],
      },
      living('H5', 'P05-01', .9, { from: 'none', size: { fit: .84 } }),
      show('P05-01', 1, { from: 'fade', size: { cover: 1 }, zoom: [1, 1.1] }),
      cascade(['P05-04', 'P05-05', 'P05-06'], 1.3, { path: 'diag' }),
      strip('P05', 1.3, .3, { dir: 'd', band: [0, .16] }),
      flood('#922626', .9),
    ],
  },
  {
    id: 'P06', title: 'DC Chronicles', ground: '#922626', ink: 'light', handoff: 'flip',
    beats: [
      show('P06-01', .9, { size: { fit: .84 } }),
      cascade(['P06-03', 'P06-04', 'P06-05'], 1.1),
      show('P06-06', .8, { size: { cover: 1 }, zoom: [1.06, 1] }),
      show('P06-07', .6, { size: { fit: .8 } }),
      // The bench flips with the scroll, as it flips between Carry's four views.
      show('P06-08', 1, { size: { fit: .84 }, rotate: [0, 180, .25, .8] }),
      cascade(['P06-09', 'P06-10', 'P06-11'], 1.1, { path: 'steps' }),
      strip('P06', 1.5, 1.3),
      show('P06-02', .9, { size: { fit: .84 }, out: 'none' }),
      // The page turns over, as the bench turns between Carry's views.
      exit('flip', .9, { clip: 'M2' }),
    ],
  },
  {
    id: 'P04', title: 'Streets of New York', ground: '#caeaff', ink: 'dark', handoff: 'slices',
    beats: [
      show('P04-02', .9, { from: 'none', size: { fit: .84 } }),
      cascade(['P04-01', 'P04-03', 'P04-04'], 1.1),
      show('P04-05', .8, { size: { fit: .84 } }),
      cascade(['P04-07', 'P04-08'], .9, { path: 'pair' }),
      cascade(['P04-09', 'P04-10'], .8, { path: 'pair' }),
      strip('P04', 1.2, .3, { band: [.41, .18] }),
      show('P04-06', .9, { size: { fit: .84 }, out: 'none' }),
      // Her gallery strip becomes the cut: bands slide in from alternate sides.
      exit('slices', .95, { bands: 7 }),
    ],
  },
  {
    id: 'P14', title: 'Italy in motion', ground: '#d0bda1', ink: 'dark', handoff: 'drain',
    beats: [
      show('P14-16', 1, { from: 'none', size: { fit: .84 } }),
      show('P14-01', .7, { size: { fit: .84 } }),
      flash(['P14-02', 'P14-03', 'P14-04', 'P14-05', 'P14-06', 'P14-07', 'P14-08', 'P14-09', 'P14-10', 'P14-12', 'P14-13', 'P14-15', 'P14-17', 'P14-18'], 3.4),
      show('P14-11', .9, { size: { fit: .84 }, origin: [.47, .67], zoom: [1, 1.9] }),
      strip('P14', 2, 1.8, { dir: 'v', band: [.84, .1] }),
      show('P14-14', 1, { size: { fit: .84 }, out: 'none' }),
      // Colour drains to graphite and paper.
      exit('drain', 1),
    ],
  },
  {
    id: 'P12', title: 'First Weeks at RISD', ground: '#ffffff', ink: 'dark', handoff: 'unfold',
    beats: [
      show('P12-03', .9, { from: 'fade', size: { fit: .84 } }),
      cascade(['P12-01', 'P12-02'], .9, { path: 'pair' }),
      show('P12-04', .9, { size: { cover: 1 }, zoom: [1.08, 1] }),
      cascade(['P12-05', 'P12-06'], .8, { path: 'pair' }),
      show('P12-08', .8, { size: { cover: 1 }, zoom: [1, 1.06] }),
      strip('P12', 1.4, 1.2),
      show('P12-07', .9, { size: { fit: .84 }, out: 'none' }),
      // A pencil line opens into a page.
      exit('unfold', .95, { clip: 'M1' }),
    ],
  },
  {
    id: 'P07', title: 'Proud Daddy', ground: '#8e8d8b', ink: 'light', handoff: 'end',
    beats: [
      show('P07-04', .8, { from: 'none', size: { fit: .86 } }),
      flash(['P07-05', 'P07-06', 'P07-01'], 1.8, { size: { fit: .9 } }),
      cascade(['P07-03', 'P07-07', 'P07-08', 'P07-09'], 1.2),
      show('P07-02', .7, { size: { fit: .88 } }),
      show('P07-12', .7, { size: { fit: .86 } }),
      strip('P07', 1.6, 1.4),
      // The ghost of the child on raw linen, beside the painting: the afterimage.
      show('P07-11', 1.1, { from: 'fade', size: { fit: .9 } }),
      show('P07-10', 1.3, { from: 'fade', size: { fit: .9 }, out: 'none' }),
    ],
  },
].map(room => ({ ...room, slides: slidesOf(room.id) }));
