"use client";
import { aboutPage } from "@/data/siteStaticData";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";

const AboutHero = () => {
  const { hero } = aboutPage;
  return (
    <div className="relative w-full h-auto select-none">
      <div className="w-full h-auto">
        <div className="px-10 lg:px-20 pt-20 lg:pt-28 space-y-5 lg:space-y-3 flex flex-col">
          <WordStaggerFlowTitle
            delayStep={0.03}
            className="text-xl text-zinc-800 font-porinoi-sans font-medium"
          >
            {hero.title}
          </WordStaggerFlowTitle>
          <div className="w-6/6 ">
            <WordStaggerFlowTitle
              delayStep={0.02}
              className="text-3xl lg:text-5xl text-zinc-800 font-porinoi-sans font-medium self-end justify-start leading-snug"
            >
              {hero.subtitle}
            </WordStaggerFlowTitle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
