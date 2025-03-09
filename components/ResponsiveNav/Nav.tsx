"use client";

import { navLink } from "@/constant/constant";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaArrowDown, FaCartArrowDown } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = ({ openNav }: { openNav: () => void }) => {
  const [navbg, setNavBg] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`mb-2 w-full px-2 sm:px-0 fixed z-40 h-[12vh] ${
        navbg ? "bg-white/90 shadow-md" : "fixed"
      }`}
    >
      <nav className="flex justify-between items-center container h-full mx-auto">
        <div>
          <Link
            href="/"
            className="text-5xl text-gray-900 font-messiri font-semibold select-none"
            onClick={() => setActiveLink("#Hero")}
          >
            StudioMP4<sub className="text-red-600 text-5xl">•</sub>
          </Link>
        </div>

        <div className="flex justify-center items-center gap-5">
          <ul className="xl:flex hidden xl:justify-center items-center gap-8">
            {navLink.map((link) => (
              <li key={link.id} className="relative group">
                <Link
                  href={link.url}
                  className={`relative text-base font-medium w-fit transition ${
                    activeLink === link.url ? "text-red-500" : "text-gray-900"
                  } hover:text-red-500`}
                  onClick={() => setActiveLink(link.url)}
                >
                  {link.label}

                  {link.childBlocks && (
                    <span className="ml-1 inline-flex align-middle">
                      <FaArrowDown className="w-3 h-3" />
                    </span>
                  )}
                </Link>

                {link.childBlocks && (
                  <div className="group-hover:block absolute top-7 hidden">
                    <ul className="bg-gray-800 rounded-md w-[180px] h-[140px] px-3 flex flex-col justify-center items-start gap-2">
                      {link.childBlocks.map((childBlock) => (
                        <li
                          key={childBlock.id}
                          className="w-full border-b border-red-500 pb-1"
                        >
                          <Link
                            href={childBlock.url}
                            className={`relative text-white hover:text-red-600 font-medium w-fit transition ${
                              activeLink === childBlock.url
                                ? "text-red-600"
                                : "text-white"
                            }`}
                            onClick={() => setActiveLink(childBlock.url)}
                          >
                            {childBlock.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <Link href="/cart" className="w-6 h-6 cursor-pointer">
            <FaCartArrowDown className="w-full h-full text-gray-500 hover:text-red-500" />
          </Link>

          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black xl:hidden"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
