"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../app/test/styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

const HomeSlider = () => {
  const slides = [
    "/images/frame1.png",
    "/images/frame2.png",
    "/images/frame3.png",
    // Add more images as needed
  ];

  const middleSlideIndex = Math.floor(slides.length / 2);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={middleSlideIndex}
        // loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image src={slide} alt="sliders" width={500} height={500}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeSlider;
