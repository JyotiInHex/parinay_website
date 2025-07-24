import { motion } from "framer-motion";
import { aboutPage } from "@/data/siteStaticData";
import {
  LetterByLetterRevealTitle,
  WordStaggerFlowTitle,
} from "@/components/ui/sectionTitle";
import { CustomBtn2 } from "@/components/ui/customBtn";

const AboutCTASection = () => {
  const { ctaSection } = aboutPage;
  return (
    <div className="relative px-20 py-24 flex flex-row gap-30 items-end bg-gradient-to-b from-white to-zinc-50">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="px-5 pt-2 pb-0.5 w-fit h-fit border-2 rounded-full"
        >
          <LetterByLetterRevealTitle className="text-xs text-zinc-800 font-semibold font-porinoi-sans">
            {ctaSection.tag}
          </LetterByLetterRevealTitle>
        </motion.div>

        <div className="mt-10 w-fit space-y-10">
          <WordStaggerFlowTitle className="text-7xl nth-[6]:text-orange-500 nth-[7]:text-orange-500 font-semibold font-porinoi-sans leading-tight">
            {ctaSection.heading}
          </WordStaggerFlowTitle>
          <WordStaggerFlowTitle
            delayStep={0.03}
            className="w-4/5 text-3xl text-zinc-800 font-medium font-porinoi-display leading-snug"
          >
            {ctaSection.subtext}
          </WordStaggerFlowTitle>
        </div>
      </div>

      <div className="space-y-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.33, 1, 0.68, 1],
          }}
        >
          <CustomBtn2
            type="link"
            path={ctaSection.btn.link}
            className={"rounded-full py-3 px-7"}
          >
            {ctaSection.btn.cta}
          </CustomBtn2>
        </motion.div>

        <ul className="space-y-5 w-fit">
          {ctaSection.features.map((features, idx) => {
            return (
              <motion.li
                key={idx}
                initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.25,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className=" flex gap-3"
              >
                {features.icon}
                <WordStaggerFlowTitle className="w-3/6 text-sm text-zinc-800 font-medium font-porinoi-sans">
                  {features.text}
                </WordStaggerFlowTitle>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AboutCTASection;
