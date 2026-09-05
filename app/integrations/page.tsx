import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, ShieldCheck, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import { INTEGRATIONS } from "@/data/integrations";
import { ProjectBriefBlock } from "@/components/conversion/ProjectBriefBlock";

export const metadata: Metadata = {
  title: "Third-Party API & Payment Integrations | Abin S Chandran",
  description:
    "Production third-party API and payment integrations by Abin S Chandran: Stripe subscriptions, Razorpay UPI, WhatsApp Business Cloud API, and Google Maps Platform.",
  keywords: [
    "Stripe integration developer",
    "Razorpay developer Kerala",
    "WhatsApp Business API developer",
    "Google Maps integration developer",
    "API integration engineer India",
    "payment gateway integration freelance",
  ],
  alternates: {
    canonical: "https://www.abinschandran.in/integrations",
  },
  openGraph: {
    title: "Third-Party API & Payment Integrations | Abin S Chandran",
    description:
      "Production-ready third-party integrations: Stripe, Razorpay, WhatsApp Business API, and Google Maps with robust webhooks, idempotency, and security.",
    url: "https://www.abinschandran.in/integrations",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "API Integrations - Abin S Chandran",
      },
    ],
  },
};

export default function IntegrationsIndexPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Third-Party API & Payment Integrations | Abin S Chandran",
    url: "https://www.abinschandran.in/integrations",
    description:
      "Enterprise third-party API and payment integration services by Abin S Chandran: Stripe, Razorpay, WhatsApp Cloud API, and Google Maps.",
    hasPart: INTEGRATIONS.map((integration) => ({
      "@type": "Service",
      name: integration.name,
      url: `https://www.abinschandran.in/integrations/${integration.slug}`,
      description: integration.shortDescription,
    })),
  };

  return (
    <main className="min-h-screen bg-brand-bg text-ivory selection:bg-cyan/20 selection:text-cyan">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-white/[0.06] pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-cyan/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-mono font-semibold text-cyan">
              <Layers className="h-3.5 w-3.5" />
              <span>Production API &amp; Webhook Engineering</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-ivory sm:text-4xl lg:text-5xl leading-tight">
              Production Third-Party API &amp; Payment Integrations
            </h1>

            <p className="text-base leading-relaxed text-titanium sm:text-lg">
              Connecting external services requires more than calling an endpoint. I build resilient, idempotent, and security-hardened integrations for Stripe, Razorpay, WhatsApp Business API, and Google Maps Platform.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-titanium">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                Idempotent Webhooks
              </span>
              <span className="flex items-center gap-1.5 text-cyan">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                Cryptographic HMAC Verification
              </span>
              <span className="flex items-center gap-1.5 text-violet">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                Replay Attack Protection
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INTEGRATIONS.map((item) => (
              <div
                key={item.slug}
                className="rounded-3xl border border-white/10 bg-brand-surface p-8 sm:p-10 space-y-6 flex flex-col justify-between hover:border-cyan/40 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-semibold">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{item.category}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-ivory group-hover:text-cyan transition-colors">
                    {item.name}
                  </h2>

                  <p className="text-sm text-titanium leading-relaxed">
                    {item.shortDescription}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Key Engineering Scope:</span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {item.technicalScope.slice(0, 3).map((scope, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{scope}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href={`/integrations/${item.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan hover:text-cyan-light transition-colors"
                  >
                    <span>View Integration Architecture &amp; Workflows</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectBriefBlock
            title="Need a Production API or Payment Gateway Integration?"
            subtitle="Tell me which third-party service, payment processor, or messaging API you need integrated. I will review your requirements and outline a clean, idempotent architecture."
            contextTag="Integration Consulting"
            prefilledWhatsAppMessage="Hi Abin, I am looking for a developer to integrate third-party APIs into my software system."
          />
        </div>
      </section>
    </main>
  );
}
