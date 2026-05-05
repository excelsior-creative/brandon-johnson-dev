import React from "react";
import type { Metadata } from "next";

import { PayloadRedirects } from "@/components/PayloadRedirects";
import { RenderBlocks } from "@/blocks/RenderBlocks";
import { RenderHero } from "@/heros/RenderHero";
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  generatePageMetadata,
} from "@/lib/metadata";
import { getCachedPageBySlug, getCachedPageSlugs } from "@/lib/public-cache";
import type { Media } from "@/payload-types";

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

export const revalidate = 86400;

export async function generateStaticParams() {
  return getCachedPageSlugs();
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug = "" } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const page = await getCachedPageBySlug(decodedSlug);

  if (!page) {
    return {
      title: "Page Not Found",
      robots: { index: false, follow: false },
    };
  }

  const meta = (
    page as unknown as {
      meta?: {
        title?: string;
        description?: string;
        image?: Media | string | null;
      };
      title?: string;
    }
  ).meta;
  const metaImage = meta?.image as Media | string | undefined;
  const metaImageUrl =
    typeof metaImage === "string"
      ? metaImage
      : metaImage?.url || DEFAULT_OG_IMAGE;
  const ogImage = metaImageUrl?.startsWith("http")
    ? metaImageUrl
    : `${SITE_URL}${metaImageUrl}`;

  const pageTitle =
    meta?.title || (page as unknown as { title?: string }).title || decodedSlug;
  const description = meta?.description || `${pageTitle} — J. Brandon Johnson`;

  return generatePageMetadata({
    title: pageTitle,
    description,
    path: `/${decodedSlug}`,
    ogImage,
  });
}

export default async function CMSPage({ params }: Args) {
  const { slug = "" } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const url = `/${decodedSlug}`;

  const page = (await getCachedPageBySlug(decodedSlug)) as any;

  if (!page) {
    return <PayloadRedirects url={url} />;
  }

  return (
    <article>
      <PayloadRedirects disableNotFound url={url} />
      <RenderHero {...page.hero} />
      <RenderBlocks blocks={page.layout as any} />
    </article>
  );
}
