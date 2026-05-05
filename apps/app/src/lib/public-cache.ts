import config from "@/payload.config";
import type { Page, Post } from "@/payload-types";
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";

export const PUBLIC_REVALIDATE_SECONDS = 86400;

export const staticSitemapDate = new Date("2026-01-01");

export const getCachedHeader = unstable_cache(
  async () => {
    const payload = await getPayload({ config });
    return payload.findGlobal({ slug: "header" });
  },
  ["global", "header"],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ["header", "global:header"] },
);

export const getCachedFooter = unstable_cache(
  async () => {
    const payload = await getPayload({ config });
    return payload.findGlobal({ slug: "footer" });
  },
  ["global", "footer"],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ["footer", "global:footer"] },
);

export const getCachedSiteSettings = unstable_cache(
  async () => {
    const payload = await getPayload({ config });
    return payload.findGlobal({ slug: "site-settings" });
  },
  ["global", "site-settings"],
  {
    revalidate: PUBLIC_REVALIDATE_SECONDS,
    tags: ["site-settings", "global:site-settings"],
  },
);

export const getCachedRecentPosts = unstable_cache(
  async (limit = 3): Promise<Post[]> => {
    try {
      const payload = await getPayload({ config });
      const { docs } = await payload.find({
        collection: "posts",
        sort: "-publishedDate",
        limit,
        where: { _status: { equals: "published" } },
      });
      return docs as Post[];
    } catch {
      return [];
    }
  },
  ["public-recent-posts"],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ["posts", "public-posts"] },
);

export const getCachedAllPosts = unstable_cache(
  async (): Promise<Post[]> => {
    try {
      const payload = await getPayload({ config });
      const { docs } = await payload.find({
        collection: "posts",
        sort: "-publishedDate",
        where: { _status: { equals: "published" } },
      });
      return docs as Post[];
    } catch {
      return [];
    }
  },
  ["public-all-posts"],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ["posts", "public-posts"] },
);

export const getCachedSitemapPosts = unstable_cache(
  async (): Promise<Pick<Post, "slug" | "updatedAt">[]> => {
    try {
      const payload = await getPayload({ config });
      const { docs } = await payload.find({
        collection: "posts",
        limit: 1000,
        where: { _status: { equals: "published" } },
        select: { slug: true, updatedAt: true },
      });
      return docs as Pick<Post, "slug" | "updatedAt">[];
    } catch {
      return [];
    }
  },
  ["public-sitemap-posts"],
  {
    revalidate: PUBLIC_REVALIDATE_SECONDS,
    tags: ["posts", "public-posts", "sitemap"],
  },
);

export const getCachedSitemapPages = unstable_cache(
  async (): Promise<Pick<Page, "slug" | "updatedAt">[]> => {
    try {
      const payload = await getPayload({ config });
      const { docs } = await payload.find({
        collection: "pages",
        limit: 1000,
        where: { _status: { equals: "published" } },
        select: { slug: true, updatedAt: true },
      });
      return docs as Pick<Page, "slug" | "updatedAt">[];
    } catch {
      return [];
    }
  },
  ["public-sitemap-pages"],
  {
    revalidate: PUBLIC_REVALIDATE_SECONDS,
    tags: ["pages", "public-pages", "sitemap"],
  },
);

export const getCachedPostSlugs = unstable_cache(
  async (): Promise<Array<{ slug: string }>> => {
    try {
      const payload = await getPayload({ config });
      const { docs } = await payload.find({
        collection: "posts",
        draft: false,
        limit: 1000,
        overrideAccess: false,
        pagination: false,
        select: { slug: true },
      });
      return docs
        .map((post) => post.slug)
        .filter(Boolean)
        .map((slug) => ({ slug }));
    } catch {
      return [];
    }
  },
  ["public-post-slugs"],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ["posts", "public-posts"] },
);

export const getCachedPostBySlug = unstable_cache(
  async (slug: string): Promise<Post | undefined> => {
    try {
      const payload = await getPayload({ config });
      const { docs } = await payload.find({
        collection: "posts",
        draft: false,
        overrideAccess: false,
        where: { slug: { equals: slug } },
        limit: 1,
      });
      return docs[0] as Post | undefined;
    } catch {
      return undefined;
    }
  },
  ["public-post-by-slug"],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ["posts", "public-posts"] },
);

export const getCachedPageSlugs = unstable_cache(
  async (): Promise<Array<{ slug: string }>> => {
    try {
      const payload = await getPayload({ config });
      const { docs } = await payload.find({
        collection: "pages",
        draft: false,
        limit: 1000,
        overrideAccess: false,
        pagination: false,
        select: { slug: true },
      });
      return docs
        .map((page) => page.slug)
        .filter((slug): slug is string => Boolean(slug && slug !== "home"))
        .map((slug) => ({ slug }));
    } catch {
      return [];
    }
  },
  ["public-page-slugs"],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ["pages", "public-pages"] },
);

export const getCachedPageBySlug = unstable_cache(
  async (slug: string): Promise<Page | undefined> => {
    try {
      const payload = await getPayload({ config });
      const { docs } = await payload.find({
        collection: "pages",
        draft: false,
        overrideAccess: false,
        limit: 1,
        where: { slug: { equals: slug } },
      });
      return docs[0] as Page | undefined;
    } catch {
      return undefined;
    }
  },
  ["public-page-by-slug"],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ["pages", "public-pages"] },
);
