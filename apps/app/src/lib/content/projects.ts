export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Agency Business Operating System",
    description:
      "An AI-assisted operating layer for Excelsior Creative: agent roles, specs, journals, routing, reporting, memory, and escalation paths that make agency work more repeatable.",
    image: "/images/projects/ai-operating-system.svg",
    tags: ["Agentic Ops", "Knowledge Systems", "Slack", "GitHub", "Automation"],
  },
  {
    title: "AI Agent Workforce",
    description:
      "A coordinated team of specialist AI agents for development, planning, QA, content, support, and operations — designed around roles, tools, context, and human review.",
    image: "/images/projects/multi-agent-workforce.svg",
    tags: ["Agents", "Tool Use", "Memory", "Evaluation", "Human-in-the-loop"],
  },
  {
    title: "Client Automation Pipelines",
    description:
      "Workflows that convert intake, support, content, reporting, and proposal tasks into reliable automations across helpdesk, docs, email, ClickUp, and web platforms.",
    image: "/images/projects/client-automation.svg",
    tags: ["CRM", "Helpdesk", "Docs", "ClickUp", "Reporting"],
  },
  {
    title: "AI-Native Web Platforms",
    description:
      "Modern websites and internal tools built with Next.js, Payload CMS, and automation hooks so the website becomes a business system instead of a static brochure.",
    image: "/images/projects/ai-web-platform.svg",
    tags: ["Next.js", "Payload CMS", "TypeScript", "Vercel", "Integrations"],
  },
  {
    title: "AI Content & Thought Leadership Engine",
    description:
      "Repeatable pipelines for research, drafting, editing, visuals, and publishing that help founders and agencies turn operational expertise into useful public content.",
    image: "/images/projects/content-engine.svg",
    tags: ["Research", "Editorial", "Social", "Video", "Review Loops"],
  },
  {
    title: "Enterprise Software Foundation",
    description:
      "Aerospace, public-sector analytics, and fintech infrastructure work that shaped the implementation discipline behind today's AI systems: reliability, auditability, and scale.",
    image: "/images/projects/enterprise-foundation.svg",
    tags: ["Fintech", "BI", "Public Sector", "Architecture", "Reliability"],
  },
];
