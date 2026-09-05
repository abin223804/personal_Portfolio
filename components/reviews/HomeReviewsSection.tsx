"use client";

import React from "react";
import Link from "next/link";
import { Quote, ArrowRight, CheckCircle2, FileCheck, MapPin, Sparkles } from "lucide-react";
import { CLIENT_REVIEWS } from "@/data/reviews";

export const HomeReviewsSection: React.FC = () => {
  // Select 3 high-impact reviews for homepage showcase
  const featuredReviews = CLIENT_REVIEWS.slice(0, 3);

  return (
    <section className="py-20 bg-brand-bg border-b border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Authentic Delivery Proof</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ivory tracking-tight">
              Verified Client Outcomes &amp; Feedback
            </h2>
            <p className="text-sm sm:text-base text-titanium max-w-2xl">
              Direct feedback from founders, CTOs, and engineering leaders who have partnered with Abin S Chandran across SaaS MVPs, fintech engines, and mobile products.
            </p>
          </div>

          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan hover:text-cyan-light transition-colors shrink-0"
          >
            <span>View All Client Reviews &amp; Milestones</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredReviews.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl border border-white/10 bg-brand-surface p-6 sm:p-8 flex flex-col justify-between hover:border-cyan/30 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-base font-bold text-ivory">{review.role}</h3>
                    <span className="text-[11px] font-mono text-slate-400 block">{review.companyContext}</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan bg-cyan/10 px-2 py-0.5 rounded-full border border-cyan/30">
                    {review.projectDomain}
                  </span>
                </div>

                <div className="relative pl-4 border-l-2 border-cyan/40">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic line-clamp-5">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-2 mt-4">
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{review.keyOutcome}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{review.location}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
