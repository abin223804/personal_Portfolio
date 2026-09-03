"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, ShieldCheck, Terminal, Layers, Sparkles, Server, Zap, Database, MapPin, Briefcase, Smartphone, Globe } from "lucide-react";
import { BlueprintCanvas } from "./BlueprintCanvas";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-obsidian-bg">
      {/* Background Architectural Canvas Overlay */}
      <BlueprintCanvas />

      {/* Subtle Dual-Accent Atmospheric Glow (Cyan & Violet) */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-violet/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio & CTAs (Crawlable SEO text) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Product SaaS Banner & Location Pill */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="https://crm.abinschandran.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian-card border border-emerald-500/30 hover:border-emerald-400/60 shadow-lg transition-all group max-w-full"
                title="Launch Live CRM SaaS Platform (crm.abinschandran.in)"
              >
                <span className="flex h-2 w-2 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] xs:text-xs font-mono font-bold text-emerald-400 shrink-0">
                  Live SaaS:
                </span>
                <span className="text-[11px] xs:text-xs font-mono text-ivory group-hover:text-cyan transition-colors flex items-center gap-1 font-semibold truncate">
                  crm.abinschandran.in
                  <span className="text-[10px] text-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </span>
              </a>

              {/* Status Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian-card border border-white/[0.08] shadow-md">
                <span className="text-[11px] xs:text-xs font-mono text-titanium font-semibold">Kerala, India · Remote Worldwide</span>
              </div>
            </div>

            {/* Single Primary SEO H1 Headline with prominent Entity Name */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ivory leading-[1.12]">
              Abin S Chandran{" "}
              <span className="block text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan via-cyan-light to-violet mt-2 sm:mt-3 leading-snug">
                Freelance Software Developer &amp; Solution Architect
              </span>
            </h1>

            {/* Supporting Bio Copy */}
            <p className="text-sm xs:text-base sm:text-lg text-titanium leading-relaxed max-w-2xl font-sans">
              Hi, I&apos;m <strong className="text-ivory font-semibold">Abin</strong> (Abin S Chandran). I help startups, founders, and businesses build scalable full-stack web applications, Node.js REST APIs, Next.js SaaS platforms, and cross-platform Flutter mobile apps.
            </p>

            {/* Action Buttons with Ergonomic Touch Targets */}
            <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-2.5 sm:gap-3 pt-2">
              <WhatsAppButton variant="primary" size="md" glare={true} className="justify-center" />

              <Link
                href="/hire-web-developer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan hover:bg-cyan-light text-brand-bg text-xs font-extrabold font-mono tracking-wide shadow-xl shadow-cyan/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Hire Web Developer</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-obsidian-card hover:bg-obsidian-hover border border-white/[0.14] hover:border-cyan/35 text-ivory text-xs font-mono transition-all shadow-lg text-center"
              >
                <Layers className="w-4 h-4 text-cyan shrink-0" />
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Core Capability Chips */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs font-mono text-titanium">
              <div className="flex items-center gap-2.5 bg-obsidian-card p-2.5 rounded-xl border border-white/[0.08]">
                <Globe className="w-4 h-4 text-cyan shrink-0" />
                <span className="truncate">Full-Stack &amp; Web</span>
              </div>
              <div className="flex items-center gap-2.5 bg-obsidian-card p-2.5 rounded-xl border border-white/[0.08]">
                <Server className="w-4 h-4 text-cyan-light shrink-0" />
                <span className="truncate">Node.js / Express</span>
              </div>
              <div className="flex items-center gap-2.5 bg-obsidian-card p-2.5 rounded-xl border border-white/[0.08]">
                <Zap className="w-4 h-4 text-violet shrink-0" />
                <span className="truncate">React / Next.js 15</span>
              </div>
              <div className="flex items-center gap-2.5 bg-obsidian-card p-2.5 rounded-xl border border-white/[0.08]">
                <Smartphone className="w-4 h-4 text-titanium shrink-0" />
                <span className="truncate">Flutter / Mobile</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Photo + Architecture Card */}
          <div className="lg:col-span-5 relative space-y-5">

            {/* Profile Photo Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none bg-obsidian-card border border-white/[0.08] rounded-2xl p-4 sm:p-5 shadow-2xl flex items-center gap-3.5 sm:gap-5">
              {/* Photo with ring */}
              <div className="relative shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ring-2 ring-cyan/50 ring-offset-2 ring-offset-brand-card overflow-hidden shadow-lg shadow-cyan/15">
                  <Image
                    src="/abin-s-chandran.png"
                    alt="Abin S Chandran (Abin, Abin S, Abin S Chandran) - Freelance Software Developer & Solution Architect"
                    title="Abin S Chandran - Freelance Software Developer (Abin, Abin S)"
                    width={80}
                    height={80}
                    sizes="80px"
                    priority
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                {/* Online indicator */}
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500 border-2 border-obsidian-card shadow" />
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1 space-y-1">
                <p className="text-sm sm:text-base font-bold text-ivory font-mono truncate">Abin S Chandran</p>
                <p className="text-[11px] sm:text-xs text-titanium font-sans truncate">Freelance Software Developer</p>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-cyan">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span className="truncate">Kerala, India · Remote</span>
                </div>
              </div>

              {/* Available badge */}
              <div className="shrink-0 flex flex-col items-end gap-1">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </span>
              </div>
            </div>

            {/* Architecture Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none bg-obsidian-card border border-white/[0.08] rounded-2xl p-4 sm:p-6 shadow-2xl space-y-4 sm:space-y-5">
              
              {/* Card Window Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-1 sm:ml-2 text-[10px] sm:text-[11px] font-mono text-titanium-muted truncate">
                    web_and_mobile_architecture.sys
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-cyan/10 text-cyan border border-cyan/30 shrink-0 font-bold">
                  PRODUCTION READY
                </span>
              </div>

              {/* Interactive Node Flow Demo */}
              <div className="space-y-2.5 sm:space-y-3 font-mono text-xs">
                
                {/* Mobile & Web Node */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-obsidian-hover border border-cyan/30 flex items-center justify-between hover:border-cyan transition-colors">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan/15 flex items-center justify-center text-cyan shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-ivory text-[11px] sm:text-xs">Next.js 15 Web &amp; Flutter Mobile UI</div>
                      <div className="text-[9px] sm:text-[10px] text-titanium">Responsive Web Apps &amp; Mobile Form Factors</div>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-cyan bg-cyan/10 px-1.5 sm:px-2 py-0.5 rounded shrink-0 font-bold">
                    Native Speed
                  </span>
                </div>

                {/* Arrow Connector */}
                <div className="flex justify-center text-cyan/60 text-[9px] sm:text-[10px] animate-pulse">
                  ↓ Secure REST / GraphQL API Stream ↓
                </div>

                {/* Event Bus & Microservice Grid */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-lg bg-obsidian-surface border border-white/[0.08] text-left">
                    <div className="text-[10px] text-titanium font-semibold">Backend API</div>
                    <div className="text-[11px] text-ivory font-mono">Node.js &amp; Express</div>
                    <div className="text-[9px] text-cyan-light mt-1">JWT Auth &amp; Rate Limits</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-obsidian-surface border border-white/[0.08] text-left">
                    <div className="text-[10px] text-titanium font-semibold">Database Layer</div>
                    <div className="text-[11px] text-ivory font-mono">PostgreSQL / MongoDB</div>
                    <div className="text-[9px] text-emerald-400 mt-1">Sub-10ms Queries</div>
                  </div>
                </div>

                {/* Cache & DB Layer */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-obsidian-surface border border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-violet shrink-0" />
                    <div>
                      <div className="text-[11px] sm:text-xs text-ivory font-semibold">Redis &amp; Third-Party Services</div>
                      <div className="text-[9px] sm:text-[10px] text-titanium">Stripe Payments, Firebase &amp; AWS</div>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-cyan-light font-mono shrink-0">99.99% Availability</span>
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
