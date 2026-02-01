"use client";

import Link from "next/link";
import StaggerContainer, {
  StaggerItem,
} from "@/components/shared/StaggerContainer";

export default function CommunitySection() {
  return (
    <section
      id="story-section"
      className="relative bg-white py-24 overflow-hidden"
    >
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerContainer
            staggerDelay={0.15}
            initialDelay={0.3}
            className="space-y-10"
          >
            <StaggerItem direction="up">
              <h2 className="text-primary text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.2]">
                Where Gated Community <br className="hidden md:block" />
                Meets Modern Comfort
              </h2>
            </StaggerItem>

            <StaggerItem direction="up">
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto">
                Through Mountain View projects, we aim to create vibrant,
                interconnected spaces as part of the{" "}
                <Link
                  href="/our-story"
                  className="text-primary hover:underline transition-all"
                >
                  Mountain View story
                </Link>{" "}
                — a journey to transform how people connect, thrive, and
                experience joy, where every resident feels inspired and
                motivated.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
