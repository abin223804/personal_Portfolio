import React from "react";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConversionCtaSection } from "@/components/cta/ConversionCtaSection";
import { BookOpen, Search, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Tech Blog & System Architecture Guides | Abin S Chandran",
  description:
    "Explore high-performance Flutter mobile app architecture guides, Node.js REST API scaling practices, Next.js 15 SaaS engineering, and full-stack software development articles by Abin S Chandran.",
  keywords: [
    "Abin S Chandran tech blog",
    "Flutter app architecture blog",
    "Node.js REST API scaling",
    "Next.js 15 SaaS architecture",
    "freelance software developer blog India",
    "software engineering case studies"
  ],
  alternates: {
    canonical: "https://www.abinschandran.in/blog",
  },
  openGraph: {
    title: "Engineering Tech Blog & System Architecture Guides | Abin S Chandran",
    description:
      "Deep technical guides on Flutter mobile development, Node.js REST API architecture, Next.js 15 SaaS platforms, and software scalability.",
    url: "https://www.abinschandran.in/blog",
  },
};

export default function BlogIndexPage() {
  const featuredPost = BLOG_POSTS.find((post) => post.featured) || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter((post) => post.slug !== featuredPost.slug);

  return (
    <div className="pt-28 pb-16 min-h-screen bg-obsidian-bg">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: "https://www.abinschandran.in" },
          { name: "Blog", item: "https://www.abinschandran.in/blog" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Header Hero Banner */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-8 shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Insights &amp; Architecture Guides</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory tracking-tight">
            Engineering Blog &amp; Case Studies
          </h1>
          <p className="text-titanium text-sm sm:text-base leading-relaxed max-w-3xl font-sans">
            In-depth engineering breakdown on cross-platform Flutter development, low-latency Node.js REST APIs, Next.js 15 App Router architecture, and production SaaS scaling strategies.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Banner */}
        {featuredPost && <BlogCard post={featuredPost} featured={true} />}

        {/* Category Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-obsidian-border">
          <h2 className="text-xl font-bold text-ivory flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-copper" />
            <span>Latest Technical Articles</span>
          </h2>
          <span className="text-xs font-mono text-titanium">
            Showing {BLOG_POSTS.length} Articles
          </span>
        </div>

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {regularPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <ConversionCtaSection />
      </div>
    </div>
  );
}
