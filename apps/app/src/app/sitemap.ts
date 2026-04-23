import { SITE_URL } from "@/lib/metadata";
import config from "@payload-config";
import { MetadataRoute } from "next";
import { getPayload } from "payload";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config });

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Fetch all published posts
  let postPages: MetadataRoute.Sitemap = [];
  try {
    const { docs: posts } = await payload.find({
      collection: "posts",
      limit: 1000,
      where: {
        _status: {
          equals: "published",
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    });

    postPages = posts
      .filter((post) => post.slug)
      .map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
  } catch (err) {
    console.error("Sitemap: failed to fetch posts", err);
  }

  // Fetch all published CMS pages (exclude "home" — it's already the root URL)
  let cmsPages: MetadataRoute.Sitemap = [];
  try {
    const { docs: pages } = await payload.find({
      collection: "pages",
      limit: 1000,
      where: {
        _status: {
          equals: "published",
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    });

    cmsPages = pages
      .filter((page) => page.slug && page.slug !== "home")
      .map((page) => ({
        url: `${SITE_URL}/${page.slug}`,
        lastModified: new Date(page.updatedAt),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
  } catch (err) {
    console.error("Sitemap: failed to fetch pages", err);
  }

  return [...staticPages, ...cmsPages, ...postPages];
}
