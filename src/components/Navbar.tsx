"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="w-full fixed top-0 bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* ✅ FlowSate Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/flowsatelogo.png"
            alt=""
            width={140}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* ✅ Navigation Links */}
        <div className="hidden md:flex gap-8 text-gray-700">
          <Link href="#services" className="hover:text-blue-600">
            Services
          </Link>
          <Link href="#team" className="hover:text-blue-600">
            Team
          </Link>
          <Link href="#clients" className="hover:text-blue-600">
            Clients
          </Link>
          <Link href="#contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* ✅ Button */}
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Get a Quote
        </Button>
      </div>
    </nav>
  );
}