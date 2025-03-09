import React from "react";
import Link from "next/link";
import TitleSecs from "@/components/Helper/TitleSecs";

const page = () => {
  return (
    <main>
      <section className="px-2 sm:px-0">
        <div className="mx-auto container">
          <div className="flex justify-center items-center flex-col min-h-screen">
            <TitleSecs
              styleTitle="text-4xl md:text-5xl font-bold mb-3 text-gray-950"
              titleSec="About Us"
            />
            <p className="text-lg text-gray-600 text-center max-w-2xl mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              fugiat qui? Sapiente quidem, asperiores harum tempora dolorum
              nesciunt veniam tenetur?
            </p>
            <Link
              href="/"
              className="px-16 py-3 bg-red-500 hover:bg-red-700 text-white shadow-md rounded-lg"
            >
              Back
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
