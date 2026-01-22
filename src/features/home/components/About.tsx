"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import StaggerContainer, { StaggerItem } from "@/components/shared/StaggerContainer";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section id="about-us" className="relative bg-white overflow-hidden" ref={ref}>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side: Image with Dark Pattern Background */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px] pt-16 lg:py-25">
            {/* Dark Pattern Background Layer */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 bg-[#1a1a1a] hidden lg:block z-0 lg:-ml-[50vw] lg:mr-50"
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: 'url("/assets/images/about-overlay.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>

            {/* Image Container */}
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-10 w-full max-w-[450px] lg:max-w-none lg:w-[80%] aspect-square lg:translate-x-1/4 shadow-2xl"
            >
              <Image
                src="/assets/images/about.jpg"
                alt="Matchless Masterpieces"
                fill
                className="object-cover rounded-sm"
                priority
              />
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:pl-24 py-12 lg:py-0">
            <StaggerContainer
              staggerDelay={0.15}
              initialDelay={0.3}
              className="max-w-xl space-y-8 text-center lg:text-left px-4 lg:px-0"
            >
              <StaggerItem direction="up">
                <div>
                  <h3 className="text-[#b89156] text-sm md:text-base font-serif italic font-bold tracking-wider">
                    Who We Are?
                  </h3>
                  <h2 className="text-[#91724a] text-3xl md:text-5xl font-serif tracking-wider uppercase leading-tight">
                    MATCHLESS MASTERPIECES
                  </h2>
                </div>
              </StaggerItem>

              <div className="space-y-6">
                <StaggerItem direction="up">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                    Based in Egypt, Nile Development Group is a 21st-century
                    real estate developer with over one decade of proven track
                    record in New Cairo, Al Mansoura, and New Administrative
                    Capital. The company has developed several world-class
                    projects that contributed to positioning Nile Development
                    Group as one of the authority figures among real estate
                    developers in New Administrative Capital and all over Egypt.
                  </p>
                </StaggerItem>
                <StaggerItem direction="up">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                    We create innovative projects that improve everyday living
                    while connecting people of like minds together and
                    representatives of an emerging generation of New Cities.
                  </p>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
