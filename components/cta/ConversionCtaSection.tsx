"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Linkedin, Github, Sparkles, CheckCircle2, MessageSquare } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const ConversionCtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden">
      {/* Background Subtle Dual-Accent Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-violet/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-secondary border border-white/[0.08] hover:border-cyan/40 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8 text-center sm:text-left transition-all duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Pitch */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan font-semibold text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready to Build Your Project?</span>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ivory tracking-tight leading-tight">
                Let&apos;s Build Your Custom Web Application
              </h2>

              <p className="text-titanium text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                Whether you need a full-stack web app, a Node.js REST API, a Next.js SaaS MVP, an admin dashboard, or performance optimization for an existing application — I am available for freelance projects in Kerala, India, and worldwide.
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs font-mono text-titanium pt-2">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  Fast WhatsApp &amp; Email Response
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 text-ivory">
                  <CheckCircle2 className="w-4 h-4 text-cyan shrink-0" />
                  Remote Worldwide &amp; India
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="text-cyan font-semibold">Fixed-Scope or Milestone Rates</span>
              </div>
            </div>

            {/* Right Column: High Converting CTAs */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-end justify-center gap-3 shrink-0 w-full">
              <WhatsAppButton variant="primary" size="lg" className="w-full sm:w-auto justify-center" />

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyan hover:bg-cyan-light text-brand-bg text-xs font-extrabold font-mono tracking-wide shadow-xl shadow-cyan/25 transition-all transform hover:-translate-y-0.5 text-center"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="mailto:abinschandran1@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-obsidian-card hover:bg-obsidian-hover border border-white/[0.14] hover:border-cyan/35 text-ivory text-xs font-mono transition-colors text-center"
              >
                <Mail className="w-4 h-4 text-cyan" />
                <span>abinschandran1@gmail.com</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
