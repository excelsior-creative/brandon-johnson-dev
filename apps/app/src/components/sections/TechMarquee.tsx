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
          className="flex w-max items-center gap-16 animate-[marquee_38s_linear_infinite] motion-reduce:animate-none"
          aria-hidden
        >
          {loop.map((logo, i) => (
            <div
              key={`${logo.title}-${i}`}
              className="flex h-10 w-32 shrink-0 items-center justify-center opacity-60 transition-opacity duration-300 hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.title}
                width={160}
                height={40}
                className="max-h-8 w-auto object-contain [filter:brightness(0)_invert(1)]"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
