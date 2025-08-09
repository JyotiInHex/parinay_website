"use client";
import HelpFooter from "@/components/layouts/(helpCenterPage)/helpForMore";
import HelpHero from "@/components/layouts/(helpCenterPage)/heroSection";
import HelpQuestions from "@/components/layouts/(helpCenterPage)/questionSection";
import { motion } from "framer-motion";

export default function HelpCenter() {
  return (
    <>
      <div className="px-10 lg:px-24 py-5 lg:py-0 w-full h-full">
        <HelpHero />
        <motion.hr
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-10 border-zinc-400 border rounded-full"
        />
        <HelpQuestions />
        <motion.hr
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-10 border-zinc-400 border rounded-full"
        />
        <HelpFooter />
      </div>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mt-10 border-zinc-400 border rounded-full"
      />
    </>
  );
}
