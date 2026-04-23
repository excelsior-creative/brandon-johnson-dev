import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Code2,
  Palette,
  Heart,
  Baby,
  Briefcase,
  BookOpen,
} from "lucide-react";
import type { Metadata } from "next";

import { CosmicContainer } from "@/components/cosmic/Container";
import { Eyebrow } from "@/components/cosmic/Eyebrow";
import { GradientButton } from "@/components/cosmic/GradientButton";
import { SectionHeading } from "@/components/cosmic/SectionHeading";
import {
  ParallaxY,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/SectionReveal";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About — J. Brandon Johnson",
  description:
    "Full-stack developer, solutions architect, AI engineer, designer, husband, and father of two. 15+ years turning ambitious ideas into shipped systems.",
};

const stats = [
  { value: "15+", label: "Years shipping software" },
  { value: "650K+", label: "YouTube subscribers" },
  { value: "$30M+", label: "TVL on platforms I've led" },
  { value: "2", label: "Boys at home (a.k.a. CTOs)" },
];

const pillars = [
  {
    icon: Sparkles,
    title: "AI-forward engineer",
    description:
      "I live at the frontier of AI software engineering — agentic workflows, frontier models, autonomous systems, and everything in between.",
  },
  {
    icon: Code2,
    title: "Full-stack builder",
    description:
      "Next.js, TypeScript, Node, Python, Go, Rust. Databases, infra, CI/CD. Comfortable from the keyboard to the cloud.",
  },
  {
    icon: Palette,
    title: "Designer at heart",
    description:
      "I care about craft. Typography, motion, spacing, product feel — pixels matter, and so do the invisible details.",
  },
  {
    icon: Briefcase,
    title: "Solutions architect",
    description:
      "I've led teams, written standards, and shipped enterprise platforms for banking, DeFi, government, and aerospace.",
  },
  {
    icon: Heart,
    title: "Husband",
    description:
      "Married to an incredible partner who makes the whole thing possible. Family is the first project; everything else comes after.",
  },
  {
    icon: Baby,
    title: "Dad × 2",
    description:
      "Father of two boys. Relentlessly curious, exhaustingly fun, and the reason I optimize for long-term, not just the next sprint.",
  },
];

