"use client";

import TitleSecs from "@/components/Helper/TitleSecs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiDiscount1 } from "react-icons/ci";
import { ImPriceTag } from "react-icons/im";
import { TbSum } from "react-icons/tb";

const ImgCart = [
  {
    id: 1,
    imgblack: "/images/cart/Headphoneblack.png",
    imgblue: "/images/cart/Headphoneblue.png",
    imgred: "/images/cart/Headphonered.png",
    title: "Headphone",
    dis: "Lorem ipsum dolor sit amet...",
    price: 100,
    count: 2,
    color: "black", // إضافة لون افتراضي
  },
  {
    id: 2,
    imgblack: "/images/cart/Shoesblack.png",
    imgblue: "/images/cart/Shoesblue.png",
    imgred: "/images/cart/Shoesyallow.png",
    title: "Shoes",
    dis: "Lorem ipsum dolor sit amet...",
    price: 80,
    count: 1,
    color: "black", // إضافة لون افتراضي
  },
  {
    id: 3,
    imgblack: "/images/cart/Headphoneblack.png",
    imgblue: "/images/cart/Headphoneblue.png",
    imgred: "/images/cart/Headphonered.png",
    title: "Headphone",
    dis: "Lorem ipsum dolor sit amet...",
    price: 120,
    count: 3,
    color: "black", // إضافة لون افتراضي
  },
];

const Page = () => {
  const [cartItem, setCartItem] = useState(ImgCart);

  const updateQuantity = (id: number, amount: number) => {
    setCartItem((prevItem) =>
      prevItem.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(1, item.count + amount) }
          : item
      )
    );
  };

  const handleColorChange = (id: number, color: string) => {
    setCartItem((prevItem) =>
      prevItem.map((item) =>
        item.id === id
          ? { ...item, color } // تغيير اللون فقط للمنتج الذي تم النقر عليه
          : item
      )
    );
  };

  return (
    <section className="px-2 sm:px-0">
      <div className="mx-auto container">
        <div className="flex justify-center items-start flex-col min-h-screen py-32">
          <div className="w-full flex items-center justify-between mb-4">
            <TitleSecs
              styleTitle="text-4xl md:text-5xl font-bold mb-3 text-gray-950"
              titleSec="Cart"
            />
            <Link
              href="/"
              className="sm:px-16 px-8 py-3 bg-red-500 hover:bg-red-700 text-white shadow-md rounded-lg"
            >
              Back
            </Link>
          </div>

          <div className="w-full">
            {cartItem.map((img) => {
              return (
                <div
                  key={img.id}
                  className="flex justify-start items-center gap-4 rounded-md border py-2 px-4"
                >
                  <div className="w-32 aspect-square">
                    {img.color === "red" && (
                      <Image
                        src={img.imgred}
                        alt={img.title}
                        width={500}
                        height={500}
                        className="w-full h-full rounded-md hover:scale-105"
                      />
                    )}
                    {img.color === "black" && (
                      <Image
                        src={img.imgblack}
                        alt={img.title}
                        width={500}
                        height={500}
                        className="w-full h-full rounded-md hover:scale-105"
                      />
                    )}
                    {img.color === "blue" && (
                      <Image
                        src={img.imgblue}
                        alt={img.title}
                        width={500}
                        height={500}
                        className="w-full h-full rounded-md hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2 items-center">
                      <h4 className="font-semibold text-xl">{img.title}</h4>
                      <h4 className="font-medium text-lg">${img.price}</h4>
                    </div>
                    <p className="text-gray-500 sm:text-sm text-xs">
                      {img.dis}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <span
                        onClick={() => handleColorChange(img.id, "red")}
                        className="w-3 h-3 rounded-full cursor-pointer bg-red-600"
                      ></span>
                      <span
                        onClick={() => handleColorChange(img.id, "blue")}
                        className="w-3 h-3 rounded-full cursor-pointer bg-blue-600"
                      ></span>
                      <span
                        onClick={() => handleColorChange(img.id, "black")}
                        className="w-3 h-3 rounded-full cursor-pointer bg-black"
                      ></span>
                    </div>
                  </div>

                  <div className="flex sm:flex-row flex-col items-center justify-center gap-4 ml-auto">
                    <button
                      onClick={() => updateQuantity(img.id, -1)}
                      className="bg-red-600 rounded-full w-8 h-8 flex justify-center items-center text-white text-2xl hover:bg-red-700"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">{img.count}</span>
                    <button
                      onClick={() => updateQuantity(img.id, 1)}
                      className="bg-red-600 rounded-full w-8 h-8 flex justify-center items-center text-white text-2xl hover:bg-red-700"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <hr className="h-2 rounded-lg bg-red-500/85" />
          <div className="border-t-2 border-red-500/85 mt-10 w-full text-center sm:text-start">
            <h1 className="sm:text-2xl text-xl text-gray-800 py-4">
              <CiDiscount1 className="text-gray-500 inline-block mr-1 w-8 h-8" />{" "}
              Taxes: <i className="sm:text-3xl text-2xl text-gray-950">$0</i>
            </h1>
            <hr className="h-0.5 rounded-lg bg-red-500/85 w-full" />
            <h1 className="sm:text-2xl text-xl text-gray-800 py-3">
              <TbSum className="text-gray-500 inline-block mr-1 w-8 h-8" /> Sum:{" "}
              <i className="sm:text-3xl text-2xl text-gray-950">$300</i>
            </h1>
            <hr className="h-0.5 rounded-lg bg-red-500/85 w-full" />
            <h1 className="sm:text-2xl text-xl text-gray-800 pt-4">
              <ImPriceTag className="text-gray-500 inline-block mr-1" /> Total
              Price is:{" "}
              <i className="sm:text-3xl text-2xl text-gray-950">$300</i>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
