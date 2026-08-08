import React from "react";
import type { Metadata } from "next";
import { User, Cpu, ShieldCheck, Zap, Layers, CheckCircle2, Lock, ArrowRight, MapPin, Briefcase } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Abin S Chandran | Freelance Software Developer in Kerala, India",
  description:
    "Learn about Abin S Chandran, a Freelance Full-Stack Developer & Solution Architect based in Kerala, India. Specializing in Node.js, React, Next.js, REST APIs, and scalable web application development.",
  alternates: {
    canonical: "https://abnschandran.in/about",
  },
  openGraph: {
    title: "About Abin S Chandran | Freelance Full-Stack Developer",
    description:
      "Full-stack software engineering background, solution architecture philosophy, Node.js & React stack, based in Kerala, India, serving remote clients worldwide.",
    url: "https://abnschandran.in/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-obsidian-bg">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: "https://abnschandran.in" },
          { name: "About", item: "https://abnschandran.in/about" },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-mono">
              <User className="w-3.5 h-3.5" />
              <span>About &amp; Background</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian-bg border border-obsidian-border text-titanium text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-copper" />
              <span>Kerala, India (Remote Worldwide)</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory tracking-tight leading-tight">
            Freelance Software Development &amp; Solution Architecture
          </h1>

          {/* Genuine Keyword-Natural SEO Paragraph */}
          <p className="text-sm sm:text-base text-titanium leading-relaxed font-sans">
            My name is <strong className="text-ivory">Abin S Chandran</strong>, a <strong className="text-ivory">Freelance Full-Stack Developer and Solution Architect</strong> with over 5 years of professional experience building custom web applications, high-concurrency microservices, and enterprise digital platforms. Based in <strong className="text-ivory">Kerala, India</strong>, I serve startups, small businesses, and growing companies locally across India and remotely worldwide. My core tech stack includes <strong className="text-copper">Node.js, Express.js, JavaScript, TypeScript, React 19, Next.js 15, PostgreSQL, MongoDB, REST APIs, and AWS Cloud</strong>.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-obsidian-surface border border-obsidian-border space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-copper/20 text-copper flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-ivory font-mono">Clean Architecture</h3>
            <p className="text-xs text-titanium leading-relaxed">
              Designing decoupled Node.js backends and Next.js frontends with strict boundary controls to prevent code rot and technical debt.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-obsidian-surface border border-obsidian-border space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-ivory font-mono">Security &amp; Auth First</h3>
            <p className="text-xs text-titanium leading-relaxed">
              Implementing secure JWT token verification, OAuth2 authentication, rate limiting, and role-based access control (RBAC).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-obsidian-surface border border-obsidian-border space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-ivory font-mono">Fast Latencies &amp; SLAs</h3>
            <p className="text-xs text-titanium leading-relaxed">
              Optimizing SQL database queries, Redis caching layers, and front-end bundle sizes to deliver fast page load speeds.
            </p>
          </div>
        </div>

        {/* 4-Step Software Development Process */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 font-sans">
          <h2 className="text-2xl font-bold text-ivory font-mono border-b border-obsidian-border pb-4">
            How I Work With Freelance Clients
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-copper/20 text-copper font-mono font-bold text-sm flex items-center justify-center shrink-0">1</span>
              <div>
                <h4 className="text-sm font-bold text-ivory font-mono">Discovery &amp; Requirements Blueprinting</h4>
                <p className="text-xs text-titanium mt-1 leading-relaxed">Analyzing project objectives, target users, security requirements, and database schema needs before writing code.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-copper/20 text-copper font-mono font-bold text-sm flex items-center justify-center shrink-0">2</span>
              <div>
                <h4 className="text-sm font-bold text-ivory font-mono">Agile Architecture &amp; Iterative Development</h4>
                <p className="text-xs text-titanium mt-1 leading-relaxed">Building clean Node.js backend REST APIs and Next.js / React frontends with regular milestone updates on GitHub.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-copper/20 text-copper font-mono font-bold text-sm flex items-center justify-center shrink-0">3</span>
              <div>
                <h4 className="text-sm font-bold text-ivory font-mono">Quality Assurance &amp; Performance Audit</h4>
                <p className="text-xs text-titanium mt-1 leading-relaxed">Rigorous testing, API security checks, database query indexing, and mobile responsiveness validation.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-copper/20 text-copper font-mono font-bold text-sm flex items-center justify-center shrink-0">4</span>
              <div>
                <h4 className="text-sm font-bold text-ivory font-mono">Cloud Deployment &amp; Post-Launch Handoff</h4>
                <p className="text-xs text-titanium mt-1 leading-relaxed">Deploying production builds to AWS, Vercel, or custom servers with automated backups, documentation, and ongoing maintenance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-copper hover:bg-copper-light text-white text-xs font-mono font-bold shadow-xl shadow-copper/20 transition-all"
          >
            <span>Start Your Freelance Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
