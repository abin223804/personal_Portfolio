"use client";

import React, { useEffect, useState, useRef } from "react";
import { Award, Zap, CheckCircle2, Activity, Server, Clock, Users } from "lucide-react";

export const PerformanceDashboard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    { label: "Years Experience", value: 5, prefix: "", suffix: "+ Yrs", icon: Clock, detail: "Enterprise Architecture & Full Stack" },
    { label: "Projects Delivered", value: 40, prefix: "", suffix: "+ Systems", icon: CheckCircle2, detail: "Multi-region SaaS & FinTech engines" },
    { label: "Tech Stack Mastery", value: 15, prefix: "", suffix: "+ Core Tools", icon: Server, detail: "Go, Node, K8s, Next.js, Kafka, Postgres" },
    { label: "API SLA Uptime", value: 99.99, prefix: "", suffix: "% SLA", icon: Zap, detail: "Zero single points of failure" },
    { label: "Requests Processed", value: 50, prefix: "", suffix: "k+ RPS", icon: Activity, detail: "High-throughput peak workload" },
    { label: "Client Satisfaction", value: 100, prefix: "", suffix: "% Success", icon: Award, detail: "100% on-time production releases" },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-obsidian-surface border-y border-obsidian-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-mono mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory tracking-tight">
            System Reliability & Production Metrics
          </h2>
          <p className="text-titanium text-sm mt-2 font-sans">
            Quantifiable engineering impact across cloud infrastructure, backend throughput, and full-stack software delivery.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="p-6 rounded-2xl bg-obsidian-bg border border-obsidian-border hover:border-copper/50 transition-all duration-300 shadow-xl group space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-obsidian-surface border border-obsidian-border/80 flex items-center justify-center text-copper group-hover:bg-copper group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    VERIFIED
                  </span>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-ivory font-mono tracking-tight group-hover:text-copper transition-all duration-500">
                    {m.prefix}
                    {m.value}
                    {m.suffix}
                  </div>
                  <div className="text-xs font-bold text-ivory font-mono mt-1">{m.label}</div>
                  <div className="text-[11px] text-titanium mt-1 font-sans">{m.detail}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
