import { useState } from "react";
import { landingPage } from "@/data/siteStaticData";
import { AnimatePresence, motion } from "framer-motion";
import Arrow from "../../../public/assets/svg/arrow";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";
import Image from "next/image";

export default function StandOutSection() {
  const { title, cards } = landingPage.whyStandOut;
  const [cardIndex, setCardIndex] = useState(0);

  return (
    <div className="select-none w-auto h-max">
      <WordStaggerFlowTitle className="text-left text-xl lg:text-4xl font-porinoi-sans font-semibold">
        {title}
      </WordStaggerFlowTitle>

      <motion.h3
        className="lg:mt-6 text-2xl text-zinc-800 font-semibold font-mono"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        {(cardIndex + 1).toLocaleString().padStart(2, "0")}
        <span className="text-zinc-400">
          {" "}
          — {cards.length.toLocaleString().padStart(2, "0")}
        </span>
      </motion.h3>

      <div className="relative mt-10 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 items-end gap-10">
        <ul className="w-full h-full flex flex-col items-center">
          {cards.map((card, idx) => {
            return (
              <motion.li
                key={idx}
                className="relative overflow-hidden translate-z-0 w-full h-auto flex flex-row items-center justify-between border-b border-zinc-700 p-5 before:w-full before:h-full before:absolute before:inset-0 after:absolute after:inset-0 after:-z-[1] after:scale-y-0 after:origin-top after:bg-gradient-to-tr after:from-orange-600 after:to-pink-600 after:transition-transform after:duration-300 hover:after:scale-y-100 hover:after:origin-bottom group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: [0.25, 1, 0.5, 1],
                }}
                onMouseEnter={() => setCardIndex(idx)}
              >
                <WordStaggerFlowTitle
                  className={`text-xl lg:text-4xl font-porinoi-sans font-semibold ${
                    cardIndex !== idx
                      ? "text-zinc-500"
                      : "text-zinc-800 group-hover:text-white group-hover:translate-x-2"
                  } transition-all duration-300 ease-linear`}
                >
                  {card.title}
                </WordStaggerFlowTitle>

                {cardIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "tween", stiffness: 300 }}
                    className={`scale-150 ${
                      cardIndex !== idx
                        ? "text-zinc-500"
                        : "text-zinc-800 group-hover:text-white"
                    } transition-colors duration-300 ease-linear`}
                  >
                    <Arrow className="hidden lg:block size-10" />
                  </motion.div>
                )}
              </motion.li>
            );
          })}
        </ul>

        <AnimatePresence mode="wait">
          <motion.figure
            key={cardIndex}
            className="lg:absolute -bottom-24 right-20 z-0 w-full max-w-sm h-auto lg:h-[70vh] overflow-hidden rounded-2xl shadow-2xl bg-white/5 backdrop-blur-sm ring-1 ring-zinc-200/20 origin-bottom"
            initial={{ opacity: 0, y: 80, rotate: -35, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, y: -60, rotate: 15, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <Image
              src={cards[cardIndex].image}
              width={480}
              height={320}
              alt={cards[cardIndex].title}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-in-out pointer-events-none select-none brightness-110 contrast-105 saturate-[1.1] "
              quality={100}
              loading="lazy"
              sizes="(max-width: 768px) 90vw, 320px"
            />

            <motion.figcaption
              key={`desc-${cardIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="absolute bottom-0 w-full h-fit px-6 pt-10 pb-5 bg-gradient-to-t from-black from-35% to-transparent overflow-hidden"
            >
              <motion.p
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="text-lg lg:text-2xl text-white font-porinoi-sans font-medium leading-snug"
              >
                {cards[cardIndex].description}
              </motion.p>
            </motion.figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
    </div>
  );
}
