import Image from "next/image";
import { CosmicContainer } from "@/components/cosmic/Container";
import { SectionHeading } from "@/components/cosmic/SectionHeading";
import {
  ParallaxY,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/SectionReveal";
import { projects } from "@/lib/content/projects";

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32">
      <ParallaxY
        strength={140}
        className="pointer-events-none absolute inset-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/unicycle.png"
          alt=""
          className="h-full w-full scale-110 object-cover object-[center_40%] opacity-25 saturate-50"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #05060f 0%, transparent 10%, transparent 90%, #05060f 100%)",
          }}
        />
      </ParallaxY>
      <CosmicContainer className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Project experience"
            title="AI systems, automation, and platforms in practice"
            description="Selected work reframed around business problems, system design, and operational value — the proof behind the AI consulting positioning."
          />
        </Reveal>

        <Stagger
          stagger={0.09}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[--border-soft] bg-[--card-soft] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-[rgba(56,189,248,0.35)] hover:shadow-[0_30px_80px_rgba(56,189,248,0.12)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0d20]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-80 transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
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
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(56,189,248,0.18), transparent 55%)",
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.01em] text-[--ink] transition-colors group-hover:text-[--cyan]">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[--ink-dim]">
                    {p.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[--border-soft] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[--ink-dim] transition-colors group-hover:border-[rgba(56,189,248,0.3)] group-hover:text-[--ink]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </CosmicContainer>
    </section>
  );
}
