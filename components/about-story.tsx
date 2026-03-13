"use client";
import Image from "next/image";

const AboutStory = () => (
  <section className="relative flex justify-center py-20 px-6 bg-gray-50">
    <div className="relative w-full max-w-6xl rounded-md overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/images/about-bg.png"
          alt="About background"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#4579A4] opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto py-16 px-6 text-center text-white">
        <h1 className="text-4xl sm:text-5xl text-[#010066] font-bold mb-6">
          Our Story
        </h1>
        <p className="text-base sm:text-lg leading-relaxed opacity-95">
          At <span className="text-[#010066] font-semibold">Flowsate</span>, we specialize in delivering smart, reliable, and modern tech services to both companies and individuals. Our mission is simple — to make technology work seamlessly for you. We combine innovation, expertise, and a customer-first approach to create tailored solutions that solve real problems, drive growth, and simplify digital experiences. Whether it’s building scalable systems, providing IT support, or helping businesses transform digitally, we are committed to excellence in everything we do. With a team of skilled professionals and a passion for innovation, Flowsate is more than just a service provider — we are your trusted partner in navigating today’s fast-moving digital world.
        </p>
      </div>
    </div>
  </section>
);

export default AboutStory;