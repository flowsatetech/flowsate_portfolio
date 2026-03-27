"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { portfolioItems } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item, index) => (
        <Link href={item?.link} target="_blank" rel="noopener noreferrer">
          <Card
            key={index}
            className="group flex flex-col h-full p-0 overflow-hidden cursor-pointer"
          >
            <CardHeader className="p-0">
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <span className="text-white font-semibold text-lg">
                    View Project →
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1  pt-0 pb-0">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-[#828282]">{item.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start  pb-2">
              <span className="text-sm text-[#000000]">{item.date}</span>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
