export type TechLogo = {
  title: string;
  src: string;
};

// Monochrome logos on dark: prefer the `-b` (brand-black / outlined) variants
// where available so the marquee reads as a single graphic with a unified
// white-on-dark tone after the CSS grayscale/brightness pass is applied.
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
