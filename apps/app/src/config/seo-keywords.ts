/**
 * SEO keyword seeds used during automated article generation.
 * Categories bias the generator toward service pages, problem-solving posts,
 * or location-targeted content.
 */

export type KeywordCategory = "service" | "problem" | "local";

export type KeywordEntry = {
  keyword: string;
  category: KeywordCategory;
  location?: string;
};

export const seoKeywords: KeywordEntry[] = [
  { keyword: "AI agent development", category: "service" },
  { keyword: "AI agent orchestration", category: "service" },
  { keyword: "Eliza framework development", category: "service" },
  { keyword: "Full stack Next.js developer", category: "service" },
  { keyword: "AI automation consulting", category: "service" },
  { keyword: "Agentic workflow engineering", category: "service" },
  { keyword: "Solutions architect", category: "service" },
  { keyword: "TypeScript engineering", category: "service" },

  { keyword: "Reduce manual workflow overhead with AI", category: "problem" },
  { keyword: "Scale AI agents in production", category: "problem" },
  { keyword: "Fix slow Next.js website", category: "problem" },
  { keyword: "Modernize legacy software with AI", category: "problem" },

  { keyword: "AI consultant Orange County", category: "local", location: "Orange County" },
  { keyword: "Full stack developer Orange County", category: "local", location: "Orange County" },
  { keyword: "Remote AI engineer California", category: "local", location: "California" },
];

export function getRandomKeywords(count: number = 5): KeywordEntry[] {
  const shuffled = [...seoKeywords].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function formatKeywordWithLocation(entry: KeywordEntry): string {
  return entry.location ? `${entry.keyword} ${entry.location}` : entry.keyword;
}
