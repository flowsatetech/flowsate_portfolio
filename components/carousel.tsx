"use client";

import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const CarouselSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 25 },
      },
    },
  });

  // autoplay effect
  useEffect(() => {
    if (!instanceRef.current) return;

    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        instanceRef.current?.next();
      }, 2500); // autoplay every 2.5s
    }

    instanceRef.current.on("created", () => {
      instanceRef.current?.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      instanceRef.current?.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    instanceRef.current.on("dragStarted", clearNextTimeout);
    instanceRef.current.on("animationEnded", nextTimeout);
    instanceRef.current.on("updated", nextTimeout);
  }, [instanceRef]);

  const projects = [
    {
      title: "Fintech SaaS Platform",
      description: "Helping startups launch secure financial applications.",
      image: "/images/project1.png",
    },
    {
      title: "E-commerce Website",
      description: "Modern and scalable online shopping experience.",
      image: "/images/project2.png",
    },
    {
      title: "Healthcare App",
      description: "A user-friendly app for better patient care.",
      image: "/images/project3.png",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Projects Carousel
          </h2>
          <p className="text-gray-600 mt-3">
            Swipe through some of our featured projects
          </p>
        </div>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {projects.map((project, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {project.description}
                </p>
                <a
                  href="/projects"
                  className="text-sm text-blue-600 underline mt-3 inline-block"
                >
                  View Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
