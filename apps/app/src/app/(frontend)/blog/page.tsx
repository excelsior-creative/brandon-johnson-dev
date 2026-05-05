import React from "react";
import { getPayload } from "payload";
import config from "@/payload.config";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import Header from "@/components/Header";
import { Post } from "@/payload-types";
import { generatePageMetadata, SITE_URL } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = generatePageMetadata({
  title: "Blog",
  description:
    "Articles and essays from J. Brandon Johnson on AI agent orchestration, the Eliza framework, full stack engineering, automation, and shipping production software.",
  path: "/blog",
});

export default async function BlogPage() {
  const payload = await getPayload({ config });
  let posts: Post[] = [];

  try {
    const result = await payload.find({
      collection: "posts",
      sort: "-publishedDate",
      where: {
        _status: {
          equals: "published",
        },
      },
    });
    posts = result.docs as Post[];
  } catch (error) {
    console.error("Failed to fetch blog posts during page render.", error);
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
  ]);

  return (
    <div className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Container>
        <Header
          badge="Blog"
          title="All Articles"
          subtitle="Essays and notes on AI agents, automation, full stack engineering, and the tools I use to ship."
        />

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No posts found yet. Check back soon!
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}
