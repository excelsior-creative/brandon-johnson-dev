import type { Media, Post } from "@/payload-types";
import {
  AUTHOR_EMAIL,
  AUTHOR_NAME,
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "./metadata";

/**
 * Generate Person schema — primary entity for this personal portfolio.
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: AUTHOR_NAME,
    alternateName: "Brandon Johnson",
    url: SITE_URL,
    email: `mailto:${AUTHOR_EMAIL}`,
    image: `${SITE_URL}/images/avatar.jpg`,
    jobTitle: "AI Agent Orchestrator & Full Stack Developer",
    description: DEFAULT_DESCRIPTION,
    knowsAbout: [
      "Artificial Intelligence",
      "AI Agent Orchestration",
      "Eliza Framework",
      "Full Stack Web Development",
      "Next.js",
      "TypeScript",
      "Solutions Architecture",
      "Web3",
      "Cloud Architecture",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "MIT Sloan School of Management",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "The University of Toledo",
      },
    ],
  };
}

/**
 * Generate WebSite schema
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
  };
}

/**
 * Generate ProfilePage schema for the /about page.
 */
export function generateProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/about#profile`,
    url: `${SITE_URL}/about`,
    name: `About ${AUTHOR_NAME}`,
    description: DEFAULT_DESCRIPTION,
    mainEntity: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

/**
 * Generate BreadcrumbList schema for a page.
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Article schema
 */
export function generateArticleSchema(article: Post) {
  const featuredImage = article.featuredImage as Media | undefined;
  const imageUrl = featuredImage?.url
    ? featuredImage.url.startsWith("http")
      ? featuredImage.url
      : `${SITE_URL}${featuredImage.url}`
    : `${SITE_URL}/images/hero-image.png`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@id": `${SITE_URL}/#person`,
    },
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    datePublished: article.publishedDate,
    dateModified: article.updatedAt,
    image: imageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${article.slug}`,
    },
    url: `${SITE_URL}/blog/${article.slug}`,
  };
}

/**
 * Generate combined global schema for every page
 */
export function generateGlobalSchema() {
  return combineSchemas(generatePersonSchema(), generateWebSiteSchema());
}

/**
 * Combine multiple schemas into a single graph
 */
export function combineSchemas(...schemas: (object | null)[]) {
  const validSchemas = schemas.filter(Boolean);
  if (validSchemas.length === 0) return null;
  if (validSchemas.length === 1) return validSchemas[0];

  return {
    "@context": "https://schema.org",
    "@graph": validSchemas.map((schema) => {
      const { "@context": _, ...rest } = schema as { "@context"?: string };
      return rest;
    }),
  };
}

/**
 * Backwards-compat: some callers may still import the Organization schema name.
 * Re-export the Person schema under that name so old imports keep working.
 */
export const generateOrganizationSchema = generatePersonSchema;
