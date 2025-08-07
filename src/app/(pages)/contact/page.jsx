"use client";

import { motion } from "framer-motion";
import ContactFAQ from "@/components/layouts/(contactPage)/faqSection";
import ContactForm from "@/components/layouts/(contactPage)/fromSection";
import ContactHero from "@/components/layouts/(contactPage)/heroSection";

export default function Contact() {
  return (
    <div className="w-full h-auto min-h-screen">
      <ContactHero />

      <ContactForm />

      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="border-zinc-400 mt-4 border rounded-full"
      />

      <ContactFAQ />

      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="border-zinc-400 mt-4 border rounded-full mb-5"
      />
    </div>
  );
}
