import { Background } from "@/components/background";
import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { AiAgentsSection } from "@/components/features";
import { Hero } from "@/components/hero";
import { ProjectsGrid } from "@/components/projects-grid";
import { SkillsSection } from "@/components/skils-section";
import { Technologies } from "@/components/technologies";
import { Testimonials } from "@/components/testimonials";
import { WorkExperienceSection } from "@/components/work-experience-section";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden ">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col items-center justify-between ">
        <Hero />
        <Technologies />
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="experience">
          <WorkExperienceSection />
        </div>
        <div id="ai-agents">
          <AiAgentsSection />
        </div>
        <div id="projects">
          <ProjectsGrid />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
      </Container>
      <div className="relative">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Background />
        </div>
        <CTA />
      </div>
    </div>
  );
}
