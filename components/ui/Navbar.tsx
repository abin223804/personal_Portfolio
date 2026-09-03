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
  ShieldCheck,
  Globe
} from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu on pathname change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

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
        scrolled || mobileMenuOpen
          ? "bg-[#090B10]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      {/* Scroll Progress Bar with subtle Cyan to Violet Gradient */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan via-cyan-light to-violet transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Ident */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-obsidian-card border border-white/[0.08] flex items-center justify-center p-1 group-hover:border-cyan/60 group-hover:shadow-[0_0_15px_rgba(85,214,255,0.25)] transition-all shadow-inner overflow-hidden relative">
            <Image
              src="/logo.webp"
              alt="Abin S Chandran Logo"
              width={40}
              height={40}
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
              Freelance Developer &amp; Architect
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-obsidian-card/80 p-1.5 rounded-full border border-white/[0.08] shadow-lg backdrop-blur-md">
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

        {/* Action Controls & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            aria-label="Open Command Palette (Cmd + K)"
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-obsidian-card border border-white/[0.08] text-titanium hover:text-ivory hover:border-cyan/40 transition-all text-xs font-mono group"
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

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-obsidian-card border border-white/[0.08] text-titanium hover:text-ivory hover:border-cyan/50 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-cyan" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-brand-bg/98 backdrop-blur-2xl border-b border-white/[0.08] overflow-y-auto px-4 py-6 flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-6">
            {/* Navigation List */}
            <nav aria-label="Mobile Navigation" className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-cyan/15 text-cyan border border-cyan/30 font-bold"
                        : "text-titanium hover:text-ivory hover:bg-obsidian-card"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? "bg-cyan text-brand-bg" : "bg-obsidian-surface text-titanium"}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{item.name}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 ${isActive ? "text-cyan" : "text-titanium-muted"}`} />
                  </Link>
                );
              })}
            </nav>

            {/* Quick Conversion CTA Bar */}
            <div className="pt-4 border-t border-white/[0.08] space-y-3">
              <Link
                href="/hire-web-developer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-cyan hover:bg-cyan-light text-brand-bg text-xs font-extrabold font-mono tracking-wide shadow-lg shadow-cyan/25 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>Hire Web Developer</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-obsidian-card border border-white/[0.08] text-ivory text-xs font-mono transition-colors"
              >
                <Terminal className="w-4 h-4 text-cyan" />
                <span>Interactive CLI Shell</span>
              </Link>
            </div>
          </div>

          {/* Drawer Footer Status */}
          <div className="pt-6 border-t border-white/[0.08] text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-titanium-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Q3/Q4 Projects · Kerala, India</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

