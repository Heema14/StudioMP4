import React from "react";
import TitleSecs from "../Helper/TitleSecs";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ProfessionalData = [
  {
    id: 1,
    img: "/images/c1.jpg",
    name: "Waleed Algerbawee",
    subTitl: "Senior Digital",
    url: "#",
    social: {
      facebook: <FaFacebook className="w-5 h-5 text-white" />,
      twitter: <FaTwitter className="w-5 h-5 text-white" />,
      instegram: <FaInstagram className="w-5 h-5 text-white" />,
    },
  },
  {
    id: 2,
    img: "/images/c2.jpg",
    name: "Memo Abu Jiab",
    subTitl: "Front end developer",
    url: "#",
    social: {
      facebook: <FaFacebook className="w-5 h-5 text-white" />,
      twitter: <FaTwitter className="w-5 h-5 text-white" />,
      instegram: <FaInstagram className="w-5 h-5 text-white" />,
    },
  },
  {
    id: 3,
    img: "/images/c3.jpg",
    name: "Mohamed Farag allh",
    subTitl: "Back end developer",
    url: "#",
    social: {
      facebook: <FaFacebook className="w-5 h-5 text-white" />,
      twitter: <FaTwitter className="w-5 h-5 text-white" />,
      instegram: <FaInstagram className="w-5 h-5 text-white" />,
    },
  },
];

const Profissonales = () => {
  return (
    <section id="professional" className="pb-16 px-2 sm:px-0 relative mb-10">
      <div className="mx-auto container">
        <div data-aos="fade-top" className="text-center">
          <TitleSecs
            styleTitle="text-gray-900 font-semibold font-semibold sm:text-5xl text-4xl"
            titleSec="Our Professional"
          />
          <p className="text-gray-500 max-w-sm mx-auto mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eum?
          </p>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-6 xl:gap-0 mt-10">
          {ProfessionalData.map((data, i) => {
            return (
              <div
                data-aos="fade-left"
                data-aos-delay={i * 150}
                className="relative md:w-[360px] sm:w-[280px] sm:h-[280px] md:h-[360px] w-[320px] h-[320px] flex justify-center items-center flex-col text-center gap-4 duration-200 group"
                key={data.id}
              >
                <Image
                  src={data.img}
                  alt={data.name}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full rounded-full duration-200"
                />

                <div className="absolute inset-0 w-full h-full bg-red-600/75 group-hover:flex justify-center items-center flex-col hidden duration-200 transition-all rounded-full">
                  <h2 className="text-white font-semibold text-lg">
                    {data.name}
                  </h2>
                  <p className="text-white">{data.subTitl}</p>
                  <div className="flex justify-center items-center gap-2 mt-2">
                    <Link
                      href={data.url}
                      className="cursor-pointer bg-red-600 hover:bg-red-700 w-10 h-10 flex justify-center items-center rounded-full"
                    >
                      {data.social.facebook}
                    </Link>
                    <Link
                      href={data.url}
                      className="cursor-pointer bg-red-600 hover:bg-red-700 w-10 h-10 flex justify-center items-center rounded-full"
                    >
                      {data.social.instegram}
                    </Link>
                    <Link
                      href={data.url}
                      className="cursor-pointer bg-red-600 hover:bg-red-700 w-10 h-10 flex justify-center items-center rounded-full"
                    >
                      {data.social.twitter}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Profissonales;
