"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 300) setShow(true);
      else setShow(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [show]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 animate-bounce right-4 z-40">
      {show && (
        <button
          onClick={scrollToTop}
          className="bg-red-500 hover:bg-red-600 text-white rounded-full w-12 h-12 flex justify-center items-center focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
