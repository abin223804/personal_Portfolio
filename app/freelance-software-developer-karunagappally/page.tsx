import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  Code2,
  Server,
  Smartphone,
  Gauge,
  Workflow,
  FileCheck,
  ExternalLink,
  Mail,
  UserCheck,
  Zap,
} from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ProjectBriefBlock } from "@/components/conversion/ProjectBriefBlock";

export const metadata: Metadata = {
  title: "Software Developer in Karunagappally | Abin S Chandran",
  description:
    "Hire a freelance software developer serving Karunagappally and Kollam for web apps, SaaS, APIs, mobile apps and AI solutions. Direct project consultation.",
  keywords: [
    "software developer Karunagappally",
    "freelance software developer Karunagappally",
    "web developer Karunagappally",
    "mobile app developer Karunagappally",
    "hire software developer Kollam",
    "custom software development Karunagappally",
    "SaaS developer Karunagappally Kerala",
    "Flutter developer Karunagappally",
  ],
  alternates: {
    canonical: "https://www.abinschandran.in/freelance-software-developer-karunagappally",
  },
  openGraph: {
    title: "Freelance Software Developer in Karunagappally | Abin S Chandran",
    description:
      "Custom web applications, SaaS products, APIs, Flutter apps, and AI-enabled systems for businesses in Karunagappally, Kollam, Kerala, and beyond.",
    url: "https://www.abinschandran.in/freelance-software-developer-karunagappally",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abin S Chandran, freelance software developer serving Karunagappally and Kollam",
      },
    ],
  },
};

const SERVICES = [
  {
    icon: Layers,
    title: "Custom web applications",
    description:
      "Build a tailored web application for your business, organisation, or product idea using a maintainable architecture, responsive user interface, secure APIs, and a production-ready database.",
    linkText: "Explore custom web application development",
    href: "/services/web-development",
  },
  {
    icon: Code2,
    title: "Full-stack application development",
    description:
      "Get end-to-end development across the frontend, backend, database, authentication, integrations, deployment, and handover. This is suitable when one technical owner is needed across the complete product.",
    linkText: "Explore full-stack development",
    href: "/services/full-stack-development",
  },
  {
    icon: Sparkles,
    title: "SaaS product development",
    description:
      "Turn a software idea into a subscription product with multi-tenant architecture, user organisations, role permissions, billing flows, dashboards, and a roadmap for future growth.",
    linkText: "Explore SaaS development",
    href: "/services/saas-development",
  },
  {
    icon: Server,
    title: "Node.js and REST API development",
    description:
      "Develop secure and documented backend services, integrations, webhook handlers, background workers, and APIs for web or mobile products.",
    linkText: "Explore Node.js development",
    href: "/services/nodejs-development",
    secondaryLinkText: "Explore API development & integrations",
    secondaryHref: "/services/api-development-integration",
  },
  {
    icon: Smartphone,
    title: "Flutter mobile applications",
    description:
      "Build cross-platform iOS and Android applications with Flutter, Dart, clean architecture, state management, offline caching, and a connected backend where required.",
    linkText: "Explore Flutter development",
    href: "/services/flutter-development",
  },
  {
    icon: Cpu,
    title: "AI integration and RAG development",
    description:
      "Add useful AI capabilities to an existing application or build a knowledge system that can search private documents, respect user permissions, and stream relevant responses through a web interface. Possible use cases include document search, internal knowledge assistants, support workflows, summarisation, extraction, and AI-enabled SaaS features.",
    linkText: "Explore AI integration and RAG development",
    href: "/services/ai-integration-rag-development",
  },
  {
    icon: Gauge,
    title: "Performance audits and optimization",
    description:
      "Diagnose slow pages, backend latency, database bottlenecks, large JavaScript bundles, and Core Web Vitals issues using measurable before-and-after checks.",
    linkText: "Explore performance optimization",
    href: "/services/performance-optimization",
  },
];

const WHO_I_WORK_WITH = [
  "Small and medium businesses that need custom software rather than an off-the-shelf tool.",
  "Founders validating or launching a SaaS product.",
  "Organisations replacing spreadsheets or disconnected manual workflows.",
  "Teams that need a dashboard, API, integration, or internal business application.",
  "Businesses improving an existing website or web application.",
  "Companies that need a developer to review, maintain, or take over an existing system.",
  "Product teams that need architecture guidance before committing to a large build.",
];

