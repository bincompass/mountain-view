"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  ArrowRight,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  company: [
    { name: "Life at MV", href: "/" },
    { name: "Our Story", href: "/", scrollTo: "story-section" },
    { name: "Sustainability", href: "/" },
    { name: "MV Foundation", href: "/" },
    { name: "Media Room", href: "/", scrollTo: "news" },
    { name: "E-Services", href: "/" },
  ],
  help: [
    { name: "Contact Us", href: "/", scrollTo: "register-interest" },
    { name: "Careers", href: "/" },
  ],
  socials: [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    scrollTo?: string,
  ) => {
    if (scrollTo) {
      e.preventDefault();
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#000F3D] text-white pt-12 pb-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-32">
        {/* Top Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row justify-between items-center pb-12 border-b border-white/10 gap-8"
        >
          <div className="flex items-center gap-8 flex-wrap justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Link href="/" className="block">
                <Image
                  src="/assets/images/logos/main-logo.png"
                  alt="Mountain View Logo"
                  width={220}
                  height={60}
                  className="h-10 md:h-12 w-auto brightness-0 invert"
                />
              </Link>
            </motion.div>
            <div className="hidden md:block w-px h-8 bg-white/20" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex items-center gap-5"
            >
              {footerLinks.socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="text-white/60 hover:text-white transition-all hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group"
          >
            <ChevronUp className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
          </motion.button>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="text-4xl md:text-5xl font-normal tracking-tight"
              >
                Stay in the Loop.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="text-white/60 text-lg font-light max-w-md leading-relaxed"
              >
                Sign up to receive the latest updates on new projects, exclusive
                offers and events.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative max-w-md"
            >
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white text-[#000F3D] px-6 py-5 rounded-sm outline-none placeholder:text-[#000F3D]/40 text-lg"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-[#001A70] hover:translate-x-1 transition-transform">
                <ArrowRight className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>

          {/* Links Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="lg:col-span-6 grid grid-cols-2 gap-8 lg:justify-items-end"
          >
            <div className="space-y-8">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="text-[12px] tracking-[0.2em] uppercase text-white/40 font-medium"
              >
                COMPANY
              </motion.h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.05,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) =>
                        isHomePage && handleSmoothScroll(e, link.scrollTo)
                      }
                      className="text-base text-white/80 hover:text-white transition-colors font-light"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="text-[12px] tracking-[0.2em] uppercase text-white/40 font-medium"
              >
                HELP
              </motion.h4>
              <ul className="space-y-4">
                {footerLinks.help.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.05,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) =>
                        isHomePage && handleSmoothScroll(e, link.scrollTo)
                      }
                      className="text-base text-white/80 hover:text-white transition-colors font-light"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-sm text-white/40 font-light"
          >
            Copyright © 2026 Mountain View. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-sm text-white/40 font-light"
          >
            Design & Development by Mitch Designs
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
