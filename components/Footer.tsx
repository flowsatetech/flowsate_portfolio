import Image from "next/image";
import Link from "next/link";
import React from "react";
import Github from "./icons/github";
import Facebook from "./icons/facebook";
import Tiktok from "./icons/tiktok";

const Footer = () => {
  return (
    <footer className="text-white py-10 px-3">
      <div className="max-w-7xl mx-auto grid md:grid-cols-6 gap-10">

        <div className="md:col-span-2">
          <Image
            src="/images/logo.png"
            alt="Flowsate logo"
            width={150}
            height={50}
            className="mb-4"
          />

          <p className="text-sm text-[#6B7280]">
            Professional technology solutions for modern businesses.
            We transform ideas into powerful digital experiences.
          </p>
        </div>

        <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          <div>
            <h3 className="text-xl font-semibold mb-3 text-black">
              Services
            </h3>

            <ul className="space-y-2 text-sm text-[#6B7280]">
              <li><Link href="/services" className="hover:text-[#010066]">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-[#010066]">Mobile Development</Link></li>
              <li><Link href="/services" className="hover:text-[#010066]">UI/UX Design</Link></li>
              <li><Link href="/services" className="hover:text-[#010066]">Artificial Intelligence</Link></li>
              <li><Link href="/services" className="hover:text-[#010066]">Cloud Solutions</Link></li>
              <li><Link href="/services" className="hover:text-[#010066]">Data Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-black">
              Industries
            </h3>

            <ul className="space-y-2 text-sm text-[#6B7280]">
              <li className="hover:text-[#010066]">Health Care</li>
              <li className="hover:text-[#010066]">Financial Services</li>
              <li className="hover:text-[#010066]">E-commerce</li>
              <li className="hover:text-[#010066]">Manufacturing</li>
              <li className="hover:text-[#010066]">SaaS Platforms</li>
              <li className="hover:text-[#010066]">Enterprise</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-black">
              Company
            </h3>

            <ul className="space-y-2 text-sm text-[#6B7280]">
              <li><Link href="/about" className="hover:text-[#010066]">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#010066]">Our Work</Link></li>
              <li><Link href="/contact" className="hover:text-[#010066]">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-[#010066]">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-black">
              Contact Us
            </h3>

            <ul className="space-y-2 text-sm text-[#6B7280]">
              <li>
                <a href="mailto:flowsate03@gmail.com" className="hover:text-[#010066]">
                  flowsate03@gmail.com
                </a>
              </li>

              <li>
                <a href="tel:+2349128800177" className="hover:text-[#010066]">
                  +234 912 88001 77
                </a>
              </li>
            </ul>

            <ul className="flex space-x-4 mt-4">

              <li>
                <Link
                  href="https://github.com/flowsatetech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                  className="hover:text-[#010066]"
                >
                  <Github size="20"/>
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.facebook.com/share/1LTnaz5EfJ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-[#010066]"
                >
                  <Facebook size="20"/>
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="hover:text-[#010066]"
                >
                  <Tiktok size="20"/>
                </Link>
              </li>

            </ul>

          </div>

        </div>
      </div>

      <div className="mt-10 border-t border-[#00000040] pt-6 text-center text-sm text-gray-400">

        © {new Date().getFullYear()} Flowsate Technologies Inc.

      </div>
    </footer>
  );
};

export default Footer;