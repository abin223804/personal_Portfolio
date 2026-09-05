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
  Code2,
  ExternalLink,
  HelpCircle,
  Building2,
  Globe2,
  Phone,
} from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ProjectBriefBlock } from "@/components/conversion/ProjectBriefBlock";

export const metadata: Metadata = {
  title: "Freelance Software Developer & Solution Architect in Kerala | Abin S Chandran",
  description:
    "Hire Abin S Chandran — Senior Freelance Software Developer & Solution Architect based in Kerala, India. Building custom Next.js web apps, Node.js APIs, Flutter mobile apps, SaaS platforms, and AI/RAG systems across Kerala.",
  keywords: [
    "freelance software developer Kerala",
    "freelance web developer Kerala",
    "software architect Kerala",
    "freelance developer Kochi",
    "freelance developer Trivandrum",
    "freelance developer Calicut",
    "Next.js developer Kerala",
    "Flutter developer Kerala",
    "hire developer Kerala India",
  ],
  alternates: {
    canonical: "https://www.abinschandran.in/freelance-software-developer-kerala",
  },
  openGraph: {
    title: "Freelance Software Developer & Solution Architect in Kerala | Abin S Chandran",
    description:
      "Direct technical partnership with a senior freelance software developer & architect in Kerala. High-performance web apps, APIs, Flutter mobile apps, and SaaS MVPs.",
    url: "https://www.abinschandran.in/freelance-software-developer-kerala",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Freelance Software Developer in Kerala - Abin S Chandran",
      },
    ],
  },
};

const KERALA_DISTRICTS = [
  { name: "Kollam", slug: "freelance-software-developer-kollam", focus: "Primary Hub: Cashew & seafood export software, logistics, retail ERP, clinical systems & custom SaaS." },
  { name: "Karunagappally", slug: "freelance-software-developer-karunagappally", focus: "Taluk Hub: E-commerce, customer portals, billing platforms, mobile MVPs & local business automation." },
  { name: "Ernakulam / Kochi", focus: "Fintech, startup MVPs, enterprise APIs, Infopark & SmartCity tech ecosystems." },
  { name: "Thiruvananthapuram", focus: "Technopark startups, government tech solutions, educational portals & health systems." },
  { name: "Kozhikode (Calicut)", focus: "Food delivery apps, retail distribution systems, medical tech & regional e-commerce." },
  { name: "Thrissur", focus: "Jewellery ERP, micro-finance tech, distribution networks & business automation." },
  { name: "Kannur", focus: "Textile manufacturing management, overseas remittance tools & export tracking." },
  { name: "Kottayam", focus: "Plantation logistics, publishing platforms, healthcare portals & accounting backends." },
  { name: "Alappuzha", focus: "Hospitality & resort booking engines, houseboat management & travel tech." },
  { name: "Palakkad", focus: "Industrial manufacturing dashboards, supply chain tools & agro-tech software." },
  { name: "Malappuram", focus: "Gulf remittance platforms, educational ERP, retail store chains & clinic software." },
  { name: "Pathanamthitta", focus: "Pilgrimage transit tech, hospital management systems & NRI estate portals." },
  { name: "Idukki", focus: "Eco-tourism reservation systems, spice auction portals & IoT crop monitoring." },
  { name: "Wayanad", focus: "Resort management software, agro-processing dashboards & eco-tourism platforms." },
  { name: "Kasaragod", focus: "Cooperative banking portals, wholesale commerce & educational tech." },
];

