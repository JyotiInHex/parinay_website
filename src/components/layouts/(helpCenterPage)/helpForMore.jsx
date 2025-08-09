import React from "react";
import Image from "next/image";
import Arrow from "../../../../public/assets/svg/arrow";
import { LineStaggerFlowTitle, WordStaggerFlowTitle } from "@/components/ui/sectionTitle";
import { helpPage } from "@/data/siteStaticData";
import { motion } from "framer-motion";

export default function HelpFooter() {
  const { contact } = helpPage;
  return (
    <div className="relative mt-10 lg:my-20">
      <div className="relative z-[1] lg:w-[40%] space-y-3">
        <div className="flex flex-col lg:flex-row lg:items-end gap-2">
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "110px" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="overflow-hidden"
          >
            <Arrow />
          </motion.span>
          <WordStaggerFlowTitle className="text-3xl lg:text-5xl text-zinc-800 font-porinoi-sans font-semibold uppercase">
            {contact.title[0]}
          </WordStaggerFlowTitle>
        </div>
        <WordStaggerFlowTitle className="text-3xl lg:text-5xl text-zinc-800 font-porinoi-sans font-semibold uppercase leading-snug">
          {contact.title[1]}
        </WordStaggerFlowTitle>
      </div>

      <motion.figure
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.33, 1, 0.68, 1] }}
        className="w-fit h-24"
      >
        <Image
          src={contact.image}
          width={500}
          height={500}
          quality={100}
          alt="helpCenter"
          loading="lazy"
          className="contrast-[130%] rotate-90 pointer-events-none absolute right-0 -z-[1] lg:top-0 rounded-md opacity-95 mix-blend-multiply"
        />
      </motion.figure>

      <div className="relative z-[1] lg:w-[80%] ml-auto lg:-mt-28 ">
        <WordStaggerFlowTitle
          delayStep={0.025}
          className="justify-end text-zinc-800 text-lg lg:text-3xl font-porinoi-sans font-normal uppercase"
        >
          {contact.subTitle}
        </WordStaggerFlowTitle>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[45%_auto] mt-14 justify-between">
        <div className="flex flex-col gap-8">
          <div>
            <LineStaggerFlowTitle wordsPerLine={11} delayStep={0.075} className="justify-stretch text-sm text-zinc-800 font-normal font-porinoi-sans uppercase">
              {contact.body[0]}
            </LineStaggerFlowTitle>
          </div>
          <div>
            <LineStaggerFlowTitle wordsPerLine={11} delayStep={0.075} className="text-sm text-zinc-800 font-normal font-porinoi-sans uppercase">
              {contact.body[1]}
            </LineStaggerFlowTitle>
          </div>
        </div>

        <ul className="relative z-[1] lg:mt-16 w-full flex flex-col">
          {contact.contactOptions.map((option, idx) => {
            return (
              <li
                key={idx}
                className="w-full py-3 px-3 border-t-[1px] nth-[2]:border-t-0 border-b-[1px]"
              >
                <WordStaggerFlowTitle className="justify-end text-xl text-zinc-800 font-medium font-porinoi-sans uppercase">
                  {option.label + ": " + option.value}
                </WordStaggerFlowTitle>
                <WordStaggerFlowTitle className="justify-end text-xs text-zinc-800 font-medium font-porinoi-sans uppercase">{option.note}</WordStaggerFlowTitle>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
