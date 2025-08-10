import React from "react";
import { legalPage } from "@/data/siteStaticData";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";

const TermOfUseHero = () => {
  const { termOfUse } = legalPage;
  return (
    <div className="space-y-1 lg:space-y-3">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-10">
        <WordStaggerFlowTitle className="text-5xl lg:text-6xl text-zinc-800 font-porinoi-sans font-semibold">
          {termOfUse.title}
        </WordStaggerFlowTitle>
        <WordStaggerFlowTitle className="text-base text-zinc-400 font-porinoi-sans font-semibold">
          {termOfUse.lastUpdate}
        </WordStaggerFlowTitle>
      </div>
      <WordStaggerFlowTitle
        delayStep={0.0045}
        className="text-base lg:text-xl text-zinc-400 font-porinoi-sans font-normal"
      >
        {termOfUse.description[0]}
      </WordStaggerFlowTitle>
      <WordStaggerFlowTitle
        delayStep={0.0045}
        className="text-base lg:text-xl text-zinc-400 font-porinoi-sans font-normal"
      >
        {termOfUse.description[1]}
      </WordStaggerFlowTitle>
    </div>
  );
};

export default TermOfUseHero;
