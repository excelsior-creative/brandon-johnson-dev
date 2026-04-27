"use client";

import { cosmicNavItems } from "@/lib/content/navigation";
import { cn } from "@/lib/utils";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CosmicContainer } from "./cosmic/Container";
import { useSearch } from "./SearchProvider";

// NavItem type kept loose so we keep compat with whatever Payload's header
// global passes in. If it provides links we map them; otherwise we fall back
// to the cosmic defaults.
type NavItem = {
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

const resolveHref = (item: NavItem) => {
  const link = item.link;
  if (!link) return null;
  if (link.type === "custom" && link.url) return link.url;
  if (
    link.type === "reference" &&
    link.reference &&
    typeof link.reference === "object"
  ) {
    const value = link.reference.value;
    if (typeof value === "object" && value?.slug) {
      return link.reference.relationTo === "posts"
        ? `/blog/${value.slug}`
        : `/${value.slug}`;
    }
  }
  return null;
};

export const Navbar = ({ navItems = [] as NavItem[] }) => {
  const pathname = usePathname();
  const { openSearch } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Scroll-lock body while the mobile sheet is open, and close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const resolved: { label: string; href: string; newTab?: boolean }[] = [];
  navItems.forEach((item) => {
    const href = resolveHref(item);
    const label = item.link?.label;
    if (href && label)
      resolved.push({ href, label, newTab: item.link?.newTab });
  });
  const items = resolved.length > 0 ? resolved : cosmicNavItems;

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300",
        "border-b border-transparent",
        scrolled &&
          "border-[--border-soft] bg-[rgba(5,6,15,0.72)] backdrop-blur-[16px] backdrop-saturate-[140%]",
      )}
    >
      <CosmicContainer>
        <nav className="flex items-center justify-between gap-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/avatar.png"
              alt="Brandon Johnson"
              width={40}
              height={40}
              className="rounded-full border border-[--border-mid]"
              priority
            />
            <span className="text-base font-semibold tracking-[-0.01em] text-[--ink]">
              BrandonJohnson.dev
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {items.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  target={item.newTab ? "_blank" : undefined}
                  rel={item.newTab ? "noreferrer noopener" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-colors",
                    active
                      ? "text-[--ink]"
                      : "text-[--ink-dim] hover:bg-white/[0.04] hover:text-[--ink]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={openSearch}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[--ink-dim] transition-colors hover:bg-white/[0.04] hover:text-[--ink]"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[--border-mid] bg-[rgba(56,189,248,0.08)] px-4 py-2 text-sm font-medium text-[--cyan] transition-colors hover:border-[rgba(56,189,248,0.4)] hover:bg-[rgba(56,189,248,0.16)]"
            >
              Let&apos;s Connect
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={openSearch}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[--ink-dim]"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[--ink-dim]"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </CosmicContainer>

      <AnimatePresence>
        {isOpen && (
          <m.div
            key="mobile-menu-sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            id="mobile-nav-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
            className="fixed inset-x-0 bottom-0 top-[var(--nav-h,64px)] z-40 overflow-y-auto bg-[rgba(5,6,15,0.96)] backdrop-blur-xl md:hidden"
          >
            <nav className="flex min-h-full flex-col gap-2 px-6 pb-10 pt-6">
              {items.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    target={item.newTab ? "_blank" : undefined}
                    rel={item.newTab ? "noreferrer noopener" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "inline-flex min-h-11 items-center rounded-lg px-3 py-3 text-base font-medium transition-colors",
                      active
                        ? "bg-white/[0.06] text-[--ink]"
                        : "text-[--ink-dim] hover:bg-white/[0.04] hover:text-[--ink]",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[--border-mid] bg-[rgba(56,189,248,0.1)] px-4 py-3 text-sm font-medium text-[--cyan]"
              >
                Let&apos;s Connect <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
