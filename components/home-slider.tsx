"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../app/test/styles.css";

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const HomeSlider = () => {
  const slides = [
    "/images/tech1.jpeg",
    "/images/tech2.jpeg",
    "/images/tech3.jpeg",
    "/images/tech4.jpeg",
    "/images/tech5.jpeg"
  ];

  const middleSlideIndex = Math.floor(slides.length / 2);
  const [activeIndex, setActiveIndex] = useState(middleSlideIndex);

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      initialSlide={middleSlideIndex}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className={`flex justify-center items-center transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100 scale-100" : "opacity-50 scale-90"
          }`}
        >
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            width={500}
            height={500}
            className="object-cover rounded-lg transition-all duration-700"
            unoptimized
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
