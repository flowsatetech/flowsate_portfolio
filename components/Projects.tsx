"use client";
import React from "react";
import { Card, CardHeader, CardTitle,CardDescription, CardFooter, CardContent } from "@/components/ui/card";
import { portfolioItems } from "@/utils/constants";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item, index) => (
        <Card key={index} className="flex flex-col h-full p-0">
            <CardHeader className="p-0">
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-1  pt-0 pb-0">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-[#828282]">
                {item.description}
              </p>
            </CardContent>
            <CardFooter className="flex flex-col items-start  pb-2">
                <span className="text-sm text-[#000000]">
                  {item.date}
                </span>
              
            </CardFooter>
          </Card>
      ))}
    </div>
  );
};

export default Projects;
