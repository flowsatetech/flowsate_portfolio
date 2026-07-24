'use client';
import React, { useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { serviceStats } from "@/constants/service-stats";
import Image from "next/image";
import { Badge } from "./ui/badge";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

interface StatItem {
  icon: string;
  num: string;
  title: string;
  desc: string;
}

interface StatItemProps {
  stat: StatItem;
  shouldAnimate: boolean;
}

const Stats = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 bg-[#E2EFFA] w-full px-4 sm:px-6 py-8 sm:py-10">
      {serviceStats.map((stat, index) => {
        const shouldAnimate = stat.num !== "24/7";
        
        return (
          <StatItem
            key={index}
            stat={stat}
            shouldAnimate={shouldAnimate}
          />
        );
      })}
    </div>
  );
};

const StatItem = ({ stat, shouldAnimate }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center text-center px-2"
    >
      <Card className="bg-[#D1EAFFF7]">
        <CardContent>
          <Image src={stat.icon} width={42} height={42} alt="stat icon" />
        </CardContent>
      </Card>
      
      <h1 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold text-black text-center leading-tight">
        {shouldAnimate ? (
          <CountUp
            end={getNumberValue(stat.num)}
            suffix={getSuffix(stat.num)}
            duration={2.5}
            separator=","
            start={isInView ? 0 : undefined}
          />
        ) : (
          stat.num
        )}
      </h1>
      
      <p className="mt-3 text-center text-xs sm:text-sm md:text-base font-semibold text-gray-700 leading-snug px-2">
        {stat.title}
      </p>
      
      <Badge className="mt-3 bg-[#ADDAFF] rounded-full px-3 py-1 max-w-full">
        <p className="text-[10px] sm:text-xs md:text-sm font-medium text-center whitespace-normal break-words leading-tight">
          {stat.desc}
        </p>
      </Badge>
    </div>
  );
};


function getNumberValue(numString: string): number {
  const numericValue = parseFloat(numString.replace(/[^\d.]/g, ''));
  return isNaN(numericValue) ? 0 : numericValue;
}

function getSuffix(numString: string): string {
  return numString.replace(/[\d.]/g, '');
}

export default Stats;