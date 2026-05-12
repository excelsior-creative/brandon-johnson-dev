export const site = {
  name: "J. Brandon Johnson",
  brand: "BrandonJohnson.dev",
  url: "https://brandonjohnson.dev",
  email: "hello@brandonjohnson.dev",
  tagline: "AI Agent Orchestrator & Full Stack Developer",
  description:
    "Personal portfolio of J. Brandon Johnson: AI agent orchestrator, solutions architect, and full stack engineer building autonomous AI systems, automation platforms, and production software.",
  ogImage: "/images/hero-image.png",
  nav: [
    { label: "Work", href: "/#work" },
    { label: "AI Labs", href: "/#ai-labs" },
    { label: "Projects", href: "/#projects" },
    { label: "Writing", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/swizzmagik" },
    { label: "GitHub", href: "https://github.com/swizzmagik" },
    { label: "Twitter", href: "https://twitter.com/swizzmagik" },
  ],
};

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

export const capabilities = [
  { title: "Front-End Engineering", description: "Crafting responsive, performant UIs with React, TypeScript, and modern web technologies.", icon: "⌁" },
  { title: "Full-Stack Development", description: "Building end-to-end solutions from database design to API development and front-end implementation.", icon: "◇" },
  { title: "Data Engineering", description: "Designing and implementing data pipelines, ETL processes, and analytics infrastructure.", icon: "▣" },
  { title: "AI Development", description: "Implementing and deploying machine learning models and AI-powered solutions.", icon: "✦" },
  { title: "Product Management", description: "Driving product strategy, roadmap planning, and cross-functional team leadership.", icon: "◎" },
  { title: "Technical Architecture", description: "Designing scalable system architectures and making key technical decisions.", icon: "⬡" },
  { title: "Process Optimization", description: "Optimizing application performance, from front-end rendering to backend efficiency.", icon: "↯" },
  { title: "Technical Leadership", description: "Mentoring teams and driving technical excellence across projects.", icon: "✹" },
];

export const workExperience = [
  { period: "2007-2013", role: "Software Engineering Lead", company: "Sierra Lobo", description: "Lead team of developers and network engineers through years of complex aerospace engineering projects.", link: "https://sierralobo.com/", category: "Leadership", title: "Aerospace Software Engineering", image: "/images/avatar.jpg" },
  { period: "2014-2017", role: "Senior Full Stack Developer", company: "SwizzMagik", description: "Founded a software engineering organization with a focus on website development and integration solutions.", link: "https://swizzmagik.com/", category: "Entrepreneurship", title: "Full Stack Development", image: "/images/avatar.jpg" },
  { period: "2016-2021", role: "Solutions Architect", company: "Excelsior Creative", description: "Co-founded a creative web development agency to build custom web solutions for small to mid-size businesses.", link: "https://excelsiorcreative.com/", category: "Architecture", title: "Web Solutions", image: "/images/excelsior.jpg" },
  { period: "2018-2021", role: "Software Engineering Lead", company: "OCERS", description: "Managed team of developers with a focus on business intelligence, analytics, and reporting solutions.", link: "https://ocers.org/", category: "Analytics", title: "Business Intelligence", image: "/images/ocers.jpg" },
  { period: "2022-2025", role: "Senior Software Engineer", company: "Synctera", description: "Built and maintained fintech infrastructure enabling companies to quickly launch banking products and services.", link: "https://synctera.com/", category: "Fintech", title: "Banking Infrastructure", image: "/images/synctera.jpg" },
];

export const aiLabs = [
  { title: "Eliza Framework Core Contributor", description: "Authored contributions to the Eliza agent runtime — helping shape how thousands of developers build conversational and autonomous agents in production environments.", variant: "chat" },
  { title: "OpenClaw Framework Contributor", description: "Contributed to the OpenClaw framework, advancing the next generation of tool-use orchestration and multi-agent coordination patterns that power modern agentic systems.", variant: "stack" },
  { title: "Multi-Framework Agent Architecture", description: "Battle-tested architectural patterns across both Eliza and OpenClaw — prompt routing, tool selection, memory layers, and resilient execution graphs.", variant: "grid" },
  { title: "From Open Source to Production", description: "Translated upstream framework work into resilient, scalable agent systems running mission-critical automation for real businesses.", variant: "globe" },
];

export const projects = [
  { title: "Banking-as-a-Service Platform", description: "Enterprise-grade financial platform processing billions in transaction value daily. Bridges multiple banks to fintech startups with high-throughput transaction processing and real-time settlement.", image: "/images/projects/banking-baas.svg", tags: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "Kubernetes"] },
  { title: "Web3 DeFi Platform", description: "Decentralized finance platform that scaled to $30M TVL within one year. Built with robust smart contracts, real-time price feeds, and advanced trading features.", image: "/images/projects/web3-defi.svg", tags: ["Solidity", "React", "Web3.js", "TheGraph", "Hardhat"] },
  { title: "Crypto Trading Bot Platform", description: "High-frequency trading bot orchestration platform for cryptocurrency markets. Features automated strategy execution, risk management, and real-time portfolio tracking.", image: "/images/projects/trading-bot.svg", tags: ["Python", "FastAPI", "MongoDB", "WebSocket", "Docker"] },
  { title: "Shopify SaaS Platform", description: "Shopify app serving 2500+ merchants with 600+ daily active users. Provides advanced analytics, automation tools, and inventory management features.", image: "/images/projects/shopify-saas.svg", tags: ["Next.js", "GraphQL", "Node.js", "PostgreSQL", "Redis"] },
  { title: "Legal Review Portal", description: "Workflow management system for legal review processes, serving thousands of users including survivors and victims of national tragedies. Features document management and secure communication.", image: "/images/projects/legal-portal.svg", tags: ["React", "Node.js", "SQL Server", "Azure", "Redux"] },
  { title: "NASA Cost Tracking System", description: "Web-based cost reporting application used by NASA & DoD, tracking over $200M in annualized funding. Features interactive dashboards and automated reconciliation.", image: "/images/projects/nasa-cost-tracking.svg", tags: ["C#", "SQL Server", "SSRS", "PowerBI", ".NET"] },
];

