import Link from "next/link";
import Image from "next/image";
import { getPayload } from "payload";
import config from "@/payload.config";
import { CosmicContainer } from "./cosmic/Container";
import { socialLinks, cosmicNavItems } from "@/lib/content/navigation";

type FooterNavItem = {
  id?: string;
  link?: {
    label?: string;
    type?: "reference" | "custom";
    url?: string;
    reference?:
      | {
          relationTo?: "pages" | "posts";
          value?: number | { slug?: string };
        }
      | number;
    newTab?: boolean;
  };
};

const resolveHref = (item: FooterNavItem) => {
  const link = item.link;
  if (!link) return null;
  if (link.type === "custom" && link.url) return link.url;
  if (link.type === "reference" && link.reference && typeof link.reference === "object") {
    const value = link.reference.value;
    if (typeof value === "object" && value?.slug) {
      return link.reference.relationTo === "posts" ? `/blog/${value.slug}` : `/${value.slug}`;
    }
  }
  return null;
};

export const Footer = async () => {
  const payload = await getPayload({ config });
  const footer = await payload.findGlobal({ slug: "footer" });

  const navLinks: { href: string; label: string; newTab?: boolean }[] = [];
  ((footer.navItems || []) as FooterNavItem[]).forEach((item) => {
    const href = resolveHref(item);
    const label = item.link?.label;
    if (href && label) navLinks.push({ href, label, newTab: item.link?.newTab });
  });
  const navigationLinks = navLinks.length > 0 ? navLinks : cosmicNavItems;

  return (
    <footer className="relative border-t border-[--border-soft] bg-[--bg] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 400px at 10% 0%, rgba(56,189,248,0.08), transparent 60%), radial-gradient(ellipse 700px 300px at 90% 100%, rgba(124,92,255,0.08), transparent 60%)",
        }}
      />
      <CosmicContainer className="relative z-10 pt-20 pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/images/avatar.png"
                alt="Brandon Johnson"
                width={40}
                height={40}
                className="rounded-full border border-[--border-mid]"
              />
              <span className="text-base font-semibold tracking-[-0.01em] text-[--ink]">
                Brandon Johnson
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[--ink-dim]">
              Software engineer, AI automation enthusiast, and full-stack builder. Turning
              ideas into shipped systems since 2007.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[--border-mid] bg-white/[0.03] px-4 py-3 text-xs font-medium text-[--ink-dim] transition-colors hover:border-[rgba(56,189,248,0.4)] hover:text-[--cyan]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-[0.16em] text-[--ink-faint]">
              Navigate
            </h3>
            <ul className="mt-4 flex flex-col">
              {navigationLinks.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    target={l.newTab ? "_blank" : undefined}
                    rel={l.newTab ? "noreferrer noopener" : undefined}
                    className="inline-flex min-h-11 items-center py-3 text-sm text-[--ink-dim] transition-colors hover:text-[--ink]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-[0.16em] text-[--ink-faint]">
              Elsewhere
            </h3>
            <ul className="mt-4 flex flex-col text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex min-h-11 items-center py-3 text-[--ink-dim] hover:text-[--ink]"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="inline-flex min-h-11 items-center py-3 text-[--ink-dim] hover:text-[--ink]"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="inline-flex min-h-11 items-center py-3 text-[--ink-dim] hover:text-[--ink]"
                >
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-[--border-soft] pt-6 text-xs text-[--ink-faint] md:flex-row md:items-center md:justify-between">
          <span>© Brandon Johnson 2026. All rights reserved.</span>
          <span className="font-mono">v.2 / cosmic</span>
        </div>
      </CosmicContainer>
    </footer>
  );
};

export default Footer;
