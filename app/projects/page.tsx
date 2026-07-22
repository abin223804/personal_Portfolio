import React from "react";
import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies & Systems Portfolio",
  description:
    "Explore enterprise case studies by Solution Architect Abin S Chandran covering multi-region API gateways, real-time ledger settlement engines, RAG vector pipelines, and micro-frontend design systems.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-obsidian-bg">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: "https://abinschandran.com" },
          { name: "Projects", item: "https://abinschandran.com/projects" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-8 shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Complete Architectural Archive</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory tracking-tight">
            Production Case Studies & Systems
          </h1>
          <p className="text-titanium text-sm sm:text-base leading-relaxed max-w-3xl">
            Detailed technical case studies showcasing system architecture designs, performance metrics, trade-offs, and operational outcomes across 5+ years of engineering experience.
          </p>
        </div>
      </div>

      <ProjectGrid />
    </div>
  );
}
