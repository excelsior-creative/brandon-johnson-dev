import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CosmicContainer } from "@/components/cosmic/Container";
import { GradientButton } from "@/components/cosmic/GradientButton";
import { Eyebrow } from "@/components/cosmic/Eyebrow";

export function HomeCta() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <CosmicContainer>
        <div
          className="relative overflow-hidden rounded-[32px] border border-[--border-soft] px-8 py-20 text-center md:px-16 md:py-28"
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
            <Eyebrow>Ready to connect?</Eyebrow>
            <h2 className="font-display text-[clamp(34px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.03em] text-[--ink]">
              Let&apos;s build something{" "}
              <span className="gradient-accent-text">cinematic</span> together.
            </h2>
            <p className="max-w-xl text-base text-[--ink-dim] md:text-lg">
              Whether you need an AI automation strategy, a full-stack lift, or just want
              to swap notes on agents — drop a line.
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              <GradientButton asChild variant="primary" size="lg">
                <Link href="/contact">
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </GradientButton>
              <GradientButton asChild variant="ghost" size="lg">
                <a href="mailto:brandon@brandon-johnson.dev">Email directly</a>
              </GradientButton>
            </div>
          </div>
        </div>
      </CosmicContainer>
    </section>
  );
}
