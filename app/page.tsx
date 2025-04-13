"use client"
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { CalculatePriceSection } from "@/components/home/CalculatePriceSection";
import { DocumentTypesSection } from "@/components/home/DocumentTypesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section with Header */}
      <HeroSection />
      
      {/* Featured Documents Section */}
      <FeaturedSection />
      
      {/* Calculate Price Section */}
      <CalculatePriceSection />
      
      {/* Documents by Type Section */}
      <DocumentTypesSection />

      {/* similar to Calculate Price Section */}
      <CalculatePriceSection/>

      <div className=" pb-10 "/>
    </main>
  );
}