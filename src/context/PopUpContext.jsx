"use client";

import { useContext, createContext, useState } from "react";

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export default function PopupProvider({ children }) {
  const [popupContent, setPopupContent] = useState(null);
  const openPopup = (content) => setPopupContent(content);
  const closePopup = () => setPopupContent(null);

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      {popupContent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-base font-medium font-porinoi-sans"
            >
              close
            </button>
            {popupContent}
          </div>
        </div>
      )}
    </PopupContext.Provider>
  );
}
