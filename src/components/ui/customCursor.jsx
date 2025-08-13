"use client";
import { useMotionValue, useSpring } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseWidth = useMotionValue(20);
  const mouseHeight = useMotionValue(20);

  const cursorX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const cursorY = useSpring(mouseY, { damping: 20, stiffness: 300 });
  const cursorWidth = useSpring(mouseWidth, { damping: 20, stiffness: 300 });
  const cursorHeight = useSpring(mouseHeight, { damping: 20, stiffness: 300 });

  useLayoutEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 5);
      mouseY.set(e.clientY - 5);
    };
    const enter = () => {
      mouseWidth.set(20);
      mouseHeight.set(20);
    };
    const leave = () => {
      mouseWidth.set(0);
      mouseHeight.set(0);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="hidden lg:block pointer-events-none fixed z-[500] bg-zinc-500 mix-blend-difference rounded-full -translate-x-1/2 -translate-y-1/2"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        width: cursorWidth,
        height: cursorHeight,
      }}
      transition={{ duration: 0.3, type: "spring", bounce: 0.25 }}
    />
  );
};

export default CustomCursor;
