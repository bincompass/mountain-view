"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Plage",
    description:
      "Welcome to the latest seaside destination by Mountain View. Everything you love about exclusive coastal living with a mix of experiences made for all sea lovers.",
    image: "/assets/images/projects/project-one.webp",
    tags: ["SEASONAL", "NORTH COAST"],
  },
  {
    id: 2,
    title: "EVIA - MV Ras El",
    description:
      "Inspired by the essence of the life a place where families can make memories that last a life.",
    image: "/assets/images/projects/project-two.webp",
    tags: ["SEASONAL", "NORTH COAST"],
  },
  {
    id: 3,
    title: "Skala",
    description:
      "Experience the true meaning of summer at Skala, where every moment is a celebration of life and beauty.",
    image: "/assets/images/projects/project-three.webp",
    tags: ["SEASONAL", "NORTH COAST"],
  },
  {
    id: 4,
    title: "Paros",
    description:
      "Discover the serenity of Paros, a place where luxury meets nature in perfect harmony.",
    image: "/assets/images/projects/project-four.webp",
    tags: ["SEASONAL", "NORTH COAST"],
  },
  {
    id: 5,
    title: "Crete Islands",
    description:
      "A unique destination that offers a blend of tradition and modernity, perfect for those seeking a peaceful retreat.",
    image: "/assets/images/projects/project-five.webp",
    tags: ["SEASONAL", "NORTH COAST"],
  },
];

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 1.2, spacing: 24 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 2.2, spacing: 32 },
        },
      },
      slides: { perView: 1.05, spacing: 16 },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section id="projects" className="pb-24 bg-white overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative px-6 md:px-20"
      >
        {/* Navigation Arrows */}
        {loaded && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
              className="absolute left-2 md:left-10 top-[30%] -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl transition-all group active:scale-90 z-20 border border-gray-100 cursor-pointer hover:bg-[#003da6]"
            >
              <ChevronLeft className="h-6 w-6 text-[#003da6] transition-colors group-hover:text-white" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
              className="absolute right-2 md:right-10 top-[30%] -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl transition-all group active:scale-90 z-20 border border-gray-100 cursor-pointer hover:bg-[#003da6]"
            >
              <ChevronRight className="h-6 w-6 text-[#003da6] transition-colors group-hover:text-white" />
            </motion.button>
          </>
        )}

        <div ref={sliderRef} className="keen-slider !overflow-visible">
          {projects.map((project, index) => (
            <div key={project.id} className="keen-slider__slide">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex flex-col gap-6"
              >
                {/* Image Container */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative aspect-[16/9] overflow-hidden rounded-sm group"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.2,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="flex gap-2"
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold tracking-wider text-gray-400 bg-gray-100 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="text-3xl md:text-4xl font-medium text-[#003da6]"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.4,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="text-gray-500 text-lg leading-relaxed max-w-2xl"
                  >
                    {project.description}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
