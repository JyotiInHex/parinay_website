"use client";
import React, { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  const [isShow, setIsShow] = useState(true);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setIsShow(true);
    }, 800);

    return () => {
      setIsShow(false);
      clearTimeout(timeout);
    };
  }, [pathname]);
  return <>{isShow && children}</>;
};

export default layout;
