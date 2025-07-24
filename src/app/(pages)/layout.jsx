"use client";
import React, { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/shared/Footer";

const layout = ({ children }) => {
  const [isShow, setIsShow] = useState(true);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setIsShow(true);
    }, 500);

    return () => {
      setIsShow(false);
      clearTimeout(timeout);
    };
  }, [pathname]);
  return (
    <>
      {isShow && (
        <div className="select-none">
          {children} <Footer />
        </div>
      )}
    </>
  );
};

export default layout;
