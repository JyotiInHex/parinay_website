import { motion } from "framer-motion";
import Arrow from "../../../../public/assets/svg/arrow";
import Image from "next/image";
import {
  WordStaggerFlowTitle,
} from "@/components/ui/sectionTitle";
import { helpPage } from "@/data/siteStaticData";

const HelpHero = () => {
  const { title, subTitle, description, image } = helpPage;
  return (
    <div className="relative mt-20 lg:mt-24">
      <div className="relative z-[1] lg:w-[55%]">
        <WordStaggerFlowTitle className="text-5xl lg:text-[48px] text-zinc-800 font-semibold font-porinoi-sans uppercase lg:leading-[55px]">
          {title}
        </WordStaggerFlowTitle>
      </div>

      <motion.figure
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.33, 1, 0.68, 1] }}
        className="w-fit h-24"
      >
        <Image
          src={image}
          width={500}
          height={500}
          quality={100}
          alt="helpCenter"
          loading="lazy"
          className="contrast-[130%] rotate-90 pointer-events-none absolute top-20 -z-[1] lg:-top-44 right-0 rounded-md scale-75 opacity-95 mix-blend-multiply"
        />
      </motion.figure>

      <motion.span
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 1, rotate: 90 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.7,
          ease: [0.33, 1, 0.68, 1],
        }}
        className="w-30 h-auto flex flex-row"
      >
        <Arrow width={85} height={85} className="relative z-[1] scale-75 lg:scale-100" />
      </motion.span>

      <div className="relative z-[1] grid grid-cols-1 lg:grid-cols-[36%_auto] gap-y-5 items-center">
        <div>
          <WordStaggerFlowTitle
            delayStep={0.025}
            className="justify-stretch text-sm text-zinc-800 font-normal font-porinoi-sans uppercase leading-tight"
          >
            {description}
          </WordStaggerFlowTitle>
        </div>

        <div className="justify-self-end-safe lg:w-[89%]">
          <WordStaggerFlowTitle className="justify-end text-5xl lg:text-[48px] text-zinc-800 font-semibold font-porinoi-sans uppercase lg:leading-[55px]">
            {subTitle}
          </WordStaggerFlowTitle>
        </div>
      </div>
    </div>
  );
};

export default HelpHero;
