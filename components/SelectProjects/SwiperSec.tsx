"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper modules
import { Autoplay, Navigation } from "swiper/modules";
import CardSwiper from "./CardSwiper";

const SwiperSec = () => {
  return (
    <section data-aos="fade-bottom" className="mt-10">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        slidesPerView={3} // Default to 3 slides per view
        spaceBetween={20} // Space between slides
        loop={true} // Enable loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <CardSwiper
            link="#SelectProjects"
            img="/images/img2.png"
            titel="Programming & Codeing"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardSwiper
            link="#SelectProjects"
            img="/images/img3.png"
            titel="Digital Markiting"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardSwiper
            link="#SelectProjects"
            img="/images/img2.png"
            titel="Personal & Comunication"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardSwiper
            link="#SelectProjects"
            img="/images/img2.png"
            titel="FrontEnd Developer"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardSwiper
            link="#SelectProjects"
            img="/images/img3.png"
            titel="BackEnd Developer"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardSwiper
            link="#SelectProjects"
            img="/images/img2.png"
            titel="NextJS Libraris"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperSec;
