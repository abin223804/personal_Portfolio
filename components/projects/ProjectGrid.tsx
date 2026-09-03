"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Briefcase, ArrowRight, Filter } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectGrid: React.FC<{ limit?: number }> = ({ limit }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Mobile & Cross-Platform",
    "Cloud Architecture",
    "Distributed Systems",
    "Full Stack Enterprise",
    "Frontend & Design System",
  ];

  const filteredProjects = PROJECTS.filter((p) =>
    selectedCategory === "All" ? true : p.category === selectedCategory
  );

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className="py-20 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Production Architecture Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory tracking-tight">
              Featured Case Studies &amp; Engineering Solutions
            </h2>
            <p className="text-titanium text-sm mt-2 max-w-xl">
              In-depth architectural breakdowns, performance trade-offs, and metrics for enterprise applications.
            </p>
          </div>

          {!limit && (
            /* Category Filters */
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all shrink-0 ${
                    selectedCategory === cat
                      ? "bg-cyan text-brand-bg font-bold shadow-md shadow-cyan/20"
                      : "bg-obsidian-card text-titanium hover:text-ivory border border-white/[0.08]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* View All Projects CTA */}
        {limit && PROJECTS.length > limit && (
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-obsidian-card hover:bg-obsidian-hover border border-white/[0.08] hover:border-cyan/40 text-ivory text-xs font-mono font-bold transition-all shadow-lg"
            >
              <span>Explore All Case Studies ({PROJECTS.length})</span>
              <ArrowRight className="w-4 h-4 text-cyan" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};
