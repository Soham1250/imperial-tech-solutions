import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />

      {/* Placeholder for future sections */}
      <section id="services" className="h-96 flex items-center justify-center bg-card">
        <h2 className="text-3xl font-bold">More Content Coming Soon...</h2>
      </section>

      <Footer />
    </main>
  );
}
