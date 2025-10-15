import React from "react";
import ServiceCard from "./service-card";

const ComprehensiveServices = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-15">
      <div className="text-center max-w-[754px]">
        <h1 className="text-xl md:text-5xl font-bold text-black">
          Our Comprehensive Services
        </h1>
        <p className="text-xs md:text-lg font-medium text-black/65 mt-6 px-4 md:px-12">
          Explore our full range of technology solutions designed to accelerate
          your business growth and digital transformation journey
        </p>
      </div>
      {/* <ServiceCard /> */}
    </div>
  );
};

export default ComprehensiveServices;
