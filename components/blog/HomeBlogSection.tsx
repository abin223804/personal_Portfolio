"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export const HomeBlogSection: React.FC = () => {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Engineering Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory tracking-tight">
              Featured Technical Articles &amp; Case Studies
            </h2>
            <p className="text-titanium text-sm sm:text-base leading-relaxed max-w-2xl">
              Deep-dive architectural breakdowns on Flutter performance, low-latency Node.js REST APIs, and Next.js 15 App Router engineering.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-obsidian-card border border-white/[0.08] text-cyan hover:text-white hover:border-cyan/40 hover:bg-brand-elevated transition-all text-xs font-mono font-semibold"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
