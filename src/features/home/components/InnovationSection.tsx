"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StaggerContainer, {
  StaggerItem,
} from "@/components/shared/StaggerContainer";

export default function InnovationSection() {
  return (
    <section
      id="innovation"
      className="relative w-full overflow-hidden bg-[#000F3D]"
    >
      <div className="flex flex-col lg:flex-row min-h-[600px] lg:h-[700px]">
        {/* Left Image Side */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-full">
          <Image
            src="/assets/images/the_story_of_mountain_view.webp"
            alt="The Story of Mountain View"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Content Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-xl"
          >
            <StaggerContainer
              staggerDelay={0.15}
              initialDelay={0.2}
              className="space-y-8"
            >
              <StaggerItem direction="up">
                <span className="text-gray-400 text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
                  THE STORY OF MOUNTAIN VIEW
                </span>
              </StaggerItem>

              <StaggerItem direction="up">
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1]">
                  Driven by Innovation. <br />
                  Inspired by Happiness.
                </h2>
              </StaggerItem>

              <StaggerItem direction="up">
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                  Driven by innovation, Mountain View is among Egypt&apos;s
                  leading private property development companies for development
                  and real estate investment in Mountain View. Specialized in
                  developing first-tier residences and resorts, Mountain View
                  projects showcase some of the finest luxury real estate in
                  Egypt. With over 23 projects across the country, the company
                  continues to expand in prime destinations, including East and
                  West Cairo, the Red Sea Coast, and the Mountain View North
                  Coast.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
