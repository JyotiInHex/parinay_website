"use client";
import { useContext, useState, createContext } from "react";
import CustomToast from "@/components/ui/customToast";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const ThrowToast = (data) => {
    const id = Date.now();
    const newToast = { ...data, id };

    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, data.timeOut || 5000);
  };

  return (
    <ToastContext.Provider value={{ ThrowToast }}>
      {children}
      <CustomToast toasts={toasts} />
    </ToastContext.Provider>
  );
}
