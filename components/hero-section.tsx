
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
//import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="relative py-13 px-6 lg:px-12 bg-gradient-to-tl from-[#e3e7ff] via-[#f4f6ff] to-[#f9faff] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left side - Text */}
        <div>
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
            Best Tech Company
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
            <span className="text-[#010066] block">Designing experiences that</span>
            <span className="text-[#010066] block">people love and</span>
            <span className="text-[#010066] block">businesses trust.</span>
          </h1>

          <div className="flex flex-row gap-5 mt-10">

            <Button
              asChild
              className="px-8 py-4 text-white bg-[#010066] hover:bg-[#414141]"
            >
              <Link href="/contact">
                Start Your Project
              </Link>
            </Button>

            <Button
              variant="outline"
              asChild
              className="border-2 border-[#010066] bg-transparent text-[#010066] hover:bg-[#010066] hover:text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 cursor-pointer"
            >
              <Link href="/services">
                Explore Solutions
              </Link>
            </Button>

          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex justify-center md:justify-end relative">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/background2.webp"
              alt="Team working together"
              width={450}
              height={400}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 90vw, 450px"
              className="rounded-[2rem] object-cover"
            />
          </div>
        </div>

      </div>

      {/* Soft overlay gradient */}
       <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />

       <div className="absolute top-20 -left-16 w-64 h-64 bg-[#010066]/10 rounded-full blur-3xl" />

       <div className="absolute bottom-20 -right-16 w-72 h-72 bg-[#010066]/10 rounded-full blur-3xl" />

    </section>
  )
}

export default HeroSection