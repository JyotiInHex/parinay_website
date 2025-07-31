import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { landingPage } from "@/data/siteStaticData";
import { CustomBtn2 } from "@/components/ui/customBtn";
import Image from "next/image";
import {
  LetterByLetterRevealTitle,
  WordStaggerFlowTitle,
} from "@/components/ui/sectionTitle";
import Link from "next/link";
import Arrow from "../../../public/assets/svg/arrow";

const LandingHero = () => {
  const hero = landingPage.hero;
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start center", "end start"],
  });

  const rawX1 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const rawX2 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const rawX3 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  const imgY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]),
    { stiffness: 80, damping: 18, mass: 0.4 }
  );

  const springConfig = {
    stiffness: 80,
    damping: 18,
    mass: 0.4,
  };

  const x1 = useSpring(rawX1, springConfig);
  const x2 = useSpring(rawX2, springConfig);
  const x3 = useSpring(rawX3, springConfig);

  return (
    <div ref={scrollRef}>
      <div className="space-y-10 px-10 lg:px-18 relative z-[2]">
        <div className="w-full h-full flex flex-col lg:-space-y-5 -space-y-4">
          <motion.div
            className="translate-x-[-16%] lg:translate-x-[0%] w-fit"
            style={{ x: x1 }}
          >
            <LetterByLetterRevealTitle
              delayStep={0.025}
              className="w-max h-fit text-[32px] lg:text-7xl text-right text-pink-500 font-porinoi-sans font-black tracking-wide"
            >
              {hero.title[0]}
            </LetterByLetterRevealTitle>
          </motion.div>

          <motion.div
            className="translate-x-[7%] lg:translate-x-[70%] w-fit"
            style={{ x: x2 }}
          >
            <LetterByLetterRevealTitle
              delayStep={0.025}
              className="w-max text-[32px] lg:text-7xl text-right text-zinc-800 font-porinoi-sans font-black tracking-wide"
            >
              {hero.title[1]}
            </LetterByLetterRevealTitle>
          </motion.div>

          <motion.div
            className="translate-x-[18%] lg:translate-x-[54%] w-fit"
            style={{ x: x3 }}
          >
            <LetterByLetterRevealTitle
              delayStep={0.025}
              className="w-max text-[32px] lg:text-7xl text-right text-orange-500 font-porinoi-sans font-black tracking-wide"
            >
              {hero.title[2]}
            </LetterByLetterRevealTitle>
          </motion.div>
        </div>

        <div className="w-full lg:w-2/7 mx-auto lg:mx-0 lg:ml-auto">
          <WordStaggerFlowTitle
            delayStep={0.015}
            wordsPerLine={5}
            className="lg:-space-y-3 text-base text-zinc-800 font-porinoi-sans font-normal leading-snug lg:leading-9"
          >
            {hero.subtitle + " " + hero.description}
          </WordStaggerFlowTitle>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.4,
              delay: 0.075,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="mt-5 w-full h-auto bg-zinc-800 rounded-full"
          >
            <Link
              href={hero.button.path}
              className="flex items-center justify-center gap-3 w-full py-1 text-center text-neutral-50 text-sm font-porinoi-sans font-semibold"
            >
              {hero.button.label}
              <Arrow width={24} height={24} />
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.figure
        style={{ y: imgY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.55,
          delay: 0.35,
          ease: [0.33, 1, 0.68, 1],
        }}
        className="relative z-0 h-[30vh] lg:h-full lg:max-h-[650px] overflow-hidden pointer-events-none"
      >
        <motion.img
          src={hero.image.src}
          alt={hero.image.alt}
          width={100}
          height={100}
          loading="lazy"
          className="w-full h-full object-cover pointer-events-none"
          style={{ y: imgY }}
        />
      </motion.figure>
    </div>
  );
};

export default LandingHero;
