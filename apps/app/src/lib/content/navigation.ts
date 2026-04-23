export type CosmicNavItem = {
  label: string;
  href: string;
  newTab?: boolean;
};

export const cosmicNavItems: CosmicNavItem[] = [
  { label: "Work", href: "/#work" },
  { label: "Open Source", href: "/#open-source" },
  { label: "AI Labs", href: "/#ai-labs" },
  { label: "Writing", href: "/writing" },
  { label: "Community", href: "/#community" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "Twitter", href: "https://twitter.com/swizzmagik" },
  { label: "GitHub", href: "https://github.com/swizzmagik" },
  { label: "LinkedIn", href: "https://linkedin.com/in/swizzmagik" },
  { label: "YouTube", href: "https://youtube.com/@swizzmagik" },
];
