"use client";
import Link from "next/link";
import { useState, useLayoutEffect, useEffect, useRef } from "react";
import { navigationSection } from "@/data/siteStaticData";
import { motion, AnimatePresence } from "framer-motion";
import { CustomLink } from "../ui/customLink";
import {
  LetterByLetterRevealTitle,
  WordStaggerFlowTitle,
} from "../ui/sectionTitle";
import { CustomBtn2 } from "../ui/customBtn";
import Arrow45deg from "../../../public/assets/svg/arrow45deg";

export default function Header() {
  const { logoText, menu } = navigationSection;
  const menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [device, setDevice] = useState("desktop");
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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

  useLayoutEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.addEventListener("scroll", handleClickOutside);
    };
  }, []);

  const headerClass = [
    device === "mobile" ? "fixed inset-0" : "sticky top-0",
    !showHeader && device !== "mobile" ? "-translate-y-full" : "translate-y-0",
    device === "tablet" ? "px-6 py-8" : "",
    "z-[200] w-full h-fit bg-white flex flex-col md:flex-row md:items-center justify-between gap-5 select-none transition-transform duration-300 ease-linear",
  ].join(" ");

  return (
    <header ref={menuRef} className={headerClass}>
      <nav className="relative w-full h-auto flex items-start justify-between px-10 lg:px-24 py-8 lg:py-12">
        <Link href={"/"}>
          <LetterByLetterRevealTitle className="text-zinc-800 text-lg lg:text-2xl font-porinoi-sans font-semibold">
            {logoText.default}
          </LetterByLetterRevealTitle>
        </Link>

        <CustomLink
          type={"button"}
          label={!isOpen ? menu.label : menu.closeLabel}
          onClick={toggleMenu}
          className={"z-[101] text-lg text-zinc-800 font-porinoi-sans font-semibold"}
        />

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              key="menu-panel"
              initial={{ height: 0 }}
              animate={{ height: device === "mobile" ? "100dvh" : "fit-content" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
              className="w-full max-h-screen bg-[#f8f3e9] absolute inset-0 z-[100] overflow-hidden"
            >
              <div className="px-10 lg:px-24 py-8 lg:py-12 w-full h-dvh flex lg:block flex-col">
                <h2 className="text-zinc-800 text-lg lg:text-2xl font-porinoi-sans font-semibold uppercase overflow-hidden">
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

                <div className="relative mt-5 flex flex-col-reverse lg:flex-row justify-between lg:items-center">
                  <motion.video
                    initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    exit={{ opacity: 0, filter: "blur(10px)", y: -50 }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                    width="250"
                    height="200"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    preload="none"
                    className="hidden lg:block absolute bottom-20 lg:static mt-5 w-full h-auto min-w-[200px] lg:min-w-[240px] max-w-[100px] lg:max-w-[250px] rounded-md shadow-xl overflow-hidden pointer-events-none"
                  >
                    <source
                      src={menu.video.source}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </motion.video>

                  <ul className="mt-5 w-full lg:w-fit flex flex-col items-end gap-10 lg:gap-5">
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
                        className="mix-blend-difference lg:mix-blend-normal"
                      >
                        <CustomLink
                          path={link.path}
                          label={link.label}
                          className="text-5xl lg:text-3xl text-zinc-400 lg:text-zinc-800 font-porinoi-sans font-semibold cursor-pointer uppercase"
                        />
                      </motion.li>
                    ))}
                    <motion.div
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="w-fit ml-auto my-0"
                    >
                      <CustomBtn2
                        type="link"
                        path={menu.cta.path}
                        className={"bg-white"}
                        childClassesName={"lg:text-xl"}
                      >
                        {menu.cta.label}
                      </CustomBtn2>
                    </motion.div>
                  </ul>
                </div>

                <motion.hr
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="border-zinc-600 mt-4 border rounded-full"
                />

                <div className="mt-3 flex flex-col-reverse lg:flex-row justify-between items-center gap-y-2 lg:gap-y-0">
                  <WordStaggerFlowTitle className="text-lg text-zinc-800 font-medium font-porinoi-sans">
                    {menu.footer.tagline}
                  </WordStaggerFlowTitle>

                  <ul className="flex flex-row items-center justify-between gap-3 lg:gap-5">
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
                            <Arrow45deg
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
