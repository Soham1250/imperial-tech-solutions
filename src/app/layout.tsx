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
  title: "Imperial Tech Solutions | Web Development Agency Mumbai | AI-Powered Custom Websites",
  description: "Affordable web development agency in Mumbai specializing in custom websites, AI automation, and Next.js applications. Professional web design services starting at ₹10,000. Expert developers delivering modern, conversion-optimized digital solutions for startups and SMEs in India.",
  keywords: [
    // Primary semantic clusters
    "web development agency Mumbai",
    "affordable website development India",
    "custom web development services",
    "AI automation for business",
    "Next.js development agency",

    // Location-based
    "Mumbai web developers",
    "Maharashtra digital agency",
    "India web development company",

    // Technology stack
    "React development services",
    "TypeScript experts",
    "full-stack JavaScript development",
    "modern web technologies",

    // Business outcomes
    "conversion-optimized websites",
    "SEO-friendly web design",
    "mobile-responsive development",
    "startup-friendly tech solutions",

    // Service-specific
    "AI integration services",
    "machine learning implementation",
    "e-commerce development",
    "progressive web apps",

    // Price-related
    "budget-friendly web development",
    "₹10k website development",
    "cost-effective digital solutions"
  ],
  authors: [{ name: "Imperial Tech Solutions" }],
  creator: "Imperial Tech Solutions",
  publisher: "Imperial Tech Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://imperialtech.solutions'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Imperial Tech Solutions | Professional Web Development in Mumbai",
    description: "Transform your business with custom web development, AI automation, and modern digital solutions. Affordable, expert services starting at ₹10,000.",
    url: 'https://imperialtech.solutions',
    siteName: 'Imperial Tech Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Imperial Tech Solutions - Web Development Agency Mumbai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imperial Tech Solutions | Web Development Agency Mumbai',
    description: 'Custom web development, AI automation & modern digital solutions. Expert services starting at ₹10,000.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ScrollIntro } from "@/components/sections/ScrollIntro";
import { StructuredData } from "@/components/seo/StructuredData";

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
        <StructuredData />
        <ScrollProgress />
        <ScrollIntro />
        <main className="relative min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
