"use client";

import { AnimatePresence, motion } from "framer-motion";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";
import { contactPage } from "@/data/siteStaticData";
import { useEffect, useRef, useState } from "react";
import { CustomBtn2 } from "@/components/ui/customBtn";
import ArrowRightward from "../../../public/assets/svg/arrowRightward";

export default function ContactFAQ() {
  const { faq_section } = contactPage;
  const [openIdx, setOpenIdx] = useState(1);

  return (
    <div className="mt-20 px-6 md:px-24 pb-20 w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-x-8">
      <div>
        <div className="sticky top-24">
          <WordStaggerFlowTitle
            delayStep={0.02}
            className="text-base text-zinc-800 font-porinoi-sans font-medium uppercase leading-snug"
          >
            {faq_section.title}
          </WordStaggerFlowTitle>

          <WordStaggerFlowTitle
            delayStep={0.02}
            className="text-6xl text-zinc-800 font-porinoi-sans font-bold uppercase leading-snug"
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
            className={"mt-10 bg-[#f8f3e9] rounded-md"}
          >
            {faq_section.cta.label}
          </CustomBtn2>
        </div>
      </div>

      <div className="mt-32 flex flex-col gap-2">
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

export const FAQItem = ({ itemNum, item, isOpen, onClick }) => {
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
      viewport={{ once: false, amount: 0.5 }}
      whileHover={{
        borderColor: "#9f9fa9",
      }}
      transition={{
        duration: 0.6,
        delay: itemNum * 0.04,
        ease: [0.33, 1, 0.68, 1],
      }}
      onClick={onClick}
      className={`w-[600px] cursor-pointer rounded-xl border border-zinc-200 ${
        isOpen ? "bg-zinc-100" : "bg-white"
      }`}
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.6,
          delay: itemNum * 0.055,
          ease: [0.33, 1, 0.68, 1],
        }}
        className={`px-6 py-5 `}
      >
        <div className="flex items-end gap-3">
          <ArrowRightward width={25} height={25} />
          <WordStaggerFlowTitle className="text-base font-medium font-porinoi-sans leading-snug">
            {item.question}
          </WordStaggerFlowTitle>
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
              <div ref={ref} className="pt-4 pr-2 pb-1">
                <WordStaggerFlowTitle className="text-zinc-700 text-xl leading-relaxed font-porinoi-sans">
                  {item.answer}
                </WordStaggerFlowTitle>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
