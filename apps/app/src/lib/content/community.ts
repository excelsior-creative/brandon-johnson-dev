export type CommunityHighlight = {
  title: string;
  description: string;
  cta: string;
  href: string;
};

export const youtubeChannel = {
  handle: "@swizzmagik",
  name: "Brandon Johnson on YouTube",
  subscribers: "650,000+",
  url: "https://youtube.com/@swizzmagik",
  summary:
    "Long-form technical content, live builds, and opinionated deep-dives on AI agents, automation, and full-stack engineering.",
};

export const communityHighlights: CommunityHighlight[] = [
  {
    title: "Live-coded agent builds",
    description:
      "End-to-end walk-throughs of actual production agents — architecture calls, trade-offs, and live debugging without the polish edits.",
    cta: "Watch the build logs",
    href: "https://youtube.com/@swizzmagik",
  },
  {
    title: "Framework deep-dives",
    description:
      "Eliza, OpenClaw, and the broader OSS agent stack — covered from first commit to production at scale.",
    cta: "Browse framework videos",
    href: "https://youtube.com/@swizzmagik",
  },
  {
    title: "Engineering career talks",
    description:
      "Honest takes on senior-engineer leverage, the 5x LLM multiplier, and what actually moves careers in 2026.",
    cta: "See career series",
    href: "https://youtube.com/@swizzmagik",
  },
];
