"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Command, Terminal, FileText, Cpu, Briefcase, User, Sparkles, Layers, BookOpen } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Overview", href: "/", icon: Cpu },
    { name: "Services", href: "/services", icon: Layers },
    { name: "Projects", href: "/projects", icon: Briefcase },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "About", href: "/about", icon: User },
    { name: "Contact CLI", href: "/contact", icon: Terminal },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0D10]/85 backdrop-blur-xl border-b border-obsidian-border shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-copper to-amber-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Ident */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-obsidian-surface border border-obsidian-border flex items-center justify-center group-hover:border-copper/60 transition-colors shadow-inner">
            <span className="font-mono font-bold text-copper group-hover:text-white transition-colors text-sm">
              ASC
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-ivory group-hover:text-copper transition-colors">
              Abin S Chandran
            </span>
            <span className="text-[11px] font-mono text-titanium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Freelance Developer &amp; Architect
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-obsidian-surface/80 p-1.5 rounded-full border border-obsidian-border/80 shadow-lg backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-copper text-white shadow-md shadow-copper/20"
                    : "text-titanium hover:text-ivory hover:bg-obsidian-card"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Command Palette & CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCommandPalette}
            aria-label="Open Command Palette (Cmd + K)"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-obsidian-surface border border-obsidian-border text-titanium hover:text-ivory hover:border-copper/50 transition-all text-xs font-mono group"
            title="Open Command Palette (Cmd + K)"
          >
            <Command className="w-3.5 h-3.5 text-copper group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-obsidian-bg rounded border border-obsidian-border text-titanium group-hover:text-copper font-mono">
              ⌘K
            </kbd>
          </button>

          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-copper to-copper-dark hover:from-copper-light hover:to-copper text-white text-xs font-semibold shadow-lg shadow-copper/20 hover:shadow-copper/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start a Project</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
