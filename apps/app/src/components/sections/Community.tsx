import { ArrowUpRight, Youtube } from "lucide-react";
import { CosmicContainer } from "@/components/cosmic/Container";
import { Eyebrow } from "@/components/cosmic/Eyebrow";
import { communityHighlights, youtubeChannel } from "@/lib/content/community";

export function Community() {
  return (
    <section id="community" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 80% 20%, rgba(217,70,239,0.08), transparent 60%), radial-gradient(ellipse 700px 400px at 10% 90%, rgba(56,189,248,0.08), transparent 55%)",
        }}
      />
      <CosmicContainer className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Eyebrow>Community</Eyebrow>
            <h2 className="font-display text-[clamp(34px,4vw,54px)] font-bold leading-[1.08] tracking-[-0.03em] text-[--ink]">
              Teaching in public.
              <br />
              <span className="gradient-accent-text">650K+ strong.</span>
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-[--ink-dim]">
              {youtubeChannel.summary}
            </p>
            <a
              href={youtubeChannel.url}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 inline-flex w-fit items-center gap-3 rounded-2xl border border-[--border-mid] bg-white/[0.03] p-5 transition-colors hover:border-[rgba(56,189,248,0.35)] hover:bg-white/[0.06]"
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
                style={{ background: "#ff0033" }}
                aria-hidden
              >
                <Youtube className="h-6 w-6" />
              </span>
              <span className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[--ink-faint]">
                  YouTube {youtubeChannel.handle}
                </span>
                <span className="font-display text-xl font-semibold text-[--ink]">
                  {youtubeChannel.subscribers} subscribers
                </span>
              </span>
              <ArrowUpRight className="ml-4 h-5 w-5 text-[--ink-faint]" />
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {communityHighlights.map((h) => (
              <a
                key={h.title}
                href={h.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-start gap-4 rounded-2xl border border-[--border-soft] bg-[--card-soft] p-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-[rgba(56,189,248,0.35)]"
              >
                <div className="flex-1">
                  <div className="font-display text-lg font-semibold leading-snug text-[--ink] transition-colors group-hover:text-[--cyan]">
                    {h.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[--ink-dim]">
                    {h.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[--cyan]">
                    {h.cta} <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </CosmicContainer>
    </section>
  );
}
