import type { Metadata } from "next";
import { Quicksand, Handlee, Dancing_Script } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const handlee = Handlee({
  variable: "--font-handlee",
  subsets: ["latin"],
  weight: ["400"],
});

const dancingScript = Dancing_Script({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Imperial Tech Solutions",
  description: "A development agency for your business powered by AI",
};

import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ScrollIntro } from "@/components/sections/ScrollIntro";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${quicksand.variable} ${handlee.variable} ${dancingScript.variable} antialiased`}
      >
        <ScrollProgress />
        <ScrollIntro />
        <main className="relative min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
