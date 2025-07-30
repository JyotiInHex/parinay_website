"use client";
import React, { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/shared/Footer";

export default function PageLayout({ children }) {
  const [isShow, setIsShow] = useState(false);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setIsShow(true);
    }, 650);

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
}
