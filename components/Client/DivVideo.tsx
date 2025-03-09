"use client";

import React from "react";
import { CgClose } from "react-icons/cg";

const DivVideo = ({
  setShowVideo,
}: {
  setShowVideo: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setShowVideo(false)}
      className="fixed z-50 inset-0 w-screen h-screen md:p-16 p-8 bg-black/80 flex justify-center items-center"
    >
      <div className="absolute top-8 right-20 cursor-pointer border border-red-400 flex justify-center items-center w-10 h-10 rounded-full hover:bg-red-500 duration-200">
        <CgClose
          onClick={() => setShowVideo(false)}
          className="sm:w-7 sm:h-7 w-6 h-6 text-white"
        />
      </div>

      <div onClick={(e) => e.stopPropagation()} className="w-full h-full">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/M5QY2_8704o?si=E9e_k3aukA-5UbKu"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DivVideo;
