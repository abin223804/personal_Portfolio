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
  Briefcase,
  HelpCircle,
  Code2
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
        <div className="bg-obsidian-surface border border-obsidian-border rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-copper/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper/10 border border-copper/30 text-copper-light font-semibold text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Commercial Engagement &amp; Development</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-ivory tracking-tight leading-[1.15]">
              Hire a Freelance Web Developer &amp; Solution Architect
            </h1>

            <p className="text-titanium text-base sm:text-lg leading-relaxed font-sans">
              I&apos;m <strong className="text-ivory font-semibold">Abin S Chandran</strong>, an experienced full-stack engineer and solution architect based in <strong className="text-ivory">Kerala, India</strong>. I help founders, startups, and companies architect and build high-performance custom web applications, Node.js REST APIs, and scalable SaaS platforms.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-titanium pt-1">
              <div className="flex items-center gap-1.5 bg-obsidian-card px-3 py-1.5 rounded-lg border border-obsidian-border">
                <MapPin className="w-3.5 h-3.5 text-copper" />
                <span>Kerala, India · Remote Worldwide</span>
              </div>
              <div className="flex items-center gap-1.5 bg-obsidian-card px-3 py-1.5 rounded-lg border border-obsidian-border">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-400">Available for Q3/Q4 Projects</span>
              </div>
              <div className="flex items-center gap-1.5 bg-obsidian-card px-3 py-1.5 rounded-lg border border-obsidian-border">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>&lt; 24-Hour Discovery Response</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <WhatsAppButton variant="primary" size="md" />
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-copper hover:bg-copper-light text-obsidian-bg text-xs font-bold font-mono shadow-lg shadow-copper/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book Initial Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-obsidian-card hover:bg-obsidian-surface border border-obsidian-border hover:border-copper text-ivory text-xs font-mono transition-all"
              >
                <span>Review Case Studies</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Me Bento Grid */}
        <div className="space-y-6">
          <div>
            <div className="text-xs font-mono text-copper uppercase tracking-wider font-semibold">
              The Engineering Advantage
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ivory tracking-tight mt-1">
              Why Founders &amp; Companies Partner With Me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-copper/10 border border-copper/30 flex items-center justify-center text-copper">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-ivory">Direct Senior Expertise</h3>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                Work directly with a lead architect who understands both product-market fit and low-level code performance. Zero agency markups or junior hand-offs.
              </p>
            </div>

            <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-copper/10 border border-copper/30 flex items-center justify-center text-copper">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-ivory">Full-Stack Ownership</h3>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                End-to-end execution covering relational database modeling (PostgreSQL), scalable REST/GraphQL APIs (Node.js), and responsive frontends (Next.js 15).
              </p>
            </div>

            <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-copper/10 border border-copper/30 flex items-center justify-center text-copper">
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
            <div className="text-xs font-mono text-copper uppercase tracking-wider font-semibold">
              Flexible Collaboration
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ivory tracking-tight mt-1">
              Project Engagement Models
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-obsidian-surface border border-obsidian-border hover:border-copper/60 rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-colors">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-copper bg-copper/10 border border-copper/30 px-2 py-0.5 rounded">
                  Most Popular for Startups
                </span>
                <h3 className="text-xl font-bold text-ivory">Fixed-Scope MVP Delivery</h3>
                <p className="text-xs text-titanium leading-relaxed">
                  Ideal for new product concepts requiring a clearly defined launch deadline. We establish specifications, milestone deliverables, and a fixed investment.
                </p>
                <div className="space-y-2 pt-3 border-t border-obsidian-border text-xs text-titanium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Comprehensive architecture blueprint</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Database schema &amp; REST API endpoints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Full responsive web frontend &amp; deploy</span>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full py-2.5 rounded-xl bg-obsidian-card hover:bg-copper hover:text-obsidian-bg text-ivory text-xs font-mono font-bold text-center border border-obsidian-border transition-all"
              >
                Discuss MVP Project
              </Link>
            </div>

            <div className="bg-obsidian-surface border border-copper/50 rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-xl shadow-copper/10">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                  For Growing Businesses
                </span>
                <h3 className="text-xl font-bold text-ivory">Milestone-Based Sprints</h3>
                <p className="text-xs text-titanium leading-relaxed">
                  Agile bi-weekly sprints for evolving platforms needing continuous feature additions, third-party integrations, or code refactoring.
                </p>
                <div className="space-y-2 pt-3 border-t border-obsidian-border text-xs text-titanium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Sprint planning with direct communication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Weekly staging code releases &amp; demos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Flexible scope adjustments as metrics evolve</span>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full py-2.5 rounded-xl bg-copper hover:bg-copper-light text-obsidian-bg text-xs font-mono font-bold text-center shadow transition-all"
              >
                Book Sprint Capacity
              </Link>
            </div>

            <div className="bg-obsidian-surface border border-obsidian-border hover:border-copper/60 rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-colors">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-titanium bg-obsidian-card border border-obsidian-border px-2 py-0.5 rounded">
                  Targeted Consultation
                </span>
                <h3 className="text-xl font-bold text-ivory">Architecture &amp; Code Audit</h3>
                <p className="text-xs text-titanium leading-relaxed">
                  Deep technical audit of existing Node.js, Next.js, or PostgreSQL applications experiencing performance bottlenecks, memory leaks, or scaling issues.
                </p>
                <div className="space-y-2 pt-3 border-t border-obsidian-border text-xs text-titanium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Query indexing &amp; database profiling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Core Web Vitals &amp; bundle size optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Actionable remediation code report</span>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full py-2.5 rounded-xl bg-obsidian-card hover:bg-copper hover:text-obsidian-bg text-ivory text-xs font-mono font-bold text-center border border-obsidian-border transition-all"
              >
                Request Technical Audit
              </Link>
            </div>
          </div>
        </div>

        {/* 4-Step Working Process */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-3xl p-8 sm:p-10 space-y-8">
          <div>
            <div className="text-xs font-mono text-copper uppercase tracking-wider font-semibold">
              Transparent Engineering Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ivory tracking-tight mt-1">
              How We Work Together from Concept to Launch
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-copper/10 border border-copper/30 font-mono font-bold text-copper flex items-center justify-center text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-ivory">Discovery &amp; Blueprint</h3>
              <p className="text-xs text-titanium leading-relaxed">
                Initial discussion to analyze business goals, target audience, core user stories, and integrations. We establish milestone deliverables and timeline expectations.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-copper/10 border border-copper/30 font-mono font-bold text-copper flex items-center justify-center text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-ivory">Architecture &amp; Schema</h3>
              <p className="text-xs text-titanium leading-relaxed">
                Database schema modeling, API contract specifications, authentication flows, and frontend UI design system tokens prior to writing application logic.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-copper/10 border border-copper/30 font-mono font-bold text-copper flex items-center justify-center text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-ivory">Agile Development</h3>
              <p className="text-xs text-titanium leading-relaxed">
                Continuous code integration with weekly staging demos. You test real software throughout development rather than waiting months for a finished product.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-copper/10 border border-copper/30 font-mono font-bold text-copper flex items-center justify-center text-sm">
                04
              </div>
              <h3 className="text-base font-bold text-ivory">Deployment &amp; Handover</h3>
              <p className="text-xs text-titanium leading-relaxed">
                Production cloud deployment on AWS / Vercel, SSL setup, automated backup verification, comprehensive documentation, and 100% source code repository handover.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="space-y-6">
          <div>
            <div className="text-xs font-mono text-copper uppercase tracking-wider font-semibold">
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
                className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 space-y-2.5"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-copper shrink-0 mt-0.5" />
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
