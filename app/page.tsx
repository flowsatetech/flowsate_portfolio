
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  // Carousel state
  const slides = [
    { image: "/images/pic1.jpg" },
    { image: "/images/pic2.jpg" },
    { image: "/images/pic3.jpg" },
    { image: "/images/pic4.jpg" },
    { image: "/images/pic5.jpg" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
        </svg>
      ),
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences that convert visitors into customers."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Web Development",
      description: "Building fast, secure, and scalable websites using modern technologies and best practices."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for modern applications."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and reporting."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2m-5 3v6m0 0v6" />
        </svg>
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
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "/api/placeholder/80/80",
      text: "Flowsate transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations."
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthCo",
      image: "/api/placeholder/80/80",
      text: "Working with Flowsate was a game-changer. They delivered a solution that not only looks great but performs exceptionally well."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, InnovateLab",
      image: "/api/placeholder/80/80",
      text: "The team at Flowsate understood our vision perfectly and brought it to life with remarkable precision and creativity."
    }
  ];

  return (
   <main className="min-h-screen">
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Column: Text + Buttons */}
      <div className="text-center lg:text-left lg:pr-15">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
          <span className="whitespace-nowrap">
            Designing <span className="text-purple-900">experiences</span> that
          </span>{" "}
          <span className="whitespace-nowrap">
            people love and <span className="text-purple-900">businesses</span>
          </span>{" "}
          <span className="text-purple-900">trust.</span>
        </h1>
{/* Buttons */}

{/* Buttons */}
<div className="flex flex-row gap-4 mt-6 justify-center lg:justify-start">
  <Link
    href="/services"
    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
  >
    Get Started
  </Link>
  <Link
    href="/services"
    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
  >
    Learn More
  </Link>
</div>

</div>
      {/* Right Column: Image */}
      <div className=" flex-1 flex justify-center lg:justify-end lg:ml-12">
        <div className="relative w-full max-w-md h-64 sm:h-72 md:h-80 lg:h-72 rounded-2xl shadow-2xl overflow-hidden">
          <Image
            src="/images/image3.jpg"
            alt="Hero Image"
            fill
            className="object-cover"
            priority
          />
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>
      </div>

   <div className="mt-12 relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg">
      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 h-64 sm:h-80 md:h-96 relative p-2"
          >
            <Image
              src="/images/image5.jpg"
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
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
        src="/images/image1.jpg" // ✅ replace with your image
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our most successful projects that showcase our expertise and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src="/images/pic 4.jpg"
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <Link
                    href="/projects"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    View Details
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <Image
                    src="/images/image2.jpg"
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
           
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                        submit                
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}