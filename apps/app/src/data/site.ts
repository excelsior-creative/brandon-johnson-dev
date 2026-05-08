export const site = {
  name: "J. Brandon Johnson",
  brand: "J. Brandon Johnson",
  url: "https://brandonjohnson.dev",
  email: "hello@brandonjohnson.dev",
  tagline: "Software Engineering, Supercharged",
  description:
    "Brandon Johnson is a 5x software engineer building AI-assisted software, agentic workflows, and practical operating systems for modern teams.",
  ogImage: "/images/dashboard.png",
  nav: [
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "AI Agents", href: "/#ai-agents" },
    { label: "Projects", href: "/#projects" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Articles", href: "/blog" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/swizzmagik" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/swizzmagik/" },
    { label: "Twitter", href: "https://twitter.com/swizzmagik" },
  ],
};

export const skills = [
  { title: "Front-End Engineering", description: "Responsive, polished interfaces with React, Astro, TypeScript, animation, and design-system discipline.", icon: "</>" },
  { title: "Full-Stack Development", description: "End-to-end products from data model and API to CMS, workflow, and production deployment.", icon: "↔" },
  { title: "Data Engineering", description: "Pipelines, reporting, enrichment, analytics, and operational dashboards that make decisions easier.", icon: "◇" },
  { title: "AI Development", description: "LLM-powered tools, retrieval, structured outputs, multi-step workflows, and agent interfaces.", icon: "✦" },
  { title: "Product Management", description: "Strategy, roadmap tradeoffs, scope control, and the taste to know what should not be built yet.", icon: "◎" },
  { title: "Technical Architecture", description: "Durable system boundaries, deployment models, cost controls, observability, and failure paths.", icon: "⌁" },
  { title: "Process Optimization", description: "Removing manual drag by connecting CRMs, support queues, docs, content, and reporting loops.", icon: "$" },
  { title: "Technical Leadership", description: "Mentoring teams, directing AI collaborators, and keeping implementation tied to business outcomes.", icon: "♥" },
];

export const technologies = [
  { title: "Eliza", src: "/logos/eliza-b.png" },
  { title: "Next.js", src: "/logos/nextjs-b.png" },
  { title: "AWS", src: "/logos/aws-b.png" },
  { title: "OpenAI", src: "/logos/openai-b.png" },
  { title: "Solana", src: "/logos/solana-b.png" },
  { title: "Vercel", src: "/logos/vercel.png" },
  { title: "Google", src: "/logos/google.webp" },
  { title: "Amazon", src: "/logos/amazon.png" },
  { title: "Meta", src: "/logos/meta.png" },
  { title: "Uber", src: "/logos/uber.png" },
];

export const workExperience = [
  { period: "Now", role: "Founder / Chief Operator", company: "Excelsior Creative", description: "Running a hybrid human-plus-AI web agency and building the operating layer that coordinates agents, client work, reporting, and delivery.", image: "/images/excelsior.jpg" },
  { period: "2024+", role: "Agentic Systems Builder", company: "OpenClaw / Eliza Ecosystem", description: "Designing practical multi-agent systems with memory, tool use, routing, escalation, and evaluation loops.", image: "/images/avatar.jpg" },
  { period: "Fintech", role: "Software Engineer", company: "Synctera", description: "Built production financial technology systems where reliability, clear boundaries, and operational discipline matter.", image: "/images/synctera.jpg" },
  { period: "Public sector", role: "Data & Software Systems", company: "OCERS / Aerospace / Analytics", description: "Earlier work across aerospace software, public-sector reporting, and business intelligence shaped the reliability bar for AI systems today.", image: "/images/ocers.jpg" },
];

export const aiAgents = [
  { title: "Leading Eliza Framework Contributor", description: "Hands-on experience with agent framework patterns, plugin surfaces, memory, tools, and orchestration primitives.", accent: "Core" },
  { title: "Advanced Agent Architecture", description: "Agents designed as operating roles with scoped tools, review gates, logs, fallbacks, and measurable outcomes.", accent: "Systems" },
  { title: "Multi-Model Integration Expert", description: "Model routing across reasoning, code, research, media, and structured-output workflows instead of one-model-fits-all automation.", accent: "Routing" },
  { title: "Production-Ready Solutions", description: "Automation that survives real work: retries, observability, alerts, human approvals, and graceful degradation.", accent: "Ops" },
];

export const projects = [
  { title: "Agency Business Operating System", description: "An operating layer for Excelsior Creative: agent roles, specs, journals, routing, reporting, memory, and escalation paths.", image: "/images/projects/ai-operating-system.svg", tags: ["Agentic Ops", "Knowledge Systems", "Automation"] },
  { title: "AI Agent Workforce", description: "A coordinated team of specialist AI agents for development, planning, QA, content, support, and operations.", image: "/images/projects/multi-agent-workforce.svg", tags: ["Agents", "Tool Use", "Memory"] },
  { title: "Client Automation Pipelines", description: "Workflows that convert intake, support, content, reporting, and proposal tasks into reliable automations.", image: "/images/projects/client-automation.svg", tags: ["CRM", "Helpdesk", "Docs"] },
  { title: "AI-Native Web Platforms", description: "Modern websites and internal tools built with CMS and automation hooks so the website becomes a business system.", image: "/images/projects/ai-web-platform.svg", tags: ["Astro", "Next.js", "CMS"] },
  { title: "AI Content & Thought Leadership Engine", description: "Repeatable pipelines for research, drafting, editing, visuals, and publishing that turn expertise into useful content.", image: "/images/projects/content-engine.svg", tags: ["Research", "Editorial", "Review Loops"] },
  { title: "Enterprise Software Foundation", description: "Aerospace, public-sector analytics, and fintech infrastructure work that shaped the implementation discipline behind today's AI systems.", image: "/images/projects/enterprise-foundation.svg", tags: ["Fintech", "BI", "Reliability"] },
];

export const testimonials = [
  { name: "Allan Browning", quote: "Brandon is reliable, dedicated and has an in-depth understanding of a vast array of technologies. His knowledge and development experience is second to none.", src: "/testimonials/allan.jpeg", designation: "Software Engineer" },
  { name: "Dr. Curtis Shull", quote: "It was a pleasure to work with Brandon. Although the problem space was technically challenging, he developed a winning solution for the client.", src: "/testimonials/curtis.jpg", designation: "RF / IO / AI / ML / Cloud" },
  { name: "Jeff Hancock", quote: "Brandon is one of the best developers I have ever worked with. He is extremely reliable and will figure anything out!", src: "/testimonials/jeff.png", designation: "Software Engineer" },
  { name: "Nithin Jilla", quote: "Brandon is a quick learner and an excellent communicator. What Brandon sets his mind to, he accomplishes.", src: "/testimonials/nithin.jpg", designation: "Educator, Entrepreneur, Philanthropist" },
];
