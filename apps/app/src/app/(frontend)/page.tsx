import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { ImpactStrip } from "@/components/sections/ImpactStrip";
import { Capabilities } from "@/components/sections/Capabilities";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { OpenSource } from "@/components/sections/OpenSource";
import { AiLabs } from "@/components/sections/AiLabs";
import { WritingPreview } from "@/components/sections/WritingPreview";
import { Community } from "@/components/sections/Community";
import { Projects } from "@/components/sections/Projects";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { HomeCta } from "@/components/sections/HomeCta";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <ImpactStrip />
      <Capabilities />
      <WorkExperience />
      <OpenSource />
      <AiLabs />
      <Projects />
      <WritingPreview />
      <Community />
      <TestimonialsSection />
      <HomeCta />
    </>
  );
}
