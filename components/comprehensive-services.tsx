import React from "react";
import ServiceCard from "./service-card";

const ComprehensiveServices = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-10 md:py-16 lg:py-20">
      <div className="text-center max-w-[754px]">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black leading-tight">
          Our Comprehensive Services
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-medium text-black/65 mt-4 sm:mt-6 px-2 sm:px-6 md:px-12">
          Explore our full range of technology solutions designed to accelerate
          your business growth and digital transformation journey.
        </p>
      </div>

      {/* Service Cards Section */}
      <div className="mt-8 w-full">
        <ServiceCard />
      </div>
    </div>
  );
};

export default ComprehensiveServices;