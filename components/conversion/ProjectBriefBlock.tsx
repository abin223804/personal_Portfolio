"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Clock, FileCode, CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface ProjectBriefBlockProps {
  title?: string;
  subtitle?: string;
  contextTag?: string;
  prefilledWhatsAppMessage?: string;
  className?: string;
}

export const ProjectBriefBlock: React.FC<ProjectBriefBlockProps> = ({
  title = "Start a Project with Direct Technical Ownership",
  subtitle = "Tell me what you are building, what is currently blocked, and what outcome you need. I will review the brief and suggest the right next step: discovery, architecture, a fixed-scope build, or a technical audit.",
  contextTag = "Direct-to-Developer Consultation",
  prefilledWhatsAppMessage = "Hi Abin, I have a project brief I'd like to discuss with you directly.",
  className = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-secondary via-brand-surface to-brand-bg p-8 sm:p-12 shadow-2xl transition-all duration-300 hover:border-cyan/40 ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet/10 blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
        {/* Pitch & Framing */}
        <div className="space-y-4 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-mono font-semibold text-cyan">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{contextTag}</span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-ivory sm:text-3xl lg:text-4xl">
            {title}
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-titanium sm:text-base">
            {subtitle}
          </p>

          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
              <span>100% IP ownership &amp; clean repository handover</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-cyan" />
              <span>&lt; 24h direct review &amp; scope feedback</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-violet" />
              <span>NDA signed before proprietary discussion</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCode className="h-4 w-4 shrink-0 text-amber-400" />
              <span>Milestone-based delivery &amp; 30-day warranty</span>
            </div>
          </div>
        </div>

        {/* Conversion Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:flex-col lg:items-stretch lg:justify-center">
          <WhatsAppButton
            variant="primary"
            size="lg"
            className="w-full justify-center text-center shadow-lg shadow-emerald-950/40"
            message={prefilledWhatsAppMessage}
          />

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan px-6 py-3.5 text-center text-xs font-mono font-extrabold tracking-wide text-brand-bg shadow-xl shadow-cyan/25 transition-all hover:bg-cyan-light hover:-translate-y-0.5"
          >
            <span>Send Project Brief</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
