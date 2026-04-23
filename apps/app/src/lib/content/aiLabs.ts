export type AiLab = {
  title: string;
  description: string;
  variant: "chat" | "stack" | "globe" | "grid";
};

export const aiLabs: AiLab[] = [
  {
    title: "Leading Eliza Framework Contributor",
    description:
      "Core contributor to the Eliza framework, pushing the boundaries of agent development and automation capabilities.",
    variant: "chat",
  },
  {
    title: "Advanced Agent Architecture",
    description:
      "Designed and implemented sophisticated agent systems capable of complex task automation and decision making.",
    variant: "stack",
  },
  {
    title: "Multi-Model Integration Expert",
    description:
      "Deep expertise in integrating diverse LLM architectures and creating hybrid AI solutions for enterprise needs.",
    variant: "grid",
  },
  {
    title: "Production-Ready Solutions",
    description:
      "Track record of deploying robust, scalable agent systems that handle mission-critical automation tasks.",
    variant: "globe",
  },
];
