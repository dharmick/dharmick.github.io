"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function MobileNav({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const menu = ref.current;
    if (!menu) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof Element && target.closest("a")) {
        menu.open = false;
      }
    };

    menu.addEventListener("click", onClick);
    return () => menu.removeEventListener("click", onClick);
  }, []);

  return (
    <details ref={ref} className="relative lg:hidden">
      {children}
    </details>
  );
}
