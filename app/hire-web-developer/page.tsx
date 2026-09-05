import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Layers, 
  Server, 
  Clock, 
  MapPin, 
  Calendar,
  Sparkles,
  HelpCircle,
  Code2,
  Lock,
  XCircle,
  ExternalLink,
  FileCheck
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ConversionCtaSection } from "@/components/cta/ConversionCtaSection";

export const metadata: Metadata = {
  title: "Hire Freelance Web Developer in Kerala, India | Abin S Chandran",
  description:
    "Hire Abin S Chandran — Freelance Web Developer & Solution Architect based in Kerala, India. Building custom Next.js web applications, Node.js REST APIs, SaaS platforms, and high-performance business software.",
  keywords: [
    "hire web developer Kerala",
    "freelance web developer Kerala",
    "freelance full stack developer Kerala",
    "Node.js developer Kerala",
    "Next.js developer Kerala",
    "hire freelance developer India",
    "custom web application development Kerala",
    "hire software architect Kerala"
  ],
  alternates: {
    canonical: "https://www.abinschandran.in/hire-web-developer",
  },
  openGraph: {
    title: "Hire Freelance Web Developer in Kerala, India | Abin S Chandran",
    description:
      "Work directly with a senior Freelance Software Developer & Solution Architect. Custom web application engineering, Node.js backends, Next.js frontends, and SaaS MVPs.",
    url: "https://www.abinschandran.in/hire-web-developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hire Freelance Web Developer - Abin S Chandran",
      },
    ],
  },
};

const HIRING_FAQS = [
  {
    question: "Why hire a freelance software developer & solution architect instead of an agency?",
    answer:
      "When working with me, you collaborate directly with the senior engineer and architect building your software. There are no account managers, sales intermediaries, or junior developers learning on your project budget. You get faster iteration velocity, clear architectural decisions, and production-grade code at sensible pricing.",
  },
  {
    question: "Where are you located, and do you work with remote clients?",
    answer:
      "I am based in Kerala, India, and work with clients across India (Kochi, Trivandrum, Bengaluru, Mumbai) as well as international remote clients in North America, Europe, Australia, and the Middle East across multiple overlapping timezones.",
  },
  {
    question: "What web development tech stack do you recommend?",
    answer:
      "For modern web applications requiring fast page speeds and SEO, I recommend Next.js 15 (App Router) paired with Tailwind CSS for the frontend, Node.js / Express for REST API services, and PostgreSQL (or MongoDB) for database persistence. For mobile needs, Flutter provides seamless cross-platform iOS & Android support.",
  },
  {
    question: "How do you handle intellectual property (IP) and contract agreements?",
    answer:
      "All intellectual property, proprietary code, database designs, and assets belong 100% to you upon milestone settlement. I am happy to sign a Non-Disclosure Agreement (NDA) and formal statement of work before discussing sensitive project details.",
  },
  {
    question: "What are your engagement models for new projects?",
    answer:
      "I offer three flexible engagement models: Fixed-Scope MVP Delivery (ideal for well-defined new applications), Milestone-Based Sprints (flexible bi-weekly feature development), and Architecture Consulting / Performance Audits for existing applications.",
  },
];

