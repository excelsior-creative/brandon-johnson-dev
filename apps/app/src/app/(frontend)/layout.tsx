import React from "react";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { VercelToolbar } from "@vercel/toolbar/next";
import { generateGlobalSchema } from "@/lib/structured-data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { SearchProvider } from "@/components/SearchProvider";
import { AdminBar } from "@/components/AdminBar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { draftMode } from "next/headers";
import { getPayload } from "payload";
import config from "@payload-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export default async function Layout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode();
  const payload = await getPayload({ config });
  const header = await payload.findGlobal({
    slug: "header",
  });
  const globalSchema = generateGlobalSchema();

  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-background text-foreground">
        <div className="flex min-h-screen flex-col relative" data-theme="frontend">
          <Providers>
            <SearchProvider>
              <ScrollProgress />
              <AdminBar
                adminBarProps={{
                  preview: isEnabled,
                }}
              />
              <Navbar navItems={(header.navItems as any[]) || []} />
              <main className="flex-grow">{children}</main>
              <Footer />
            </SearchProvider>
          </Providers>
        </div>
        {process.env.NODE_ENV !== "production" && <VercelToolbar />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </body>
    </html>
  );
}
