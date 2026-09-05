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
  FileCheck,
} from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ProjectBriefBlock } from "@/components/conversion/ProjectBriefBlock";

export const metadata: Metadata = {
  title: "Freelance Software Developer in Kollam | Abin S Chandran",
  description:
    "Hire Abin S Chandran — Senior Freelance Software Developer & Architect serving Kollam. Custom web applications, Flutter mobile apps, export logistics portals, and SaaS platforms.",
  keywords: [
    "freelance software developer Kollam",
    "freelance web developer Kollam",
    "software developer in Kollam",
    "web development company Kollam",
    "mobile app developer Kollam",
    "Flutter developer Kollam",
    "Next.js developer Kollam",
    "hire developer Kollam",
  ],
  alternates: {
    canonical: "https://www.abinschandran.in/freelance-software-developer-kollam",
  },
  openGraph: {
    title: "Freelance Software Developer in Kollam | Abin S Chandran",
    description:
      "Direct technical ownership for Kollam businesses. Next.js web development, Flutter mobile apps, custom business automation, and enterprise APIs.",
    url: "https://www.abinschandran.in/freelance-software-developer-kollam",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Freelance Software Developer in Kollam - Abin S Chandran",
      },
    ],
  },
};

const KOLLAM_INDUSTRIES = [
  {
    icon: Truck,
    title: "Export & Commodity Logistics",
    description:
      "Custom tracking software for cashew processing, seafood cold chains, inventory management, customs batch tracking, and international shipment manifests.",
  },
  {
    icon: Building2,
    title: "Healthcare & Diagnostic Clinics",
    description:
      "HIPAA-conscious lab result dispatch, doctor appointment management, patient record portals, and automated WhatsApp appointment reminders.",
  },
  {
    icon: Briefcase,
    title: "Educational Institutions & Academies",
    description:
      "Student enrollment portals, course management systems, digital attendance, automated fee processing with Razorpay/UPI, and parent dashboards.",
  },
  {
    icon: Layers,
    title: "Retail Distribution & Wholesale ERP",
    description:
      "Multi-store inventory reconciliation, point-of-sale backends, supplier purchase order tracking, and GST-compliant invoice dispatch.",
  },
];

const KOLLAM_FAQS = [
  {
    question: "Can we arrange an in-person meeting in Kollam for project discussions?",
    answer:
      "Yes. While project execution is remote-first to ensure rapid coding turnaround and clear documentation, I am available for in-person project discovery sessions, milestone architecture walk-throughs, and handoff meetings across Kollam city, Kundara, Kottarakkara, and surrounding areas.",
  },
  {
    question: "Do you build mobile apps for Android and iOS for Kollam businesses?",
    answer:
      "Yes. Using Google Flutter, I develop high-performance cross-platform mobile apps that run identically on iOS and Android from a single codebase. This saves significant development budget while ensuring 60fps native performance.",
  },
  {
    question: "How do you charge for custom software development in Kollam?",
    answer:
      "Projects are quoted either as transparent fixed-scope milestone contracts (with clear deliverables for each phase) or on a dedicated monthly engagement for ongoing product engineering. You receive full source code ownership upon milestone sign-off.",
  },
  {
    question: "What happens after the software is launched?",
    answer:
      "Every project includes a complimentary 30-day warranty covering bug fixes and operational stabilization. After launch, you can opt for an ongoing maintenance retainer for feature updates, server monitoring, and database backups.",
  },
];

export default function KollamSoftwareDeveloperPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.abinschandran.in/freelance-software-developer-kollam#service",
        name: "Abin S Chandran — Freelance Software Developer Kollam",
        url: "https://www.abinschandran.in/freelance-software-developer-kollam",
        image: "https://www.abinschandran.in/abin-s-chandran.png",
        description:
          "Senior Freelance Software Developer and Solution Architect serving businesses across Kollam district. Specializing in custom web applications, mobile apps, and business software.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kollam",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "8.8932",
          longitude: "76.6141",
        },
        areaServed: [
          { "@type": "City", name: "Kollam" },
          { "@type": "City", name: "Karunagappally" },
          { "@type": "City", name: "Kottarakkara" },
          { "@type": "City", name: "Kundara" },
          { "@type": "City", name: "Chathannoor" },
          { "@type": "City", name: "Paravur" },
        ],
        priceRange: "$$ - $$$",
        telephone: "+91-95444-93821",
        email: "abinschandran1@gmail.com",
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.abinschandran.in/freelance-software-developer-kollam#faq",
        mainEntity: KOLLAM_FAQS.map((faq) => ({
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

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-mono font-semibold text-cyan">
              <MapPin className="h-3.5 w-3.5" />
              <span>Kollam District Commercial Software Hub</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-ivory sm:text-4xl lg:text-5xl leading-tight">
              Freelance Software Developer in Kollam
            </h1>

            <p className="text-base leading-relaxed text-titanium sm:text-lg">
              Partner directly with a senior solution architect and full-stack developer to build custom business applications, high-performance web systems, Flutter mobile apps, and automated workflows across Kollam.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <WhatsAppButton
                variant="primary"
                size="lg"
                message="Hi Abin, I'm reaching out from Kollam to discuss a software development project."
              />
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-mono font-bold text-ivory hover:border-cyan/40 hover:bg-white/10 transition-all"
              >
                <span>Send Project Brief</span>
                <ArrowRight className="h-4 w-4 text-cyan" />
              </Link>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-titanium pt-2">
              <span>Part of the statewide</span>
              <Link href="/freelance-software-developer-kerala" className="text-cyan underline hover:text-cyan-light">
                Kerala Software Engineering Hub
              </Link>
              <span>• Also see</span>
              <Link href="/freelance-software-developer-karunagappally" className="text-violet underline hover:text-violet/80">
                Karunagappally Taluk Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Industry Solutions */}
      <section className="py-20 border-b border-white/[0.06] bg-brand-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Local Sector Expertise</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Software Solutions Built for Kollam Enterprises
            </h2>
            <p className="text-sm sm:text-base text-titanium leading-relaxed">
              Kollam has distinct commercial hubs ranging from cashew and coastal seafood exports to thriving retail, healthcare, and educational centers. I design software suited specifically to these operational demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {KOLLAM_INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-brand-surface p-6 sm:p-8 space-y-4 hover:border-cyan/30 transition-all"
                >
                  <div className="h-12 w-12 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-ivory">{ind.title}</h3>
                  <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid with Direct Links */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Core Services</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Full-Lifecycle Engineering for Kollam Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-brand-secondary/60 p-6 space-y-3">
              <h3 className="font-bold text-ivory">Custom Web Applications</h3>
              <p className="text-xs text-titanium leading-relaxed">
                Fast Next.js 15 web applications with responsive design, secure authentication, and administrative dashboards.
              </p>
              <Link href="/services/react-nextjs-development" className="text-xs font-mono text-cyan hover:underline inline-flex items-center gap-1">
                <span>Next.js Details</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-brand-secondary/60 p-6 space-y-3">
              <h3 className="font-bold text-ivory">Cross-Platform Mobile Apps</h3>
              <p className="text-xs text-titanium leading-relaxed">
                Native-performance iOS and Android applications built in Flutter for customer booking, logistics, and retail.
              </p>
              <Link href="/services/flutter-development" className="text-xs font-mono text-cyan hover:underline inline-flex items-center gap-1">
                <span>Flutter Services</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-brand-secondary/60 p-6 space-y-3">
              <h3 className="font-bold text-ivory">API &amp; Backend Engineering</h3>
              <p className="text-xs text-titanium leading-relaxed">
                Resilient Node.js and PostgreSQL backend microservices with payment gateway integrations and webhook listeners.
              </p>
              <Link href="/services/nodejs-development" className="text-xs font-mono text-cyan hover:underline inline-flex items-center gap-1">
                <span>Node.js Backend</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kollam FAQs */}
      <section className="py-20 border-b border-white/[0.06] bg-brand-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Local Queries</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Frequently Asked Questions in Kollam
            </h2>
          </div>

          <div className="space-y-4">
            {KOLLAM_FAQS.map((faq, index) => (
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

      {/* Project Brief CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectBriefBlock
            title="Discuss Your Kollam Software Project"
            subtitle="Send your requirement, technical pain points, or target milestone. I will review the brief directly and outline the recommended architecture and delivery timeline."
            contextTag="Kollam Technical Partnership"
            prefilledWhatsAppMessage="Hi Abin, I'm reaching out from Kollam to discuss a custom software project."
          />
        </div>
      </section>
    </main>
  );
}
