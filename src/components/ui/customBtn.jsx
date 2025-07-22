"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Arrow from "../../../public/assets/svg/arrow";

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
        className={`inline-flex items-center gap-2 font-porinoi-sans font-semibold text-base md:text-lg text-white bg-gradient-to-tr from-orange-600 bg-pink-600 hover:from-pink-600 hover:to-orange-600 transition-colors duration-500 ease-in-out rounded-full`}
        style={{ padding: "0.6rem 2rem" }}
      >
        {children}
      </span>
      {icon && <ArrowAnimation />}
    </motion.button>
  );
}

export const ArrowAnimation = ({ className }) => {
  return (
    <span
      aria-hidden="true"
      className={`w-8 h-8 px-[21px] py-[21px] flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-orange-600 bg-pink-600 hover:from-pink-600 hover:to-orange-600 transition-colors duration-500 ease-in-out ${className}`}
    >
      <div className="relative">
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
          <Arrow width={20} height={20} className="text-white" />
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
          <Arrow width={20} height={20} className="text-white" />
        </motion.span>
      </div>
    </span>
  );
};

export const CustomBtn2 = ({
  children,
  type = "button",
  path = "",
  icon = true,
}) => {
  const router = useRouter();
  const handleClick = () => {
    if (path) router.push(path);
  };
  return (
    <button
      type={type}
      className="relative w-fit text-black py-2 px-4 overflow-hidden translate-z-0 before:bg-white before:w-full before:h-full before:absolute before:left-0 before:top-0 after:absolute after:inset-0 after:scale-y-0 after:origin-top after:bg-gradient-to-tr after:from-orange-600 after:to-pink-600 after:transition-transform after:duration-300 hover:after:scale-y-100 hover:after:origin-bottom cursor-pointer group shadow-md select-none"
      onClick={handleClick}
    >
      <span className="relative z-10 inline-block text-base text-zinc-800 font-semibold font-porinoi-sans transition-colors duration-500 group-hover:text-white ">
        <span className="flex items-center gap-4 transition-all duration-300 transform scale-y-100 origin-bottom group-hover:scale-y-0 group-hover:origin-top group-hover:opacity-0">
          {children}
          {icon && (
            <Arrow
              width={20}
              height={20}
              className="-translate-x-1/2 translate-y-0 transform transition-transform duration-500 group-hover:translate-x-0 group-hover:-translate-y-0.5"
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
