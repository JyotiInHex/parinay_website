"use client";

import React, { useEffect, useState } from "react";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";
import { legalPage } from "@/data/siteStaticData";
import { motion } from "framer-motion";

const TermOfUseContent = () => {
  const { termOfUse } = legalPage;

  const [hash, setHash] = useState("#Eligibility");
  useEffect(() => {
    const handleHashChange = () =>
      setHash(window.location.hash || "#Eligibility");
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      }}
      className="w-full h-auto grid grid-cols-1 lg:grid-cols-[25%_auto] gap-x-6 pt-5 lg:pt-18"
    >
      <div className="lg:sticky lg:top-24 self-start flex flex-col gap-y-3">
        <WordStaggerFlowTitle className="text-blue-500 text-xl font-semibold font-porinoi-sans uppercase">
          Table of Content
        </WordStaggerFlowTitle>
        <ul className="flex flex-col">
          {termOfUse.categories.map((item, idx) => {
            const id = encodeURIComponent(
              item.title.trim().replace(/\s+/g, "_")
            );
            return (
              <li
                key={idx}
                className={`px-3 py-2.5 text-base  font-medium font-porinoi-sans border-b border-zinc-800 transition-colors duration-200 ease-linear hover:bg-blue-400 hover:text-white ${
                  hash === `#${id}` ? "bg-blue-500 text-white" : "text-zinc-800"
                }`}
              >
                <a href={`#${id}`}>
                  <WordStaggerFlowTitle>{item.title}</WordStaggerFlowTitle>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="lg:mt-10">
        {termOfUse.categories.map((cat, catIndex) => {
          const id = encodeURIComponent(cat.title.trim().replace(/\s+/g, "_"));
          return (
            <section
              id={id}
              key={catIndex}
              className="mt-10 space-y-2 scroll-smooth duration-500 ease-linear"
            >
              <h3 className="mx-auto text-zinc-800 text-xl lg:text-2xl font-semibold font-porinoi-sans">
                {cat.title}
              </h3>
              <ul className="space-y-4">
                {cat.lists.map((li, liIndex) => {
                  return (
                    <li key={liIndex}>
                      <h4 className="text-base lg:text-lg text-zinc-800 font-medium font-porinoi-sans">
                        {(liIndex + 1).toLocaleString().padStart(2, 0) +
                          ". " +
                          li.title}
                      </h4>
                      {li.points && (
                        <ol className="px-8 space-y-2">
                          {li.points.map((point, pointIdx) => {
                            return (
                              <li
                                key={pointIdx}
                                className="text-base text-zinc-800 font-porinoi-sans font-normal"
                              >
                                ● {point}
                              </li>
                            );
                          })}
                        </ol>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TermOfUseContent;
