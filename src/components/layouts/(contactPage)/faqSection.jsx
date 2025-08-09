"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";
import { contactPage } from "@/data/siteStaticData";
import { useEffect, useRef, useState } from "react";
import { CustomBtn2 } from "@/components/ui/customBtn";
import ArrowRightward from "../../../../public/assets/svg/arrowRightward";
import clsx from "clsx";

export default function ContactFAQ() {
  const { faq_section } = contactPage;
  const [openIdx, setOpenIdx] = useState(1);

  return (
    <div className="mt-20 px-6 md:px-24 pb-20 w-full lg:min-h-screen grid grid-cols-1 md:grid-cols-2 gap-x-8">
      <div>
        <div className="lg:sticky top-24 space-y-5">
          <WordStaggerFlowTitle
            delayStep={0.02}
            className="text-base text-zinc-800 font-porinoi-sans font-medium uppercase leading-snug"
          >
            {faq_section.title}
          </WordStaggerFlowTitle>

          <WordStaggerFlowTitle
            delayStep={0.02}
            className="text-5xl lg:text-6xl text-zinc-800 font-porinoi-sans font-bold uppercase leading-snug"
          >
            {faq_section.subTitle}
          </WordStaggerFlowTitle>

          <WordStaggerFlowTitle
            delayStep={0.04}
            className="text-2xl text-zinc-800 font-porinoi-sans font-medium leading-snug"
          >
            {faq_section.description}
          </WordStaggerFlowTitle>

          <CustomBtn2
            type="link"
            path={faq_section.cta.href}
            className={"mt-10 bg-[#f8f3e9] w-full lg:w-fit"}
          >
            {faq_section.cta.label}
          </CustomBtn2>
        </div>
      </div>

      <div className="mt-12 lg:mt-32 flex flex-col">
        {faq_section.items.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <FAQItem
              key={idx}
              itemNum={idx}
              item={item}
              isOpen={isOpen}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
            />
          );
        })}
      </div>
    </div>
  );
}

export const FAQItem = ({ itemNum, item, isOpen, onClick, className }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [ref, isOpen]);

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 1,
        delay: itemNum * 0.04,
        ease: [0.33, 1, 0.68, 1],
      }}
      onClick={onClick}
      className={clsx(
        "lg:w-auto lg:min-w-[610px] lg:max-w-[620px] cursor-pointer",
        isOpen && "bg-neutral-100",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isOpen ? 1 : 0 }}
          exit={{ scaleX: 0 }}
          transition={{
            duration: 1,
            delay: itemNum * 0.04,
            ease: [0.33, 1, 0.68, 1],
          }}
          className={`border-[1.5px] rounded-full w-full ${
            isOpen
              ? "origin-left border-zinc-800"
              : "origin-right border-blue-500"
          }`}
        />
      </AnimatePresence>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          delay: itemNum * 0.055,
          ease: [0.33, 1, 0.68, 1],
        }}
        className={`px-3 lg:px-6 py-5 `}
      >
        <div className="flex items-end gap-3">
          <ArrowRightward width={25} height={25} />
          <div>
            <WordStaggerFlowTitle
              delayStep={0.025}
              className="text-sm lg:text-[16.5px] font-medium font-porinoi-sans leading-snug uppercase"
            >
              {item.question}
            </WordStaggerFlowTitle>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
              className="overflow-hidden"
            >
              <div ref={ref} className="pt-4 pr-2 pb-1 flex flex-col gap-1.5">
                <WordStaggerFlowTitle
                  delayStep={0.015}
                  className="text-zinc-700 text-base lg:text-lg leading-relaxed font-porinoi-sans"
                >
                  {item.answer}
                </WordStaggerFlowTitle>

                {item.answerList && (
                  <ul className="space-y-1.5">
                    {item.answerList.map((list, idx) => {
                      return (
                        <li key={idx} className="flex flex-row gap-2">
                          <WordStaggerFlowTitle
                            delayStep={0.015}
                            className="text-zinc-700 text-sm lg:text-base leading-relaxed font-porinoi-sans"
                          >
                            {(idx + 1).toLocaleString().padStart(2, "0") +
                              ". " +
                              list}
                          </WordStaggerFlowTitle>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {item.note && (
                  <i>
                    <WordStaggerFlowTitle className="mt-1.5 pr-0.5 text-zinc-500 text-sm font-porinoi-sans font-normal">
                      {item.note}
                    </WordStaggerFlowTitle>
                  </i>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
