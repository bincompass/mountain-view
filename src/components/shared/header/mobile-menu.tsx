"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, Calendar, X } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { navLinks } from "./navbar";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "16201";

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setOpen(false);

    // If it's an anchor link on the same page
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.replace("/#", "");

      // Add a small delay to allow the sheet to close and body overflow to reset
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <div className="lg:hidden flex items-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="flex items-center gap-2 px-3 py-1.5 transition-colors group">
            <Menu className="h-5 w-5 text-[#001A70] group-hover:scale-110 transition-transform" />
            <span className="text-[14px] font-medium text-[#001A70] uppercase tracking-wide">
              Menu
            </span>
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-full p-0 border-none bg-white"
          hideClose
        >
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <div className="flex flex-col h-full overflow-hidden">
            {/* Header in Sheet */}
            <div className="px-6 py-6 border-b border-gray-50 flex items-center justify-between">
              <Image
                src="/assets/images/logos/logo-blue.png"
                alt="Mountain View Logo"
                width={120}
                height={40}
                className="h-6 w-auto object-contain"
              />
              <button
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-primary" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col py-6 overflow-y-auto flex-1 px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="py-2 group"
                >
                  <span className="text-2xl font-normal text-primary hover:opacity-70 transition-all">
                    {link.title}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="p-8 space-y-4">
              <Link
                href="/#register-interest"
                onClick={(e) => handleLinkClick(e, "/#register-interest")}
                className="flex items-center justify-center gap-3 px-6 py-5 bg-[#001A70] text-white text-sm font-bold uppercase tracking-wider rounded-md active:scale-[0.98] transition-all w-full"
              >
                <Calendar className="h-4 w-4" />
                <span>Register Interest</span>
              </Link>

              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-3 px-6 py-5 border border-gray-200 text-[#001A70] text-sm font-bold uppercase tracking-wider rounded-md active:scale-[0.98] transition-all w-full"
              >
                <Phone className="h-4 w-4" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
