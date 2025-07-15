import Image from "next/image";
import { motion } from "framer-motion";

const ImageCard = ({
  imagePath,
  width,
  height,
  alt = "img",
  isClickable = false,
  className,
}) => {
  return (
    <>
      <motion.span
        initial={{ opacity: 0, y: 50, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: -3 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55, ease: "anticipate" }}
        className="block absolute inset-0 -z-1 rounded-xl w-full h-full bg-gradient-to-tr from-orange-600 to-pink-600"
      ></motion.span>
      <motion.figure
        initial={{ opacity: 0, y: 50, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: 3 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55, ease: "anticipate" }}
        className="p-[2px] w-full h-auto max-h-[55vh] overflow-hidden bg-gradient-to-tr from-orange-600 to-pink-600 rounded-xl"
      >
        <Image
          src={imagePath}
          width={width}
          height={height}
          alt={alt}
          className={`${className} object-cover`}
        />
      </motion.figure>
    </>
  );
};

export default ImageCard;
