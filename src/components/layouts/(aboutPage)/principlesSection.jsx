"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { aboutPage } from "@/data/siteStaticData";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";

const AboutPrinciple = () => {
  const { principles } = aboutPage;
  const imageOneRef = useRef(null);

  const { scrollYProgress: scrollY1 } = useScroll({
    target: imageOneRef,
    offset: ["start end", "end start"],
  });

  const imgOneY = useTransform(scrollY1, [0, 1], [0, -80]);
  const imgOneScale = useTransform(scrollY1, [0, 1], [1, 1.0995]);

  const imgOneSmoothY = useSpring(imgOneY, {
    stiffness: 60,
    damping: 20,
    mass: 0.7,
  });

  const imgOneSmoothScale = useSpring(imgOneScale, {
    stiffness: 70,
    damping: 18,
    mass: 0.7,
  });

  return (
    <div className="relative w-full h-auto select-none">
      <div className="w-full h-auto">
        <div className="mt-10 px-10 lg:px-20 pb-10 grid grid-cols-1 lg:grid-cols-2 place-content-center justify-items-center items-end">
          <div className="space-y-3 lg:space-y-5">
            <div className="w-fit lg:w-1/2">
              <WordStaggerFlowTitle
                delayStep={0.03}
                wordsPerLine={5}
                className="text-2xl text-zinc-800 font-porinoi-display font-medium"
              >
                {principles.intro}
              </WordStaggerFlowTitle>
            </div>
            <motion.figure
              ref={imageOneRef}
              initial={{ opacity: 0, filter: "blur(10px)", y: -10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="w-10/12 max-w-xs h-auto overflow-hidden rounded-2xl shadow-2xl shadow-black/55 pointer-events-none"
              style={{ y: imgOneSmoothY }}
            >
              <motion.div
                style={{
                  scale: imgOneSmoothScale,
                }}
                className="w-full h-auto pointer-events-none"
              >
                <Image
                  src={principles.image}
                  quality={100}
                  width={1200}
                  height={800}
                  alt="About Porinoi"
                  className="object-cover w-full h-auto rounded-2xl pointer-events-none"
                />
              </motion.div>
            </motion.figure>
          </div>
          <div className="space-y-8 lg:space-y-16 mt-10 lg:mt-0">
            <ul className="flex flex-col items-start gap-y-5 lg:gap-y-2">
              {principles.points.map((point, idx) => {
                return (
                  <li key={idx}>
                    <WordStaggerFlowTitle
                      delayStep={0.02}
                      className="text-zinc-800 text-xl font-porinoi-sans font-normal"
                    >
                      {`[${(idx + 1)
                        .toLocaleString()
                        .padStart(2, "0")}] ${point}`}
                    </WordStaggerFlowTitle>
                  </li>
                );
              })}
            </ul>
            
            <WordStaggerFlowTitle
              delayStep={0.015}
              className="text-2xl text-zinc-800 font-porinoi-display font-medium"
            >
              {principles.note}
            </WordStaggerFlowTitle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPrinciple;
