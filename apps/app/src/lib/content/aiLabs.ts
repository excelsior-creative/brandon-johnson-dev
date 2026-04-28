export type AiLab = {
  title: string;
  description: string;
  variant: "chat" | "stack" | "globe" | "grid";
};

export const aiLabs: AiLab[] = [
  {
    title: "What Is Agentic Engineering?",
    description:
      "A practical definition of designing AI systems with roles, memory, tools, autonomy boundaries, and escalation paths — not just better prompts.",
    variant: "chat",
  },
  {
    title: "Where Small Businesses Should Actually Use AI",
    description:
      "A consulting lens for identifying high-leverage workflows in support, sales, content, reporting, and internal operations before buying another AI tool.",
    variant: "stack",
  },
  {
    title: "From Website to Operating System",
    description:
      "Why modern websites should increasingly connect to CRM, CMS, analytics, knowledge bases, automations, and agent interfaces.",
    variant: "grid",
  },
  {
    title: "Building an AI-Assisted Agency",
    description:
      "Operator notes from turning Excelsior Creative into a hybrid human-plus-agent agency with playbooks, specs, journals, reporting, and accountable review loops.",
    variant: "globe",
  },
];
