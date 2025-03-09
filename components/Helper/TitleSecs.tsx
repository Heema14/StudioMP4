import React from "react";

const TitleSecs = ({
  titleSec,
  styleTitle,
}: {
  titleSec: String;
  styleTitle: string;
}) => {
  return (
    <h1 className={`text-gray-900 font-semibold font-messiri  ${styleTitle}`}>
      {titleSec}
    </h1>
  );
};

export default TitleSecs;
