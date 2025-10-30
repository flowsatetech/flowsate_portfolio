

'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // ✅ only once


import woman from "@/public/images/woman.png";
import background from "@/public/images/background.png";
import background2 from "@/public/images/background2.png";

import icon1 from "@/public/images/icon1.png";
import icon2 from "@/public/images/icon2.png";
import icon3 from "@/public/images/icon3.png";
import icon4 from "@/public/images/icon4.png";
import icon5 from "@/public/images/icon5.png";
import HomeSlider from "@/components/home-slider";


export default function CarouselSection() {
  const slides = [
    { id: 1, image: "/images/project.png" },
    { id: 2, image: "/images/tech.png" },
    { id: 3, image: "/images/woman.png" },
    { id: 4, image: "/images/background 2.png" },
  ];

  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % (slides.length - visibleCards + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [visibleCards, slides.length]);

  // Responsive visibleCards
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const slideWidth = 100 / visibleCards;

  // Motion Variants
  const cardVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };


  const services = [
    {
      icon: (
        <Image
          src={icon1}
          alt="UI/UX Icon"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      ),
      title: "UI/UX Design",
      description:
        "Redesigned product dasboards,cutting user onboarding time from 5 minutes to under 2 minute.",
    },
    {
      icon: (
        <Image
          src={icon2}
          alt="Web Development Icon"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      ),
      title: "Web Development",
      description:
        "Dlivered lightning fast websites that improved client conversion by 42% and reduced bounce rate by 35%.",
    },

    {
      icon: (
        <Image
          src={icon2}
          alt="Web Development Icon"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      ),
      title: "Mobile App Development",
      description: "built scalable cross-platform apps that grew user engagement by 55% within months."
    },

    {
      icon: (
        <Image
          src={icon3}
          alt="cloud solutions Icon"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      ),
      title: "Cloud Solutions",
      description: "Migrated lagacy system to the cloud saving clients upto 40% in annual infratructure cost."
    },

    {
      icon: (
        <Image
          src={icon4}
          alt="Data Analytics Icon"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      ),
      title: "Data Analytics",
      description: "Transformed raw data into insight that helped clients make smarter decision and increase ROI by 25% ."
    },
    {
      icon: (
        <Image
          src={icon5}
          alt="branding Icon"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      ),
      title: "Branding",
      description:
        "Complete brand identity solutions that make your business stand out from the competition.",
    },
  ];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern online store with advanced features and seamless user experience.",
    image: "/images/project.png",
    liveDemo: "https://ecommerce-demo.com",
    github: "https://github.com/username/ecommerce-platform",
  },
  {
    title: "Healthcare Dashboard",
    description: "Comprehensive patient management system with real-time analytics.",
    image: "/images/project.png",
    liveDemo: "https://healthcare-demo.com",
    github: "https://github.com/username/healthcare-dashboard",
  },
  {
    title: "Financial App",
    description: "Mobile banking application with secure transactions and budgeting tools.",
    image: "/images/project.png",
    liveDemo: "https://financial-app-demo.com",
    github: "https://github.com/username/financial-app",
  },
  {
    title: "Learning Management System",
    description: "Educational platform connecting students and instructors worldwide.",
    image: "/images/project.png",
    liveDemo: "https://lms-demo.com",
    github: "https://github.com/username/learning-management-system",
  },
];

  const testimonials = [
    {
      name: "Jane Doe",
      text: "Flowsate transformed our digital presence with precision and creativity. The team delivered on time and exceeded expectations.",
      image: woman,
    },
    {
      name: "John Smith",
      text: "Their professionalism and attention to detail were outstanding. I’ve never worked with a team this reliable before.",
      image: background,
    },
    {
      name: "Sarah Lee",
      text: "Exceptional quality, clear communication, and outstanding results. I highly recommend their services.",
      image: background2,
    },
  ];

  // ✅ renamed from `current` to `currentIndex`
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoDirection, setAutoDirection] = useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Alternate auto direction (left-right-left)
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDirection === 1 && currentIndex === testimonials.length - 1) {
        setAutoDirection(-1);
        prevTestimonial();
      } else if (autoDirection === -1 && currentIndex === 0) {
        setAutoDirection(1);
        nextTestimonial();
      } else {
        autoDirection === 1 ? nextTestimonial() : prevTestimonial();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, autoDirection]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };



  return (
    <main className="min-h-screen">
      <section className="relative py-24 px-6 lg:px-12 bg-gradient-to-tl from-[#e3e7ff] via-[#f4f6ff] to-[#f9faff] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <motion.p
              className="text-sm uppercase tracking-wide text-gray-500 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Best Tech Company
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.35 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {/* Floating wrapper */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Line 1 */}
                <motion.span
                  className="text-[#010066] block"
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(6px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                      transition: { duration: 0.8, ease: "easeOut" },
                    },
                  }}
                >
                  Designing experiences that
                </motion.span>

                {/* Line 2 */}
                <motion.span
                  className="text-[#010066] block"
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(6px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                      transition: { duration: 0.8, ease: "easeOut" },
                    },
                  }}
                >
                  people love and
                </motion.span>

                {/* Line 3 */}
                <motion.span
                  className="text-[#010066] block"
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(6px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                      transition: { duration: 0.8, ease: "easeOut" },
                    },
                  }}
                >
                  businesses trust.
                </motion.span>
              </motion.div>

              {/*  Glow highlight after all text appears */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.6, 0],
                  background: [
                    "radial-gradient(circle at 50% 50%, rgba(1,0,102,0) 0%, transparent 70%)",
                    "radial-gradient(circle at 50% 50%, rgba(1,0,102,0.3) 0%, transparent 70%)",
                    "radial-gradient(circle at 50% 50%, rgba(1,0,102,0) 0%, transparent 70%)",
                  ],
                }}
                transition={{
                  delay: 2.5,
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
            </motion.h1>


            {/* Buttons */}
            <motion.div
              className="flex flex-row gap-4 mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex flex-row gap-4 mt-10">
                {/* Button 1 - Get Started */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.5, // appears first
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    boxShadow: "0px 0px 20px rgba(1, 0, 102, 0.3)",
                    y: -4, // slight lift on hover
                  }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#010066] text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 1.8,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      Get Started
                    </motion.span>
                  </Link>
                </motion.div>

                {/* Button 2 - Learn More */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 2.2, // second button appears after first
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    boxShadow: "0px 0px 20px rgba(1, 0, 102, 0.25)",
                    y: -4,
                  }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#010066] border border-[#010066] font-semibold rounded-lg hover:bg-[#010066] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 2.5,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      Learn More
                    </motion.span>
                  </Link>
                </motion.div>
              </div>

            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            className="flex justify-center md:justify-end relative"
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.03, rotate: 1 }}
          >
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/background 2.png"
                  alt="Team working together"
                  width={450}
                  height={400}
                  className="object-cover rounded-[2rem]"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none"></div>

        {/* Floating blobs for soft movement */}
        <motion.div
          className="absolute top-20 -left-16 w-64 h-64 bg-[#010066]/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-16 w-72 h-72 bg-[#010066]/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], opacity: [1, 0.7, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>



      {/* carousel section */}

    
   <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${current * slideWidth}%)`,
            width: `${(slides.length / visibleCards) * 100}%`,
          }}
        >
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              custom={index - current}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="flex-shrink-0 px-4"
              style={{ flex: `0 0 ${slideWidth}%` }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative w-full h-64 md:h-80 rounded-t-xl overflow-hidden">
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {slide.title || "Project Title"}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: slides.length - visibleCards + 1 }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-[#010066]" : "bg-gray-300"
              } transition-all duration-300`}
            />
          )
        )}
      </div>
    </section>


      {/* Our Services Section */}

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => {
              const isLeft = index % 2 === 0;
              const isCenter = index % 3 === 0;

              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  initial={{
                    opacity: 0,
                    x: isLeft ? -120 : isCenter ? 0 : 120,
                    rotateY: isLeft ? 15 : -15,
                    rotateZ: isLeft ? -2 : 2,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    rotateZ: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 1,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    rotateZ: isLeft ? -1 : 1,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.4 },
                  }}
                >
                  {/* Icon with flip-in animation */}
                  <motion.div
                    className="mb-4 text-blue-600 text-4xl"
                    initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                    whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                    transition={{
                      delay: index * 0.15 + 0.3,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Text Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <Link href="/services"></Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Title */}
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Flowsate?
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left column: Image slides in softly from left and bottom */}
            <motion.div
              className="relative w-full h-64 lg:h-[350px] rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -60, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/tech.png"
                alt="Why Flowsate"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Right column: Text slides in from right with flip-in for each point */}
            <motion.div
              className="flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              {[
                {
                  text: "At Flowsate, we bring together experts from different areas of tech to deliver solutions that are modern, reliable, and built to scale.",
                  bold: false,
                },
                {
                  text: "Cross-disciplinary Expertise - A team of designers, developers, and strategists working together to deliver end-to-end solutions.",
                  bold: true,
                },
                {
                  text: "Proven Reliability - Transparent process, clear communication, and results you can trust.",
                  bold: true,
                },
                {
                  text: "Tailored Solutions - We design and build with your unique business needs in mind, not just templates.",
                  bold: true,
                },
                {
                  text: "Modern & Scalable Tech - From web and mobile apps to cloud solutions, we use technologies that grow with your business.",
                  bold: true,
                },
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, rotateX: 90 }}
                  whileInView={{ opacity: 1, rotateX: 0 }}
                  transition={{
                    delay: index * 0.25,
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-600">
                    {point.bold ? (
                      <>
                        <span className="font-bold lg:font-semibold">
                          {point.text.split(" - ")[0]}
                        </span>{" "}
                        - {point.text.split(" - ")[1]}
                      </>
                    ) : (
                      <span className="text-gray-900 font-bold lg:font-semibold">
                        {point.text}
                      </span>
                    )}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>



      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our most successful projects that showcase our expertise and innovation
            </p>
          </motion.div>

          {/* Project Grid with alternating stagger */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col rounded-lg shadow-lg overflow-hidden bg-white group"
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
              >
                {/* Card Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/project.png"
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-sm"
                  />

                  {/* Overlay for Live Demo / GitHub */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100"
                    initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" className="px-4 py-2 bg-blue-600 rounded mb-2 hover:bg-blue-500 transition">
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition">
                        GitHub
                      </a>
                    )}

                  </motion.div>
                </div>

                {/* Tags & Title */}
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex gap-4 items-center">
                    <span className="bg-blue-300 text-white text-sm font-medium px-3 py-2 rounded">
                      SaaS
                    </span>
                    <span className="bg-blue-300 text-white text-sm font-medium px-3 py-2 rounded">
                      Fintech
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    {project.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
       


        {/* Soft overlay gradient for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none"></div>
      </section>

      {/* carousel section */}

      <section className="max-w-7xl mx-auto px-6 py-10">
        {/* Carousel Container */}
        <HomeSlider/>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="mb-4 text-blue-600 text-4xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link href="/services"></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Flowsate?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left column: Image */}
            <div className="relative w-full h-64 lg:h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/tech.png" // ✅ replace with your image
                alt="Why Flowsate"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              {/* Right column: Text */}

              <div className="flex flex-col justify-center space-y-6">
                {/* Point 1 */}
                <div className="flex items-start">
                  <div>
                    <p className="text-gray-900  font-bold lg:font-semibold">
                      At Flowsate, we bring together experts from different
                      areas of tech to deliver solutions that are modern,
                      reliable and built to scale.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex items-start">
                  <div>
                    <p className="text-gray-600">
                      <span className="font-bold lg:font-semibold">
                        Cross-disciplinary Expertise
                      </span>{" "}
                      - A team of designers, developers, and strategist working
                      together to deliver end-to-end solutions.
                    </p>
                  </div>
                </div>

                {/* point 3 */}
                <div className="flex items-start">
                  <div>
                    <p className="text-gray-600">
                      <span className="font-bold lg:font-semibold">
                        proven Reliability
                      </span>{" "}
                      - Transparent process, clear communication, and results
                      you can trust
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="flex items-start">
                  <div>
                    <p className="text-gray-600">
                      <span className="font-bold lg:font-semibold">
                        Tailored Solutions
                      </span>{" "}
                      Tailored Solutions- We design and build with your unique
                      business needs in mind,not just templates.
                    </p>
                  </div>
                </div>

                {/* Point 5 */}
                <div className="flex items-start">
                  <div>
                    <p className="text-gray-600">
                      <span className="font-bold lg:font-semibold">
                        {" "}
                        Modern & Scalable Tech
                      </span>
                      - From web and mobile app to cloud solutions,we use
                      technologies that grow with your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our most successful projects that showcase our
              expertise and innovation
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col">
                {/* Card (image only) */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
                  <div className="relative h-56">
                    <Image
                      src="/images/project.png"
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Tags & Link OUTSIDE card */}
                <div className="flex gap-4 mt-3 items-center">
                  <span className="bg-blue-300 text-white text-sm font-medium px-3 py-2 rounded">
                    SaaS
                  </span>
                  <span className="bg-blue-300 text-white text-sm font-medium px-3 py-2 rounded">
                    Fintech
                  </span>
                  <Link
                    href="/projects"
                    className="text-sm text-black underline"
                  >
                    View Website
                  </Link>
                </div>

                {/* Project Title */}
                <p className="mt-2 text-sm font-medium text-gray-700">
                  {project.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
          What Our Clients Say
        </h2>

        <motion.div
          className="max-w-3xl mx-auto bg-blue-900 text-white rounded-3xl shadow-lg overflow-hidden flex flex-col sm:flex-row items-center gap-8 p-8 transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Client Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-70 h-60 rounded-xl overflow-hidden border-4 border-white shadow-md">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.5 }}
                aria-live="polite"
              >
                <h3 className="text-xl font-semibold mb-1">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {testimonials[currentIndex].text}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={prevTestimonial}
                className="bg-gray-400 hover:bg-blue-800 w-7 h-7 flex items-center justify-center rounded-full transition"
                aria-label="Previous"
              >
                ←
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-gray-400 hover:bg-blue-800 w-7 h-7 flex items-center justify-center rounded-full transition"
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Contact Section */}

      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white"> */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <motion.div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl font-semibold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: -40, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>

          {/* Contact Form */}
          <motion.form
            action="https://formspree.io/f/mnngvnbg"
            method="POST"
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {/* Row 1 */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={{
                hidden: { opacity: 0, x: -100, rotateY: -10 },
                visible: { opacity: 1, x: 0, rotateY: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Joe"
                  required
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Sam"
                  required
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </motion.div>

            {/* Row 2 */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={{
                hidden: { opacity: 0, x: 100, rotateY: 10 },
                visible: { opacity: 1, x: 0, rotateY: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="joesam@gmail.com"
                  required
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+234 7463928716"
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </motion.div>

            {/* Row 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -8 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <label className="block text-sm font-medium text-gray-700">
                Tell Us About Your Project
              </label>
              <textarea
                rows={5}
                name="message"
                placeholder="Hello, I would like to..."
                required
                className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            >
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-blue-900 px-10 py-3 text-white font-medium shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Submit
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </section>

    </main>
  );
}

