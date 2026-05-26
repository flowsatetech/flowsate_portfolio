"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

import { portfolioItems } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

interface ProjectsProps {
  category?: string;
}

const Projects = ({ category }: ProjectsProps) => {
  const filteredProjects =
    category === "projects"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === category
        );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {filteredProjects.length > 0 ? (

        filteredProjects.map((item) => (

          <Link
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="group flex flex-col h-full p-0 overflow-hidden cursor-pointer hover:shadow-lg transition">

              <CardHeader className="p-0">
                <div className="relative w-full aspect-[16/9] overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500"/>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">

                    <span className="text-white font-semibold text-lg">
                      View Project →
                    </span>

                  </div>

                </div>
              </CardHeader>

              <CardContent className="flex-1 py-4">
                <h2 className="text-lg font-semibold mb-2">
                  {item.title}
                </h2>

                <p className="text-sm text-[#828282]">
                  {item.description}
                </p>
              </CardContent>

              <CardFooter>
                <span className="text-sm text-black">
                  {item.date}
                </span>
              </CardFooter>

            </Card>
          </Link>
        ))

      ) : (

        <div className="col-span-full text-center py-10 text-gray-500">

          No projects available

        </div>

      )}
    </div>
  );
};

export default Projects;