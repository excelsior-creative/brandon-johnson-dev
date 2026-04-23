import React from "react";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of service for brandon-johnson.dev",
};

export default function TermsPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Effective date: April 22, 2026</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using brandon-johnson.dev ("the Site"), you agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not use the Site. These
            terms apply to all visitors and users.
          </p>

          <h2>Use of the Site</h2>
          <p>
            This Site is a personal portfolio and informational resource. You may browse and
            reference the content for lawful, personal, and non-commercial purposes. You agree not
            to:
          </p>
          <ul>
            <li>Use the Site for any unlawful purpose or in violation of any applicable regulations</li>
            <li>Attempt to gain unauthorized access to any part of the Site or its infrastructure</li>
            <li>Scrape, crawl, or systematically download content in a manner that disrupts site operation</li>
            <li>Reproduce or distribute content from this Site without explicit permission</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content on this Site — including but not limited to text, code samples, images, and
            design — is the property of Brandon Johnson unless otherwise noted, and is protected by
            applicable intellectual property laws. You may not reproduce, redistribute, or create
            derivative works from this content without prior written permission.
          </p>
          <p>
            Open source code published in associated repositories is governed by the license
            specified in each repository. Nothing in these Terms grants you rights to that code
            beyond what is already granted by those licenses.
          </p>

          <h2>No Warranties</h2>
          <p>
            The Site and its content are provided "as is" without warranties of any kind, express or
            implied. I do not warrant that the Site will be uninterrupted, error-free, or free of
            viruses or other harmful components. Information on this Site is provided for general
            informational purposes only and may not reflect the most current developments.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Brandon Johnson shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising out of or
            related to your use of or inability to use the Site, even if advised of the possibility
            of such damages. My total liability to you for any claim arising from use of the Site
            shall not exceed zero dollars ($0).
          </p>

          <h2>Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites. These links are provided for
            convenience only. I have no control over, and assume no responsibility for, the content,
            privacy policies, or practices of any third-party sites. Visiting linked sites is at
            your own risk.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            I reserve the right to update these Terms of Service at any time. Changes will be
            posted on this page with an updated effective date. Your continued use of the Site
            following any changes constitutes your acceptance of the revised terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the United
            States, without regard to its conflict of law provisions.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about these Terms of Service, please reach out through the contact
            form on this Site.
          </p>
        </div>
      </Container>
    </div>
  );
}
