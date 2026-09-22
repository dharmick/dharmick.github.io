"use client";

import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import Lenis from "lenis";

/**
 * Lenis is the only smooth-scroll engine. It is skipped when the
 * visitor asks for reduced motion. Locomotive Scroll is not used.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const lenis = new Lenis({
      autoRaf: false,
      anchors: true,
    });

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    let alive = true;
    document.fonts.ready.then(() => {
      if (!alive) return;
      lenis.resize();
    });

    return () => {
      alive = false;
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
    };
  }, []);

  return children;
}
