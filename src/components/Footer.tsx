"use client";

import Image from "next/image"; // ✅ import at the top
import { Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.svg.png"  // ✅ put your logo here
                alt="Flowsate Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <h3 className="text-xl font-semibold">Flowsate</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Professional technology solutions for modern businesses. We
              transform ideas into powerful digital experiences that drive
              growth and operational excellence.
            </p>
            <div className="flex items-center gap-2 mt-6 text-gray-800">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+234-814-4099-74</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Services</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>UI/UX Design</li>
              <li>Artificial Intelligence</li>
              <li>Cloud Solutions</li>
              <li>Data Analytics</li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Industries</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Health Care</li>
              <li>Financial Services</li>
              <li>E-commerce</li>
              <li>Manufacturing</li>
              <li>SaaS Platforms</li>
              <li>Enterprise</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Company</h4>
            <ul className="space-y-2 text-gray-700">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Resources</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Case Studies</li>
              <li>API Reference</li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Flowsate Technologies Inc. All rights
            reserved. Built with precision and care.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-700">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Security Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}