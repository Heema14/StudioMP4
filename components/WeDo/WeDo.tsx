import React, { useRef } from "react";
import TitleSecs from "../Helper/TitleSecs";
import CountUp from "react-countup";
import { useInView } from "motion/react";

const weDo = [
  {
    number: 2842,
    text: "Projects",
  },
  {
    number: 163,
    text: "Ideas",
  },
  {
    number: 853,
    text: "Users",
  },
];

const WeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="pb-16 px-2 sm:px-0 relative lineUnder mb-40">
      <div className="mx-auto container flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:gap-0 gap-16">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="lg:w-1/2 w-full text-center lg:text-start pr-0 lg:pr-16 flex justify-center lg:items-start items-center flex-col gap-4"
        >
          <TitleSecs
            styleTitle="text-gray-900 font-semibold sm:text-5xl text-4xl"
            titleSec="What We Do"
          />
          <p className="text-gray-500 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum a
            illo labore amet repellendus quidem similique laborum harum,
            consectetur ullam quibusdam!
          </p>
        </div>

        <div
          data-aos="fade-left"
          className="flex justify-between items-center lg:w-[50%] w-10/12 text-center -translate-y-5"
        >
          {weDo.map((item, index) => {
            return (
              <div ref={ref} key={index}>
                {/* render the component just when is view isInView is true*/}
                {isInView && (
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={6}
                    className="sm:text-5xl text-4xl text-gray-900 font-bold"
                  />
                )}
                <p className="text-red-600 sm:text-2xl text-xl">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeDo;
