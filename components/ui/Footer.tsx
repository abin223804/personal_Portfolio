"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowUpRight, Terminal, ShieldCheck, Cpu, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const [utcTime, setUtcTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().replace("GMT", "UTC"));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-brand-bg border-t border-white/[0.08] relative overflow-hidden pt-16 pb-12">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/[0.08]">
          {/* Column 1: Brand & Positioning */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-obsidian-card border border-white/[0.08] flex items-center justify-center p-1 overflow-hidden shadow-inner">
                <Image
                  src="/logo.webp"
                  alt="Abin S Chandran Logo"
                  width={32}
                  height={32}
                  unoptimized
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-semibold text-ivory text-base tracking-tight">
                Abin S Chandran
              </span>
            </div>
            <p className="text-titanium text-xs leading-relaxed">
              Freelance Full-Stack Software Developer &amp; Solution Architect based in Kerala, India. Engineering custom web applications, Node.js REST APIs, Next.js SaaS platforms, and performance optimizations for startups and global businesses.
            </p>
            <div className="flex flex-col gap-2 text-xs text-titanium font-mono pt-2">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                99.99% Architecture SLA
              </span>
              <span className="flex items-center gap-1 text-ivory">
                <MapPin className="w-3.5 h-3.5 text-cyan" />
                Kerala, India · Remote Worldwide
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-ivory">
              Services &amp; Work
            </h4>
            <ul aria-label="Footer navigation links" className="space-y-2 text-xs text-titanium">
              <li>
                <a
                  href="https://crm.abinschandran.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live CRM SaaS Platform</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <Link href="/hire-web-developer" className="text-cyan hover:text-white font-semibold transition-colors flex items-center gap-1">
                  <span>Hire Web Developer</span>
                  <span className="text-[10px] text-cyan">★</span>
                </Link>
              </li>
              <li>
                <Link href="/services/ai-integration-rag-development" className="text-violet hover:text-violet-light font-semibold transition-colors">
                  AI &amp; RAG Development
                </Link>
              </li>
              <li>
                <Link href="/services/performance-optimization" className="hover:text-cyan transition-colors">
                  Performance &amp; Core Web Vitals
                </Link>
              </li>
              <li>
                <Link href="/services/react-nextjs-development" className="hover:text-cyan transition-colors">
                  React &amp; Next.js 15
                </Link>
              </li>
              <li>
                <Link href="/services/flutter-development" className="hover:text-cyan transition-colors">
                  Flutter Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cyan transition-colors">
                  Case Studies &amp; Verifiable Proof
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan transition-colors">
                  Engineering Tech Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Kerala & Integrations */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-ivory">
              Kerala &amp; Integrations
            </h4>
            <ul className="space-y-2 text-xs text-titanium">
              <li>
                <Link href="/freelance-software-developer-kerala" className="hover:text-cyan transition-colors font-medium text-slate-200">
                  Kerala Software Developer Hub
                </Link>
              </li>
              <li>
                <Link href="/freelance-software-developer-kollam" className="hover:text-cyan transition-colors">
                  Kollam District Services
                </Link>
              </li>
              <li>
                <Link href="/freelance-software-developer-karunagappally" className="hover:text-cyan transition-colors">
                  Karunagappally Taluk Hub
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-cyan transition-colors font-medium text-cyan">
                  Third-Party Integrations ➔
                </Link>
              </li>
              <li>
                <Link href="/integrations/stripe" className="hover:text-cyan transition-colors pl-2 border-l border-white/10 text-slate-400">
                  Stripe SaaS Billing
                </Link>
              </li>
              <li>
                <Link href="/integrations/razorpay" className="hover:text-cyan transition-colors pl-2 border-l border-white/10 text-slate-400">
                  Razorpay &amp; UPI
                </Link>
              </li>
              <li>
                <Link href="/integrations/whatsapp-business-api" className="hover:text-cyan transition-colors pl-2 border-l border-white/10 text-slate-400">
                  WhatsApp Business API
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-amber-400 hover:text-amber-300 font-medium transition-colors flex items-center gap-1 pt-1">
                  <span>★ Client Reviews &amp; Outcomes</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-ivory">
              Connect &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs text-titanium">
              <li>
                <a
                  href="https://github.com/abin223804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-titanium/60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abinschandran/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Network</span>
                  <ArrowUpRight className="w-3 h-3 text-titanium/60" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:abinschandran1@gmail.com"
                  className="hover:text-cyan transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan" />
                  <span>abinschandran1@gmail.com</span>
                </a>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-cyan transition-colors flex items-center gap-1.5 font-mono text-[11px]">
                  <span>sitemap.xml</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-titanium-muted text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Abin S Chandran. Freelance Software Development Services.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>UTC: {utcTime || "Syncing..."}</span>
            </span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span>Kerala, India · Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
