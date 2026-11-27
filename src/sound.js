// The score: five instrumental cues, one per chapter of light, generated with
// ElevenLabs Music through Higgsfield (film/requests/E3-cue-report.md). Silent
// until a visitor turns it on; then it follows the scroll from chapter to chapter.

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
const LEVEL = .9, DUCKED = .12;

export const chapterOf = room => Object.keys(CHAPTERS).find(name => CHAPTERS[name].includes(room));

export function createScore(url) {
  let context, master, on = false, current = null, room = null, ducked = false;
  const tracks = {};

  function track(name) {
    if (tracks[name]) return tracks[name];
    const element = new Audio(url(`sound/E3-${name}.mp3`));
    element.loop = true;
    element.preload = 'auto';
    // A gain node per cue, because iOS ignores the volume of media elements.
    const gain = context.createGain();
    gain.gain.value = 0;
    context.createMediaElementSource(element).connect(gain).connect(master);
    return (tracks[name] = { element, gain, started: false });
  }
  function ramp(param, value, seconds) {
    const now = context.currentTime;
    param.cancelScheduledValues(now);
    param.setValueAtTime(param.value, now);
    param.linearRampToValueAtTime(value, now + seconds);
  }
  function fadeTo(name) {
    for (const [key, other] of Object.entries(tracks)) {
      if (key === name) continue;
      ramp(other.gain.gain, 0, FADE[name]);
      setTimeout(() => { if (current !== key) other.element.pause(); }, FADE[name] * 1000 + 250);
    }
    const next = track(name);
    if (!next.started) { next.element.currentTime = ENTRY[name]; next.started = true; }
    next.element.play().catch(() => {});
    ramp(next.gain.gain, 1, FADE[name]);
    current = name;
  }

  return {
    get on() { return on; },
    async toggle() {
      on = !on;
      if (on) {
        if (!context) {
          context = new (window.AudioContext || window.webkitAudioContext)();
          master = context.createGain();
          master.connect(context.destination);
          // Start every cue inside this click, silently, so later chapters may play on phones.
          for (const name of Object.keys(CHAPTERS)) {
            const cue = track(name);
            cue.element.play().then(() => { if (name !== current) cue.element.pause(); }).catch(() => {});
          }
        }
        await context.resume();
        ramp(master.gain, ducked ? DUCKED : LEVEL, .4);
        current = null;
        fadeTo(chapterOf(room) || 'night');
      } else if (context) {
        ramp(master.gain, 0, .6);
        setTimeout(() => {
          if (on) return;
          for (const cue of Object.values(tracks)) cue.element.pause();
          context.suspend();
        }, 700);
      }
      return on;
    },
    setRoom(id) {
      room = id;
      const name = chapterOf(id);
      if (on && context && name && name !== current) fadeTo(name);
    },
    duck(flag) {
      ducked = flag;
      if (on && context) ramp(master.gain, flag ? DUCKED : LEVEL, .5);
    },
    pause() { if (on && context) context.suspend(); },
    resume() { if (on && context) context.resume(); },
  };
}
