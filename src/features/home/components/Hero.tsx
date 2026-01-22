"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Info, Headset } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-[90vh] lg:h-[92vh] w-full flex flex-col justify-center items-center overflow-hidden font-sans"
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0 -z-10 h-full w-full overflow-hidden"
      >
        <Image
          src="/assets/images/heros/hero.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center scale-110"
        />
        {/* Sophisticated overlay: subtle base darkening only to ensure full coverage without borders */}
        <div className="absolute inset-0 bg-black/60 h-full w-full" />
      </motion.div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-5xl mx-auto mt-20 md:mt-0">
        <h1 className="flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-none"
          >
            Where No <br className="md:hidden" /> Competition
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#f24e1e] text-6xl sm:text-8xl md:text-8xl lg:text-9xl font-serif italic uppercase leading-[0.8] mt-2 md:mt-4"
          >
            Reaches
          </motion.span>
        </h1>
      </div>

      {/* Bottom Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-12 left-0 right-0 px-6 md:px-20 flex flex-col md:flex-row items-center md:justify-center gap-8 z-10"
      >
        {/* Action Buttons Container */}
        <div className="bg-[#1a1a1a]/80 backdrop-blur-md rounded-full p-2 flex items-center gap-2 border border-white/5 mx-auto md:mx-0">
          <Button
            onClick={() => handleScrollTo("about")}
            variant="ghost"
            className="hidden md:flex rounded-full text-white hover:bg-white/10 hover:text-white px-5 h-10 items-center gap-3 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full border border-[#f24e1e]/50 flex items-center justify-center group-hover:border-[#f24e1e] group-hover:bg-[#f24e1e]/10 transition-colors">
              <Info className="w-4 h-4 text-[#f24e1e]" />
            </div>
            <span className="uppercase text-[13px] font-bold tracking-widest">
              About Us
            </span>
          </Button>

          <Button
            onClick={() => handleScrollTo("contact")}
            variant="ghost"
            className="rounded-full text-white hover:bg-white/10 hover:text-white px-5 h-10 flex items-center gap-3 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full border border-[#f24e1e]/50 flex items-center justify-center group-hover:border-[#f24e1e] group-hover:bg-[#f24e1e]/10 transition-colors">
              <Headset className="w-4 h-4 text-[#f24e1e]" />
            </div>
            <span className="uppercase text-[13px] font-bold tracking-widest">
              Contact
            </span>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
