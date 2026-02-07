import type { Metadata } from "next";
import { Quicksand, Handlee } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Imperial Tech Solutions",
  description: "A development agency for your business powered by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${handlee.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
