"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Menu,
  Calendar,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { navLinks } from "./navbar";
import { usePathname, useRouter } from "next/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
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

  const socialLinks = [
    { icon: Facebook, href: "#" },
    {
      icon: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "#",
    },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
  ];

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
                href="/calendly"
                onClick={() => setOpen(false)}
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

              {/* Social Follow */}
              <div className="pt-8 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center p-2">
                      <Image
                        src="/assets/images/logos/main-logo.png"
                        alt="Logo Mark"
                        width={24}
                        height={24}
                        className="brightness-0 invert object-contain"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                      Follow Us
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    {socialLinks.map((social, idx) => {
                      const Icon = social.icon;
                      return (
                        <Link
                          key={idx}
                          href={social.href}
                          className="text-[#001A70] hover:opacity-70 transition-opacity"
                        >
                          <Icon className="h-5 w-5" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
