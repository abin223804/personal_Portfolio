"use client";

import React from "react";
import Link from "next/link";
import { Layers, Server, Layout, Zap, Cpu, Activity, ShieldCheck, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { SERVICES } from "@/data/services";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const ServicesSection: React.FC<{ limit?: number }> = ({ limit }) => {
  const iconsMap: Record<string, React.ElementType> = {
    Layers,
    Server,
    Layout,
    Zap,
    Cpu,
    Activity,
    ShieldCheck,
  };

  const displayedServices = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section className="py-20 bg-obsidian-bg relative overflow-hidden" id="services">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-copper/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-obsidian-border pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Freelance Development Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory tracking-tight">
              Software Development &amp; Architecture Services
            </h2>
            <p className="text-titanium text-sm sm:text-base mt-2 max-w-2xl font-sans">
              End-to-end full-stack web application development, Node.js backend engineering, React &amp; Next.js frontend development, SaaS platforms, and custom admin dashboards for startups and businesses.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-obsidian-surface hover:bg-obsidian-card border border-obsidian-border hover:border-copper text-ivory text-xs font-mono font-bold transition-all shadow-lg self-start md:self-auto shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-copper" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service) => {
            const Icon = iconsMap[service.iconName] || Layers;

            return (
              <div
                key={service.slug}
                className="bg-obsidian-surface border border-obsidian-border hover:border-copper/60 rounded-2xl p-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-copper/10 flex flex-col justify-between group font-sans"
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-obsidian-card border border-obsidian-border flex items-center justify-center text-copper group-hover:bg-copper group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      Available for Hire
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-ivory group-hover:text-copper transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-titanium leading-relaxed mt-2">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-2 border-t border-obsidian-border/60 pt-3">
                    <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-copper">
                      Key Deliverables:
                    </div>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-titanium font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.techStack.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-card border border-obsidian-border text-titanium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-4 border-t border-obsidian-border/80 flex items-center justify-between gap-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-mono text-titanium hover:text-ivory transition-colors"
                  >
                    Service Details
                  </Link>

                  <WhatsAppButton variant="secondary" size="sm" />
                </div>

              </div>
            );
          })}
        </div>

        {/* Services Bottom Callout */}
        <div className="bg-obsidian-surface/60 border border-obsidian-border rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-ivory font-mono">Need a custom software solution tailored to your business?</h4>
            <p className="text-xs text-titanium mt-0.5">Let&apos;s evaluate your requirements, technical stack, and timeline.</p>
          </div>
          <WhatsAppButton variant="primary" size="md" className="shrink-0" />
        </div>

      </div>
    </section>
  );
};
