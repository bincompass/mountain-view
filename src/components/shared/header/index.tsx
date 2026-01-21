import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/logos/main-logo.svg"
            alt="Nile Developments Logo"
            width={150}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navbar & Mobile Menu */}
        <Navbar />
      </div>
    </header>
  );
}
