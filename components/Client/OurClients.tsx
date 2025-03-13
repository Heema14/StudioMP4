"use client";

import React, { useEffect, useState } from "react";
import TitleSecs from "../Helper/TitleSecs";
import CustomBtn from "../Helper/CustomBtn";
import { FaPlay } from "react-icons/fa";
import DivVideo from "./DivVideo";
import Image from "next/image";

const OurClients = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", showVideo);
  }, [showVideo]);

  return (
    <section id="ourClients" className="pb-16 pt-5 px-2 sm:px-0 relative">
      <div className="mx-auto container flex gap-8 lg:gap-0 lg:justify-between items-center lg:flex-row flex-col">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="lg:w-1/2 w-full text-center lg:text-start pr-0 lg:pr-16"
        >
          <TitleSecs
            styleTitle="lg:text-5xl text-4xl xl:leading-[60px] leading-[50px]"
            titleSec="The Best Solutions for Our Clients"
          />
          <div className="space-y-4 my-7">
            <p className="text-gray-500 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              veniam quasi! Velit ex fugit, explicabo enim, quam deleniti in
              ratione ipsa voluptas!
            </p>
            <p className="text-gray-500 text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium iusto eligendi ut aut doloremque consectetur nulla
              alias ab nihil magnam.
            </p>
          </div>

          <CustomBtn
            CustomStyle="text-white hover:bg-red-800 py-3"
            text="Read Our Story"
          />
        </div>

        <div
          data-aos="fade-left"
          className="relative lg:w-1/2 w-full z-10 group"
        >
          <div
            onClick={() => setShowVideo(true)}
            className="absolute w-20 h-20 top-[45%] left-[45%] cursor-pointer z-50 border-2 text-center border-white flex justify-center items-center rounded-full p-4 roundedVideo"
          >
            <FaPlay className="text-white w-10 h-10" />
          </div>

          <Image
            src="/images/img5.png"
            alt="image"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
      </div>

      {showVideo && <DivVideo setShowVideo={setShowVideo} />}
    </section>
  );
};

export default OurClients;
