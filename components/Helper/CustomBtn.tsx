import React from "react";

type Props = {
  CustomStyle: string;
  text: string;
};

const CustomBtn = ({ text, CustomStyle }: Props) => {
  return (
    <button className={`${CustomStyle} px-8 py-4 duration-200 transition-all`}>
      {text}
    </button>
  );
};

export default CustomBtn;
