export type AiLab = {
  title: string;
  description: string;
  variant: "chat" | "stack" | "globe" | "grid";
};

export const aiLabs: AiLab[] = [
  {
    title: "Orchestrating 600+ Agents in Production",
    description:
      "A live fleet of supervisor and worker agents running on budgets, idempotent tools, and replayable traces. Distributed systems first, LLMs second.",
    variant: "chat",
  },
  {
    title: "Multi-Model Routing & Evaluation",
    description:
      "Model-agnostic pipelines that route tasks to the right LLM, pinned by version and grounded by a nightly eval harness that flags regressions before users do.",
    variant: "stack",
  },
  {
    title: "Agent-Native System Design",
    description:
      "Supervisor + worker topologies, cache-first tool layers, and eval-first development workflows — the patterns that turn experimental agents into reliable infrastructure.",
    variant: "grid",
  },
  {
    title: "Mission-Critical Automation",
    description:
      "Production agent systems automating ops, research, content, and trading — deployed against budgets, SLAs, and the kind of audit trail enterprise customers actually ask about.",
    variant: "globe",
  },
];
