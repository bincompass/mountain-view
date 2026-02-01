"use client";

import Image from "next/image";
import StaggerContainer, {
  StaggerItem,
} from "@/components/shared/StaggerContainer";

const newsItems = [
  {
    id: 1,
    image: "/assets/images/lastes-news/1.jpeg",
    title:
      "Mountain View Breaks Records with EGP 15 Billion in Sales for Crysta in Just Six Hours",
    date: "Oct 26, 2025",
    readTime: "1 Min Read",
  },
  {
    id: 2,
    image: "/assets/images/lastes-news/2.webp",
    title: "Innovating a Green Future with Eco-Friendly Communities",
    date: "Sep 24, 2025",
    readTime: "1 Min Read",
  },
  {
    id: 3,
    image: "/assets/images/lastes-news/3.webp",
    title:
      "Egypt's tourism sector welcomes fresh player with innovative family hotel concept",
    date: "Sep 16, 2025",
    readTime: "1 Min Read",
  },
];

export default function LatestNews() {
  return (
    <section
      id="news"
      className="bg-white py-24 px-6 md:px-20 lg:px-32 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        <StaggerContainer
          staggerDelay={0.1}
          initialDelay={0.2}
          className="space-y-12"
        >
          {/* Header */}
          <StaggerItem direction="up">
            <h2 className="text-[#001A70] text-4xl md:text-5xl lg:text-6xl font-normal">
              Latest News
            </h2>
          </StaggerItem>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {newsItems.map((item) => (
              <StaggerItem
                key={item.id}
                direction="up"
                className="space-y-6 group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-[#001A70] text-lg md:text-xl font-normal leading-snug group-hover:text-[#003da6] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light">
                    {item.date}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
