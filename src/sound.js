// Sound, on by default. Browsers only allow it after a touch, a click or a key,
// so it begins with the visitor's first gesture.
//
// Music: each work plays its own track once Astra delivers it (src/v2-assets.json);
// until then it plays the closest of the five cues generated for version 1, one
// per chapter of light (film/requests/E3-cue-report.md). Her light, the landing,
// plays the night cue.
// Notes: each ray is a string. Astra's tuned harp notes replace a plucked string
// synthesised here (Karplus–Strong) in the same fifteen pitches.
// Moves: each move between works, the shine and the ray opening get a sound
// once Astra delivers it, and are silent until then.

export const CHAPTERS = {
  night: ['P01', 'P02', 'P03', 'P13'],
  gold: ['P15', 'P08'],
  neon: ['P11', 'P09', 'P10'],
  day: ['P05', 'P06', 'P04', 'P14'],
  studio: ['P12', 'P07'],
};
// Entry points and crossfade lengths from the 84 BPM audition (film/requests/E3-cues.json).
const ENTRY = { night: 2.917, gold: 2.857, neon: 11.459, day: 5.774, studio: .08 };
const FADE = { night: 1.429, gold: 1.429, neon: 1.429, day: .714, studio: 1.429 };
// The version 1 cues sit at −23 LUFS, the version 2 tracks at −18; these gains even them out.
const CUE_GAIN = 1.5, TRACK_GAIN = .85, LANDING = .55, DUCKED = .12;
// D major pentatonic from D3, one note per ray, low (night) to high (daylight).
const PITCHES = [50, 52, 54, 57, 59, 62, 64, 66, 69, 71, 74, 76, 78, 81, 83];
const storageKey = 'carryistic.sound';
// Tracks that never overlap another: her film's own soundtrack.
const ALONE = new Set(['P03']);

export const chapterOf = room => Object.keys(CHAPTERS).find(name => CHAPTERS[name].includes(room));

