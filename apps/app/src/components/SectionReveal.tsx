"use client";

import { m, useScroll, useTransform, type Variants } from "framer-motion";
import React, { useRef } from "react";

type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "fade";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  once?: boolean;
  distance?: number;
  duration?: number;
};

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const initialFor = (variant: RevealVariant, distance: number) => {
  switch (variant) {
    case "up":
      return { opacity: 0, y: distance, filter: "blur(8px)" };
    case "down":
      return { opacity: 0, y: -distance, filter: "blur(8px)" };
    case "left":
      return { opacity: 0, x: -distance, filter: "blur(6px)" };
    case "right":
      return { opacity: 0, x: distance, filter: "blur(6px)" };
    case "scale":
      return { opacity: 0, scale: 0.94, filter: "blur(6px)" };
    case "fade":
    default:
      return { opacity: 0, filter: "blur(6px)" };
  }
};

/**
 * Reveal an element as it scrolls into view.
 * Combines opacity + translate + micro-blur for a cinematic "snap into focus" feel.
 */
export const Reveal = ({
  children,
  className,
  delay = 0,
  variant = "up",
  once = true,
  distance = 32,
  duration = 0.9,
}: RevealProps) => {
  return (
    <m.div
      initial={initialFor(variant, distance)}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{
        duration,
        delay: delay / 1000,
        ease: EASE_OUT_EXPO,
      }}
      className={className}
    >
      {children}
    </m.div>
  );
};

/** Back-compat alias for previous callers. */
export const SectionReveal = Reveal;

const containerVariants: Variants = {
  hidden: {},
  visible: (stagger: number = 0.08) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
};

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
};

/**
 * Parent that staggers child `StaggerItem` reveals in sequence as they enter view.
 * Ideal for grids and lists.
 */
export const Stagger = ({
  children,
  className,
  stagger = 0.08,
  once = true,
}: StaggerProps) => {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      variants={containerVariants}
      custom={stagger}
      className={className}
    >
      {children}
    </m.div>
  );
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE_OUT_EXPO },
  },
};

export const StaggerItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <m.div variants={itemVariants} className={className}>
      {children}
    </m.div>
  );
};

/**
 * Parallax Y translation linked to section scroll progress.
 * Use on decorative layers (background images, large numerals) for depth.
 */
export const ParallaxY = ({
  children,
  strength = 80,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <m.div ref={ref} style={{ y }} className={className}>
      {children}
    </m.div>
  );
};

/**
 * Like ParallaxY, but fades opacity as the element approaches the center of the viewport.
 */
export const ParallaxFadeUp = ({
  children,
  strength = 60,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [strength, 0, -strength]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );

  return (
    <m.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </m.div>
  );
};
