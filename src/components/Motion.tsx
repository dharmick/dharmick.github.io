"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

export function Motion() {
  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let stopWatch: (() => void) | undefined;

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-aside]", {
        y: 12,
        duration: 0.5,
        delay: 0.2,
        ease: "power3.out",
      });
    });

    const marquee = document.querySelector<HTMLElement>("[data-marquee]");
    if (marquee) {
      const observer = new IntersectionObserver(([entry]) => {
        marquee.classList.toggle("is-paused", !entry.isIntersecting);
      });
      observer.observe(marquee);
      stopWatch = () => observer.disconnect();
    }

    return () => {
      stopWatch?.();
      ctx.revert();
    };
  }, []);

  return null;
}
