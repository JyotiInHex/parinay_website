import React from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import {
  Error,
  Info,
  Success,
  Warning,
} from "../../../public/assets/svg/alertsSymbols";

export default function CustomToast({ toasts = [], className }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className={clsx(
        "fixed inset-0 z-[300] p-3 lg:p-10 w-full h-fit pointer-events-none select-none",
        className
      )}
    >
      <AnimatePresence initial={false}>
        {toasts
          .slice(0, 3)
          .reverse()
          .map((toast, i, arr) => {
            const total = arr.length;
            const initialY = -i * 75;
            const hoverY = i * 10;
            const scale = 1 - i * 0.08;
            const zIndex = total - i;

            const {
              id,
              message = "Hmm... PORINOI got a little dizzy. Give it a sec and try again!",
              state = "neutral",
              direction = "center",
              timeStampView = true,
            } = toast;

            return (
              <motion.div
                key={`${i}_toast`}
                initial={{
                  y: -30,
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                exit={{
                  y: -30,
                  scale: 0.8,
                  opacity: 0,
                }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              >
                <motion.div
                  initial={{
                    translateY: i === 0 ? top : initialY,
                    scale,
                  }}
                  variants={{
                    hover: { scale: 1, translateY: hoverY },
                    tap: { scale: 1, translateY: hoverY },
                  }}
                  transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                  className={clsx(
                    "relative w-fit min-w-[90vw] max-w-[90vw] lg:min-w-[30vw] lg:max-w-[30vw] h-fit min-h-[90px] px-4 py-4 bg-white flex flex-col items-start justify-center rounded-xl shadow-[3px_4px_20px_#00000010] backdrop-blur-2xl first:pointer-events-auto pointer-events-none cursor-pointer",
                    getPosition(direction)
                  )}
                  style={{ zIndex }}
                  aria-label={id}
                >
                  <div className="flex items-center gap-2">
                    <figure>{getIcon(state)}</figure>
                    <p className="text-sm font-semibold font-porinoi-sans text-zinc-800">
                      {message}
                    </p>
                  </div>

                  {timeStampView && (
                    <span className="text-right text-xs font-medium font-mono text-zinc-400 mt-2">
                      {getTime()}
                    </span>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
      </AnimatePresence>
    </motion.div>
  );
}

const getPosition = (direction) => {
  const positions = {
    "top-right": "top-4 ml-auto",
    "top-left": "top-4 mr-auto",
    "top-center": "top-0 mx-auto",
    center: "mx-auto",
  };
  return positions[direction] || positions["top-right"];
};

const getTime = () => {
  const now = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = String(now.getDate()).padStart(2, "0");
  const year = now.getFullYear();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  return `${day}, ${month} ${date}, ${year} at ${hours}:${minutes} ${ampm}`;
};

const getIcon = (state) => {
  const icons = {
    success: <Success width={20} color={"#34C759"} />,
    error: <Error width={20} color={"#FF383C"} />,
    warning: <Warning width={20} color={"#FFCC00"} />,
    info: <Info width={20} color={"#0088FF"} />,
    neutral: "🔔",
  };
  return icons[state] || icons["neutral"];
};
