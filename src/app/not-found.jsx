"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { CustomLink } from "@/components/ui/customLink";

export default function NotFound() {
  const router = useRouter();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="exit"
      variants={container}
      className="fixed z-100 inset-0 w-full h-vh overflow-hidden select-none"
    >
      <div className="relative pt-8 lg:pt-10 w-full h-full bg-[#f9efdd]">
        <motion.figure
          variants={fadeUp}
          className="flex flex-col items-center justify-center"
        >
          <Image
            src={"/assets/svg/logo_main.svg"}
            width={150}
            height={50}
            alt="Logo"
          />
        </motion.figure>

        <motion.div
          variants={container}
          className="relative w-full h-full px-10 flex flex-col items-start justify-center lg:justify-center md:justify-center gap-1"
        >
          <motion.h2
            variants={fadeUp}
            className="text-base lg:text-lg font-porinoi-sans font-semibold text-zinc-300"
          >
            Error Code 404
          </motion.h2>

          <motion.h3
            variants={fadeUp}
            className="text-4xl lg:text-6xl font-black font-porinoi-sans text-zinc-900"
          >
            OOOOPS!!
          </motion.h3>

          <motion.h5
            variants={fadeUp}
            className="w-fit lg:w-1/3 text-xl lg:text-3xl font-semibold font-porinoi-sans text-zinc-700"
          >
            You’ve entered a black hole in the Parinay universe!
          </motion.h5>

          <motion.p
            variants={fadeUp}
            className="mt-10 md:mt-2 w-fit lg:w-1/4 text-sm md:text-base text-justify font-mono font-medium text-zinc-400"
          >
            The page you’re looking for isn’t here. Maybe it eloped with a code
            snippet or got lost in the cloud.
          </motion.p>

          <motion.span
            variants={fadeUp}
            className="mt-5 md:mt-3 text-base font-mono text-zinc-500 font-semibold"
          >
            But no worries — we’ve got your back.
          </motion.span>

          <motion.div
            variants={fadeUp}
            className="mt-5 md:mt-2 flex flex-row items-center justify-center gap-2"
          >
            <CustomLink
              label={"Beam_Me_Back"}
              type="button"
              className="underline text-pink-600 font-semibold font-porinoi-sans"
              onClick={() => router.back()}
            />
            <span className="w-0.5 h-5 bg-zinc-400 rounded-full"></span>
            <CustomLink
              label={"Help_Signal"}
              path="/help"
              className="underline text-orange-600 font-semibold font-porinoi-sans"
            />
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          className="absolute -z-0 -right-1 lg:-right-5 -bottom-20 lg:-bottom-1/3 text-[30vh] lg:text-[70vh] md:text-[50vh] font-porinoi-sans font-bold text-neutral-600 pointer-events-none"
        >
          404
        </motion.h2>
      </div>
    </motion.section>
  );
}
