import type { GlobalAfterChangeHook } from "payload";
import { revalidatePath, revalidateTag } from "next/cache";

export const revalidateFrontendGlobals: GlobalAfterChangeHook = ({
  doc,
  global,
}) => {
  const slug = global?.slug;

  if (slug) {
    revalidateTag(slug, "default");
    revalidateTag(`global:${slug}`, "default");
  }

  // Header/footer/site settings are consumed by the shared frontend layout,
  // so invalidate the cached layout tree as soon as a global changes.
  revalidatePath("/", "layout");

  return doc;
};
