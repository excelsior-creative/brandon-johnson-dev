import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { CosmicContainer } from "@/components/cosmic/Container";
import { SectionHeading } from "@/components/cosmic/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { socialLinks } from "@/lib/content/navigation";
import { SITE_URL, generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const revalidate = 3600;

export const metadata: Metadata = generatePageMetadata({
  title: "Contact J. Brandon Johnson",
  description:
    "Get in touch with J. Brandon Johnson about AI agent development, full stack engineering, automation consulting, or collaboration opportunities. Based in Orange County, California.",
  path: "/contact",
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: SITE_URL },
  { name: "Contact", url: `${SITE_URL}/contact` },
]);

const socialIcons: Record<string, typeof Github> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Twitter,
};

export default function ContactPage() {
  return (
    <section className="relative py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Ambient nebula */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 80% 20%, rgba(124,92,255,0.1), transparent 60%), radial-gradient(ellipse 700px 400px at 10% 90%, rgba(56,189,248,0.08), transparent 55%)",
        }}
      />

      <CosmicContainer className="relative z-10">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Get in Touch"
          description="Have a question or want to build something together? Drop a note and I'll get back to you."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <ContactInfo
                icon={Mail}
                label="Email"
                href="mailto:b@exct.io"
                value="b@exct.io"
              />
              <ContactInfo
                icon={MapPin}
                label="Location"
                value="Orange County, CA"
              />

              <div className="mt-4">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[--ink-faint]">
                  Follow
                </div>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((s) => {
                    const Icon = socialIcons[s.label] ?? Github;
                    return (
                      <Link
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={s.label}
                        className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[--ink-dim] backdrop-blur-xl backdrop-saturate-150 transition-[transform,border-color,color,background] duration-300 hover:-translate-y-0.5 hover:border-[rgba(56,189,248,0.4)] hover:bg-[rgba(56,189,248,0.1)] hover:text-[--cyan]"
                      >
                        <Icon className="h-4 w-4" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </CosmicContainer>
    </section>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_8px_40px_-12px_rgba(56,189,248,0.12)] backdrop-blur-xl backdrop-saturate-150 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-[rgba(56,189,248,0.35)]">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-[--cyan]"
        style={{
          background:
            "linear-gradient(135deg, rgba(56,189,248,0.18), rgba(124,92,255,0.18))",
          borderColor: "rgba(56,189,248,0.3)",
        }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[--ink-faint]">
          {label}
        </div>
        <div className="mt-1 text-base font-medium text-[--ink] transition-colors group-hover:text-[--cyan]">
          {value}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }
  return content;
}
