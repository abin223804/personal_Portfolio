import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { ArchitecturePlayground } from "@/components/architecture/ArchitecturePlayground";
import { SkillMatrixBento } from "@/components/skills/SkillMatrixBento";
import { PerformanceDashboard } from "@/components/dashboard/PerformanceDashboard";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { CareerTimeline } from "@/components/timeline/CareerTimeline";
import { InteractiveTerminal } from "@/components/terminal/InteractiveTerminal";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ArchitecturePlayground />
      <SkillMatrixBento />
      <PerformanceDashboard />
      <ProjectGrid limit={2} />
      <CareerTimeline />
      <InteractiveTerminal />
    </>
  );
}
