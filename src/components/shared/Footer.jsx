import { motion } from "framer-motion";
import {
  LetterByLetterRevealTitle,
  WordStaggerFlowTitle,
} from "../ui/sectionTitle";
import { footerSection } from "@/data/siteStaticData";
import { CustomBtn2 } from "../ui/customBtn";
import { CustomLink } from "../ui/customLink";
import Link from "next/link";
import Arrow45deg from "../../../public/assets/svg/arrow45deg";

const Footer = () => {
  const {
    note,
    introText,
    callToAction,
    contact,
    quickLinks,
    social,
    credits,
    office,
    logoText,
  } = footerSection;

  const linksCategories = [
    { key: "discover", links: quickLinks.discover },
    { key: "connect", links: quickLinks.connect },
  ];
  return (
    <footer className="px-10">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pt-10">
        <div className="space-y-5">
          <div className="w-fit lg:w-3/4">
            <WordStaggerFlowTitle className="justify-center lg:justify-start text-3xl lg:text-5xl text-zinc-800 font-semibold font-porinoi-sans leading-snug">
              {introText}
            </WordStaggerFlowTitle>
          </div>
          <div className="w-fit lg:w-3/4">
            <WordStaggerFlowTitle className="justify-center lg:justify-start text-base lg:text-lg text-zinc-800 font-semibold font-porinoi-sans">
              {note}
            </WordStaggerFlowTitle>
          </div>
          <CustomBtn2 path={callToAction.path} className={"bg-[#f8f3e9] w-full lg:w-fit"}>
            {callToAction.label}
          </CustomBtn2>
        </div>

        <div>
          <div className="space-y-10 lg:space-y-32">
            <ul className="flex flex-col lg:flex-row justify-end gap-5">
              {social.map((link, idx) => {
                return (
                  <motion.li
                    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true, amount: 0.9 }}
                    transition={{ duration: 0.5, delay: idx * 0.25 }}
                    key={idx}
                    className="whitespace-nowrap flex items-center space-x-2 group"
                  >
                    <Link
                      href={link.url}
                      target="_blank"
                      className="text-zinc-800 text-lg font-medium font-porinoi-sans"
                    >
                      {link.label}
                    </Link>
                    <Arrow45deg
                      width={15}
                      height={15}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1.5 transition-transform duration-200 ease-linear"
                    />
                  </motion.li>
                );
              })}
            </ul>
            <motion.div
              initial={{ opacity: 0, filter: "blur(5px)", y: 50 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="inline-block"
            >
              <CustomLink
                path={contact.email.path}
                label={contact.email.label}
                className={
                  "text-zinc-800 text-2xl lg:text-7xl font-medium font-porinoi-sans uppercase cursor-pointer"
                }
              />
            </motion.div>
          </div>

          <motion.hr
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="mt-5 mb-10"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <ul>
              <motion.li
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="text-base text-zinc-800 font-porinoi-sans font-semibold"
              >
                {office.title}
              </motion.li>
              <motion.li
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="text-base text-zinc-800 font-porinoi-sans font-semibold"
              >
                {office.lines}
              </motion.li>
            </ul>
            {linksCategories.map((category) => {
              return (
                <ul
                  key={category.key}
                  className="flex flex-col justify-start gap-1"
                >
                  {category.links.map((link, idx) => {
                    return (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: true, amount: 0.9 }}
                        transition={{ duration: 0.55, delay: idx * 0.25 }}
                      >
                        <CustomLink
                          path={link.path}
                          label={link.label}
                          className={
                            "text-base text-zinc-800 font-porinoi-sans font-semibold cursor-pointer"
                          }
                        />
                      </motion.li>
                    );
                  })}
                </ul>
              );
            })}
          </div>

          <div className="mt-20 flex flex-col lg:flex-row items-center justify-between">
            <LetterByLetterRevealTitle
              delayStep={0.02}
              className="text-sm text-zinc-400 font-medium font-porinoi-sans"
            >
              {credits.copyright}
            </LetterByLetterRevealTitle>
            <WordStaggerFlowTitle className="text-sm justify-center text-zinc-400 font-medium font-porinoi-sans">
              {credits.tagline}
            </WordStaggerFlowTitle>
          </div>
        </div>
      </div>

      <div className="w-fit h-fit mx-auto">
        <LetterByLetterRevealTitle className="h-[60px] lg:h-[290px] overflow-hidden text-[65px] lg:text-[300px] mx-auto text-zinc-800 font-semibold font-porinoi-sans">
          {logoText.logo}
        </LetterByLetterRevealTitle>
      </div>
    </footer>
  );
};

export default Footer;
