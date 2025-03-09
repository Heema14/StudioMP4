import React from "react";
import TitleSecs from "../Helper/TitleSecs";
import CustomBtn from "../Helper/CustomBtn";
import SwiperSec from "./SwiperSec";

const SelectProjects = () => {
  return (
    <section id="selectedProjects" className="px-2 sm:px-0 mb-12">
      <div className="mx-auto container">
        <div data-aos="fade-top" className="flex justify-between relative ">
          <div>
            <TitleSecs
              styleTitle="lineAbove after:w-[8%] sm:after:w-[5%] after:left-0  text-gray-900 font-semibold text-gray-900 font-semibold lg:text-5xl sm:text-4xl text-2xl"
              titleSec="Selected Projects."
            />
            <p className="uppercase text-red-600 sm:text-lg text-sm font-medium mt-1">
              Case Studies
            </p>
          </div>

          <div>
            <CustomBtn
              CustomStyle="border border-red-600 hover:bg-red-600 hover:text-white px-8 sm:px-14 py-4"
              text="View All"
            />
          </div>
        </div>
      </div>

      <SwiperSec />
    </section>
  );
};

export default SelectProjects;
