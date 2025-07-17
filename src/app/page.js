"use client";
import { motion } from "framer-motion";
import HeaderSection from "@/layouts/landingHeader";
import ScrollRibbon from "../components/ui/ribbonScroll";
import ShortAboutSection from "@/layouts/shortAbout";
import StandOutSection from "@/layouts/standOut";
import MatchStepsSection from "@/layouts/matchSteps";
import GetInTouch from "@/layouts/getInTouch";
import { InputField } from "@/components/ui/customForm";

export default function Home() {
  return (
    <>
      <div className="w-full h-auto select-none relative flex flex-col-reverse md:flex-row items-start justify-between px-8 md:px-20 py-12 md:pt-28 md:pb-20">
        <HeaderSection />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="w-full h-auto"
      >
        <ScrollRibbon
          className={"text-xl font-trap font-semibold"}
          iconSize={26}
          speed={150}
        />
      </motion.div>

      <div className="p-16 w-full h-[90vh] bg-white grid place-content-center">
        <ShortAboutSection />
      </div>

      <div className="p-16 px-24 w-full h-[90vh] place-content-center">
        <StandOutSection />
      </div>

      <div className="p-16 px-24 w-full h-auto bg-white">
        <MatchStepsSection />
      </div>

      <div className="p-16 mt-20 w-full h-auto min-h-[90vh] bg-white/50">
        <GetInTouch />
      </div>
    </>
  );
}
