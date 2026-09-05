import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConversionCtaSection } from "@/components/cta/ConversionCtaSection";
import { 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  Sparkles, 
  Clock, 
  HelpCircle, 
  ExternalLink,
  Activity,
  FileCheck2,
  Gauge
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  const title = service.seoTitle || `${service.title} | Abin S Chandran Freelance Developer`;
  const description = service.metaDescription || service.shortDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.abinschandran.in/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.abinschandran.in/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find related case studies that share tech stack or domain
  const relatedProjects = PROJECTS.filter((p) =>
    p.techStack.some((tech) => service.techStack.includes(tech))
  ).slice(0, 2);

  // FAQ Schema for services with FAQs
  const faqSchema = service.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  } : null;

  return (
    <div className="pt-28 pb-20 min-h-screen bg-brand-bg">
      <JsonLd
        type="Service"
        serviceData={{
          title: service.title,
          description: service.shortDescription,
          url: `https://www.abinschandran.in/services/${service.slug}`,
        }}
      />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: "https://www.abinschandran.in" },
          { name: "Services", item: "https://www.abinschandran.in/services" },
          { name: service.title, item: `https://www.abinschandran.in/services/${service.slug}` },
        ]}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>

        {/* Hero Header Card */}
        <div className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commercial Software Service</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory tracking-tight leading-tight">
            {service.h1 || service.title}
          </h1>

          <p className="text-base sm:text-lg text-titanium font-sans leading-relaxed">
            {service.heroCopy || service.fullDescription}
          </p>

          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
            <Link
              href={service.primaryCta?.href || "/contact"}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan hover:bg-cyan-light text-brand-bg text-xs font-mono font-bold shadow-lg shadow-cyan/20 transition-all"
            >
              <span>{service.primaryCta?.text || service.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {service.secondaryCta && (
              <Link
                href={service.secondaryCta.href}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-obsidian-surface hover:bg-obsidian-hover border border-white/[0.12] hover:border-cyan/40 text-ivory text-xs font-mono transition-all"
              >
                <span>{service.secondaryCta.text}</span>
                <ArrowRight className="w-4 h-4 text-cyan" />
              </Link>
            )}

            <span className="text-xs font-mono text-titanium ml-auto">
              Kerala, India • Remote Freelance Worldwide
            </span>
          </div>
        </div>

        {/* Service Modules / Detailed Subsections (If defined) */}
        {service.serviceModules && service.serviceModules.length > 0 && (
          <div className="space-y-6">
            <div className="border-b border-white/[0.08] pb-3">
              <span className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
                Modular Capabilities
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-ivory font-mono mt-1">
                Included Capabilities &amp; System Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.serviceModules.map((mod, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-obsidian-card border border-white/[0.08] hover:border-cyan/30 transition-colors space-y-3 shadow-lg flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-ivory font-mono flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-cyan/15 text-cyan text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold">
                        {idx + 1}
                      </span>
                      <span>{mod.title}</span>
                    </h3>
                    <p className="text-xs text-titanium leading-relaxed pl-7 font-sans">
                      {mod.description}
                    </p>
                  </div>

                  {mod.items && mod.items.length > 0 && (
                    <div className="pl-7 pt-2 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                      {mod.items.map((item, iIdx) => (
                        <span
                          key={iIdx}
                          className="px-2 py-0.5 rounded-md bg-obsidian-surface text-[10px] font-mono text-titanium-light border border-white/[0.06]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Audit Deliverables Section (For Performance Optimization) */}
        {service.auditDeliverables && service.auditDeliverables.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-card border border-white/[0.08] space-y-6 shadow-xl">
            <div className="border-b border-white/[0.08] pb-3">
              <span className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
                Comprehensive Diagnostic Scope
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-ivory font-mono mt-1">
                10-Point Technical Performance Audit Deliverables
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
              {service.auditDeliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-obsidian-surface border border-white/[0.06] flex items-start gap-3"
                >
                  <FileCheck2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                  <span className="text-xs text-ivory font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lab vs Field Data Definitions */}
        {service.labVsFieldNotes && (
          <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-card border border-white/[0.08] space-y-4 shadow-xl">
            <div className="border-b border-white/[0.08] pb-3">
              <span className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
                Measurement Methodology
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-ivory font-mono mt-1">
                Separating Lab Data from Field Data &amp; Application Benchmarks
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
              <div className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.06] space-y-2">
                <div className="font-mono font-bold text-cyan flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5" />
                  <span>Lab Measurements</span>
                </div>
                <p className="text-titanium leading-relaxed">{service.labVsFieldNotes.labData}</p>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.06] space-y-2">
                <div className="font-mono font-bold text-cyan-light flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Field Telemetry (RUM)</span>
                </div>
                <p className="text-titanium leading-relaxed">{service.labVsFieldNotes.fieldData}</p>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.06] space-y-2">
                <div className="font-mono font-bold text-violet flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Application Benchmarks</span>
                </div>
                <p className="text-titanium leading-relaxed">{service.labVsFieldNotes.applicationBenchmark}</p>
              </div>
            </div>
          </div>
        )}

        {/* Public Anonymized Audit Example Table */}
        {service.auditComparisonTable && service.auditComparisonTable.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-card border border-white/[0.08] space-y-6 shadow-xl">
            <div className="border-b border-white/[0.08] pb-3">
              <span className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
                Demonstrated Results
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-ivory font-mono mt-1">
                Public Anonymized Audit Example (Before vs. After Optimization)
              </h2>
              <p className="text-xs text-titanium mt-1">
                Representative client production application before and after prioritized performance remediation.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.12] text-titanium font-mono text-[11px] uppercase tracking-wider">
                    <th className="py-3 px-4">Measure</th>
                    <th className="py-3 px-4">Baseline (Before)</th>
                    <th className="py-3 px-4">Remediation Change Made</th>
                    <th className="py-3 px-4">Optimized (After)</th>
                    <th className="py-3 px-4">Measurement Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {service.auditComparisonTable.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-ivory">{row.measure}</td>
                      <td className="py-3.5 px-4 text-rose-400 font-mono">{row.before}</td>
                      <td className="py-3.5 px-4 text-titanium leading-relaxed max-w-xs">{row.changeMade}</td>
                      <td className="py-3.5 px-4 text-emerald-400 font-mono font-bold">{row.after}</td>
                      <td className="py-3.5 px-4 text-[11px] font-mono text-titanium-muted">{row.measurementMethod}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Standard Target Audience & Problems Solved Grid (for pages without serviceModules) */}
        {!service.serviceModules && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            {/* Who It Is For */}
            <div className="p-6 rounded-2xl bg-obsidian-card border border-white/[0.08] space-y-4 shadow-xl">
              <h3 className="text-base font-bold text-ivory font-mono flex items-center gap-2 border-b border-white/[0.08] pb-3">
                <Cpu className="w-4 h-4 text-cyan" />
                Who This Service Is For
              </h3>
              <ul className="space-y-3">
                {service.targetAudience.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-titanium leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Problems Solved */}
            <div className="p-6 rounded-2xl bg-obsidian-card border border-white/[0.08] space-y-4 shadow-xl">
              <h3 className="text-base font-bold text-ivory font-mono flex items-center gap-2 border-b border-white/[0.08] pb-3">
                <ShieldCheck className="w-4 h-4 text-cyan" />
                Key Challenges Solved
              </h3>
              <ul className="space-y-3">
                {service.problemsSolved.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-titanium leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Deliverables Section (for standard pages) */}
        {!service.serviceModules && (
          <div className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 font-sans">
            <h3 className="text-xl font-bold text-ivory font-mono border-b border-white/[0.08] pb-4">
              Typical Project Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.deliverables.map((deliv, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.08] flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cyan/15 text-cyan font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs text-ivory font-medium leading-relaxed">{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Engagement Types Section */}
        {service.engagementTypes && service.engagementTypes.length > 0 && (
          <div className="space-y-6">
            <div className="border-b border-white/[0.08] pb-3">
              <span className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
                Engagement Scope
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-ivory font-mono mt-1">
                Flexible Collaboration &amp; Delivery Models
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
              {service.engagementTypes.map((eng, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-obsidian-card border border-white/[0.08] hover:border-cyan/40 transition-colors space-y-4 shadow-xl flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-cyan bg-cyan/10 px-2 py-0.5 rounded border border-cyan/25 font-bold">
                        {eng.subtitle}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-ivory">{eng.title}</h3>
                    <p className="text-xs text-titanium leading-relaxed">{eng.description}</p>
                    
                    <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                      <span className="text-[10px] font-mono text-titanium-muted uppercase tracking-wider font-semibold">
                        Key Deliverables:
                      </span>
                      {eng.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-titanium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full py-2.5 rounded-xl bg-obsidian-surface hover:bg-cyan hover:text-brand-bg text-ivory text-xs font-mono font-bold text-center border border-white/[0.08] transition-all"
                  >
                    Select Model
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6-Step Implementation Process */}
        {service.processSteps && service.processSteps.length > 0 && (
          <div className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-6 sm:p-10 shadow-xl space-y-8 font-sans">
            <div className="border-b border-white/[0.08] pb-3">
              <span className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
                Transparent Execution
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-ivory font-mono mt-1">
                6-Phase Implementation &amp; Evaluation Process
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="space-y-2.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan/10 border border-cyan/30 text-cyan font-mono font-bold text-sm flex items-center justify-center">
                    {step.step}
                  </div>
                  <h3 className="text-sm font-bold text-ivory font-mono">{step.title}</h3>
                  <p className="text-xs text-titanium leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dedicated Proof Section (If defined) */}
        {service.proofCaseStudy && (
          <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-card border border-white/[0.08] space-y-5 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
              <div>
                <span className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
                  Verified Case Study Proof
                </span>
                <h3 className="text-xl font-bold text-ivory font-mono mt-1">
                  {service.proofCaseStudy.title}
                </h3>
              </div>
              <span className="text-[11px] font-mono text-titanium-muted bg-obsidian-surface px-3 py-1 rounded-full border border-white/[0.08]">
                {service.proofCaseStudy.typeTag}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-titanium leading-relaxed font-sans">
              {service.proofCaseStudy.note}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {service.proofCaseStudy.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-ivory font-mono">
                  <span className="w-2 h-2 rounded-full bg-cyan shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href={`/projects/${service.proofCaseStudy.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan/10 hover:bg-cyan/20 border border-cyan/30 text-cyan text-xs font-mono font-bold transition-all"
              >
                <span>Read Full Architectural Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Technology Stack */}
        <div className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-6 shadow-xl space-y-3 font-mono">
          <h3 className="text-xs uppercase tracking-wider text-ivory font-semibold flex items-center gap-2">
            <Code2 className="w-4 h-4 text-cyan" />
            Technologies &amp; Frameworks Utilized
          </h3>
          <div className="flex flex-wrap gap-2 pt-1">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-obsidian-surface border border-white/[0.08] text-titanium text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* FAQs Section (If present) */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="space-y-6">
            <div className="border-b border-white/[0.08] pb-3">
              <span className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
                Clear Answers
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-ivory font-mono mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 font-sans">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-obsidian-card border border-white/[0.08] space-y-2.5"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                    <h3 className="text-sm font-bold text-ivory font-mono">{faq.question}</h3>
                  </div>
                  <p className="text-xs text-titanium leading-relaxed pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Internal Cross Links */}
        {service.internalCrossLinks && service.internalCrossLinks.length > 0 ? (
          <div className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-white/[0.08] pb-3">
              <span className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
                Related Systems &amp; Next Steps
              </span>
              <h3 className="text-lg font-bold text-ivory font-mono mt-1">
                Explore Connected Capabilities
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {service.internalCrossLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.08] hover:border-cyan/40 transition-colors group flex flex-col justify-between space-y-2"
                >
                  <div>
                    {link.badge && (
                      <span className="text-[10px] font-mono text-cyan bg-cyan/10 px-2 py-0.5 rounded border border-cyan/20">
                        {link.badge}
                      </span>
                    )}
                    <h4 className="font-mono text-xs font-bold text-ivory group-hover:text-cyan transition-colors mt-2">
                      {link.title}
                    </h4>
                    <p className="text-xs text-titanium mt-1 line-clamp-2">
                      {link.description}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-cyan flex items-center gap-1 font-semibold pt-1">
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          /* Related Case Studies Fallback */
          relatedProjects.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-ivory font-mono">
                Related Case Studies &amp; Architectural Proof
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map((p) => (
                  <div key={p.slug} className="p-6 rounded-2xl bg-obsidian-card border border-white/[0.08] space-y-3">
                    <span className="text-[10px] font-mono text-cyan bg-cyan/10 px-2.5 py-0.5 rounded border border-cyan/30">
                      {p.category}
                    </span>
                    <h4 className="text-lg font-bold text-ivory">{p.title}</h4>
                    <p className="text-xs text-titanium line-clamp-2">{p.summary}</p>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan hover:text-white font-bold transition-colors pt-2"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )
        )}

      </div>

      <div className="mt-12">
        <ConversionCtaSection />
      </div>
    </div>
  );
}
