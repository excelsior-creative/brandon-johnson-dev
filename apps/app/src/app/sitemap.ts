import { SITE_URL } from "@/lib/metadata";
import {
  getCachedSitemapPages,
  getCachedSitemapPosts,
  staticSitemapDate,
} from "@/lib/public-cache";
import { MetadataRoute } from "next";

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: staticSitemapDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: staticSitemapDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: staticSitemapDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: staticSitemapDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: staticSitemapDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: staticSitemapDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const [posts, pages] = await Promise.all([
    getCachedSitemapPosts(),
    getCachedSitemapPages(),
  ]);

  const postPages: MetadataRoute.Sitemap = posts
    .filter((post) => post.slug)
    .map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  const cmsPages: MetadataRoute.Sitemap = pages
    .filter((page) => page.slug && page.slug !== "home")
    .map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: new Date(page.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticPages, ...cmsPages, ...postPages];
}
