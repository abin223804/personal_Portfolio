"use client";

import React, { useState, useEffect } from "react";
import { Cpu, ShieldCheck, Database, Layers, Cloud, Server, Activity, ArrowRight, Play, CheckCircle2, Zap } from "lucide-react";

interface NodeDetail {
  id: string;
  name: string;
  category: string;
  latency: string;
  tech: string[];
  description: string;
  sla: string;
  icon: React.ElementType;
}

export const ArchitecturePlayground: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>("gateway");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const nodes: NodeDetail[] = [
    {
      id: "client",
      name: "1. Client Request",
      category: "Edge Traffic",
      latency: "< 1ms",
      tech: ["HTTP/3", "gRPC-Web", "WebSockets"],
      description: "Anycast CDN receives incoming client traffic, terminates TLS 1.3, and injects unique trace spans.",
      sla: "100% Ingress Reachability",
      icon: Cloud,
    },
    {
      id: "gateway",
      name: "2. Envoy API Gateway",
      category: "Edge Router",
      latency: "2.4ms",
      tech: ["Envoy Proxy", "Go Filters", "WebAssembly"],
      description: "Evaluates dynamic path routing, tenant quotas, and applies sliding window rate-limiting rules.",
      sla: "99.99% Routing SLA",
      icon: Cpu,
    },
    {
      id: "auth",
      name: "3. Zero Trust Auth",
      category: "Security Layer",
      latency: "1.2ms",
      tech: ["JWT", "OAuth2 / OIDC", "Vault PKI"],
      description: "Verifies asymmetric cryptographic token signatures at proxy edge without database roundtrips.",
      sla: "Zero Security Compromise",
      icon: ShieldCheck,
    },
    {
      id: "services",
      name: "4. Go Microservices",
      category: "Business Logic",
      latency: "4.8ms",
      tech: ["Go", "Kubernetes EKS", "gRPC"],
      description: "Decoupled domain workers execute high-concurrency business logic across isolated EKS pods.",
      sla: "Auto-scaling (HPA)",
      icon: Server,
    },
    {
      id: "queue",
      name: "5. Event Queue & Bus",
      category: "Async Streaming",
      latency: "0.8ms",
      tech: ["Apache Kafka", "RabbitMQ"],
      description: "Streams transactional events to immutable append-only topics for audit & background settlement.",
      sla: "50k+ Events/sec",
      icon: Layers,
    },
    {
      id: "database",
      name: "6. DB & Redis Cache",
      category: "Persistence",
      latency: "1.6ms",
      tech: ["PostgreSQL", "pgvector", "Redis"],
      description: "Queries indexed double-entry tables & vector memory embeddings with sub-2ms read cached responses.",
      sla: "100% ACID Compliance",
      icon: Database,
    },
  ];

  const triggerSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setCurrentStep(0);
    setActiveNodeId(nodes[0].id);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < nodes.length) {
        setCurrentStep(step);
        setActiveNodeId(nodes[step].id);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1200);
  };

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[1];

  return (
    <section className="py-20 bg-obsidian-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-obsidian-border pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper-light font-semibold text-xs font-mono mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>Interactive Architecture Visualizer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory tracking-tight">
              High-Availability Distributed Pipeline
            </h2>
            <p className="text-titanium text-sm mt-2 max-w-xl">
              Inspect how data flows through edge proxies, auth checks, gRPC microservices, event streams, and database caching.
            </p>
          </div>

          <button
            onClick={triggerSimulation}
            disabled={isSimulating}
            aria-label="Simulate live request flow across distributed architecture nodes"
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-extrabold transition-all shadow-lg ${
              isSimulating
                ? "bg-amber-500/20 text-amber-400 border border-amber-500/40 cursor-not-allowed"
                : "bg-copper text-obsidian-bg hover:bg-copper-light shadow-copper/20 hover:shadow-copper/30"
            }`}
          >
            <Play className={`w-4 h-4 ${isSimulating ? "animate-spin" : ""}`} aria-hidden="true" />
            <span>{isSimulating ? `Processing Step ${currentStep + 1}/${nodes.length}...` : "Simulate Live Request Flow"}</span>
          </button>
        </div>

        {/* Nodes Interactive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isActive = activeNodeId === node.id;
            const isPassed = isSimulating && index <= currentStep;

            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                aria-label={`Inspect architectural node: ${node.name}`}
                className={`p-4 rounded-xl border text-left transition-all duration-300 relative group ${
                  isActive
                    ? "bg-obsidian-card border-copper shadow-xl shadow-copper/15 ring-1 ring-copper/50"
                    : isPassed
                    ? "bg-obsidian-surface border-emerald-500/50"
                    : "bg-obsidian-surface border-obsidian-border hover:border-copper/40"
                }`}
              >
                {/* Node Status Indicator */}
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? "bg-copper text-white" : "bg-obsidian-border/50 text-titanium group-hover:text-ivory"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-titanium">{node.latency}</span>
                </div>

                <div className="text-xs font-bold text-ivory font-mono truncate">{node.name}</div>
                <div className="text-[10px] text-titanium font-mono mt-0.5">{node.category}</div>

                {/* Animated Line Flow Connector */}
                {index < nodes.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className={`w-3.5 h-3.5 ${isPassed ? "text-emerald-400 animate-pulse" : "text-obsidian-border"}`} />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Node Deep-Dive Inspector Panel */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-copper/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Column 1: Core Details */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-copper/20 border border-copper/40 flex items-center justify-center text-copper">
                  <activeNode.icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-ivory font-mono">{activeNode.name}</h3>
                  <span className="text-xs text-copper font-mono">{activeNode.category}</span>
                </div>
              </div>

              <p className="text-xs text-titanium leading-relaxed">{activeNode.description}</p>
            </div>

            {/* Column 2: Tech Stack Badges */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-ivory font-semibold">
                Node Technology Specs
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeNode.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-obsidian-card border border-obsidian-border text-ivory font-mono text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>SLA Boundary: {activeNode.sla}</span>
              </div>
            </div>

            {/* Column 3: Telemetry & Benchmark */}
            <div className="bg-obsidian-card p-4 rounded-xl border border-obsidian-border space-y-2 font-mono text-xs">
              <div className="text-titanium text-[11px] uppercase tracking-wider font-semibold flex items-center justify-between">
                <span>Node Telemetry</span>
                <Zap className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="flex items-center justify-between text-ivory">
                <span>Processing Latency:</span>
                <span className="text-copper font-bold">{activeNode.latency}</span>
              </div>
              <div className="flex items-center justify-between text-ivory">
                <span>Circuit Status:</span>
                <span className="text-emerald-400 font-bold">CLOSED (Healthy)</span>
              </div>
              <div className="flex items-center justify-between text-ivory">
                <span>Memory Overhead:</span>
                <span className="text-titanium">&lt; 14MB / instance</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
