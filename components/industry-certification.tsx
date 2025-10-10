import React from "react";
import { certificateCard } from "@/constants/certificate-card";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const IndustryCertification = () => {
  return (
    <div className="flex flex-col item-center justify-center text-center px-4 pt-10 pb-30">
      <h1 className="text-3xl md:text-5xl font-bold text-black">
        Industry Certifications & Partnerships
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10">
      {certificateCard.map((cer, index) => {
        return (
          <div key={index} className="flex flex-col items-center justify-center">
            <Card className="flex items-center justify-center border-[#5BA0D7] w-28 h-28">
              <CardContent>
                <Image src={cer.image} width={42} height={42} alt="stat icon" />
              </CardContent>
            </Card>
            <p className="font-medium text-normal mt-4">{cer.title}</p>
          </div>
          
        );
      })}
      </div>
    </div>
  );
};

export default IndustryCertification;
