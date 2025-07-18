"use client";

import { motion, AnimatePresence } from "framer-motion";

const LayoutWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.65, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
};

export default LayoutWrapper;
