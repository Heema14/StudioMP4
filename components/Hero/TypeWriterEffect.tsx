import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriterEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Digital Products for Business",
        1000,
        "Digital for Works",
        1000,
        "Let's Go to our Jobs",
        1000,
        "we a Digital Workers",
        1000,
      ]}
      wrapper="span"
      speed={40}
      className="xl:text-7xl sm:text-6xl text-5xl sm:leading-[65px] leading-[50px] font-semibold xl:max-w-2xl lg:max-w-lg max-w-md xl:leading-[85px] tracking-wide font-messiri"
      repeat={Infinity}
    />
  );
};

export default TypeWriterEffect;
