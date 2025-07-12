"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "@/components/shared/Navigation";
import CustomCursor from "@/components/ui/customCursor";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const [showContent, setShowContent] = useState(false);

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 800);

    return () => {
      setShowContent(false);
      clearTimeout(timeout);
    };
  }, [pathname]);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {showContent && (
          <motion.main
            key={pathname}
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <Navigation />
            {children}
          </motion.main>
        )}

        <motion.div
          key={pathname + "-in"}
          className="slide-In absolute inset-0 w-full h-screen bg-gradient-to-bl from-orange-500 to-pink-600 origin-bottom z-50 grid place-content-center select-none pointer-events-auto overflow-hidden"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: "circInOut" }}
        >
          <figure className="flex flex-col items-center justify-center gap-1.5 md:gap-3.5">
            <Image
              src={"/assets/svg/logo_white.svg"}
              width={100}
              height={100}
              alt="logo_white"
              className="w-14 h-14 object-cover"
            />
            <figcaption className="text-white text-3xl lg:text-5xl font-trap font-bold tracking-wide">
              Parinay
            </figcaption>
          </figure>
        </motion.div>

        <motion.div
          key={pathname + "-out"}
          className="slide-out absolute inset-0 w-full h-screen bg-gradient-to-bl from-orange-500 to-pink-600 origin-top z-40 grid place-content-center select-none pointer-events-auto overflow-hidden"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: "circInOut" }}
        >
          <figure className="flex flex-col items-center justify-center gap-1.5 md:gap-3.5">
            <Image
              src={"/assets/svg/logo_white.svg"}
              width={100}
              height={100}
              alt="logo_white"
              className="w-14 h-14 object-cover"
            />
            <figcaption className="text-white text-3xl lg:text-5xl font-trap font-bold tracking-wide">
              Parinay
            </figcaption>
          </figure>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
