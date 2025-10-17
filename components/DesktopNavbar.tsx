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
  // { name: "Test", href: "/test" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center flex-1 space-x-4 md:space-x-4 ">
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
      </ul>
    </nav>
  );
};

export default Nav;
