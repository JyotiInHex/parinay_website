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
      className="fixed z-[1000] inset-0 w-full h-vh overflow-hidden select-none"
    >
      <div className="relative pt-8 lg:pt-10 w-full h-full bg-[#f8f3e9]">
        <motion.figure
          variants={fadeUp}
          className="flex flex-col items-center justify-center"
        >
          <Image src={"/assets/svg/logo_main.svg"} width={150} height={50} alt="Logo" />
        </motion.figure>

        <motion.div
          variants={container}
          className="relative w-full h-full px-10 flex flex-col items-start justify-center lg:justify-center md:justify-center gap-1"
        >
          <motion.h2
            variants={fadeUp}
            className="text-base lg:text-lg font-porinoi-sans font-semibold text-zinc-300"
          >
            Error Code 500
          </motion.h2>

          <motion.h3
            variants={fadeUp}
            className="text-4xl lg:text-6xl font-black font-porinoi-sans text-zinc-900"
          >
            YIKES!!
          </motion.h3>

          <motion.h5
            variants={fadeUp}
            className="w-fit lg:w-1/3 text-xl lg:text-3xl font-semibold font-porinoi-sans text-zinc-700"
          >
            Something broke behind the scenes at Parinay!
          </motion.h5>

          <motion.p
            variants={fadeUp}
            className="mt-0 lg:mt-10 md:mt-2 w-fit lg:w-1/4 text-sm md:text-base text-justify font-mono font-medium text-zinc-400"
          >
            Our code just tripped over its own feet. We’re working on a fix
            faster than you can say "undefined is not a function." Please hang
            tight or try again in a moment.
          </motion.p>

          <motion.span
            variants={fadeUp}
            className="mt-0 lg:mt-5 md:mt-3 text-base font-mono text-zinc-500 font-semibold"
          >
            Something went wrong... but we've got options!
          </motion.span>

          <motion.div
            variants={fadeUp}
            className="mt-1 lg:mt-5 md:mt-2 flex flex-row items-center justify-center gap-2"
          >
            <CustomLink
              label={"Try_Again"}
              customStyle={{
                textDecorationLine: "underline",
                color: "#F7901E",
                fontSize: "16px",
              }}
              type="button"
              onClick={() => {
                router.refresh();
              }}
            />
            <span className="w-0.5 h-5 bg-zinc-400 rounded-full"></span>
            <CustomLink
              label={"Help_Signal"}
              path="/contact"
              customStyle={{
                textDecorationLine: "underline",
                color: "#EC008C",
                fontSize: "16px",
              }}
            />
            <span className="w-0.5 h-5 bg-zinc-400 rounded-full"></span>
            <CustomLink
              label={"Inquire_Within"}
              path="/faqPage"
              customStyle={{
                textDecorationLine: "underline",
                color: "#EC008C",
                fontSize: "16px",
              }}
            />
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          className="absolute -z-0 -right-5 lg:-right-5 -bottom-0 lg:-bottom-1/3 text-[30vh] lg:text-[70vh] md:text-[50vh] font-porinoi-sans font-bold text-neutral-600 pointer-events-none"
        >
          500
        </motion.h2>
      </div>
    </motion.section>
  );
}
