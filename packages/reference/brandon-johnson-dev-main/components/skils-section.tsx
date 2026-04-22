import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";

export const SkillsSection = () => {
  const features = [
    {
      title: "Front-End Engineering",
      description:
        "Crafting responsive, performant UIs with React, TypeScript, and modern web technologies.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Full-Stack Development",
      description:
        "Building end-to-end solutions from database design to API development and front-end implementation.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Data Engineering",
      description:
        "Designing and implementing data pipelines, ETL processes, and analytics infrastructure.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "AI Development",
      description:
        "Implementing and deploying machine learning models and AI-powered solutions.",
      icon: <IconCloud />,
    },
    {
      title: "Product Management",
      description:
        "Driving product strategy, roadmap planning, and cross-functional team leadership.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Technical Architecture",
      description:
        "Designing scalable system architectures and making key technical decisions.",
      icon: <IconHelp />,
    },
    {
      title: "Process Optimization",
      description:
        "Optimizing application performance, from front-end rendering to backend efficiency.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Technical Leadership",
      description:
        "Mentoring teams and driving technical excellence across projects.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="relative z-10 py-10">
      <div className="mb-10">
        <Heading as="h2">Versatile Tech Professional</Heading>
        <Subheading className="text-center ">
          From front-end engineering to full-stack development, data
          engineering, AI, and product management - I bring a comprehensive
          technical perspective to every project.
        </Subheading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
