import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { CosmicContainer } from "@/components/cosmic/Container";
import { SectionHeading } from "@/components/cosmic/SectionHeading";
import { getAllArticles, formatArticleDate } from "@/lib/content/articles";

export const metadata: Metadata = {
  title: "Writing — Brandon Johnson",
  description:
    "Opinionated essays on AI agents, LLM engineering, open source, and how senior engineers should actually work with models.",
};

export default function WritingIndexPage() {
  const articles = getAllArticles();

  return (
    <div className="pt-32 pb-24">
      <CosmicContainer>
        <SectionHeading
          eyebrow="Writing"
          title="Opinions, grounded in production"
          description="Essays on AI agents, LLM engineering, open source, and how senior engineers should actually work with models. Strong takes, not hot takes."
          align="left"
        />

        <div className="mt-16 flex flex-col divide-y divide-[--border-soft]">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/writing/${a.slug}`}
              className="group flex flex-col gap-3 py-8 transition-colors hover:bg-white/[0.02] md:flex-row md:items-start md:gap-10"
            >
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-[--ink-faint] md:w-40 md:shrink-0 md:pt-1">
                {formatArticleDate(a.date)}
                {a.readingTime && <span className="block">{a.readingTime}</span>}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.01em] text-[--ink] transition-colors group-hover:text-[--cyan] md:text-3xl">
                  {a.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-[--ink-dim]">
                  {a.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {a.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[--border-soft] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[--ink-dim]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-[--ink-faint] transition-colors group-hover:text-[--cyan] md:mt-2" />
            </Link>
          ))}
        </div>
      </CosmicContainer>
    </div>
  );
}
