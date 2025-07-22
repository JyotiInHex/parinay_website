"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { aboutPage } from "@/data/siteStaticData";
import { LetterByLetterRevealTitle } from "@/components/ui/sectionTitle";

const AboutHero = () => {
  const { hero } = aboutPage;
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "center start"],
  });

  const containerWidth = useTransform(scrollYProgress, [0, 1], ["5%", "100%"]);

  return (
    <div
      ref={imageRef}
      className="relative w-full h-auto select-none overflow-hidden"
    >
      <LetterByLetterRevealTitle delayStep={0.085} className="text-9xl text-zinc-800 font-porinoi-sans font-bold px-20 pt-10 mix-blend-difference">
        About
      </LetterByLetterRevealTitle>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 600, damping: 150 }}
        style={{ width: containerWidth }}
        className="relative -z-[1] p-6 h-[650px] mx-auto will-change-[width]"
      >
        <motion.figure className="w-full h-full overflow-hidden rounded-xl shadow-lg -translate-y-20">
          <Image
            src={hero.image}
            alt="aboutBg"
            width={1000}
            height={1000}
            quality={100}
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </motion.figure>
      </motion.div>
    </div>
  );
};

export default AboutHero;
