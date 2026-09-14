"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  X, 
  ArrowRight, 
  ArrowUpRight, 
  Globe, 
  Sparkles, 
  User, 
  Layers, 
  Star, 
  FileText, 
  MapPin, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  MessageCircle,
  Terminal,
  ShieldCheck
} from "lucide-react";

interface MobileMenuSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCommandPalette: () => void;
}

export const MobileMenuSheet: React.FC<MobileMenuSheetProps> = ({
  isOpen,
  onClose,
  onOpenCommandPalette,
}) => {
  const pathname = usePathname();

  // Close sheet on route changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu-sheet"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 md:hidden flex flex-col justify-end"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-Up Bottom Sheet Panel */}
      <div className="relative z-10 w-full max-h-[88vh] flex flex-col bg-brand-bg/98 border-t border-white/[0.12] rounded-t-3xl shadow-[0_-12px_48px_rgba(0,0,0,0.9)] overflow-hidden animate-sheet-up">
        {/* Grab Handle Header */}
        <div className="pt-3 pb-2 px-4 flex items-center justify-between border-b border-white/[0.06] bg-obsidian-card/60">
          <div className="flex-1 flex justify-center pl-6">
            <div className="w-12 h-1.5 rounded-full bg-white/20" />
          </div>
          <button
            id="mobile-menu-close-btn"
            onClick={onClose}
            aria-label="Close menu"
            className="w-8 h-8 rounded-full bg-obsidian-surface border border-white/[0.08] flex items-center justify-center text-titanium hover:text-ivory active:scale-95 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Sheet Content */}
        <div className="overflow-y-auto px-4 py-4 space-y-5 pb-[calc(5rem+env(safe-area-inset-bottom,1rem))]">
          {/* Featured Commercial Action Card */}
          <Link
            href="/hire-web-developer"
            onClick={onClose}
            className="block p-4 rounded-2xl bg-gradient-to-br from-cyan/20 via-obsidian-card to-violet/10 border border-cyan/40 shadow-lg shadow-cyan/10 active:scale-[0.99] transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan text-brand-bg text-[10px] font-mono font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>Commercial Hire</span>
              </span>
              <ArrowRight className="w-4 h-4 text-cyan" />
            </div>
            <h3 className="text-base font-bold text-ivory tracking-tight">Hire Web Developer &amp; Architect</h3>
            <p className="text-xs text-titanium mt-1 leading-relaxed">
              Direct partnership, transparent fixed-scope or bi-weekly sprints, and 100% code IP handover.
            </p>
          </Link>

          {/* Live SaaS Platform Callout */}
          <a
            href="https://crm.abinschandran.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl bg-obsidian-card border border-emerald-500/30 hover:border-emerald-400/50 shadow-md active:scale-[0.99] transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div>
                <div className="text-xs font-bold text-ivory font-mono flex items-center gap-1.5">
                  <span>Live CRM SaaS Platform</span>
                  <span className="text-[10px] text-emerald-400 font-normal">Active</span>
                </div>
                <div className="text-[11px] text-titanium-muted font-mono">crm.abinschandran.in</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </a>

          {/* Secondary Exploration Links */}
          <div className="space-y-1 pt-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-titanium-muted px-2 pb-1 font-semibold">
              Explore Portfolio &amp; Proof
            </div>

            <Link
              href="/about"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-obsidian-card text-xs font-semibold text-ivory transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-obsidian-surface flex items-center justify-center text-cyan">
                  <User className="w-4 h-4" />
                </div>
                <span>About &amp; Architecture Philosophy</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-titanium-muted" />
            </Link>

            <Link
              href="/reviews"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-obsidian-card text-xs font-semibold text-ivory transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-obsidian-surface flex items-center justify-center text-amber-400">
                  <Star className="w-4 h-4" />
                </div>
                <span>Client Reviews &amp; Verifiable Milestones</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-titanium-muted" />
            </Link>

            <Link
              href="/integrations"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-obsidian-card text-xs font-semibold text-ivory transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-obsidian-surface flex items-center justify-center text-violet">
                  <Layers className="w-4 h-4" />
                </div>
                <span>Third-Party Integrations (Stripe, UPI, Maps)</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-titanium-muted" />
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-obsidian-card text-xs font-semibold text-ivory transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-obsidian-surface flex items-center justify-center text-cyan">
                  <Terminal className="w-4 h-4" />
                </div>
                <span>Interactive UNIX CLI Terminal</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-titanium-muted" />
            </Link>
          </div>

          {/* Kerala Statewide & District Hubs */}
          <div className="pt-2 border-t border-white/[0.08] space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-titanium-muted px-2 pb-1 font-semibold flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-cyan" />
              <span>Kerala Development Hubs</span>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              <Link
                href="/freelance-software-developer-kerala"
                onClick={onClose}
                className="px-3 py-2 rounded-lg bg-obsidian-surface/60 hover:bg-obsidian-card border border-white/[0.04] text-[11px] font-mono text-titanium hover:text-ivory transition-colors flex items-center justify-between"
              >
                <span>Kerala Statewide Services</span>
                <ArrowRight className="w-3 h-3 text-cyan" />
              </Link>
              <div className="grid grid-cols-3 gap-1.5">
                <Link
                  href="/freelance-software-developer-kochi"
                  onClick={onClose}
                  className="px-2 py-2 rounded-lg bg-obsidian-surface/60 hover:bg-obsidian-card border border-white/[0.04] text-[10px] font-mono text-cyan hover:text-ivory transition-colors text-center truncate"
                >
                  Kochi / Infopark
                </Link>
                <Link
                  href="/freelance-software-developer-kollam"
                  onClick={onClose}
                  className="px-2 py-2 rounded-lg bg-obsidian-surface/60 hover:bg-obsidian-card border border-white/[0.04] text-[10px] font-mono text-titanium hover:text-ivory transition-colors text-center truncate"
                >
                  Kollam
                </Link>
                <Link
                  href="/freelance-software-developer-karunagappally"
                  onClick={onClose}
                  className="px-2 py-2 rounded-lg bg-obsidian-surface/60 hover:bg-obsidian-card border border-white/[0.04] text-[10px] font-mono text-titanium hover:text-ivory transition-colors text-center truncate"
                >
                  Karunagappally
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Connect Actions Grid */}
          <div className="pt-2 border-t border-white/[0.08] space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-titanium-muted px-2 font-semibold">
              Direct Channels
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/918086223804?text=Hi%20Abin,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-600/90 text-white text-xs font-mono font-bold shadow-md active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+918086223804"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-cyan/20 border border-cyan/40 text-cyan text-xs font-mono font-bold active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
            </div>

            <div className="flex items-center justify-between gap-2 pt-1">
              <a
                href="mailto:abinschandran1@gmail.com"
                className="flex-1 flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-obsidian-surface border border-white/[0.08] text-[11px] font-mono text-titanium hover:text-ivory transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan" />
                <span className="truncate">Email</span>
              </a>
              <a
                href="https://github.com/abin223804"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2.5 rounded-xl bg-obsidian-surface border border-white/[0.08] text-titanium hover:text-ivory transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/abinschandran/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2.5 rounded-xl bg-obsidian-surface border border-white/[0.08] text-titanium hover:text-ivory transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Availability Status */}
          <div className="pt-2 text-center text-xs font-mono text-titanium-muted flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Q3/Q4 Projects · Kerala, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};
