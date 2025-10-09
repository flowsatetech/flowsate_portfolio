import React from "react";
import { Card, CardContent } from "./ui/card";
import { serviceStats } from "@/constants/service-stats";
import Image from "next/image";
import { Badge } from "./ui/badge";

const Stats = () => {
  return (
    <div className="flex items-center justify-center gap-50 bg-[#E2EFFA] w-full px-4 py-10">
      {serviceStats.map((stat, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Card className="bg-[#D1EAFFF7]">
              <CardContent>
                <Image src={stat.icon} width={42} height={42} alt="stat icon" />
              </CardContent>
            </Card>
            <h1 className="text-5xl font-semibold text-black mt-4">
              {stat.num}
            </h1>
            <p className="text-[#000000A3] font-medium text-base mt-4">
              {stat.title}
            </p>
            <Badge className="bg-[#ADDAFF] mt-4 rounded-full px-4">
              <p className="text-[#000000] font-medium text-sm ">{stat.desc}</p>
            </Badge>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
