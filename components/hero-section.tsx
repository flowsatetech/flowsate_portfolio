"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button" // shadcn button

const HeroSection = () => {
    return (
        <section className="relative py-24 px-6 lg:px-12 bg-gradient-to-tl from-[#e3e7ff] via-[#f4f6ff] to-[#f9faff] overflow-hidden">
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

                    {/* Buttons */}
                    <div className="flex flex-row gap-4 mt-10">
                        {/* Primary Button */}
                        <Button
                            asChild
                            className="bg-[#010066] text-white hover:bg-[#010066] px-8 py-4 rounded-lg transition-all duration-300"
                        >
                            <Link href="/contact">
                                Get Started
                            </Link>
                        </Button>

                        {/* Outline Button */}
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
                </div>

                {/* Right side - Image */}
                <div className="flex justify-center md:justify-end relative">
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
                </div>
            </div>

            {/* Soft overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none"></div>

            {/* Floating blobs */}
            <div className="absolute top-20 -left-16 w-64 h-64 bg-[#010066]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 -right-16 w-72 h-72 bg-[#010066]/10 rounded-full blur-3xl"></div>
        </section>
    )
}

export default HeroSection