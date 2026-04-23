export type CosmicNavItem = {
  label: string;
  href: string;
  newTab?: boolean;
};

export const cosmicNavItems: CosmicNavItem[] = [
  { label: "Work", href: "/#work" },
  { label: "AI Labs", href: "/#ai-labs" },
  { label: "Projects", href: "/#projects" },
  { label: "Writing", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/swizzmagik" },
  { label: "GitHub", href: "https://github.com/swizzmagik" },
  { label: "Twitter", href: "https://twitter.com/swizzmagik" },
];
