import Hero from "@/features/home/components/Hero";
import Projects from "@/features/home/components/Projects";
import CommunitySection from "@/features/home/components/CommunitySection";
import EviaSection from "@/features/home/components/EviaSection";
import InnovationSection from "@/features/home/components/InnovationSection";
import LighthouseSection from "@/features/home/components/LighthouseSection";
import LatestNews from "@/features/home/components/LatestNews";

export default function Home() {
  return (
    <main>
      <Hero />
      <CommunitySection />
      <Projects />
      <EviaSection />
      <InnovationSection />
      <LighthouseSection />
      <LatestNews />
    </main>
  );
}