export const testimonials = [
  { name: "Allan Browning", quote: "Brandon is reliable, dedicated and has an in-depth understanding of a vast array of technologies. His knowledge and development experience is second to none.", src: "/testimonials/allan.jpeg", designation: "Software Engineer" },
  { name: "Dr. Curtis Shull", quote: "It was a pleasure to work with Brandon. Although the problem space was technically challenging, he developed a winning solution for the client.", src: "/testimonials/curtis.jpg", designation: "RF / IO / AI / ML / Cloud" },
  { name: "Dan Barger", quote: "Brandon is a tremendously hard working and efficient. I was proud to have worked with Brandon. He is talented and dedicated. A professional through and through!", src: "/testimonials/dan.png", designation: "CFO" },
  { name: "Daniel Zorub", quote: "I cannot recommend Brandon enough for any role, project, or team not only because of his expertise, but also because of the genuine person that he is.", src: "/testimonials/daniel.jpg", designation: "Non-profit Technology Advisor" },
  { name: "Jeff Hancock", quote: "Brandon is one of the best developers I have ever worked with. He is extremely reliable and will figure anything out!", src: "/testimonials/jeff.png", designation: "Software Engineer" },
  { name: "John Ingram", quote: "Brandon is the pinnacle of software professionals. He is a standout in his field and a great asset to any company.", src: "/testimonials/john.png", designation: "Research Scientist" },
  { name: "Nithin Jilla", quote: "Brandon is a quick learner and an excellent communicator. What Brandon sets his mind to, he accomplishes and he makes the people around him better along the way too.", src: "/testimonials/nithin.jpg", designation: "Educator, Entrepreneur, Philanthropist" },
  { name: "Scott Wickham", quote: "Brandon is customer-oriented with the ability to address a variety of audiences, from the non-technical, to executive, to technical.", src: "/testimonials/scott.png", designation: "Senior Software Engineer" },
];
