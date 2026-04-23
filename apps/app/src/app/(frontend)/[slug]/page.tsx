import React from "react";
import { draftMode } from "next/headers";
import { getPayload } from "payload";
import type { Metadata } from "next";

import config from "@payload-config";
import { LivePreviewListener } from "@/components/LivePreviewListener";
import { PayloadRedirects } from "@/components/PayloadRedirects";
import { RenderBlocks } from "@/blocks/RenderBlocks";
import { RenderHero } from "@/heros/RenderHero";
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  generatePageMetadata,
} from "@/lib/metadata";
import type { Media } from "@/payload-types";

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

async function fetchPage(slug: string, draft: boolean) {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "pages",
    draft,
    overrideAccess: draft,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });
  return docs[0];
}

export async function generateStaticParams() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "pages",
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  });

  return docs
    .map((page) => page.slug)
    .filter((slug) => Boolean(slug && slug !== "home"))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug = "" } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const { isEnabled: draft } = await draftMode();
  const page = await fetchPage(decodedSlug, draft);

  if (!page) {
    return {
      title: "Page Not Found",
      robots: { index: false, follow: false },
    };
  }

  const meta = (page as unknown as {
    meta?: { title?: string; description?: string; image?: Media | string | null };
    title?: string;
  }).meta;
  const metaImage = meta?.image as Media | string | undefined;
  const metaImageUrl =
    typeof metaImage === "string"
      ? metaImage
      : metaImage?.url || DEFAULT_OG_IMAGE;
  const ogImage = metaImageUrl?.startsWith("http")
    ? metaImageUrl
    : `${SITE_URL}${metaImageUrl}`;

  const pageTitle =
    meta?.title ||
    (page as unknown as { title?: string }).title ||
    decodedSlug;
  const description =
    meta?.description || `${pageTitle} — J. Brandon Johnson`;

  return generatePageMetadata({
    title: pageTitle,
    description,
    path: `/${decodedSlug}`,
    ogImage,
  });
}

export default async function CMSPage({ params }: Args) {
  const { isEnabled: draft } = await draftMode();
  const { slug = "" } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const url = `/${decodedSlug}`;

  const page = (await fetchPage(decodedSlug, draft)) as any;

  if (!page) {
    return <PayloadRedirects url={url} />;
  }

  return (
    <article>
      {draft && <LivePreviewListener />}
      <PayloadRedirects disableNotFound url={url} />
      <RenderHero {...page.hero} />
      <RenderBlocks blocks={page.layout as any} />
    </article>
  );
}
