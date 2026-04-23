import Image from "next/image";
import { CosmicContainer } from "@/components/cosmic/Container";
import { SectionHeading } from "@/components/cosmic/SectionHeading";
import { testimonials, type Testimonial } from "@/lib/content/testimonials";

function splitColumns(items: Testimonial[], count: number) {
  const cols: Testimonial[][] = Array.from({ length: count }, () => []);
  items.forEach((item, i) => cols[i % count].push(item));
  return cols;
}

export function TestimonialsSection() {
  const [col1, col2, col3] = splitColumns(testimonials, 3);

  return (
    <section className="relative py-24 md:py-32">
      <CosmicContainer>
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by people all over the universe"
          description="With boundless enthusiasm and contagious optimism, I bring transformative energy to every project. Challenges become opportunities — success is inevitable."
        />
      </CosmicContainer>

      <div className="relative mt-16 h-[49rem] max-h-[150vh] overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-[--bg] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[--bg] to-transparent" />

        <CosmicContainer>
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Column testimonials={col1} speed={42} />
            <Column className="hidden md:flex" testimonials={col2} speed={56} />
            <Column className="hidden lg:flex" testimonials={col3} speed={48} />
          </div>
        </CosmicContainer>
      </div>
    </section>
  );
}

function Column({
  testimonials,
  speed,
  className,
}: {
  testimonials: Testimonial[];
  speed: number;
  className?: string;
}) {
  const loop = [...testimonials, ...testimonials];
  return (
    <div className={`flex flex-col gap-6 ${className ?? ""}`}>
      <div
        className="flex flex-col gap-6"
        style={{
          animation: `marquee-vertical ${speed}s linear infinite`,
        }}
      >
        {loop.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </div>
      <style>{`
        @keyframes marquee-vertical {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .testi-col > div { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_8px_40px_-12px_rgba(56,189,248,0.15)] backdrop-blur-xl backdrop-saturate-150 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[rgba(124,92,255,0.4)] hover:shadow-[0_16px_70px_-12px_rgba(124,92,255,0.35)]">
      {/* Gradient top stroke */}
      <span
        aria-hidden
        className="absolute inset-x-6 top-0 h-px opacity-70 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.9), rgba(124,92,255,0.9), transparent)",
        }}
      />
      {/* Soft radial glow on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 300px 180px at 50% 0%, rgba(124,92,255,0.14), transparent 70%)",
        }}
      />
      {/* Large cyan opening-quote glyph */}
      <span
        aria-hidden
        className="absolute right-5 top-3 select-none font-display text-[56px] leading-none text-[rgba(56,189,248,0.18)]"
      >
        &ldquo;
      </span>

      <div className="relative flex items-center gap-3">
        <span
          aria-hidden
          className="rounded-full bg-gradient-to-br from-[rgba(56,189,248,0.8)] to-[rgba(124,92,255,0.8)] p-[2px]"
        >
          <Image
            src={testimonial.src}
            alt={testimonial.name}
            width={40}
            height={40}
            className="block h-10 w-10 rounded-full bg-[--bg] object-cover"
          />
        </span>
        <div>
          <div className="text-sm font-medium text-[--ink]">
            {testimonial.name}
          </div>
          <div className="text-xs text-[--ink-faint]">
            {testimonial.designation}
          </div>
        </div>
      </div>
      <blockquote className="relative mt-4 text-sm leading-relaxed text-[--ink-dim]">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </figure>
  );
}

// Keep the plan's component name working even though the file exports
// `TestimonialsSection` to avoid a collision with the `testimonials` data array.
export { TestimonialsSection as Testimonials };
