import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 min-h-screen`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
