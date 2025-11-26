"use client";

import React, { useState } from "react";
import { buisnessCard } from "@/constants/buisness-card";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Calendar, Download } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";

const TransformBusiness = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const calendlyUrl = "https://calendly.com/flowsatedevteams/30min";

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed py-30"
      style={{
        backgroundImage: "url('/images/transform-buisness-background.png')",
      }}
    >
      <div className="flex flex-col items-center justify-center text-center px-4 py-8">
        <h1 className="font-bold text-white text-3xl md:text-5xl leading-tight md:leading-snug">
          Ready to Transform Your Business?
        </h1>
        <div className="mt-4 max-w-[1148px]">
          <p className="text-white font-normal text-xl sm:text-2xl">
            Join hundreds of successful companies who have transformed their
            operations with our technology solutions.
          </p>
        </div>
        <div className="mt-4 max-w-[500px]">
          <p className="text-white font-normal text-xl sm:text-2xl">
            Get started with a free consultation and custom project estimate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-10 mb-10">
          {buisnessCard.map((bs, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <Card className="flex items-center justify-center border-[#192C4F] bg-[#192C4F] w-18 h-18">
                  <CardContent>
                    <Image
                      src={bs.image}
                      width={24}
                      height={24}
                      alt="stat icon"
                    />
                  </CardContent>
                </Card>
                <p className="font-bold text-normal mt-4 text-white">
                  {bs.title}
                </p>
                <p className="font-medium text-normal mt-2 text-white">
                  {bs.desc}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row mt-8 gap-20">
          <Button
            className="bg-[#5BA0D7] p-6 w-80 hover:bg-[#4A90C4] transition-colors"
            onClick={() => setIsCalendlyOpen(true)}
          >
            <Calendar className="w-6 h-6 mr-2" />
            <p className="text-white font-medium text-base">
              Schedule Free Consultation
            </p>
          </Button>
          <Button className="bg-[#EFEFEF] text-black p-6 w-80 hover:bg-gray-200 transition-colors">
            <p className="text-black font-medium text-base">Get Custom Quote</p>
          </Button>
        </div>
        <p className="text-white mt-10 font-medium text-lg">
          ✓ No commitment required ✓ Response within 24 hours ✓ NDA available
        </p>
      </div>

      <Dialog open={isCalendlyOpen} onOpenChange={setIsCalendlyOpen}>
        <DialogContent className="max-w-4xl h-[80vh] sm:h-[90vh] p-0 border-0">
          <div className="w-full h-full">
            <iframe
              src={calendlyUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule Free Consultation"
              className="rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TransformBusiness;
