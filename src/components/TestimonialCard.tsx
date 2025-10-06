"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, User } from "lucide-react";

type TestimonialProps = {
  name: string;
  role: string;
  company: string;
  text: string;
  service: string;
  image: string;
  rating: number;
  index?: number;
};

export function TestimonialCard({
  name,
  role,
  company,
  text,
  service,
  image,
  rating,
  index = 0,
}: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 bg-white">
        <CardContent className="p-6 flex flex-col justify-between h-full">
          {/* Rating Stars */}
          <div className="flex text-yellow-400 mb-2">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400" />
            ))}
          </div>

          {/* Service / Category */}
          <p className="text-sm font-medium text-gray-600 mb-3">{service}</p>

          {/* Testimonial Text */}
          <p className="text-gray-800 text-sm leading-relaxed mb-6">"{text}"</p>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4" />

          {/* Client Info */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-3 rounded-full">
              {image ? (
                <Image
                  src={image}
                  alt={name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
              ) : (
                <User className="w-6 h-6 text-blue-500" />
              )}
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold text-sm">{name}</h4>
              <p className="text-gray-600 text-xs">
                {role}, {company}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}