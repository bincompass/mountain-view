"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StaggerContainer, { StaggerItem } from "@/components/shared/StaggerContainer";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative pt-15 px-6 md:px-20 bg-white overflow-hidden"
    >
      {/* Section Header */}
      <StaggerContainer staggerDelay={0.1} initialDelay={0.2} className="flex flex-col items-center text-center mb-16">
        <StaggerItem direction="down">
          <h2 className="text-[#b89156] text-lg md:text-2xl font-bold uppercase tracking-[0.3em] mb-8">
            Our Projects
          </h2>
        </StaggerItem>

        {/* 31N Logo (Black Version) */}
        <StaggerItem direction="scale">
          <div className="flex items-end gap-2 mb-6 text-black scale-125">
            <div className="flex flex-col items-center relative">
              {/* Stylized compass arrow */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-px h-3 bg-black/60" />
                <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-[6px] border-b-black" />
              </div>
              <div className="relative">
                <span className="text-7xl font-bold leading-none tracking-tighter">
                  31
                </span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center mt-1">
                  <span className="text-[5px] uppercase font-bold tracking-widest bg-white px-1">
                    Commercial Tower
                  </span>
                </div>
              </div>
            </div>
            <span className="text-4xl font-light mb-1 uppercase tracking-tighter">
              n
            </span>
          </div>
        </StaggerItem>

        {/* Subtitle */}
        <StaggerItem direction="fade">
          <div className="flex flex-col items-center">
            <span className="text-[#b89156] text-4xl md:text-5xl font-serif italic mb-1">
              Comfort
            </span>
            <span className="text-gray-500 text-lg md:text-xl font-medium uppercase tracking-[0.15em] leading-tight max-w-[300px]">
              Are perfectly combined here
            </span>
          </div>
        </StaggerItem>
      </StaggerContainer>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Overlapping Images Container */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center pt-10 h-[550px] md:h-[700px]">
          {/* Left/Back Image (Pill-shaped) - Positioned behind */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute left-0 top-0 w-[60%] aspect-[0.66] rounded-[300px] overflow-hidden z-0"
          >
            <Image
              src="/assets/images/projects/project-1-image.jpg"
              alt="Project View 1"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right/Front Image (Pill-shaped) - Positioned in front */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute right-0 bottom-15 w-[60%] aspect-[0.66] rounded-[300px] overflow-hidden z-10"
          >
            <Image
              src="/assets/images/projects/project-2-image.webp"
              alt="Project View 2"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
        >
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
            31 North Tower is the first Festival Tower in the heart of the New
            Administrative Capital, combining an iconic architectural design
            with an exceptional location along the Tourist Towers Strip in the
            Downtown area, one of the most vibrant and strategic spots in the
            city.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
