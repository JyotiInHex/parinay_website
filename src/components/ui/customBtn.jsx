"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Arrow from "../../../public/assets/svg/arrow";
import Arrow45deg from "../../../public/assets/svg/arrow45deg";
import clsx from "clsx";

export default function CustomBtn({ children, path = "#", icon = Boolean }) {
  const router = useRouter();

  const handleClick = () => {
    if (path && path !== "#") {
      router.push(path);
    }
  };

  return (
    <motion.button
      type="button"
      initial="initial"
      whileHover="hover"
      onClick={handleClick}
      className={`relative cursor-pointer  drop-shadow-lg flex flex-row items-center gap-0.5 md:gap-1`}
      aria-label={typeof children === "string" ? children : "Button"}
    >
      <span
        className={clsx(
          "inline-flex px-5 py-1.5 items-center gap-2 font-porinoi-sans font-semibold text-base md:text-lg text-white bg-blue-500"
        )}
      >
        {children}
      </span>
      {icon && <ArrowAnimation />}
    </motion.button>
  );
}

export const ArrowAnimation = ({ className }) => {
  return (
    <motion.div
      
      className={clsx(
        `w-8 h-8 p-5 flex items-center justify-center overflow-hidden transition-colors duration-500 ease-in-out bg-blue-500`,
        className
      )}
    >
      <span className="relative">
        <motion.span
          variants={{
            initial: { opacity: 0, x: -12, y: 12, scale: 0.5 },
            hover: { opacity: 1, x: 0, y: 0, scale: 1 },
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 35,
            duration: 0.5,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Arrow45deg width={20} height={20} className="text-white" />
        </motion.span>

        <motion.span
          variants={{
            initial: { opacity: 1, x: 0, y: 0, scale: 1 },
            hover: { opacity: 0, x: 12, y: -12, scale: 0.5 },
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 35,
            duration: 0.5,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Arrow45deg width={20} height={20} className="text-white" />
        </motion.span>
      </span>
    </motion.div>
  );
};

export const CustomBtn2 = ({
  children,
  type = "button",
  path = "",
  icon = true,
  className,
}) => {
  const router = useRouter();
  const handleClick = () => {
    if (path) router.push(path);
  };
  return (
    <button
      type={type}
      className={`relative w-fit py-2 px-4 overflow-hidden translate-z-0 before:w-full before:h-full before:absolute before:left-0 before:top-0 after:absolute after:inset-0 after:scale-y-0 after:origin-top after:bg-gradient-to-tr after:from-orange-600 after:to-pink-600 after:transition-transform after:duration-300 hover:after:scale-y-100 hover:after:origin-bottom cursor-pointer group shadow-md select-none ${className}`}
      onClick={handleClick}
    >
      <span className={clsx("relative z-10 inline-block text-base lg:text-xl font-semibold font-porinoi-sans transition-colors duration-500 group-hover:text-white")}>
        <span className="flex items-center gap-4 transition-all duration-300 transform scale-y-100 origin-bottom group-hover:scale-y-0 group-hover:origin-top group-hover:opacity-0">
          {children}
          {icon && (
            <Arrow
              width={20}
              height={20}
              className="-translate-x-1/2 translate-y-0 transform transition-transform duration-500 group-hover:translate-x-0 group-hover:-translate-y-0.5 -rotate-45"
            />
          )}
        </span>
        <span
          aria-hidden={true}
          className="absolute inset-0 flex items-center gap-4 text-inherit transition-all duration-300 transform scale-y-0 opacity-0 origin-top group-hover:scale-y-100 group-hover:origin-bottom group-hover:opacity-100"
        >
          {children}
          {icon && (
            <Arrow
              width={20}
              height={20}
              className="-translate-x-1/2 translate-y-0 transform transition-transform duration-500 group-hover:translate-x-0 group-hover:-translate-y-0.5"
            />
          )}
        </span>
      </span>
    </button>
  );
};
