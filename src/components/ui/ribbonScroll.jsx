"use client";
import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import Heart from "../../../public/assets/svg/heart";
import Flame2 from "../../../public/assets/svg/flame-2";
import Sparkling from "../../../public/assets/svg/sparkling";
import Flash from "../../../public/assets/svg/flash";
import Snow from "../../../public/assets/svg/snow";
import Star from "../../../public/assets/svg/star";

const tags = [
  "Destiny weaves the bond. Parinay brings it closer.",
  "Where hearts meet and futures begin.",
  "Not just matches. Magical unions.",
  "Crafting connections. Celebrating forever.",
  "Two souls, one story – written by us.",
  "Where love is more than luck.",
  "A thread of fate, woven with care.",
  "Begin your forever. Right here.",
  "The art of bringing hearts closer.",
  "Your love story starts now.",
  "Beyond matches. Toward meaning.",
  "Whispers of fate, answered with love.",
  "From serendipity to ceremony.",
  "Love finds its way, we just guide it.",
  "Where forever starts with a click.",
  "Unfolding love, one bond at a time.",
  "Hearts aligned, stories combined.",
  "We don’t just match. We spark magic.",
  "Every match, a masterpiece of destiny.",
  "Because some connections are cosmic.",
];

const defaultIcons = [Heart, Flame2, Sparkling, Flash, Snow, Star];

export default function ScrollRibbon({
  minWidth,
  iconSize,
  words = tags,
  icons = defaultIcons,
  transformX = 0,
  transformY = 0,
  rotate = 0,
  direction = "right",
  speed = 100,
  className,
}) {
  const [wordIconPairs, setWordIconPairs] = useState([]);
  useLayoutEffect(() => {
    const extendedWords = [...words, ...words]; // duplicate for looping
    const pairs = extendedWords.map((word) => {
      const icon = icons[Math.floor(Math.random() * icons.length)];
      return { word, icon };
    });
    setWordIconPairs(pairs);
  }, [words, icons]);

  const ScrollContent = () => {
    return (
      <div className="flex flex-row whitespace-nowrap select-none pointer-events-none">
        {wordIconPairs.map((pair, index) => {
          const IconComponent = pair.icon;
          return (
            <span
              key={index}
              className={`inline-flex tracking-wider px-2 gap-5 ${className} font-porinoi-sans text-white`}
            >
              <figure>
                <IconComponent
                  width={iconSize}
                  height={iconSize}
                  className="text-white"
                  style={{ width: iconSize, height: iconSize }}
                />
              </figure>
              {pair.word}
            </span>
          );
        })}
      </div>
    );
  };

  const motionVariants =
    direction === "right"
      ? [{ x: ["-100%", "0%"] }, { x: ["0%", "100%"] }]
      : [{ x: ["0%", "-100%"] }, { x: ["100%", "0%"] }];
  return (
    <div
      className={`lg:w-full min-w-[${minWidth}vw] lg:min-w-[53vw] h-auto min-h-fit overflow-hidden py-7 ${
        direction === "left" ? "bg-gradient-to-r" : "bg-gradient-to-l"
      } from-orange-500 to-pink-600 select-none pointer-events-none`}
      style={{
        rotate: `${rotate}deg`,
        transform: `translate(${transformX}px, ${transformY}px)`,
        width: `${minWidth}%`,
      }}
    >
      {wordIconPairs.length > 0 && (
        <div className="relative flex items-center">
          <motion.div
            className="flex whitespace-nowrap absolute"
            animate={motionVariants[0]}
            transition={{ repeat: Infinity, ease: "linear", duration: speed }}
          >
            <ScrollContent />
          </motion.div>
          <motion.div
            className="flex whitespace-nowrap absolute"
            animate={motionVariants[1]}
            transition={{ repeat: Infinity, ease: "linear", duration: speed }}
          >
            <ScrollContent />
          </motion.div>
        </div>
      )}
    </div>
  );
}
