import type { LucideIcon } from "lucide-react";
import {
  Terminal,
  Layers,
  Database,
  Sparkles,
  Compass,
  Building2,
  Gauge,
  Users,
} from "lucide-react";

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const capabilities: Capability[] = [
  {
    title: "Front-End Engineering",
    description:
      "Crafting responsive, performant UIs with React, TypeScript, and modern web technologies.",
    icon: Terminal,
  },
  {
    title: "Full-Stack Development",
    description:
      "Building end-to-end solutions from database design to API development and front-end implementation.",
    icon: Layers,
  },
  {
    title: "Data Engineering",
    description:
      "Designing and implementing data pipelines, ETL processes, and analytics infrastructure.",
    icon: Database,
  },
  {
    title: "AI Development",
    description:
      "Implementing and deploying machine learning models and AI-powered solutions.",
    icon: Sparkles,
  },
  {
    title: "Product Management",
    description:
      "Driving product strategy, roadmap planning, and cross-functional team leadership.",
    icon: Compass,
  },
  {
    title: "Technical Architecture",
    description:
      "Designing scalable system architectures and making key technical decisions.",
    icon: Building2,
  },
  {
    title: "Process Optimization",
    description:
      "Optimizing application performance, from front-end rendering to backend efficiency.",
    icon: Gauge,
  },
  {
    title: "Technical Leadership",
    description:
      "Mentoring teams and driving technical excellence across projects.",
    icon: Users,
  },
];
