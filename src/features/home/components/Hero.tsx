"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden font-sans"
    >
      {/* Background Video */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0 -z-10 h-full w-full overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center scale-110"
        >
          <source src="/assets/videos/intro.mp4" type="video/mp4" />
        </video>
        {/* Sophisticated overlay: subtle base darkening only to ensure full coverage without borders */}
        <div className="absolute inset-0 bg-black/40 h-full w-full" />
      </motion.div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10">
        {/* Text */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-white text-4xl md:text-5xl lg:text-6xl tracking-tight"
        >
          Experience Happiness
        </motion.h1>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Button
            onClick={() => handleScrollTo("projects")}
            variant="secondary"
            className="rounded-full px-6! h-12 flex items-center gap-3 transition-all duration-300 group cursor-pointer"
          >
            <span className="capitalize text-[14px] font-bold tracking-widest">
              Discover Communities
            </span>
            <ArrowRight className="w-5 h-5 text-secondary-foreground transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
