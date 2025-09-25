'use client';
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const pathname = usePathname();
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        <ul className="flex space-x-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "text-[#010066] "
                      : "text-[#414141] hover:text-[#010066]"
                  }`}

              >
                {link.name}
              </Link>
            </li>
          )
        }
        )}
        </ul>
        <Button
          variant="default"
          className="text-white border-white bg-[#010066] hover:text-gray-800"
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
