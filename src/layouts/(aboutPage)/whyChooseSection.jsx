import { aboutPage } from "@/data/siteStaticData";
import { motion } from "framer-motion";
import {
  LetterByLetterRevealTitle,
  LineStaggerFlowTitle,
  WordStaggerFlowTitle,
} from "@/components/ui/sectionTitle";

const AboutWhyChooseSection = () => {
  const { whyChooseUs } = aboutPage;

  return (
    <div className="w-full h-auto py-20 px-6 md:px-20">
      <div className="flex flex-row gap-5 justify-between">
        <span className="w-1/6">
          <WordStaggerFlowTitle
            delayStep={0.05}
            className="text-xl md:text-3xl text-zinc-700 font-porinoi-sans font-semibold tracking-wide"
          >
            {whyChooseUs.title}
          </WordStaggerFlowTitle>
        </span>
        <WordStaggerFlowTitle
          delayStep={0.025}
          className="px-1 max-w-4xl text-4xl text-zinc-800 font-porinoi-sans font-normal italic leading-snug"
        >
          {`"${whyChooseUs.description}"`}
        </WordStaggerFlowTitle>
      </div>

      <ul className="mt-26 relative w-auto h-auto flex flex-row gap-0">
        {whyChooseUs.points.map((point, idx) => (
          <motion.li
            key={idx}
            initial={{ filter: "blur(5px)", opacity: 0, y: 50 }}
            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.7,
              delay: idx * 0.1,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="py-5 px-4 w-fit h-fit border-t border-r last:border-r-0 border-zinc-400 backdrop-blur-sm flex flex-col flex-wrap items-start justify-between space-y-3"
          >
            <span className="flex flex-col">
              <LetterByLetterRevealTitle className="font-mono text-3xl text-zinc-400 font-semibold">
                {`[${(idx + 1).toLocaleString().padStart(2, "0")}]`}
              </LetterByLetterRevealTitle>
              <WordStaggerFlowTitle className="text-lg text-zinc-800 font-semibold font-porinoi-sans">
                {point.title}
              </WordStaggerFlowTitle>
            </span>
            <WordStaggerFlowTitle className="text-sm text-zinc-800 font-semibold font-porinoi-sans">
              {point.content}
            </WordStaggerFlowTitle>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default AboutWhyChooseSection;
