'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../app/test/swiper-styles.css';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function BackgroundSlider() {
  return (
    <>
      <Swiper 
        pagination={true} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]} 
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/images/Rectangle1.png" // Replace with your image path
            alt="Slide 1" 
            className="slide-background"
            fill
          />
          <div className="slide-content">Slide 1</div>
        </SwiperSlide>
        
        <SwiperSlide>
          <Image
            src="/images/frame2.png" // Replace with your image path
            alt="Slide 2" 
            className="slide-background"
            fill
          />
          <div className="slide-content">Slide 2</div>
        </SwiperSlide>
        
        <SwiperSlide>
          <Image
            src="/images/frame3.png" // Replace with your image path
            alt="Slide 3" 
            className="slide-background"
            fill
          />
          <div className="slide-content">Slide 3</div>
        </SwiperSlide>
        
        <SwiperSlide>
          <Image 
            src="/images/frame1.png" // Replace with your image path
            alt="Slide 4" 
            className="slide-background"
            fill
          />
          <div className="slide-content">Slide 4</div>
        </SwiperSlide>
        
        {/* Add more slides as needed */}
      </Swiper>
    </>
  );
}