import { navLink } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
import {
  FaArrowDown,
  FaCartArrowDown,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaMusic,
  FaTwitter,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const MobileNav = ({
  closeNav,
  showNav,
}: {
  showNav: boolean;
  closeNav: () => void;
}) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <section>
      {/* Ovelay */}
      <div
        onClick={closeNav}
        className={`fixed ${navOpen} inset-0 transform transition-all duration-300 z-50 bg-black opacity-70 w-full h-screen`}
      ></div>

      {/* navLink */}
      <ul
        onClick={(e) => e.stopPropagation()}
        className={`text-white ${navOpen} fixed pt-6 flex flex-col h-full transform transition-all justify-center gap-12 duration-300 delay-300 w-[80%] sm:w-[64%] bg-gray-800 z-50 top-0`}
      >
        {/* logo */}
        <a href="#" className="flex items-center translate-x-4 mt-8 gap-3">
          <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-col">
            <FaMusic className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl block md:text-3xl text-white font-messiri font-semibold">
            StudioMP4
          </h1>
        </a>

        <ul className="space-y-3">
          {navLink.map((l) => {
            return (
              <Link href={l.url} key={l.id} className="group">
                <div className="flex items-center hover:pl-3 translate-x-4 space-y-2">
                  <span className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0">
                    <IoIosArrowForward />
                  </span>
                  <span className="text-white hover:text-red-500 w-fit text-base ml-3 sm:text-xl">
                    {l.label}

                    {l.childBlocks && (
                      <span className="ml-1 inline-flex align-middle">
                        <FaArrowDown className="w-3 h-3" />
                      </span>
                    )}
                  </span>
                </div>

                <div className="group-hover:block group-hover:h-auto h-0 hidden translate-y-[20px] group-hover:translate-y-0 ml-10">
                  {l.childBlocks && (
                    <ul className="bg-gray-800 rounded-md p-4 flex flex-col justify-center items-start gap-2">
                      {l.childBlocks.map((childBlock) => {
                        return (
                          <Link href={childBlock.url} key={childBlock.id}>
                            <p className="relative text-white hover:text-red-600 w-fit after:block after:content-[''] after:absolute after:h-0.5 after:bg-red-600 after:w-0 after:hover:w-[80%] after:rounded-full after:transition-all">
                              {childBlock.label}
                            </p>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </Link>
            );
          })}

          <Link
            href="#"
            className="flex items-center duration-300 hover:pl-3 translate-x-4 group"
          >
            <span className="opacity-0 translate-x-[-10px] duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <IoIosArrowForward />
            </span>
            <Link
              href="/cart"
              className="text-white hover:text-gray-300 w-fit text-base ml-3 sm:text-xl"
            >
              <FaCartArrowDown className="w-6 h-6 text-gray-500 hover:text-red-500 cursor-pointer" />
            </Link>
          </Link>

          <hr className="w-[80%] translate-x-6 rounded" />
        </ul>

        <div className="flex items-center translate-x-10 space-x-2 md:space-x-4">
          <span className="font-semibold text-white">Social: </span>
          <Link
            href="#"
            className="md:w-9 md:h-9 w-8 h-8 border border-red-600 rounded-full hover:bg-blue-600 flex justify-center items-center"
          >
            <FaFacebook className="md:h-5 md:w-5 h-4 w-4 text-white" />
          </Link>
          <Link
            href="#"
            className="md:w-9 md:h-9 w-8 h-8 border border-red-600 rounded-full hover:bg-blue-600 flex justify-center items-center"
          >
            <FaTwitter className="md:h-5 md:w-5 h-4 w-4 text-white" />
          </Link>
          <Link
            href="#"
            className="md:w-9 md:h-9 w-8 h-8 border border-red-600 rounded-full hover:bg-red-600 flex justify-center items-center"
          >
            <FaInstagram className="md:h-5 md:w-5 h-4 w-4 text-white" />
          </Link>
          <Link
            href="#"
            className="md:w-9 md:h-9 w-8 h-8 border border-red-600 rounded-full hover:bg-gray-600 flex justify-center items-center"
          >
            <FaGithub className="md:h-5 md:w-5 h-4 w-4 text-white" />
          </Link>
        </div>

        <div
          onClick={closeNav}
          className="absolute top-8 right-12 cursor-pointer border border-gray-200 flex justify-center items-center w-10 h-10 rounded-full hover:bg-slate-700 duration-200"
        >
          <CgClose className="sm:w-7 sm:h-7 w-6 h-6" />
        </div>
      </ul>
    </section>
  );
};

export default MobileNav;
