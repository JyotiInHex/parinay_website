"use client";
import { motion } from "framer-motion";
import { CustomBtn2 } from "@/components/ui/customBtn";
import CustomForm from "@/components/ui/customForm";
import React, { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CustomLink } from "@/components/ui/customLink";

export const AuthHero = ({ title, subTitle, button }) => {
  return (
    <div className="w-full h-fit lg:p-34 lg:px-18 md:p-10 md:px-0 flex items-center md:items-start justify-center flex-col gap-2">
      <motion.h3
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "linear" }}
        className="text-center md:text-left text-2xl md:text-4xl text-zinc-900 font-black font-trap"
      >
        {title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "linear" }}
        className="text-center md:text-left text-lg lg:text-2xl text-zinc-500 font-semibold font-trap"
      >
        {subTitle}
      </motion.p>

      <motion.span
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: "linear" }}
        className="w-fit h-auto flex flex-col md:flex-row items-center justify-center text-base font-trap text-zinc-900 font-semibold gap-2 whitespace-nowrap"
      >
        {button.label}
        <CustomBtn2 path={button.path} icon={false}>
          {button.name}
        </CustomBtn2>
      </motion.span>
    </div>
  );
};

export const AuthForm = ({ formDetails }) => {
  const {
    formTitle,
    formDescription,
    formFields,
    submitButton,
    formLowerPart,
  } = formDetails;
  return (
    <CustomForm
      formTitle={formTitle}
      formDescription={formDescription}
      formFields={formFields}
      submitButton={submitButton}
      backGround={"#fafafa"}
      formLowerPart={formLowerPart}
    />
  );
};

export const AuthFooter = ({ additionalInfo, highlights, footer }) => {
  const [isShow, setIsShow] = useState(true);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setIsShow(true);
    }, 800);

    return () => {
      setIsShow(false);
      clearTimeout(timeout);
    };
  }, [pathname]);

  return (
    isShow && (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className="w-full h-fit select-none"
      >
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="text-center text-zinc-500 text-base font-normal font-mono pointer-events-none"
        >
          [{additionalInfo}]
        </motion.h4>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="mt-10 w-full h-auto py-4 flex flex-row items-center justify-between bg-gradient-to-tr from-orange-600 to-pink-600 px-24"
        >
          {highlights.map((highlight, idx) => {
            return (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.25,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="flex flex-row items-center justify-between gap-3"
              >
                <figure>{highlight.icon}</figure>
                <h6 className="text-base text-white font-normal font-trap">
                  {highlight.name}
                </h6>
              </motion.li>
            );
          })}
        </motion.ul>

        <div className="p-12 w-full h-auto flex items-center justify-between">
          <ul className="w-fit flex flex-row gap-3 items-center">
            {footer.links.map((link, idx) => {
              return (
                <motion.li
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.15,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  key={idx}
                  className="flex flex-row gap-3 items-center"
                >
                  <CustomLink
                    type="link"
                    label={link.label}
                    path={link.path}
                    className={"text-zinc-800"}
                  />
                  {idx < footer.links.length - 1 && (
                    <motion.span
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.25,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                      className="text-lg font-semibold text-zinc-800"
                    >
                      •
                    </motion.span>
                  )}
                </motion.li>
              );
            })}
          </ul>
          <div>
            <motion.h6
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="w-fit text-base text-zinc-800 font-trap font-semibold"
            >
              {footer.copyright}
            </motion.h6>
            <motion.p
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="text-sm text-zinc-600 font-trap font-medium text-right"
            >
              {footer.note}
            </motion.p>
          </div>
        </div>
      </motion.div>
    )
  );
};
