"use client";

import React, { useEffect, useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed lg:bottom-8 animate-bounce lg:right-8 bottom-5 right-5 ">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-black w-12 h-12 flex items-center justify-center text-xl font-extrabold rounded-full text-white shadow-[-4px_-2px_37px_8px_#a3bffa]"
        >
          <HiOutlineArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
