"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StaggerContainer, {
  StaggerItem,
} from "@/components/shared/StaggerContainer";
import { ArrowRight, Calendar } from "lucide-react";

export default function EviaSection() {
  return (
    <section
      id="evia"
      className="relative w-full h-[600px] md:h-[700px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/evia_mv_ras_el_hekma-img.webp"
          alt="EVIA - MV Ras El Hekma"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full w-full flex items-center justify-end px-6 md:px-20 lg:px-32">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-white/95 backdrop-blur-sm p-8 md:p-12 lg:p-16 max-w-[550px] shadow-2xl rounded-2xl"
        >
          <StaggerContainer
            staggerDelay={0.15}
            initialDelay={0.2}
            className="space-y-2"
          >
            <StaggerItem direction="up">
              <h2 className="text-[#1a1a1a] text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
                EVIA - MV
                <br />
                Ras El Hekma
              </h2>
            </StaggerItem>

            <StaggerItem direction="up">
              <p className="text-gray-400 text-lg md:text-xl font-light">
                Energy Meets Effortless Living
              </p>
            </StaggerItem>

            <StaggerItem
              direction="up"
              className="pt-4 flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-[#003da6] text-white px-5 py-4 flex items-center justify-center gap-2 group transition-all duration-300 hover:bg-[#002d7a] font-medium text-sm tracking-wider uppercase rounded-md cursor-pointer">
                DISCOVER EVIA
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="border border-gray-200 text-[#003da6] px-5 py-4 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gray-50 font-medium text-sm tracking-wider uppercase rounded-md cursor-pointer">
                <Calendar className="w-4 h-4" />
                SCHEDULE CALL
              </button>
            </StaggerItem>
          </StaggerContainer>
        </motion.div>
      </div>
    </section>
  );
}
