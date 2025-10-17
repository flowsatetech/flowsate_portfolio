import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { serviceCard } from "@/constants/service-card";

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full justify-items-center">
      {serviceCard?.map((service, index) => (
        <Card
          key={index}
          className="w-full max-w-[400px] md:max-w-[480px] lg:max-w-[500px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          {/* Card Header */}
          <CardHeader className="p-0 relative h-56 sm:h-64 md:h-72">
            <Image
              src={service.backgrounndImage}
              alt={"background"}
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
              <Image src={service.icon} width={80} height={80} alt="icon" />
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center mt-3">
                {service.title}
              </p>
            </div>
          </CardHeader>

          {/* Card Body */}
          <CardContent className="p-5 sm:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-stretch gap-4">
              {/* Left Column */}
              <div className="md:w-[40%] space-y-3">
                {service.type.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                    <p className="text-sm md:text-base text-[#494949D1] font-medium">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider (hidden on small screens) */}
              <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

              {/* Right Column */}
              <div className="md:w-[60%]">
                <p className="text-sm md:text-base text-black/70 font-medium">
                  {service.description}
                </p>

                <div className="flex flex-wrap justify-between gap-3 mt-3">
                  <div className="text-center md:text-left">
                    <p className="font-semibold text-black text-base md:text-lg">
                      {service.timeline}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">Timeline</p>
                  </div>

                  <div className="text-center md:text-left">
                    <p className="font-semibold text-black text-base md:text-lg">
                      {service.complexity}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">Complexity</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>

          {/* Card Footer */}
          <CardFooter className="px-5 sm:px-6 pb-5">
            <div className="w-full">
              <p className="text-[#343434C2] font-normal text-sm mb-2">
                Technologies:
              </p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <p
                    key={idx}
                    className="text-[#0C0C0CD1] font-medium text-sm bg-gray-100 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ServiceCard;