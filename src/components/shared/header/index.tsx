"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="absolute top-0 z-50 w-full bg-white lg:bg-transparent border-b border-gray-100 lg:border-none">
      <div className="container flex h-20 lg:h-24 items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/logos/logo-blue.png"
            alt="Mountain View Logo"
            width={150}
            height={60}
            className="h-8 lg:h-12 w-auto lg:brightness-0 lg:invert"
            priority
          />
        </Link>

        {/* Desktop Navbar & Mobile Menu */}
        <div className="lg:fixed lg:top-6 lg:right-6 xl:lg:right-32 z-50">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
