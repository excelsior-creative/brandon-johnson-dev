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
    <figure className="rounded-2xl border border-[--border-soft] bg-[--card-soft] p-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-[rgba(124,92,255,0.35)]">
      <div className="flex items-center gap-3">
        <Image
          src={testimonial.src}
          alt={testimonial.name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full border border-[--border-mid] object-cover"
        />
        <div>
          <div className="text-sm font-medium text-[--ink]">{testimonial.name}</div>
          <div className="text-xs text-[--ink-faint]">{testimonial.designation}</div>
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-[--ink-dim]">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </figure>
  );
}

// Keep the plan's component name working even though the file exports
// `TestimonialsSection` to avoid a collision with the `testimonials` data array.
export { TestimonialsSection as Testimonials };
