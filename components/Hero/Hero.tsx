import React from "react";
import CustomBtn from "../Helper/CustomBtn";
import DivCard from "./DivCard";
import { FaCopy, FaFile, FaStar } from "react-icons/fa";
import TypeWriterEffect from "./TypeWriterEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto pt-16 px-2 sm:px-0 relative lg:mt-0 mt-16">
      <div className="w-full lg:flex lg:justify-between justify-center items-center flex-col lg:flex-row ">
        <div className=" lg:inline flex justify-center items-center flex-col lg:translate-y-16 translate-y-0 lg:w-1/2 w-auto">
          <h1 className="text-center lg:text-left lineAbove relative">
            <TypeWriterEffect />
          </h1>

          <CustomBtn
            CustomStyle="sm:mt-10 mt-6 hover:bg-red-600 hover:text-white px-12"
            text="Get Started"
          />
        </div>

        <div
          data-aos="fade-left"
          className="lg:w-1/2 h-[50vh] lg:scale-100 md:scale-150 aspect-square"
        >
          <Image
            className="object-cover"
            src="/images/img1.png"
            width={500}
            height={500}
            alt="Bg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full gap-4 relative top-[-6em] lg:top-[10em] left-0">
        <DivCard
          Icon={FaFile}
          title="Future Vision"
          dis="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis possimus libero"
        />
        <DivCard
          Icon={FaStar}
          title="Provedn Expertise"
          dis="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis possimus libero"
          isActive={true}
        />
        <DivCard
          Icon={FaCopy}
          title="Innovative Solutions"
          dis="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis possimus libero"
        />
      </div>
    </section>
  );
};

export default Hero;
