import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-10 px-3  ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-6 gap-10">
        {/* Company Info */}
        <div className="md:col-span-2">
          <Image
            src="/images/logo.png"
            alt="Flowsate"
            width={150}
            height={50}
            className="mb-4"
          />
          <p className="text-sm text-[#6B7280]">
            Professional technology solutions for modern businesses. We
            transform ideas into powerful digital experiences that drive growth
            and operational excellence.
          </p>
        </div>
        <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-black">Services</h3>
            <ul className="space-y-2 text-sm text-[#6B7280]">
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  UI/Ux Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-black">
              Industries
            </h3>
            <ul className="space-y-2 text-sm text-[#6B7280]">
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  Health Care
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  SaaS Platforms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-black">Company</h3>
            <ul className="space-y-2 text-sm text-[#6B7280]">
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-black">
              Contact us
            </h3>
            <ul className="space-y-2 text-sm text-[#6B7280]">
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  flowsate@gmail.com
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  +234-814-4099-74
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#010066]">
                  +234-814-4099-74
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-[#00000040] pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Flowsate Technologies Inc. All rights
        reserved. Built with precision and care.
      </div>
    </footer>
  );
};

export default Footer;
