import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConversionCtaSection } from "@/components/cta/ConversionCtaSection";
import { ArrowLeft, Cpu, ShieldCheck, CheckCircle2, Server, ExternalLink, Calendar, User, Building2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Abin S Chandran Case Study`,
    description: project.summary,
    alternates: {
      canonical: `https://abnschandran.in/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `https://abnschandran.in/projects/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 min-h-screen bg-obsidian-bg">
      <JsonLd
        type="CreativeWork"
        projectData={{
          title: project.title,
          description: project.summary,
          url: `https://abnschandran.in/projects/${project.slug}`,
        }}
      />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: "https://abnschandran.in" },
          { name: "Projects", item: "https://abnschandran.in/projects" },
          { name: project.title, item: `https://abnschandran.in/projects/${project.slug}` },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-copper hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Case Studies</span>
        </Link>

        {/* Case Study Title & Overview */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-copper bg-copper/10 px-3 py-1 rounded-full border border-copper/30 font-semibold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-titanium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.period}
            </span>
            <span className="text-xs font-mono text-titanium flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              {project.role}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-titanium font-sans leading-relaxed">
            {project.subtitle}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-obsidian-border/80">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-xl bg-obsidian-bg border border-obsidian-border space-y-1">
                <div className="text-[10px] text-titanium font-mono truncate">{m.label}</div>
                <div className="text-lg font-bold text-copper font-mono">{m.value}</div>
                <div className="text-[10px] text-titanium/80">{m.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack Badges */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 shadow-xl space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-ivory font-semibold">
            Technology Stack &amp; Tools Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-obsidian-card border border-obsidian-border text-ivory font-mono text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Narrative & Architecture Blueprint Text (300-500+ words) */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 font-sans text-titanium leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ivory font-mono border-b border-obsidian-border pb-3">
              Architectural Overview &amp; System Boundaries
            </h2>
            <p className="text-sm leading-relaxed">{project.architectureOverview}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-ivory font-mono">Core Engineering Challenges</h3>
            <div className="space-y-2">
              {project.keyChallenges.map((challenge, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-obsidian-card border border-obsidian-border text-xs text-ivory flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-copper/20 text-copper flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-ivory font-mono">Critical Architectural Decisions &amp; Trade-Offs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.architecturalDecisions.map((dec) => (
                <div key={dec.title} className="p-5 rounded-xl bg-obsidian-card border border-obsidian-border space-y-3">
                  <h4 className="font-mono text-xs font-bold text-copper">{dec.title}</h4>
                  <p className="text-xs text-titanium">{dec.reasoning}</p>
                  <div className="text-[11px] font-mono text-emerald-400 border-t border-obsidian-border/50 pt-2">
                    Impact: {dec.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Markdown Narrative */}
          <div className="prose prose-invert max-w-none text-xs sm:text-sm pt-4 border-t border-obsidian-border">
            <div className="whitespace-pre-line leading-relaxed">{project.fullNarrative}</div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="flex justify-between items-center pt-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-titanium hover:text-ivory"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-copper hover:bg-copper-light text-white text-xs font-mono font-bold shadow-lg shadow-copper/20"
          >
            <span>Consult on Similar Software Project</span>
          </Link>
        </div>

      </div>

      <div className="mt-16">
        <ConversionCtaSection />
      </div>
    </div>
  );
}
