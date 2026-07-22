import React from "react";
import type { Metadata } from "next";
import { User, Cpu, ShieldCheck, Zap, Layers, CheckCircle2, Lock, ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architecture Philosophy & Solution Leadership",
  description:
    "Learn about Abin S Chandran's solution architecture philosophy, systems engineering process, security-first mindset, and scalability practices for high-concurrency cloud environments.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-obsidian-bg">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: "https://abinschandran.com" },
          { name: "About", item: "https://abinschandran.com/about" },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>Architecture Philosophy & Background</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory tracking-tight leading-tight">
            Engineering Systems for Extreme Scale & Resilience
          </h1>

          {/* Genuine Keyword-Natural SEO Paragraph */}
          <p className="text-sm sm:text-base text-titanium leading-relaxed font-sans">
            My name is <strong className="text-ivory">Abin S Chandran</strong>, a <strong className="text-ivory">Solution Architect and Senior Full Stack Developer</strong> with over 5 years of professional experience designing multi-region cloud infrastructures, high-concurrency microservice APIs, and enterprise web applications. My core stack centers on <strong className="text-copper">Node.js, TypeScript, Go (Golang), Next.js 15, Python, Amazon Web Services (AWS), Kubernetes, Kafka, PostgreSQL, and Redis</strong>. I specialize in transforming complex business domains into decoupled, fault-tolerant architectures that maintain 99.99% operational uptime.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-obsidian-surface border border-obsidian-border space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-copper/20 text-copper flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-ivory font-mono">Decoupled Systems Thinking</h3>
            <p className="text-xs text-titanium leading-relaxed">
              Designing microservices with strict domain boundaries (DDD) and asynchronous event sourcing to ensure zero cascading failures.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-obsidian-surface border border-obsidian-border space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-ivory font-mono">Zero Trust Security First</h3>
            <p className="text-xs text-titanium leading-relaxed">
              Enforcing mutual TLS (mTLS), token bucket rate limiters, asymmetric JWT checks, and role-based access control at edge proxy layers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-obsidian-surface border border-obsidian-border space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-ivory font-mono">Sub-10ms Latency SLAs</h3>
            <p className="text-xs text-titanium leading-relaxed">
              Optimizing SQL query indexes, Redis memory caching, and eBPF kernel tracing to consistently deliver sub-10ms P99 latencies.
            </p>
          </div>
        </div>

        {/* 4-Step Solution Architecture Process */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 font-sans">
          <h2 className="text-2xl font-bold text-ivory font-mono border-b border-obsidian-border pb-4">
            The Solution Architecture Process
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-copper/20 text-copper font-mono font-bold text-sm flex items-center justify-center shrink-0">1</span>
              <div>
                <h4 className="text-sm font-bold text-ivory font-mono">Domain Discovery & Requirement Decomposition</h4>
                <p className="text-xs text-titanium mt-1 leading-relaxed">Analyzing business bottlenecks, traffic projections, security SLAs, and data compliance rules before writing a single line of infrastructure code.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-copper/20 text-copper font-mono font-bold text-sm flex items-center justify-center shrink-0">2</span>
              <div>
                <h4 className="text-sm font-bold text-ivory font-mono">Architecture Blueprinting & RFC Specs</h4>
                <p className="text-xs text-titanium mt-1 leading-relaxed">Drafting clear architectural diagrams, gRPC/OpenAPI contracts, data model schemas, and trade-off evaluations for engineering consensus.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-copper/20 text-copper font-mono font-bold text-sm flex items-center justify-center shrink-0">3</span>
              <div>
                <h4 className="text-sm font-bold text-ivory font-mono">Immutable Infrastructure & Automated Pipelines</h4>
                <p className="text-xs text-titanium mt-1 leading-relaxed">Provisioning AWS EKS, VPC, and Redis clusters via 100% automated Terraform IaC modules backed by GitHub Actions matrix testing.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-copper/20 text-copper font-mono font-bold text-sm flex items-center justify-center shrink-0">4</span>
              <div>
                <h4 className="text-sm font-bold text-ivory font-mono">Observability & Self-Healing Telemetry</h4>
                <p className="text-xs text-titanium mt-1 leading-relaxed">Integrating Datadog, Prometheus, Grafana, and automated circuit breakers to isolate faults without human intervention.</p>
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
            <span>Consult Architect for Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
