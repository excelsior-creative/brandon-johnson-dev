export type AiLab = {
  title: string;
  description: string;
  variant: "chat" | "stack" | "globe" | "grid";
};

export const aiLabs: AiLab[] = [
  {
    title: "Eliza Framework Core Contributor",
    description:
      "Authored contributions to the Eliza agent runtime — helping shape how thousands of developers build conversational and autonomous agents in production environments.",
    variant: "chat",
  },
  {
    title: "OpenClaw Framework Contributor",
    description:
      "Contributed to the OpenClaw framework, advancing the next generation of tool-use orchestration and multi-agent coordination patterns that power modern agentic systems.",
    variant: "stack",
  },
  {
    title: "Multi-Framework Agent Architecture",
    description:
      "Battle-tested architectural patterns across both Eliza and OpenClaw — prompt routing, tool selection, memory layers, and resilient execution graphs.",
    variant: "grid",
  },
  {
    title: "From Open Source to Production",
    description:
      "Translated upstream framework work into resilient, scalable agent systems running mission-critical automation for real businesses.",
    variant: "globe",
  },
];
