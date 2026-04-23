import { CosmicContainer } from "@/components/cosmic/Container";
import { Eyebrow } from "@/components/cosmic/Eyebrow";
import { impactMetrics } from "@/lib/content/impact";

export function ImpactStrip() {
  return (
    <section className="relative border-b border-[--border-soft] py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 400px at 50% 50%, rgba(56,189,248,0.08), transparent 60%)",
        }}
      />
      <CosmicContainer className="relative z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <Eyebrow>Impact</Eyebrow>
          <h2 className="font-display text-[clamp(24px,2.8vw,36px)] font-semibold leading-tight tracking-[-0.02em] text-[--ink]">
            A decade and a half of measurable outcomes.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[--border-soft] bg-[--border-soft] md:grid-cols-3 lg:grid-cols-6">
          {impactMetrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-start gap-1 bg-[--bg] p-6"
            >
              <div className="font-display text-[clamp(28px,3.2vw,40px)] font-bold tracking-[-0.03em] gradient-accent-text">
                {m.value}
              </div>
              <div className="text-sm font-medium text-[--ink]">{m.label}</div>
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[--ink-faint]">
                {m.note}
              </div>
            </div>
          ))}
        </div>
      </CosmicContainer>
    </section>
  );
}
