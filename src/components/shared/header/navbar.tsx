"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Phone, Menu, Calendar } from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./mobile-menu";

export const navLinks = [
  { title: "Communities", href: "/#projects" },
  { title: "Evia", href: "/#evia" },
  { title: "Innovation", href: "/#innovation" },
  { title: "The Lighthouse", href: "/#lighthouse" },
  { title: "Latest News", href: "/#news" },
  { title: "Contact us", href: "/calendly" },
];

export default function Navbar({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div
        className={cn(
          "flex items-center relative transition-all duration-200",
          "lg:bg-white lg:shadow-lg lg:border lg:border-gray-100",
          open ? "lg:rounded-t-md" : "lg:rounded-md",
        )}
        ref={dropdownRef}
      >
        {/* Mobile Menu */}
        <MobileMenu />

        {/* Desktop Menu (Dropdown) */}
        <div
          className="hidden lg:block h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center gap-2 px-4 py-3 border-r border-gray-100 group cursor-default h-full">
            <Menu className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-[12px] font-bold text-primary tracking-wider uppercase">
              Menu
            </span>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-[-1px] w-[calc(100%+2px)] bg-white rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-x border-b border-gray-100 overflow-hidden z-[60] py-4"
              >
                <nav className="flex flex-col">
                  {navLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="px-8 py-3 hover:bg-gray-50/50 transition-all group"
                    >
                      <span className="text-[1.1rem] font-medium text-primary block group-hover:translate-x-2 transition-transform duration-300">
                        {link.title}
                      </span>
                    </Link>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Phone Number */}
        <a
          href={`tel:${phoneNumber}`}
          className="hidden lg:flex items-center gap-2 px-4 py-3 hover:bg-gray-50 transition-colors border-r border-gray-100 group"
        >
          <Phone className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
          <span className="text-sm font-semibold text-gray-600">
            {phoneNumber}
          </span>
        </a>

        {/* Register Interest Button */}
        <Link
          href="/calendly"
          className={cn(
            "hidden lg:flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white transition-all active:scale-95",
            open ? "rounded-tr-md" : "rounded-r-md",
          )}
        >
          <Calendar className="h-4 w-4" />
          <span className="text-[12px] font-bold tracking-wider uppercase">
            Register Interest
          </span>
        </Link>
      </div>
    </div>
  );
}
