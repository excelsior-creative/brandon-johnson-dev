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
  title: "Brandon Johnson — Agentic Engineering & AI Systems Consulting",
  description:
    "Brandon Johnson helps founders, agencies, and operators design practical AI systems, agentic workflows, automation infrastructure, and AI-native web platforms that turn operations into leverage.",
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
