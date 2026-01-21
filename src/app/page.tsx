import Hero from "@/features/home/components/Hero";
import Projects from "@/features/home/components/Projects";
import StatsSection from "@/features/home/components/StatsSection";
import PropertyHighlights from "@/features/home/components/PropertyHighlights";
import RegisterInterest from "@/features/home/components/RegisterInterest";
import FloatingActions from "@/components/shared/FloatingActions";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AnimatedSection direction="up" delay={0.1}>
        <Projects />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.1}>
        <PropertyHighlights />
      </AnimatedSection>
      <FloatingActions />
      <AnimatedSection direction="up" delay={0.1}>
        <StatsSection />
      </AnimatedSection>
      <AnimatedSection direction="fade" delay={0.2}>
        <RegisterInterest />
      </AnimatedSection>
    </main>
  );
}
