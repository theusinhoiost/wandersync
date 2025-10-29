"use client";

import FeaturesSection from "@/components/Home/FeaturesSection";
import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-6">
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
