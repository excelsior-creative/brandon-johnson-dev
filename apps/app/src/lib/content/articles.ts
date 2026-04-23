import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ArticleFrontmatter = {
  title: string;
  slug: string;
  date: string;
  readingTime: string;
  tags: string[];
  summary: string;
  cover?: string;
};

export type Article = ArticleFrontmatter & {
  body: string;
};

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

let cache: Article[] | null = null;

function loadArticlesFromDisk(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const articles = files.map((file) => {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const fm = data as Partial<ArticleFrontmatter>;
    if (!fm.title || !fm.slug || !fm.date) {
      throw new Error(
        `Article ${file} is missing required frontmatter (title, slug, date).`
      );
    }
    return {
      title: fm.title,
      slug: fm.slug,
      date: fm.date,
      readingTime: fm.readingTime ?? "",
      tags: fm.tags ?? [],
      summary: fm.summary ?? "",
      cover: fm.cover,
      body: content.trim(),
    } satisfies Article;
  });

  articles.sort((a, b) => (a.date < b.date ? 1 : -1));
  return articles;
}

export function getAllArticles(): Article[] {
  if (!cache) cache = loadArticlesFromDisk();
  return cache;
}

export function getArticleSlugs(): string[] {
  return getAllArticles().map((a) => a.slug);
}

export function getArticleBySlug(slug: string): Article | null {
  return getAllArticles().find((a) => a.slug === slug) ?? null;
}

export function getRecentArticles(limit = 4): Article[] {
  return getAllArticles().slice(0, limit);
}

export function formatArticleDate(date: string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
