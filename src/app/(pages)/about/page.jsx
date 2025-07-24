"use client";

import AboutCTASection from "@/layouts/(aboutPage)/ctaSection";
import AboutHero from "@/layouts/(aboutPage)/heroSection";
import AboutHighlight from "@/layouts/(aboutPage)/highlightSection";
import AboutPrinciple from "@/layouts/(aboutPage)/principlesSection";
import AboutWhyChooseSection from "@/layouts/(aboutPage)/whyChooseSection";
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
