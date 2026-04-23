export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Banking-as-a-Service Platform",
    description:
      "Enterprise-grade financial platform processing billions in transaction value daily. Bridges multiple banks to fintech startups with high-throughput transaction processing and real-time settlement.",
    image:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=1400",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "Kubernetes"],
  },
  {
    title: "Web3 DeFi Platform",
    description:
      "Decentralized finance platform that scaled to $30M TVL within one year. Built with robust smart contracts, real-time price feeds, and advanced trading features.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1400",
    tags: ["Solidity", "React", "Web3.js", "TheGraph", "Hardhat"],
  },
  {
    title: "Crypto Trading Bot Platform",
    description:
      "High-frequency trading bot orchestration platform for cryptocurrency markets. Features automated strategy execution, risk management, and real-time portfolio tracking.",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=1400",
    tags: ["Python", "FastAPI", "MongoDB", "WebSocket", "Docker"],
  },
  {
    title: "Shopify SaaS Platform",
    description:
      "Shopify app serving 2500+ merchants with 600+ daily active users. Provides advanced analytics, automation tools, and inventory management features.",
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=1400",
    tags: ["Next.js", "GraphQL", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    title: "Legal Review Portal",
    description:
      "Workflow management system for legal review processes, serving thousands of users including survivors and victims of national tragedies. Features document management and secure communication.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1400",
    tags: ["React", "Node.js", "SQL Server", "Azure", "Redux"],
  },
  {
    title: "NASA Cost Tracking System",
    description:
      "Web-based cost reporting application used by NASA & DoD, tracking over $200M in annualized funding. Features interactive dashboards and automated reconciliation.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1400",
    tags: ["C#", "SQL Server", "SSRS", "PowerBI", ".NET"],
  },
];
