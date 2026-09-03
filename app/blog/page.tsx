import React from "react";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConversionCtaSection } from "@/components/cta/ConversionCtaSection";
import { BookOpen, Search, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Flutter & Next.js Engineering Blog | Architecture Guides | Abin S Chandran",
  description:
    "In-depth Flutter app architecture guides, Google Maps integration tutorials, Node.js REST API scaling, Next.js 15 SaaS development articles by Abin S Chandran — freelance software developer in Kerala, India.",
  keywords: [
    "flutter app architecture guide",
    "flutter google maps integration",
    "high performance maps in flutter",
    "Node.js REST API scaling",
    "Next.js 15 SaaS architecture",
    "next js developers kerala",
    "flutter developer kerala blog",
    "freelance software developer blog India",
    "software engineering case studies",
    "flutter clean architecture blog"
  ],
  alternates: {
    canonical: "https://www.abinschandran.in/blog",
  },
  openGraph: {
    title: "Flutter & Next.js Engineering Blog | Abin S Chandran",
    description:
      "Deep technical guides on Flutter Google Maps, Clean Architecture, Node.js REST APIs, Next.js 15 SaaS, and production mobile & web development by Abin S Chandran, Kerala.",
    url: "https://www.abinschandran.in/blog",
  },
};

export default function BlogIndexPage() {
  const featuredPost = BLOG_POSTS.find((post) => post.featured) || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter((post) => post.slug !== featuredPost.slug);

  return (
    <div className="pt-28 pb-16 min-h-screen bg-brand-bg">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: "https://www.abinschandran.in" },
          { name: "Blog", item: "https://www.abinschandran.in/blog" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Header Hero Banner */}
        <div className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-8 shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono">
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
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
          <h2 className="text-xl font-bold text-ivory flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan" />
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
