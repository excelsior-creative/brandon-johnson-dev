import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Capabilities } from "@/components/sections/Capabilities";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { AiLabs } from "@/components/sections/AiLabs";
import { Projects } from "@/components/sections/Projects";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { HomeCta } from "@/components/sections/HomeCta";

export const revalidate = 60;

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
