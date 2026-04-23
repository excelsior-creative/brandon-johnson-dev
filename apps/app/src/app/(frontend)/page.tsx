import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Capabilities } from "@/components/sections/Capabilities";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { AiLabs } from "@/components/sections/AiLabs";
import { Projects } from "@/components/sections/Projects";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { HomeCta } from "@/components/sections/HomeCta";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = generatePageMetadata({
  title: "J. Brandon Johnson — AI Agent Orchestrator & Full Stack Developer",
  description:
    "Personal portfolio of J. Brandon Johnson: AI agent orchestrator, solutions architect, and full stack engineer building autonomous AI systems, automation platforms, and production software with Next.js, TypeScript, and the Eliza framework.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Capabilities />
      <WorkExperience />
      <AiLabs />
      <Projects />
      <TestimonialsSection />
      <HomeCta />
    </>
  );
}
