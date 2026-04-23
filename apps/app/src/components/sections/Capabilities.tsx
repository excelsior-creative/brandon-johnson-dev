import { CosmicContainer } from "@/components/cosmic/Container";
import { SectionHeading } from "@/components/cosmic/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/SectionReveal";
import { capabilities } from "@/lib/content/capabilities";

export function Capabilities() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      {/* Blueprint grid ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Soft nebula behind the grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 700px 360px at 80% 20%, rgba(124,92,255,0.08), transparent 60%), radial-gradient(ellipse 600px 320px at 10% 90%, rgba(56,189,248,0.06), transparent 60%)",
        }}
      />

      <CosmicContainer className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Versatile Tech Professional"
            description="From front-end engineering to full-stack development, data engineering, AI, and product management — a comprehensive technical perspective for every project."
          />
        </Reveal>

        <Stagger
          stagger={0.06}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {capabilities.map((cap, idx) => (
            <StaggerItem
              key={cap.title}
              className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_8px_40px_-12px_rgba(56,189,248,0.1)] backdrop-blur-xl backdrop-saturate-150 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[rgba(56,189,248,0.35)] hover:shadow-[0_16px_70px_-12px_rgba(124,92,255,0.35)]"
            >
              {/* Gradient top stroke */}
              <span
                aria-hidden
                className="absolute inset-x-6 top-0 h-px opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(56,189,248,0.9), rgba(124,92,255,0.9), transparent)",
                }}
              />
              {/* Radial glow on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse 240px 160px at 50% 0%, rgba(56,189,248,0.14), transparent 70%)",
                }}
              />

              {/* Numeric counter (top-right) */}
              <span className="absolute right-5 top-5 font-mono text-[10px] tracking-[0.2em] text-[--ink-faint] transition-colors duration-300 group-hover:text-[--cyan]">
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Icon chip with rotated frame behind it */}
              <div className="relative mb-5 h-12 w-12">
                <span
                  aria-hidden
                  className="absolute inset-0 rotate-45 rounded-lg border border-[rgba(124,92,255,0.25)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div
                  className="relative flex h-full w-full items-center justify-center rounded-xl border text-[--cyan] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(56,189,248,0.16), rgba(124,92,255,0.16))",
                    borderColor: "rgba(56,189,248,0.25)",
                  }}
                >
                  <cap.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="font-display text-lg font-semibold leading-snug text-[--ink] transition-transform duration-300 group-hover:translate-x-0.5">
                {cap.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[--ink-dim]">
                {cap.description}
              </p>

              {/* Bottom-edge subtle line */}
              <span
                aria-hidden
                className="absolute inset-x-6 bottom-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(124,92,255,0.6), transparent)",
                }}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </CosmicContainer>
    </section>
  );
}
