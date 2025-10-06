"use client"; 

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-32 pb-20 text-center bg-gradient-to-b from-white to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <p className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full mb-4">
          Award-Winning Technology Solutions
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Enterprise Solutions for{" "}
          <span className="text-blue-600">Digital Excellence</span>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Transform your business with cutting-edge technology solutions
          designed for scale, security, and performance. We deliver
          enterprise-grade applications that drive measurable growth and
          operational excellence.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Schedule Free Consultation
          </Button>
          <Button variant="outline">Download Portfolio</Button>
        </div>
      </motion.div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {[
          { stat: "500+", label: "Projects Delivered" },
          { stat: "98%", label: "Client Satisfaction" },
          { stat: "24/7", label: "Support Available" },
          { stat: "15+", label: "Years Experience" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-blue-100/60 rounded-xl p-6 text-center shadow-sm"
          >
            <p className="text-3xl font-bold text-blue-600">{item.stat}</p>
            <p className="text-gray-700 text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}