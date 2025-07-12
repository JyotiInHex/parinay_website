"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CustomLink } from "../ui/customLink";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "About_Us", path: "/about" },
  { name: "Blog & Stories", path: "/blog" },
  { name: "Contact_Support", path: "/contact" },
  { name: "Sign In", path: "/login" },
  { name: "Start_Your_Journey", path: "/signup" },
];

const navVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <header className="relative px-0 md:px-20 py-10 md:py-11 w-full flex flex-row md:items-center justify-between gap-10 select-none">
      <motion.figure
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 12 }}
        className="w-fit px-10 md:px-0"
      >
        <Image
          src="assets/svg/logo_main.svg"
          width={130}
          height={10}
          alt="Logo"
        />
      </motion.figure>

      {isMobile && (
        <motion.button
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.05,
            type: "spring",
            stiffness: 180,
            damping: 12,
          }}
          onClick={toggleMenu}
          className="md:hidden block px-10 text-base text-black font-trap font-semibold outline-0"
        >
          {isOpen ? "Close" : "Menu"}
        </motion.button>
      )}

      {isMobile ? (
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={navVariants}
              className="absolute top-full left-0 w-full flex flex-col justify-start gap-10 bg-[#f8f3e9] z-40"
              style={{ height: "calc(100vh - 100%)" }}
            >
              <ul className="px-10 flex flex-col items-start justify-start gap-3">
                {links.slice(0, 4).map((link, i) => (
                  <CustomLink
                    key={i}
                    index={i}
                    label={link.name}
                    path={link.path}
                    onClick={closeMenu}
                    customStyle={{ fontSize: "28px" }}
                  />
                ))}
              </ul>
              <ul className="px-10 flex flex-col items-start justify-start gap-3">
                {links.slice(4, 6).map((link, i) => (
                  <CustomLink
                    key={i}
                    index={i}
                    label={link.name}
                    path={link.path}
                    onClick={closeMenu}
                    customStyle={{ fontSize: "28px" }}
                  />
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      ) : (
        <nav className="w-[70%] bg-red-0 hidden md:flex flex-row justify-between items-center">
          <ul className="flex flex-row items-center gap-8">
            {links.slice(0, 4).map((link, i) => (
              <CustomLink
                key={i}
                index={i}
                label={link.name}
                path={link.path}
                customStyle={{fontSize: "16px"}}
              />
            ))}
          </ul>
          <ul className="flex flex-row items-center gap-8">
            {links.slice(4, 6).map((link, i) => (
              <CustomLink
                key={i}
                index={i}
                label={link.name}
                path={link.path}
                customStyle={{fontSize: "16px"}}
              />
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
