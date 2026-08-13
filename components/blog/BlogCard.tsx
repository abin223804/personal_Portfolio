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
      <div className="relative group bg-obsidian-surface/90 border border-copper/40 hover:border-copper rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-2xl overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-80 h-80 bg-copper/10 rounded-full blur-3xl group-hover:bg-copper/20 transition-all pointer-events-none" />

        <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between relative z-10">
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-copper/20 border border-copper/50 text-copper text-xs font-mono font-semibold flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Featured Engineering Article
              </span>
              <span className="text-xs text-titanium font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-copper" />
                {post.date}
              </span>
              <span className="text-xs text-titanium font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-copper" />
                {post.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-ivory tracking-tight group-hover:text-copper transition-colors leading-tight">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="text-titanium text-sm sm:text-base leading-relaxed font-sans">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-obsidian-bg/80 border border-obsidian-border text-titanium text-[11px] font-mono flex items-center gap-1"
                >
                  <Tag className="w-3 h-3 text-copper/70" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 lg:flex-col lg:items-end justify-between pt-4 lg:pt-0 border-t lg:border-t-0 border-obsidian-border">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-copper hover:bg-copper-light text-white text-xs font-semibold shadow-lg shadow-copper/20 transition-all transform group-hover:translate-x-1"
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
    <article className="group bg-obsidian-surface/60 border border-obsidian-border hover:border-copper/50 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl relative overflow-hidden">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-titanium font-mono">
          <span className="px-2.5 py-0.5 rounded-full bg-obsidian-card border border-obsidian-border text-copper text-[11px]">
            {post.category}
          </span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-copper/70" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-copper/70" />
              {post.readTime}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-ivory group-hover:text-copper transition-colors leading-snug">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-titanium text-xs leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="pt-5 mt-4 border-t border-obsidian-border/60 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5 max-w-[75%]">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-obsidian-bg text-titanium/80 text-[10px] font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="text-copper group-hover:text-white transition-colors text-xs font-mono font-semibold flex items-center gap-1"
        >
          <span>Read</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
