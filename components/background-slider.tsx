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
            src="/images/Rectangle1.webp" 
            alt="Slide 1" 
            className="slide-background"
            fill
          />
          <div className="slide-content">We Provide Web/Mobile Design Solutions</div>
        </SwiperSlide>
        
        <SwiperSlide>
          <Image
            src="/images/software-development.webp" 
            alt="Slide 2" 
            className="slide-background"
            fill
          />
          <div className="slide-content">Software Development</div>
        </SwiperSlide>

         <SwiperSlide>
          <Image
            src="/images/production.webp" 
            alt="Slide 3" 
            className="slide-background"
            fill
          />
          <div className="slide-content">Production</div>
        </SwiperSlide>
        
        <SwiperSlide>
          <Image
            src="/images/SEO.webp" 
            alt="Slide 4" 
            className="slide-background"
            fill
          />
          <div className="slide-content">SEO</div>
        </SwiperSlide>
        
        <SwiperSlide>
          <Image 
            src="/images/consultancy-service.webp" 
            alt="Slide 5" 
            className="slide-background"
            fill
          />
          <div className="slide-content">Consultancy Service</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}