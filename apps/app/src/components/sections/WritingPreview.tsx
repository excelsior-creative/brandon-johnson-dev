import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CosmicContainer } from "@/components/cosmic/Container";
import { SectionHeading } from "@/components/cosmic/SectionHeading";
import { formatArticleDate, getRecentArticles } from "@/lib/content/articles";

export function WritingPreview() {
  const articles = getRecentArticles(4);
  if (articles.length === 0) return null;
  const [featured, ...rest] = articles;

  return (
    <section id="writing" className="relative py-24 md:py-32">
      <CosmicContainer>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Writing"
            title="Opinions, grounded in production."
            description="Strong takes on AI agents, LLM engineering, and open-source career signal. Shipped, not just pondered."
            align="left"
          />
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-[0.16em] text-[--cyan] transition-colors hover:text-[--cyan-glow] md:self-end"
          >
            All writing
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured && (
            <Link
              href={`/writing/${featured.slug}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[--border-soft] bg-[--card-soft] p-8 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[rgba(56,189,248,0.35)] lg:col-span-2 lg:row-span-2"
              style={{
                background:
                  "radial-gradient(ellipse 700px 400px at 0% 100%, rgba(124,92,255,0.12), transparent 60%), radial-gradient(ellipse 600px 300px at 100% 0%, rgba(56,189,248,0.1), transparent 60%), var(--card-soft)",
              }}
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-[--ink-faint]">
                <span className="font-mono uppercase tracking-[0.16em]">
                  {formatArticleDate(featured.date)}
                </span>
                {featured.readingTime && (
                  <>
                    <span>·</span>
                    <span className="font-mono uppercase tracking-[0.16em]">
                      {featured.readingTime}
                    </span>
                  </>
                )}
                <span className="ml-auto rounded-full border border-[rgba(56,189,248,0.3)] bg-[rgba(56,189,248,0.08)] px-2.5 py-1 font-mono uppercase tracking-[0.08em] text-[--cyan]">
                  Featured
                </span>
              </div>
              <div className="mt-6 flex-1">
                <h3 className="font-display text-[clamp(26px,2.6vw,34px)] font-bold leading-[1.12] tracking-[-0.02em] text-[--ink] transition-colors group-hover:text-[--cyan]">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-[--ink-dim]">
                  {featured.summary}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[--cyan]">
                  Read essay <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
                <div className="ml-auto flex flex-wrap gap-2">
                  {featured.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[--border-soft] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[--ink-dim]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          )}

          {rest.map((a) => (
            <Link
              key={a.slug}
              href={`/writing/${a.slug}`}
              className="group flex flex-col gap-3 rounded-3xl border border-[--border-soft] bg-[--card-soft] p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[rgba(56,189,248,0.35)]"
            >
              <div className="flex items-center gap-3 text-xs text-[--ink-faint]">
                <span className="font-mono uppercase tracking-[0.16em]">
                  {formatArticleDate(a.date)}
                </span>
                {a.readingTime && (
                  <>
                    <span>·</span>
                    <span className="font-mono uppercase tracking-[0.16em]">
                      {a.readingTime}
                    </span>
                  </>
                )}
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.01em] text-[--ink] transition-colors group-hover:text-[--cyan]">
                {a.title}
              </h3>
              <p className="text-sm leading-relaxed text-[--ink-dim]">{a.summary}</p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[--ink-faint]">
                  {a.tags[0]}
                </span>
                <ArrowUpRight className="h-4 w-4 text-[--ink-faint] transition-colors group-hover:text-[--cyan]" />
              </div>
            </Link>
          ))}
        </div>
      </CosmicContainer>
    </section>
  );
}
