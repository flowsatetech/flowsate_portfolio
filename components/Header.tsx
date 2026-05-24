"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";
import Modal from "@/components/Modal"; // default import
import Image from "next/image";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="py-6 xl:py-8 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex-shrink-0">
          <div className="text-2xl md:text-3xl font-bold text-[#010066]">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          </div>
        </Link>

        <div className="hidden md:flex items-center justify-center flex-1">
          <DesktopNavbar />
        </div>

        <div className="hidden md:block">
          <Button
            className="text-white bg-[#010066] hover:bg-[#414141]"
            onClick={() => setIsModalOpen(true)}
          >
            Get Started
          </Button>
        </div>

        <div className="md:hidden relative z-50">
          <MobileNavbar />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </header>
  );
};

export default Header;
