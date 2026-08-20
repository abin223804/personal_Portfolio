"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
    <footer className="bg-obsidian-bg border-t border-obsidian-border/80 relative overflow-hidden pt-16 pb-12">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-copper/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-obsidian-border/60">
          {/* Column 1: Brand & Positioning */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-obsidian-surface border border-obsidian-border flex items-center justify-center">
                <Cpu className="w-4 h-4 text-copper" />
              </div>
              <span className="font-semibold text-ivory text-base tracking-tight">
                Abin S Chandran
              </span>
            </div>
            <p className="text-titanium text-xs leading-relaxed max-w-md">
              Freelance Full-Stack Software Developer &amp; Solution Architect based in Kerala, India. Engineering custom web applications, Node.js REST APIs, Next.js SaaS platforms, and performance optimizations for startups and global businesses.
            </p>
            <div className="flex items-center gap-4 text-xs text-titanium font-mono pt-2">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                99.99% Architecture SLA
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-ivory">
                <MapPin className="w-3.5 h-3.5 text-copper" />
                Kerala, India &amp; Remote Worldwide
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-ivory">
              Navigation &amp; Services
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
                <Link href="/" className="hover:text-copper transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-copper transition-colors">
                  Freelance Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-copper transition-colors">
                  Case Studies &amp; Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-copper transition-colors">
                  Engineering Tech Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-copper transition-colors">
                  About &amp; Philosophy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-copper transition-colors">
                  Contact &amp; CLI Shell
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Socials */}
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
                  className="hover:text-copper transition-colors flex items-center gap-1.5"
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
                  className="hover:text-copper transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Network</span>
                  <ArrowUpRight className="w-3 h-3 text-titanium/60" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:abinschandran1@gmail.com"
                  className="hover:text-copper transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-copper" />
                  <span>abinschandran1@gmail.com</span>
                </a>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-copper transition-colors flex items-center gap-1.5 font-mono text-[11px]">
                  <span>sitemap.xml</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-titanium">
          <div>
            © {new Date().getFullYear()} Abin S Chandran. Freelance Software Development Services.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>UTC: {utcTime || "Syncing..."}</span>
            </span>
            <span className="hidden sm:inline text-obsidian-border">|</span>
            <span className="hidden sm:inline">Location: Kerala, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
