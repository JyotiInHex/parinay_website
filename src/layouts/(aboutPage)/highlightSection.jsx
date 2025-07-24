import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  LineStaggerFlowTitle,
  WordStaggerFlowTitle,
} from "@/components/ui/sectionTitle";
import { aboutPage } from "@/data/siteStaticData";
import { useRef } from "react";

const AboutHighlight = () => {
  const { highlights } = aboutPage;
  const imageTwoRef = useRef(null);
  const { scrollYProgress: scrollY2 } = useScroll({
    target: imageTwoRef,
    offset: ["start end", "end start"],
  });
  const imgTwoY = useTransform(scrollY2, [0, 1], [0, -80]);
  const imgTwoScale = useTransform(scrollY2, [0, 1], [1, 1.0995]);

  const imgTwoSmoothY = useSpring(imgTwoY, {
    stiffness: 80,
    damping: 14,
    mass: 0.5,
  });

  return (
    <div className="mt-20 px-20 pb-24 grid grid-cols-2 gap-0">
      <div className="border-r px-4 border-zinc-300">
        <WordStaggerFlowTitle
          delayStep={0.05}
          className="text-6xl text-zinc-800 font-porinoi-sans font-semibold leading-tight uppercase"
        >
          {highlights.caption}
        </WordStaggerFlowTitle>

        <motion.figure
          ref={imageTwoRef}
          initial={{ opacity: 0, filter: "blur(10px)", y: -10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="w-full max-w-md h-auto overflow-hidden rounded-2xl shadow-2xl shadow-black/55"
          style={{ y: imgTwoSmoothY }}
        >
          <motion.div style={{ scale: imgTwoScale }} className="w-full h-auto">
            <Image
              src={highlights.image}
              quality={100}
              width={1200}
              height={800}
              alt="About Porinoi"
              className="object-cover w-full h-auto rounded-2xl pointer-events-none"
            />
          </motion.div>
        </motion.figure>
      </div>

      <div>
        <div className="px-4">
          <WordStaggerFlowTitle
            duration={0.55}
            delayStep={0.03}
            className="text-6xl text-zinc-800 font-porinoi-sans font-semibold leading-tight"
          >
            {highlights.sectionTitle}
          </WordStaggerFlowTitle>
        </div>

        <ul className="mt-10 grid grid-cols-2 items-start">
          {highlights.items.map((item, idx) => {
            return (
              <motion.li
                key={idx}
                initial={{ x: -50, filter: "blur(15px)", opacity: 0 }}
                whileInView={{ x: 0, filter: "blur(0px)", opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.2,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="last:col-span-2 nth-[2]:bg-gradient-to-tr from-orange-500 to-pink-500 group flex flex-col items-start p-5 border-t border-zinc-300 h-full"
              >
                <WordStaggerFlowTitle
                  delayStep={0.1}
                  duration={0.7}
                  className="mb-1.5 text-lg group-even:text-white text-zinc-800 font-porinoi-sans font-medium justify-start"
                >
                  {item.title}
                </WordStaggerFlowTitle>

                <LineStaggerFlowTitle
                  wordsPerLine={5}
                  delayStep={idx * 0.055}
                  className="text-sm lg:text-base group-even:text-white text-zinc-800 font-medium font-porinoi-sans leading-snug"
                >
                  {item.content}
                </LineStaggerFlowTitle>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AboutHighlight;
