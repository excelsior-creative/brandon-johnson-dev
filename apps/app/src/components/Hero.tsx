"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Pause, Play, Users, Code2, Rocket, Volume2, VolumeX } from "lucide-react";
import { m, useScroll, useTransform } from "framer-motion";
import { CosmicBackground } from "@/components/cosmic/CosmicBackground";
import { Starfield } from "@/components/cosmic/Starfield";
import { Eyebrow } from "@/components/cosmic/Eyebrow";
import { GradientButton } from "@/components/cosmic/GradientButton";
import { CosmicContainer } from "@/components/cosmic/Container";

/**
 * Cinematic hero with a looping background video (hero-video.mp4).
 *
 * A "Say Hello" button cross-fades to an unmuted intro video
 * (brandon-hello-video.mp4); when it ends, we fade back to the loop.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const loopVideoRef = useRef<HTMLVideoElement | null>(null);
  const helloVideoRef = useRef<HTMLVideoElement | null>(null);

  const [loopVideoReady, setLoopVideoReady] = useState(false);
  const [isHelloPlaying, setIsHelloPlaying] = useState(false);
  const [isHelloMuted, setIsHelloMuted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Scroll-linked effects: as the hero scrolls away, its content floats up,
  // fades, and the background video drifts down for a cinematic parallax.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.5, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Detect reduced motion — falls back to a static poster only (no video).
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    const video = loopVideoRef.current;
    if (!video || reduceMotion) return;

    const onReady = () => setLoopVideoReady(true);
    if (video.readyState >= 1) {
      onReady();
    } else {
      video.addEventListener("loadedmetadata", onReady, { once: true });
    }
    return () => video.removeEventListener("loadedmetadata", onReady);
  }, [reduceMotion]);

  const handleSayHello = () => {
    const loop = loopVideoRef.current;
    loop?.pause();

    const hello = helloVideoRef.current;
    if (!hello) return;
    setIsHelloPlaying(true);
    setIsHelloMuted(false);
    hello.muted = false;
    hello.currentTime = 0;
    const playPromise = hello.play();
    if (playPromise) {
      playPromise.catch(() => {
        hello.muted = true;
        setIsHelloMuted(true);
        hello.play().catch(() => {
          setIsHelloPlaying(false);
          loop?.play().catch(() => {});
        });
      });
    }
  };

  const handleHelloEnded = () => {
    const hello = helloVideoRef.current;
    if (hello) hello.currentTime = 0;
    setIsHelloPlaying(false);

    const loop = loopVideoRef.current;
    if (loop && !reduceMotion) {
      loop.play().catch(() => {});
    }
  };

  const handleStopHello = () => {
    const hello = helloVideoRef.current;
    if (hello) {
      hello.pause();
      hello.currentTime = 0;
    }
    setIsHelloPlaying(false);

    const loop = loopVideoRef.current;
    if (loop && !reduceMotion) {
      loop.play().catch(() => {});
    }
  };

  const toggleHelloMute = () => {
    const hello = helloVideoRef.current;
    if (!hello) return;
    hello.muted = !hello.muted;
    setIsHelloMuted(hello.muted);
  };

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen w-full">
      <div className="relative h-screen min-h-[32rem] w-full overflow-hidden bg-[--bg]">
        {/* Parallax-wrapped background layers (poster + loop video) */}
        <m.div
          aria-hidden
          style={reduceMotion ? undefined : { y: bgY, scale: bgScale }}
          className="absolute inset-0"
        >
          {/* Poster fallback (LCP target) — always rendered behind the video */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-image.png"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />

          {/* Looping background video */}
          {!reduceMotion && (
            <video
              ref={loopVideoRef}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                loopVideoReady && !isHelloPlaying ? "opacity-100" : "opacity-0"
              }`}
              src="/video/hero-video.mp4"
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              poster="/images/hero-image.png"
            />
          )}
        </m.div>

        {/* Cross-fade intro video — plays with sound on click */}
        <video
          ref={helloVideoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isHelloPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          src="/video/brandon-hello-video.mp4"
          playsInline
          preload="metadata"
          onEnded={handleHelloEnded}
        />

        {/* Cosmic overlay layers */}
        <CosmicBackground intensity={0.6} showGrid />
        <Starfield density={140} />

        {/* Bottom-to-top fade behind the text so it stays legible over video */}
        <div className="absolute inset-0 hero-bottom-fade pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,6,15,0.45) 0%, rgba(5,6,15,0) 30%, rgba(5,6,15,0) 55%, rgba(5,6,15,0.85) 100%)",
          }}
        />

        {isHelloPlaying && isHelloMuted && (
          <button
            type="button"
            onClick={toggleHelloMute}
            className="absolute right-6 top-24 z-30 inline-flex items-center gap-2 rounded-full border border-[--border-mid] bg-black/50 px-3 py-2 text-xs text-white backdrop-blur hover:bg-black/70"
          >
            <Volume2 className="h-3.5 w-3.5" />
            Tap to unmute
          </button>
        )}
        {isHelloPlaying && !isHelloMuted && (
          <button
            type="button"
            onClick={toggleHelloMute}
            className="absolute right-6 top-24 z-30 inline-flex items-center gap-2 rounded-full border border-[--border-mid] bg-black/40 p-2 text-white/80 backdrop-blur hover:bg-black/60"
            aria-label="Mute"
          >
            <VolumeX className="h-4 w-4" />
          </button>
        )}

        {/* Content overlay */}
        <CosmicContainer className="relative z-10 flex h-full flex-col justify-center pt-24 pb-16">
          <m.div
            style={
              reduceMotion
                ? undefined
                : { y: contentY, opacity: contentOpacity, scale: contentScale }
            }
            className="max-w-3xl"
          >
            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Eyebrow>AI Automation &amp; Software Engineering</Eyebrow>
            </m.div>
            <m.h1
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display mt-6 text-[clamp(44px,6.2vw,84px)] font-bold leading-[1.02] tracking-[-0.035em]"
            >
              Building the Future.
              <br />
              Automating <span className="gradient-accent-text">Everything.</span>
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="mt-5 max-w-xl text-[clamp(16px,1.3vw,19px)] leading-[1.55] text-[--ink-dim]"
            >
              I build AI agents, automation systems, and scalable software that turn ideas
              into impact. 600+ agents, 10+ years shipping, one cinematic command center.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <GradientButton asChild variant="primary" size="lg">
                <a href="#work">
                  Explore My Work
                  <ArrowRightIcon />
                </a>
              </GradientButton>
              <GradientButton
                type="button"
                variant="ghost"
                size="lg"
                onClick={isHelloPlaying ? handleStopHello : handleSayHello}
              >
                {isHelloPlaying ? (
                  <>
                    <Pause className="h-4 w-4" />
                    Stop
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" />
                    Say Hello
                  </>
                )}
              </GradientButton>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="mt-12 grid max-w-xl grid-cols-3 gap-5"
            >
              <Stat icon={Users} value="650K+" label="YouTube Subscribers" />
              <Stat icon={Code2} value="10+" label="Years Building" />
              <Stat icon={Rocket} value="AI-First" label="Automation Focused" />
            </m.div>
          </m.div>
        </CosmicContainer>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[--ink-faint]">
          <span className="animate-[bob_2.2s_ease-in-out_infinite]">
            <ChevronDown className="h-4 w-4" />
          </span>
          Scroll to explore
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Users;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1 border-l border-[--border-mid] pl-4">
      <Icon className="h-5 w-5 text-[--cyan]" />
      <div className="font-display text-2xl font-bold leading-none tracking-[-0.02em] text-[--ink]">
        {value}
      </div>
      <div className="text-[11px] uppercase tracking-[0.08em] text-[--ink-faint]">
        {label}
      </div>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default Hero;
