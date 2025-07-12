"use client";
import { motion } from "framer-motion";
import { TiltImage } from "@/components/ui/tiltImage";
import { HeroText } from "@/components/ui/waveText";
import { TooltipText } from "@/components/ui/tooltipText";

export default function Home() {
  return (
    <div className="w-full h-auto select-none">
      <section className="relative flex flex-col-reverse md:flex-row items-start justify-between px-8 md:px-20 py-12 md:py-28">
        <motion.div
          whileHover={{ rotate: 1, y: -6 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="w-full md:w-[30%]"
        >

          <TiltImage
            src="/assets/img/boy_model.png"
            alt="boy_Smile"
            delay={0.5}
            initialRotate={0}
            finalRotate={-7}
            initialY={70}
            finalY={0}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="w-full lg:w-2/3 text-center md:text-left space-y-1 grid place-content-center justify-items-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="lg:whitespace-nowrap text-transparent text-2xl lg:text-3xl font-semibold font-trap drop-shadow-lg bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600"
          >When tradition dances with destiny, love takes form</motion.h2>

          <HeroText
            text="Parinay Unites Hearts."
            className="text-4xl lg:text-6xl font-bold font-trap text-pink-600 drop-shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="mt-2 text-zinc-600 text-center text-lg md:text-2xl font-medium font-mono"
          >
            Begin a bond built on {" "}
            <TooltipText
              tooltip="Trust is the quiet promise that love will last."
              className="text-pink-600 font-semibold"
              customStyle={{ backgroundColor: "oklch(59.2% 0.249 0.584)" }}
            >
              Trust
            </TooltipText>
            ,{" "}
            <TooltipText
              tooltip="Integrity reflects respect, loyalty, and inner strength."
              className="text-green-600 font-semibold"
              customStyle={{ backgroundColor: "oklch(62.7% 0.194 149.214)" }}
            >
              Integrity
            </TooltipText>
            , and{" "}
            <TooltipText
              tooltip="The living essence of Assamese identity, values, and pride."
              className="text-orange-600 font-semibold"
              customStyle={{ backgroundColor: "oklch(64.6% 0.222 41.116)" }}
            >
              Assamese Heritage
            </TooltipText>

          </motion.div>

          <motion.button
            type="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-10 py-2 bg-gradient-to-r from-orange-400 to-pink-600 text-white rounded-full drop-shadow-md text-base font-trap font-medium cursor-pointer"
          >
            Join Now
          </motion.button>
        </motion.div>

        <motion.div
          whileHover={{ rotate: -1, y: -6 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="w-full md:w-[30%]"
        >
          <TiltImage
            src="/assets/img/girl_model.png"
            alt="girl_Smile"
            delay={0.5}
            initialRotate={0}
            finalRotate={7}
            initialY={70}
            finalY={0}
          />
        </motion.div>
      </section>
    </div>
  );
}
