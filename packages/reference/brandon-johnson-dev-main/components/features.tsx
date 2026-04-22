import { cn } from "@/lib/utils";
import React from "react";
import { GridLineHorizontal, GridLineVertical } from "./grid-lines";
import { Heading } from "./heading";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonFour } from "./skeletons/fourth";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonThree } from "./skeletons/third";
import { Subheading } from "./subheading";

export const AiAgentsSection = () => {
  const features = [
    {
      title: "Leading Eliza Framework Contributor",
      description:
        "Core contributor to the Eliza framework, pushing the boundaries of agent development and automation capabilities.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-4 border-b border-r dark:border-neutral-800",
    },
    {
      title: "Advanced Agent Architecture",
      description:
        "Designed and implemented sophisticated agent systems capable of complex task automation and decision making.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 md:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Multi-Model Integration Expert",
      description:
        "Deep expertise in integrating diverse LLM architectures and creating hybrid AI solutions for enterprise needs.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 md:col-span-3 border-r dark:border-neutral-800",
    },
    {
      title: "Production-Ready Solutions",
      description:
        "Track record of deploying robust, scalable agent systems that handle mission-critical automation tasks.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-3",
    },
  ];
  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">
        Pioneering AI Agent Development with the Eliza Framework
      </Heading>
      <Subheading className="text-center ">
        Expert in building sophisticated AI agents that automate complex tasks,
        from data processing to full system automation.
      </Subheading>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 mt-12">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
        <GridLineHorizontal
          style={{
            top: 0,
            left: "-10%",
            width: "120%",
          }}
        />

        <GridLineHorizontal
          style={{
            bottom: 0,
            left: "-10%",
            width: "120%",
          }}
        />

        <GridLineVertical
          style={{
            top: "-10%",
            right: 0,
            height: "120%",
          }}
        />
        <GridLineVertical
          style={{
            top: "-10%",
            left: 0,
            height: "120%",
          }}
        />
      </div>
    </div>
  );
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Heading as="h3" size="sm" className="text-left">
      {children}
    </Heading>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Subheading className="text-left max-w-sm mx-0 md:text-sm my-2">
      {children}
    </Subheading>
  );
};
