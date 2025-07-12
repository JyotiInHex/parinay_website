"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

const lineVariant = {
  hidden: {
    y: 40,
    opacity: 0,
    scale: 0.8,
  },
  visible: (customDelay) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1],
      delay: customDelay,
    },
  }),
};

export const HeroText = ({ text, className = "" }) => {
  const mid = Math.floor(text.length / 2);

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap justify-center overflow-hidden"
    >
      {text.split("").map((char, idx) => {
        const distanceFromCenter = Math.abs(mid - idx);
        const delay = distanceFromCenter * 0.09;

        return (
          <motion.span
            key={idx}
            initial={"hidden"}
            animate={"visible"}
            custom={delay}
            variants={lineVariant}
            className={`inline-block overflow-hidden ${className}`}
          >
            <span className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          </motion.span>
        );
      })}
    </motion.h2>
  );
};
