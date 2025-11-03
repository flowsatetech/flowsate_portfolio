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
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#E2EFFA] w-full px-4 py-10">
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
    <div ref={ref} className="flex flex-col items-center justify-center">
      <Card className="bg-[#D1EAFFF7]">
        <CardContent>
          <Image src={stat.icon} width={42} height={42} alt="stat icon" />
        </CardContent>
      </Card>
      
      <h1 className="text-3xl sm:text-5xl font-semibold text-black mt-4">
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
      
      <p className="text-[#000000A3] font-medium text-base mt-4">
        {stat.title}
      </p>
      
      <Badge className="bg-[#ADDAFF] mt-4 rounded-full px-4">
        <p className="text-[#000000] font-medium text-sm ">{stat.desc}</p>
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