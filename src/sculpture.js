// The 3D reconstruction of To Bleed in Liquid Gold, drawn on demand.
// It is built from Carry's photographs and filmed orbit (scripts/prepare-sculpture.py);
// the page always shows her own film of the object first.
import { ACESFilmicToneMapping, Box3, Group, PerspectiveCamera, PMREMGenerator, Scene, SRGBColorSpace, Vector3, WebGLRenderer } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export function createSculpture(canvas, url, { onReady, onError } = {}) {
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  } catch (error) {
    onError?.(error);
    return null;
  }
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.5;
  renderer.setClearColor(0x000000, 0);
  const scene = new Scene();
  // A studio of soft boxes, so the gold leaf catches light as the object turns.
  scene.environment = new PMREMGenerator(renderer).fromScene(new RoomEnvironment(), .04).texture;
  const pivot = new Group();
  scene.add(pivot);
  const camera = new PerspectiveCamera(30, 1, .01, 100);
  let ready = false, size = 1, lastYaw = null;

  new GLTFLoader().load(url, gltf => {
    const object = gltf.scene;
    const box = new Box3().setFromObject(object);
    object.position.sub(box.getCenter(new Vector3()));
    const extent = box.getSize(new Vector3());
    size = Math.max(extent.x, extent.y, extent.z);
    pivot.add(object);
    ready = true;
    onReady?.();
  }, undefined, error => onError?.(error));

  return {
    get ready() { return ready; },
    resize(width, height, ratio) {
      renderer.setPixelRatio(ratio);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      lastYaw = null;
    },
    draw(yaw) {
      if (!ready || yaw === lastYaw) return;
      lastYaw = yaw;
      pivot.rotation.y = yaw * Math.PI / 180;
      // About the height of Carry's own camera in P08-02, looking slightly down.
      const distance = size * 2.2, elevation = 22 * Math.PI / 180;
      camera.position.set(0, Math.sin(elevation) * distance, Math.cos(elevation) * distance);
      camera.lookAt(0, -size * .03, 0);
      renderer.render(scene, camera);
    },
  };
}
