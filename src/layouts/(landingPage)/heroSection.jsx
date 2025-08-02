import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { landingPage } from "@/data/siteStaticData";
import Image from "next/image";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";
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

  const springConfig = {
    stiffness: 80,
    damping: 18,
    mass: 0.4,
  };

  const x1 = useSpring(rawX1, springConfig);
  const x2 = useSpring(rawX2, springConfig);
  const x3 = useSpring(rawX3, springConfig);

  return (
    <div ref={scrollRef} className="flex flex-col gap-5">
      <div className="space-y-10 px-10 lg:px-18 relative z-[1]">
        <div className="w-full h-full flex flex-col">
          <motion.div
            className="translate-x-[-16%] lg:translate-x-[0%] w-fit"
            style={{ x: x1 }}
          >
            <WordStaggerFlowTitle
              delayStep={0.025}
              className="w-max h-fit text-[32px] lg:text-7xl text-right text-pink-500 font-porinoi-sans font-black tracking-wide"
            >
              {hero.title[0]}
            </WordStaggerFlowTitle>
          </motion.div>

          <motion.div
            className="translate-x-[7%] lg:translate-x-[70%] w-fit"
            style={{ x: x2 }}
          >
            <WordStaggerFlowTitle
              delayStep={0.025}
              className="w-max text-[32px] lg:text-7xl text-right text-zinc-800 font-porinoi-sans font-black tracking-wide"
            >
              {hero.title[1]}
            </WordStaggerFlowTitle>
          </motion.div>

          <motion.div
            className="translate-x-[18%] lg:translate-x-[54%] w-fit"
            style={{ x: x3 }}
          >
            <WordStaggerFlowTitle
              delayStep={0.025}
              className="w-max text-[32px] lg:text-7xl text-right text-orange-500 font-porinoi-sans font-black tracking-wide"
            >
              {hero.title[2]}
            </WordStaggerFlowTitle>
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
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.095,
          ease: [0.33, 1, 0.68, 1],
        }}
        className="px-2 lg:px-0 relative z-0 h-[30vh] lg:h-full lg:max-h-[650px] overflow-hidden pointer-events-none"
      >
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          width={750}
          height={750}
          quality={100}
          priority={false}
          loading="lazy"
          className="w-full h-full object-cover pointer-events-none rounded-lg lg:rounded-none"
        />
      </motion.figure>
    </div>
  );
};

export default LandingHero;