const timeline = [
  {
    year: "2025",
    title: "Top contributor, ElizaOS",
    detail:
      "Shipping into the #1 open-source AI agent framework (16k+ ★) — autonomous agents for real-world applications.",
  },
  {
    year: "2023 — now",
    title: "Senior Software Engineer, Synctera",
    detail:
      "Leading UI/UX and AI-enhanced components for a banking-as-a-service platform moving billions weekly.",
  },
  {
    year: "2020 — 2023",
    title: "Solutions Architect, Excelsior Creative",
    detail:
      "Led a DeFi platform from $0 → $30M+ TVL and an automated payments streaming system.",
  },
  {
    year: "2013 — 2021",
    title: "Senior Full Stack Engineer, OCERS",
    detail:
      "Single-handedly architected an organization-wide intranet and 30+ custom applications.",
  },
  {
    year: "2006 — 2013",
    title: "Director of IT, Sierra Lobo",
    detail:
      "Organization-wide IT strategy, private cloud for federal clients, network for 1,200+ users.",
  },
  {
    year: "2019",
    title: "MIT Sloan — Blockchain & Business",
    detail:
      "Independent blockchain + AI smart contract work, automated crypto trading bots, flash-loan infra.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 1100px 500px at 50% 0%, rgba(124,92,255,0.18), transparent 60%), radial-gradient(ellipse 900px 450px at 80% 90%, rgba(56,189,248,0.12), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40 mask-radial-fade"
        />

        <CosmicContainer className="relative z-10">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
            <div className="flex flex-col gap-6">
              <Reveal>
                <Eyebrow>About me</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-[clamp(42px,6vw,80px)] font-bold leading-[1.02] tracking-[-0.035em] text-[--ink]">
                  Hi, I&apos;m{" "}
                  <span className="gradient-accent-text">Brandon</span>.
                  <br />
                  I build things that think.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="max-w-xl text-lg leading-relaxed text-[--ink-dim]">
                  Full-stack developer and solutions architect with 15+ years of shipping
                  ambitious software. These days I&apos;m obsessed with the latest wave of
                  AI software engineering — agents, frontier models, and the automation
                  that rewires how we build.
                </p>
              </Reveal>
              <Reveal delay={320}>
                <p className="max-w-xl text-base leading-relaxed text-[--ink-faint]">
                  Also: a designer who sweats the pixels, a loving husband, and father of
                  two boys who are, without question, the best part of the whole thing.
                </p>
              </Reveal>
              <Reveal delay={440}>
                <div className="mt-4 flex flex-wrap gap-3">
                  <GradientButton asChild variant="primary" size="lg">
                    <Link href="/contact">
                      Start a conversation
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </GradientButton>
                  <GradientButton asChild variant="ghost" size="lg">
                    <a
                      href="/john-brandon-johnson-resume.pdf"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <BookOpen className="h-4 w-4" />
                      View resume
                    </a>
                  </GradientButton>
                </div>
              </Reveal>
            </div>

            <Reveal variant="scale" delay={200} duration={1.1}>
              <div className="relative mx-auto w-full max-w-md">
                <div
                  aria-hidden
                  className="absolute -inset-6 rounded-[32px] opacity-70 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(ellipse at 30% 30%, rgba(124,92,255,0.45), transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(56,189,248,0.35), transparent 60%)",
                  }}
                />
                <div className="relative overflow-hidden rounded-[28px] border border-[--border-mid] bg-[--card-soft] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                  <Image
                    src="/images/family.png"
                    alt="Brandon with his family"
                    width={720}
                    height={900}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </CosmicContainer>
      </section>

      {/* Stats strip */}
      <section className="relative border-y border-[--border-soft] bg-[--bg-2]/40 py-14">
        <CosmicContainer>
          <Stagger
            stagger={0.08}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((s) => (
              <StaggerItem
                key={s.label}
                className="flex flex-col gap-2 border-l border-[--border-mid] pl-4"
              >
                <div className="font-display text-3xl font-bold leading-none tracking-[-0.02em] text-[--ink] md:text-4xl">
                  <span className="gradient-accent-text">{s.value}</span>
                </div>
                <div className="text-xs uppercase tracking-[0.12em] text-[--ink-faint]">
                  {s.label}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </CosmicContainer>
      </section>

      {/* Pillars */}
      <section className="relative py-24 md:py-32">
        <CosmicContainer>
          <Reveal>
            <SectionHeading
              eyebrow="The short version"
              title="Six things that shape the work"
              description="I'm a builder first. Every role I've held — from director of IT to senior engineer — has been about turning ambiguous ideas into systems people can actually use."
            />
          </Reveal>

          <Stagger
            stagger={0.07}
            className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <article className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-[--border-soft] bg-[--card-soft] p-7 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[rgba(56,189,248,0.35)] hover:shadow-[0_20px_60px_rgba(56,189,248,0.12)]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(ellipse 400px 220px at 0% 0%, rgba(124,92,255,0.14), transparent 55%)",
                    }}
                  />
                  <div
                    className="relative flex h-11 w-11 items-center justify-center rounded-xl border text-[--cyan] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(56,189,248,0.14), rgba(124,92,255,0.14))",
                      borderColor: "rgba(56,189,248,0.25)",
                    }}
                  >
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="relative font-display text-lg font-semibold leading-snug text-[--ink]">
                    {p.title}
                  </h3>
                  <p className="relative text-sm leading-relaxed text-[--ink-dim]">
                    {p.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </CosmicContainer>
      </section>

      {/* Narrative */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <ParallaxY
          strength={120}
          className="pointer-events-none absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/pushups.png"
            alt=""
            className="h-full w-full scale-110 object-cover object-[center_35%] opacity-20 saturate-50"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #05060f 0%, transparent 15%, transparent 85%, #05060f 100%)",
            }}
          />
        </ParallaxY>

        <CosmicContainer className="relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="The long-ish version"
                title={
                  <>
                    I&apos;ve always been the person who{" "}
                    <span className="gradient-accent-text">
                      figures it out.
                    </span>
                  </>
                }
              />
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal delay={120}>
                <p className="text-lg leading-relaxed text-[--ink-dim]">
                  I started shipping software professionally in 2006. Since then
                  I&apos;ve architected enterprise platforms in banking, DeFi,
                  government, and aerospace — high-stakes systems where the
                  margin for error is thin and the impact is real.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-base leading-relaxed text-[--ink-faint]">
                  Two years ago I went deep on AI. Like, all-in deep. I&apos;ve
                  tested and deployed across OpenAI, Anthropic, Google DeepMind,
                  and every interesting open-source model I can get my hands on.
                  I&apos;ve built agentic workflows, orchestrated multi-agent
                  systems, and contributed to frameworks that thousands of
                  developers are building on top of.
                </p>
              </Reveal>
              <Reveal delay={320}>
                <p className="text-base leading-relaxed text-[--ink-faint]">
                  Outside the keyboard, I&apos;m a husband and a dad of two
                  boys. That second job is the hardest, the best, and the one
                  that keeps everything else honest.
                </p>
              </Reveal>
            </div>
          </div>
        </CosmicContainer>
      </section>

      {/* Timeline */}
      <section className="relative py-24 md:py-32">
        <CosmicContainer>
          <Reveal>
            <SectionHeading
              eyebrow="Timeline"
              title="A quick walk through the years"
              description="Not a full résumé — just the chapters that shaped how I build."
            />
          </Reveal>

          <div className="mt-16">
            <Stagger stagger={0.08} className="flex flex-col gap-4">
              {timeline.map((t) => (
                <StaggerItem key={t.title}>
                  <div className="group grid grid-cols-[auto_1fr] items-start gap-6 rounded-2xl border border-[--border-soft] bg-[--card-soft] p-6 transition-[border-color,background,transform] duration-500 hover:-translate-y-0.5 hover:border-[rgba(56,189,248,0.3)] md:grid-cols-[140px_1fr] md:p-8">
                    <div className="flex shrink-0 items-center gap-3">
                      <span
                        className="h-2 w-2 rounded-full bg-[--cyan]"
                        style={{
                          boxShadow: "0 0 0 3px rgba(56,189,248,0.25), 0 0 16px rgba(56,189,248,0.6)",
                        }}
                      />
                      <span className="font-mono text-xs uppercase tracking-[0.16em] text-[--cyan]">
                        {t.year}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-display text-lg font-semibold leading-tight tracking-[-0.01em] text-[--ink] transition-colors group-hover:text-[--cyan]">
                        {t.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[--ink-dim]">
                        {t.detail}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </CosmicContainer>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-28">
        <CosmicContainer>
          <Reveal variant="scale" distance={20} duration={1}>
            <div
              className="relative overflow-hidden rounded-[32px] border border-[--border-soft] px-8 py-16 text-center md:px-16 md:py-24"
              style={{
                background:
                  "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(124,92,255,0.25), transparent 60%), radial-gradient(ellipse 700px 400px at 80% 100%, rgba(56,189,248,0.2), transparent 60%), #090b1a",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40 mask-radial-fade"
              />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <Eyebrow>Let&apos;s build</Eyebrow>
                <h2 className="font-display text-[clamp(30px,3.4vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-[--ink]">
                  Got an ambitious idea?{" "}
                  <span className="gradient-accent-text">Let&apos;s ship it.</span>
                </h2>
                <p className="max-w-xl text-base text-[--ink-dim]">
                  AI strategy, full-stack engineering, or just a conversation about
                  where this is all going — I&apos;m always up for a good one.
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                  <GradientButton asChild variant="primary" size="lg">
                    <Link href="/contact">
                      Get in touch
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </GradientButton>
                  <GradientButton asChild variant="ghost" size="lg">
                    <Link href="/#projects">See the work</Link>
                  </GradientButton>
                </div>
              </div>
            </div>
          </Reveal>
        </CosmicContainer>
      </section>
    </>
  );
}
