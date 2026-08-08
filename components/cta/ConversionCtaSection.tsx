"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Linkedin, Github, Sparkles, CheckCircle2, MessageSquare } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const ConversionCtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-obsidian-bg relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-copper/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-obsidian-surface border border-obsidian-border hover:border-copper/50 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8 text-center sm:text-left transition-all duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Pitch */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready to Build Your Project?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ivory tracking-tight leading-tight">
                Let&apos;s Build Your Custom Web Application
              </h2>

              <p className="text-titanium text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                Whether you need a full-stack web app, a Node.js REST API, a Next.js SaaS MVP, an admin dashboard, or performance optimization for an existing application — I am available for freelance projects in Kerala, India, and worldwide.
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-titanium pt-2">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  Fast WhatsApp &amp; Email Response
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-ivory">
                  <CheckCircle2 className="w-4 h-4 text-copper" />
                  Remote Worldwide &amp; India
                </span>
                <span>•</span>
                <span className="text-copper font-semibold">Fixed-Scope or Milestone Rates</span>
              </div>
            </div>

            {/* Right Column: High Converting CTAs */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-center sm:items-end justify-center gap-3 shrink-0">
              <WhatsAppButton variant="primary" size="lg" className="w-full sm:w-auto" />

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-copper hover:bg-copper-light text-white text-xs font-bold font-mono tracking-wide shadow-xl shadow-copper/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="mailto:abinschandran1@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-obsidian-card hover:bg-obsidian-hover border border-obsidian-border text-ivory text-xs font-mono transition-colors"
              >
                <Mail className="w-4 h-4 text-copper" />
                <span>abinschandran1@gmail.com</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
