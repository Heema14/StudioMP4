import React from "react";
import { IconType } from "react-icons";

const DivCard = ({
  Icon,
  dis,
  title,
  isActive = false, // Default to false
}: {
  Icon: IconType;
  dis: string;
  title: string;
  isActive?: boolean; // Optional prop
}) => {
  return (
    <div
      data-aos="fade-right"
      className={`xl:px-4 lg:px-2 md:px-4 md:w-[380px] px-8 sm:py-20 py-12 xl:w-[380px] lg:w-[330px] border-red-600 border hover:bg-red-600 text-center md:text-left group ${
        isActive ? "bg-red-600 text-white" : "bg-white"
      }`}
    >
      <div className="mb-5 md:translate-x-0 translate-x-[45%]">
        <Icon
          className={`w-10 h-10 ${
            isActive ? "text-white" : "text-red-600"
          } group-hover:text-white`}
        />
      </div>
      <h3
        className={`${
          isActive ? "text-white" : "text-gray-800"
        } group-hover:text-white`}
      >
        {title}
      </h3>
      <hr
        className={`w-[100%] md:w-[20%] h-0.5 ${
          isActive ? "bg-white" : "bg-red-600"
        } mb-4 mt-2 group-hover:bg-white rounded-full`}
      />
      <p className={`${isActive ? "text-white" : ""} group-hover:text-white`}>
        {dis}
      </p>
    </div>
  );
};

export default DivCard;
