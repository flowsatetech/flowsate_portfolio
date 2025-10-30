import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { serviceCard } from "@/constants/service-card";
import { Button } from "./ui/button";

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {serviceCard?.map((service, index) => {
        return (
          <Card key={index} className="p-0 max-w-[651px] max-h-[695px]">
            <CardHeader className="p-0 relative">
              <div className="relative w-full h-70">
                {/* Background Image */}
                <Image
                  src={service.backgrounndImage}
                  alt={"background"}
                  fill
                  className="object-cover rounded-t-lg"
                />

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30 rounded-t-lg"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  {/* <h3 className="text-xl md:text-2xl font-bold text-center mb-2">
                    Service Title
                  </h3> */}
                  <Image
                    src={service.icon}
                    width={146}
                    height={146}
                    alt="icon"
                  />
                  <p className="text-sm md:text-3xl text-semibold text-center opacity-90 mt-4">
                    {service.title}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex">
                {/* Left Column - 30% */}
                <div className="w-[40%] pr-6">
                  <div className="space-y-3">
                    {service.type.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={24}
                          height={24}
                          // fill
                          // className="object-contain"
                        />

                        <p className="text-base text-[#494949D1] font-medium">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Vertical Divider */}
                <div className="w-px bg-gray-300 mx-6"></div>
                {/* Right Column - 70% */}
                <div className="w-[60%] pl-6">
                  <div className="flex flex-col items-center justify-center max-w-[391px] ">
                    <p className="text-base text-black/71 font-medium">
                      {service.description}
                    </p>
                    <div className="flex gap-6 mt-2">
                      <div className="flex flex-col">
                        <p className="font-semibold text-black text-lg">
                          {service.timeline}
                        </p>
                        <p>Timeline</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-semibold text-black text-lg">
                          {service.complexity}
                        </p>
                        <p>Complexity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="w-full">
                <p className="text-[#343434C2] font-normal text-sm mb-2">
                  Technologies:
                </p>
                <div className="flex flex-row gap-2">
                  {service.technologies.map((s, idx) => {
                    return (
                      <p
                        key={idx}
                        className="text-[#0C0C0CD1] font-medium text-sm"
                      >
                        {s}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* <div className="w-full flex justify-end pb-4">
                <Button className="bg-[#5BA0D7] text-white">
                  Learn More →
                </Button>
              </div> */}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ServiceCard;
