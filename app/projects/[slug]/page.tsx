import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { SERVICES } from "@/data/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConversionCtaSection } from "@/components/cta/ConversionCtaSection";
import { 
  ArrowLeft, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Server, 
  ExternalLink, 
  Calendar, 
  User, 
  Building2,
  Layers,
  Database,
  Lock,
  Cloud,
  Activity,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Info,
  Scale
} from "lucide-react";

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
    title: `${project.title} | Case Study | Abin S Chandran`,
    description: project.summary,
    alternates: {
      canonical: `https://www.abinschandran.in/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `https://www.abinschandran.in/projects/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find related commercial services based on matching technologies
  const relatedServices = SERVICES.filter((s) =>
    s.techStack.some((tech) => project.techStack.includes(tech))
  ).slice(0, 2);

  const getEnvBadgeStyle = (env: string) => {
    switch (env) {
      case "Production":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "Staging":
        return "bg-cyan/10 text-cyan border-cyan/30";
      case "Benchmark":
        return "bg-violet/10 text-violet border-violet/30";
      case "Lab":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      default:
        return "bg-obsidian-surface text-titanium border-white/[0.08]";
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-brand-bg">
      <JsonLd
        type="CreativeWork"
        projectData={{
          title: project.title,
          description: project.summary,
          url: `https://www.abinschandran.in/projects/${project.slug}`,
        }}
      />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: "https://www.abinschandran.in" },
          { name: "Projects", item: "https://www.abinschandran.in/projects" },
          { name: project.title, item: `https://www.abinschandran.in/projects/${project.slug}` },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Case Studies</span>
        </Link>

        {/* 1. Project Summary Header Card */}
        <div className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-mono text-cyan bg-cyan/10 px-3 py-1 rounded-full border border-cyan/30 font-semibold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-titanium-light bg-obsidian-surface px-3 py-1 rounded-full border border-white/[0.08] font-medium">
              {project.projectType}
            </span>
            <span className="text-xs font-mono text-titanium flex items-center gap-1.5 ml-auto">
              <Calendar className="w-3.5 h-3.5 text-cyan" />
              {project.period}
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-titanium font-sans leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Metadata Row: Role, Industry, Client Context */}
          <div className="pt-4 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-obsidian-surface border border-white/[0.06] space-y-1">
              <span className="text-[10px] text-titanium-muted uppercase tracking-wider font-semibold flex items-center gap-1">
                <User className="w-3 h-3 text-cyan" />
                Abin&apos;s Role
              </span>
              <span className="text-ivory font-bold">{project.role}</span>
            </div>

            <div className="p-3 rounded-xl bg-obsidian-surface border border-white/[0.06] space-y-1">
              <span className="text-[10px] text-titanium-muted uppercase tracking-wider font-semibold flex items-center gap-1">
                <Building2 className="w-3 h-3 text-cyan" />
                Industry / Domain
              </span>
              <span className="text-ivory font-bold">{project.industry}</span>
            </div>

            <div className="p-3 rounded-xl bg-obsidian-surface border border-white/[0.06] space-y-1 sm:col-span-2 lg:col-span-1">
              <span className="text-[10px] text-titanium-muted uppercase tracking-wider font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-cyan" />
                Engagement Context
              </span>
              <span className="text-titanium text-[11px] leading-snug line-clamp-2">{project.clientContextNote}</span>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/[0.08]">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.08] space-y-1">
                <div className="text-[10px] text-titanium font-mono truncate">{m.label}</div>
                <div className="text-lg font-bold text-cyan font-mono">{m.value}</div>
                <div className="text-[10px] text-titanium-muted truncate">{m.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. The Problem Section */}
        <div className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-6 sm:p-10 shadow-xl space-y-4">
          <div className="border-b border-white/[0.08] pb-3">
            <span className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
              The Challenge
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-ivory font-mono mt-1">
              The Business &amp; Technical Problem
            </h2>
          </div>
          <p className="text-sm sm:text-base text-titanium leading-relaxed font-sans">
            {project.theProblem}
          </p>
        </div>

        {/* 3. Scope and Responsibilities Section */}
        <div className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-6 sm:p-10 shadow-xl space-y-6">
          <div className="border-b border-white/[0.08] pb-3">
            <span className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
              Execution Scope
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-ivory font-mono mt-1">
              Delivered Scope &amp; Responsibilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
            <div className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.06] space-y-1.5">
              <div className="font-mono font-bold text-cyan flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Architecture &amp; System Design</span>
              </div>
              <p className="text-titanium leading-relaxed">{project.scopeAndResponsibilities.architecture}</p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.06] space-y-1.5">
              <div className="font-mono font-bold text-cyan-light flex items-center gap-2">
                <Server className="w-3.5 h-3.5" />
                <span>Backend &amp; API Development</span>
              </div>
              <p className="text-titanium leading-relaxed">{project.scopeAndResponsibilities.backendApi}</p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.06] space-y-1.5">
              <div className="font-mono font-bold text-cyan flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>Frontend or Mobile Application</span>
              </div>
              <p className="text-titanium leading-relaxed">{project.scopeAndResponsibilities.frontendMobile}</p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.06] space-y-1.5">
              <div className="font-mono font-bold text-cyan-light flex items-center gap-2">
                <Database className="w-3.5 h-3.5" />
                <span>Database Architecture &amp; Persistence</span>
              </div>
              <p className="text-titanium leading-relaxed">{project.scopeAndResponsibilities.databaseDesign}</p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.06] space-y-1.5">
              <div className="font-mono font-bold text-cyan flex items-center gap-2">
                <Lock className="w-3.5 h-3.5" />
                <span>Authentication &amp; Permissions</span>
              </div>
              <p className="text-titanium leading-relaxed">{project.scopeAndResponsibilities.authPermissions}</p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.06] space-y-1.5">
              <div className="font-mono font-bold text-cyan-light flex items-center gap-2">
                <Cloud className="w-3.5 h-3.5" />
                <span>Infrastructure &amp; Deployment</span>
              </div>
              <p className="text-titanium leading-relaxed">{project.scopeAndResponsibilities.infraDeployment}</p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.06] space-y-1.5 md:col-span-2">
              <div className="font-mono font-bold text-violet flex items-center gap-2">
                <Activity className="w-3.5 h-3.5" />
                <span>Monitoring &amp; Maintenance</span>
              </div>
              <p className="text-titanium leading-relaxed">{project.scopeAndResponsibilities.monitoringMaintenance}</p>
            </div>
          </div>
        </div>

        {/* 4. Architecture Decisions & Trade-Offs */}
        <div className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-6 sm:p-10 shadow-xl space-y-6">
          <div className="border-b border-white/[0.08] pb-3">
            <span className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
              Technical Rationale
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-ivory font-mono mt-1">
              Architecture Decisions, Rejected Alternatives &amp; Accepted Trade-Offs
            </h2>
          </div>

          <div className="space-y-4">
            {project.architectureDecisionsDetailed.map((decision, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-obsidian-surface border border-white/[0.08] space-y-3 font-sans text-xs"
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-cyan/15 text-cyan font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-ivory font-mono leading-tight">
                    {decision.chosen}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pl-7 pt-1">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-cyan uppercase tracking-wider font-semibold">
                      Why It Was Chosen:
                    </span>
                    <p className="text-titanium leading-relaxed">{decision.reasoning}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                      Alternatives Rejected:
                    </span>
                    <p className="text-titanium leading-relaxed">{decision.rejectedAlternatives}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-violet uppercase tracking-wider font-semibold">
                      Trade-Offs Accepted:
                    </span>
                    <p className="text-titanium leading-relaxed">{decision.tradeoffsAccepted}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Verified Outcomes Table */}
        <div className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-6 sm:p-10 shadow-xl space-y-6">
          <div className="border-b border-white/[0.08] pb-3">
            <span className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
              Verifiable Evidence
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-ivory font-mono mt-1">
              Measured Project Outcomes
            </h2>
            <p className="text-xs text-titanium mt-1">
              Every metric specifies the measurement environment, method, and Abin&apos;s contribution. Unverified benchmarks are not presented as contractual SLAs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans border-collapse">
              <thead>
                <tr className="border-b border-white/[0.12] text-titanium font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-3">Metric Name</th>
                  <th className="py-3 px-3">Baseline</th>
                  <th className="py-3 px-3">Final Value</th>
                  <th className="py-3 px-3">Environment</th>
                  <th className="py-3 px-3">Measurement Method</th>
                  <th className="py-3 px-3">Abin&apos;s Contribution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {project.outcomes.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-3 font-mono font-bold text-ivory">{row.metricName}</td>
                    <td className="py-3.5 px-3 text-titanium-muted font-mono">{row.baseline || "—"}</td>
                    <td className="py-3.5 px-3 text-emerald-400 font-mono font-bold">{row.finalValue}</td>
                    <td className="py-3.5 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono border font-semibold ${getEnvBadgeStyle(row.environment)}`}>
                        {row.environment}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-titanium text-[11px] leading-snug max-w-[200px]">
                      {row.measurementMethod}
                      <span className="block text-[10px] text-titanium-muted mt-0.5 font-mono">({row.measurementDateOrPeriod})</span>
                    </td>
                    <td className="py-3.5 px-3 text-titanium text-[11px] leading-snug max-w-[220px]">{row.roleContribution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. Evidence & Confidentiality Disclaimer */}
        <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-card border border-white/[0.08] space-y-4 shadow-xl">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-ivory font-mono">Evidence &amp; Confidentiality Notice</h3>
              <p className="text-xs text-titanium leading-relaxed font-sans">
                {project.evidence.confidentialityNotice}
              </p>
            </div>
          </div>

          {project.evidence.links && project.evidence.links.length > 0 && (
            <div className="pt-2 flex flex-wrap gap-3 pl-8">
              {project.evidence.links.map((link, lIdx) => (
                <Link
                  key={lIdx}
                  href={link.url}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan hover:text-white font-bold transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* 7. Limitations Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-surface border border-white/[0.08] space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>Scope Limitations &amp; Benchmark Boundaries</span>
          </div>
          <ul className="space-y-2 font-sans text-xs text-titanium leading-relaxed">
            {project.limitations.map((lim, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 shrink-0 mt-1.5" />
                <span>{lim}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 8. Project-Specific CTA Section */}
        <div className="bg-obsidian-card border border-cyan/40 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-4 text-center">
          <span className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
            Next Architectural Steps
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ivory tracking-tight">
            {project.cta.title}
          </h2>
          <p className="text-sm text-titanium max-w-xl mx-auto font-sans leading-relaxed">
            {project.cta.description}
          </p>
          <div className="pt-2">
            <Link
              href={project.cta.buttonHref}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan hover:bg-cyan-light text-brand-bg text-xs font-mono font-bold shadow-lg shadow-cyan/20 transition-all"
            >
              <span>{project.cta.buttonLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Technical Stack Badges */}
        <div className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-6 shadow-xl space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-ivory font-semibold">
            Technology Stack &amp; Tools Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-obsidian-surface border border-white/[0.08] text-titanium font-mono text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Related Services Internal Links */}
        {relatedServices.length > 0 && (
          <div className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
              Relevant Commercial Capabilities
            </div>
            <h3 className="text-lg font-bold text-ivory font-mono">
              Need Similar Architecture or Development for Your Team?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {relatedServices.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="p-4 rounded-xl bg-obsidian-surface border border-white/[0.08] hover:border-cyan/40 transition-colors group flex flex-col justify-between space-y-2"
                >
                  <div>
                    <h4 className="font-mono text-xs font-bold text-ivory group-hover:text-cyan transition-colors">
                      {svc.title}
                    </h4>
                    <p className="text-xs text-titanium mt-1 line-clamp-2">
                      {svc.shortDescription}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-cyan flex items-center gap-1 font-semibold pt-1">
                    <span>Explore Service Details</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Back Link */}
        <div className="pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-titanium hover:text-ivory"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>
        </div>

      </div>

      <div className="mt-16">
        <ConversionCtaSection />
      </div>
    </div>
  );
}
