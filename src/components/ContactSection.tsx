"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, FileText, Rocket } from "lucide-react";

export function ContactSection() {
  const features = [
    {
      icon: <Phone className="w-6 h-6 text-blue-300" />,
      title: "Free Consultation",
      description: "30-minute strategy session",
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-300" />,
      title: "Custom Proposal",
      description: "Tailored solution & pricing",
    },
    {
      icon: <Rocket className="w-6 h-6 text-blue-300" />,
      title: "Project Kickoff",
      description: "Start within 2 weeks",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-[#041C32] via-[#062C4C] to-[#0A3A68] text-white"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to Transform Your Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Join hundreds of successful companies who have transformed their
          operations with our technology solutions. Get started with a free
          consultation and custom project estimate.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0E2940]/90 rounded-2xl p-6 shadow-md hover:shadow-lg border border-blue-900 transition-all"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 bg-blue-950/40 rounded-xl">{feature.icon}</div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-base rounded-xl shadow-md">
            Schedule Free Consultation
          </Button>
          <Button
            variant="outline"
            className="bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 px-8 py-3 text-base rounded-xl shadow-md"
          >
            Get Custom Quote
          </Button>
        </div>

        {/* Footer note */}
        <p className="text-sm text-gray-400 mt-4">
          ✓ No commitment required &nbsp; • &nbsp; ✓ Response within 24 hours &nbsp; • &nbsp; ✓ NDA available
        </p>
      </div>
    </section>
  );
}