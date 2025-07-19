"use client";
import { motion, AnimatePresence } from "framer-motion";

const AuthBackground = () => {
  return (
    <>
      <motion.div
        key={"One"}
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 400 }}
        className="absolute top-1/12 lg:top-1/4  grid grid-cols-5 md:grid-cols-10 gap-5 w-max h-auto select-none pointer-events-none -z-[1] -left-5"
      >
        {[...Array(10)].map((_, i) => {
          return (
            <div
              key={i}
              className="w-fit h-auto flex flex-row gap-5 lg:odd:-translate-y-32 lg:even:-translate-y-10"
            >
              {[...Array(2)].map((_, i) => {
                return (
                  <div
                    key={i}
                    className="w-fit h-fit flex flex-col gap-5 even:translate-y-28  lg:even:translate-y-40"
                  >
                    <div className="block w-[150px] h-[200px] bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl opacity-10 hover:rotate-12"></div>
                    <div className="block w-[150px] h-[200px] bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl opacity-10"></div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </motion.div>
      <motion.div
        key={"Two"}
        animate={{ x: ["100%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 400 }}
        className="absolute top-1/12 lg:top-1/4  grid grid-cols-5 md:grid-cols-10 gap-5 w-max h-auto select-none pointer-events-none -z-[1]"
      >
        {[...Array(10)].map((_, i) => {
          return (
            <div
              key={i}
              className="w-fit h-auto flex flex-row gap-5 lg:odd:-translate-y-32 lg:even:-translate-y-10"
            >
              {[...Array(2)].map((_, i) => {
                return (
                  <div
                    key={i}
                    className="w-fit h-fit flex flex-col gap-5 even:translate-y-28  lg:even:translate-y-40"
                  >
                    <div className="block w-[150px] h-[200px] bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl opacity-10 hover:rotate-12"></div>
                    <div className="block w-[150px] h-[200px] bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl opacity-10"></div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default AuthBackground;
