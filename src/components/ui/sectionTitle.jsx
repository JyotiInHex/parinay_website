import { motion } from "framer-motion";

const SectionTitle = ({ children, className }) => {
  return (
    <motion.h2
      className={`${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle;
