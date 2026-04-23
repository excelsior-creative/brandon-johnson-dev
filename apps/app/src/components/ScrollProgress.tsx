"use client";

import { m, useScroll, useSpring } from "framer-motion";

/**
 * Fixed-top progress bar wired to page scroll. Uses a spring so the motion
 * feels physical rather than instant.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <m.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]"
    >
      <div
        className="h-full w-full"
        style={{ background: "var(--gradient-accent)" }}
      />
    </m.div>
  );
}
