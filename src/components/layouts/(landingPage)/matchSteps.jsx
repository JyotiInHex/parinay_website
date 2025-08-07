import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { landingPage } from "@/data/siteStaticData";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";
import Arrow from "../../../../public/assets/svg/arrow";
import { useEffect, useRef, useState } from "react";

export default function MatchStepsSection() {
  const { title, description, steps } = landingPage.stepsSection;

  const hoverImgRef = useRef(null);
  const [hoverSrc, setHoverSrc] = useState(null);

  const imgX = useMotionValue(0);
  const imgY = useMotionValue(0);
  const springX = useSpring(imgX, { stiffness: 300, damping: 30 });
  const springY = useSpring(imgY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      imgX.set(e.clientX + 20);
      imgY.set(e.clientY + 20);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [imgX, imgY]);

  return (
    <div className="w-full h-auto min-h-screen select-none">
      <div className="mb-10 lg:mb-20 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10">
        <div className="w-full lg:w-1/2 h-auto">
          <WordStaggerFlowTitle className="text-left text-4xl lg:text-6xl text-zinc-800 font-porinoi-sans font-medium leading-snug">
            {title}
          </WordStaggerFlowTitle>
        </div>
        <div className="w-full lg:w-1/2 h-auto">
          <WordStaggerFlowTitle className="text-left text-lg text-zinc-800 font-porinoi-display font-medium">
            {description}
          </WordStaggerFlowTitle>
        </div>
      </div>

      <div className="relative w-full h-full grid grid-cols-1">
        {steps.map((step, idx) => {
          return (
            <div
              key={idx}
              className="py-5 px-7 grid lg:grid-cols-[35%_10%_auto] items-center gap-5 border-t border-zinc-600"
              onMouseEnter={() => setHoverSrc(step.image)}
              onMouseLeave={() => setHoverSrc(null)}
            >
              <WordStaggerFlowTitle className="text-2xl lg:text-4xl text-zinc-800 font-porinoi-sans font-bold">
                {step.title}
              </WordStaggerFlowTitle>
              <Arrow
                width={60}
                className="justify-self-center hidden lg:block"
              />
              <div className="w-fit lg:w-3/4">
                <WordStaggerFlowTitle className="mix-blend-multiply text-base text-zinc-800 font-porinoi-sans font-normal">
                  {step.description}
                </WordStaggerFlowTitle>
              </div>
            </div>
          );
        })}
        <AnimatePresence>
          {hoverSrc && (
            <motion.figure
              ref={hoverImgRef}
              style={{ x: springX, y: springY }}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`hidden lg:block w-full min-w-[250px] max-w-[250px] min-h-[200px] max-h-[200px] fixed z-10 inset-0 pointer-events-none overflow-hidden shadow-xl mix-blend-multiply`}
            >
              <Image
                src={hoverSrc}
                alt="Hover image"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
            </motion.figure>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
