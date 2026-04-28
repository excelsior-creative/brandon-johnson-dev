import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CosmicContainer } from "@/components/cosmic/Container";
import { GradientButton } from "@/components/cosmic/GradientButton";
import { Eyebrow } from "@/components/cosmic/Eyebrow";
import { Reveal } from "@/components/SectionReveal";

export function HomeCta() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <CosmicContainer>
        <Reveal variant="scale" distance={24} duration={1}>
          <div
            className="relative overflow-hidden rounded-[32px] border border-[--border-soft] px-8 py-20 text-center md:px-16 md:py-28"
            style={{
              background:
                "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(124,92,255,0.25), transparent 60%), radial-gradient(ellipse 700px 400px at 80% 100%, rgba(56,189,248,0.2), transparent 60%), #090b1a",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            {/* Family photo watermark */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/family.png"
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[center_30%] opacity-20 saturate-50"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #090b1a 0%, transparent 15%, transparent 85%, #090b1a 100%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40 mask-radial-fade"
            />

            <div className="relative z-10 flex flex-col items-center gap-6">
              <Reveal delay={120}>
                <Eyebrow>Book an AI systems consult</Eyebrow>
              </Reveal>
              <Reveal delay={220}>
                <h2 className="font-display text-[clamp(34px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.03em] text-[--ink]">
                  Turn AI into{" "}
                  <span className="gradient-accent-text">
                    operating leverage
                  </span>
                  .
                </h2>
              </Reveal>
              <Reveal delay={320}>
                <p className="max-w-xl text-base text-[--ink-dim] md:text-lg">
                  Book a focused conversation to identify the highest-leverage
                  workflows to automate, augment, or rebuild with practical AI
                  systems.
                </p>
              </Reveal>
              <Reveal delay={420}>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                  <GradientButton asChild variant="primary" size="lg">
                    <Link href="/contact">
                      Start an AI consult
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </GradientButton>
                  <GradientButton asChild variant="ghost" size="lg">
                    <Link href="/blog">Read field notes</Link>
                  </GradientButton>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </CosmicContainer>
    </section>
  );
}