const WHY_WORK_DIRECTLY = [
  {
    title: "Direct communication",
    description:
      "Discuss requirements, trade-offs, and progress with the developer working on the system instead of passing every technical question through several layers.",
  },
  {
    title: "Architecture before implementation",
    description:
      "The project starts with the users, workflows, constraints, integrations, security needs, and future growth path—not only a list of screens.",
  },
  {
    title: "Modern full-stack capability",
    description:
      "The current development focus includes Node.js, Express.js, TypeScript, React, Next.js, PostgreSQL, MongoDB, REST APIs, AWS, Flutter, and AI/RAG systems.",
  },
  {
    title: "Production-minded engineering",
    description:
      "Development can include authentication, role-based access, API documentation, database design, caching, performance optimization, testing, deployment, and handover.",
  },
  {
    title: "Clear project process",
    description:
      "You receive an initial discovery discussion, a defined scope and roadmap, milestone-based delivery, progress updates, and an agreed post-launch support plan.",
  },
];

const SELECTED_PROJECTS = [
  {
    title: "Enterprise AI Knowledge Mesh and RAG Pipeline",
    description:
      "A full-stack enterprise knowledge system built with Next.js, Python, FastAPI, pgvector, and PostgreSQL. The case study covers document vectorization, semantic search, and permission-aware knowledge retrieval.",
    href: "/projects/enterprise-ai-knowledge-mesh",
    linkText: "View the Enterprise AI Knowledge Mesh case study",
    tag: "AI / RAG Architecture",
  },
  {
    title: "PulseFit cross-platform mobile SaaS app",
    description:
      "A Flutter and Node.js mobile SaaS application using Dart, Express.js, and PostgreSQL, with a focus on cross-platform delivery and responsive backend performance.",
    href: "/projects/flutter-mobile-saas-app",
    linkText: "View the PulseFit case study",
    tag: "Mobile SaaS / Flutter",
  },
  {
    title: "OmniScale enterprise cloud gateway",
    description:
      "A cloud architecture project using Go, Kubernetes, AWS EKS, Envoy, and Redis Cluster for high-throughput request routing.",
    href: "/projects/omniscale-cloud-gateway",
    linkText: "View the OmniScale case study",
    tag: "Cloud Gateway / 50k RPS",
  },
  {
    title: "Real-time FinTech settlement engine",
    description:
      "A distributed backend system using Node.js, TypeScript, Apache Kafka, PostgreSQL, and Prisma for event-driven financial processing.",
    href: "/projects/fintech-settlement-engine",
    linkText: "View the FinTech settlement-engine case study",
    tag: "Fintech / Ledger Settlement",
  },
];

const PROJECT_STEPS = [
  {
    step: "1",
    title: "Share the requirement",
    description:
      "Send a short description of what you want to build, improve, integrate, or investigate. Include the current challenge, users, preferred timeline, and any existing application or documentation.",
  },
  {
    step: "2",
    title: "Review the problem and scope",
    description:
      "We discuss the business workflow, technical constraints, integrations, security requirements, and the outcome that matters most.",
  },
  {
    step: "3",
    title: "Choose the right engagement",
    description:
      "Depending on the requirement, the next step may be a discovery session, architecture plan, performance audit, fixed-scope build, or ongoing development engagement.",
  },
  {
    step: "4",
    title: "Build in milestones",
    description:
      "The application is developed incrementally with agreed deliverables, progress updates, testing, and regular review points.",
  },
  {
    step: "5",
    title: "Deploy and hand over",
    description:
      "The final stage can include deployment, documentation, source-code handover, production checks, and agreed post-launch support.",
  },
];