export function createScore(url, slots) {
  let context = null, master = null, music = null, current = null, want = null, level = 1, ducked = false;
  let on = true;
  try { on = localStorage.getItem(storageKey) !== 'off'; } catch { /* default on */ }
  const tracks = {}, buffers = {}, plucks = [];

  const nameFor = work => (work === 'light' ? 'night' : slots.tracks[work]?.ready ? work : chapterOf(work));
  const fileFor = name => (CHAPTERS[name] ? `sound/E3-${name}.mp3` : slots.tracks[name].file);
  const entryFor = name => (CHAPTERS[name] ? ENTRY[name] : slots.tracks[name].entry || 0);
  const fadeFor = name => FADE[name] ?? 1.2;

  function ramp(param, value, seconds) {
    const now = context.currentTime;
    param.cancelScheduledValues(now);
    param.setValueAtTime(param.value, now);
    param.linearRampToValueAtTime(value, now + seconds);
  }
  function track(name) {
    if (tracks[name]) return tracks[name];
    const element = new Audio(url(fileFor(name)));
    element.loop = true;
    element.preload = 'auto';
    // A gain node per track, because iOS ignores the volume of media elements.
    const gain = context.createGain();
    gain.gain.value = 0;
    context.createMediaElementSource(element).connect(gain).connect(music);
    return (tracks[name] = { element, gain, started: false, base: CHAPTERS[name] ? CUE_GAIN : TRACK_GAIN });
  }
  function fadeTo(name) {
    if (!context || !name) return;
    // Her film's own soundtrack (P03) is in another key and tempo: it fades through silence,
    // never under or over a D track, and always starts from the film's beginning.
    const through = ALONE.has(name) || ALONE.has(current);
    const seconds = through ? .45 : fadeFor(name);
    for (const [key, other] of Object.entries(tracks)) {
      if (key === name) continue;
      ramp(other.gain.gain, 0, seconds);
      setTimeout(() => { if (current !== key) other.element.pause(); }, seconds * 1000 + 250);
    }
    const next = track(name);
    const begin = () => {
      if (current !== name) return;
      if (!next.started || ALONE.has(name)) { next.element.currentTime = entryFor(name); next.started = true; }
      next.element.play().catch(() => {});
      ramp(next.gain.gain, next.base, through ? .5 : seconds);
    };
    const wasPlaying = current;
    current = name;
    if (through && wasPlaying) setTimeout(begin, seconds * 1000 + 60);
    else begin();
  }
  function apply() {
    if (!context) return;
    ramp(master.gain, on ? (ducked ? DUCKED : 1) : 0, .5);
    ramp(music.gain, level, .8);
  }

  // A plucked string, synthesised once per ray until Astra's notes arrive.
  function pluck(i) {
    if (plucks[i]) return plucks[i];
    const rate = context.sampleRate, seconds = 2.2;
    const frequency = 440 * 2 ** ((PITCHES[i] - 69) / 12);
    const buffer = context.createBuffer(1, Math.round(rate * seconds), rate);
    const out = buffer.getChannelData(0);
    const period = Math.max(2, Math.round(rate / frequency));
    const line = new Float32Array(period);
    for (let j = 0; j < period; j++) line[j] = (Math.random() * 2 - 1) * .5;
    // a softer attack: smooth the burst, like a finger rather than a pick
    for (let pass = 0; pass < 2; pass++) for (let j = 1; j < period; j++) line[j] = (line[j] + line[j - 1]) / 2;
    const decay = .996 - (i / PITCHES.length) * .002;
    for (let n = 0, j = 0; n < out.length; n++) {
      const next = (j + 1) % period;
      const value = line[j];
      out[n] = value * Math.min(1, n / 40);
      line[j] = (value + line[next]) * .5 * decay;
      j = next;
    }
    return (plucks[i] = buffer);
  }
  function sample(file) {
    if (buffers[file]) return buffers[file];
    const pending = fetch(url(file)).then(response => {
      if (!response.ok) throw new Error(`Could not load ${file}`);
      return response.arrayBuffer();
    }).then(bytes => context.decodeAudioData(bytes)).catch(() => {
      delete buffers[file];
      return null;
    });
    return (buffers[file] = pending);
  }
  function play(buffer, gain = .5, offset = 0) {
    if (!buffer || !context || !on || offset >= buffer.duration) return;
    const source = context.createBufferSource();
    const g = context.createGain();
    g.gain.value = gain;
    source.buffer = buffer;
    source.connect(g).connect(master);
    source.start(0, offset);
  }

  return {
    get on() { return on; },
    // The first gesture anywhere: open the audio and start every cue silently inside it,
    // so later works may play on phones.
    unlock() {
      if (context) return;
      context = new (window.AudioContext || window.webkitAudioContext)();
      master = context.createGain();
      master.gain.value = 0;
      music = context.createGain();
      music.gain.value = level;
      music.connect(master).connect(context.destination);
      for (const name of Object.keys(CHAPTERS)) {
        const cue = track(name);
        cue.element.play().then(() => { if (name !== current) cue.element.pause(); }).catch(() => {});
      }
      for (const name of ['shine', 'open']) {
        const slot = slots.sounds[name];
        if (slot?.ready) sample(slot.file);
      }
      context.resume();
      apply();
      fadeTo(want);
    },
    toggle() {
      on = !on;
      try { localStorage.setItem(storageKey, on ? 'on' : 'off'); } catch { /* fine */ }
      if (context) { if (on) context.resume(); apply(); if (on && want !== current) fadeTo(want); }
      return on;
    },
    // 'light' for the landing, or a work's id.
    setWork(work, quieter = false) {
      want = nameFor(work);
      level = work === 'light' || quieter ? LANDING : 1;
      if (context) { apply(); if (want !== current) fadeTo(want); }
    },
    note(i) {
      if (!context || !on) return;
      const slot = slots.notes[String(i + 1).padStart(2, '0')];
      if (slot?.ready) sample(slot.file).then(buffer => play(buffer, .55));
      else play(pluck(i), .32);
    },
    effect(name, offset = 0) {
      const slot = slots.sounds[name];
      if (!context || !on || !slot?.ready) return false;
      const started = context.currentTime;
      sample(slot.file).then(buffer => play(buffer, .5, offset + context.currentTime - started));
      return true;
    },
    duck(flag) { ducked = flag; apply(); },
    pause() { context?.suspend(); },
    resume() { if (on) context?.resume(); },
  };
}
