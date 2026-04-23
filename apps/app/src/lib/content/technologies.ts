export type TechLogo = {
  title: string;
  src: string;
};

// The marquee applies a `brightness(0) invert(1)` CSS filter, which reduces
// each logo to a pure white silhouette of its alpha mask. That means source
// color (black, white, or full color) doesn't matter — any opaque pixel
// becomes white — so all logos render at a unified brightness on dark bg.
export const marqueeTechnologies: TechLogo[] = [
  { title: "Eliza", src: "/logos/eliza-b.png" },
  { title: "Next.js", src: "/logos/nextjs-b.png" },
  { title: "AWS", src: "/logos/aws-b.png" },
  { title: "OpenAI", src: "/logos/openai-b.png" },
  { title: "Solana", src: "/logos/solana-b.png" },
  { title: "Vercel", src: "/logos/vercel.png" },
  { title: "Google", src: "/logos/google.webp" },
  { title: "Amazon", src: "/logos/amazon.png" },
  { title: "Meta", src: "/logos/meta.png" },
  { title: "Uber", src: "/logos/uber.png" },
];
