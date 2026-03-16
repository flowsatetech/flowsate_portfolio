"use client"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import test1 from "@/public/images/test1.jpg"
import test2 from "@/public/images/test2.jpg"
import test4 from "@/public/images/test4.jpg"

const testimonials = [
  {
    name: "Jane Doe",
    text: "Flowsate transformed our digital presence with precision and creativity. The team delivered on time and exceeded expectations.",
    image: test1,
  },
  {
    name: "John Smith",
    text: "Their professionalism and attention to detail were outstanding. I’ve never worked with a team this reliable before.",
    image: test2,
  },
  {
    name: "Sarah Lee",
    text: "Exceptional quality, clear communication, and outstanding results. I highly recommend their services.",
    image: test4,
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section className="py-20 px-6 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-center mb-12 text-gray-900"
      >
        What Our Clients Say
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-blue-900 text-white rounded-3xl shadow-lg overflow-hidden flex flex-col sm:flex-row items-center gap-8 p-8"
      >
        {/* Image */}
        <div className="flex-shrink-0">
          <div className="w-70 h-60 rounded-xl overflow-hidden border-4 border-white shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Text */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-1">
                {testimonials[currentIndex].name}
              </h3>

              <p className="text-blue-100 leading-relaxed">
                {testimonials[currentIndex].text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={prevTestimonial}
              className="bg-gray-400 hover:bg-blue-800 w-7 h-7 flex items-center justify-center rounded-full transition"
            >
              ←
            </button>

            <button
              onClick={nextTestimonial}
              className="bg-gray-400 hover:bg-blue-800 w-7 h-7 flex items-center justify-center rounded-full transition"
            >
              →
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default TestimonialsSection