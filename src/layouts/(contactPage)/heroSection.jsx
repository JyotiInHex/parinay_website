"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";
import { contactPage } from "@/data/siteStaticData";

export default function ContactHero() {
  const { title, subTitle, description, gif } = contactPage;

  return (
    <div className="mt-20 px-24 pb-10">
      <div className="w-full h-full">
        <div className="w-full h-full flex items-end flex-row">
          <motion.figure
            initial={{ width: 0, opacity: 0, marginRight: 0 }}
            whileInView={{ width: "140px", opacity: 1, marginRight: 12 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.75 }}
            className="h-[85px] overflow-hidden rounded-lg"
          >
            <Image
              src={gif}
              width={500}
              height={500}
              quality={100}
              loading="lazy"
              alt="hand_Sake_gif"
              className="grayscale-100 rotate-y-180 object-cover w-full h-full pointer-events-none"
            />
          </motion.figure>
          <WordStaggerFlowTitle
            delayStep={0.02}
            className=" text-7xl text-zinc-800 font-porinoi-sans font-semibold uppercase"
          >
            {subTitle}
          </WordStaggerFlowTitle>
        </div>

        <WordStaggerFlowTitle
          delayStep={0.04}
          className="mt-1 text-7xl text-zinc-800 font-porinoi-sans font-semibold uppercase"
        >
          {title}
        </WordStaggerFlowTitle>

        <div className="mt-10">
          <WordStaggerFlowTitle
            delayStep={0.02}
            className=" text-2xl text-zinc-800 font-porinoi-sans font-semibold uppercase"
          >
            {description}
          </WordStaggerFlowTitle>
        </div>
      </div>
    </div>
  );
}