export default function HireWebDeveloperPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": HIRING_FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const hiringServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.abinschandran.in/hire-web-developer#service",
    "name": "Freelance Web Development Services — Abin S Chandran",
    "url": "https://www.abinschandran.in/hire-web-developer",
    "telephone": "+918086223804",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.8505,
      "longitude": 76.2711
    },
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "AdministrativeArea", "name": "Kerala" },
      { "@type": "Place", "name": "Worldwide Remote" }
    ],
    "provider": {
      "@type": "Person",
      "@id": "https://www.abinschandran.in/#person",
      "name": "Abin S Chandran"
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-obsidian-bg">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: "https://www.abinschandran.in" },
          { name: "Hire Web Developer", item: "https://www.abinschandran.in/hire-web-developer" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hiringServiceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="bg-obsidian-card border border-white/[0.08] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/4 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-cyan font-semibold text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Commercial Engagement &amp; Development</span>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-ivory tracking-tight leading-[1.12]">
              Hire a Freelance Web Developer &amp; Solution Architect
            </h1>

            <p className="text-titanium text-sm sm:text-base lg:text-lg leading-relaxed font-sans">
              I&apos;m <strong className="text-ivory font-semibold">Abin S Chandran</strong>, an experienced full-stack engineer and solution architect based in <strong className="text-ivory">Kerala, India</strong>. I help founders, startups, and companies architect and build high-performance custom web applications, Node.js REST APIs, and scalable SaaS platforms.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-mono text-titanium pt-1">
              <div className="flex items-center gap-1.5 bg-obsidian-surface px-3 py-1.5 rounded-lg border border-white/[0.08]">
                <MapPin className="w-3.5 h-3.5 text-cyan shrink-0" />
                <span>Kerala, India · Remote Worldwide</span>
              </div>
              <div className="flex items-center gap-1.5 bg-obsidian-surface px-3 py-1.5 rounded-lg border border-white/[0.08]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-emerald-400">Available for Q3/Q4 Projects</span>
              </div>
              <div className="flex items-center gap-1.5 bg-obsidian-surface px-3 py-1.5 rounded-lg border border-white/[0.08]">
                <Clock className="w-3.5 h-3.5 text-cyan shrink-0" />
                <span>&lt; 24-Hour Discovery Response</span>
              </div>
            </div>

            <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 pt-3">
              <WhatsAppButton
                variant="primary"
                size="md"
                className="justify-center"
                message="Hi Abin, I'm interested in hiring you for full-stack web development (Next.js / Node.js). Can we discuss scope and availability?"
              />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan hover:bg-cyan-light text-brand-bg text-xs font-bold font-mono shadow-lg shadow-cyan/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Book Initial Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-obsidian-card hover:bg-obsidian-hover border border-white/[0.14] hover:border-cyan/35 text-ivory text-xs font-mono transition-all text-center"
              >
                <span>Review Case Studies</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Me Bento Grid */}
        <div className="space-y-6">
          <div>
            <div className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
              The Engineering Advantage
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ivory tracking-tight mt-1">
              Why Founders &amp; Companies Partner With Me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-obsidian-card border border-white/[0.08] hover:border-cyan/40 hover:bg-brand-elevated rounded-2xl p-6 space-y-3 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-ivory">Direct Senior Expertise</h3>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                Work directly with a lead architect who understands both product-market fit and low-level code performance. Zero agency markups or junior hand-offs.
              </p>
            </div>

            <div className="bg-obsidian-card border border-white/[0.08] hover:border-cyan/40 hover:bg-brand-elevated rounded-2xl p-6 space-y-3 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-ivory">Full-Stack Ownership</h3>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                End-to-end execution covering relational database modeling (PostgreSQL), scalable REST/GraphQL APIs (Node.js), and responsive frontends (Next.js 15).
              </p>
            </div>

            <div className="bg-obsidian-card border border-white/[0.08] hover:border-cyan/40 hover:bg-brand-elevated rounded-2xl p-6 space-y-3 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-ivory">Sub-Second Performance</h3>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                Every application is engineered for speed with server-side rendering, sub-10ms API queries, strict Core Web Vitals compliance, and clean SEO architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Engagement Models */}
        <div className="space-y-6">
          <div>
            <div className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
              Flexible Collaboration
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ivory tracking-tight mt-1">
              Project Engagement Models
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-obsidian-card border border-white/[0.08] hover:border-cyan/40 rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-colors">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-cyan bg-cyan/10 border border-cyan/30 px-2 py-0.5 rounded font-bold">
                  Most Popular for Startups
                </span>
                <h3 className="text-xl font-bold text-ivory">Fixed-Scope MVP Delivery</h3>
                <p className="text-xs text-titanium leading-relaxed">
                  Ideal for new product concepts requiring a clearly defined launch deadline. We establish specifications, milestone deliverables, and a fixed investment.
                </p>
                <div className="space-y-2 pt-3 border-t border-white/[0.08] text-xs text-titanium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0" />
                    <span>Comprehensive architecture blueprint</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0" />
                    <span>Database schema &amp; REST API endpoints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0" />
                    <span>Full responsive web frontend &amp; deploy</span>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full py-2.5 rounded-xl bg-obsidian-surface hover:bg-cyan hover:text-brand-bg text-ivory text-xs font-mono font-bold text-center border border-white/[0.08] transition-all"
              >
                Discuss MVP Project
              </Link>
            </div>

            <div className="bg-obsidian-card border border-cyan/50 rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-xl shadow-cyan/10">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-cyan bg-cyan/10 border border-cyan/30 px-2 py-0.5 rounded font-bold">
                  For Growing Businesses
                </span>
                <h3 className="text-xl font-bold text-ivory">Milestone-Based Sprints</h3>
                <p className="text-xs text-titanium leading-relaxed">
                  Agile bi-weekly sprints for evolving platforms needing continuous feature additions, third-party integrations, or code refactoring.
                </p>
                <div className="space-y-2 pt-3 border-t border-white/[0.08] text-xs text-titanium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0" />
                    <span>Sprint planning with direct communication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0" />
                    <span>Weekly staging code releases &amp; demos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0" />
                    <span>Flexible scope adjustments as metrics evolve</span>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full py-2.5 rounded-xl bg-cyan hover:bg-cyan-light text-brand-bg text-xs font-mono font-bold text-center shadow transition-all"
              >
                Book Sprint Capacity
              </Link>
            </div>

            <div className="bg-obsidian-card border border-white/[0.08] hover:border-cyan/40 rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-colors">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-titanium bg-obsidian-surface border border-white/[0.08] px-2 py-0.5 rounded">
                  Targeted Consultation
                </span>
                <h3 className="text-xl font-bold text-ivory">Architecture &amp; Code Audit</h3>
                <p className="text-xs text-titanium leading-relaxed">
                  Deep technical audit of existing Node.js, Next.js, or PostgreSQL applications experiencing performance bottlenecks, memory leaks, or scaling issues.
                </p>
                <div className="space-y-2 pt-3 border-t border-white/[0.08] text-xs text-titanium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0" />
                    <span>Query indexing &amp; database profiling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0" />
                    <span>Core Web Vitals &amp; bundle size optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0" />
                    <span>Actionable remediation code report</span>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full py-2.5 rounded-xl bg-obsidian-surface hover:bg-cyan hover:text-brand-bg text-ivory text-xs font-mono font-bold text-center border border-white/[0.08] transition-all"
              >
                Request Technical Audit
              </Link>
            </div>
          </div>
        </div>

        {/* 4-Step Working Process */}
        <div className="bg-obsidian-card border border-white/[0.08] rounded-3xl p-8 sm:p-10 space-y-8">
          <div>
            <div className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
              Transparent Engineering Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ivory tracking-tight mt-1">
              How We Work Together from Concept to Launch
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-cyan/10 border border-cyan/30 font-mono font-bold text-cyan flex items-center justify-center text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-ivory">Discovery &amp; Blueprint</h3>
              <p className="text-xs text-titanium leading-relaxed">
                Initial discussion to analyze business goals, target audience, core user stories, and integrations. We establish milestone deliverables and timeline expectations.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-cyan/10 border border-cyan/30 font-mono font-bold text-cyan flex items-center justify-center text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-ivory">Architecture &amp; Schema</h3>
              <p className="text-xs text-titanium leading-relaxed">
                Database schema modeling, API contract specifications, authentication flows, and frontend UI design system tokens prior to writing application logic.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-cyan/10 border border-cyan/30 font-mono font-bold text-cyan flex items-center justify-center text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-ivory">Agile Development</h3>
              <p className="text-xs text-titanium leading-relaxed">
                Continuous code integration with weekly staging demos. You test real software throughout development rather than waiting months for a finished product.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-cyan/10 border border-cyan/30 font-mono font-bold text-cyan flex items-center justify-center text-sm">
                04
              </div>
              <h3 className="text-base font-bold text-ivory">Deployment &amp; Handover</h3>
              <p className="text-xs text-titanium leading-relaxed">
                Production cloud deployment on AWS / Vercel, SSL setup, automated backup verification, comprehensive documentation, and 100% source code repository handover.
              </p>
            </div>
          </div>
        </div>

        {/* Authentic Collaboration Standards & Trust Signals */}
        <div className="bg-obsidian-card border border-white/[0.08] rounded-3xl p-8 sm:p-10 space-y-8">
          <div>
            <div className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
              Authentic Collaboration Standards
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ivory tracking-tight mt-1">
              Trust Signals, Project Fit &amp; Client Guarantees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            {/* Project Fit vs Non-Fit */}
            <div className="p-6 rounded-2xl bg-obsidian-surface border border-white/[0.06] space-y-4">
              <h3 className="text-base font-bold text-ivory font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Ideal Project Fit
              </h3>
              <ul className="space-y-2.5 text-xs text-titanium leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                  <span>Startups and digital businesses needing custom Next.js 15, Node.js, and PostgreSQL web platforms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                  <span>Founders building multi-tenant SaaS MVPs, private document RAG pipelines, or Flutter mobile apps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                  <span>Teams seeking direct collaboration with a senior architect rather than junior agency subcontractors.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-obsidian-surface border border-white/[0.06] space-y-4">
              <h3 className="text-base font-bold text-ivory font-mono flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-400" />
                Not a Good Fit
              </h3>
              <ul className="space-y-2.5 text-xs text-titanium leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                  <span>Low-budget WordPress template modifications, theme tweaking, or no-code page builders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                  <span>Requests for clone scripts without defined business logic or custom architecture requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                  <span>Speculative equity-only projects without allocated development budgets.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Guarantees Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-sans text-xs">
            <div className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.06] space-y-1.5">
              <div className="font-mono font-bold text-cyan flex items-center gap-1.5">
                <Lock className="w-4 h-4" />
                <span>100% IP Ownership &amp; NDA</span>
              </div>
              <p className="text-titanium leading-relaxed">
                Mutual NDA executed before project kickoff. All proprietary code, database schemas, and documentation transfer 100% to you.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.06] space-y-1.5">
              <div className="font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>&lt; 24h Direct Communication</span>
              </div>
              <p className="text-titanium leading-relaxed">
                Direct Slack, WhatsApp, or Google Meet communication with Abin S Chandran. Zero sales reps or intermediaries.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.06] space-y-1.5">
              <div className="font-mono font-bold text-violet flex items-center gap-1.5">
                <FileCheck className="w-4 h-4" />
                <span>30-Day Launch Warranty</span>
              </div>
              <p className="text-titanium leading-relaxed">
                Every delivered milestone includes 30 days of post-launch technical bug fixes, documentation handoff, and staging support.
              </p>
            </div>
          </div>

          {/* Verified Profiles Banner */}
          <div className="pt-2 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-titanium-muted">Verified Technical Profiles:</span>
              <a
                href="https://github.com/abin223804"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory hover:text-cyan flex items-center gap-1 transition-colors"
              >
                <span>GitHub (abin223804)</span>
                <ExternalLink className="w-3 h-3 text-cyan" />
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://www.linkedin.com/in/abinschandran/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory hover:text-cyan flex items-center gap-1 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-cyan" />
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://crm.abinschandran.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors font-bold"
              >
                <span>Live SaaS Demo</span>
                <ExternalLink className="w-3 h-3 text-emerald-400" />
              </a>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="space-y-6">
          <div>
            <div className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
              Clear Answers
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ivory tracking-tight mt-1">
              Frequently Asked Questions About Hiring
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HIRING_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-6 space-y-2.5"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                  <h3 className="text-sm font-bold text-ivory font-sans">{faq.question}</h3>
                </div>
                <p className="text-xs text-titanium leading-relaxed pl-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion CTA */}
        <ConversionCtaSection />

      </div>
    </div>
  );
}
