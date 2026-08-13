"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, Activity, ExternalLink } from "lucide-react";
import { CaseStudy } from "@/data/projects";

export const ProjectCard: React.FC<{ project: CaseStudy }> = ({ project }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative group bg-obsidian-surface border border-obsidian-border hover:border-copper/60 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-copper/10 flex flex-col justify-between overflow-hidden font-sans"
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(224, 109, 83, 0.12), transparent 40%)`,
        }}
      />

      <div className="space-y-4 relative z-10">
        {/* Card Category & Period Header */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono font-bold text-copper-light bg-copper/10 px-3 py-1 rounded-full border border-copper/30">
            {project.category}
          </span>
          <span className="text-[11px] font-mono text-titanium">
            {project.period}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-xl font-bold text-ivory group-hover:text-copper transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-titanium mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Project Narrative Summary */}
        <p className="text-xs text-titanium leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-obsidian-border/60">
          {project.metrics.slice(0, 2).map((m) => (
            <div key={m.label} className="p-2.5 rounded-xl bg-obsidian-bg/80 border border-obsidian-border/50">
              <div className="text-[10px] text-titanium font-mono truncate">{m.label}</div>
              <div className="text-xs font-bold text-ivory font-mono mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.slice(0, 5).map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-card border border-obsidian-border text-titanium"
            >
              {t}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-titanium">
              +{project.techStack.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Card Action Link */}
      <div className="pt-6 mt-4 border-t border-obsidian-border/80 flex items-center justify-between relative z-10">
        <span className="text-xs font-mono text-titanium">Role: {project.role}</span>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-copper-light hover:text-white transition-colors group/link"
        >
          <span>Read Case Study</span>
          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
