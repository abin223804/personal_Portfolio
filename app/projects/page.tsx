import React from "react";
import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConversionCtaSection } from "@/components/cta/ConversionCtaSection";
import { Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies & Full-Stack Projects | Abin S Chandran",
  description:
    "Explore full-stack software development case studies by Abin S Chandran covering enterprise cloud gateways, real-time FinTech settlement engines, AI knowledge mesh RAG pipelines, and micro-frontend design systems.",
  alternates: {
    canonical: "https://www.abinschandran.in/projects",
  },
  openGraph: {
    title: "Case Studies & Full-Stack Projects | Abin S Chandran",
    description:
      "Detailed technical case studies showcasing system architecture designs, performance metrics, trade-offs, and operational outcomes.",
    url: "https://www.abinschandran.in/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-brand-bg">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: "https://www.abinschandran.in" },
          { name: "Projects", item: "https://www.abinschandran.in/projects" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-8 shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Complete Architectural Archive</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory tracking-tight">
            Production Case Studies &amp; Software Projects
          </h1>
          <p className="text-titanium text-sm sm:text-base leading-relaxed max-w-3xl font-sans">
            Detailed technical case studies showcasing full-stack application architecture, Node.js APIs, performance benchmarks, trade-offs, and operational outcomes across 5+ years of software engineering.
          </p>
        </div>
      </div>

      <ProjectGrid />

      <div className="mt-12">
        <ConversionCtaSection />
      </div>
    </div>
  );
}
