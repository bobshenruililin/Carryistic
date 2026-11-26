import * as THREE from 'three';

const FLY_SIZE = 5.18;
const PAPER_PIXELS = 1280;
const POSES = [
  { crop: [0, 280, 225, 270], open: [-1.38, 1.27, 0.10] },
  { crop: [214, 409, 320, 318], open: [-0.43, 0.68, 0.74] },
  { crop: [368, 622, 296, 368], open: [0.59, 0.02, 1.28] },
  { crop: [522, 844, 454, 393], open: [1.85, -0.74, 1.75] },
];
const BLOCKS = [
  { crop: [0, 324, 87, 104], color: 0xb8b9b4, open: [0.14, 1.46, -0.90] },
  { crop: [128, 427, 164, 165], color: 0xc21302, open: [1.04, 0.98, -0.42] },
  { crop: [333, 557, 255, 256], color: 0xa1a707, open: [2.08, 0.33, 0.05] },
  { crop: [640, 768, 384, 384], color: 0x0a80da, open: [3.25, -0.58, 0.43] },
];
const FLY_FILES = [
  'fly-water.webp', 'fly-cut-paper.webp', 'fly-blocks.webp',
  ...POSES.map((_, i) => `pose-${i + 1}.webp`),
];
const LIQUID_FILES = [
  'liquid-arc.webp', 'liquid-relief-arc.webp', 'liquid-detail.webp', 'liquid-rim.webp',
];
const clamp = THREE.MathUtils.clamp;
const mix = THREE.MathUtils.lerp;

function ease(start, end, value) {
  return THREE.MathUtils.smoothstep(value, start, end);
}

function mesh(parent, geometry, material) {
  const object = new THREE.Mesh(geometry, material);
  parent.add(object);
  return object;
}

function surface(color, roughness = 0.88, metalness = 0) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}

function paperMaterial(map) {
  return new THREE.MeshBasicMaterial({
    color: 0xffffff, map, transparent: true, side: THREE.DoubleSide,
    depthWrite: false, toneMapped: false,
  });
}

function setAlpha(object, alpha) {
  object.visible = alpha > 0.001;
  object.material.opacity = alpha;
}

function plane(parent, w, h, material) {
  return mesh(parent, new THREE.PlaneGeometry(w, h), material);
}

function floor(parent, color, height) {
  const base = plane(parent, 160, 160, surface(color));
  base.rotation.x = -Math.PI / 2;
  base.position.y = height;
  base.receiveShadow = true;
  return base;
}

function makeShadowTexture() {
  const size = 64;
  const cells = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (x + 0.5) * 2 / size - 1;
      const dy = (y + 0.5) * 2 / size - 1;
      const radius = dx * dx + dy * dy;
      const index = (y * size + x) * 4;
      cells.set([255, 255, 255, Math.round(255 * Math.max(0, Math.exp(-3.8 * radius) - 0.024))], index);
    }
  }
  const texture = new THREE.DataTexture(cells, size, size, THREE.RGBAFormat);
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  return texture;
}

function contactShadow(parent, texture, x, y, z, w, h, color, opacity) {
  const shadow = plane(parent, w, h, new THREE.MeshBasicMaterial({
    map: texture, color, transparent: true, opacity, depthWrite: false, toneMapped: false,
  }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.set(x, y, z);
  shadow.renderOrder = -2;
  return shadow;
}

function lights(scene, sky, bounce, keyColor, intensity) {
  scene.add(new THREE.HemisphereLight(sky, bounce, 2.0));
  const key = new THREE.DirectionalLight(keyColor, intensity);
  key.position.set(-4.2, 7.0, 5.6);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -6, right: 6, top: 6, bottom: -6, near: 0.5, far: 26 });
  key.shadow.normalBias = 0.025;
  key.shadow.bias = -0.00035;
  scene.add(key);
  return key;
}

function fitCamera(camera, aspect, height, minWidth, eye, target) {
  const span = Math.max(height, minWidth / aspect);
  camera.left = -span * aspect / 2;
  camera.right = span * aspect / 2;
  camera.top = span / 2;
  camera.bottom = -span / 2;
  camera.position.set(...eye);
  camera.lookAt(...target);
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld();
}

