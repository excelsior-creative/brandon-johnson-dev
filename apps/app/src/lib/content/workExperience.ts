export type WorkExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
  link: string;
  category: string;
  title: string;
  src: string;
  accent: string;
};

export const workExperience: WorkExperienceItem[] = [
  {
    period: "Now",
    role: "Agentic Operating System",
    company: "Excelsior Creative",
    description:
      "Building an internal AI workforce, BOS documentation layer, memory systems, and operational reporting loops for an agency serving dozens of active clients.",
    link: "https://excelsiorcreative.com/",
    category: "Agentic Ops",
    title: "Business Operating System",
    src: "/images/excelsior.jpg",
    accent: "linear-gradient(135deg, #1f2f4a 0%, #0a0d20 100%)",
  },
  {
    period: "Now",
    role: "AI Content & Media Systems",
    company: "Excelsior Creative",
    description:
      "Designing AI-assisted pipelines for articles, social content, video concepts, brand assets, and client marketing operations with reviewable human checkpoints.",
    link: "https://excelsiorcreative.com/",
    category: "AI Media",
    title: "Content Automation",
    src: "/images/avatar.jpg",
    accent: "linear-gradient(135deg, #2a1f4a 0%, #0a0d20 100%)",
  },
  {
    period: "2024+",
    role: "Agent Framework Contributor",
    company: "OpenClaw / Eliza Ecosystem",
    description:
      "Applying tool-use orchestration, prompt routing, memory layers, and resilient execution patterns from open-source agent frameworks to practical business systems.",
    link: "https://github.com/swizzmagik",
    category: "Open Source",
    title: "Agentic Engineering",
    src: "/images/avatar.jpg",
    accent: "linear-gradient(135deg, #1a1d3a 0%, #0a0d20 100%)",
  },
  {
    period: "2016+",
    role: "AI-Native Web Platforms",
    company: "Excelsior Creative",
    description:
      "Translating web, CMS, CRM, analytics, and support needs into custom Next.js, Payload, WordPress, and automation-backed systems for SMB clients.",
    link: "https://excelsiorcreative.com/",
    category: "Platforms",
    title: "Modern Web Systems",
    src: "/images/excelsior.jpg",
    accent: "linear-gradient(135deg, #3a2a1f 0%, #0a0d20 100%)",
  },
  {
    period: "15+ yrs",
    role: "Software & Data Systems",
    company: "Aerospace, Public Sector, Fintech",
    description:
      "Earlier enterprise work across aerospace software, public-sector reporting, business intelligence, and fintech infrastructure informs the reliability bar for AI systems today.",
    link: "https://brandonjohnson.dev/about",
    category: "Foundation",
    title: "Enterprise Software Background",
    src: "/images/synctera.jpg",
    accent: "linear-gradient(135deg, #2a1a3a 0%, #0a0d20 100%)",
  },
];
