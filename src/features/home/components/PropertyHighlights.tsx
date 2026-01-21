import Image from "next/image";
import { ArrowRight } from "lucide-react";

const properties = [
  {
    title: "Tycoon Center",
    description: [
      "Tycoon Center is conceived to host the region’s most ambitious businesses. Rising as a Class A+ administrative skyscraper, it stands as Africa’s tallest tower of its kind, defined by precision, scale, and purpose.",
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
      "The world-class residential compound “Nile Boulevard” is an architectural gem inspired by the French style, characterized by a unique lifestyle. It is a revolutionary landmark with a fascinating urban glimpse that combines splendor, elegance, and awe in one place that resides in the beating heart of New Cairo.",
    ],
    image: "/assets/images/properties/CAM-Green-River-230.webp",
  },
];

export default function PropertyHighlights() {
  return (
    <section className="bg-white overflow-hidden">
      {properties.map((property, index) => (
        <div
          key={property.title}
          className={`py-12 md:py-20 px-4 md:px-20 ${index % 2 !== 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div
            className={`container mx-auto flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-20`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-3/5">
              <div className="relative aspect-video w-full overflow-hidden shadow-2xl rounded-sm">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-2/5 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-[#91724a] text-3xl md:text-4xl font-serif tracking-wider uppercase">
                {property.title}
              </h2>

              <div className="space-y-4">
                {property.description.map((para, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-gray-600 text-sm md:text-base leading-relaxed font-light"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* View More Button */}
              <button className="bg-[#91724a] text-white rounded-full flex items-center transition-all hover:bg-[#7d613e] group cursor-pointer overflow-hidden w-fit">
                <div className="px-4 py-3 border-r border-white/20">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
                <span className="px-6 py-3 uppercase text-xs font-bold tracking-[0.2em]">
                  View More
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
