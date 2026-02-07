import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MethodologyGrid } from "@/components/sections/MethodologyGrid";
import { Services } from "@/components/sections/Services";
import { SocialProof } from "@/components/sections/SocialProof";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyUs } from "@/components/sections/WhyUs";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ScrollIntro } from "@/components/sections/ScrollIntro";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <ScrollIntro />
      <main className="relative min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <SocialProof />
        <Portfolio />
        <WhyUs />
        <MethodologyGrid />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
