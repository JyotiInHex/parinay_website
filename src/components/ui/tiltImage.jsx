"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const TiltImage = ({
  src,
  alt,
  width = 500,
  height = 500,
  className = "",
  delay = 0.5,
  initialRotate = 0,
  finalRotate = 0,
  initialY = 50,
  finalY = 0,
}) => {
  const ref = useRef(null);
  const altText =
    alt || `${src?.split("/").pop()?.split(".")[0] || "image"}_img`;

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  const handleMouseMove = (e) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;

    const offsetX = (e.clientX - bounds.left) / bounds.width;
    const offsetY = (e.clientY - bounds.top) / bounds.height;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      initial={{ opacity: 0, y: initialY, rotate: initialRotate }}
      animate={{ opacity: 1, y: finalY, rotate: finalRotate }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={`w-auto h-auto select-none pointer-events-auto ${className} transition-all duration-200 ease-linear`}
    >
      <figure className="w-fit h-fit">
        <Image
          src={src}
          alt={altText}
          width={width}
          height={height}
          className="w-1/2 md:w-full"
        />
      </figure>
    </motion.div>
  );
};
