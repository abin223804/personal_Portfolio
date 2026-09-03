"use client";

import React, { useState } from "react";
import { Clock, Layers, CheckCircle2, ChevronRight, MapPin, Building2 } from "lucide-react";
import { CAREER_TIMELINE } from "@/data/timeline";

export const CareerTimeline: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeMilestone = CAREER_TIMELINE[activeIdx];

  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan font-semibold text-xs font-mono mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Career Trajectory &amp; Growth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory tracking-tight">
              Architectural Timeline &amp; Experience
            </h2>
            <p className="text-titanium text-sm mt-2 max-w-xl">
              5+ years of continuous engineering evolution, leadership, and system scale.
            </p>
          </div>
        </div>

        {/* Horizontal Timeline Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {CAREER_TIMELINE.map((m, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={m.year}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Select timeline milestone: ${m.year} ${m.role}`}
                className={`p-3.5 sm:p-4 rounded-xl border text-left font-mono transition-all duration-200 relative ${
                  isActive
                    ? "bg-obsidian-hover border-cyan text-ivory ring-1 ring-cyan/40 shadow-xl shadow-cyan/15"
                    : "bg-obsidian-card border-white/[0.08] text-titanium hover:border-cyan/30 hover:text-ivory"
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-cyan">{m.year}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-obsidian-surface border border-white/[0.08] text-titanium-muted">
                    {m.type}
                  </span>
                </div>
                <div className="text-xs font-semibold truncate text-ivory">{m.role}</div>
                <div className="text-[11px] text-titanium-muted truncate mt-0.5">{m.company}</div>
              </button>
            );
          })}
        </div>

        {/* Active Milestone Inspector Details Card */}
        <div className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-5 sm:p-8 shadow-2xl space-y-6 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-sm font-mono font-bold text-cyan">{activeMilestone.year}</span>
                <span className="text-xs font-mono text-titanium flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5" />
                  {activeMilestone.company}
                </span>
                <span className="text-xs font-mono text-titanium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {activeMilestone.location}
                </span>
              </div>
              <h3 className="text-xl font-bold text-ivory mt-1">{activeMilestone.role}</h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan/10 text-cyan border border-cyan/30 self-start md:self-auto font-bold">
              Verified Experience
            </span>
          </div>

          <p className="text-xs sm:text-sm text-titanium leading-relaxed font-sans">
            {activeMilestone.description}
          </p>

          {/* Key Architectural Achievements */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-ivory font-semibold">
              Key Engineering Impact &amp; Outcomes
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {activeMilestone.highlights.map((h, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-obsidian-surface border border-white/[0.08] text-xs text-titanium space-y-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan shrink-0" />
                  <p className="leading-relaxed font-sans text-ivory">{h}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-titanium mb-2">
              Stack &amp; Tools Mastered
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeMilestone.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-obsidian-surface border border-white/[0.08] text-titanium font-mono text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
