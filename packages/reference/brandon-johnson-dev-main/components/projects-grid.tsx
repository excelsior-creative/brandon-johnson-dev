import Image from "next/image";
import { Heading } from "./heading";
import { Subheading } from "./subheading";

export const ProjectsGrid = () => {
  const projects = [
    {
      title: "Banking-as-a-Service Platform",
      description:
        "Enterprise-grade financial platform processing billions in transaction value daily. Bridges multiple banks to fintech startups with high-throughput transaction processing and real-time settlement.",
      image:
        "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80",
      tags: [
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Kubernetes",
      ],
    },
    {
      title: "Web3 DeFi Platform",
      description:
        "Decentralized finance platform that scaled to $30M TVL within one year. Built with robust smart contracts, real-time price feeds, and advanced trading features.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80",
      tags: ["Solidity", "React", "Web3.js", "TheGraph", "Hardhat"],
    },
    {
      title: "Crypto Trading Bot Platform",
      description:
        "High-frequency trading bot orchestration platform for cryptocurrency markets. Features automated strategy execution, risk management, and real-time portfolio tracking.",
      image:
        "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80",
      tags: ["Python", "FastAPI", "MongoDB", "WebSocket", "Docker"],
    },
    {
      title: "Shopify SaaS Platform",
      description:
        "Shopify app serving 2500+ merchants with 600+ daily active users. Provides advanced analytics, automation tools, and inventory management features.",
      image:
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80",
      tags: ["Next.js", "GraphQL", "Node.js", "PostgreSQL", "Redis"],
    },
    {
      title: "Legal Review Portal",
      description:
        "Workflow management system for legal review processes, serving thousands of users including survivors and victims of national tragedies. Features document management and secure communication.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
      tags: ["React", "Node.js", "SQL Server", "Azure", "Redux"],
    },
    {
      title: "NASA Cost Tracking System",
      description:
        "Web-based cost reporting application used by NASA & DoD, tracking over $200M in annualized funding. Features interactive dashboards and automated reconciliation.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      tags: ["C#", "SQL Server", "SSRS", "PowerBI", ".NET"],
    },
  ];

  return (
    <div className="relative z-10 py-20">
      <div className="mb-16">
        <Heading as="h2">Featured Projects</Heading>
        <Subheading className="text-center">
          A showcase of enterprise-scale applications and platforms I've
          architected and delivered
        </Subheading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({
  title,
  description,
  image,
  tags,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
}) => {
  return (
    <div className="group relative bg-white dark:bg-neutral-900 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition duration-200">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition duration-200">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
