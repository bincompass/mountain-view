"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StaggerContainer, {
  StaggerItem,
} from "@/components/shared/StaggerContainer";

export default function LighthouseSection() {
  return (
    <section id="lighthouse" className="relative w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[500px] lg:h-[600px]">
        {/* Left Side: Image with Content Overlay */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-full">
          <Image
            src="/assets/images/the-lighthouse .webp"
            alt="The Lighthouse"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-between z-10">
            <StaggerContainer staggerDelay={0.15} initialDelay={0.2}>
              <StaggerItem direction="down">
                <span className="text-white/80 text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
                  A HAPPY PLACE BY MOUNTAIN VIEW
                </span>
              </StaggerItem>
              <StaggerItem direction="up" className="mt-4">
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal">
                  The Lighthouse
                </h2>
              </StaggerItem>
            </StaggerContainer>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-md"
            >
              <p className="text-white/90 text-sm md:text-base leading-relaxed font-light">
                The Lighthouse is the pioneering tool by which Mountain View can
                spread meaningful happiness throughout all its communities.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Two Stacked Colored Boxes */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Top Blue Box */}
          <div className="flex-1 bg-[#001A70] flex flex-col justify-center px-10 py-12 lg:py-4 min-h-[200px] lg:min-h-[250px]">
            <StaggerContainer
              staggerDelay={0.15}
              initialDelay={0.3}
              className="max-w-xl"
            >
              <StaggerItem direction="up">
                <span className="text-white/60 text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">
                  GOODNESS
                </span>
              </StaggerItem>
              <StaggerItem direction="up" className="mt-6">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
                  Fostering goodness <br className="hidden md:block" />
                  within the <br className="hidden md:block" />
                  community.
                </h2>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Bottom Tan Box */}
          <div className="flex-1 bg-[#B48965] flex flex-col justify-center px-10 py-12 lg:py-4 min-h-[200px] lg:min-h-[250px]">
            <StaggerContainer
              staggerDelay={0.15}
              initialDelay={0.4}
              className="max-w-xl"
            >
              <StaggerItem direction="up">
                <span className="text-white/60 text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">
                  EXPLORE
                </span>
              </StaggerItem>
              <StaggerItem direction="up" className="mt-6">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
                  MV Signature Living
                </h2>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
