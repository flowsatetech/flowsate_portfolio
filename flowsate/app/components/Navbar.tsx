import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-blue-400 rounded-full mr-3"></div> {/* Logo placeholder */}
        <span className="text-xl font-bold">Flowsate</span>
      </div>
      <div className="space-x-6">
        <Link href="#services" className="hover:text-blue-400 transition-colors">Services</Link>
        <Link href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link>
        <Button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">Book Call</Button>
      </div>
    </nav>
  );
} 