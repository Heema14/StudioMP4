import React from "react";

type Props = {
  CustomStyle: string;
  text: string;
};

const CustomBtn = ({ text, CustomStyle }: Props) => {
  return (
    <button
      className={`rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-red-600 text-white ${CustomStyle} px-8 py-4 duration-200 transition-all`}
    >
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-red-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span className="relative text-red-600 transition duration-300 group-hover:text-white ease">
        {text}
      </span>
    </button>
  );
};

export default CustomBtn;
