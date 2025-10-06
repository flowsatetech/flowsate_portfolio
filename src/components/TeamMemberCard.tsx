"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

type TeamMemberProps = {
  name: string;
  role: string;
  experience: string;
  expertise: string[];
  certifications: string[];
  image?: string; // Optional so you can add later
  index?: number;
};

export function TeamMemberCard({
  name,
  role,
  experience,
  expertise,
  certifications,
  image,
  index = 0,
}: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="text-center rounded-2xl border border-blue-100 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white">
        {/* 👤 Optional Image */}
        {image ? (
          <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border border-blue-100">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 96px"
            />
          </div>
        ) : (
          <div className="bg-blue-50 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
            <Users className="text-blue-500 w-6 h-6" />
          </div>
        )}

        {/* 🧾 Name & Role */}
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-blue-500 font-medium">{role}</p>

        {/* ⏱ Experience */}
        <p className="text-gray-700 mt-2">{experience}</p>

        {/* 💼 Expertise */}
        <div className="mt-4">
          <h4 className="text-gray-800 font-medium mb-1">Expertise:</h4>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
            {expertise.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>

        {/* 🏅 Certifications */}
        <div className="mt-4">
          <h4 className="text-gray-800 font-medium mb-1">Certifications:</h4>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
            {certifications.map((cert, i) => (
              <span key={i}>{cert}</span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}