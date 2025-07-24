"use client";
import { aboutPage } from "@/data/siteStaticData";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";

const AboutHero = () => {
  const { hero } = aboutPage;
  return (
    <div className="relative w-full h-auto select-none">
      <div className="w-full h-auto">
        <div className="px-20 pt-28 space-y-3 flex flex-col">
          <WordStaggerFlowTitle
            delayStep={0.03}
            className="text-xl text-zinc-800 font-porinoi-sans font-medium"
          >
            {hero.title}
          </WordStaggerFlowTitle>
          <WordStaggerFlowTitle
            delayStep={0.02}
            className="w-6/6 text-5xl text-zinc-800 font-porinoi-sans font-medium self-end justify-start leading-snug"
          >
            {hero.subtitle}
          </WordStaggerFlowTitle>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
