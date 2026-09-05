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
  Store,
  Smartphone,
  CreditCard,
  MessageSquare,
} from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ProjectBriefBlock } from "@/components/conversion/ProjectBriefBlock";

export const metadata: Metadata = {
  title: "Freelance Software Developer in Karunagappally | Abin S Chandran",
  description:
    "Hire Abin S Chandran — Senior Freelance Software Developer serving Karunagappally. Custom web portals, Flutter mobile apps, billing software, and digital automation for local businesses.",
  keywords: [
    "freelance software developer Karunagappally",
    "freelance web developer Karunagappally",
    "software development Karunagappally",
    "web developer in Karunagappally",
    "mobile app development Karunagappally",
    "billing software Karunagappally",
    "hire developer Karunagappally Kerala",
  ],
  alternates: {
    canonical: "https://www.abinschandran.in/freelance-software-developer-karunagappally",
  },
  openGraph: {
    title: "Freelance Software Developer in Karunagappally | Abin S Chandran",
    description:
      "Direct software engineering for Karunagappally businesses. Next.js websites, customer portals, billing systems, and Flutter mobile apps.",
    url: "https://www.abinschandran.in/freelance-software-developer-karunagappally",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Freelance Software Developer in Karunagappally - Abin S Chandran",
      },
    ],
  },
};

const LOCAL_SERVICES = [
  {
    icon: Store,
    title: "Custom Business & Retail Portals",
    description:
      "Cloud-based inventory, multi-counter billing, order tracking, and customer loyalty management designed for local retail stores and wholesale distributors.",
  },
  {
    icon: Smartphone,
    title: "Flutter Mobile Applications",
    description:
      "iOS and Android apps for order tracking, catalog browsing, appointment booking, and customer engagement with push notifications.",
  },
  {
    icon: CreditCard,
    title: "E-Commerce & UPI Payment Integration",
    description:
      "Fast online stores with Razorpay, Google Pay, PhonePe, and UPI QR code integration, automated PDF invoice generation, and SMS receipts.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Business API Automation",
    description:
      "Automated order confirmations, customer service bots, bill dispatch, and booking alerts directly over WhatsApp for high engagement.",
  },
];

const KARUNAGAPPALLY_FAQS = [
  {
    question: "Can you work with a business in Karunagappally remotely?",
    answer:
      "Yes. The majority of software development, staging demos, and communication happens online via WhatsApp, email, and scheduled video calls. For businesses in Karunagappally, Oachira, and Chavara, in-person discussions and requirements gathering can also be arranged locally.",
  },
  {
    question: "Can you maintain or upgrade an existing application or website?",
    answer:
      "Yes. If you have an existing slow website, an outdated billing portal, or an unmaintained application, I can review the architecture, fix bugs, optimize database speed, and modernize the user interface.",
  },
  {
    question: "How long does a typical custom website or business application take?",
    answer:
      "A focused business website or web portal typically takes 2 to 4 weeks. A custom mobile app or full-stack web application with payment integration and database backends generally spans 4 to 8 weeks depending on feature scope.",
  },
  {
    question: "Do I get full ownership of the source code?",
    answer:
      "Yes, 100%. Upon final project settlement, all source code, database schemas, and cloud deployment credentials are transferred directly to your organization with complete intellectual property ownership.",
  },
];

export default function KarunagappallySoftwareDeveloperPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.abinschandran.in/freelance-software-developer-karunagappally#service",
        name: "Abin S Chandran — Freelance Software Developer Karunagappally",
        url: "https://www.abinschandran.in/freelance-software-developer-karunagappally",
        image: "https://www.abinschandran.in/abin-s-chandran.png",
        description:
          "Senior Freelance Software Developer and Solution Architect serving businesses in Karunagappally, Oachira, Chavara, and surrounding regions.",
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
          { "@type": "City", name: "Kollam" },
        ],
        priceRange: "$$ - $$$",
        telephone: "+91-95444-93821",
        email: "abinschandran1@gmail.com",
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.abinschandran.in/freelance-software-developer-karunagappally#faq",
        mainEntity: KARUNAGAPPALLY_FAQS.map((faq) => ({
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
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-violet/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3.5 py-1 text-xs font-mono font-semibold text-violet">
              <MapPin className="h-3.5 w-3.5" />
              <span>Karunagappally Taluk &amp; Commerce Corridor</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-ivory sm:text-4xl lg:text-5xl leading-tight">
              Freelance Software Developer in Karunagappally
            </h1>

            <p className="text-base leading-relaxed text-titanium sm:text-lg">
              Custom software development, high-speed business websites, Flutter mobile apps, billing software, and digital automation for businesses and entrepreneurs across Karunagappally, Oachira, and Chavara.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <WhatsAppButton
                variant="primary"
                size="lg"
                message="Hi Abin, I'm reaching out from Karunagappally to discuss a software project."
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
              <span>Connected to</span>
              <Link href="/freelance-software-developer-kollam" className="text-cyan underline hover:text-cyan-light">
                Kollam District Hub
              </Link>
              <span>• Part of</span>
              <Link href="/freelance-software-developer-kerala" className="text-violet underline hover:text-violet/80">
                Kerala Software Engineering Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Services for Karunagappally */}
      <section className="py-20 border-b border-white/[0.06] bg-brand-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-violet font-semibold">Practical Business Solutions</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Software Designed for Local Commercial Operations
            </h2>
            <p className="text-sm sm:text-base text-titanium leading-relaxed">
              Whether you run a wholesale distribution center, a retail brand, a healthcare clinic, or a growing service business in Karunagappally, you need dependable software that saves hours of manual paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCAL_SERVICES.map((srv, i) => {
              const Icon = srv.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-brand-surface p-6 sm:p-8 space-y-4 hover:border-violet/40 transition-all"
                >
                  <div className="h-12 w-12 rounded-xl bg-violet/10 border border-violet/30 flex items-center justify-center text-violet">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-ivory">{srv.title}</h3>
                  <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 border-b border-white/[0.06] bg-brand-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-violet font-semibold">Common Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Karunagappally Client FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {KARUNAGAPPALLY_FAQS.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-brand-surface p-6 space-y-2 hover:border-violet/40 transition-all"
              >
                <h3 className="text-base font-semibold text-ivory flex items-start gap-2.5">
                  <HelpCircle className="h-5 w-5 text-violet shrink-0 mt-0.5" />
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
            title="Start Your Karunagappally Project"
            subtitle="Let me know what system, mobile app, or website you need built. I will review your requirements and share an honest breakdown of timeline and scope."
            contextTag="Karunagappally Direct Collaboration"
            prefilledWhatsAppMessage="Hi Abin, I'm reaching out from Karunagappally to discuss developing software for my business."
          />
        </div>
      </section>
    </main>
  );
}
