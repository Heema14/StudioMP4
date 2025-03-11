import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-2 sm:px-0 relative bg-black py-8">
      <div className="mx-auto container flex md:flex-row gap-4 md:gap-0 flex-col justify-between items-center">
        <div className="text-gray-500">
          2024 &copy;{" "}
          <strong className="text-white hover:underline">
            (Ibrahim Yassin)
          </strong>{" "}
          - All Rights Reseved
        </div>

        <div className="flex justify-between items-end gap-6">
          <Link href="/about">
            <p className="relative text-white hover:text-red-600 font-medium w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-red-600 after:w-0 after:hover:w-[80%] after:rounded-full after:transition-all duration-300">
              AboutUs
            </p>
          </Link>
          <Link href="/PrivacyPolicy">
            <p className="relative text-white hover:text-red-600 font-medium w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-red-600 after:w-0 after:hover:w-[80%] after:rounded-full after:transition-all duration-300">
              Privacy Policy
            </p>
          </Link>
          <Link href="#">
            <p className="relative text-white hover:text-red-600 font-medium w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-red-600 after:w-0 after:hover:w-[80%] after:rounded-full after:transition-all duration-300">
              Cookie Policy
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
