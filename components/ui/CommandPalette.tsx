"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, Briefcase, User, Terminal, ArrowRight, X, Cpu, Github, Linkedin, Sparkles, BookOpen, Layers, Globe, MapPin } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { BLOG_POSTS } from "@/data/blog";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      setQuery("");
      setSelectedIndex(0);
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const actions = [
    { id: "hire", title: "Hire Freelance Web Developer & Solution Architect", category: "Commercial Engagement", href: "/hire-web-developer", icon: Sparkles },
    { id: "crm-saas", title: "Launch Live CRM SaaS Platform (crm.abinschandran.in)", category: "Live SaaS Products", external: "https://crm.abinschandran.in/", icon: Sparkles },
    { id: "kochi", title: "Freelance Software Developer Kochi & Infopark", category: "Regional Hubs", href: "/freelance-software-developer-kochi", icon: MapPin },
    { id: "kerala", title: "Kerala Statewide Software Engineering Hub", category: "Regional Hubs", href: "/freelance-software-developer-kerala", icon: MapPin },
    { id: "kollam", title: "Kollam District Software Developer", category: "Regional Hubs", href: "/freelance-software-developer-kollam", icon: MapPin },
    { id: "karunagappally", title: "Karunagappally Software Developer Hub", category: "Regional Hubs", href: "/freelance-software-developer-karunagappally", icon: MapPin },
    { id: "services", title: "Browse Commercial Services Catalog", category: "Navigation", href: "/services", icon: Layers },
    { id: "home", title: "Go to System Overview (Home)", category: "Navigation", href: "/", icon: Cpu },
    { id: "projects", title: "Browse All Projects & Case Studies", category: "Navigation", href: "/projects", icon: Briefcase },
    { id: "blog", title: "Read Tech Blog & Engineering Guides", category: "Navigation", href: "/blog", icon: BookOpen },
    { id: "about", title: "Read Architecture Philosophy", category: "Navigation", href: "/about", icon: User },
    { id: "contact", title: "Open Interactive CLI Terminal", category: "Navigation", href: "/contact", icon: Terminal },
    ...BLOG_POSTS.map((b) => ({
      id: `blog-${b.slug}`,
      title: `Article: ${b.title}`,
      category: "Tech Blog",
      href: `/blog/${b.slug}`,
      icon: BookOpen,
    })),
    ...PROJECTS.map((p) => ({
      id: `project-${p.slug}`,
      title: `Case Study: ${p.title}`,
      category: "Case Studies",
      href: `/projects/${p.slug}`,
      icon: Briefcase,
    })),
    {
      id: "github",
      title: "Open GitHub Profile",
      category: "External Links",
      external: "https://github.com/abin223804",
      icon: Github,
    },
    {
      id: "linkedin",
      title: "Connect on LinkedIn",
      category: "External Links",
      external: "https://www.linkedin.com/in/abinschandran/",
      icon: Linkedin,
    },
  ];

  const filtered = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: typeof actions[0]) => {
    onClose();
    if (item.external) {
      window.open(item.external, "_blank");
    } else if (item.href) {
      router.push(item.href);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col sm:items-center sm:justify-start sm:pt-20 bg-obsidian-bg/85 backdrop-blur-2xl transition-all animate-in fade-in duration-200">
      {/* Backdrop overlay for desktop click-away */}
      <div className="hidden sm:block fixed inset-0" onClick={onClose} />

      {/* Modal / Native Sheet Content */}
      <div
        className="relative w-full sm:max-w-2xl h-full sm:h-auto sm:max-h-[80vh] bg-brand-bg sm:bg-obsidian-card border-b sm:border border-white/[0.08] sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 font-sans"
        onKeyDown={handleKeyDown}
      >
        {/* Search Header - Native App-style with safe area support */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08] bg-obsidian-card/80 pt-[max(0.85rem,env(safe-area-inset-top,0.85rem))] sm:pt-3.5">
          <Search className="w-5 h-5 text-cyan shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search commands, projects, articles..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-ivory placeholder-titanium text-[16px] sm:text-sm focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              aria-label="Clear search input"
              className="p-1 text-titanium hover:text-ivory text-xs"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close Command Palette"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-obsidian-surface hover:bg-obsidian-hover text-titanium hover:text-ivory transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 sm:flex-initial max-h-none sm:max-h-96 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-titanium text-xs font-mono">
              No matching commands or case studies found.
            </div>
          ) : (
            filtered.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-3.5 py-3 sm:py-2.5 min-h-[48px] rounded-xl cursor-pointer transition-all select-none active:scale-[0.99] ${
                    isSelected
                      ? "bg-cyan/15 border border-cyan/40 text-ivory shadow-sm"
                      : "text-titanium hover:bg-obsidian-hover hover:text-ivory border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected ? "bg-cyan text-brand-bg" : "bg-obsidian-surface text-titanium"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs sm:text-xs font-semibold text-ivory truncate">{item.title}</div>
                      <div className="text-[10px] font-mono text-titanium-muted">{item.category}</div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? "text-cyan translate-x-1" : "text-titanium/40 opacity-40 sm:opacity-0"
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Desktop Footer Shortcuts */}
        <div className="hidden sm:flex items-center justify-between px-4 py-2.5 bg-brand-bg/80 border-t border-white/[0.08] text-[11px] text-titanium-muted font-mono">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 bg-obsidian-surface rounded border border-white/[0.08] text-ivory">↑↓</kbd> navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-obsidian-surface rounded border border-white/[0.08] text-ivory">↵</kbd> select
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-obsidian-surface rounded border border-white/[0.08] text-ivory">ESC</kbd> close
            </span>
          </div>
          <span className="flex items-center gap-1 text-cyan font-semibold">
            <Sparkles className="w-3 h-3" /> Architecture CLI
          </span>
        </div>

        {/* Mobile Safe Area Bottom Spacer */}
        <div className="sm:hidden pb-[env(safe-area-inset-bottom,0.5rem)] bg-brand-bg" />
      </div>
    </div>
  );
};
