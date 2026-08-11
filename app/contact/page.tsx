import React from "react";
import type { Metadata } from "next";
import { InteractiveTerminal } from "@/components/terminal/InteractiveTerminal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Mail, MapPin, Clock, CheckCircle2, Globe, MessageSquare, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Hire Freelance Full-Stack Developer | Contact Abin S Chandran",
  description:
    "Get in touch with Abin S Chandran — Freelance Software Developer & Solution Architect based in Kerala, India. Available for custom web development, Node.js APIs, Next.js apps, and remote consulting worldwide.",
  alternates: {
    canonical: "https://www.abinschandran.in/contact",
  },
  openGraph: {
    title: "Hire Freelance Full-Stack Developer | Contact Abin S Chandran",
    description:
      "Start your custom software project with Abin S Chandran. Email direct or interact with the UNIX command line terminal.",
    url: "https://www.abinschandran.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-obsidian-bg">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: "https://www.abinschandran.in" },
          { name: "Contact", item: "https://www.abinschandran.in/contact" },
        ]}
      />

      {/* SEO Hero Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header */}
        <div className="bg-obsidian-surface border border-obsidian-border rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Available for New Projects</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory tracking-tight leading-tight">
            Hire a Freelance Software Developer
            <span className="block text-copper mt-1">Let&apos;s Build Something Together</span>
          </h1>

          <p className="text-titanium text-sm sm:text-base leading-relaxed max-w-3xl font-sans">
            I&apos;m <strong className="text-ivory">Abin S Chandran</strong>, a Freelance Software Developer &amp; Solution Architect based in <strong className="text-ivory">Kerala, India</strong>, working with clients across India and worldwide. Whether you need a custom web application, a Flutter mobile app, a Node.js backend API, or a full SaaS platform — reach out and let&apos;s discuss your project.
          </p>

          {/* Contact Info Row */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="mailto:abinschandran1@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-copper hover:bg-copper/80 text-white text-xs font-mono font-bold shadow-lg shadow-copper/20 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              abinschandran1@gmail.com
            </a>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-obsidian-card border border-obsidian-border text-titanium text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-copper" />
              Kerala, India · Remote Worldwide
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-obsidian-card border border-obsidian-border text-titanium text-xs font-mono">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              Responds within 24 hours
            </div>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="p-5 rounded-2xl bg-obsidian-surface border border-obsidian-border space-y-3">
            <Globe className="w-5 h-5 text-copper" />
            <h2 className="text-sm font-bold text-ivory font-mono">Remote & On-Site</h2>
            <p className="text-xs text-titanium font-sans leading-relaxed">
              Available for fully remote freelance projects worldwide — India, US, UK, Europe, Australia, and the Middle East.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-obsidian-surface border border-obsidian-border space-y-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h2 className="text-sm font-bold text-ivory font-mono">What to Expect</h2>
            <ul className="text-xs text-titanium font-sans space-y-1.5">
              <li className="flex items-center gap-1.5"><span className="text-copper">→</span> Initial discovery call within 24 hrs</li>
              <li className="flex items-center gap-1.5"><span className="text-copper">→</span> Detailed project scope & roadmap</li>
              <li className="flex items-center gap-1.5"><span className="text-copper">→</span> Milestone-based delivery & billing</li>
              <li className="flex items-center gap-1.5"><span className="text-copper">→</span> Regular GitHub & progress updates</li>
            </ul>
          </div>
          <div className="p-5 rounded-2xl bg-obsidian-surface border border-obsidian-border space-y-3">
            <Terminal className="w-5 h-5 text-copper" />
            <h2 className="text-sm font-bold text-ivory font-mono">Interactive Terminal</h2>
            <p className="text-xs text-titanium font-sans leading-relaxed">
              Try the CLI terminal below — type <code className="text-copper font-mono">help</code> to see available commands and explore my work interactively.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Terminal */}
      <InteractiveTerminal />
    </div>
  );
}
