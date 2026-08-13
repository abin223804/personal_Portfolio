import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ArchitecturePlayground } from "@/components/architecture/ArchitecturePlayground";
import { SkillMatrixBento } from "@/components/skills/SkillMatrixBento";
import { PerformanceDashboard } from "@/components/dashboard/PerformanceDashboard";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { HomeBlogSection } from "@/components/blog/HomeBlogSection";
import { CareerTimeline } from "@/components/timeline/CareerTimeline";
import { FaqSection } from "@/components/faq/FaqSection";
import { ConversionCtaSection } from "@/components/cta/ConversionCtaSection";
import { InteractiveTerminal } from "@/components/terminal/InteractiveTerminal";

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
