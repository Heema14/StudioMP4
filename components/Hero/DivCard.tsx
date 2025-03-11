import React from "react";
import { IconType } from "react-icons";

const DivCard = ({
  Icon,
  dis,
  title,
}: {
  Icon: IconType;
  dis: string;
  title: string;
}) => {
  return (
    <div
      data-aos="fade-right"
      className="xl:px-4 lg:px-2 md:px-4 md:w-[380px] px-8 sm:py-20 py-12 xl:w-[380px] lg:w-[330px] bg-white border-red-600 border hover:bg-red-600 text-center md:text-left group"
    >
      <div className="mb-5 md:translate-x-0 translate-x-[45%]">
        <Icon className="w-10 h-10  text-red-600 group-hover:text-white" />
      </div>
      <h3 className="group-hover:text-white text-gray-800">{title}</h3>
      <hr className="w-[100%] md:w-[20%] h-0.5 bg-red-600 mb-4 mt-2 group-hover:bg-white rounded-full" />
      <p className="group-hover:text-white">{dis}</p>
    </div>
  );
};

export default DivCard;
