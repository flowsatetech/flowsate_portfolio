"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const points = [
  {
    text: "At Flowsate, we bring together experts from different areas of tech to deliver solutions that are modern, reliable, and built to scale.",
    bold: false,
  },
  {
    text: "Cross-disciplinary Expertise - A team of designers, developers, and strategists working together to deliver end-to-end solutions.",
    bold: true,
  },
  {
    text: "Proven Reliability - Transparent process, clear communication, and results you can trust.",
    bold: true,
  },
  {
    text: "Tailored Solutions - We design and build with your unique business needs in mind, not just templates.",
    bold: true,
  },
  {
    text: "Modern & Scalable Tech - From web and mobile apps to cloud solutions, we use technologies that grow with your business.",
    bold: true,
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const WhyFlowsateSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Why Flowsate?
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-64 lg:h-[350px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/tech.png"
              alt="Why Flowsate"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Text Points */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            {points.map((point, index) => (
              <motion.div key={index} variants={item}>
                <p className="text-gray-600">
                  {point.bold ? (
                    <>
                      <span className="font-bold lg:font-semibold">
                        {point.text.split(" - ")[0]}
                      </span>{" "}
                      - {point.text.split(" - ")[1]}
                    </>
                  ) : (
                    <span className="text-gray-900 font-bold lg:font-semibold">
                      {point.text}
                    </span>
                  )}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default WhyFlowsateSection