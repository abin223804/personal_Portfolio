"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, ShieldCheck, Terminal, Layers, Sparkles, Server, Zap, Database, MapPin, Briefcase, Smartphone } from "lucide-react";
import { BlueprintCanvas } from "./BlueprintCanvas";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-obsidian-bg">
      {/* Background Architectural Canvas Overlay */}
      <BlueprintCanvas />

      {/* Radial Gradient Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center sm:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Bio & CTAs (Crawlable SEO text) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-surface border border-obsidian-border shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-titanium">
                Freelance Software Developer &amp; Solution Architect
              </span>
              <span className="text-obsidian-border font-mono">•</span>
              <span className="text-xs font-mono text-copper font-medium">Kerala, India &amp; Remote Worldwide</span>
            </div>

            {/* Single Primary SEO H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ivory leading-[1.15]">
              Freelance Software Developer{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper via-amber-400 to-copper-light">
                Building Web &amp; Mobile Applications.
              </span>
            </h1>

            {/* Supporting Bio Copy */}
            <p className="text-base sm:text-lg text-titanium leading-relaxed max-w-2xl font-sans">
              I help startups, founders, and businesses build scalable web applications, cross-platform Flutter mobile apps, Node.js REST APIs, Next.js frontends, SaaS products, and custom business software.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <WhatsAppButton variant="primary" size="md" />

              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-copper hover:bg-copper-light text-white text-xs font-bold font-mono tracking-wide shadow-xl shadow-copper/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-obsidian-surface hover:bg-obsidian-card border border-obsidian-border hover:border-copper/60 text-ivory text-xs font-mono transition-all shadow-lg"
              >
                <Layers className="w-4 h-4 text-copper" />
                <span className="hidden sm:inline">Explore Services</span>
              </Link>
            </div>

            {/* Core Capability Chips */}
            <div className="pt-6 border-t border-obsidian-border/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-titanium">
              <div className="flex items-center gap-2 bg-obsidian-surface/40 p-2 rounded-lg border border-obsidian-border/50">
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>Flutter / Mobile Apps</span>
              </div>
              <div className="flex items-center gap-2 bg-obsidian-surface/40 p-2 rounded-lg border border-obsidian-border/50">
                <Server className="w-4 h-4 text-copper" />
                <span>Node.js / Express</span>
              </div>
              <div className="flex items-center gap-2 bg-obsidian-surface/40 p-2 rounded-lg border border-obsidian-border/50">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>React / Next.js 15</span>
              </div>
              <div className="flex items-center gap-2 bg-obsidian-surface/40 p-2 rounded-lg border border-obsidian-border/50">
                <Database className="w-4 h-4 text-titanium" />
                <span>REST &amp; PostgreSQL</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive System Architecture Card Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 shadow-2xl space-y-5">
              
              {/* Card Window Header */}
              <div className="flex items-center justify-between border-b border-obsidian-border pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-titanium">
                    web_and_mobile_architecture.sys
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  PRODUCTION READY
                </span>
              </div>

              {/* Interactive Node Flow Demo */}
              <div className="space-y-3 font-mono text-xs">
                
                {/* Mobile & Web Node */}
                <div className="p-3 rounded-xl bg-obsidian-card border border-copper/30 flex items-center justify-between hover:border-copper transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-copper/20 flex items-center justify-center text-copper">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-ivory text-xs">Flutter Mobile &amp; Next.js 15 UI</div>
                      <div className="text-[10px] text-titanium">iOS, Android, &amp; Responsive Web UI</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Native Speed
                  </span>
                </div>

                {/* Arrow Connector */}
                <div className="flex justify-center text-copper/60 text-[10px] animate-pulse">
                  ↓ Secure REST / GraphQL API Stream ↓
                </div>

                {/* Event Bus & Microservice Grid */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-lg bg-obsidian-card border border-obsidian-border text-left">
                    <div className="text-[10px] text-titanium font-semibold">Backend API</div>
                    <div className="text-[11px] text-ivory font-mono">Node.js &amp; Express</div>
                    <div className="text-[9px] text-amber-400 mt-1">JWT Auth &amp; Rate Limits</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-obsidian-card border border-obsidian-border text-left">
                    <div className="text-[10px] text-titanium font-semibold">Database Layer</div>
                    <div className="text-[11px] text-ivory font-mono">PostgreSQL / MongoDB</div>
                    <div className="text-[9px] text-emerald-400 mt-1">Sub-10ms Queries</div>
                  </div>
                </div>

                {/* Cache & DB Layer */}
                <div className="p-3 rounded-xl bg-obsidian-card border border-obsidian-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-xs text-ivory font-semibold">Redis &amp; Third-Party Services</div>
                      <div className="text-[10px] text-titanium">Stripe Payments, Firebase &amp; AWS</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-amber-400 font-mono">99.99% Availability</span>
                </div>

              </div>

              {/* Card Footer Metric */}
              <div className="pt-2 border-t border-obsidian-border flex items-center justify-between text-[11px] font-mono text-titanium">
                <span className="flex items-center gap-1.5 text-ivory">
                  <Sparkles className="w-3.5 h-3.5 text-copper" />
                  Web &amp; Mobile Software Development
                </span>
                <span className="text-copper">Hire Freelance Developer</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
