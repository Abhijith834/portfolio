// src/components/BackgroundTriangles.jsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './BackgroundTriangles.css';

const MOBILE_MAX_WIDTH = 600;      // skip effect on very small screens

const BackgroundTriangles = () => {
  const mountRef  = useRef(null);
  const rafRef    = useRef();
  const mouseRef  = useRef(new THREE.Vector2(Infinity, Infinity));

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Bail‑out for phones
    if (window.innerWidth < MOBILE_MAX_WIDTH) return;

    /* ── basic sizes ─────────────────────────────────────────── */
    let width  = container.clientWidth  || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;
    const DPR  = Math.min(window.devicePixelRatio || 1, 1.5);

    /* ── scene + renderer ────────────────────────────────────── */
    const scene   = new THREE.Scene();
    const camera  = new THREE.OrthographicCamera(
      -width / 2, width / 2,
       height / 2, -height / 2,
       1, 1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(DPR);
    renderer.setSize(width, height, false);
    container.appendChild(renderer.domElement);

    /* ── settings ────────────────────────────────────────────── */
    const TRIANGLE_SIZE = 60;
    const ROW_HEIGHT    = (Math.sqrt(3) / 2) * TRIANGLE_SIZE;
    const CURSOR_RADIUS = 120;
    const CURSOR_EASE   = 0.1;
    const WAVE_AMP      = 5;
    const WAVE_SPEED    = 0.3;
    const WAVE_FREQ     = 0.005;

    const lineColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--triangle-line-color').trim() || '#00ffff';

    /* ── build grid ──────────────────────────────────────────── */
    const material = new THREE.LineBasicMaterial({ color: lineColor });
    const shards   = [];
    const cols = Math.ceil(width  / TRIANGLE_SIZE) * 2;
    const rows = Math.ceil(height / ROW_HEIGHT)   + 1;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x0 = c * (TRIANGLE_SIZE / 2) - width  / 2;
        const y0 = r * ROW_HEIGHT          - height / 2;
        const up = (c + r) % 2 === 0;

        const pts = up
          ? [[0,0],[TRIANGLE_SIZE/2,ROW_HEIGHT],[TRIANGLE_SIZE,0]]
          : [[0,ROW_HEIGHT],[TRIANGLE_SIZE/2,0],[TRIANGLE_SIZE,ROW_HEIGHT]];

        const cx = (pts[0][0]+pts[1][0]+pts[2][0])/3 + x0;
        const cy = (pts[0][1]+pts[1][1]+pts[2][1])/3 + y0;

        const verts = [];
        for (let i = 0; i < 3; i++) {
          const [px,py] = pts[i];
          const [qx,qy] = pts[(i+1)%3];
          verts.push(px+x0-cx, py+y0-cy, 0,  qx+x0-cx, qy+y0-cy, 0);
        }
        const geom = new THREE.BufferGeometry();
        geom.setAttribute('position', new THREE.Float32BufferAttribute(verts,3));

        const mesh = new THREE.LineSegments(geom, material);
        mesh.position.set(cx, cy, 0);
        scene.add(mesh);

        const baseAngle = Math.atan2(pts[0][1]+y0-cy, pts[0][0]+x0-cx);
        shards.push({ mesh, bx: cx, by: cy, cx, cy, baseAngle, rot: 0 });
      }
    }

    /* ── events & resize ─────────────────────────────────────── */
    const move = e => {
      mouseRef.current.x = (e.clientX / width) * 2 - 1;
      mouseRef.current.y = -(e.clientY / height) * 2 + 1;
      mouseRef.current.x *= width  / 2;
      mouseRef.current.y *= height / 2;
    };
    window.addEventListener('pointermove', move, { passive: true });

    const resizeObserver = new ResizeObserver(([entry]) => {
      width  = entry.contentRect.width  || window.innerWidth;
      height = entry.contentRect.height || window.innerHeight;

      camera.left   = -width / 2;
      camera.right  =  width / 2;
      camera.top    =  height / 2;
      camera.bottom = -height / 2;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height, false);
    });
    resizeObserver.observe(container);

    /* ── animation loop ──────────────────────────────────────── */
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      const mouse = mouseRef.current;

      for (const s of shards) {
        const dx = mouse.x - s.cx;
        const dy = mouse.y - s.cy;
        const dist = Math.hypot(dx, dy);

        let target = 0;
        if (dist < CURSOR_RADIUS) {
          target = Math.atan2(dy, dx) - s.baseAngle;
        }
        s.rot += (target - s.rot) * CURSOR_EASE;
        s.mesh.rotation.z = s.rot;

        const wave = WAVE_AMP *
          Math.sin(t * Math.PI * 2 * WAVE_SPEED + s.bx * WAVE_FREQ);
        s.mesh.position.x = s.bx;
        s.mesh.position.y = s.by + wave;

        s.cx = s.mesh.position.x;
        s.cy = s.mesh.position.y;
      }

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    /* ── clean‑up ────────────────────────────────────────────── */
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('pointermove', move);
      resizeObserver.disconnect();
      shards.forEach(({ mesh }) => mesh.geometry.dispose());
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  /*  IMPORTANT: keep the **id** so the CSS rule (#background‑triangles)
      sets width:100% and height:100vh  */
  return <div id="background-triangles" ref={mountRef} />;
};

export default BackgroundTriangles;
