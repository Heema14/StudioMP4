import Image from "next/image";
import Link from "next/link";
import React from "react";

interface parameter {
  img: string;
  titel: string;
  link: string;
}

export default function CardSwiper({ img, titel, link }: parameter) {
  return (
    <Link
      href={link}
      className="relative flex flex-col items-center rounded-md hover:scale-105 hover:shadow-md cursor-pointer group"
    >
      <Image
        src={img}
        alt={titel}
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
      <div className="absolute hidden inset-0 w-full h-full z-30 group-hover:flex justify-center items-center bg-black/70">
        <h3 className="mt-4 text-2xl font-semibold text-white">{titel}</h3>
      </div>
    </Link>
  );
}
