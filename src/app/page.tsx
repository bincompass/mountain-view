import Hero from "@/features/home/components/Hero";
import Projects from "@/features/home/components/Projects";
import StatsSection from "@/features/home/components/StatsSection";
import About from "@/features/home/components/About";
import PropertyHighlights from "@/features/home/components/PropertyHighlights";
import RegisterInterest from "@/features/home/components/RegisterInterest";
import FloatingActions from "@/components/shared/FloatingActions";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <PropertyHighlights />
      <FloatingActions />
      <StatsSection />
      <RegisterInterest />
    </main>
  );
}
