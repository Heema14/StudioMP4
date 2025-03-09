"use client";

import React, { useState } from "react";
import TitleSecs from "../Helper/TitleSecs";
import Image from "next/image";

const imgsBrand = [
  {
    id: 1,
    img: "/images/brands/b2.png",
  },
  {
    id: 2,
    img: "/images/brands/b2.png",
  },
  {
    id: 3,
    img: "/images/brands/b3.png",
  },
  {
    id: 4,
    img: "/images/brands/b4.png",
  },
];

const imgsLogo = [
  {
    id: 1,
    img: "/images/logos/l1.jpg",
  },
  {
    id: 2,
    img: "/images/logos/l2.jpg",
  },
  {
    id: 3,
    img: "/images/logos/l3.jpg",
  },
  {
    id: 4,
    img: "/images/logos/l4.jpg",
  },
  {
    id: 5,
    img: "/images/logos/l2.jpg",
  },
];

const imgsSections = [
  {
    id: 1,
    img: "/images/sections/s1.jpg",
  },
  {
    id: 2,
    img: "/images/sections/s2.jpg",
  },
  {
    id: 3,
    img: "/images/sections/s3.jpg",
  },
  {
    id: 4,
    img: "/images/sections/s4.jpg",
  },
  {
    id: 5,
    img: "/images/sections/s5.jpg",
  },
];

const ToggleChooses = () => {
  const [showSec, setShowSec] = useState<string>("brand");

  return (
    <section
      id="ToggleChooses"
      className="px-2 sm:px-0 py-16 mb-24 bg-gray-950"
    >
      <div className="mx-auto container">
        <div className="text-center">
          <TitleSecs
            styleTitle="text-white font-semibold sm:text-6xl text-4xl relative wordbefore z-10"
            titleSec="Works"
          />
        </div>

        <div className="flex justify-center items-center lg:gap-52 sm:gap-24 gap-7 mt-12">
          <button
            onClick={() => setShowSec("brand")}
            className="cursor-pointer hover:text-red-500 text-gray-200 hover:bg-transparent focus:outline-none bg-red-600 font-semibold px-5 sm:px-8 py-3 rounded-md"
          >
            Branding
          </button>
          <button
            onClick={() => setShowSec("logo")}
            className="cursor-pointer hover:text-red-500 text-gray-200 hover:bg-transparent focus:outline-none bg-red-600 font-semibold px-5 sm:px-8 py-3 rounded-md"
          >
            Logo
          </button>
          <button
            onClick={() => setShowSec("section")}
            className="cursor-pointer hover:text-red-500 text-gray-200 hover:bg-transparent focus:outline-none bg-red-600 font-semibold px-5 sm:px-8 py-3 rounded-md"
          >
            Sections
          </button>
        </div>

        <div className="text-white mt-20">
          {/* Div Brand */}
          {showSec == "brand" && (
            <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
              {imgsBrand.map((img) => {
                return (
                  <div
                    key={img.id}
                    className="bg-slate-900 rounded-lg p-5 sm:w-72 w-9/12 lg:w-80 md:w-72 aspect-square group"
                  >
                    <Image
                      src={img.img}
                      alt=""
                      width={500}
                      height={500}
                      className="h-full w-full object-cover rounded-full group-hover:scale-105"
                    />
                  </div>
                );
              })}
            </article>
          )}

          {/* Div Logo */}
          {showSec == "logo" && (
            <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
              {imgsLogo.map((img) => {
                return (
                  <div
                    key={img.id}
                    className="bg-slate-900 rounded-sm p-2 sm:w-72 w-9/12 lg:w-80 md:w-72 aspect-square group"
                  >
                    <Image
                      src={img.img}
                      alt=""
                      width={500}
                      height={500}
                      className="h-full w-full object-cover group-hover:scale-105"
                    />
                  </div>
                );
              })}
            </article>
          )}

          {/* Div Section */}
          {showSec == "section" && (
            <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
              {imgsSections.map((img) => {
                return (
                  <div
                    key={img.id}
                    className="bg-slate-900 rounded-sm p-2 sm:w-72 w-9/12 lg:w-80 md:w-72 aspect-square group"
                  >
                    <Image
                      src={img.img}
                      alt=""
                      width={500}
                      height={500}
                      className="h-full w-full object-cover group-hover:scale-105"
                    />
                  </div>
                );
              })}
            </article>
          )}
        </div>
      </div>
    </section>
  );
};

export default ToggleChooses;
