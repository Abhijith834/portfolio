// src/hooks/useScrollGlow.js
import { useEffect } from "react";

/**
 * Interpolates the --glow CSS variable from cyan → red as the
 * document is scrolled.  – Abhi, 2025-05-01
 */
export default function useScrollGlow() {
  useEffect(() => {
    const START_HUE = 198;      // hue for rgb(56 189 248)
    const END_HUE   = 360;      // red
    const SAT       = 93;       // keep same vividness (≈ original 0.93)
    const LIGHT     = 60;       // keep same brightness (≈ original 0.60)

    /*  quick HSL→RGB helper (returns [r,g,b])  */
    const hslToRgb = (h, s, l) => {
      s /= 100; l /= 100; h /= 360;
      const k = n => (n + h * 12) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = n =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return [f(0), f(8), f(4)].map(v => Math.round(v * 255));
    };

    /*  rAF-throttled scroll handler  */
    let ticking = false;
    const updateGlow = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const progress = Math.min(scrollTop / (scrollHeight - clientHeight), 1);   // 0-1
      const hue = START_HUE + (END_HUE - START_HUE) * progress;                 // 198→360
      const [r, g, b] = hslToRgb(hue, SAT, LIGHT);
      document.documentElement.style.setProperty("--glow", `${r} ${g} ${b}`);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateGlow);
        ticking = true;
      }
    };

    /*  kick-off & clean-up  */
    updateGlow();                // set initial colour
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
