import { CosmicContainer } from "@/components/cosmic/Container";
import { SectionHeading } from "@/components/cosmic/SectionHeading";
import { capabilities } from "@/lib/content/capabilities";

export function Capabilities() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <CosmicContainer>
        <SectionHeading
          eyebrow="Capabilities"
          title="Versatile Tech Professional"
          description="From front-end engineering to full-stack development, data engineering, AI, and product management — a comprehensive technical perspective for every project."
        />

        <div className="mt-16 grid grid-cols-1 overflow-hidden rounded-3xl border border-[--border-soft] md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.title}
              className={`group relative flex flex-col gap-4 bg-[#06081a] p-8 transition-colors hover:bg-[#0b0e24] ${
                idx % 4 !== 3 ? "lg:border-r lg:border-[--border-soft]" : ""
              } ${idx < 4 ? "lg:border-b lg:border-[--border-soft]" : ""} ${
                idx % 2 === 0 ? "md:border-r md:border-[--border-soft]" : ""
              } ${idx < 6 ? "md:border-b md:border-[--border-soft]" : ""}`}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl border text-[--cyan]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(56,189,248,0.14), rgba(124,92,255,0.14))",
                  borderColor: "rgba(56,189,248,0.2)",
                }}
              >
                <cap.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug text-[--ink] transition-transform duration-300 group-hover:translate-x-1">
                {cap.title}
              </h3>
              <p className="text-sm leading-relaxed text-[--ink-dim]">{cap.description}</p>
            </div>
          ))}
        </div>
      </CosmicContainer>
    </section>
  );
}
