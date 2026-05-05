import type { GlobalConfig } from "payload";
import { revalidateFrontendGlobals } from "@/hooks/revalidateFrontendGlobals";

import { linkGroup } from "@/fields/linkGroup";

export const Footer: GlobalConfig = {
  slug: "footer",
  hooks: {
    afterChange: [revalidateFrontendGlobals],
  },
  access: {
    read: () => true,
  },
  fields: [linkGroup()],
};
