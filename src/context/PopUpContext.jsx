"use client";
import { useContext, createContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export default function PopupProvider({ children }) {
  const [popupContent, setPopupContent] = useState(null);
  const openPopup = (content) => setPopupContent(content);
  const closePopup = () => setPopupContent(null);

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      <AnimatePresence>
        {popupContent && (
          <motion.div
            key="popUpBody"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 z-[100] w-full h-screen bg-zinc-800/55 backdrop-blur-sm my-auto p-3 flex place-content-center"
          >
            {popupContent}
          </motion.div>
        )}
      </AnimatePresence>
    </PopupContext.Provider>
  );
}
