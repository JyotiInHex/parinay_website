"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

export function FadeInSlideTitle({ children, className }) {
  return (
    <motion.h2
      className={`${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.85 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.h2>
  );
}

export function LetterByLetterRevealTitle({
  children,
  className = "",
  delayStep = 0.05,
  blurAmount = 5,
}) {
  const isString = typeof children === "string";
  const letters = isString ? children.split("") : [];

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delayStep,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: `blur(${blurAmount}px)`,
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.h2
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`w-fit ${className}`}
    >
      {letters.map((chr, idx) => {
        const transition = {
          duration: 0.35,
          delay: idx * delayStep,
          ease: [0.33, 1, 0.68, 1],
        };

        return (
          <motion.span
            key={idx}
            className="inline-block whitespace-pre overflow-hidden"
            variants={childVariants}
            transition={transition}
          >
            {chr === " " ? "\u00A0" : chr}
          </motion.span>
        );
      })}
    </motion.h2>
  );
}

export function LineStaggerFlowTitle({
  children,
  className = "",
  delayStep = 0.25,
  wordsPerLine = 4,
}) {
  let lines = [];

  if (typeof children === "string") {
    const normalized = children
      .replace(/<br\s*\/?>\s*<br\s*\/?>/gi, "\n__GAP__\n")
      .replace(/<br\s*\/?>/gi, "\n");

    const rawLines = normalized.split("\n");

    rawLines.forEach((line) => {
      if (line === "__GAP__") {
        lines.push("__GAP__");
      } else {
        const words = line.trim().split(/\s+/);
        for (let i = 0; i < words.length; i += wordsPerLine) {
          lines.push(words.slice(i, i + wordsPerLine).join(" "));
        }
      }
    });
  } else {
    return <h2 className={className}>{children}</h2>;
  }

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delayStep,
      },
    },
  };

  const childVariants = {
    hidden: { y: 100 },
    visible: { y: 0 },
  };

  return lines.map((line, idx) => {
    if (line === "__GAP__") {
      return (
        <div
          key={`gap-${idx}`}
          className="h-8 sm:h-10 md:h-12"
          aria-hidden="true"
        />
      );
    }
    return (
      <motion.h2
        key={idx}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.5 }}
        variants={parentVariants}
        className={`inline-block h-auto overflow-hidden ${className}`}
      >
        <motion.span
          className="block w-full h-auto"
          variants={childVariants}
          transition={{
            duration: 0.45,
            delay: idx * delayStep,
            ease: [0.33, 1, 0.68, 1],
          }}
        >
          {line}
        </motion.span>
      </motion.h2>
    );
  });
}

export function WordStaggerFlowTitle({
  children,
  className = "",
  duration = 0.5,
  delayStep = 0.05,
}) {
  let words = [];

  if (typeof children === "string") {
    words = children.trim().split(/\s+/);
  } else {
    return <h2 className={className}>{children}</h2>;
  }

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delayStep,
      },
    },
  };

  const childVariants = {
    hidden: { y: 100 },
    visible: { y: 0 },
  };

  return (
    <motion.h2 className={clsx("flex flex-wrap gap-x-2", className)}>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={parentVariants}
          className={`w-fit h-fit overflow-hidden ${className}`}
        >
          <motion.span
            className="inline-block"
            variants={childVariants}
            transition={{
              duration: duration,
              ease: [0.33, 1, 0.68, 1],
              delay: idx * delayStep,
            }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </motion.h2>
  );
}
