"use client";

import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/images/flowsate-logo.svg"
        alt="FlowSate Logo"
        width={40}
        height={40}
        priority
      />
      <span className="font-bold text-xl text-gray-900">FlowSate</span>
    </Link>
  );
}