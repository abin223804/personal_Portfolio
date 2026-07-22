"use client";

import React, { useState } from "react";
import { Cpu, Server, Layout, Cloud, Database, Shield, LayoutGrid, List, CheckCircle2 } from "lucide-react";
import { SKILL_PILLARS } from "@/data/skills";

export const SkillMatrixBento: React.FC = () => {
  const [viewMode, setViewMode] = useState<"bento" | "list">("bento");
  const [selectedPillarIndex, setSelectedPillarIndex] = useState<number>(0);

  const iconsMap: Record<string, React.ElementType> = {
    Cpu,
    Server,
    Layout,
    Cloud,
    Database,
    Shield,
  };

  const currentPillar = SKILL_PILLARS[selectedPillarIndex];

  return (
    <section className="py-20 bg-obsidian-surface border-y border-obsidian-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & View Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-mono mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Expertise Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory tracking-tight">
              Capability & Architectural Mindset
            </h2>
            <p className="text-titanium text-sm mt-2 max-w-xl">
              Grouped across system architecture, high-concurrency backends, modern frontend engineering, cloud infrastructure, and databases.
            </p>
          </div>

          {/* Toggle View Mode */}
          <div className="flex items-center gap-1 bg-obsidian-bg p-1 rounded-xl border border-obsidian-border self-start">
            <button
              onClick={() => setViewMode("bento")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                viewMode === "bento"
                  ? "bg-copper text-white shadow-md shadow-copper/20"
                  : "text-titanium hover:text-ivory"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Interactive Bento</span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                viewMode === "list"
                  ? "bg-copper text-white shadow-md shadow-copper/20"
                  : "text-titanium hover:text-ivory"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>Structured List (SEO)</span>
            </button>
          </div>
        </div>

        {/* Bento Grid View */}
        {viewMode === "bento" ? (
          <div className="space-y-8">
            {/* Pillar Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {SKILL_PILLARS.map((pillar, idx) => {
                const Icon = iconsMap[pillar.iconName] || Cpu;
                const isSelected = selectedPillarIndex === idx;
                return (
                  <button
                    key={pillar.title}
                    onClick={() => setSelectedPillarIndex(idx)}
                    className={`p-3.5 rounded-xl border text-left font-mono transition-all duration-200 ${
                      isSelected
                        ? "bg-obsidian-card border-copper text-ivory ring-1 ring-copper/50 shadow-lg shadow-copper/10"
                        : "bg-obsidian-bg border-obsidian-border text-titanium hover:border-copper/40 hover:text-ivory"
                    }`}
                  >
                    <Icon className={`w-4 h-4 mb-2 ${isSelected ? "text-copper" : "text-titanium"}`} />
                    <div className="text-xs font-semibold truncate">{pillar.title}</div>
                    <div className="text-[10px] text-titanium/80 mt-1">{pillar.skills.length} core skills</div>
                  </button>
                );
              })}
            </div>

            {/* Selected Pillar Detailed Bento Grid */}
            <div className="bg-obsidian-bg border border-obsidian-border rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-obsidian-border pb-4">
                <div>
                  <h3 className="text-xl font-bold text-ivory font-sans">{currentPillar.title}</h3>
                  <p className="text-xs text-titanium mt-1 font-sans">{currentPillar.description}</p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-copper/10 text-copper border border-copper/30 self-start md:self-auto">
                  {currentPillar.skills.length} Technical Skills Verified
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentPillar.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-obsidian-surface border border-obsidian-border/80 hover:border-copper/50 transition-all duration-200 space-y-3 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-semibold text-ivory group-hover:text-copper transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-copper bg-copper/10 px-2 py-0.5 rounded">
                        {skill.experienceYears}
                      </span>
                    </div>

                    {/* Skill Progress Bar */}
                    <div className="space-y-1">
                      <div className="w-full h-1.5 bg-obsidian-card rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-copper to-amber-500 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-titanium">
                        <span>Proficiency Benchmark</span>
                        <span>{skill.level}% Mastery</span>
                      </div>
                    </div>

                    {/* Real-world usage note */}
                    <p className="text-xs text-titanium leading-relaxed font-sans border-t border-obsidian-border/40 pt-2">
                      <strong className="text-ivory">Production Impact:</strong> {skill.realWorldUsage}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {skill.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-card border border-obsidian-border text-titanium"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Structured Crawlable List View (SEO Fallback) */
          <div className="space-y-8">
            {SKILL_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-obsidian-bg border border-obsidian-border rounded-2xl p-6 space-y-4"
              >
                <h3 className="text-lg font-bold text-ivory font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-copper" />
                  {pillar.title}
                </h3>
                <p className="text-xs text-titanium">{pillar.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {pillar.skills.map((s) => (
                    <div key={s.name} className="p-3 bg-obsidian-surface rounded-xl border border-obsidian-border text-xs">
                      <div className="font-semibold text-ivory">{s.name}</div>
                      <div className="text-copper text-[11px] font-mono">{s.experienceYears}</div>
                      <div className="text-titanium text-[11px] mt-1">{s.realWorldUsage}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