const FAQS = [
  {
    question: "Can you work with a business in Karunagappally remotely?",
    answer:
      "Yes. Projects can be managed through online discovery, written requirements, scheduled reviews, milestone delivery, documentation, and direct communication. If an in-person discussion is important, mention it when sending the project brief so availability can be confirmed.",
  },
  {
    question: "What type of software can you build?",
    answer:
      "The service covers custom web applications, SaaS products, REST APIs, mobile applications, admin dashboards, third-party integrations, AI-enabled features, and performance improvements. The right approach depends on the business workflow, users, and technical requirements.",
  },
  {
    question: "Can you build software for an existing business?",
    answer:
      "Yes. A project can start from a new idea, an existing website, an internal workflow, a partially built application, or a system that needs new integrations and features.",
  },
  {
    question: "Can you take over or improve an existing application?",
    answer:
      "An existing system can first be reviewed for architecture, code quality, performance, security, documentation, deployment, and maintainability. The next steps can then be planned based on the assessment.",
  },
  {
    question: "Do you serve only Karunagappally?",
    answer:
      "No. Karunagappally is one of the local service areas. Services are also available across Kollam district, Kerala, India, and remote international locations.",
  },
  {
    question: "Can you integrate payments and third-party services?",
    answer:
      "API development and integrations can include payment gateways, webhooks, authentication services, cloud services, messaging systems, and other external platforms. The exact integration should be confirmed during scope review. Relevant integration experience includes Stripe, Razorpay, and WhatsApp Business API.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "There is no single price for custom software. Cost depends on the number of users, workflows, design, integrations, security, reporting, deployment, and support requirements. Send a project brief to receive a more useful scope and next-step recommendation.",
  },
  {
    question: "How do I start a project discussion?",
    answer:
      "Send a short description through the contact page or start a conversation on WhatsApp. Include what you want to build, who will use it, and what is currently blocked.",
  },
];

