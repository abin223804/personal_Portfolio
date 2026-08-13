import React from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero/HeroSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { HomeBlogSection } from "@/components/blog/HomeBlogSection";

// Dynamically import below-the-fold interactive components to eliminate unused initial JS payload
const ArchitecturePlayground = dynamic(
  () => import("@/components/architecture/ArchitecturePlayground").then((mod) => mod.ArchitecturePlayground)
);
const SkillMatrixBento = dynamic(
  () => import("@/components/skills/SkillMatrixBento").then((mod) => mod.SkillMatrixBento)
);
const PerformanceDashboard = dynamic(
  () => import("@/components/dashboard/PerformanceDashboard").then((mod) => mod.PerformanceDashboard)
);
const CareerTimeline = dynamic(
  () => import("@/components/timeline/CareerTimeline").then((mod) => mod.CareerTimeline)
);
const FaqSection = dynamic(
  () => import("@/components/faq/FaqSection").then((mod) => mod.FaqSection)
);
const ConversionCtaSection = dynamic(
  () => import("@/components/cta/ConversionCtaSection").then((mod) => mod.ConversionCtaSection)
);
const InteractiveTerminal = dynamic(
  () => import("@/components/terminal/InteractiveTerminal").then((mod) => mod.InteractiveTerminal)
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection limit={6} />
      <ArchitecturePlayground />
      <SkillMatrixBento />
      <PerformanceDashboard />
      <ProjectGrid limit={2} />
      <HomeBlogSection />
      <CareerTimeline />
      <FaqSection />
      <ConversionCtaSection />
      <InteractiveTerminal />
    </>
  );
}
