import "../styles/globals.css";
import { Inter, Poppins } from "next/font/google";
import { cn } from "../lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const poppins = Poppins({ subsets: ["latin"], weight: ["600"], variable: "--font-heading" });

export const metadata = {
  title: "Your Name | Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("bg-white text-slate-900 dark:bg-slate-900 dark:text-white font-body", inter.variable, poppins.variable)}>
        {children}
      </body>
    </html>
  );
}