export default function KarunagappallyLandingPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.abinschandran.in/freelance-software-developer-karunagappally#service",
        name: "Abin S Chandran — Software Developer in Karunagappally",
        url: "https://www.abinschandran.in/freelance-software-developer-karunagappally",
        image: "https://www.abinschandran.in/abin-s-chandran.png",
        description:
          "Hire a freelance software developer serving Karunagappally and Kollam for web apps, SaaS, APIs, mobile apps and AI solutions. Direct project consultation.",
        telephone: "+91-95444-93821",
        email: "abinschandran1@gmail.com",
        priceRange: "$$ - $$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Karunagappally",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "9.0563",
          longitude: "76.5414",
        },
        areaServed: [
          { "@type": "City", name: "Karunagappally" },
          { "@type": "City", name: "Oachira" },
          { "@type": "City", name: "Chavara" },
          { "@type": "City", name: "Sasthamcotta" },
          { "@type": "AdministrativeArea", name: "Kollam" },
          { "@type": "AdministrativeArea", name: "Kerala" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.abinschandran.in/freelance-software-developer-karunagappally#faq",
        mainEntity: FAQS.map((faq) => ({
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
            name: "Software Developer Karunagappally",
            item: "https://www.abinschandran.in/freelance-software-developer-karunagappally",
          },
        ],
      },
    ],
  };

  const WHATSAPP_URL =
    "https://wa.me/918086223804?text=Hi%20Abin%2C%20I%27m%20looking%20for%20a%20software%20developer%20for%20a%20project%20in%20Karunagappally%20or%20Kollam.";

  return (
    <main className="min-h-screen bg-brand-bg text-ivory selection:bg-cyan/20 selection:text-cyan">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/[0.06] pt-32 pb-20 lg:pt-36 lg:pb-28">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-violet/10 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/3 right-10 h-72 w-72 rounded-full bg-cyan/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Pitch & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3.5 py-1 text-xs font-mono font-semibold text-violet">
                <MapPin className="h-3.5 w-3.5" />
                <span>Karunagappally &amp; Kollam Service Corridor</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-ivory sm:text-4xl lg:text-5xl leading-tight">
                Software Developer in Karunagappally for Custom Digital Solutions
              </h1>

              <h2 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan via-cyan-light to-violet leading-snug">
                Direct technical collaboration for web, mobile, SaaS, API, and AI projects
              </h2>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-titanium font-sans">
                <p>
                  I am <strong className="text-ivory font-semibold">Abin S Chandran</strong>, a freelance software developer and solution architect serving Karunagappally, Kollam, Kerala, and remote clients worldwide.
                </p>
                <p>
                  I help businesses, founders, and organisations plan, build, improve, and maintain custom digital products—including web applications, SaaS platforms, REST APIs, Flutter mobile apps, internal tools, and AI-enabled systems.
                </p>
                <p>
                  You work directly with the developer responsible for the architecture and implementation. We begin by understanding the business problem, then select the right scope, technology, delivery approach, and level of support.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <WhatsAppButton
                  variant="primary"
                  size="lg"
                  message="Hi Abin, I'm looking for a software developer for a project in Karunagappally or Kollam."
                />
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-mono font-bold text-ivory hover:border-cyan/40 hover:bg-white/10 transition-all shadow-lg"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="h-4 w-4 text-cyan" />
                </Link>
              </div>

              <p className="text-xs font-mono text-slate-400 pt-2 border-t border-white/[0.06]">
                ℹ️ Remote-first delivery is available for Karunagappally and the wider Kollam district. Meeting arrangements should be confirmed based on the project and location.
              </p>
            </div>

            {/* Right Column: Original Architecture Visual Asset */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-white/10 bg-brand-secondary/80 p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-cyan/30 shrink-0">
                    <Image
                      src="/abin-s-chandran.png"
                      alt="Abin S Chandran, freelance software developer serving Karunagappally and Kollam"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-ivory">Abin S Chandran</h3>
                    <span className="text-xs font-mono text-cyan block">Solution Architect &amp; Developer</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Custom Software Architecture Blueprint:
                  </span>
                  
                  <div className="rounded-xl border border-white/5 bg-brand-surface p-3.5 space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between text-cyan">
                      <span>Frontend &amp; Mobile</span>
                      <span className="text-[10px] text-slate-400">Next.js 15 / Flutter</span>
                    </div>
                    <div className="flex items-center justify-between text-violet">
                      <span>Backend &amp; APIs</span>
                      <span className="text-[10px] text-slate-400">Node.js / REST / WebSockets</span>
                    </div>
                    <div className="flex items-center justify-between text-emerald-400">
                      <span>Database &amp; Storage</span>
                      <span className="text-[10px] text-slate-400">PostgreSQL / Redis / pgvector</span>
                    </div>
                    <div className="flex items-center justify-between text-amber-400">
                      <span>Integrations</span>
                      <span className="text-[10px] text-slate-400">Stripe / Razorpay / WhatsApp</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-xs font-mono text-slate-300 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Direct Developer Access
                  </span>
                  <span className="text-slate-400">100% Code Ownership</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Software Development Services for Karunagappally Businesses */}
      <section className="py-20 border-b border-white/[0.06] bg-brand-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Comprehensive Offerings</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Software Development Services for Karunagappally Businesses
            </h2>
            <p className="text-sm sm:text-base text-titanium leading-relaxed">
              Every service is engineered to production standards with maintainable architecture, structured documentation, and complete source code ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-brand-surface p-6 sm:p-8 flex flex-col justify-between hover:border-cyan/40 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan group-hover:scale-105 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-bold text-ivory group-hover:text-cyan transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-titanium leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 mt-6 space-y-2">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan hover:text-cyan-light transition-colors"
                    >
                      <span>{service.linkText}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    {service.secondaryLinkText && service.secondaryHref && (
                      <div>
                        <Link
                          href={service.secondaryHref}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-violet hover:text-violet/80 transition-colors"
                        >
                          <span>{service.secondaryLinkText}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who I Work With in Karunagappally and Kollam */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Client Fit</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
                Who I Work With in Karunagappally and Kollam
              </h2>
              <p className="text-sm text-titanium leading-relaxed font-sans">
                Whether replacing inefficient manual spreadsheets or building an ambitious SaaS product from the ground up, I partner with forward-thinking operators seeking direct technical leadership.
              </p>
              <div className="p-4 rounded-2xl border border-white/5 bg-brand-surface text-xs font-mono text-slate-300 leading-relaxed">
                🚀 <strong>Delivery Model:</strong> The project can be delivered remotely through online discovery, written scope, scheduled reviews, milestone-based development, documentation, and a structured handover.
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-3">
                {WHO_I_WORK_WITH.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-brand-secondary/60 p-4 hover:border-cyan/30 transition-all"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work Directly With a Freelance Software Developer? */}
      <section className="py-20 border-b border-white/[0.06] bg-brand-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">The Direct Advantage</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Why Work Directly With a Freelance Software Developer?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_WORK_DIRECTLY.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-brand-surface p-6 sm:p-8 space-y-3"
              >
                <div className="flex items-center gap-2 text-cyan font-mono text-xs font-bold">
                  <span>0{index + 1}.</span>
                  <span>Direct Value</span>
                </div>
                <h3 className="text-lg font-bold text-ivory">{item.title}</h3>
                <p className="text-xs sm:text-sm text-titanium leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Project Experience */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Demonstrated Capability</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
                Selected Project Experience
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-mono">
                Accurate metrics and verified architectural decisions from public case studies.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan hover:text-cyan-light transition-colors shrink-0"
            >
              <span>View All Projects and Case Studies</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SELECTED_PROJECTS.map((proj, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-brand-surface p-6 sm:p-8 flex flex-col justify-between hover:border-cyan/40 transition-all duration-300"
              >
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-[11px] font-mono font-semibold inline-block">
                    {proj.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-ivory">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-titanium leading-relaxed font-sans">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-4">
                  <Link
                    href={proj.href}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan hover:text-cyan-light transition-colors"
                  >
                    <span>{proj.linkText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How a Project Works */}
      <section className="py-20 border-b border-white/[0.06] bg-brand-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Clear Engagement Process</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              How a Project Works
            </h2>
            <p className="text-sm sm:text-base text-titanium leading-relaxed font-sans">
              From requirement intake to production deployment, every engagement follows an orderly, predictable five-step engineering path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROJECT_STEPS.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl border border-white/10 bg-brand-surface p-6 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-bold">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-ivory">{step.title}</h3>
                  <p className="text-xs text-titanium leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serving Karunagappally and the Wider Kollam District */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-brand-surface p-8 sm:p-12 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-violet font-semibold block">
              Regional Geographic Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-ivory">
              Serving Karunagappally and the Wider Kollam District
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-4xl">
              I serve clients in Karunagappally and across Kollam district through remote collaboration. The same software-development services are available to businesses throughout Kerala and to remote clients across India and worldwide.
            </p>
            <p className="text-sm text-titanium leading-relaxed font-sans max-w-4xl">
              The Karunagappally service area can include nearby communities and business locations (Oachira, Chavara, Sasthamcotta, Kayamkulam border) where the project can be delivered effectively. For local meetings, confirm availability during the initial discussion rather than assuming that every project requires in-person work.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <Link
                href="/freelance-software-developer-kollam"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan/10 border border-cyan/30 px-4 py-2.5 text-xs font-mono font-bold text-cyan hover:bg-cyan/20 transition-all"
              >
                <span>Software Developer Services in Kollam</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/freelance-software-developer-kerala"
                className="inline-flex items-center gap-2 rounded-xl bg-violet/10 border border-violet/30 px-4 py-2.5 text-xs font-mono font-bold text-violet hover:bg-violet/20 transition-all"
              >
                <span>Freelance Software Developer in Kerala</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/30 px-4 py-2.5 text-xs font-mono font-bold text-amber-400 hover:bg-amber-500/20 transition-all"
              >
                <span>Verified Client Reviews</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 border-b border-white/[0.06] bg-brand-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Direct Answers</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-brand-surface p-6 space-y-2 hover:border-cyan/30 transition-all"
              >
                <h3 className="text-base font-semibold text-ivory flex items-start gap-2.5">
                  <HelpCircle className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-titanium leading-relaxed pl-7 font-sans">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-secondary via-brand-surface to-brand-bg p-8 sm:p-12 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />

            <div className="max-w-3xl space-y-4 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Start the Conversation</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ivory tracking-tight">
                Have a software project in Karunagappally or Kollam?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                Whether you need a new business application, SaaS product, mobile app, API integration, AI feature, or technical review, start with a direct project discussion.
              </p>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed font-sans">
                Share the problem, the current system, and the outcome you want. I can help identify whether the right next step is discovery, architecture, an audit, or implementation.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <WhatsAppButton
                  variant="primary"
                  size="lg"
                  message="Hi Abin, I'm looking for a software developer for a project in Karunagappally or Kollam."
                />
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan px-6 py-3.5 text-xs font-mono font-extrabold text-brand-bg hover:bg-cyan-light transition-all shadow-xl shadow-cyan/20"
                >
                  <span>Send a Project Brief</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:abinschandran1@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs font-mono font-bold text-ivory hover:border-cyan/40 hover:bg-white/10 transition-all"
                >
                  <Mail className="h-4 w-4 text-cyan" />
                  <span>abinschandran1@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
