"use client";
import { useLenis } from "@/hooks/useLenis";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/shared/Header";
import CustomCursor from "@/components/ui/customCursor";
import Image from "next/image";
import { useToastFromCookie } from "@/hooks/useCookieToast";

export default function ClientWrapper({ children }) {
  useLenis();
  useToastFromCookie();
  const pathname = usePathname();
  const [showContent, setShowContent] = useState(false);
  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 550);

    return () => {
      setShowContent(false);
      clearTimeout(timeout);
    };
  }, [pathname]);

  return (
    <>
      <CustomCursor />

      {showContent && (
        <motion.main
          key={pathname}
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Header />
          <section className="mt-18 md:m-0">{children}</section>
        </motion.main>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          className="absolute inset-0 w-full h-screen bg-gradient-to-bl from-orange-500 to-pink-600  z-50 grid place-content-center select-none pointer-events-auto overflow-hidden"
          initial={{ scaleY: 1, transformOrigin: "top" }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1, transformOrigin: "bottom" }}
          transition={{ duration: 0.5, ease: "circInOut" }}
        >
          <figure className="flex flex-col items-center justify-center gap-1.5 md:gap-3.5">
            <Image
              src="/assets/svg/logo_white.svg"
              width={100}
              height={100}
              alt="Porinoi Logo"
              className="w-14 h-14 object-cover"
            />
            <figcaption className="text-white text-3xl lg:text-5xl font-porinoi-sans font-bold tracking-wide">
              Porinoi
            </figcaption>
          </figure>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
