import React from "react";
import { Container } from "@/components/Container";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for brandonjohnson.dev — how visitor data is collected, used, and protected.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Effective date: April 22, 2026
          </p>

          <h2>Overview</h2>
          <p>
            This privacy policy describes how brandon-johnson.dev ("the Site",
            "I", "me") collects, uses, and handles information when you visit or
            interact with this personal portfolio website. I respect your
            privacy and am committed to being transparent about my practices.
          </p>

          <h2>Information I Collect</h2>
          <h3>Information you provide directly</h3>
          <p>
            When you use the contact form on this site, I collect the
            information you submit, which may include your name, email address,
            and message content. This information is used solely to respond to
            your inquiry.
          </p>
          <h3>Information collected automatically</h3>
          <p>
            Like most websites, basic technical information may be logged
            automatically when you visit, such as your IP address, browser type,
            referring URL, and pages visited. This data is used in aggregate to
            understand how the site is being used and to maintain its
            performance.
          </p>

          <h2>How I Use Your Information</h2>
          <ul>
            <li>
              To respond to messages or inquiries submitted through the contact
              form
            </li>
            <li>To understand general traffic patterns and improve the site</li>
            <li>To maintain the security and operation of the site</li>
          </ul>
          <p>
            I do not sell, rent, or share your personal information with third
            parties for marketing purposes.
          </p>

          <h2>Cookies &amp; Analytics</h2>
          <p>
            This site may use minimal cookies necessary for basic site
            functionality. I do not use third-party advertising cookies or
            cross-site tracking. If analytics tooling is in use, it is
            configured to minimize personal data collection and does not build
            individual user profiles.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            This site is hosted on Vercel. When you visit, your request passes
            through Vercel's infrastructure and is subject to{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel's Privacy Policy
            </a>
            . Any embedded content or external links are subject to the privacy
            policies of their respective providers.
          </p>

          <h2>Data Retention</h2>
          <p>
            Contact form submissions are retained only as long as necessary to
            respond to your inquiry and are not kept indefinitely. Automatically
            collected log data is subject to the retention policies of the
            hosting provider.
          </p>

          <h2>Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of any
            personal information you have submitted to me via the contact form.
            To make such a request, please reach out using the contact
            information below.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            I may update this privacy policy from time to time. Any changes will
            be reflected on this page with an updated effective date. Your
            continued use of the site after changes are posted constitutes
            acceptance of the revised policy.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions or concerns about this privacy policy, please
            reach out through the contact form on this site or via email.
          </p>
        </div>
      </Container>
    </div>
  );
}
