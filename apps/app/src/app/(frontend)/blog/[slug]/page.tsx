import React from "react";
import { getPayload } from "payload";
import config from "@/payload.config";
import { draftMode } from "next/headers";
import { Container } from "@/components/Container";
import Image from "next/image";
import { Media, Post } from "@/payload-types";
import { RichText } from "@/components/RichText";
import { RenderBlocks } from "@/blocks/RenderBlocks";
import { LivePreviewListener } from "@/components/LivePreviewListener";
import { PayloadRedirects } from "@/components/PayloadRedirects";
import {
  AUTHOR_NAME,
  DEFAULT_OG_IMAGE,
  SITE_URL,
  generateArticleMetadata,
} from "@/lib/metadata";
import {
  combineSchemas,
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "posts",
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  });

  return docs
    .map((post) => post.slug)
    .filter(Boolean)
    .map((slug) => ({ slug }));
}

async function fetchPost(
  slug: string,
  draft: boolean,
): Promise<Post | undefined> {
  const payload = await getPayload({ config });
  try {
    const { docs } = await payload.find({
      collection: "posts",
      draft,
      overrideAccess: draft,
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    });
    return docs[0] as Post | undefined;
  } catch (error) {
    console.error(
      `Failed to fetch blog post "${slug}" during page render.`,
      error,
    );
    return undefined;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const { isEnabled: draft } = await draftMode();
  const post = await fetchPost(decodedSlug, draft);

  if (!post) {
    return {
      title: "Post Not Found",
      robots: { index: false, follow: false },
    };
  }

  const meta = (
    post as unknown as {
      meta?: {
        title?: string;
        description?: string;
        image?: Media | string | null;
      };
    }
  ).meta;
  const featuredImage = post.featuredImage as Media | undefined;
  const metaImage = meta?.image as Media | string | undefined;
  const metaImageUrl =
    typeof metaImage === "string"
      ? metaImage
      : metaImage?.url || featuredImage?.url || DEFAULT_OG_IMAGE;
  const ogImage = metaImageUrl?.startsWith("http")
    ? metaImageUrl
    : `${SITE_URL}${metaImageUrl}`;

  const title = meta?.title || post.title;
  const description =
    meta?.description ||
    post.excerpt ||
    `Read "${post.title}" by ${AUTHOR_NAME}.`;

  return generateArticleMetadata({
    title,
    description,
    slug: decodedSlug,
    ogImage,
    publishedTime: post.publishedDate || post.createdAt,
    modifiedTime: post.updatedAt,
    author: AUTHOR_NAME,
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const url = `/blog/${decodedSlug}`;
  const { isEnabled: draft } = await draftMode();
  const post = await fetchPost(decodedSlug, draft);

  if (!post) {
    return <PayloadRedirects url={url} />;
  }

  const featuredImage = post.featuredImage as Media;

  const schema = combineSchemas(
    generateArticleSchema(post),
    generateBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Blog", url: `${SITE_URL}/blog` },
      { name: post.title, url: `${SITE_URL}/blog/${decodedSlug}` },
    ]),
  );

  return (
    <article className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {draft && <LivePreviewListener />}
      <PayloadRedirects disableNotFound url={url} />
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-muted-foreground">{post.excerpt}</p>
            )}
          </div>

          {featuredImage?.url && (
            <div className="relative aspect-video mb-12 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={featuredImage.url}
                alt={featuredImage.alt || post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <RichText data={post.content} className="max-w-none" />
        </div>
      </Container>
      {Array.isArray(post.layout) && post.layout.length > 0 && (
        <RenderBlocks blocks={post.layout as any} />
      )}
    </article>
  );
}
