import { motion } from "framer-motion";
import Star from "../../../public/assets/svg/star";
import { landingPage } from "@/data/siteStaticData";
import {
  LetterByLetterRevealTitle,
  LineStaggerFlowTitle,
  WordStaggerFlowTitle,
} from "@/components/ui/sectionTitle";
import Link from "next/link";

const ShortAboutSection = () => {
  const { about } = landingPage;
  return (
    <div className="mt-10 select-none">
      <LetterByLetterRevealTitle
        isWhileInView={true}
        className="font-semibold text-center text-4xl lg:text-8xl text-zinc-800 font-porinoi-sans"
      >
        {about.title}
      </LetterByLetterRevealTitle>
      
      <div className="mt-10 w-fit h-full grid lg:grid-cols-2 space-y-10 lg:space-y-0 ">
        <div className="w-fit lg:w-4/7 flex flex-col flex-wrap">
          <WordStaggerFlowTitle className="text-2xl lg:text-4xl text-zinc-800 font-porinoi-sans font-semibold leading-relaxed">
            {about.description.left}
          </WordStaggerFlowTitle>
          
          <ul className="flex flex-col items-start gap-2 mt-5">
            {about.points.map((point, idx) => {
              return (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.3,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="flex items-center justify-center gap-2 origin-left"
                >
                  <Star />
                  <span className="text-base text-zinc-800 font-porinoi-sans font-semibold">
                    {point}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>
        
        <div className="place-self-end w-fit lg:w-[79%] flex flex-col flex-wrap pb-10">
          <LineStaggerFlowTitle
            wordsPerLine={5}
            delayStep={0.05}
            className="text-2xl text-zinc-800 font-normal font-porinoi-display leading-snug lg:leading-relaxed"
          >
            {about.description.right}
          </LineStaggerFlowTitle>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.45,
              delay: 0.85,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="mt-5 w-full h-auto bg-[#F7901E]/25 rounded-full"
          >
            <Link
              href={about.button.path}
              className="block w-full py-1 text-center text-black text-base font-porinoi-sans font-semibold"
            >
              {about.button.text}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ShortAboutSection;
