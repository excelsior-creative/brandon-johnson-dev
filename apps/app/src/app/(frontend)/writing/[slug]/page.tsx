import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CosmicContainer } from "@/components/cosmic/Container";
import {
  formatArticleDate,
  getAllArticles,
  getArticleBySlug,
} from "@/lib/content/articles";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Brandon Johnson`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.date,
      tags: article.tags,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getAllArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <article className="relative pt-32 pb-24">
      <CosmicContainer className="max-w-[760px]">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[--ink-faint] transition-colors hover:text-[--cyan]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All writing
        </Link>

        <header className="mt-8 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[--ink-faint]">
            <span className="font-mono uppercase tracking-[0.16em]">
              {formatArticleDate(article.date)}
            </span>
            {article.readingTime && (
              <>
                <span>·</span>
                <span className="font-mono uppercase tracking-[0.16em]">
                  {article.readingTime}
                </span>
              </>
            )}
          </div>
          <h1 className="font-display text-[clamp(34px,5vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] text-[--ink]">
            {article.title}
          </h1>
          <p className="text-lg leading-relaxed text-[--ink-dim]">{article.summary}</p>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[--border-soft] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[--ink-dim]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-16 prose-cosmic">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.body}</ReactMarkdown>
        </div>

        {related.length > 0 && (
          <aside className="mt-24 border-t border-[--border-soft] pt-12">
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-[--cyan]">
              Keep Reading
            </div>
            <div className="mt-6 flex flex-col divide-y divide-[--border-soft]">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/writing/${r.slug}`}
                  className="group flex items-start justify-between gap-6 py-5 transition-colors hover:bg-white/[0.02]"
                >
                  <div>
                    <div className="font-display text-lg font-semibold leading-snug text-[--ink] transition-colors group-hover:text-[--cyan]">
                      {r.title}
                    </div>
                    <div className="mt-1 text-sm text-[--ink-faint]">{r.summary}</div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[--ink-faint] transition-colors group-hover:text-[--cyan]" />
                </Link>
              ))}
            </div>
          </aside>
        )}
      </CosmicContainer>
    </article>
  );
}
