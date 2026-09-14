import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Clock,
  HelpCircle,
  Building2,
  Truck,
  Briefcase,
  Code2,
  Server,
  Smartphone,
  Gauge,
  Workflow,
  FileCheck,
  Zap,
  Phone,
  Globe2,
  ExternalLink,
} from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ProjectBriefBlock } from "@/components/conversion/ProjectBriefBlock";

export const metadata: Metadata = {
  title: "Freelance Software Developer in Kochi | Abin S Chandran",
  description:
    "Hire Abin S Chandran — Senior Freelance Software Developer & Solution Architect in Kochi (Infopark / Kakkanad). Next.js SaaS platforms, Flutter mobile apps, Node.js APIs & AI/RAG systems.",
  keywords: [
    "freelance software developer Kochi",
    "software developer in Kochi",
    "freelance web developer Kochi",
    "Next.js developer Kochi",
    "Flutter app developer Kochi",
    "Infopark freelance developer",
    "SaaS MVP developer Kochi",
    "hire software engineer Kochi Kerala",
    "freelance solution architect Kakkanad",
    "web development company Kochi alternative",
    "full stack developer Kochi",
  ],
  alternates: {
    canonical: "https://www.abinschandran.in/freelance-software-developer-kochi",
  },
  openGraph: {
    title: "Freelance Software Developer in Kochi | Abin S Chandran",
    description:
      "Direct technical ownership for Infopark startups and Kochi enterprises. Next.js SaaS platforms, Flutter mobile apps, Node.js REST APIs, and production AI/RAG systems.",
    url: "https://www.abinschandran.in/freelance-software-developer-kochi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Freelance Software Developer in Kochi - Abin S Chandran",
      },
    ],
  },
};

const KOCHI_INDUSTRIES = [
  {
    icon: Sparkles,
    title: "Startups & Infopark / SmartCity Tech Ecosystem",
    description:
      "Rapid SaaS MVP development, multi-tenant architecture, Supabase / PostgreSQL schemas, and Next.js 15 frontends for venture-backed and bootstrapped founders scaling out of Kakkanad and Kochi.",
  },
  {
    icon: Globe2,
    title: "Gulf / UAE & Overseas Remote Engineering",
    description:
      "High-velocity offshore delivery for founders and businesses in Dubai, Abu Dhabi, Qatar, and Oman who require a senior Indian software architect with direct communication and zero agency overhead.",
  },
  {
    icon: Truck,
    title: "Maritime, Logistics & Port Supply Chains",
    description:
      "Custom tracking software, container freight dispatch, international shipment manifest portals, and supplier APIs tailored for Cochin Port logistics and maritime agencies.",
  },
  {
    icon: Building2,
    title: "Healthcare, Hospitals & Telemedicine",
    description:
      "HIPAA-compliant patient portals, doctor appointment scheduling, lab report dispatch, and automated WhatsApp notification pipelines for Kochi's premier medical centers.",
  },
  {
    icon: Layers,
    title: "Multi-Store Retail & Wholesale Distribution",
    description:
      "Centralized inventory synchronization across Kochi and Ernakulam retail chains, GST-compliant e-invoicing backends, and high-performance customer-facing mobile ordering apps.",
  },
  {
    icon: Server,
    title: "Enterprise APIs & System Modernization",
    description:
      "Migrating legacy monolithic PHP/WordPress setups to resilient Node.js microservices, sub-10ms response APIs, Redis caching layers, and decoupled React/Next.js architectures.",
  },
];

