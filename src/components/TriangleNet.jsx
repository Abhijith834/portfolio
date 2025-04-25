import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TriangleNet = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    const triangleSize = 50; // side length of triangle
    const rowHeight = Math.sqrt(3) / 2 * triangleSize; // height of equilateral triangle

    const cols = Math.ceil(width / triangleSize) * 2;
    const rows = Math.ceil(height / rowHeight);

    const material = new THREE.LineBasicMaterial({ color: 0x00ffff });
    const geometry = new THREE.BufferGeometry();
    const positions = [];

    for (let row = 0; row < rows; row++) {
      const isOffset = row % 2 === 1;
      for (let col = 0; col < cols; col++) {
        const x = col * triangleSize / 2 - width / 2;
        const y = row * rowHeight - height / 2;

        if ((col + row) % 2 === 0) {
          // Upward triangle
          positions.push(
            x, y, 0,
            x + triangleSize / 2, y + rowHeight, 0,

            x + triangleSize / 2, y + rowHeight, 0,
            x + triangleSize, y, 0,

            x + triangleSize, y, 0,
            x, y, 0
          );
        } else {
          // Downward triangle
          positions.push(
            x, y + rowHeight, 0,
            x + triangleSize / 2, y, 0,

            x + triangleSize / 2, y, 0,
            x + triangleSize, y + rowHeight, 0,

            x + triangleSize, y + rowHeight, 0,
            x, y + rowHeight, 0
          );
        }
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const mesh = new THREE.LineSegments(geometry, material);
    scene.add(mesh);

    renderer.render(scene, camera);

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
    />
  );
};

export default TriangleNet;
