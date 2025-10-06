"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  timeline: string;
  complexity: string;
  starting: string;
  features: string[];
  technologies: string[];
  image?: string;
  index?: number;
};

export function ServiceCard({
  title,
  description,
  timeline,
  complexity,
  starting,
  features,
  technologies,
  image,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
        {image && (
          <div className="relative h-56 w-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>

            {/* Text over image */}
            <div className="absolute top-4 left-4 right-4 text-white">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-200">{description}</p>
            </div>

            {/* Info overlay at bottom */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-around text-xs md:text-sm text-white font-medium">
              <div className="text-center">
                <p className="text-gray-300">Timeline</p>
                <p>{timeline}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-300">Complexity</p>
                <p>{complexity}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-300">Starting</p>
                <p>{starting}</p>
              </div>
            </div>
          </div>
        )}

        <CardContent className="p-6 space-y-4">
          <ul className="text-gray-600 space-y-2">
            {features.slice(0, 4).map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-blue-600">•</span> {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                +{technologies.length - 3} more
              </span>
            )}
          </div>

          <Button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
            Learn More →
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}