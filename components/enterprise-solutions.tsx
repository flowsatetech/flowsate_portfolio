import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Calendar, Download } from "lucide-react";

const EnterpriseSolutions = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-24 lg:py-28">
      {/* Award Card */}
      <Card className="border-[#A1E0F985] shadow-sm">
        <CardContent className="flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4">
          <Image
            src="/images/tabler_award.png"
            width={33}
            height={33}
            alt="award"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <p className="font-medium text-[#000] text-xs sm:text-sm md:text-base">
            Award-Winning Technology Solutions
          </p>
        </CardContent>
      </Card>

      {/* Title */}
      <div className="mt-6 sm:mt-8 max-w-[900px]">
        <h1 className="font-bold text-2xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-snug text-gray-900">
          Enterprise Solutions for{" "}
          <span className="text-[#5BA0D7]">Digital Excellence</span>
        </h1>
      </div>

      {/* Description */}
      <div className="mt-4 sm:mt-6 max-w-[850px]">
        <p className="text-black/70 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Transform your business with cutting-edge technology solutions
          designed for scale, security, and performance. We deliver
          enterprise-grade applications that drive measurable growth and
          operational excellence.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row mt-8 sm:mt-10 gap-4 sm:gap-8">
        <Button className="flex items-center justify-center gap-3 bg-[#5BA0D7] text-white px-6 py-4 sm:px-8 sm:py-6 hover:bg-[#4b8ac1] transition-colors">
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
          <p className="text-sm sm:text-base font-medium">
            Schedule Free Consultation
          </p>
        </Button>

        <Button className="flex items-center justify-center gap-3 bg-[#EFEFEF] text-black px-6 py-4 sm:px-8 sm:py-6 hover:bg-gray-200 transition-colors">
          <Download className="w-5 h-5 sm:w-6 sm:h-6" />
          <p className="text-sm sm:text-base font-medium">Download Portfolio</p>
        </Button>
      </div>

      {/* Stats */}
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-6 mt-8 sm:mt-10 text-center">
        <p className="text-black/60 font-medium text-sm sm:text-base">
          Trusted by Fortune 500 companies
        </p>
        <p className="text-black/60 font-medium text-sm sm:text-base">
          ISO 27001 Certified
        </p>
        <p className="text-black/60 font-medium text-sm sm:text-base">
          99.9% Uptime
        </p>
      </div>
    </section>
  );
};

export default EnterpriseSolutions;