import Image from "next/image";
import { CosmicContainer } from "@/components/cosmic/Container";
import { SectionHeading } from "@/components/cosmic/SectionHeading";
import { projects } from "@/lib/content/projects";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <CosmicContainer>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Enterprise-scale applications, delivered"
          description="A showcase of platforms and systems I've architected, shipped, and scaled — from fintech rails to trading bots to government cost tracking."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[--border-soft] bg-[--card-soft] transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[rgba(56,189,248,0.3)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0d20]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,13,32,0) 40%, rgba(10,13,32,0.7) 100%)",
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.01em] text-[--ink] transition-colors group-hover:text-[--cyan]">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-[--ink-dim]">{p.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[--border-soft] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[--ink-dim]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </CosmicContainer>
    </section>
  );
}
