"use client";

import { useMotionValue, useSpring, motion } from "framer-motion";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

const CustomBtn = ({ path, name, style }) => {
  const elementScale = useMotionValue(0);
  const elementX = useMotionValue(0);
  const elementY = useMotionValue(0);

  const finalScale = useSpring(elementScale, { damping: 20, stiffness: 300 });
  const finalX = useSpring(elementX, { damping: 20, stiffness: 300 });
  const finalY = useSpring(elementY, { damping: 20, stiffness: 300 });

  const btnRef = useRef(null);

  useLayoutEffect(() => {
    const button = btnRef.current;

    const move = (e) => {
      const rect = button.getBoundingClientRect();
      elementX.set(e.clientX - rect.left - 50);
      elementY.set(e.clientY - rect.top - 50);
    };

    const scale = () => {
      elementScale.set(0.6);
    };

    const leave = () => {
      elementScale.set(0);
    };

    button.addEventListener("mousemove", move);
    button.addEventListener("mouseenter", scale);
    button.addEventListener("mouseleave", leave);

    return () => {
      button.removeEventListener("mousemove", move);
      button.removeEventListener("mouseenter", scale);
      button.removeEventListener("mouseleave", leave);
    };
  }, [elementX, elementY]);

  return (
    <Link href={path}>
      <div
        ref={btnRef}
        className="relative overflow-hidden inline-block px-6 py-3 text-lg md:text-base text-white font-trap font-normal  rounded-full border border-[#f9efdd] "
        style={style}
      >
        {name}
        <motion.span
          className="absolute inline-block bg-[#f9efdd] rounded-full w-[300px] h-[300px] -translate-x-[100%] -translate-y-[40%] mix-blend-difference"
          style={{
            scale: finalScale,
            translateX: finalX,
            translateY: finalY,
          }}
        />
      </div>
    </Link>
  );
};

export default CustomBtn;
