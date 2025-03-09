"use client";

import React from "react";
import TitleSecs from "../Helper/TitleSecs";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import CustomBtn from "../Helper/CustomBtn";

const Footer = () => {
  return (
    <footer id="contact" className="px-2 sm:px-0 relative bg-gray-950 pt-10">
      <div className="mx-auto container flex lg:flex-row flex-col justify-between items-center pb-16">
        <div className="lg:w-[30%] w-full text-center lg:text-start">
          <div data-aos="fade-top">
            <TitleSecs
              styleTitle="text-white font-semibold sm:text-5xl text-4xl"
              titleSec="Let's Talk"
            />
            <p className="text-red-600 uppercase mt-2">
              We love to here what you think
            </p>
          </div>

          <p
            data-aos="fade-top"
            className="text-gray-500 text-sm my-5 max-w-md lg:w-auto mx-auto lg:mx-0"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            assumenda commodi consectetur velit culpa ducimus neque, sequi aut
            beatae ipsam.
          </p>

          <div
            data-aos="fade-right"
            className="flex lg:justify-start justify-center items-center gap-3"
          >
            <Link
              data-aos="fade-right"
              data-aos-delay={100}
              href="#"
              className="w-9 h-9 border border-red-600 rounded-full hover:bg-blue-600 flex justify-center items-center"
            >
              <FaFacebook className="h-5 w-5 text-white" />
            </Link>
            <Link
              data-aos="fade-right"
              data-aos-delay={150}
              href="#"
              className="w-9 h-9 border border-red-600 rounded-full hover:bg-blue-600 flex justify-center items-center"
            >
              <FaTwitter className="h-5 w-5 text-white" />
            </Link>
            <Link
              data-aos="fade-right"
              data-aos-delay={180}
              href="#"
              className="w-9 h-9 border border-red-600 rounded-full hover:bg-red-600 flex justify-center items-center"
            >
              <FaInstagram className="h-5 w-5 text-white" />
            </Link>
            <Link
              data-aos="fade-right"
              data-aos-delay={200}
              href="#"
              className="w-9 h-9 border border-red-600 rounded-full hover:bg-gray-600 flex justify-center items-center"
            >
              <FaGithub className="h-5 w-5 text-white" />
            </Link>
          </div>
        </div>

        <div className="lg:w-[65%] w-full mt-9 lg:mt-0">
          <form
            data-aos="fade-top"
            onSubmit={(e) => e.preventDefault()}
            className="w-full flex justify-between items-start flex-col"
          >
            <div className="flex justify-between items-center w-full gap-16">
              <input
                type="text"
                placeholder="Your Name.."
                className="px-3 py-4 outline-none text-white focus:border-b border-b border-red-400 bg-transparent w-full"
              />
              <input
                type="email"
                placeholder="Your Email.."
                className="px-3 py-4 outline-none text-white focus:border-b border-b border-red-400 bg-transparent w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Your Subject.."
              className="px-3 py-4 outline-none text-white focus:border-b border-b border-red-400 my-8 bg-transparent w-full"
            />
            <textarea
              placeholder="Your Message.."
              role="textbox"
              rows={7}
              maxLength={1000}
              className="px-3 py-4 outline-none text-white focus:border-b border-b border-red-400 bg-transparent w-full"
            />

            {/* <button
              type="submit"
              className="bg-red-600 text-white hover:bg-red-800 px-24 mt-16 py-5"
            >
              Send
            </button> */}

            <CustomBtn
              CustomStyle="bg-red-600 text-white focus:outline-red-600 hover:bg-red-800 px-16 mt-16 py-5"
              text="Send"
            />
          </form>
        </div>
      </div>

      {/* Another footer */}
      <section className="px-2 sm:px-0 relative bg-black py-8">
        <div className="mx-auto container flex md:flex-row gap-4 md:gap-0 flex-col justify-between items-center">
          <div className="text-gray-500">
            2024 &copy; <strong className="text-white">(Ibrahim Yassin)</strong>{" "}
            - All Rights Reseved
          </div>

          <div className="flex justify-between items-end gap-6">
            <Link href="/about">
              <p className="relative text-white hover:text-red-600 font-medium w-fit after:block after:content-[''] after:absolute after:h-0.5 after:bg-red-600 after:w-0 after:hover:w-[80%] after:rounded-full after:transition-all duration-300">
                AboutUs
              </p>
            </Link>
            <Link href="/PrivacyPolicy">
              <p className="relative text-white hover:text-red-600 font-medium w-fit after:block after:content-[''] after:absolute after:h-0.5 after:bg-red-600 after:w-0 after:hover:w-[80%] after:rounded-full after:transition-all duration-300">
                Privacy Policy
              </p>
            </Link>
            <Link href="#">
              <p className="relative text-white hover:text-red-600 font-medium w-fit after:block after:content-[''] after:absolute after:h-0.5 after:bg-red-600 after:w-0 after:hover:w-[80%] after:rounded-full after:transition-all duration-300">
                Cookie Policy
              </p>
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
