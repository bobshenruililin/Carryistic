import registration from './blackout-registration.json' with { type: 'json' };

export const roomFiles = [
  'blackout-silhouette.webp', 'blackout-aperture.webp', 'blackout-kneeling.webp',
  'blackout-room.webp', 'blackout-hall.webp',
];

const frontSheets = new WeakMap();
const { size, silhouetteRect, figureRect, roomInsetRect, cutToRoom } = registration;

// The black gutters of the triptych in P02-01 are centered at these source pixels.
const divisions = [0, 468 / 1080, 748.5 / 1080, 1];
const mix = (a, b, amount) => a + (b - a) * amount;

function ease(start, end, value) {
  const t = Math.max(0, Math.min(1, (value - start) / (end - start)));
  return t * t * (3 - 2 * t);
}

function frontSheet(images) {
  if (frontSheets.has(images)) return frontSheets.get(images);
  const paper = document.createElement('canvas');
  paper.width = paper.height = size;
  const ctx = paper.getContext('2d');
  // The rim and the opening have complementary alpha along their shared edge.
  // Cut both out of the paper before adding the rim's original colour back in.
  ctx.drawImage(images['blackout-silhouette.webp'], ...silhouetteRect);
  ctx.globalCompositeOperation = 'lighter';
  ctx.drawImage(images['blackout-aperture.webp'], ...silhouetteRect);
  ctx.globalCompositeOperation = 'source-out';
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, size, size);
  ctx.globalCompositeOperation = 'lighter';
  ctx.drawImage(images['blackout-silhouette.webp'], ...silhouetteRect);
  frontSheets.set(images, paper);
  return paper;
}

function hall(ctx, width, height, progress, image) {
  const open = ease(.5, .98, progress);
  const paperSize = mix(Math.min(height * .83, width * .72), Math.max(width, height) * 1.01, open);
  const x = mix(width * .61, width * .5, open) - paperSize / 2;
  const y = mix(height * .54, height * .58, open) - paperSize * mix(.5, .61, open);
  const field = ctx.createLinearGradient(0, 0, width, height);
  field.addColorStop(0, '#222223');
  field.addColorStop(.55, '#393633');
  field.addColorStop(1, '#151518');
  ctx.fillStyle = field;
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#77736e';
  ctx.fillRect(x - 1, y - 1, paperSize + 2, paperSize + 2);
  ctx.drawImage(image, x, y, paperSize, paperSize);
  ctx.fillStyle = 'rgba(21,20,23,' + (.48 * (1 - open)) + ')';
  ctx.fillRect(x, y, paperSize, paperSize);
}

// Project a vertical edge of the mounted photograph as it turns about its hinge.
function edgeAt(x, top, bottom, hinge, angle, shift, lift) {
  const distance = x - hinge;
  const near = 1 / (1 - Math.abs(distance) * Math.sin(angle) / (size * 1.6));
  const mid = (top + bottom) / 2;
  return {
    x: hinge + shift + distance * Math.cos(angle) * near,
    top: mid + (top - mid) * near + lift,
    bottom: mid + (bottom - mid) * near + lift,
  };
}

