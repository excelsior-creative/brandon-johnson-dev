"use client";

import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Carousel = ({ items }: { items: React.ReactNode[] }) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  React.useEffect(() => {
    if (carouselRef.current) {
      // Wait for a frame to ensure layout is complete
      requestAnimationFrame(() => {
        carouselRef.current!.scrollLeft =
          carouselRef.current!.scrollWidth - carouselRef.current!.clientWidth;
        checkScrollability();
      });
    }
  }, []);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const width = window.innerWidth < 640 ? window.innerWidth - 80 : 300;
      carouselRef.current.scrollBy({ left: -width, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const width = window.innerWidth < 640 ? window.innerWidth - 80 : 300;
      carouselRef.current.scrollBy({ left: width, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-[calc(100vw-2rem)] sm:w-[calc(100vw-3rem)] md:w-[calc(100vw-4rem)] mx-auto overflow-hidden">
      <div
        className="flex w-full overflow-x-scroll py-4 sm:py-10 md:py-20 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="flex flex-row justify-start gap-4">
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                },
              }}
              key={"card" + index}
              className="rounded-3xl w-[calc(100vw-3rem)] sm:w-[calc(100vw-5rem)] md:w-[26rem] lg:w-[30rem] flex-shrink-0 snap-center first:ml-0"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-4 pr-1">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-white dark:bg-white flex items-center justify-center disabled:opacity-50 transition-opacity"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-black" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-white dark:bg-white flex items-center justify-center disabled:opacity-50 transition-opacity"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-black" />
        </button>
      </div>
    </div>
  );
};

export const Card = ({
  card,
  index,
}: {
  card: {
    category: string;
    title: string;
    src: string;
    content: React.ReactNode;
    link?: string;
  };
  index: number;
}) => {
  return (
    <a
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-auto min-h-[28rem] sm:min-h-[30rem] md:min-h-[35rem] lg:min-h-[40rem] w-full overflow-hidden flex flex-col items-start justify-between relative group hover:scale-105 transition-transform duration-300"
    >
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-30 pointer-events-none" />
      <div className="relative z-40 p-5 sm:p-8 flex flex-col h-full w-full">
        <div className="w-full">
          <p className="text-white/70 text-sm md:text-base font-medium font-sans text-left">
            {card.category}
          </p>
          <p className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
            {card.title}
          </p>
          <p className="text-white/90 text-lg font-semibold mt-2 text-left w-full line-clamp-1">
            {(card.content as any).props.experience.company}
          </p>
          <p className="text-white/80 text-sm mt-2 line-clamp-3 text-left w-full pr-2">
            {(card.content as any).props.experience.description}
          </p>
        </div>

        <div className="mt-auto w-full pb-1">
          <div className="text-sm text-white hover:text-blue-400 transition-colors text-left"></div>
        </div>
      </div>
      {card.src && (
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0 transition-transform duration-300 group-hover:scale-110 brightness-[0.6]"
        />
      )}
    </a>
  );
};