const KERALA_FAQS = [
  {
    question: "Why work with Abin S Chandran instead of a local agency or generic freelancer in Kerala?",
    answer:
      "Most local web agencies and freelancers in Kerala build generic WordPress or legacy PHP sites using shared templates and pass projects through account managers and juniors. I work directly as your dedicated solution architect and senior engineer—building modern, production-grade web apps (Next.js 15), mobile products (Flutter), scalable backends (Node.js/PostgreSQL), and AI/RAG integrations with zero agency markup and direct technical ownership.",
  },
  {
    question: "How does collaboration work for businesses in Kerala?",
    answer:
      "All projects operate under a structured, remote-first workflow with transparent asynchronous updates, private GitHub repository access, staging deployments, and weekly demo calls. For clients across Kollam, Karunagappally, and Kochi, in-person discovery meetings or milestone architecture reviews can be scheduled whenever appropriate.",
  },
  {
    question: "Do you provide fixed-price quotes and source code ownership?",
    answer:
      "Yes. Once we establish your project scope, I provide a transparent, fixed-scope proposal with milestone-based delivery dates. You retain 100% intellectual property (IP) and repository ownership upon completion, backed by a written mutual NDA and a 30-day post-launch warranty.",
  },
  {
    question: "Can you take over and modernize an existing sluggish or broken system?",
    answer:
      "Yes. I frequently conduct technical architecture and code audits for businesses running legacy or slow applications. I isolate database bottlenecks, refactor REST APIs, eliminate Core Web Vitals performance regressions, and migrate legacy PHP/WordPress systems into modern Next.js/Node.js stacks.",
  },
];

export default function KeralaSoftwareDeveloperPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.abinschandran.in/freelance-software-developer-kerala#service",
        name: "Abin S Chandran — Freelance Software Developer & Architect Kerala",
        url: "https://www.abinschandran.in/freelance-software-developer-kerala",
        image: "https://www.abinschandran.in/abin-s-chandran.png",
        description:
          "Senior Freelance Software Developer and Solution Architect in Kerala. Delivering high-performance Next.js web applications, Node.js APIs, Flutter mobile apps, and SaaS systems.",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "9.0563",
          longitude: "76.5414",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Kerala" },
          { "@type": "City", name: "Kollam" },
          { "@type": "City", name: "Karunagappally" },
          { "@type": "City", name: "Kochi" },
          { "@type": "City", name: "Thiruvananthapuram" },
          { "@type": "City", name: "Kozhikode" },
        ],
        priceRange: "$$ - $$$",
        telephone: "+91-95444-93821",
        email: "abinschandran1@gmail.com",
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.abinschandran.in/freelance-software-developer-kerala#faq",
        mainEntity: KERALA_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
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
        <div className="pointer-events-none absolute top-1/3 right-10 h-80 w-80 rounded-full bg-violet/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-mono font-semibold text-cyan">
              <MapPin className="h-3.5 w-3.5" />
              <span>Kerala Statewide Engineering &amp; Architecture Hub</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-ivory sm:text-4xl lg:text-5xl leading-tight">
              Freelance Software Developer &amp; Solution Architect in Kerala
            </h1>

            <p className="text-base leading-relaxed text-titanium sm:text-lg">
              Direct access to a senior software engineer and architect for scalable web applications, SaaS products, Node.js APIs, cross-platform Flutter mobile apps, and enterprise AI integrations.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <WhatsAppButton
                variant="primary"
                size="lg"
                message="Hi Abin, I am looking for a freelance software developer in Kerala for my project."
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

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08] text-xs font-mono text-titanium">
              <div>
                <span className="text-emerald-400 font-bold block text-sm">Direct Contact</span>
                <span>No middleman or agency layers</span>
              </div>
              <div>
                <span className="text-cyan font-bold block text-sm">Modern Stack</span>
                <span>Next.js 15, Flutter, Node.js</span>
              </div>
              <div>
                <span className="text-violet font-bold block text-sm">100% IP Handover</span>
                <span>Clean Git repositories</span>
              </div>
              <div>
                <span className="text-amber-400 font-bold block text-sm">Verified Proof</span>
                <span>50k+ RPS &amp; 99.99% SLAs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Advantage vs Legacy Freelancers */}
      <section className="py-20 border-b border-white/[0.06] bg-brand-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Engineering Differentiation</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Why Kerala Startups &amp; Growing Businesses Work With Me
            </h2>
            <p className="text-sm sm:text-base text-titanium leading-relaxed">
              Most local web development offerings in Kerala are centered on basic WordPress setups or monolithic PHP scripts. When your business needs scalable software, custom data structures, high security, and fast page loads, you need architectural engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-brand-surface p-6 space-y-4">
              <div className="h-10 w-10 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-ivory">Architecture Before Implementation</h3>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                I design database schemas, API contracts, caching layers, and security policies before writing code—preventing expensive technical rewrites down the line.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-brand-surface p-6 space-y-4">
              <div className="h-10 w-10 rounded-xl bg-violet/10 border border-violet/30 flex items-center justify-center text-violet">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-ivory">Modern Performance-First Stack</h3>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                Next.js 15 App Router for sub-second Core Web Vitals, Node.js &amp; Express/Fastify for high-throughput APIs, PostgreSQL for ACID compliance, and Flutter for iOS &amp; Android.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-brand-surface p-6 space-y-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-ivory">Direct Accountability &amp; IP Rights</h3>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                Direct engineer communication, strict NDA execution, transparent GitHub commits, and 100% full intellectual property transfer upon final delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Districts: Kollam & Karunagappally Spotlight */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Priority Service Corridors</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Local Service Focus: Kollam District &amp; Karunagappally
            </h2>
            <p className="text-sm sm:text-base text-titanium leading-relaxed">
              While I serve clients throughout Kerala and across global timezones remotely, Kollam and Karunagappally represent priority local regions where on-site technical discussions and local business alignments are readily arranged.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div className="rounded-3xl border border-cyan/30 bg-gradient-to-br from-brand-secondary to-brand-surface p-8 space-y-5 relative overflow-hidden group hover:border-cyan/60 transition-all">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-semibold">
                <MapPin className="h-3.5 w-3.5" />
                <span>District Hub</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-ivory">
                Freelance Software Developer in Kollam
              </h3>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                Tailored business software, logistics dashboards, cashew &amp; seafood export tracking systems, healthcare applications, and custom SaaS platforms for Kollam enterprises.
              </p>
              <Link
                href="/freelance-software-developer-kollam"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan hover:text-cyan-light pt-2"
              >
                <span>Explore Kollam Services &amp; Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-violet/30 bg-gradient-to-br from-brand-secondary to-brand-surface p-8 space-y-5 relative overflow-hidden group hover:border-violet/60 transition-all">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet/10 border border-violet/30 text-violet text-xs font-mono font-semibold">
                <MapPin className="h-3.5 w-3.5" />
                <span>Taluk &amp; Commerce Hub</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-ivory">
                Freelance Software Developer in Karunagappally
              </h3>
              <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                Modern websites, e-commerce stores, custom billing portals, mobile applications, and digital business automation for retail, trade, and institutions in Karunagappally.
              </p>
              <Link
                href="/freelance-software-developer-karunagappally"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-violet hover:text-violet/80 pt-2"
              >
                <span>Explore Karunagappally Solutions</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Statewide Coverage Grid */}
          <div className="rounded-2xl border border-white/10 bg-brand-surface p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-bold text-ivory mb-4 flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-cyan" />
              <span>Full Kerala Coverage Across All 14 Districts</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {KERALA_DISTRICTS.map((district) => (
                <div key={district.name} className="p-3.5 rounded-xl border border-white/5 bg-brand-secondary/60 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs sm:text-sm text-ivory">{district.name}</span>
                    {district.slug && (
                      <Link href={`/${district.slug}`} className="text-[11px] font-mono text-cyan hover:underline flex items-center gap-1">
                        <span>Dedicated Hub</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">{district.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 border-b border-white/[0.06] bg-brand-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Answers to Common Questions</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Frequently Asked Questions for Kerala Clients
            </h2>
          </div>

          <div className="space-y-4">
            {KERALA_FAQS.map((faq, index) => (
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

      {/* Conversion Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectBriefBlock
            title="Start Your Project with a Kerala Solution Architect"
            subtitle="Tell me what you are building, what technical challenges you are facing, and your target timeline. I will review your project brief directly and suggest the most effective path forward."
            contextTag="Direct Engineering Collaboration"
            prefilledWhatsAppMessage="Hi Abin, I'm reaching out from Kerala regarding a software development project."
          />
        </div>
      </section>
    </main>
  );
}
