"use client";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import HeaderSection from "@/layouts/(landingPage)/heroSection";
import ScrollRibbon from "../components/ui/ribbonScroll";
import ShortAboutSection from "@/layouts/(landingPage)/shortAbout";
import StandOutSection from "@/layouts/(landingPage)/standOut";
import MatchStepsSection from "@/layouts/(landingPage)/matchSteps";
import GetInTouch from "@/layouts/(landingPage)/getInTouch";
import LandingFooter from "@/layouts/(landingPage)/footerSection";

export default function Home() {
  const pathname = usePathname();
  const [showContent, setShowContent] = useState(false);
  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 800);

    return () => {
      setShowContent(false);
      clearTimeout(timeout);
    };
  }, [pathname]);
  return (
    showContent && (
      <>
        <div className=" bg-white">
          <div className="px-24 py-16 w-full h-auto min-h-screen select-none">
            <HeaderSection />
          </div>

          {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="w-full h-auto"
        >
          <ScrollRibbon
            className={"text-xl font-porinoi-sans font-semibold"}
            iconSize={26}
            speed={150}
          />
        </motion.div> */}

          <div className="px-24 py-6 w-full h-auto min-h-screen border-b-2 border-zinc-600">
            <ShortAboutSection />
          </div>

          <div className="px-24 py-20 w-full h-auto min-h-screen">
            <StandOutSection />
          </div>

          <div className="px-24 py-12 w-full h-auto min-h-screen">
            <MatchStepsSection />
          </div>

          <div className="px-24 py-14 mt-20 w-full h-auto min-h-[90vh]">
            <GetInTouch />
          </div>
          <div className="relative w-full my-[100vh] pointer-events-none" />
        </div>

        <div className="fixed inset-0 w-full h-full -z-[1] p-10 flex flex-col items-center bg-[#f8f3e9]">
          <LandingFooter />
        </div></>
    )
  );
}
