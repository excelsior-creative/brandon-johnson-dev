import React from "react";
import { Container } from "@/components/Container";
import Header from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { generatePageMetadata, AUTHOR_EMAIL, SITE_URL } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = generatePageMetadata({
  title: "Contact J. Brandon Johnson",
  description:
    "Get in touch with J. Brandon Johnson about AI agent development, full stack engineering, automation consulting, or collaboration opportunities. Fully remote. Based in Orange County, California.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Contact", url: `${SITE_URL}/contact` },
  ]);

  return (
    <div className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Container>
        <Header
          badge="Contact"
          title="Let's Build Something"
          subtitle="Have an AI automation, agent orchestration, or full-stack engineering project in mind? Send a note and I'll get back within a day or two."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-4">Direct Contact</h2>
                <p className="text-muted-foreground mb-6">
                  Prefer email or phone? Reach out directly — I read every
                  message personally.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${AUTHOR_EMAIL}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {AUTHOR_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+19498911494"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +1 (949) 891-1494
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <p className="font-medium">Based In</p>
                    <p className="text-muted-foreground">
                      Orange County, California
                      <br />
                      Available for fully remote engagements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
