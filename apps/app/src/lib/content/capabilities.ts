import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BrainCircuit,
  Workflow,
  Network,
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
    title: "AI Systems Strategy",
    description:
      "Map high-leverage workflows, separate practical AI opportunities from hype, and turn them into an implementation roadmap.",
    icon: Compass,
  },
  {
    title: "Agentic Workflow Design",
    description:
      "Design agents with clear roles, tools, memory, escalation paths, and evaluation loops so they can operate inside real teams.",
    icon: Bot,
  },
  {
    title: "Business Automation",
    description:
      "Connect Slack, email, CRMs, helpdesks, docs, and dashboards into reliable workflows that remove repetitive operational drag.",
    icon: Workflow,
  },
  {
    title: "AI-Native Web Platforms",
    description:
      "Build modern Next.js and Payload CMS platforms that act as operational interfaces, not just brochure websites.",
    icon: Building2,
  },
  {
    title: "Knowledge & Memory Systems",
    description:
      "Structure company knowledge so humans and agents can retrieve context, preserve decisions, and act consistently over time.",
    icon: BrainCircuit,
  },
  {
    title: "Multi-Agent Operations",
    description:
      "Coordinate specialist agents, routing rules, reporting rhythms, and human-in-the-loop controls for production operations.",
    icon: Network,
  },
  {
    title: "Performance & Reliability",
    description:
      "Harden automations with observability, retries, validation, and clear failure modes before they touch client-facing work.",
    icon: Gauge,
  },
  {
    title: "Operator Enablement",
    description:
      "Translate systems into playbooks, training, and decision frameworks so teams can own the workflow after launch.",
    icon: Users,
  },
];
