import config from "@/payload.config";
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";

export const PUBLIC_REVALIDATE_SECONDS = 86400;

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
