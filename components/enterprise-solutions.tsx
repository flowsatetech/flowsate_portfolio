import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Calendar, Download } from "lucide-react";

const EnterpriseSolutions = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Card className="border-[#A1E0F985] ">
        <CardContent className="flex items-center gap-2">
          <Image
            src="/images/tabler_award.png"
            width={33}
            height={33}
            alt="award"
          />
          <p className="font-medium text-[#000] text-xs md:text-base">
            Award-Winning Technology Solutions
          </p>
        </CardContent>
      </Card>
      <div className="mt-4 max-w-[939px]">
        <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl leading-tight md:leading-snug">
          Enterprise Solutions for{" "}
          <span className="text-[#5BA0D7]">Digital Excellence</span>
        </h1>
      </div>
      <div className="mt-4 max-w-[875px]">
        <p className="text-black/65 font-medium text-xs md:text-xl">
          Transform your business with cutting-edge technology solutions
          designed for scale, security, and performance. We deliver
          enterprise-grade applications that drive measurable growth and
          operational excellence.
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-4 gap-8">
        <Button className="bg-[#5BA0D7] p-6">
          <Calendar className="w-24 h-24" />
          <p className="text-white font-medium text-base">
            Schedule Free Consultaion
          </p>
        </Button>
        <Button className="bg-[#EFEFEF] text-black p-6">
          <Download className="w-24 h-24" />
          <p className="text-black font-medium text-base">Download Portfolio</p>
        </Button>
      </div>
      <div className="flex flex-col md:flex-row gap-1 md:gap-6 mt-4">
        <p className="text-black/46 font-medium text-base">
          Trusted by Fortune 500 companies
        </p>
        <p className="text-black/46 font-medium text-base">
          ISO 27001 Certified
        </p>
        <p className="text-black/46 font-medium text-base">99.9% Uptime</p>
      </div>
    </div>
  );
};

export default EnterpriseSolutions;
