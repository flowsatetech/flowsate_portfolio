"use client";

import { motion } from "framer-motion";
import { Cloud, Award, Globe } from "lucide-react";

export function CertificationsSection() {
  const certifications = [
    {
      icon: <Cloud size={40} className="mx-auto text-gray-700" />,
      title: "AWS Advanced Consulting Partner",
    },
    {
      icon: <Award size={40} className="mx-auto text-gray-700" />,
      title: "Microsoft Gold Partner",
    },
    {
      icon: <Globe size={40} className="mx-auto text-gray-700" />,
      title: "Salesforce Partner",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Industry Certifications & Partnerships
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="p-8 border rounded-2xl shadow-sm hover:shadow-md bg-white"
            >
              <div className="mb-4 flex justify-center">{cert.icon}</div>
              <p className="font-medium text-gray-800">{cert.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}