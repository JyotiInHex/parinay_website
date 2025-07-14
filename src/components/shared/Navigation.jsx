"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CustomLink } from "../ui/customLink";
import { useState, useLayoutEffect } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "About_Us", path: "/about" },
  { name: "Contact_Us", path: "/contact" },
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
  const [device, setDevice] = useState("desktop");

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

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
    device === "mobile" ? "fixed inset-0 z-50 bg-[#f8f3e9] h-fit" : "static",
    device === "tablet" ? "px-6 py-8" : "px-0 md:px-20 py-6 md:py-11",
    "w-full flex flex-col md:flex-row md:items-center justify-between gap-5 select-none",
  ].join(" ");

  const logoSize = device === "mobile" ? 120 : device === "tablet" ? 130 : 150;
  const linkFontSize =
    device === "mobile" ? "30px" : device === "tablet" ? "20px" : "16px";

  return (
    <header className={headerClass}>
      <div className="flex flex-row items-center justify-between w-full md:w-auto">
        <motion.figure
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
          className="w-fit px-6 md:px-0"
        >
          <Image
            src="assets/svg/logo_main.svg"
            width={logoSize}
            height={logoSize}
            alt="Logo"
          />
        </motion.figure>

        {(device === "mobile" || device === "tablet") && (
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
            className="md:hidden block px-6 text-base text-black font-trap font-semibold outline-0"
          >
            {isOpen ? "Close" : "Menu"}
          </motion.button>
        )}
      </div>

      {device === "mobile" || device === "tablet" ? (
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={navVariants}
              className="absolute top-full -translate-y-1.5 left-0 w-full h-svh flex flex-col justify-start gap-10 bg-[#f8f3e9] pt-5"
            >
              <ul className="px-6 flex flex-col items-start justify-start gap-3">
                {links.slice(0, 3).map((link, i) => (
                  <CustomLink
                    key={i}
                    index={i}
                    label={link.name}
                    path={link.path}
                    onClick={closeMenu}
                    customStyle={{ fontSize: linkFontSize }}
                  />
                ))}
              </ul>
              <ul className="px-6 flex flex-col items-start justify-start gap-3">
                {links.slice(3, 5).map((link, i) => (
                  <CustomLink
                    key={i}
                    index={i}
                    label={link.name}
                    path={link.path}
                    onClick={closeMenu}
                    customStyle={{ fontSize: linkFontSize }}
                  />
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      ) : (
        <nav className="w-[60%] h-fit bg-red-0 hidden md:flex flex-row justify-between items-center">
          <ul className="flex flex-row items-center gap-8">
            {links.slice(0, 3).map((link, i) => (
              <CustomLink
                key={i}
                index={i}
                label={link.name}
                path={link.path}
                customStyle={{ fontSize: linkFontSize }}
              />
            ))}
          </ul>
          <ul className="flex flex-row items-center gap-8">
            {links.slice(3, 5).map((link, i) => (
              <CustomLink
                key={i}
                index={i}
                label={link.name}
                path={link.path}
                customStyle={{ fontSize: linkFontSize }}
              />
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
