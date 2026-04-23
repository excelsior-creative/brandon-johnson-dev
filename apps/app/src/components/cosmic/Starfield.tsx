"use client";

import { useEffect, useRef } from "react";

type StarfieldProps = {
  density?: number;
  className?: string;
};

/**
 * Canvas starfield with per-star twinkling. rAF-driven.
 * Ported from packages/reference/design/BrandonJohnson.dev/src/primitives.jsx.
 * Respects prefers-reduced-motion: renders a single static frame and stops.
 */
export function Starfield({ density = 180, className }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let stars: {
      x: number;
      y: number;
      r: number;
      o: number;
      s: number;
      tw: number;
    }[] = [];
    let raf = 0;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.3 + 0.2,
        o: Math.random() * 0.7 + 0.2,
        s: Math.random() * 0.02 + 0.005,
        tw: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        star.tw += star.s;
        const twinkle = 0.65 + Math.sin(star.tw) * 0.35;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234, 240, 255, ${star.o * twinkle})`;
        ctx.fill();
      }
      if (!reduceMotion) {
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    const onResize = () => {
      cancelAnimationFrame(raf);
      resize();
      draw();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className ?? "absolute inset-0 h-full w-full pointer-events-none"}
    />
  );
}
