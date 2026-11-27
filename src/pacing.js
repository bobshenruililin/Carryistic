// The pictures still use Opus's timeline. A hold adds distance to the native
// scroll at one frame, so the picture stays while the viewer passes through it.
export function buildPacing(duration, holds, pace, portrait) {
  const running = duration * pace;
  let held = 0;
  const pauses = holds.map(hold => {
    const progress = hold.time / duration;
    const start = progress * running + held;
    const distance = portrait ? hold.phone : hold.desktop;
    held += distance;
    return { start, end: start + distance, progress, light: hold.light };
  });
  return { running, length: running + held, pauses };
}

export function samplePacing(pacing, fraction) {
  const distance = Math.max(0, Math.min(1, fraction)) * pacing.length;
  let held = 0;
  for (const stop of pacing.pauses) {
    if (distance < stop.start) break;
    if (distance < stop.end) {
      const across = (distance - stop.start) / (stop.end - stop.start);
      return { progress: stop.progress, light: stop.light, glow: Math.sin(Math.PI * across) ** 2 };
    }
    held += stop.end - stop.start;
  }
  return { progress: Math.min(1, (distance - held) / pacing.running), light: null, glow: 0 };
}
