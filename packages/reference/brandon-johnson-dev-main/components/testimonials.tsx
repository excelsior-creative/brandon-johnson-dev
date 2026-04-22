import { cn } from "@/lib/utils";
import Image from "next/image";
import { useMemo } from "react";
import { Heading } from "./heading";
import { InViewDiv } from "./in-view-div";
import { Subheading } from "./subheading";
import { TestimonialColumnContainer } from "./testimonial-column-container";

export const Testimonials = () => {
  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Loved by people all over the universe</Heading>
      <Subheading className="text-center max-w-2xl mx-auto">
        With boundless enthusiasm and contagious optimism, I bring
        transformative energy to every project. My passion for innovation and
        problem-solving creates an environment where challenges become
        opportunities and success is inevitable.
      </Subheading>
      <TestimonialGrid />
    </div>
  );
};

interface Testimonial {
  name: string;
  quote: string;
  src: string;
  designation?: string;
}

const testimonials = [
  {
    name: "Allan Browning",
    quote:
      "Brandon is reliable, dedicated and has an in-depth understanding of a vast array of technologies. His knowledge and development experience is second to none. ",
    src: "/testimonials/allan.jpeg",
    designation: "Software Engineer",
  },
  {
    name: "Dr. Curtis Shull",
    quote:
      "It was a pleasure to work with Brandon. Although the problem space was technically challenging, he developed a winning solution for the client.",
    src: "/testimonials/curtis.jpg",
    designation: "RF/IO/AI/ML/Cloud",
  },
  {
    name: "Dan Barger",
    quote:
      "Brandon is a tremendously hard working and efficient. I was proud to have worked with Brandon. He is talented and dedicated. A professional through and through!",
    src: "/testimonials/dan.png",
    designation: "CFO",
  },
  {
    name: "Daniel Zorub",
    quote:
      "I cannot recommend Brandon enough for any role, project, or team not only because of his expertise, but also because of the genuine person that he is.",
    src: "/testimonials/daniel.jpg",
    designation: "Non-profit Technology Advisor",
  },
  {
    name: "Jeff Hancock",
    quote:
      "Brandon is one of the best developers I have ever worked with. He is extremely reliable and will figure anything out!",
    src: "/testimonials/jeff.png",
    designation: "Software Engineer",
  },
  {
    name: "John Ingram",
    quote:
      "Brandon is the pinnacle of software professionals. He is a standout in his field and a great asset to any company.",
    src: "/testimonials/john.png",
    designation: "Research Scientist",
  },
  {
    name: "Nithin Jilla",
    quote:
      "Brandon is a quick learner and an excellent communicator. What Brandon sets his mind to, he accomplishes and he makes the people around him better along the way too.",
    src: "/testimonials/nithin.jpg",
    designation: "Educator, Entrepreneur, Philanthropist",
  },
  {
    name: "Scott Wickham",
    quote:
      "Brandon is customer-oriented with the ability to address a variety of audiences, from the non-technical, to executive, to technical. ",
    src: "/testimonials/scott.png",
    designation: "Senior Software Engineer",
  },
];

function Testimonial({
  name,
  quote,
  src,
  designation,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"figure">, keyof Testimonial> &
  Testimonial) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  const boxStyle = {};
  return (
    <figure
      className={cn(
        "animate-fade-in rounded-3xl bg-transparent p-8 opacity-0 shadow-derek dark:bg-neutral-900",
        className
      )}
      style={{
        animationDelay,
      }}
      {...props}
    >
      <div className="flex flex-col items-start">
        <div className="flex gap-2">
          <Image
            src={src}
            width={150}
            height={150}
            className="h-10 w-10 rounded-full"
            alt={name}
          />
          <div>
            <h3 className="text-sm  font-medium text-neutral-500 dark:text-neutral-300">
              {name}
            </h3>
            <p className="text-sm font-normal text-neutral-500 dark:text-neutral-300">
              {designation}
            </p>
          </div>
        </div>
        <p className="text-base text-muted mt-4 dark:text-muted-dark">
          {quote}
        </p>
      </div>
    </figure>
  );
}

function TestimonialColumn({
  testimonials,
  className,
  containerClassName,
  shift = 0,
}: {
  testimonials: Testimonial[];
  className?: string;
  containerClassName?: (reviewIndex: number) => string;
  shift?: number;
}) {
  return (
    <TestimonialColumnContainer className={cn(className)} shift={shift}>
      {testimonials
        .concat(testimonials)
        .map((testimonial, testimonialIndex) => (
          <Testimonial
            name={testimonial.name}
            quote={testimonial.quote}
            src={testimonial.src}
            designation={testimonial.designation}
            key={testimonialIndex}
            className={containerClassName?.(
              testimonialIndex % testimonials.length
            )}
          />
        ))}
    </TestimonialColumnContainer>
  );
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function TestimonialGrid() {
  let columns = splitArray(testimonials, 3);
  let column1 = [...columns[0], ...columns[1].slice(0, 2)];
  let column2 = [...columns[1], ...columns[2].slice(0, 2)];
  let column3 = [...columns[2], ...columns[0].slice(0, 2)];

  return (
    <InViewDiv className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
      <TestimonialColumn
        testimonials={column1}
        containerClassName={(tIndex) =>
          cn(
            tIndex >= columns[0].length && "md:hidden",
            tIndex >= columns[0].length && "lg:hidden"
          )
        }
        shift={10}
      />
      <TestimonialColumn
        testimonials={column2}
        className="hidden md:block"
        containerClassName={(tIndex) =>
          tIndex >= columns[1].length ? "lg:hidden" : ""
        }
        shift={15}
      />
      <TestimonialColumn
        testimonials={column3}
        className="hidden lg:block"
        shift={10}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white dark:from-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-black" />
    </InViewDiv>
  );
}
