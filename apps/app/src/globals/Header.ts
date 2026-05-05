import type { GlobalConfig } from "payload";
import { revalidateFrontendGlobals } from "@/hooks/revalidateFrontendGlobals";

import { linkGroup } from "@/fields/linkGroup";

export const Header: GlobalConfig = {
  slug: "header",
  hooks: {
    afterChange: [revalidateFrontendGlobals],
  },
  access: {
    read: () => true,
  },
  fields: [linkGroup()],
};
