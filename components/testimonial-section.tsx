"use client"
import Image from "next/image"
import { useState } from "react"

// Static imports for images
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
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
        What Our Clients Say
      </h2>

      <div className="max-w-3xl mx-auto bg-blue-900 text-white rounded-3xl shadow-lg overflow-hidden flex flex-col sm:flex-row items-center gap-8 p-8 transition-transform duration-300 hover:scale-105">
        {/* Client Image */}
        <div className="flex-shrink-0">
          <div className="w-70 h-60 rounded-xl overflow-hidden border-4 border-white shadow-md">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <div key={currentIndex} aria-live="polite">
            <h3 className="text-xl font-semibold mb-1">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-blue-100 leading-relaxed">
              {testimonials[currentIndex].text}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={prevTestimonial}
              className="bg-gray-400 hover:bg-blue-800 w-7 h-7 flex items-center justify-center rounded-full transition"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-gray-400 hover:bg-blue-800 w-7 h-7 flex items-center justify-center rounded-full transition"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection