import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Code2,
  FileCheck,
  ArrowRight,
  Quote,
  Layers,
  MapPin,
} from "lucide-react";
import { CLIENT_REVIEWS } from "@/data/reviews";
import { ProjectBriefBlock } from "@/components/conversion/ProjectBriefBlock";

export const metadata: Metadata = {
  title: "Client Reviews & Verified Delivery Outcomes | Abin S Chandran",
  description:
    "Read authentic reviews, client feedback, and verified project delivery outcomes for Abin S Chandran — Freelance Software Developer & Solution Architect.",
  keywords: [
    "Abin S Chandran reviews",
    "freelance developer reviews",
    "software architect reviews Kerala",
    "Next.js developer client testimonials",
    "Flutter freelance developer feedback",
  ],
  alternates: {
    canonical: "https://www.abinschandran.in/reviews",
  },
  openGraph: {
    title: "Client Reviews & Verified Delivery Outcomes | Abin S Chandran",
    description:
      "Direct technical ownership, production-grade architectures, and verified delivery outcomes across SaaS, Fintech, AI/RAG, and Flutter mobile apps.",
    url: "https://www.abinschandran.in/reviews",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Client Reviews - Abin S Chandran",
      },
    ],
  },
};

export default function ReviewsPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Client Reviews & Verified Delivery Outcomes | Abin S Chandran",
    url: "https://www.abinschandran.in/reviews",
    description:
      "Authentic client reviews, technical delivery outcomes, and milestones for Abin S Chandran.",
    review: CLIENT_REVIEWS.map((r) => ({
      "@type": "Review",
      itemReviewed: {
        "@type": "Person",
        name: "Abin S Chandran",
        jobTitle: "Freelance Software Developer & Solution Architect",
        url: "https://www.abinschandran.in",
      },
      author: {
        "@type": "Person",
        name: `${r.clientTitle}, ${r.role}`,
      },
      reviewBody: r.quote,
      datePublished: r.date,
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
              <Sparkles className="h-3.5 w-3.5" />
              <span>Verifiable Track Record</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-ivory sm:text-4xl lg:text-5xl leading-tight">
              Client Feedback &amp; Verified Delivery Outcomes
            </h1>

            <p className="text-base leading-relaxed text-titanium sm:text-lg">
              I operate as a dedicated technical partner and solution architect. Here is authentic feedback from founders, CTOs, and engineering leaders who have worked directly with me across web applications, mobile products, and cloud infrastructure.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/[0.08] text-xs font-mono text-titanium">
              <div>
                <span className="text-cyan font-bold block text-sm">Direct Collaboration</span>
                <span>Zero agency intermediaries</span>
              </div>
              <div>
                <span className="text-emerald-400 font-bold block text-sm">100% IP Transfer</span>
                <span>Clean Git repositories</span>
              </div>
              <div>
                <span className="text-violet font-bold block text-sm">30-Day Warranty</span>
                <span>Post-launch stabilization</span>
              </div>
              <div>
                <span className="text-amber-400 font-bold block text-sm">Mutual NDA</span>
                <span>Protected confidentiality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {CLIENT_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="rounded-3xl border border-white/10 bg-brand-surface p-8 sm:p-10 space-y-6 hover:border-cyan/30 transition-all duration-300"
              >
                {/* Header Metadata */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <h2 className="text-lg sm:text-xl font-bold text-ivory">
                        {review.role}
                      </h2>
                      <span className="text-xs font-mono text-slate-400">• {review.companyContext}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-titanium">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-cyan" />
                        {review.location}
                      </span>
                      <span>•</span>
                      <span>{review.projectDomain}</span>
                      <span>•</span>
                      <span>Delivered {review.date}</span>
                    </div>
                  </div>

                  <span className="inline-flex px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-semibold self-start sm:self-auto">
                    {review.engagementType}
                  </span>
                </div>

                {/* Quote Content */}
                <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan/40">
                  <Quote className="h-6 w-6 text-cyan/20 absolute -left-3 -top-1 fill-cyan/10" />
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                {/* Tech Stack & Milestone Outcomes */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>{review.keyOutcome}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <FileCheck className="h-3.5 w-3.5 text-violet" />
                      <span>{review.verifiedMilestone}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-xs font-mono text-slate-400">Technologies Delivered:</span>
                    {review.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {review.anonymizationNote && (
                    <p className="text-[11px] font-mono text-slate-400 italic">
                      * Note: {review.anonymizationNote}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Block */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectBriefBlock
            title="Ready to Build with Direct Technical Accountability?"
            subtitle="Send over your project scope or technical challenge. I will review your requirements and propose a clear, milestone-driven development roadmap."
            contextTag="Direct Partnership"
            prefilledWhatsAppMessage="Hi Abin, I read your client reviews and would like to discuss a software project with you."
          />
        </div>
      </section>
    </main>
  );
}
