"use client";

import React from "react";
import Link from "next/link";
import { Clock, Calendar, ArrowUpRight, Tag, BookOpen } from "lucide-react";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  if (featured) {
    return (
      <div className="relative group bg-obsidian-card border border-white/[0.08] hover:border-cyan/40 hover:bg-brand-elevated rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-2xl overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan/5 rounded-full blur-3xl group-hover:bg-cyan/10 transition-all pointer-events-none" />

        <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between relative z-10">
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan/15 border border-cyan/30 text-cyan text-xs font-mono font-bold flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Featured Engineering Article
              </span>
              <span className="text-xs text-titanium-muted font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyan" />
                {post.date}
              </span>
              <span className="text-xs text-titanium-muted font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-cyan" />
                {post.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-ivory tracking-tight group-hover:text-cyan transition-colors leading-tight">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="text-titanium text-sm sm:text-base leading-relaxed font-sans">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-obsidian-surface border border-white/[0.08] text-titanium text-[11px] font-mono flex items-center gap-1"
                >
                  <Tag className="w-3 h-3 text-cyan" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 lg:flex-col lg:items-end justify-between pt-4 lg:pt-0 border-t lg:border-t-0 border-white/[0.08]">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan hover:bg-cyan-light text-brand-bg text-xs font-extrabold shadow-lg shadow-cyan/20 transition-all transform group-hover:translate-x-1"
            >
              <span>Read Full Article</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="group bg-obsidian-card border border-white/[0.08] hover:border-cyan/40 hover:bg-brand-elevated rounded-xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl relative overflow-hidden">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-titanium font-mono">
          <span className="px-2.5 py-0.5 rounded-full bg-obsidian-surface border border-white/[0.08] text-cyan text-[11px] font-bold">
            {post.category}
          </span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-titanium-muted">
              <Calendar className="w-3 h-3 text-cyan" />
              {post.date}
            </span>
            <span className="flex items-center gap-1 text-titanium-muted">
              <Clock className="w-3 h-3 text-cyan" />
              {post.readTime}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-ivory group-hover:text-cyan transition-colors leading-snug">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-titanium text-xs leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="pt-5 mt-4 border-t border-white/[0.08] flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5 max-w-[75%]">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-obsidian-surface text-titanium text-[10px] font-mono border border-white/[0.08]"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="text-cyan group-hover:text-white transition-colors text-xs font-mono font-semibold flex items-center gap-1"
        >
          <span>Read</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