const KOCHI_FAQS = [
  {
    question: "Can we schedule an in-person meeting in Kochi or Kakkanad?",
    answer:
      "Yes. While day-to-day coding operates on a structured, remote-first model with daily asynchronous updates and private GitHub access, I am readily available for in-person project discovery sessions, milestone architecture reviews, and stakeholder handoffs across Infopark, SmartCity, Kakkanad, Kaloor, and central Kochi.",
  },
  {
    question: "Why should a Kochi startup hire a freelance architect instead of an agency?",
    answer:
      "Traditional software agencies in Kochi charge high overhead markups to cover account managers, project coordinators, and office overheads—and often assign junior coders to your build. Working directly with an independent senior architect means you collaborate 1-on-1 with the engineer writing your code, iterate 3× faster, and receive clean, modular architecture with 100% intellectual property handover.",
  },
  {
    question: "What is your typical delivery timeline for an MVP or web application in Kochi?",
    answer:
      "A focused SaaS MVP or commercial web application typically ships in 4 to 8 weeks, structured across clear 2-week milestones: (1) Architecture & schema design, (2) Core backend & authentication, (3) Frontend interface & integrations, and (4) Production hardening, automated testing & deployment.",
  },
  {
    question: "Do you build cross-platform mobile apps for Android and iOS?",
    answer:
      "Yes. Using Google Flutter and Dart, I develop native-performance 60fps applications for both iOS and Android from a unified codebase. This cuts mobile development time and maintenance cost in half without compromising on smooth animations or device hardware integrations.",
  },
  {
    question: "How are intellectual property and source code handled?",
    answer:
      "You retain 100% ownership of all source code, database schemas, deployment scripts, and intellectual property. Code is pushed directly to your organization's private GitHub repository from Day 1, with zero vendor lock-in.",
  },
  {
    question: "What happens after the software launches?",
    answer:
      "Every deployment includes a 30-day post-launch warranty covering bug fixes and system stabilization. Following the warranty, you can opt for an ongoing technical retainer for feature expansion, database backups, and server monitoring.",
  },
];

export default function KochiSoftwareDeveloperPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.abinschandran.in/freelance-software-developer-kochi#service",
        name: "Abin S Chandran — Freelance Software Developer & Solution Architect Kochi",
        url: "https://www.abinschandran.in/freelance-software-developer-kochi",
        image: "https://www.abinschandran.in/abin-s-chandran.png",
        description:
          "Senior Freelance Software Developer and Solution Architect serving startups, SMEs, and enterprises across Kochi, Infopark Kakkanad, and Kerala. Specializing in Next.js SaaS platforms, Flutter mobile apps, Node.js REST APIs, and AI/RAG integrations.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kochi",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "9.9312",
          longitude: "76.2673",
        },
        areaServed: [
          { "@type": "City", name: "Kochi" },
          { "@type": "City", name: "Kakkanad" },
          { "@type": "City", name: "Infopark Kochi" },
          { "@type": "City", name: "SmartCity Kochi" },
          { "@type": "City", name: "Ernakulam" },
          { "@type": "City", name: "Kaloor" },
          { "@type": "City", name: "Edappally" },
          { "@type": "City", name: "Aluva" },
          { "@type": "City", name: "Vyttila" },
          { "@type": "City", name: "Thrikkakara" },
        ],
        priceRange: "$$ - $$$",
        telephone: "+918086223804",
        email: "abinschandran1@gmail.com",
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.abinschandran.in/freelance-software-developer-kochi#faq",
        mainEntity: KOCHI_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.abinschandran.in/freelance-software-developer-kochi#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.abinschandran.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Kerala Hub",
            item: "https://www.abinschandran.in/freelance-software-developer-kerala",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Kochi Software Developer",
            item: "https://www.abinschandran.in/freelance-software-developer-kochi",
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-brand-bg text-ivory selection:bg-cyan/20 selection:text-cyan">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/[0.06] pt-32 pb-20 lg:pt-36 lg:pb-28">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-cyan/10 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/3 -right-40 h-80 w-80 rounded-full bg-violet/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-mono font-semibold text-cyan">
              <MapPin className="h-3.5 w-3.5" />
              <span>Kochi &amp; Infopark Commercial Software Hub</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-ivory sm:text-4xl lg:text-5xl leading-tight">
              Freelance Software Developer in Kochi
            </h1>

            <p className="text-base leading-relaxed text-titanium sm:text-lg">
              Direct technical partnership with a senior solution architect and full-stack engineer. Delivering scalable Next.js 15 SaaS web applications, high-performance Flutter mobile apps, sub-10ms Node.js APIs, and custom AI/RAG systems for Infopark startups, Kochi enterprises, and global founders.
            </p>

            {/* Above-the-fold Trust Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs font-mono text-titanium">
              <div className="flex items-center gap-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] p-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan shrink-0" />
                <span className="truncate">Direct 1-on-1 Ownership</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] p-2">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">100% IP &amp; Git Handover</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] p-2 col-span-2 sm:col-span-1">
                <Zap className="h-3.5 w-3.5 text-violet shrink-0" />
                <span className="truncate">Zero Agency Overhead</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <WhatsAppButton
                variant="primary"
                size="lg"
                message="Hi Abin, I'm reaching out from Kochi/Infopark to discuss a custom software project."
              />
              <a
                href="tel:+918086223804"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs font-mono font-bold text-ivory hover:border-cyan/40 hover:bg-white/10 transition-all shadow-lg"
              >
                <Phone className="h-4 w-4 text-cyan" />
                <span>Call: +91 80862 23804</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs font-mono font-bold text-ivory hover:border-cyan/40 hover:bg-white/10 transition-all"
              >
                <span>Send Project Brief</span>
                <ArrowRight className="h-4 w-4 text-cyan" />
              </Link>
            </div>

            {/* Regional Cross-Links */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-titanium pt-2">
              <span>Part of the statewide</span>
              <Link href="/freelance-software-developer-kerala" className="text-cyan underline hover:text-cyan-light">
                Kerala Developer Network
              </Link>
              <span>• Also serving</span>
              <Link href="/freelance-software-developer-kollam" className="text-slate-300 underline hover:text-ivory">
                Kollam District
              </Link>
              <span>&amp;</span>
              <Link href="/freelance-software-developer-karunagappally" className="text-violet underline hover:text-violet/80">
                Karunagappally
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kochi Tech Ecosystem & Sectors */}
      <section className="py-20 border-b border-white/[0.06] bg-brand-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">
              Kochi Market Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Engineering Tailored to Kochi&apos;s High-Growth Sectors
            </h2>
            <p className="text-sm sm:text-base text-titanium leading-relaxed">
              From fast-scaling SaaS startups in Infopark Kakkanad to Cochin Port maritime enterprises and healthcare networks, I build production systems engineered for reliability, sub-second latency, and straightforward long-term maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KOCHI_INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-brand-surface p-6 space-y-4 hover:border-cyan/30 transition-all group"
                >
                  <div className="h-11 w-11 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan group-hover:scale-105 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-ivory">{ind.title}</h3>
                  <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">
              Full-Stack Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              End-to-End Software Architecture &amp; Delivery
            </h2>
            <p className="text-sm sm:text-base text-titanium leading-relaxed">
              Everything from initial schema design and API contracts to production edge deployment, automated CI/CD pipelines, and post-launch optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1: Next.js Web & SaaS */}
            <div className="rounded-2xl border border-white/10 bg-brand-secondary/60 p-6 space-y-3 hover:border-cyan/30 transition-all">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-ivory">SaaS &amp; Next.js 15 Platforms</h3>
                <Code2 className="w-5 h-5 text-cyan" />
              </div>
              <p className="text-xs text-titanium leading-relaxed">
                Modern React 19 Server Components, multi-tenant database isolation, role permissions, Stripe/Razorpay billing, and sub-second page loads.
              </p>
              <Link
                href="/services/react-nextjs-development"
                className="text-xs font-mono text-cyan hover:underline inline-flex items-center gap-1 pt-1"
              >
                <span>Explore Next.js Development</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Service 2: Flutter Apps */}
            <div className="rounded-2xl border border-white/10 bg-brand-secondary/60 p-6 space-y-3 hover:border-cyan/30 transition-all">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-ivory">Flutter Mobile Applications</h3>
                <Smartphone className="w-5 h-5 text-cyan" />
              </div>
              <p className="text-xs text-titanium leading-relaxed">
                60fps cross-platform mobile apps for iOS &amp; Android built with BLoC architecture, offline caching, push notifications, and GPS telemetry.
              </p>
              <Link
                href="/services/flutter-development"
                className="text-xs font-mono text-cyan hover:underline inline-flex items-center gap-1 pt-1"
              >
                <span>Explore Flutter Services</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Service 3: Node.js APIs */}
            <div className="rounded-2xl border border-white/10 bg-brand-secondary/60 p-6 space-y-3 hover:border-cyan/30 transition-all">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-ivory">Node.js &amp; PostgreSQL APIs</h3>
                <Server className="w-5 h-5 text-cyan" />
              </div>
              <p className="text-xs text-titanium leading-relaxed">
                High-throughput Express/Fastify REST APIs with connection pooling, Redis caching, structured logging, and automated OpenAPI documentation.
              </p>
              <Link
                href="/services/nodejs-development"
                className="text-xs font-mono text-cyan hover:underline inline-flex items-center gap-1 pt-1"
              >
                <span>Explore Node.js APIs</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Service 4: AI & RAG Integration */}
            <div className="rounded-2xl border border-white/10 bg-brand-secondary/60 p-6 space-y-3 hover:border-cyan/30 transition-all">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-ivory">AI &amp; RAG System Development</h3>
                <Cpu className="w-5 h-5 text-violet" />
              </div>
              <p className="text-xs text-titanium leading-relaxed">
                Private document intelligence, semantic search with pgvector, OpenAI / Gemini API integrations, and streaming AI interfaces with guardrails.
              </p>
              <Link
                href="/services/ai-integration-rag-development"
                className="text-xs font-mono text-violet hover:underline inline-flex items-center gap-1 pt-1"
              >
                <span>Explore AI Integration</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Service 5: Performance Optimization */}
            <div className="rounded-2xl border border-white/10 bg-brand-secondary/60 p-6 space-y-3 hover:border-cyan/30 transition-all">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-ivory">Performance &amp; Web Vitals Audits</h3>
                <Gauge className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-xs text-titanium leading-relaxed">
                Eliminating slow SQL queries, reducing heavy JS bundle bloat, fixing failing LCP/INP scores, and achieving sub-10ms API latency benchmarks.
              </p>
              <Link
                href="/services/performance-optimization"
                className="text-xs font-mono text-emerald-400 hover:underline inline-flex items-center gap-1 pt-1"
              >
                <span>Explore Performance Audits</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Service 6: Commercial Engagement */}
            <div className="rounded-2xl border border-cyan/30 bg-gradient-to-br from-cyan/10 via-brand-secondary/60 to-transparent p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-ivory">Direct Hiring &amp; Retainers</h3>
                <Briefcase className="w-5 h-5 text-cyan" />
              </div>
              <p className="text-xs text-titanium leading-relaxed">
                Transparent milestones or dedicated monthly contracts. Direct technical ownership with fixed deliverables and full source code IP handover.
              </p>
              <Link
                href="/hire-web-developer"
                className="text-xs font-mono text-cyan font-bold hover:underline inline-flex items-center gap-1 pt-1"
              >
                <span>View Hiring Criteria &amp; Terms</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work Directly: Freelance Architect vs. Kochi Agency */}
      <section className="py-20 border-b border-white/[0.06] bg-brand-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">
              The Strategic Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Why Partner With an Independent Architect vs. a Kochi Agency?
            </h2>
            <p className="text-sm sm:text-base text-titanium leading-relaxed">
              Founders in Kochi often face a difficult trade-off between bloated agencies with multiple communication layers and unreliable gig freelancers. Here is how direct technical partnership bridges that gap:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-brand-surface p-6 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-cyan/15 border border-cyan/30 flex items-center justify-center text-cyan">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-ivory">Zero Communication Layers</h3>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                You speak directly to the engineer designing the database and writing the code. No account managers, no mistranslated requirements, and immediate technical feedback on scope and feasibility.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-brand-surface p-6 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-ivory">3× Faster Iteration Speed</h3>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                Decisions, bug fixes, and feature adjustments take hours rather than weeks of bureaucratic ticket forwarding. Staging builds deploy continuously to give you live progress visibility.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-brand-surface p-6 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-violet/15 border border-violet/30 flex items-center justify-center text-violet">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-ivory">Production-Grade Architecture</h3>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                Code is architected from Day 1 for horizontal scaling, strict TypeScript safety, connection pooling, and easy onboarding for your future in-house engineering team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Live Proof & Case Studies */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">
                Verifiable Engineering Proof
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
                Tested Architectures &amp; Live SaaS Case Studies
              </h2>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                Review production benchmarks and verifiable proof from real-world software platforms.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-xs font-mono text-cyan hover:underline inline-flex items-center gap-1.5 shrink-0"
            >
              <span>View All 8 Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Case Study 1: Live CRM Platform */}
            <div className="rounded-2xl border border-white/10 bg-brand-surface p-6 sm:p-8 space-y-4 hover:border-cyan/30 transition-all">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                  Live Production SaaS
                </span>
                <span className="text-titanium">Next.js 15 · PostgreSQL · Supabase</span>
              </div>
              <h3 className="text-lg font-bold text-ivory">
                High-Performance Multi-Tenant CRM Platform
              </h3>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                Architected multi-tenant SaaS with row-level security (RLS), real-time lead ingestion webhooks, automated email dispatch pipelines, and sub-100ms dashboard queries.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
                <a
                  href="https://crm.abinschandran.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline inline-flex items-center gap-1 font-bold"
                >
                  <span>crm.abinschandran.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <Link
                  href="/projects/crm-platform-architecture"
                  className="text-cyan hover:underline inline-flex items-center gap-1"
                >
                  <span>Technical Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Case Study 2: High-Performance Logistics & API Architecture */}
            <div className="rounded-2xl border border-white/10 bg-brand-surface p-6 sm:p-8 space-y-4 hover:border-cyan/30 transition-all">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded-full bg-cyan/10 text-cyan border border-cyan/20 font-semibold">
                  High Throughput Benchmark
                </span>
                <span className="text-titanium">Node.js · Redis · PostgreSQL</span>
              </div>
              <h3 className="text-lg font-bold text-ivory">
                Enterprise Logistics &amp; Sub-10ms REST API Engine
              </h3>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                Designed a resilient backend handling automated carrier dispatch, shipment tracking event streams, connection-pooled database queues, and sub-10ms response latency.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-mono">
                <Link
                  href="/services/performance-optimization"
                  className="text-cyan hover:underline inline-flex items-center gap-1"
                >
                  <span>10-Point Performance Audit Proof</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kochi FAQs */}
      <section className="py-20 border-b border-white/[0.06] bg-brand-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Hiring a Software Developer in Kochi
            </h2>
          </div>

          <div className="space-y-4">
            {KOCHI_FAQS.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-brand-surface p-6 space-y-2 hover:border-cyan/30 transition-all"
              >
                <h3 className="text-base font-semibold text-ivory flex items-start gap-2.5">
                  <HelpCircle className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-titanium leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Brief CTA Block */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectBriefBlock
            title="Discuss Your Kochi Software Project"
            subtitle="Whether you are an Infopark startup founder planning an MVP or a Kochi business modernizing operations, send your requirements directly. I will review your technical specifications and return a clear architecture plan and estimated timeline."
            contextTag="Kochi Technical Partnership"
            prefilledWhatsAppMessage="Hi Abin, I'm reaching out from Kochi to discuss a custom software project."
          />
        </div>
      </section>
    </main>
  );
}
