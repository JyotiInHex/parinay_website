import { motion } from "framer-motion";
import { landingPage } from "@/data/siteStaticData";
import { CustomBtn2 } from "@/components/ui/customBtn";
import Image from "next/image";
import {
  LineStaggerFlowTitle,
  WordStaggerFlowTitle,
} from "@/components/ui/sectionTitle";

const LandingHero = () => {
  const hero = landingPage.hero;
  return (
    <>
      <div className="grid grid-cols-2 items-center">
        <div className="w-fit h-full pb-4 ">
          <LineStaggerFlowTitle
            wordsPerLine={5}
            delayStep={0.1}
            className="w-4/5 text-3xl text-zinc-800 font-porinoi-display font-normal leading-9"
          >
            {hero.subtitle + "<br/>" + hero.description}
          </LineStaggerFlowTitle>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: 0.55,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <CustomBtn2 path="/signUp">{hero.buttonValue}</CustomBtn2>
          </motion.div>
        </div>

        <div className="place-items-end flex flex-col justify-end h-full">
          <WordStaggerFlowTitle className="w-3/5 h-fit justify-end text-7xl text-right text-zinc-900 font-porinoi-sans font-black first:text-pink-600 last:text-orange-500">
            {hero.title}
          </WordStaggerFlowTitle>
        </div>
      </div>

      <motion.hr
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          duration: 0.25,
          delay: 0.15,
          ease: [0.33, 1, 0.68, 1],
        }}
        className="mt-0 border border-zinc-600 rounded-full transition-all duration-500 ease-linear"
      />

      <motion.figure
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.55,
          delay: 0.35,
          ease: [0.33, 1, 0.68, 1],
        }}
        className="mt-4 w-full h-auto max-h-[400px] overflow-hidden rounded-2xl"
      >
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          width={1000}
          height={1000}
          quality={100}
          loading="lazy"
          className="w-full h-fit object-cover"
        />
      </motion.figure>
    </>
  );
};

export default LandingHero;
