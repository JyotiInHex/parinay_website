"use client";

import AboutCTASection from "@/components/layouts/(aboutPage)/ctaSection";
import AboutHero from "@/components/layouts/(aboutPage)/heroSection";
import AboutHighlight from "@/components/layouts/(aboutPage)/highlightSection";
import AboutPrinciple from "@/components/layouts/(aboutPage)/principlesSection";
import AboutWhyChooseSection from "@/components/layouts/(aboutPage)/whyChooseSection";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full h-auto">
      <AboutHero />

      <AboutPrinciple />

      <AboutHighlight />

      <AboutWhyChooseSection />

      <AboutCTASection />
    </div>
  );
}
