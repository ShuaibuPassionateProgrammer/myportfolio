import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { AccessibilityProvider, SkipLink } from "./components/AccessibilityProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ibrahim Shuaibu Isa - Full-Stack Software Developer",
  description: "Full-Stack Software Developer & Mobile App Developer with 5+ years of experience. Specializing in React, Next.js, Flutter, Node.js, and Laravel. Building scalable web and mobile applications.",
  keywords: "Full-Stack Developer, Software Developer, React, Next.js, Flutter, Node.js, Laravel, Mobile App Developer, Web Developer",
  authors: [{ name: "Ibrahim Shuaibu Isa" }],
  creator: "Ibrahim Shuaibu Isa",
  openGraph: {
    title: "Ibrahim Shuaibu Isa - Full-Stack Software Developer",
    description: "Full-Stack Software Developer & Mobile App Developer with 5+ years of experience",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Shuaibu Isa - Full-Stack Software Developer",
    description: "Full-Stack Software Developer & Mobile App Developer with 5+ years of experience",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 min-h-screen`}>
        <AccessibilityProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SkipLink />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
          </ThemeProvider>
        </AccessibilityProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
