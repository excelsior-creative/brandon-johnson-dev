import Image from "next/image";
import { CosmicContainer } from "@/components/cosmic/Container";
import { SectionHeading } from "@/components/cosmic/SectionHeading";
import { workExperience } from "@/lib/content/workExperience";

export function WorkExperience() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <CosmicContainer>
        <SectionHeading
          eyebrow="Work Experience"
          title="A decade plus of shipping"
          description="Over 15 years of software development and technical leadership across aerospace, fintech, creative agencies, and public sector."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {workExperience.map((exp) => (
            <a
              key={exp.company}
              href={exp.link}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl border border-[--border-soft] bg-[#0a0d20] p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[rgba(56,189,248,0.35)]"
            >
              <Image
                src={exp.src}
                alt={exp.company}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-60"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(5,6,15,0.1) 0%, rgba(5,6,15,0.55) 50%, rgba(5,6,15,0.95) 100%)",
                }}
              />
              <div className="relative z-10 flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--cyan]">
                  {exp.period}
                </span>
                <h3 className="font-display text-lg font-semibold leading-tight tracking-[-0.01em] text-[--ink]">
                  {exp.role}
                </h3>
                <div className="text-sm font-medium text-[--ink-dim]">{exp.company}</div>
                <p className="text-xs leading-relaxed text-[--ink-faint]">
                  {exp.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </CosmicContainer>
    </section>
  );
}
