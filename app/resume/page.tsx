import React from "react";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { Download, FileText, Briefcase, Award, CheckCircle2, Building2, MapPin, Calendar, Mail, Github, Linkedin } from "lucide-react";
import { CAREER_TIMELINE } from "@/data/timeline";
import { SKILL_PILLARS } from "@/data/skills";

export const metadata: Metadata = {
  title: "Career Resume & Technical Experience | Abin S Chandran",
  description:
    "Official resume of Abin S Chandran — Freelance Full-Stack Developer & Solution Architect with 5+ years experience across Node.js, React, Next.js, microservices, cloud infrastructure, and enterprise software engineering.",
  alternates: {
    canonical: "https://abnschandran.in/resume",
  },
  openGraph: {
    title: "Career Resume & Technical Experience | Abin S Chandran",
    description:
      "Explore 5+ years of verified software development experience, core technical stack competencies, and career trajectory.",
    url: "https://abnschandran.in/resume",
  },
};

export default function ResumePage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-obsidian-bg">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: "https://abnschandran.in" },
          { name: "Resume", item: "https://abnschandran.in/resume" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header & PDF Download Button */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 sm:p-10 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-mono mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Verified Career Resume</span>
            </div>
            <h1 className="text-3xl font-extrabold text-ivory tracking-tight">Abin S Chandran</h1>
            <p className="text-copper font-mono text-sm mt-1">Freelance Full-Stack Developer &amp; Solution Architect (5+ Yrs)</p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-titanium mt-3">
              <span>Location: Kerala, India (Remote Worldwide)</span>
              <span>•</span>
              <span>Status: Available for Freelance &amp; Consulting</span>
            </div>
          </div>

          <a
            href="/abin-s-chandran-solution-architect-resume.pdf"
            download="abin-s-chandran-solution-architect-resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-copper hover:bg-copper-light text-white font-mono text-xs font-bold transition-all shadow-lg shadow-copper/20 self-start sm:self-auto shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Resume</span>
          </a>
        </div>

        {/* Executive Summary */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 sm:p-8 space-y-3 font-sans shadow-xl">
          <h2 className="text-sm font-mono uppercase tracking-wider text-copper font-semibold">Executive Summary</h2>
          <p className="text-xs sm:text-sm text-titanium leading-relaxed">
            Freelance Full-Stack Software Developer &amp; Solution Architect with 5+ years of production engineering experience building scalable Node.js &amp; Express REST API backends, modern React 19 &amp; Next.js 15 web applications, high-concurrency event-driven microservices, and custom SaaS platforms. Proven track record of delivering 40+ software systems, optimizing SQL database queries (sub-10ms latencies), driving infrastructure cost savings, and delivering 99.99% operational SLAs for startups and global business clients.
          </p>
        </div>

        {/* Professional Experience Section */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <h2 className="text-base font-bold text-ivory font-mono border-b border-obsidian-border pb-3 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-copper" />
            Professional Career History
          </h2>

          <div className="space-y-8">
            {CAREER_TIMELINE.map((item) => (
              <div key={item.year} className="space-y-3 border-l-2 border-copper/40 pl-4 sm:pl-6 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-obsidian-bg border-2 border-copper" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base font-bold text-ivory font-sans">{item.role}</h3>
                  <span className="text-xs font-mono text-copper bg-copper/10 px-2.5 py-0.5 rounded self-start sm:self-auto font-semibold">
                    {item.year}
                  </span>
                </div>

                <div className="text-xs font-mono text-titanium flex items-center gap-3">
                  <span className="text-ivory font-semibold">{item.company}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                </div>

                <p className="text-xs text-titanium leading-relaxed font-sans">{item.description}</p>

                <ul className="space-y-1.5 pt-1">
                  {item.highlights.map((h, idx) => (
                    <li key={idx} className="text-xs text-titanium font-sans flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Core Skills & Tools Overview */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="text-base font-bold text-ivory font-mono border-b border-obsidian-border pb-3">
            Core Competencies &amp; Technology Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_PILLARS.map((p) => (
              <div key={p.title} className="p-4 rounded-xl bg-obsidian-bg border border-obsidian-border space-y-2">
                <div className="text-xs font-bold text-copper font-mono">{p.title}</div>
                <div className="flex flex-wrap gap-1.5">
                  {p.skills.map((s) => (
                    <span key={s.name} className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-surface text-ivory">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
