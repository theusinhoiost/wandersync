"use client";


import FeaturesSection from "@/components/home/FeaturesSection";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
