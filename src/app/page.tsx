import { ScrollSequence } from "@/components/intro/ScrollSequence";
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

export default function Home() {
  return (
    <>
      <ScrollSequence />
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
    </>
  );
}
