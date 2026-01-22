"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import StaggerContainer, { StaggerItem } from "@/components/shared/StaggerContainer";

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="relative min-h-[600px] flex items-stretch overflow-hidden"
    >
      {/* Background Image Overlay */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0 z-0 overflow-hidden hidden md:block"
      >
        <Image
          src="/assets/images/overlay.webp"
          alt="Overlay Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content Grid */}
      <div className="relative z-10 flex flex-col md:flex-row w-full">
        {/* Left Side: Dark Overlay with Stat */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-1 bg-black/85 md:bg-black/70 flex flex-col items-center justify-center py-16 px-6 md:p-12 text-center border-b md:border-b-0 md:border-r border-white/10"
        >
          <StaggerContainer staggerDelay={0.2} initialDelay={0.3} className="max-w-md space-y-6">
            <StaggerItem direction="scale">
              <AnimatedCounter
                value={22}
                duration={2.5}
                className="text-[#b89156] text-7xl md:text-9xl font-serif leading-none block"
              />
            </StaggerItem>
            <div className="space-y-4">
              <StaggerItem direction="up">
                <h3 className="text-white text-base md:text-xl font-bold uppercase tracking-[0.2em] leading-tight">
                  Years Since Our
                  <br />
                  Establishment In 2002
                </h3>
              </StaggerItem>
              <StaggerItem direction="fade">
                <p className="text-gray-300 text-xs md:text-base font-light max-w-xs mx-auto">
                  We have made a boom in the real estate market in many Egyptian
                  cities
                </p>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </motion.div>

        {/* Right Side: Light Overlay with Stat */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-1 bg-white/85 md:bg-white/60 flex flex-col items-center justify-center py-16 px-6 md:p-12 text-center"
        >
          <StaggerContainer staggerDelay={0.2} initialDelay={0.3} className="max-w-md space-y-6">
            <StaggerItem direction="scale">
              <AnimatedCounter
                value={20}
                duration={2.5}
                className="text-[#b89156] text-7xl md:text-9xl font-serif leading-none block"
              />
            </StaggerItem>
            <div className="space-y-4">
              <StaggerItem direction="up">
                <h3 className="text-black text-base md:text-xl font-bold uppercase tracking-[0.2em] leading-tight">
                  Million Expected Annual Visit
                  <br />
                  To Our Projects
                </h3>
              </StaggerItem>
              <StaggerItem direction="fade">
                <p className="text-gray-700 text-xs md:text-base font-light max-w-xs mx-auto">
                  We build our projects in distinctive locations, ensuring the
                  density of visits to your business at record rates
                </p>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </motion.div>
      </div>
    </section>
  );
}
