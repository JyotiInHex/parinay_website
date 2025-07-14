import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Paragraph({ value, className }) {
  const blocks = value.split(/<br\s*\/?>/i);

  return (
    <>
      {blocks.map((block, idx) => (
        <ParagraphBlock key={idx} value={block} className={className} />
      ))}
    </>
  );
}

function ParagraphBlock({ value, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ").filter(Boolean);

  return (
    <p
      ref={ref}
      className={`flex flex-wrap leading-5 justify-between ${className}`}
    >
      {words.map((word, i) => (
        <AnimatedWord
          key={i}
          word={word}
          index={i}
          total={words.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}

const AnimatedWord = ({ word, index, total, progress }) => {
  const chars = word.split("");
  const wordStart = index / total;
  const wordEnd = wordStart + 1 / total;
  const step = (wordEnd - wordStart) / chars.length;
  return (
    <span className="mr-3 mt-3 relative inline-block">
      {chars.map((char, i) => {
        const charStart = wordStart + step * i;
        const charEnd = wordStart + step * (i + 1);
        return (
          <AnimatedChar
            key={i}
            char={char}
            range={[charStart, charEnd]}
            progress={progress}
          />
        );
      })}
    </span>
  );
};

const AnimatedChar = ({ char, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          color: "#000",
          opacity: 0.12,
          pointerEvents: "none",
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        {char}
      </span>
      <motion.span style={{ opacity, position: "relative", zIndex: 1 }}>
        {char}
      </motion.span>
    </span>
  );
};
