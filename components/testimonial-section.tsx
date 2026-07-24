"use client"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react";

import emmanuel from "@/public/images/emmanuel.webp"
import martha from "@/public/images/martha.webp"
import fatima from "@/public/images/fatima.webp"

const testimonials = [
  {
    name: "Emmannuel Ugochukwu",
    text: "Flowsate transformed our entire digital infrastructure. Their expertise in cloud migration and process automation helped us reduce operational costs by 40% while improving efficiency.",
    image: emmanuel,
  },
  {
    name: "Martha Eze",
    text: "The e-commerce platform they built for us exceeded all expectations. We saw a 300% increase in online sales within the first quarter after launch.",
    image: martha,
  },
  {
    name: "Fatima Ibrahim",
    text: "Their UI/UX design work completely transformed our user experience. Customer satisfaction scores improved by 45% and user engagement doubled.",
    image: fatima,
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
    <section className="py-13 px-6 bg-white">
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

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between w-full">
          <button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all duration-300 hover:bg-white hover:text-[#010066]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all duration-300 hover:bg-white hover:text-[#010066]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        </div>
      </motion.div>
    </section>
  )
}

export default TestimonialsSection