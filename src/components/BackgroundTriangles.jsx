import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './BackgroundTriangles.css';

const BackgroundTriangles = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // ─── CONFIGURATION ──────────────────────────────────────────────────────────
    // Screen dimensions
    const width  = window.innerWidth;
    const height = window.innerHeight;

    // Triangle grid settings
    const triangleSize = 60;                   // side length of each triangle (px)
    const rowHeight    = Math.sqrt(3) / 2 * triangleSize; // vertical spacing between rows

    // Interactive “shard” behavior
    const cursorRadius = 120;                  // how far the mouse effect reaches (px)
    const cursorStrength = 1;                  // how strongly shards rotate toward cursor
    const cursorEase = 0.1;                    // how quickly shards ease into rotation

    // Passive wave animation
    const waveAmp   = 5;                       // wave amplitude (px)
    const waveSpeed = 0.3;                     // wave cycles per second
    const waveFreq  = 0.005;                   // spatial frequency of the wave

    // Material color (reads CSS var or falls back)
    const lineColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--triangle-line-color').trim() || '#00ffff';
      // .getPropertyValue('--triangle-line-color').trim() || '#00ffff';
    // ─────────────────────────────────────────────────────────────────────────────

    // Scene & orthographic camera
    const scene  = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -width/2, width/2,
       height/2, -height/2,
       1, 1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Build shards array
    const cols   = Math.ceil(width / triangleSize) * 2;
    const rows   = Math.ceil(height / rowHeight) + 1;
    const material = new THREE.LineBasicMaterial({ color: lineColor });
    const shards = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x0 = c * (triangleSize / 2) - width / 2;
        const y0 = r * rowHeight       - height / 2;
        const up = (c + r) % 2 === 0;

        // Local vertex coords for one triangle
        const pts = up
          ? [[0,0], [triangleSize/2,rowHeight], [triangleSize,0]]
          : [[0,rowHeight], [triangleSize/2,0],  [triangleSize,rowHeight]];

        // Compute centroid for positioning & rotation pivot
        const cx = (pts[0][0] + pts[1][0] + pts[2][0]) / 3 + x0;
        const cy = (pts[0][1] + pts[1][1] + pts[2][1]) / 3 + y0;

        // Build geometry centered at centroid
        const geom = new THREE.BufferGeometry();
        const verts = [];
        for (let i = 0; i < 3; i++) {
          const [px, py] = pts[i];
          verts.push(px + x0 - cx, py + y0 - cy, 0);
          const [qx, qy] = pts[(i + 1) % 3];
          verts.push(qx + x0 - cx, qy + y0 - cy, 0);
        }
        geom.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));

        const mesh = new THREE.LineSegments(geom, material);
        mesh.position.set(cx, cy, 0);
        scene.add(mesh);

        // Original angle of first corner (for rotation math)
        const ov = new THREE.Vector2(pts[0][0] + x0 - cx, pts[0][1] + y0 - cy);
        const origAng = Math.atan2(ov.y, ov.x);

        shards.push({ mesh, bx: cx, by: cy, cx, cy, origAng, rot: 0 });
      }
    }

    // Mouse tracking
    const mouse = new THREE.Vector2(Infinity, Infinity);
    const onMouseMove = e => {
      mouse.x = (e.clientX / width) * 2 - 1;
      mouse.y = - (e.clientY / height) * 2 + 1;
      mouse.x *= width / 2;
      mouse.y *= height / 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Clock for wave timing
    const clock = new THREE.Clock();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      for (let s of shards) {
        // — Rotate shard toward cursor if within radius —
        const dx = mouse.x - s.cx;
        const dy = mouse.y - s.cy;
        const dist = Math.hypot(dx, dy);

        let targetRot = 0;
        if (dist < cursorRadius) {
          const ang = Math.atan2(dy, dx);
          targetRot = ang - s.origAng;
        }
        s.rot += (targetRot - s.rot) * cursorEase;
        s.mesh.rotation.z = s.rot;

        // — Passive wave on vertical position —
        const wave = waveAmp * Math.sin(
          t * Math.PI * 2 * waveSpeed + s.bx * waveFreq
        );
        s.mesh.position.x = s.bx;
        s.mesh.position.y = s.by + wave;

        // Store for next frame’s cursor math
        s.cx = s.mesh.position.x;
        s.cy = s.mesh.position.y;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div id="background-triangles" ref={mountRef} />;
};

export default BackgroundTriangles;