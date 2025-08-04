"use client";
import { createContext, useCallback, useState } from "react";

const PopUpContext = createContext();

export const PopUpProvider = ({ children }) => {
  const [activePopUp, setActivePopup] = useState(null);
  const [popUpProps, setPopUpProps] = useState({});

  const openPopUp = useCallback((popUpId, props = {}) => {
    setActivePopup(popUpId);
    setPopUpProps(props);
  }, []);

  const closePopup = useCallback(() => {
    setActivePopup(null);
    setPopUpProps({});
  }, []);

  return (
    <PopUpContext.Provider
      value={{ activePopUp, popUpProps, openPopUp, closePopup }}
    >
      {children}
    </PopUpContext.Provider>
  );
};

export const usePopup = () => useContext(PopUpContext);
