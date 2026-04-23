import Image from "next/image";
import { CosmicContainer } from "@/components/cosmic/Container";
import { SectionHeading } from "@/components/cosmic/SectionHeading";
import { ParallaxY, Reveal } from "@/components/SectionReveal";
import {
  workExperience,
  type WorkExperienceItem,
} from "@/lib/content/workExperience";

export function WorkExperience() {
  return (
    <section id="work" className="relative overflow-hidden py-24 md:py-32">
      {/* Decorative background — plain img avoids Next Image fill stacking issues */}
      <ParallaxY
        strength={120}
        className="pointer-events-none absolute inset-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/pushups.png"
          alt=""
          aria-hidden
          className="h-full w-full scale-110 object-cover object-[center_35%] opacity-25 saturate-50"
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
            eyebrow="Work Experience"
            title="A decade plus of shipping"
            description="Over 15 years of software development and technical leadership across aerospace, fintech, creative agencies, and public sector."
          />
        </Reveal>

        <Reveal delay={0.1}>
          {/* Horizontal timeline (lg+) */}
          <div className="relative mt-20 hidden lg:block">
            {/* Center rail */}
            <span
              aria-hidden
              className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(56,189,248,0.5) 10%, rgba(124,92,255,0.5) 50%, rgba(56,189,248,0.5) 90%, transparent)",
              }}
            />

            <div className="relative grid grid-cols-5 gap-4">
              {workExperience.map((exp, idx) => (
                <TimelineNode
                  key={exp.company}
                  exp={exp}
                  position={idx % 2 === 0 ? "above" : "below"}
                />
              ))}
            </div>
          </div>

          {/* Vertical timeline (<lg) */}
          <div className="relative mt-16 lg:hidden">
            {/* Left rail */}
            <span
              aria-hidden
              className="absolute bottom-0 left-4 top-0 w-px"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(56,189,248,0.5) 10%, rgba(124,92,255,0.5) 50%, rgba(56,189,248,0.5) 90%, transparent)",
              }}
            />
            <ol className="flex flex-col gap-10">
              {workExperience.map((exp) => (
                <li key={exp.company} className="relative pl-12">
                  <span
                    aria-hidden
                    className="absolute left-[9px] top-6 h-[14px] w-[14px] rounded-full border-2 border-[--bg] bg-[--cyan] shadow-[0_0_20px_rgba(56,189,248,0.7)]"
                  />
                  <TimelineCard exp={exp} />
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </CosmicContainer>
    </section>
  );
}

function TimelineNode({
  exp,
  position,
}: {
  exp: WorkExperienceItem;
  position: "above" | "below";
}) {
  const isAbove = position === "above";
  return (
    <div className="relative flex flex-col items-center">
      {/* Top-half content (when above) or spacer */}
      {isAbove ? (
        <div className="mb-8 flex w-full flex-col items-stretch">
          <TimelineCard exp={exp} />
          <span
            aria-hidden
            className="mx-auto mt-2 h-6 w-px"
            style={{
              background:
                "linear-gradient(180deg, rgba(56,189,248,0.5), rgba(56,189,248,0))",
            }}
          />
        </div>
      ) : (
        <div className="mb-8 h-[324px]" />
      )}

      {/* Dot on the rail */}
      <span
        aria-hidden
        className="relative z-10 h-[14px] w-[14px] rounded-full border-2 border-[--bg] bg-[--cyan] shadow-[0_0_24px_rgba(56,189,248,0.8)]"
      />

      {/* Year label pinned to the rail */}
      <span className="absolute left-1/2 top-1/2 z-10 mt-4 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-[--ink-faint]">
        {exp.period}
      </span>

      {/* Bottom-half content (when below) or spacer */}
      {!isAbove ? (
        <div className="mt-10 flex w-full flex-col items-stretch">
          <span
            aria-hidden
            className="mx-auto mb-2 h-6 w-px"
            style={{
              background:
                "linear-gradient(180deg, rgba(56,189,248,0), rgba(56,189,248,0.5))",
            }}
          />
          <TimelineCard exp={exp} />
        </div>
      ) : (
        <div className="mt-10 h-[324px]" />
      )}
    </div>
  );
}

function TimelineCard({ exp }: { exp: WorkExperienceItem }) {
  return (
    <a
      href={exp.link}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative flex h-[300px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_8px_40px_-12px_rgba(56,189,248,0.15)] backdrop-blur-xl backdrop-saturate-150 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[rgba(56,189,248,0.4)] hover:shadow-[0_16px_70px_-12px_rgba(124,92,255,0.35)]"
    >
      {/* Top gradient accent */}
      <span
        aria-hidden
        className="absolute inset-x-5 top-0 h-px opacity-70 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.9), rgba(124,92,255,0.9), transparent)",
        }}
      />

      {/* Circular avatar */}
      <div className="relative mx-auto mb-4 h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/10">
        <div
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(56,189,248,0.2), rgba(124,92,255,0.2))",
          }}
        />
        <Image
          src={exp.src}
          alt={exp.company}
          fill
          sizes="64px"
          className="relative object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          unoptimized
        />
      </div>

      {/* Period (for vertical view / redundant for horizontal) */}
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--cyan] lg:hidden">
        {exp.period}
      </span>

      <h3 className="mt-1 font-display text-base font-semibold leading-tight tracking-[-0.01em] text-[--ink]">
        {exp.role}
      </h3>
      <div className="mt-1 text-sm font-medium text-[--ink-dim]">
        {exp.company}
      </div>
      <p className="mt-2 line-clamp-4 text-xs leading-relaxed text-[--ink-faint]">
        {exp.description}
      </p>
    </a>
  );
}
