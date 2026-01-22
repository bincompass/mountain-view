"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StaggerContainer, { StaggerItem } from "@/components/shared/StaggerContainer";

const properties = [
  {
    title: "Tycoon Center",
    description: [
      "Tycoon Center is conceived to host the region's most ambitious businesses. Rising as a Class A+ administrative skyscraper, it stands as Africa's tallest tower of its kind, defined by precision, scale, and purpose.",
      "Tycoon Center delivers an elevated administrative environment where efficiency, architectural clarity, operational quality, and location come together to support sustained business performance and long-term value.",
    ],
    image: "/assets/images/properties/tycoon-tower.png",
  },
  {
    title: "Nile Business City",
    description: [
      "In the center of the New Administrative capital's \"Golden zone\" is where you'll find the Nile Business City complex. It is strategically located right in the middle of the Green River which is on the strategically advantageous Mohammed Bin Zayed Axis.",
    ],
    image: "/assets/images/properties/center-with-green-river-scaled.png",
  },
  {
    title: "Nile Boulevard",
    description: [
      "The world-class residential compound \"Nile Boulevard\" is an architectural gem inspired by the French style, characterized by a unique lifestyle. It is a revolutionary landmark with a fascinating urban glimpse that combines splendor, elegance, and awe in one place that resides in the beating heart of New Cairo.",
    ],
    image: "/assets/images/properties/CAM-Green-River-230.webp",
  },
];

export default function PropertyHighlights() {
  return (
    <section id="properties" className="bg-white overflow-hidden">
      {properties.map((property, index) => {
        const isReversed = index % 2 !== 0;
        
        return (
          <div
            key={property.title}
            className={`py-12 md:py-20 px-4 md:px-20 ${isReversed ? "bg-gray-50" : "bg-white"}`}
          >
            <div
              className={`container mx-auto flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-20`}
            >
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? 60 : -60, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full lg:w-3/5"
              >
                <div className="relative aspect-video w-full overflow-hidden shadow-2xl rounded-sm">
                  <motion.div
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-full h-full"
                  >
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Content Side */}
              <StaggerContainer
                staggerDelay={0.15}
                initialDelay={0.4}
                className="w-full lg:w-2/5 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <StaggerItem direction={isReversed ? "left" : "right"}>
                  <h2 className="text-[#91724a] text-3xl md:text-4xl font-serif tracking-wider uppercase">
                    {property.title}
                  </h2>
                </StaggerItem>

                <div className="space-y-4">
                  {property.description.map((para, pIndex) => (
                    <StaggerItem key={pIndex} direction="up">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                        {para}
                      </p>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </div>
        );
      })}
    </section>
  );
}
