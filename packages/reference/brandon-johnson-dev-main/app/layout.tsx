import { ThemeProvider } from "@/context/theme-provider";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brandon Johnson",
  description:
    "Brandon Johnson is a software engineer with a passion for building products that help people.",
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-icon.png",
    shortcut: "/favicon/favicon.ico",
  },
  openGraph: {
    images: ["/images/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            GeistSans.className,
            "bg-white dark:bg-black antialiased h-full w-full"
          )}
        >
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
