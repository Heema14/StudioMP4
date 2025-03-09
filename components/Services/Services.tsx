import React from "react";
import TitleSecs from "../Helper/TitleSecs";
import {
  FaCalendar,
  FaCopy,
  FaDesktop,
  FaFile,
  FaFolder,
  FaGithub,
  FaHelicopter,
  FaPhotoVideo,
} from "react-icons/fa";

const dataSevices = [
  {
    icon: <FaGithub className="w-full h-full text-red-600" />,
    title: "Search Engine Optimized",
    dis: "Lorem ipsum dolor sit, amet consectetur adipisicing Heema Yassin elit. Maxime, quod?",
  },
  {
    icon: <FaDesktop className="w-full h-full text-red-600" />,
    title: "Real Time & Data",
    dis: "Lorem ipsum dolor sit, amet consectetur adipisicing Heema Yassin elit. Maxime, quod?",
  },
  {
    icon: <FaCalendar className="w-full h-full text-red-600" />,
    title: "Online Media Manegment",
    dis: "Lorem ipsum dolor sit, amet consectetur adipisicing Heema Yassin elit. Maxime, quod?",
  },
  {
    icon: <FaFile className="w-full h-full text-red-600" />,
    title: "Reporting & Analytics",
    dis: "Lorem ipsum dolor sit, amet consectetur adipisicing Heema Yassin elit. Maxime, quod?",
  },
  {
    icon: <FaPhotoVideo className="w-full h-full text-red-600" />,
    title: "Resarsh & Sketching",
    dis: "Lorem ipsum dolor sit, amet consectetur adipisicing Heema Yassin elit. Maxime, quod?",
  },
  {
    icon: <FaFolder className="w-full h-full text-red-600" />,
    title: "SEO & Content Writing",
    dis: "Lorem ipsum dolor sit, amet consectetur adipisicing Heema Yassin elit. Maxime, quod?",
  },
  {
    icon: <FaCopy className="w-full h-full text-red-600" />,
    title: "Open Source",
    dis: "Lorem ipsum dolor sit, amet consectetur adipisicing Heema Yassin elit. Maxime, quod?",
  },
  {
    icon: <FaHelicopter className="w-full h-full text-red-600" />,
    title: "Help & Support",
    dis: "Lorem ipsum dolor sit, amet consectetur adipisicing Heema Yassin elit. Maxime, quod?",
  },
];

const Services = () => {
  return (
    <section id="bestService" className="lg:py-16 pb-0 px-2 sm:px-0 lg:mt-36">
      <div className="mx-auto container">
        <div data-aos="fade-top" className="text-center">
          <TitleSecs
            styleTitle="sm:text-5xl text-4xl leading-[42px] lg:leading-0"
            titleSec="We are here to give the best service!"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-12 place-items-center lg:mt-16 mb-16 lg:mb-0">
          {dataSevices.map((data, index) => {
            return (
              <div
                data-aos-delay={index * 150}
                data-aos="fade-top"
                key={index}
                className="flex justify-center items-center flex-col text-center gap-4 px-6 py-8 rounded-md border hover:border-red-600 hover:shadow-md"
              >
                <div className="w-10 h-10">{data.icon}</div>

                <div className="flex flex-col gap-2">
                  <p className="font-semibold">{data.title}</p>
                  <p className="text-gray-500">{data.dis}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
