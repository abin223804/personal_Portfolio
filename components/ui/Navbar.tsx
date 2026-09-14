"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Command, 
  Terminal, 
  Cpu, 
  Briefcase, 
  User, 
  Sparkles, 
  Layers, 
  BookOpen, 
  Menu, 
  X, 
  ArrowRight,
  ChevronLeft,
  Search,
  Globe
} from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenCommandPalette,
}) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
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

  // Determine contextual back button for sub-pages on mobile
  const getContextualBack = () => {
    if (pathname.startsWith("/projects/") && pathname !== "/projects") {
      return { href: "/projects", label: "Projects" };
    }
    if (pathname.startsWith("/services/") && pathname !== "/services") {
      return { href: "/services", label: "Services" };
    }
    if (pathname.startsWith("/blog/") && pathname !== "/blog") {
      return { href: "/blog", label: "Blog" };
    }
    if (pathname.startsWith("/integrations/") && pathname !== "/integrations") {
      return { href: "/integrations", label: "Integrations" };
    }
    if (pathname.startsWith("/freelance-software-developer-")) {
      return { href: "/", label: "Overview" };
    }
    if (["/hire-web-developer", "/about", "/reviews"].includes(pathname)) {
      return { href: "/", label: "Overview" };
    }
    return null;
  };

  const backAction = getContextualBack();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#090B10]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-2.5 sm:py-3"
          : "bg-[#090B10]/60 backdrop-blur-md md:bg-transparent py-3 sm:py-5 border-b border-white/[0.04] md:border-b-0"
      }`}
    >
      {/* Scroll Progress Bar with subtle Cyan to Violet Gradient */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan via-cyan-light to-violet transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Side Brand / Contextual Back (Mobile Native Switcher) */}
        <div className="flex items-center gap-2.5">
          {backAction ? (
            <div className="flex items-center gap-2 md:hidden">
              <Link
                href={backAction.href}
                aria-label={`Back to ${backAction.label}`}
                className="flex items-center gap-1 py-1.5 px-2.5 rounded-xl bg-obsidian-card border border-white/[0.08] text-cyan hover:text-white active:scale-95 transition-all shadow-sm"
              >
                <ChevronLeft className="w-4 h-4 text-cyan shrink-0" />
                <span className="font-semibold font-mono text-ivory text-xs truncate max-w-[110px]">
                  {backAction.label}
                </span>
              </Link>
            </div>
          ) : null}

          {/* Brand Identity (Always visible on desktop, visible on mobile when not deep in sub-pages) */}
          <Link
            href="/"
            className={`group flex items-center gap-2.5 sm:gap-3 shrink-0 ${
              backAction ? "hidden md:flex" : "flex"
            }`}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-obsidian-card border border-white/[0.08] flex items-center justify-center p-1 group-hover:border-cyan/60 group-hover:shadow-[0_0_15px_rgba(85,214,255,0.25)] transition-all shadow-inner overflow-hidden relative">
              <Image
                src="/logo.webp"
                alt="Abin S Chandran Logo"
                width={40}
                height={40}
                unoptimized
                priority
                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-ivory group-hover:text-cyan transition-colors">
                Abin S Chandran
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-titanium-muted flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                <span className="hidden xs:inline">Freelance </span>Software Architect
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-obsidian-card/80 p-1.5 rounded-full border border-white/[0.08] shadow-lg backdrop-blur-md"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-3.5 lg:px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-cyan text-brand-bg shadow-md shadow-cyan/20"
                    : "text-titanium hover:text-ivory hover:bg-obsidian-hover"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Mobile Quick Search Button */}
          <button
            id="mobile-top-search"
            onClick={onOpenCommandPalette}
            aria-label="Search and quick actions (Command Palette)"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-obsidian-card border border-white/[0.08] text-titanium hover:text-ivory hover:border-cyan/40 active:scale-95 transition-all shadow-sm"
          >
            <Search className="w-4 h-4 text-cyan" />
          </button>

          {/* Desktop Command Palette Button */}
          <button
            id="desktop-command-palette-btn"
            onClick={onOpenCommandPalette}
            aria-label="Open Command Palette (Cmd + K)"
            className="hidden md:flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-obsidian-card border border-white/[0.08] text-titanium hover:text-ivory hover:border-cyan/40 transition-all text-xs font-mono group"
            title="Open Command Palette (Cmd + K)"
          >
            <Command className="w-3.5 h-3.5 text-cyan group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-brand-bg rounded border border-white/[0.08] text-titanium-muted group-hover:text-cyan font-mono">
              ⌘K
            </kbd>
          </button>

          {/* Desktop Start a Project CTA */}
          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan hover:bg-cyan-light text-brand-bg text-xs font-bold shadow-lg shadow-cyan/20 hover:shadow-cyan/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start a Project</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
