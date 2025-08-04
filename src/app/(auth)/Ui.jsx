"use client";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";
import { authenticationPages } from "@/data/siteStaticData";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import CustomForm from "@/components/ui/customForm";
import Arrow from "../../../public/assets/svg/arrow";
import Arrow45deg from "../../../public/assets/svg/arrow45deg";
import Link from "next/link";

export const AuthWrapper = (props) => {
  const { credit } = authenticationPages;
  const [isShow, setIsShow] = useState(false);
  const pathname = usePathname();


  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setIsShow(true);
    }, 650);

    return () => {
      setIsShow(false);
      clearTimeout(timeout);
    };
  }, [pathname]);

  return (
    isShow && (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-10 lg:gap-20">
          <AuthLeft {...props} />
          <AuthRight {...props} />
        </div>
        <div className="mt-10 w-full h-auto flex flex-col items-center justify-center">
          <div className="w-full lg:w-fit">
            <WordStaggerFlowTitle className="justify-center text-sm text-zinc-800 font-porinoi-sans font-semibold">
              {credit.copyright}
            </WordStaggerFlowTitle>
          </div>
          <div className="w-full lg:w-fit">
            <WordStaggerFlowTitle className="justify-center text-xs text-zinc-500 font-porinoi-sans font-medium">
              {credit.note}
            </WordStaggerFlowTitle>
          </div>
        </div>
      </>
    )
  );
};

export const AuthLeft = ({ imag, title, subTitle }) => {
  const { links } = authenticationPages;

  return (
    <div className="order-1 lg:order-0 flex w-full h-full space-y-3 flex-col items-start justify-center ">
      <motion.figure
        initial={{ width: 0, opacity: 0, filter: "grayscale(100%)" }}
        whileInView={{ width: "160px", opacity: 1, filter: "grayscale(0%)" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.8,
          ease: [0.33, 1, 0.68, 1],
          delay: 0.4,
          filter: {
            delay: 0.95,
          },
        }}
        className="hidden lg:block h-[130px] origin-right overflow-hidden rounded-xl"
      >
        <Image
          src={imag}
          alt="AuthImg"
          width={1000}
          height={1000}
          quality={100}
          loading="lazy"
          className="object-cover w-full h-full pointer-events-none"
        />
      </motion.figure>

      <div className="hidden lg:block">
        <WordStaggerFlowTitle
          delayStep={0.06}
          className="py-0.5 text-4xl text-zinc-800 font-porinoi-sans font-semibold"
        >
          {title}
        </WordStaggerFlowTitle>
      </div>

      <div className="hidden lg:flex items-center gap-3">
        <WordStaggerFlowTitle className="text-base text-zinc-800 font-porinoi-sans font-normal">
          {subTitle}
        </WordStaggerFlowTitle>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
            delay: 0.75,
            ease: [0.33, 1, 0.68, 1],
          }}
        >
          <Arrow width={30} className="text-zinc-800 rotate-90 lg:rotate-0" />
        </motion.span>
      </div>

      <ul className="lg:mt-10 w-full h-auto flex flex-wrap-reverse items-center justify-center lg:justify-start gap-4">
        {links.map((link, idx) => {
          return (
            <motion.li
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.095,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="group text-base font-porinoi-sans font-medium  flex items-center gap-2 cursor-pointer"
            >
              [
              <Link
                href={link.path}
                className={"whitespace-nowrap text-zinc-800 cursor-pointer"}
              >
                {link.label}
              </Link>
              <Arrow45deg
                width={13}
                height={13}
                className="group-hover:translate-x-1 group-hover:-translate-y-1.5 transition-transform duration-200 ease-linear"
              />
              ]
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export const AuthRight = ({ formDetails }) => {
  const {
    formTitle,
    switchForm,
    formFields,
    checkConfirm,
    submitButton,
    helpLinks,
    additionalInfo,
    serverAction,
  } = formDetails;
  return (
    <div>
      <CustomForm
        formTitle={formTitle}
        switchForm={switchForm}
        formFields={formFields}
        checkConfirm={checkConfirm}
        submitButton={submitButton}
        helpLinks={helpLinks}
        additionalInfo={additionalInfo}
        serverAction={serverAction}
      />
    </div>
  );
};