function drawLeaf(ctx, image, left, right, top, bottom, index, amount) {
  const direction = index === 2 ? 1 : -1;
  const hinge = direction < 0 ? left : right;
  const angle = amount * 1.37;
  const shift = direction * size * (index === 1 ? 2.2 : 1.8) * amount ** 1.8;
  const lift = (index - 1.4) * size * .055 * amount;
  const width = right - left;
  const first = edgeAt(left, top, bottom, hinge, angle, shift, lift);
  const last = edgeAt(right, top, bottom, hinge, angle, shift, lift);
  const heightChange = Math.abs((first.bottom - first.top) - (last.bottom - last.top));
  const columns = Math.min(72, Math.max(1, Math.ceil(heightChange / 1.5)));
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(first.x, first.top);
  ctx.lineTo(last.x, last.top);
  ctx.lineTo(last.x, last.bottom);
  ctx.lineTo(first.x, first.bottom);
  ctx.closePath();
  ctx.clip();
  ctx.fillStyle = '#fff';
  ctx.fill();
  for (let i = 0; i < columns; i++) {
    const x0 = left + width * i / columns;
    const x1 = left + width * (i + 1) / columns;
    const a = edgeAt(x0, top, bottom, hinge, angle, shift, lift);
    const b = edgeAt(x1, top, bottom, hinge, angle, shift, lift);
    ctx.save();
    ctx.transform(b.x - a.x, b.top - a.top, 0, a.bottom - a.top, a.x, a.top);
    // Let the strips overlap in both image and projection. Only the outer
    // four edges of the paper are visible, even at shallow viewing angles.
    const overscan = i === columns - 1 ? 0 : Math.min(.3, 3 / (b.x - a.x));
    ctx.drawImage(image, x0, top, (x1 - x0) * (1 + overscan), bottom - top,
      0, 0, 1 + overscan, 1);
    ctx.restore();
  }
  if (amount > 0) {
    ctx.fillStyle = 'rgba(21,18,19,' + (.31 * Math.sin(angle)) + ')';
    ctx.fill();
  }
  ctx.restore();
}

function colorPhotograph(ctx, image, progress) {
  const [x, y, width, height] = roomInsetRect;
  const border = size * .029;
  const left = x - border, top = y - border;
  const mountedWidth = width + 2 * border, mountedHeight = height + 2 * border;
  if (progress < .57) {
    ctx.drawImage(image, left, top, mountedWidth, mountedHeight, left, top, mountedWidth, mountedHeight);
    return;
  }
  for (let i = 0; i < 3; i++) {
    const amount = ease(.57 + i * .044, .86 + i * .044, progress);
    if (amount >= 1) continue;
    drawLeaf(ctx, image, left + divisions[i] * mountedWidth, left + divisions[i + 1] * mountedWidth,
      top, top + mountedHeight, i, amount);
  }
}

function cutout(ctx, images, progress) {
  const depart = ease(.17, .52, progress);
  ctx.save();
  ctx.translate(cutToRoom.x, cutToRoom.y);
  ctx.scale(cutToRoom.scale, cutToRoom.scale);
  if (depart < 1) {
    ctx.save();
    ctx.translate(-size * 1.82 * depart, -size * .065 * depart);
    ctx.rotate(-.13 * depart);
    ctx.scale(1 - .34 * depart, 1 + .035 * depart);
    // This loose white backing slides away. Only the real hollow in P02-04 can expose
    // the color underneath. The surrounding paper and the figure have separate depths.
    const [x, y, width, height] = silhouetteRect;
    const slide = ease(.015, .21, progress);
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, size, size);
    ctx.clip();
    ctx.fillStyle = '#fff';
    ctx.fillRect(x - 2, y + (height + 3) * slide - 2, width + 4, height + 4);
    ctx.restore();
    ctx.drawImage(frontSheet(images), 0, 0);
    ctx.restore();
  }
  // P02-04 is an enlargement of this pose in P02-05. Both plates share this
  // coordinate system so the rose, wrist and knee meet the underlying photograph.
  ctx.globalAlpha = 1 - ease(.39, .50, progress);
  ctx.drawImage(images['blackout-kneeling.webp'], ...figureRect);
  ctx.restore();
}

export function drawRoom(ctx, width, height, progress, images) {
  hall(ctx, width, height, progress, images['blackout-hall.webp']);
  const align = ease(.12, .50, progress);
  const frontSize = Math.min(height * .86, width * .77);
  const framedSize = Math.min(height * 1.15, width * 1.08);
  const scale = mix(frontSize / cutToRoom.scale, framedSize, align) / size;
  ctx.save();
  ctx.translate(width * mix(.46, .52, align), height * .515);
  ctx.rotate(mix(-.035, 0, align));
  ctx.scale(scale, scale);
  ctx.translate(-size / 2, -size / 2);
  colorPhotograph(ctx, images['blackout-room.webp'], progress);
  if (progress < .52) cutout(ctx, images, progress);
  ctx.restore();
}
