
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


import icon1 from "@/public/images/icon1.png"; 
import icon2 from "@/public/images/icon2.png"; 
import icon3 from "@/public/images/icon3.png"; 
import icon4 from "@/public/images/icon4.png"; 
import icon5 from "@/public/images/icon5.png"; 




 const slides = [
  { id: 1, image: "/images/Rectangle3455.png", title: "UI/UX Design" },
  { id: 2, image: "/images/project2.jpg", title: "Web Development" },
  { id: 3, image: "/images/project3.jpg", title: "Mobile App Development" },
  { id: 4, image: "/images/project4.jpg", title: "Branding" },
  { id: 5, image: "/images/project5.jpg", title: "E-commerce" },
];


export default function CarouselSection() {
  const slides = [
    {
      id: 1,
     
      image: "/images/project.png",
    },
    {
      id: 2,
      image: "/images/tech.png",
    },
    {
      id: 3,
      image: "/images/woman.png",
    },

      {
      id: 4,
      image: "/images/background 2.png",
    },
     
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
      if (window.innerWidth < 640) setVisibleCards(1); // mobile
      else if (window.innerWidth < 1024) setVisibleCards(2); // tablet
      else setVisibleCards(3); // desktop
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);


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
      "Creating intuitive and engaging user experiences that convert visitors into customers.",
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
      "Building fast, secure, and scalable websites using modern technologies and best practices.",
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
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
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
      description: "Scalable cloud infrastructure and deployment solutions for modern applications."
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
      description: "Transform your data into actionable insights with advanced analytics and reporting."
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
      description: "Complete brand identity solutions that make your business stand out from the competition."
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online store with advanced features and seamless user experience.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Healthcare Dashboard",
      description: "Comprehensive patient management system with real-time analytics.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Financial App",
      description: "Mobile banking application with secure transactions and budgeting tools.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Learning Management System",
      description: "Educational platform connecting students and instructors worldwide.",
      image: "/api/placeholder/400/300"
    }
  ];

 const testimonials = [
    {
      name: "Jane Doe", 
      image: "/images/Rectangle3455.png",
      text: "Working with this team has been an incredible experience. Their creativity, attention to detail, and professionalism truly stand out. They understood my vision perfectly and delivered results that exceeded expectations. I highly recommend them to anyone looking for reliable, top-quality tech and design solutions that actually make an impact.",
    },
      {
      name: "favour james",
      // image: "/images/Rectangle3455.png",
      text: "This company went above and beyond to deliver exactly what I needed. Their communication was clear, the process was smooth, and the final outcome was exceptional. You can tell they genuinely care about quality and client satisfaction. I’m extremely impressed and would definitely work with them again!.",
    },
      {
      name: "onuora Ruth",
      // image: "/images/Rectangle3455.png",
      text: "Working with this team was an absolute pleasure. They truly understood my vision and turned it into something even better than I imagined. The attention to detail, creativity, and professionalism were top-notch. I highly recommend them to anyone looking for reliable and high-quality service. .",
    },
  
  ];

  // const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const nextTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 200);
  };

  const prevTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setFade(true);
    }, 200);
  };

  const goToTestimonial = (index: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 7000);
    return () => clearInterval(interval);
  }, []);


  return (
<main className="min-h-screen">
<section className="relative py-24 px-6 lg:px-12 bg-gradient-to-tl from-[#e3e7ff] via-[#f4f6ff] to-[#f9faff] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text */}
        <div>
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
            Best Tech Company
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
          <span className="text-[#010066]"> Designing experiences that</span>{" "}
            <span className="text-[#010066]">people love and</span> {" "}
            <span className="text-[#010066]">businesses trust.</span>
          </h1>

          {/* Buttons */}
          <div className="flex flex-row gap-4 mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#010066] text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#010066] border border-[#010066] font-semibold rounded-lg hover:bg-[#010066] hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex justify-center md:justify-end">
          <div className="rounded-4xl overflow-hidden shadow-lg">
            <Image
              src="/images/background 2.png" // ✅ replace this with your uploaded image path
              alt="Team working together"
              width={450}
              height={400}
              className="object-cover rounded-2x1"
              priority
            />
          </div>
        </div>
      </div>

      {/* Soft overlay gradient for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none"></div>
    </section>


  {/* carousel section */}

      <section className="max-w-7xl mx-auto px-6 py-20">
     

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / visibleCards)}%)`,
            width: `${(slides.length / visibleCards) * 100}%`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 px-4"
              style={{ flex: `0 0 ${100 / visibleCards}%` }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
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
                    
                  </h3>
                </div>
              </div>
            </div>
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
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
     
      
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.slice(0, 6).map((service, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
        >
          <div className="mb-4 text-blue-600 text-4xl">{service.icon}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
          <Link
            href="/services"
          >
           
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Why Flowsate?</h2>
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
    At Flowsate, we bring together experts from different areas of 
    tech to deliver solutions that are modern, reliable and built to scale.
    </p>
  </div>
</div>


        {/* Point 2 */}
       <div className="flex items-start">
  <div>
   
    <p className="text-gray-600">
     <span className="font-bold lg:font-semibold">Cross-disciplinary Expertise</span>  - A team of designers, developers, and strategist working together
      to deliver end-to-end solutions.
    </p>
  </div>
</div>

{/* point 3 */}
   <div className="flex items-start">
  <div>
   
    <p className="text-gray-600">
     <span className="font-bold lg:font-semibold">proven Reliability</span>  - Transparent process, clear
       communication, and results you can trust
    </p>
  </div>
</div>

        {/* Point 4 */}
       <div className="flex items-start">
  <div>
   
    <p className="text-gray-600">
     <span className="font-bold lg:font-semibold">Tailored Solutions</span> Tailored Solutions- We design and build with your unique business
       needs in mind,not just templates.
    </p>
  </div>
</div>


        {/* Point 5 */}
        <div className="flex items-start">
        
          <div>
           
            <p className="text-gray-600">
             <span className="font-bold lg:font-semibold"> Modern & Scalable Tech</span>- From web and mobile app to cloud
              solutions,we use technologies that grow with your business.
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
        Discover some of our most successful projects that showcase our expertise and innovation
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

        <div className="max-w-3xl mx-auto bg-blue-900 text-white rounded-3xl shadow-lg
         overflow-hidden flex flex-col sm:flex-row items-center gap-8 p-8 transition-transform duration-300 hover:scale-105">
          {/* Client Image */}
          <div className="flex-shrink-0">
            <div className="w-70 h-60 rounded-xl overflow-hidden border-4 border-white shadow-md">
              <Image
                src="/images/woman.png"
                alt="portfolio"
                width={200}
                height={200}            
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`flex-1 transition-opacity duration-100 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            aria-live="polite"
          >
           {testimonials.length > 0 && testimonials[current] && (
  <>
    <h3 className="text-xl font-semibold mb-1">{testimonials[current].name}</h3>
    <p className="text-blue-100 leading-relaxed">{testimonials[current].text}</p>
  </>
)}

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
        </div>
      </section>

      {/* Contact Section */}
    
       {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white"> */}
      <section>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
      Contact Us
    </h2>

    {/* Contact Form */}
    <form
      action="https://formspree.io/f/mnngvnbg" // 🔹 Replace with your Formspree ID
      method="POST"
      className="space-y-8"
    >
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </div>

      {/* Row 3 - Textarea */}
      <div>
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
      </div>

      {/* Submit button */}
      <div className="text-center">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-blue-900 px-10 py-3 text-white font-medium shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
 </section> 

    </main>
  );
}
