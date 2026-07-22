"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const slides = [
  "/images/tech1.webp",
  "/images/tech2.webp",
  "/images/tech3.webp",
  "/images/tech4.webp",
  "/images/tech5.webp",
];

export default function HomeSlider() {
  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        speed={900}
        watchSlidesProgress={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: true,
      }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={3}
        spaceBetween={-80}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: -130,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: -110,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: -90,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: -70,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: -50,
          },
        }}
        coverflowEffect={{
          rotate: 35,
          stretch: 0,
          depth: 320,
          modifier: 1.8,
          scale: 0.88,
          slideShadows: false,
        }}
        className="mySwiper"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slide-card">
              <Image
                src={image}
                alt={`Technology ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover rounded-[28px]"
                unoptimized
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}