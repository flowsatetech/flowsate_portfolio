"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// ✅ Custom CSS for responsiveness (optional)
import "../app/test/swiper-styles.css";

export default function BackgroundSlider() {
  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        {[
          {
            src: "/images/Rectangle1.png",
            text: "We Provide Web/Mobile Design Solutions",
          },
          {
            src: "/images/software-development.png",
            text: "Software Development",
          },
          {
            src: "/images/production.png",
            text: "Production",
          },
          {
            src: "/images/SEO.png",
            text: "SEO",
          },
          {
            src: "/images/consultancy-service.png",
            text: "Consultancy Service",
          },
        ].map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.text}
                fill
                priority={index === 0}
                className="object-cover brightness-90"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 sm:px-6 md:px-12">
                <h2 className="text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center leading-snug drop-shadow-md">
                  {slide.text}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}