function floorSeams(scene, y) {
  const points = [];
  for (let i = -6; i <= 6; i++) {
    const at = i * 1.48;
    points.push(at, y, -9, at, y, 7, -12, y, at, 12, y, at);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
  const material = new THREE.LineBasicMaterial({ color: 0x617b89, transparent: true, opacity: 0.075 });
  scene.add(new THREE.LineSegments(geometry, material));
}

function coordsFromCrop(crop) {
  const [x, y, width, height] = crop;
  return {
    x: ((x + width / 2) / PAPER_PIXELS - 0.5) * FLY_SIZE,
    y: (0.5 - (y + height / 2) / PAPER_PIXELS) * FLY_SIZE,
    w: width * FLY_SIZE / PAPER_PIXELS,
    h: height * FLY_SIZE / PAPER_PIXELS,
  };
}

function gestureScene(scene, camera, textures, shadowTexture) {
  scene.background = new THREE.Color(0xe4eced);
  scene.fog = new THREE.FogExp2(0xe4eced, 0.036);
  lights(scene, 0xeaf9ff, 0xbcb8a3, 0xfff6e5, 2.0);
  const ground = -2.67;
  floor(scene, 0xdae4e5, ground);
  floorSeams(scene, ground + 0.003);
  contactShadow(scene, shadowTexture, -1.25, ground + 0.006, -0.30, 5.8, 2.1, 0x495766, 0.21);

  const photographicPlate = new THREE.Group();
  scene.add(photographicPlate);
  const backing = mesh(photographicPlate, new THREE.BoxGeometry(FLY_SIZE + 0.024, FLY_SIZE + 0.024, 0.055), surface(0xf9f8f1));
  backing.material.transparent = true;
  backing.position.z = -0.038;
  backing.castShadow = true;
  const cutPaper = plane(photographicPlate, FLY_SIZE, FLY_SIZE, paperMaterial(textures['fly-cut-paper.webp']));
  cutPaper.renderOrder = 1;
  const uncut = plane(photographicPlate, FLY_SIZE, FLY_SIZE, paperMaterial(textures['fly-water.webp']));
  uncut.position.z = 0.009;
  uncut.renderOrder = 2;

  const figures = POSES.map(({ crop }, i) => {
    const c = coordsFromCrop(crop);
    const material = paperMaterial(textures[`pose-${i + 1}.webp`]);
    material.alphaTest = 0.025;
    const figure = plane(scene, c.w, c.h, material);
    figure.renderOrder = 3 + i;
    const shadow = contactShadow(scene, shadowTexture, 0, ground + 0.009 + i * 0.001, 0, c.w * 1.7, c.w * 0.79, 0x475964, 0);
    return { figure, shadow, c };
  });
  const cubes = BLOCKS.map(({ crop, color }) => {
    const c = coordsFromCrop(crop);
    const material = surface(color, 0.67);
    material.transparent = true;
    const block = mesh(scene, new THREE.BoxGeometry(c.w, c.h, c.w * 0.78), material);
    block.castShadow = true;
    block.receiveShadow = true;
    const shadow = contactShadow(scene, shadowTexture, 0, ground + 0.017, 0, c.w * 2.1, c.w * 1.0, 0x425268, 0);
    return { block, shadow, c };
  });
  const finalPrint = plane(scene, FLY_SIZE, FLY_SIZE, paperMaterial(textures['fly-blocks.webp']));
  finalPrint.position.z = 0.06;
  finalPrint.renderOrder = 12;
  const whiteSheet = plane(scene, FLY_SIZE, FLY_SIZE, paperMaterial(null));
  whiteSheet.position.z = -0.10;

  return (p, aspect) => {
    const open = ease(0.015, 0.41, p) * (1 - ease(0.63, 0.985, p));
    const narrow = clamp(aspect / 1.48, 0.73, 1);
    fitCamera(camera, aspect, mix(5.64, 5.90, open), mix(5.68, 8.65 * narrow, open),
      [3.20 * open, 3.50 * open, 14], [-0.05 * open, -0.20 * open, 0]);

    const photoTravel = ease(0.005, 0.50, p);
    const photoFade = 1 - ease(0.53, 0.84, p);
    const paperScale = mix(1, 0.72, photoTravel);
    photographicPlate.scale.setScalar(paperScale);
    photographicPlate.position.set(-2.42 * narrow * photoTravel, 0.18 * photoTravel, -1.46 * photoTravel);
    photographicPlate.rotation.set(-0.045 * photoTravel, -0.22 * photoTravel, 0.038 * photoTravel);
    setAlpha(backing, photoFade);
    backing.castShadow = photoFade > 0.45;
    setAlpha(cutPaper, photoFade);
    setAlpha(uncut, 1 - ease(0.009, 0.13, p));

    figures.forEach(({ figure, shadow, c }, i) => {
      const travel = ease(0.018 + i * 0.012, 0.45 + i * 0.025, p);
      const collapse = ease(0.57 + i * 0.02, 0.87 + i * 0.014, p);
      const dest = POSES[i].open;
      const end = cubes[i].c;
      figure.position.set(
        mix(mix(c.x, dest[0] * narrow, travel), end.x, collapse),
        mix(mix(c.y, dest[1], travel), end.y, collapse),
        mix(mix(0.018 + i * 0.002, dest[2], travel), 0.09, collapse),
      );
      figure.quaternion.copy(camera.quaternion);
      const size = mix(1, 1.45 + i * 0.06, travel) * mix(1, 0.68, collapse);
      figure.scale.setScalar(size);
      const opacity = ease(0.006, 0.115, p) * (1 - ease(0.63 + i * 0.023, 0.82 + i * 0.02, p));
      setAlpha(figure, opacity);
      shadow.position.x = figure.position.x + 0.13;
      shadow.position.z = figure.position.z - 0.1;
      shadow.material.opacity = 0.21 * opacity * open;
    });

    const resolve = ease(0.62, 0.985, p);
    cubes.forEach(({ block, shadow, c }, i) => {
      const emerge = ease(0.24 + i * 0.031, 0.57 + i * 0.028, p);
      const dest = BLOCKS[i].open;
      const scale = mix(0.36, 1.02, emerge);
      block.position.set(mix(dest[0] * narrow, c.x, resolve), mix(dest[1] - 0.38 * (1 - emerge), c.y, resolve), mix(dest[2], -0.005, resolve));
      block.rotation.set(mix(0.18, 0, resolve), mix(-0.57, 0, resolve), mix(-0.047, 0, resolve));
      block.scale.set(scale, scale, scale * mix(1, 0.018, resolve));
      const opacity = emerge * (1 - ease(0.95, 0.995, p));
      setAlpha(block, opacity);
      block.castShadow = opacity > 0.5;
      shadow.position.x = block.position.x + 0.07;
      shadow.position.z = block.position.z - 0.09;
      shadow.material.opacity = opacity * open * 0.17;
    });
    setAlpha(whiteSheet, ease(0.67, 0.95, p));
    setAlpha(finalPrint, ease(0.925, 0.995, p));
  };
}

const FRAME_COUNT = 24;
const TILE_COLS = 6;
const TILE_ROWS = 4;
const TILE_SIDE = 448;

function selectTile(texture, frame) {
  const ix = frame % TILE_COLS;
  const iy = TILE_ROWS - 1 - Math.floor(frame / TILE_COLS);
  const inset = 0.6 / TILE_SIDE;
  texture.offset.set((ix + inset) / TILE_COLS, (iy + inset) / TILE_ROWS);
  texture.repeat.set((1 - inset * 2) / TILE_COLS, (1 - inset * 2) / TILE_ROWS);
}

// Source-image extents stabilize the photographed base against the display plinth.
const OBJECT_BOUNDS = [
  [109, 29, 396, 347], [99, 17, 398, 346], [110, 20, 415, 352], [86, 6, 403, 350],
  [75, 0, 408, 350], [56, 0, 405, 370], [69, 0, 424, 368], [100, 0, 436, 356],
  [127, 0, 447, 352], [131, 0, 447, 337], [149, 0, 447, 333], [189, 0, 447, 403],
  [187, 25, 447, 447], [169, 40, 447, 437], [168, 42, 447, 426], [169, 41, 447, 423],
  [142, 39, 447, 426], [141, 42, 447, 421], [161, 30, 447, 397], [182, 48, 447, 406],
  [170, 72, 447, 422], [131, 68, 383, 409], [125, 49, 373, 384], [128, 36, 375, 369],
];

function mountedPrint(parent, texture, width) {
  const card = new THREE.Group();
  parent.add(card);
  const core = mesh(card, new THREE.BoxGeometry(width, width, 0.055), surface(0xe7d6b7));
  core.castShadow = true;
  const face = plane(card, width * 0.935, width * 0.935, paperMaterial(texture));
  face.position.z = 0.032;
  face.renderOrder = 1;
  return card;
}

function objectScene(scene, camera, textures, shadowTexture) {
  scene.background = new THREE.Color(0xe9dbc8);
  scene.fog = new THREE.FogExp2(0xe9dbc8, 0.040);
  lights(scene, 0xffedde, 0xc6a88b, 0xfff0cc, 2.25);
  const ground = -2.25;
  floor(scene, 0xe6d3bb, ground);
  contactShadow(scene, shadowTexture, -0.55, ground + 0.01, 0.05, 6.45, 4.2, 0x6b4130, 0.32);
  const support = new THREE.Group();
  support.position.x = -0.65;
  scene.add(support);
  const drum = mesh(support, new THREE.CylinderGeometry(1.87, 1.83, 0.76, 84), surface(0xb66f52));
  drum.position.y = ground + 0.38;
  drum.castShadow = true;
  drum.receiveShadow = true;
  const lip = mesh(support, new THREE.CylinderGeometry(1.91, 1.87, 0.095, 84), surface(0xd09a74));
  const top = ground + 0.855;
  lip.position.y = top - 0.0475;
  lip.castShadow = true;
  lip.receiveShadow = true;
  const ring = mesh(support, new THREE.TorusGeometry(1.72, 0.009, 6, 90), surface(0xab885b, 0.50, 0.19));
  ring.rotation.x = Math.PI / 2;
  ring.position.y = top + 0.008;
  const footShadow = contactShadow(support, shadowTexture, 0, top + 0.015, 0, 3.20, 1.35, 0x753a21, 0.35);

  const relief = new THREE.Group();
  support.add(relief);
  const side = 4.55;
  const background = plane(relief, side, side, paperMaterial(textures['liquid-arc.webp']));
  background.renderOrder = 1;
  const mount = mesh(relief, new THREE.BoxGeometry(side + 0.046, side + 0.046, 0.034), surface(0xe6d4bd));
  mount.material.transparent = true;
  mount.material.depthWrite = false;
  mount.position.z = -0.04;
  const subject = plane(relief, side, side, paperMaterial(textures['liquid-relief-arc.webp']));
  subject.position.z = 0.075;
  subject.material.alphaTest = 0.02;
  subject.renderOrder = 3;

  const cards = new THREE.Group();
  scene.add(cards);
  const backCard = mountedPrint(cards, textures['liquid-rim.webp'], 1.49);
  backCard.position.set(0.09, 0.08, -0.13);
  backCard.rotation.z = -0.065;
  const frontCard = mountedPrint(cards, textures['liquid-detail.webp'], 1.49);
  frontCard.rotation.z = 0.04;
  const easel = mesh(scene, new THREE.CylinderGeometry(0.030, 0.034, 1.25, 12), surface(0xa78558, 0.53, 0.26));
  const easelFoot = mesh(scene, new THREE.CylinderGeometry(0.35, 0.37, 0.105, 36), surface(0xb59f7d));
  easel.castShadow = true;
  easelFoot.receiveShadow = true;
  let lastFrame = -1;
  return (p, aspect) => {
    const narrow = clamp(aspect / 1.44, 0.73, 1);
    const angle = mix(-0.14, 0.18, p);
    fitCamera(camera, aspect, 5.62, 6.68 * narrow + 0.40,
      [Math.sin(angle) * 13.9, 2.75 + 0.32 * p, Math.cos(angle) * 13.9],
      [-0.12, -0.035, 0]);
    support.position.x = mix(-0.68, -0.53, p) * narrow + (1 - narrow) * 0.40;
    const frame = Math.round(p * (FRAME_COUNT - 1));
    if (frame !== lastFrame) {
      selectTile(textures['liquid-arc.webp'], frame);
      selectTile(textures['liquid-relief-arc.webp'], frame);
      lastFrame = frame;
    }
    const [left, upper, right, bottom] = OBJECT_BOUNDS[frame];
    const centerX = (left + right) / (2 * TILE_SIDE);
    relief.rotation.y = angle * 0.82;
    relief.position.x = (0.5 - centerX) * side * 0.83;
    relief.position.y = top + (bottom / TILE_SIDE - 0.5) * side + 0.03;
    // The photographer's close pass crosses the edge of the published image.
    // Let its square mount appear in those frames so that the real crop reads.
    const edge = Math.min(upper, TILE_SIDE - 1 - right, left);
    const framing = 1 - ease(1, 27, edge);
    setAlpha(background, framing * 0.60);
    setAlpha(mount, framing * 0.91);
    footShadow.scale.x = mix(1.0, 0.82, p);
    cards.position.set(2.15 * narrow, -0.71, -1.08);
    cards.rotation.set(-0.13, -0.40 + angle * 0.35, 0.015);
    easel.position.set(cards.position.x, ground + 0.64, cards.position.z);
    easelFoot.position.set(cards.position.x, ground + 0.052, cards.position.z);
  };
}

/**
 * Render a source-grounded study with one externally controlled progress value.
 * Calling dispose also releases textures whose image requests are still pending.
 */
export function createStudy(canvas, kind, { assetUrl, onReady, onError }) {
  let renderer;
  try {
    const attributes = { antialias: true, alpha: false, powerPreference: 'low-power' };
    const context = canvas.getContext('webgl2', attributes);
    if (!context) throw new Error('WebGL is unavailable for this study.');
    renderer = new THREE.WebGLRenderer({ canvas, context, ...attributes });
  } catch (error) {
    let cancelled = false;
    queueMicrotask(() => { if (!cancelled) onError?.(error); });
    return { setProgress() {}, resize() {}, dispose() { cancelled = true; } };
  }
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-3, 3, 3, -3, 0.1, 100);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65));
  const textureLoader = new THREE.TextureLoader();
  const textures = {};
  const shadowTexture = makeShadowTexture();
  const files = kind === 'object' ? LIQUID_FILES : FLY_FILES;
  let disposed = false;
  let failed = false;
  let ready = false;
  let drawPending = 0;
  let progress = 0.45;
  let width = 1;
  let height = 1;
  let place;

  function fail(error) {
    if (failed || disposed) return;
    failed = true;
    if (drawPending) cancelAnimationFrame(drawPending);
    drawPending = 0;
    onError?.(error);
  }
  function draw() {
    drawPending = 0;
    if (!place || disposed || failed) return;
    try {
      place(progress, width / height);
      renderer.render(scene, camera);
      if (!ready) {
        ready = true;
        onReady?.();
      }
    } catch (error) { fail(error); }
  }
  function requestDraw() {
    if (place && !drawPending && !disposed && !failed) drawPending = requestAnimationFrame(draw);
  }
  function resize() {
    if (disposed) return;
    const w = Math.max(1, Math.round(canvas.clientWidth));
    const h = Math.max(1, Math.round(canvas.clientHeight));
    if (w !== width || h !== height) {
      width = w;
      height = h;
      renderer.setSize(w, h, false);
    }
    requestDraw();
  }
  function contextLost(event) {
    event.preventDefault();
    fail(new Error('The spatial preview lost its graphics context.'));
  }
  canvas.addEventListener('webglcontextlost', contextLost);
  const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(resize) : null;
  observer?.observe(canvas);
  resize();

  Promise.all(files.map(name => new Promise((resolve, reject) => {
    const url = assetUrl(name);
    const texture = textureLoader.load(url, resolve, undefined, reject);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
    if (name.endsWith('arc.webp')) {
      texture.generateMipmaps = false;
      texture.minFilter = THREE.LinearFilter;
    }
    textures[name] = texture;
  }))).then(() => {
    if (disposed || failed) return;
    place = (kind === 'object' ? objectScene : gestureScene)(scene, camera, textures, shadowTexture);
    resize();
  }).catch(fail);

  return {
    setProgress(value) {
      if (!Number.isFinite(value)) return;
      progress = clamp(value, 0, 1);
      requestDraw();
    },
    resize,
    dispose() {
      if (disposed) return;
      disposed = true;
      observer?.disconnect();
      if (drawPending) cancelAnimationFrame(drawPending);
      canvas.removeEventListener('webglcontextlost', contextLost);
      const geometries = new Set();
      const materials = new Set();
      scene.traverse(item => {
        if (item.geometry) geometries.add(item.geometry);
        if (item.material) {
          const list = Array.isArray(item.material) ? item.material : [item.material];
          list.forEach(material => materials.add(material));
        }
        item.shadow?.map?.dispose();
        item.shadow?.mapPass?.dispose();
      });
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(material => material.dispose());
      Object.values(textures).forEach(texture => texture.dispose());
      shadowTexture.dispose();
      renderer.dispose();
    },
  };
}
