import { navLink } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
import { FaArrowDown } from "react-icons/fa";

const MobileNav = ({
  closeNav,
  showNav,
}: {
  showNav: boolean;
  closeNav: () => void;
}) => {
  const navOpen = showNav ? "translate-y-0" : "translate-y-[-100%]";

  return (
    <section>
      {/* Ovelay */}
      <div
        onClick={closeNav}
        className={`fixed ${navOpen} inset-0 transform transition-all duration-300 z-50 bg-black/50 w-full h-screen`}
      ></div>

      {/* navLink */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={` ${navOpen} fixed py-12 transform text-center duration-300 delay-300 w-full bg-white z-50 top-0`}
      >
        <ul className="space-y-3 flex flex-col justify-center items-center">
          {navLink.map((l) => {
            return (
              <Link href={l.url} key={l.id} className="group">
                <div>
                  <span className="text-gray-900 hover:text-red-500 font-semibold w-fit text-base sm:text-xl">
                    {l.label}

                    {l.childBlocks && (
                      <span className="ml-1 inline-flex align-middle">
                        <FaArrowDown className="w-3 h-3" />
                      </span>
                    )}
                  </span>
                </div>

                <div className="group-hover:block group-hover:h-auto h-0 hidden translate-y-[20px] group-hover:translate-y-0">
                  {l.childBlocks && (
                    <ul className="py-3 flex flex-col justify-center items-center gap-2">
                      {l.childBlocks.map((childBlock) => {
                        return (
                          <Link href={childBlock.url} key={childBlock.id}>
                            <p className="relative text-gray-900 font-semibold hover:text-red-600 w-fit">
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
        </ul>

        <div
          onClick={closeNav}
          className="absolute top-8 right-12 cursor-pointer border border-red-600 flex justify-center items-center w-10 h-10 rounded-full hover:bg-red-600 hover:text-white text-red-600 duration-200"
        >
          <CgClose className="sm:w-7 sm:h-7 w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default MobileNav;
