import React from "react";
import TitleSecs from "../Helper/TitleSecs";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const clients = [
  {
    id: 1,
    icon: <FaStar className="w-6 h-6 text-yellow-400" />,
    dis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet vitae ab accusamus, modi autem voluptatibus eius ducimus temporibus quidem similique?",
    img: "/images/c1.jpg",
    name: "Ibrahim Yaseen",
  },
  {
    id: 2,
    icon: <FaStar className="w-6 h-6 text-yellow-400" />,
    dis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet vitae ab accusamus, modi autem voluptatibus eius ducimus temporibus quidem similique?",
    img: "/images/c2.jpg",
    name: "Waleed Algerbawee",
  },
  {
    id: 3,
    icon: <FaStar className="w-6 h-6 text-yellow-400" />,
    dis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet vitae ab accusamus, modi autem voluptatibus eius ducimus temporibus quidem similique?",
    img: "/images/c3.jpg",
    name: "Marwan Abu Jiab",
  },
];

const TrustingClient = () => {
  return (
    <section
      id="trustingClients"
      className="py-32 px-2 sm:px-0 relative my-28 bg-gray-950"
    >
      <div className="mx-auto container">
        <div
          data-aos="fade-bottom"
          data-aos-anchor-placement="top-center"
          className="text-center space-y-4 lineUnder md:after:h-[8%] after:h-[5%] after:top-[-2em]"
        >
          <p className="text-red-600 uppercase text-2xl font-semibold">
            Testimonils
          </p>
          <TitleSecs
            styleTitle="text-white font-semibold sm:text-5xl text-4xl"
            titleSec="Our Trusting Clients"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 group">
          {clients.map((client, i) => {
            return (
              <div
                data-aos-delay={i * 200}
                data-aos="fade-right"
                key={client.id}
                className="flex justify-between flex-col pt-20 pb-10 pr-10 pl-4 bg-gray-900 border-2 border-gray-900 hover:border-red-600"
              >
                <div className="flex items-center gap-2">
                  {client.icon}
                  {client.icon}
                  {client.icon}
                  {client.icon}
                  {client.icon}
                </div>

                <p className="text-gray-400 text-sm my-6 leading-6">
                  {client.dis}
                </p>

                <div className="flex items-center gap-3">
                  <Image
                    src={client.img}
                    alt={client.name}
                    width={300}
                    height={300}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <div className="">
                    <h2 className="font-semibold text-white">{client.name}</h2>
                    <p className="text-red-600 text-sm tracking-wide">Client</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustingClient;
