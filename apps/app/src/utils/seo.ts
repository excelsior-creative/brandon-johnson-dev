import { site } from "@/data/site";

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export function globalSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        alternateName: "Brandon Johnson",
        url: site.url,
        email: `mailto:${site.email}`,
        image: absoluteUrl("/images/avatar.jpg"),
        jobTitle: "AI Agent Orchestrator & Full Stack Developer",
        description: site.description,
        knowsAbout: [
          "Artificial Intelligence",
          "AI Agent Orchestration",
          "Full Stack Web Development",
          "Astro",
          "Next.js",
          "TypeScript",
          "Solutions Architecture",
          "Automation",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: site.url,
        description: site.description,
        publisher: { "@id": `${site.url}/#person` },
        inLanguage: "en-US",
      },
    ],
  };
}
