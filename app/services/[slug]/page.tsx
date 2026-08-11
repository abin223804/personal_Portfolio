import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConversionCtaSection } from "@/components/cta/ConversionCtaSection";
import { ArrowLeft, CheckCircle2, ArrowRight, Layers, ShieldCheck, Cpu, Code2 } from "lucide-react";

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

  return {
    title: `${service.title} | Abin S Chandran Freelance Developer`,
    description: service.shortDescription,
    alternates: {
      canonical: `https://www.abinschandran.in/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Freelance Development Services`,
      description: service.shortDescription,
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

  return (
    <div className="pt-28 pb-20 min-h-screen bg-obsidian-bg">
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-copper hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>

        {/* Hero Header Card */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>Service Offering</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-base sm:text-lg text-titanium font-sans leading-relaxed">
            {service.fullDescription}
          </p>

          <div className="pt-4 border-t border-obsidian-border flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-copper hover:bg-copper-light text-white text-xs font-mono font-bold shadow-lg shadow-copper/20 transition-all"
            >
              <span>{service.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-xs font-mono text-titanium">
              Based in Kerala, India • Remote Freelance Worldwide
            </span>
          </div>
        </div>

        {/* Target Audience & Problems Solved Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
          {/* Who It Is For */}
          <div className="p-6 rounded-2xl bg-obsidian-surface border border-obsidian-border space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-ivory font-mono flex items-center gap-2 border-b border-obsidian-border pb-3">
              <Cpu className="w-4 h-4 text-copper" />
              Who This Service Is For
            </h3>
            <ul className="space-y-3">
              {service.targetAudience.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-titanium leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Problems Solved */}
          <div className="p-6 rounded-2xl bg-obsidian-surface border border-obsidian-border space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-ivory font-mono flex items-center gap-2 border-b border-obsidian-border pb-3">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Key Challenges Solved
            </h3>
            <ul className="space-y-3">
              {service.problemsSolved.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-titanium leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Concrete Deliverables Section */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 font-sans">
          <h3 className="text-xl font-bold text-ivory font-mono border-b border-obsidian-border pb-4">
            Typical Project Deliverables
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((deliv, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-obsidian-bg border border-obsidian-border/80 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-copper/20 text-copper font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-xs text-ivory font-medium leading-relaxed">{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 shadow-xl space-y-3 font-mono">
          <h3 className="text-xs uppercase tracking-wider text-ivory font-semibold flex items-center gap-2">
            <Code2 className="w-4 h-4 text-copper" />
            Technologies &amp; Frameworks Utilized
          </h3>
          <div className="flex flex-wrap gap-2 pt-1">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-obsidian-card border border-obsidian-border text-ivory text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Related Case Studies (Proof of Work) */}
        {relatedProjects.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-ivory font-mono">
              Related Case Studies &amp; Architectural Proof
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((p) => (
                <div key={p.slug} className="p-6 rounded-2xl bg-obsidian-surface border border-obsidian-border space-y-3">
                  <span className="text-[10px] font-mono text-copper bg-copper/10 px-2.5 py-0.5 rounded border border-copper/30">
                    {p.category}
                  </span>
                  <h4 className="text-lg font-bold text-ivory">{p.title}</h4>
                  <p className="text-xs text-titanium line-clamp-2">{p.summary}</p>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-copper hover:text-white font-bold transition-colors pt-2"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      <div className="mt-12">
        <ConversionCtaSection />
      </div>
    </div>
  );
}
