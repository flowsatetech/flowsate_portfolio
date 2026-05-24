"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="relative py-24 px-6 lg:px-12 bg-gradient-to-tl from-[#e3e7ff] via-[#f4f6ff] to-[#f9faff] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left side - Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
            Best Tech Company
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
            <span className="text-[#010066] block">Designing experiences that</span>
            <span className="text-[#010066] block">people love and</span>
            <span className="text-[#010066] block">businesses trust.</span>
          </h1>

          <div className="flex flex-row gap-4 mt-10">

            <Button
              asChild
              className="bg-[#010066] text-white hover:bg-[#010066] px-8 py-4 rounded-lg transition-all duration-300"
            >
              <Link href="/contact">
                Get Started
              </Link>
            </Button>

            <Button
              variant="outline"
              asChild
              className="border-[#010066] text-[#010066] hover:bg-[#010066] hover:text-white px-8 py-4 rounded-lg transition-all duration-300"
            >
              <Link href="/services">
                Learn More
              </Link>
            </Button>

          </div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          className="flex justify-center md:justify-end relative"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/background2.png"
              alt="Team working together"
              width={450}
              height={400}
              className="object-cover rounded-[2rem]"
              priority
            />
          </div>
        </motion.div>

      </div>

      {/* Soft overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none"></div>

      {/* Floating blobs animation */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-20 -left-16 w-64 h-64 bg-[#010066]/10 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-20 -right-16 w-72 h-72 bg-[#010066]/10 rounded-full blur-3xl"
      ></motion.div>

    </section>
  )
}

export default HeroSection