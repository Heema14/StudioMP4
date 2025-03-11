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
      className="relative flex flex-col items-center rounded-md hover:scale-95 hover:shadow-md cursor-pointer group"
    >
      <Image
        src={img}
        alt={titel}
        width={500}
        height={500}
        className="w-full h-full object-cover group-hover:contrast-50"
      />
      <div className="absolute opacity-0 inset-0 w-full h-full z-30 group-hover:opacity-100 flex justify-center items-center bg-black/30">
        <h3 className="mt-4 text-2xl font-semibold text-white opacity-0 translate-x-[-100px] group-hover:translate-x-0 group-hover:opacity-100 duration-100 delay-100">
          {titel}
        </h3>
      </div>
    </Link>
  );
}
