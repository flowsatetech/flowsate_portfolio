"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // icons

interface MobileNavProps {
  onLetsTalk: () => void;
}

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const MobileNav = ({ onLetsTalk }: MobileNavProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="relative" ref={menuRef}>
      <Button
        onClick={() => setOpen(!open)}
        variant="ghost"
        size="icon"
        className="text-[#010066] hover:bg-transparent focus:outline-none"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </Button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-4">
          <ul className="flex flex-col space-y-3 px-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`block px-2 py-1 rounded-md ${
                      isActive
                        ? "text-[#010066] font-semibold"
                        : "text-[#414141] hover:text-[#010066]"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="px-4 mt-4">
            <Button
              variant="default"
              className="w-full text-white bg-[#010066] hover:bg-[#414141]"
              onClick={() => {
                setOpen(false);
                onLetsTalk();
              }}
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
