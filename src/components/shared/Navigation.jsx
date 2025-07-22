"use client";
import { useState, useLayoutEffect } from "react";
import { navigationSection } from "@/data/siteStaticData";
import { motion, AnimatePresence } from "framer-motion";
import { CustomLink } from "../ui/customLink";
import { LetterByLetterRevealTitle, WordStaggerFlowTitle } from "../ui/sectionTitle";
import { CustomBtn2 } from "../ui/customBtn";
import Link from "next/link";
import Arrow from "../../../public/assets/svg/arrow";

export default function Navigation() {
  const { logoText, menu } = navigationSection;
  const [isOpen, setIsOpen] = useState(false);
  const [device, setDevice] = useState("desktop");

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useLayoutEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      if (width < 768) setDevice("mobile");
      else if (width < 1024) setDevice("tablet");
      else setDevice("desktop");
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const headerClass = [
    device === "mobile"
      ? "fixed inset-0 z-50 bg-[#f8f3e9] h-fit"
      : "sticky top-0 z-10 bg-white",
    device === "tablet" ? "px-6 py-8" : "",
    "w-full flex flex-col md:flex-row md:items-center justify-between gap-5 select-none",
  ].join(" ");

  return (
    <header className={headerClass}>
      <nav className="relative w-full h-auto flex items-center justify-between px-24 py-12">
        <LetterByLetterRevealTitle className="text-zinc-800 text-2xl font-porinoi-sans font-semibold">
          {logoText.default}
        </LetterByLetterRevealTitle>

        <CustomLink
          type={"button"}
          label={!isOpen ? menu.label : menu.closeLabel}
          onClick={toggleMenu}
          className={"text-lg text-zinc-800 font-porinoi-sans font-semibold"}
        />

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              key="menu-panel"
              initial={{ height: 0 }}
              animate={{ height: "410px" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
              className="w-full max-h-[410px] bg-[#f8f3e9] absolute inset-0 z-0 overflow-hidden"
            >
              <div className="px-24 py-12 w-full h-auto min-h-[400px]">
                <h2 className="text-zinc-800 text-2xl font-porinoi-sans font-semibold uppercase overflow-hidden">
                  {logoText.menu.split(" ").map((chr, idx) => {
                    return (
                      <motion.span
                        initial={{ filter: "blur(5px)", opacity: 0, x: -20 }}
                        animate={{ filter: "blur(0px)", opacity: 1, x: 0 }}
                        exit={{ filter: "blur(5px)", opacity: 0, x: 20 }}
                        transition={{
                          duration: 0.5,
                          delay: idx * 0.06,
                          ease: [0.33, 1, 0.68, 1],
                        }}
                        key={idx}
                        className="mx-1 inline-block "
                      >
                        {chr}
                      </motion.span>
                    );
                  })}
                </h2>

                <ul className="mt-5 w-full flex flex-col items-end gap-5 overflow-hidden">
                  {menu.links.map((link, idx) => (
                    <motion.li
                      key={idx}
                      onClick={() => setIsOpen(false)}
                      initial={{ filter: "blur(5px)", y: 40 }}
                      animate={{ filter: "blur(0px)", y: 0 }}
                      exit={{ filter: "blur(5px)", y: 40 }}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.08,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                    >
                      <CustomLink
                        path={link.path}
                        label={link.label}
                        className="text-3xl text-zinc-800 font-porinoi-sans font-semibold cursor-pointer"
                      />
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="grid place-content-end my-3"
                >
                  <CustomBtn2 type="link" path={menu.cta.path}>
                    {menu.cta.label}
                  </CustomBtn2>
                </motion.div>

                <motion.hr
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="border-zinc-600 mt-4 border rounded-full"
                />

                <div className="flex flex-row justify-between items-center mt-3">
                  <WordStaggerFlowTitle className="text-lg text-zinc-800 font-medium font-porinoi-sans">
                    {menu.footer.tagline}
                  </WordStaggerFlowTitle>

                  <ul className="flex flex-row items-center justify-between gap-5">
                    {menu.footer.social.map((social, idx) => {
                      return (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -30 }}
                          transition={{ duration: 0.4, delay: idx * 0.2 }}
                          className="text-zinc-800 text-lg font-medium font-porinoi-sans flex"
                        >
                          <span className="flex flex-row items-center gap-2 group">
                            <Link href={social.url} target="_blank">
                              {social.label}
                            </Link>
                            <Arrow
                              width={15}
                              height={15}
                              className="group-hover:translate-x-1 group-hover:-translate-y-1.5 transition-transform duration-200 ease-linear"
                            />
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
