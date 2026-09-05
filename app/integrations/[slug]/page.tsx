import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  HelpCircle,
  Code2,
  Layers,
  ArrowLeft,
  Server,
  Lock,
} from "lucide-react";
import { INTEGRATIONS, IntegrationService } from "@/data/integrations";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ProjectBriefBlock } from "@/components/conversion/ProjectBriefBlock";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INTEGRATIONS.map((integration) => ({
    slug: integration.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const integration = INTEGRATIONS.find((i) => i.slug === slug);

  if (!integration) {
    return {
      title: "Integration Not Found | Abin S Chandran",
    };
  }

  return {
    title: `${integration.name} | Abin S Chandran`,
    description: integration.metaDescription,
    alternates: {
      canonical: `https://www.abinschandran.in/integrations/${integration.slug}`,
    },
    openGraph: {
      title: `${integration.name} | Abin S Chandran`,
      description: integration.metaDescription,
      url: `https://www.abinschandran.in/integrations/${integration.slug}`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: integration.name,
        },
      ],
    },
  };
}

export default async function IntegrationDetailPage({ params }: Props) {
  const { slug } = await params;
  const integration = INTEGRATIONS.find((i) => i.slug === slug);

  if (!integration) {
    notFound();
  }

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: integration.name,
        description: integration.metaDescription,
        provider: {
          "@type": "Person",
          name: "Abin S Chandran",
          url: "https://www.abinschandran.in",
        },
        url: `https://www.abinschandran.in/integrations/${integration.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: integration.faqs.map((faq) => ({
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

      {/* Breadcrumb Navigation */}
      <div className="pt-28 pb-4 border-b border-white/[0.04] bg-brand-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/integrations"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan hover:text-cyan-light transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Integrations</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/[0.06] pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-cyan/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-semibold">
                <Layers className="h-3.5 w-3.5" />
                <span>{integration.badge}</span>
              </span>
              <span className="text-xs font-mono text-slate-400">
                {integration.category}
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-ivory sm:text-4xl lg:text-5xl leading-tight">
              {integration.h1}
            </h1>

            <p className="text-base leading-relaxed text-titanium sm:text-lg">
              {integration.heroPitch}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <WhatsAppButton
                variant="primary"
                size="lg"
                message={`Hi Abin, I want to discuss integrating ${integration.name} into my application.`}
              />
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-mono font-bold text-ivory hover:border-cyan/40 hover:bg-white/10 transition-all"
              >
                <span>Send Integration Brief</span>
                <ArrowRight className="h-4 w-4 text-cyan" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Technical Challenge */}
      <section className="py-16 border-b border-white/[0.06] bg-brand-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-8 sm:p-10 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block">
              The Engineering Challenge
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-ivory">
              Why Naive Integrations Fail in Production
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
              {integration.businessProblem}
            </p>
          </div>
        </div>
      </section>

      {/* Scope & Deliverables */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Technical Scope</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              What I Deliver in This Integration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {integration.technicalScope.map((scope, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-brand-surface p-5 flex items-start gap-3.5"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">{scope}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Reliability Architecture */}
      <section className="py-20 border-b border-white/[0.06] bg-brand-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Resilience Protocol</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Security, Webhooks &amp; Fault Tolerance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {integration.securityAndReliability.map((sec, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-brand-surface p-6 space-y-3"
              >
                <div className="h-10 w-10 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-ivory">{sec.title}</h3>
                <p className="text-xs sm:text-sm text-titanium leading-relaxed">
                  {sec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Workflows */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Workflow Sequences</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Supported Production Workflows
            </h2>
          </div>

          <div className="space-y-8">
            {integration.supportedWorkflows.map((wf, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-brand-surface p-8 space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-ivory">{wf.title}</h3>
                  <p className="text-sm text-titanium">{wf.description}</p>
                </div>

                <div className="space-y-3 border-t border-white/10 pt-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                    Execution Sequence:
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {wf.technicalSteps.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-3 rounded-xl border border-white/5 bg-brand-secondary/60 p-3.5 text-xs text-slate-300 font-mono"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-[10px] font-bold">
                          {sIdx + 1}
                        </span>
                        <span className="pt-0.5 leading-relaxed font-sans">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section className="py-20 border-b border-white/[0.06] bg-brand-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Representative Scenarios</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Real-World Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {integration.exampleUseCases.map((useCase, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-brand-surface p-6 sm:p-8 space-y-3"
              >
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 text-[11px] font-mono">
                  {useCase.industry}
                </span>
                <h3 className="text-base font-bold text-ivory pt-1">
                  {useCase.scenario}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-400 font-mono pt-1">
                  ✓ Outcome: {useCase.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">Technical FAQs</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {integration.faqs.map((faq, index) => (
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

      {/* Conversion Block */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectBriefBlock
            title={`Plan Your ${integration.name}`}
            subtitle="Let me know which application you are building or upgrading and the integration requirements. I will review the architecture and outline an idempotent, secure integration plan."
            contextTag="Direct Technical Consultation"
            prefilledWhatsAppMessage={`Hi Abin, I want to discuss implementing ${integration.name} in my application.`}
          />
        </div>
      </section>
    </main>
  );
}
