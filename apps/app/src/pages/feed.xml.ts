import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "@/data/site";

export async function GET() {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft);
  return rss({
    title: `${site.name} Blog`,
    description: site.description,
    site: site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.data.slug ?? post.id.replace(/\.mdx?$/, "")}/`,
    })),
  });
}
