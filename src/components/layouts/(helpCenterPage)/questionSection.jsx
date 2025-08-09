import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";
import { helpPage } from "@/data/siteStaticData";
import React, { useState } from "react";
import { FAQItem } from "../(contactPage)/faqSection";

const HelpQuestions = () => {
  const { questions } = helpPage;
  const [openIdx, setOpenIdx] = useState({ cat: 0, q: 0 });;

  return (
    <div className="w-full h-auto">
      {questions.categories.map((question, idx) => {
        return (
          <div key={`cat-${idx}`} className="grid lg:grid-cols-[35%_auto] gap-10 first:lg:mt-20">
            <div className="sticky top-14 self-start z-[1] pt-5 lg:pt-20 pr-4 flex flex-col lg:items-end gap-y-3">
              <div className="lg:w-fit">
                <WordStaggerFlowTitle className="lg:justify-end text-[30px] lg:text-[35px] text-zinc-800 font-porinoi-sans font-semibold uppercase leading-tight">
                  {question.title}
                </WordStaggerFlowTitle>
              </div>
              <i>
                <WordStaggerFlowTitle className="px-0.5 lg:justify-end text-sm lg:text-base text-zinc-800 font-porinoi-sans font-normal">
                  {question.subTitle}
                </WordStaggerFlowTitle>
              </i>
            </div>

            <div className="relative z-[3] lg:pt-12 w-full mt-16 lg:mt-20 space-y-0 bg-white lg:bg-transparent">
              {question.questions.map((queAns, i) => {
                const isOpen = openIdx?.cat === idx && openIdx?.q === i;
                return (
                  <FAQItem
                    key={`faq-${idx}-${i}`}
                    itemNum={i}
                    item={queAns}
                    isOpen={isOpen}
                    onClick={() =>
                      setOpenIdx(isOpen ? null : { cat: idx, q: i })
                    }
                    className={"mx-auto"}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HelpQuestions;
