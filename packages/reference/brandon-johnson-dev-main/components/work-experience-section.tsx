"use client";

import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { WorkExperienceContent } from "./work-experience-content";

export const WorkExperienceSection = () => {
  const experiences = [
    {
      period: "2007-2013",
      role: "Software Engineering Lead",
      company: "Sierra Lobo",
      description:
        "Lead team of developers and network engineers through years of complex aerospace engineering projects",
      link: "https://sierralobo.com/",
      category: "Leadership",
      title: "Aerospace Software Engineering",
      src: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop",
    },
    {
      period: "2014-2017",
      role: "Senior Full Stack Developer",
      company: "SwizzMagik",
      description:
        "Founded a software engineering organization with a focus on website development and integration solutions",
      link: "https://swizzmagik.com/",
      category: "Entrepreneurship",
      title: "Full Stack Development",
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      period: "2016-2021",
      role: "Solutions Architect",
      company: "Excelsior Creative",
      description:
        "Co-founded a creative web development agency to build custom web solutions for small to mid-size businesses",
      link: "https://excelsiorcreative.com/",
      category: "Architecture",
      title: "Web Solutions",
      src: "/images/excelsior.jpg",
    },
    {
      period: "2018-2021",
      role: "Software Engineering Lead",
      company: "OCERS",
      description:
        "Managed team of developers with a focus on my business intelligence, analytics, and reporting solutions",
      link: "https://ocers.org/",
      category: "Analytics",
      title: "Business Intelligence",
      src: "/images/ocers.jpg",
    },
    {
      period: "2022-2025",
      role: "Senior Software Engineer",
      company: "Synctera",
      description:
        "Built and maintained fintech infrastructure enabling companies to quickly launch banking products and services",
      link: "https://synctera.com/",
      category: "Fintech",
      title: "Banking Infrastructure",
      src: "/images/synctera.jpg",
    },
  ];

  const cards = experiences.map((exp, index) => (
    <Card
      key={exp.company}
      card={{
        category: exp.period,
        title: exp.role,
        src: exp.src,
        content: <WorkExperienceContent experience={exp} />,
        link: exp.link,
      }}
      index={index}
    />
  ));

  return (
    <div className="relative z-10 py-10 sm:py-20">
      <div className="mb-6 sm:mb-10 px-6 sm:px-8">
        <Heading as="h2">Work Experience</Heading>
        <Subheading className="text-center">
          Over 15 years of experience in software development and technical
          leadership
        </Subheading>
      </div>
      <div className="w-full overflow-hidden">
        <Carousel items={cards} />
      </div>
    </div>
  );
};
