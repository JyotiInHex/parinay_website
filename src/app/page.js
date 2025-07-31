"use client";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import HeaderSection from "@/layouts/(landingPage)/heroSection";
import ShortAboutSection from "@/layouts/(landingPage)/shortAbout";
import StandOutSection from "@/layouts/(landingPage)/standOut";
import MatchStepsSection from "@/layouts/(landingPage)/matchSteps";
import GetInTouch from "@/layouts/(landingPage)/getInTouch";
import Footer from "@/components/shared/Footer";

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
        <div className="bg-white overflow-x-hidden">
          <div className="py-14 lg:py-16 w-full h-auto lg:min-h-screen select-none">
            <HeaderSection />
          </div>

          <div className="px-10 lg:px-24 lg:py-6 w-full h-auto min-h-screen border-b-2 border-zinc-600">
            <ShortAboutSection />
          </div>

          <div className="px-10 lg:px-24 py-10 lg:py-20 w-full h-auto min-h-screen">
            <StandOutSection />
          </div>

          <div className="px-10 lg:px-24 py-12 w-full h-auto min-h-screen">
            <MatchStepsSection />
          </div>

          <div className="px-5 lg:px-24 py-14 mt-20 w-full h-auto min-h-[90vh]">
            <GetInTouch />
          </div>
        </div>
        <Footer />
      </>
    )
  );
}
