import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConversionCtaSection } from "@/components/cta/ConversionCtaSection";
import { BlogCard } from "@/components/blog/BlogCard";
import { Calendar, Clock, ArrowLeft, Tag, Share2, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Abin S Chandran",
    };
  }

  return {
    title: `${post.title} | Abin S Chandran Tech Blog`,
    description: post.excerpt,
    keywords: post.seoKeywords,
    alternates: {
      canonical: `https://www.abinschandran.in/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://www.abinschandran.in/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ["https://www.abinschandran.in"],
      images: [
        {
          url: post.coverImage || "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@abinschandran",
      images: [post.coverImage || "/og-image.png"],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="pt-28 pb-16 min-h-screen bg-obsidian-bg">
      <JsonLd
        type="BlogPosting"
        articleData={{
          title: post.title,
          description: post.excerpt,
          url: `https://www.abinschandran.in/blog/${post.slug}`,
          datePublished: post.date,
          authorName: post.author.name,
          image: post.coverImage ? `https://www.abinschandran.in${post.coverImage}` : undefined,
          keywords: post.seoKeywords,
        }}
      />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: "https://www.abinschandran.in" },
          { name: "Blog", item: "https://www.abinschandran.in/blog" },
          { name: post.title, item: `https://www.abinschandran.in/blog/${post.slug}` },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-copper hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Articles</span>
        </Link>

        {/* Header Metadata */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-mono">
              {post.category}
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

          <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-titanium text-base sm:text-lg leading-relaxed font-sans border-l-2 border-copper pl-4 py-1 italic">
            {post.subtitle}
          </p>

          {/* Author Metadata */}
          <div className="flex items-center justify-between pt-4 border-t border-obsidian-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-obsidian-surface border border-obsidian-border flex items-center justify-center font-mono font-bold text-copper text-sm">
                ASC
              </div>
              <div>
                <div className="text-sm font-semibold text-ivory">{post.author.name}</div>
                <div className="text-xs text-titanium font-mono">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-titanium font-mono hidden sm:inline">Share Article</span>
              <div className="p-2 rounded-lg bg-obsidian-surface border border-obsidian-border text-copper hover:text-white transition-colors cursor-pointer">
                <Share2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Article Content */}
        <div className="bg-obsidian-surface/60 border border-obsidian-border rounded-2xl p-6 sm:p-10 shadow-2xl mb-12">
          <ArticleContent content={post.content} />

          {/* Tags */}
          <div className="pt-8 mt-8 border-t border-obsidian-border flex flex-wrap items-center gap-2">
            <span className="text-xs text-titanium font-mono mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-copper" />
              Topics:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded bg-obsidian-bg border border-obsidian-border text-titanium text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 mb-12">
            <h3 className="text-xl font-bold text-ivory flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-copper" />
              <span>Related Technical Articles</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <BlogCard key={rel.slug} post={rel} />
              ))}
            </div>
          </div>
        )}

        <ConversionCtaSection />
      </div>
    </div>
  );
}
