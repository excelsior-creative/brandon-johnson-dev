export type OpenSourceProject = {
  name: string;
  tagline: string;
  description: string;
  role: string;
  url: string;
  language: string;
  accent: "cyan" | "violet" | "magenta";
};

export const openSourceProjects: OpenSourceProject[] = [
  {
    name: "Eliza",
    tagline: "Agent framework for the TypeScript-native builder",
    description:
      "Core contributor to the Eliza agent framework — actor-model runtime, plugin-first composition, and a growing ecosystem of model providers, memory backends, and integrations. Used in production across dozens of independent projects, including my own fleet of 600+ agents.",
    role: "Core Contributor",
    url: "https://github.com/elizaos/eliza",
    language: "TypeScript",
    accent: "cyan",
  },
  {
    name: "OpenClaw",
    tagline: "Open-source classic brought back to life",
    description:
      "Contributor to OpenClaw, an open reimplementation of a beloved platformer — systems-level C++ work spanning rendering, physics, and tooling. A proving ground for deep engine work outside the AI stack.",
    role: "Contributor",
    url: "https://github.com/openclaw/openclaw",
    language: "C++",
    accent: "violet",
  },
];
