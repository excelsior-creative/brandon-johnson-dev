export type TechLogo = {
  title: string;
  src: string;
  width?: number;
};

// Logos chosen for dark backgrounds (the bright variants in /public/logos).
export const marqueeTechnologies: TechLogo[] = [
  { title: "Eliza", src: "/logos/eliza.png" },
  { title: "Next.js", src: "/logos/nextjs.png" },
  { title: "AWS", src: "/logos/aws.png" },
  { title: "OpenAI", src: "/logos/openai.png" },
  { title: "Solana", src: "/logos/solana.png" },
  { title: "Vercel", src: "/logos/vercel.png" },
  { title: "Digital Ocean", src: "/logos/digital-ocean.svg" },
  { title: "Google", src: "/logos/google.webp" },
  { title: "Amazon", src: "/logos/amazon.png" },
  { title: "Meta", src: "/logos/meta.png" },
  { title: "Netflix", src: "/logos/netflix.png" },
  { title: "Uber", src: "/logos/uber.png" },
];
