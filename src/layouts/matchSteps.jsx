import CustomBtn from "@/components/ui/customBtn";
import SectionTitle from "@/components/ui/sectionTitle";
import { landingPage } from "@/data/siteStaticData";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function MatchStepsSection() {
  const { title, description, steps } = landingPage.stepsSection;
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="select-none w-full">
      <SectionTitle className="max-w-1/3 text-left text-3xl font-trap font-bold text-zinc-800 z-10">
        {title}
      </SectionTitle>

      <AnimatePresence>
        {steps.map((step, index) => {
          const targetScale = 1 - (steps.length - index) * 0.05;
          return (
            <Card
              key={index}
              cardNum={index + 1}
              index={index}
              globalProgress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            >
              {step}
            </Card>
          );
        })}
      </AnimatePresence>

      <motion.h6
          className="w-full text-center text-xl text-zinc-800 font-trap font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          {description}
        </motion.h6>
    </div>
  );
}

const Card = ({
  children,
  cardNum,
  index,
  globalProgress,
  range,
  targetScale,
}) => {
  const localRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: localRef,
    offset: ["start end", "end"],
  });

  const delay = index * 0.1;
  const scale = useTransform(globalProgress, range, [1, targetScale]);
  const containerY = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const dynamicTop = `calc(5% + ${index * 25}px)`;

  return (
    <motion.div
      ref={localRef}
      className="w-full h-fit pb-32 pt-10 sticky z-10 flex items-center justify-center"
      style={{ top: dynamicTop }}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] }}
    >
      <motion.div
        className="bg-pink-600 w-full h-[500px] rounded-3xl shadow-sm hover:shadow-2xl transition-shadow duration-500"
        style={{
          background: children.color,
          scale,
          y: containerY,
        }}
      >
        <div className="w-full h-full p-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-4">
            <motion.h5
              className="text-6xl text-white font-bold font-trap drop-shadow-xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.2, duration: 0.6 }}
            >
              #{cardNum}
            </motion.h5>

            <motion.h3
              className="text-3xl text-white font-bold font-trap drop-shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.4, duration: 0.6 }}
            >
              {children.title}
            </motion.h3>

            <motion.p
              className="text-4xl text-white font-medium font-trap leading-[1.2] drop-shadow-xl"
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.6, duration: 0.6 }}
            >
              {children.description}
            </motion.p>
            {children.button && (
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + 0.8, duration: 0.6 }}
              >
                <CustomBtn path={children.button.path} icon={false}>{children.button.text}</CustomBtn>
              </motion.div>
            )}
          </div>

          <div className="relative w-full md:w-2/3 h-auto overflow-hidden rounded-2xl">
            <motion.figure
              style={{ scale: imageScale }}
              transition={{ duration: 0.6 }}
              className="w-full h-full flex items-center justify-center transition-all duration-500"
            >
              <Image
                src={children.image}
                alt={children.title}
                width={700}
                height={700}
                className="object-cover w-full h-full rounded-2xl"
              />
            </motion.figure>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
