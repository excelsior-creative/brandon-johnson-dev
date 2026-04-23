import Image from "next/image";
import { marqueeTechnologies } from "@/lib/content/technologies";

export function TechMarquee() {
  // Duplicate the logo list so the marquee loop reads seamlessly.
  const loop = [...marqueeTechnologies, ...marqueeTechnologies];

  return (
    <section className="relative border-y border-[--border-soft] bg-[--bg-2]/40 py-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[--bg] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[--bg] to-transparent" />

      <div className="overflow-hidden">
        <div
          className="flex w-max gap-20 animate-[marquee_38s_linear_infinite] motion-reduce:animate-none"
          aria-hidden
        >
          {loop.map((logo, i) => (
            <div
              key={`${logo.title}-${i}`}
              className="flex h-12 shrink-0 items-center opacity-70 transition-opacity hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.title}
                width={140}
                height={48}
                className="h-10 w-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
