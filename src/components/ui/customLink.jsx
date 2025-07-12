"use client";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

export const CustomLink = ({
  index = 0,
  label,
  path = "",
  customStyle,
  onClick,
  type = "link", // "link" or "button"
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === path;

  const containerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  };

  const letterVariants = {
    initial: { y: 0 },
    hovered: { y: "-100%" },
  };

  const overlayVariants = {
    initial: { y: "100%" },
    hovered: { y: 0 },
  };

  const commonProps = {
    variants: containerVariants,
    initial: "initial",
    animate: "animate",
    whileHover: "hovered",
    transition: {
      delay: index / 10,
      type: "spring",
      stiffness: 180,
      damping: 15,
      ease: "anticipate",
    },
    className:
      "relative block md:h-5 overflow-hidden list-none whitespace-nowrap select-none",
    style: { height: "auto" },
  };

  const labelLetters = label.replace(/_/g, " ").split("");

  const renderAnimatedText = (variantType) =>
    labelLetters.map((l, i) => (
      <motion.span
        key={i}
        variants={variantType}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
          delay: 0.025 * i,
        }}
        className="inline-block text-base font-medium font-trap text-zinc-800 cursor-pointer"
        style={{
          ...customStyle,
          color: isActive ? "#e60076" : "#27272a",
          fontWeight: isActive ? 600 : "normal",
        }}
      >
        {l === " " ? "\u00A0" : l}
      </motion.span>
    ));

  return type === "button" ? (
    <motion.button
      {...commonProps}
      onClick={onClick}
      type="button"
      aria-label={label}
    >
      <span>{renderAnimatedText(letterVariants)}</span>
      <span className="absolute inset-0 whitespace-nowrap cursor-pointer">
        {renderAnimatedText(overlayVariants)}
      </span>
    </motion.button>
  ) : (
    <motion.button
      type="button"
      onClick={() => router.push(path)}
      {...commonProps}
    >
      <span>{renderAnimatedText(letterVariants)}</span>
      <span className="absolute inset-0 whitespace-nowrap">
        {renderAnimatedText(overlayVariants)}
      </span>
    </motion.button>
  );
};
