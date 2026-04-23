import { Container } from "@/components/Container";
import { generatePageMetadata } from "@/lib/metadata";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateProfilePageSchema,
} from "@/lib/structured-data";
import { SITE_URL } from "@/lib/metadata";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = generatePageMetadata({
  title: "About J. Brandon Johnson",
  description:
    "Get to know J. Brandon Johnson — a Full Stack Developer, Solutions Architect, and AI Practitioner with 15+ years leading AI, fintech, Web3, government, and enterprise projects. Top ElizaOS contributor in 2025.",
  path: "/about",
});

export default function AboutPage() {
  const schema = combineSchemas(
    generateProfilePageSchema(),
    generateBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "About", url: `${SITE_URL}/about` },
    ])
  );

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-brand">J. Brandon Johnson</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Full Stack Developer, Solutions Architect, and AI Practitioner with
              15+ years shipping high-impact software across AI, fintech, Web3,
              government, and enterprise. Passionate about agentic AI systems,
              cloud-native architecture, and turning complex ideas into shipped
              product.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-muted/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">What I Do</h2>
              <p className="text-muted-foreground leading-relaxed">
                I design and build AI-forward software: autonomous agents,
                agentic workflows, automation platforms, and production web
                applications. Recent work includes a UI/UX overhaul for a
                banking-as-a-service platform handling billions in weekly
                transaction volume, and top-contributor work on ElizaOS — the
                leading open-source AI agent framework.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Core Stack</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Next.js, React, TypeScript, Node.js</li>
                <li>• AI: Anthropic, OpenAI, Google, ElizaOS, agentic workflows</li>
                <li>• PostgreSQL, DynamoDB, MongoDB, MS SQL Server</li>
                <li>• AWS (CDK), Azure, Google Cloud, CI/CD</li>
                <li>• Payload CMS, Tailwind CSS, Framer Motion</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Career Highlights</h2>
            <ul className="space-y-3 text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">2025</strong> — Top
                contributor to ElizaOS, an open-source AI agent platform with
                16,000+ GitHub stars.
              </li>
              <li>
                <strong className="text-foreground">2024</strong> — Led UI/UX
                overhaul of a banking-as-a-service platform supporting billions
                in weekly transaction volume.
              </li>
              <li>
                <strong className="text-foreground">2023</strong> — Lead
                developer on Project NOVA, an AI-powered investigative tool
                assisting law enforcement.
              </li>
              <li>
                <strong className="text-foreground">2022</strong> — Directed a
                Web3 DeFi project that scaled from $0 to $30M total value
                locked in a year.
              </li>
              <li>
                <strong className="text-foreground">2016</strong> — Built a
                real-time data analytics platform used by executives managing
                multi-billion-dollar funds.
              </li>
              <li>
                <strong className="text-foreground">2014</strong> — Delivered a
                web-based data automation platform used by NASA and DoD to
                reconcile $200M+ annually.
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}
