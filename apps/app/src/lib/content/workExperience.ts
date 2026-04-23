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
    period: "2007-2013",
    role: "Software Engineering Lead",
    company: "Sierra Lobo",
    description:
      "Lead team of developers and network engineers through years of complex aerospace engineering projects.",
    link: "https://sierralobo.com/",
    category: "Leadership",
    title: "Aerospace Software Engineering",
    src: "/images/hero-image.png",
    accent: "linear-gradient(135deg, #1a1d3a 0%, #0a0d20 100%)",
  },
  {
    period: "2014-2017",
    role: "Senior Full Stack Developer",
    company: "SwizzMagik",
    description:
      "Founded a software engineering organization with a focus on website development and integration solutions.",
    link: "https://swizzmagik.com/",
    category: "Entrepreneurship",
    title: "Full Stack Development",
    src: "/images/avatar.jpg",
    accent: "linear-gradient(135deg, #2a1f4a 0%, #0a0d20 100%)",
  },
  {
    period: "2016-2021",
    role: "Solutions Architect",
    company: "Excelsior Creative",
    description:
      "Co-founded a creative web development agency to build custom web solutions for small to mid-size businesses.",
    link: "https://excelsiorcreative.com/",
    category: "Architecture",
    title: "Web Solutions",
    src: "/images/excelsior.jpg",
    accent: "linear-gradient(135deg, #1f2f4a 0%, #0a0d20 100%)",
  },
  {
    period: "2018-2021",
    role: "Software Engineering Lead",
    company: "OCERS",
    description:
      "Managed team of developers with a focus on business intelligence, analytics, and reporting solutions.",
    link: "https://ocers.org/",
    category: "Analytics",
    title: "Business Intelligence",
    src: "/images/ocers.jpg",
    accent: "linear-gradient(135deg, #3a2a1f 0%, #0a0d20 100%)",
  },
  {
    period: "2022-2025",
    role: "Senior Software Engineer",
    company: "Synctera",
    description:
      "Built and maintained fintech infrastructure enabling companies to quickly launch banking products and services.",
    link: "https://synctera.com/",
    category: "Fintech",
    title: "Banking Infrastructure",
    src: "/images/synctera.jpg",
    accent: "linear-gradient(135deg, #2a1a3a 0%, #0a0d20 100%)",
  },
];
