import Link from "next/link";
import { Button } from "@/components/ui/button";
import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-6 xl:py-8 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl md:text-3xl font-bold text-[#010066]">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <DesktopNavbar />
        </div>

        <div 
        className="md:hidden"
        >
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
