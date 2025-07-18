"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useLayoutEffect } from "react";

export const TooltipText = ({
  children,
  tooltip,
  className = "",
  customStyle,
}) => {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useLayoutEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={ref}
      className={`relative inline-block group ${className}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={handleMouseMove}
      onClick={() => setShow(!show)}
    >
      <p className="cursor-pointer">{children}</p>

      <AnimatePresence>
        {show && (
          <motion.span
            key="tooltip"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              x: -coords.x,
              y: coords.y,
            }}
            exit={{ opacity: 0, y: 10}}
            transition={{ duration: 0.2, ease: "linear" }}
            className="hidden md:block absolute -bottom-full left-0 md:w-max px-3 py-1 text-base text-white font-trap font-normal rounded shadow-md z-50 pointer-events-none select-none whitespace-nowrap"
            style={{
              ...customStyle,
              transform: "translate(50%, -50%)",
            }}
          >
            {tooltip}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};
