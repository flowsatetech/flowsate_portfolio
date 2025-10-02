"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <ul className="flex space-x-6">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "text-[#010066] font-semibold"
                  : "text-[#414141] hover:text-[#010066]"
              }`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
      <li>
        <Button className="text-white bg-[#010066] hover:bg-[#414141]">
          Get Started
        </Button>
      </li>
    </ul>
  );
};

export default Nav;
