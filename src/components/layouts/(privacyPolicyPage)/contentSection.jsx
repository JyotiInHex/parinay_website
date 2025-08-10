"use client";

import React from "react";
import { legalPage } from "@/data/siteStaticData";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PrivacyPolicyContent = () => {
  const { privacyPolicy } = legalPage;

  const [hash, setHash] = useState("#Interpretation_and_Definitions");
  useEffect(() => {
    const handleHashChange = () =>
      setHash(window.location.hash || "#Interpretation_and_Definitions");
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
      <div className="lg:sticky lg:top-28 self-start flex flex-col gap-y-3">
        <WordStaggerFlowTitle className="text-blue-500 text-xl font-semibold font-porinoi-sans uppercase">
          Table of Content
        </WordStaggerFlowTitle>
        <ul className="flex flex-col">
          {privacyPolicy.categories.map((item, idx) => {
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

      <div>
        {privacyPolicy.categories.map((category, categoryIndex) => {
          const id = encodeURIComponent(
            category.title.trim().replace(/\s+/g, "_")
          );
          return (
            <section
              id={id}
              key={categoryIndex}
              className="mt-3 flex flex-col gap-y-5 "
            >
              <div className="space-y-6 pb-0">
                {category.title && (
                  <h3 className="text-base lg:text-lg text-blue-500 font-medium font-porinoi-sans border-b-[2px] border-blue-500 py-2.5">
                    {category.title}
                  </h3>
                )}

                {category.subTitle && (
                  <h3 className="text-base lg:text-lg text-zinc-400 font-medium font-porinoi-sans">
                    {category.subTitle} —
                  </h3>
                )}

                {category.description && (
                  <h3 className="text-base lg:text-lg text-zinc-800 font-normal font-porinoi-sans">
                    {category.description}
                  </h3>
                )}

                {category.subCategories?.map((cat, catIndex) => {
                  return (
                    <div key={catIndex} className="flex flex-col gap-y-2">
                      {cat.title && (
                        <h2 className="text-2xl text-zinc-800 font-medium font-porinoi-sans">
                          {cat.title}
                        </h2>
                      )}

                      {cat.bodyText && (
                        <p className="text-base lg:text-lg text-zinc-800 font-normal font-porinoi-sans">
                          {cat.bodyText}
                        </p>
                      )}

                      {cat.points && (
                        <ol className="space-y-2">
                          {cat.points?.map((item, itemIndex) => {
                            return (
                              <React.Fragment key={itemIndex}>
                                <li className="space-y-3 py-2">
                                  <h5 className="text-base lg:text-lg text-zinc-400 font-medium font-porinoi-sans">
                                    <i>{item.title}</i>
                                  </h5>

                                  <p className="text-base lg:text-lg text-zinc-800 font-medium font-porinoi-sans">
                                    {item.description}
                                  </p>

                                  <ul className="flex flex-col gap-y-5">
                                    {item.lists &&
                                      item.lists?.map((li, liIndex) => {
                                        return (
                                          <li
                                            key={liIndex}
                                            className="text-sm lg:text-base text-zinc-800 font-medium font-porinoi-sans"
                                          >
                                            {(liIndex + 1)
                                              .toLocaleString()
                                              .padStart(2, "0") +
                                              ". " +
                                              li}
                                          </li>
                                        );
                                      })}
                                  </ul>
                                </li>
                              </React.Fragment>
                            );
                          })}
                        </ol>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </motion.div>
  );
};

export default PrivacyPolicyContent;
