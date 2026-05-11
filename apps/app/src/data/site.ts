export const site = {
  name: "J. Brandon Johnson",
  brand: "J. Brandon Johnson",
  url: "https://brandonjohnson.dev",
  email: "hello@brandonjohnson.dev",
  tagline: "Software Engineering, Supercharged",
  description:
    "Brandon Johnson is a 5x software engineer powered by the latest LLMs and agentic workflows, managing an army of AI agents that collaborate, learn, and act on data 24x7x365.",
  ogImage: "/images/dashboard.png",
  nav: [
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "AI Agents", href: "/#ai-agents" },
    { label: "Projects", href: "/#projects" },
    { label: "Testimonials", href: "/#testimonials" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/swizzmagik" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/swizzmagik/" },
    { label: "Twitter", href: "https://twitter.com/swizzmagik" },
  ],
};

export const skills = [
  { title: "Front-End Engineering", description: "Crafting responsive, performant UIs with React, TypeScript, and modern web technologies.", icon: "</>" },
  { title: "Full-Stack Development", description: "End-to-end solutions from database design to API development and front-end implementation.", icon: "↔" },
  { title: "Data Engineering", description: "Designing and implementing data pipelines, ETL processes, and analytics infrastructure.", icon: "◇" },
  { title: "AI Development", description: "Implementing and deploying machine learning models and AI-powered solutions.", icon: "✦" },
  { title: "Product Management", description: "Driving product strategy, roadmap planning, and cross-functional team leadership.", icon: "◎" },
  { title: "Technical Architecture", description: "Designing scalable system architectures and making key technical decisions.", icon: "⌁" },
  { title: "Process Optimization", description: "Optimizing application performance, from front-end rendering to backend efficiency.", icon: "$" },
  { title: "Technical Leadership", description: "Mentoring teams and driving technical excellence across projects.", icon: "♥" },
];

export const technologies = [
  { title: "ElizaOS", src: "/logos/eliza-b.png" },
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
  { period: "2023 — Now", role: "AI Automation Lead", company: "Independent / Labs", description: "Building 600+ AI agent fleets, multi-LLM orchestration, and automation tooling.", image: "/images/excelsior.jpg" },
  { period: "2016 — 2021", role: "Solutions Architect", company: "Excelsior Creative", description: "Co-founded a creative dev agency delivering custom web solutions for SMBs.", image: "/images/family.png" },
  { period: "2018 — 2021", role: "Software Engineering Lead", company: "OCERS", description: "Led a team focused on business intelligence, analytics, and reporting.", image: "/images/ocers.jpg" },
  { period: "2022 — 2025", role: "Senior Software Engineer", company: "Synctera", description: "Built fintech infrastructure for banking-as-a-service products at scale.", image: "/images/synctera.jpg" },
];

export const aiAgents = [
  { title: "Leading Eliza Framework Contributor", description: "Core contributor to the Eliza framework, pushing the boundaries of agent development and automation capabilities.", accent: "Core" },
  { title: "Advanced Agent Architecture", description: "Designed and implemented sophisticated agent systems capable of complex task automation and decision making.", accent: "Systems" },
  { title: "Multi-Model Integration Expert", description: "Deep expertise integrating diverse LLM architectures and creating hybrid AI solutions for enterprise needs.", accent: "Routing" },
  { title: "Production-Ready Solutions", description: "Track record of deploying robust, scalable agent systems that handle mission-critical automation tasks.", accent: "Ops" },
];

export const projects = [
  { title: "Banking-as-a-Service Platform", description: "Enterprise-grade financial platform processing billions daily. Bridges banks to fintech startups with real-time settlement.", image: "/images/projects/banking-baas.svg", tags: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "Kubernetes"] },
  { title: "Web3 DeFi Platform", description: "Decentralized finance platform scaled to $30M TVL within one year. Built with robust smart contracts and advanced trading features.", image: "/images/projects/web3-defi.svg", tags: ["Solidity", "React", "Web3.js", "TheGraph", "Hardhat"] },
  { title: "Crypto Trading Bot Platform", description: "High-frequency trading bot orchestration platform for cryptocurrency markets. Features automated strategy execution and risk management.", image: "/images/projects/trading-bot.svg", tags: ["Python", "FastAPI", "MongoDB", "WebSocket", "Docker"] },
  { title: "Shopify SaaS Platform", description: "Shopify app serving 2500+ merchants with 600+ daily active users. Provides advanced analytics, automation tools, and inventory features.", image: "/images/projects/shopify-saas.svg", tags: ["Next.js", "GraphQL", "Node.js", "PostgreSQL", "Redis"] },
  { title: "Legal Review Portal", description: "Workflow management system for legal review processes, serving thousands of users handling document management and secure communication.", image: "/images/projects/legal-portal.svg", tags: ["React", "Node.js", "SQL Server", "Azure", "Redux"] },
  { title: "NASA Cost Tracking System", description: "Web-based cost reporting application used by NASA & DoD, tracking over $200M in annualized funding with interactive dashboards.", image: "/images/projects/nasa-cost-tracking.svg", tags: ["C#", "SQL Server", "SSRS", "PowerBI", ".NET"] },
];

export const testimonials = [
  { name: "Allan Browning", quote: "Brandon is reliable, dedicated, and has an in-depth understanding of a vast array of technologies. His knowledge and development experience is second to none.", src: "/testimonials/allan.jpeg", designation: "Software Engineer" },
  { name: "Dr. Curtis Shull", quote: "It was a pleasure to work with Brandon. Although the problem space was technically challenging, he developed a winning solution for the client.", src: "/testimonials/curtis.jpg", designation: "RF / IO / AI / ML / Cloud" },
  { name: "Dan Barger", quote: "Brandon is a tremendously hard working and efficient engineer. I was proud to have worked with him. He is talented and dedicated. A professional through and through!", src: "/testimonials/dan.png", designation: "CFO" },
  { name: "Daniel Zorub", quote: "I cannot recommend Brandon enough for any role, project, or team not only because of his expertise, but also because of the genuine person that he is.", src: "/testimonials/daniel.jpg", designation: "Non-profit Technology Advisor" },
  { name: "Jeff Hancock", quote: "Brandon is one of the best developers I have ever worked with. He is extremely reliable and will figure anything out!", src: "/testimonials/jeff.png", designation: "Software Engineer" },
  { name: "John Ingram", quote: "Brandon is the pinnacle of software professionals. He is a standout in his field and a great asset to any company.", src: "/testimonials/john.png", designation: "Research Scientist" },
  { name: "Nithin Jilla", quote: "Brandon is a quick learner and an excellent communicator. What Brandon sets his mind to, he accomplishes — and he makes the people around him better along the way too.", src: "/testimonials/nithin.jpg", designation: "Educator, Entrepreneur, Philanthropist" },
  { name: "Scott Wickham", quote: "Brandon is customer-oriented with the ability to address a variety of audiences, from the non-technical to the executive, to the technical.", src: "/testimonials/scott.png", designation: "Senior Software Engineer" },
];
