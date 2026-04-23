import { ArrowUpRight, GitBranch } from "lucide-react";
import { CosmicContainer } from "@/components/cosmic/Container";
import { SectionHeading } from "@/components/cosmic/SectionHeading";
import { openSourceProjects, type OpenSourceProject } from "@/lib/content/openSource";

const ACCENT: Record<OpenSourceProject["accent"], { bar: string; badge: string }> = {
  cyan: {
    bar: "from-[#22d3ee] via-[#38bdf8] to-[#7c5cff]",
    badge: "bg-[rgba(56,189,248,0.1)] text-[--cyan] border-[rgba(56,189,248,0.3)]",
  },
  violet: {
    bar: "from-[#7c5cff] via-[#6366f1] to-[#d946ef]",
    badge: "bg-[rgba(124,92,255,0.12)] text-[--violet] border-[rgba(124,92,255,0.35)]",
  },
  magenta: {
    bar: "from-[#d946ef] via-[#ec4899] to-[#7c5cff]",
    badge: "bg-[rgba(217,70,239,0.1)] text-[--magenta] border-[rgba(217,70,239,0.3)]",
  },
};

export function OpenSource() {
  return (
    <section id="open-source" className="relative py-24 md:py-32">
      <CosmicContainer>
        <SectionHeading
          eyebrow="Open Source"
          title="Shipping code the whole community can audit."
          description="In 2026, the moat is visible proof-of-work. These are the projects I contribute to — the kind of commits anyone can read on a Saturday afternoon."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {openSourceProjects.map((p) => {
            const accent = ACCENT[p.accent];
            return (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-[--border-soft] bg-[--card-soft] p-8 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[rgba(56,189,248,0.35)]"
              >
                <div
                  aria-hidden
                  className={`h-1 w-full rounded-full bg-gradient-to-r ${accent.bar}`}
                />
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl border text-[--cyan]"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(56,189,248,0.14), rgba(124,92,255,0.14))",
                        borderColor: "rgba(56,189,248,0.2)",
                      }}
                    >
                      <GitBranch className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.01em] text-[--ink]">
                      {p.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-[--ink-faint] transition-colors group-hover:text-[--cyan]" />
                </div>

                <p className="mt-4 text-base font-medium text-[--ink]">{p.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-[--ink-dim]">
                  {p.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] ${accent.badge}`}
                  >
                    {p.role}
                  </span>
                  <span className="rounded-full border border-[--border-soft] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[--ink-dim]">
                    {p.language}
                  </span>
                  <span className="ml-auto font-mono text-[11px] text-[--ink-faint]">
                    {p.url.replace("https://", "")}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </CosmicContainer>
    </section>
  );
}
