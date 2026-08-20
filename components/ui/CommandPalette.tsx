"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, Briefcase, User, Terminal, ArrowRight, X, Cpu, Github, Linkedin, Sparkles, BookOpen } from "lucide-react";
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
    } else {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const actions = [
    { id: "crm-saas", title: "Launch Live CRM SaaS Platform (crm.abinschandran.in)", category: "Live SaaS Products", external: "https://crm.abinschandran.in/", icon: Sparkles },
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-obsidian-bg/80 backdrop-blur-xl transition-all animate-in fade-in duration-200">
      {/* Backdrop overlay */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-2xl bg-obsidian-surface border border-obsidian-border rounded-2xl shadow-2xl overflow-hidden z-10 font-sans"
        onKeyDown={handleKeyDown}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-obsidian-border bg-obsidian-card/50">
          <Search className="w-5 h-5 text-copper shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, project name, or route..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-ivory placeholder-titanium text-sm focus:outline-none font-medium"
          />
          <button
            onClick={onClose}
            aria-label="Close Command Palette"
            className="p-1 rounded-lg hover:bg-obsidian-border text-titanium hover:text-ivory transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-titanium text-xs font-mono">
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
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? "bg-copper/15 border border-copper/40 text-ivory"
                      : "text-titanium hover:bg-obsidian-card hover:text-ivory border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? "bg-copper text-white" : "bg-obsidian-card text-titanium"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-ivory">{item.title}</div>
                      <div className="text-[10px] font-mono text-titanium">{item.category}</div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-copper translate-x-1" : "text-titanium/40 opacity-0"
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-obsidian-card/80 border-t border-obsidian-border text-[11px] text-titanium font-mono">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 bg-obsidian-bg rounded border border-obsidian-border text-ivory">↑↓</kbd> navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-obsidian-bg rounded border border-obsidian-border text-ivory">↵</kbd> select
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-obsidian-bg rounded border border-obsidian-border text-ivory">ESC</kbd> close
            </span>
          </div>
          <span className="flex items-center gap-1 text-copper">
            <Sparkles className="w-3 h-3" /> Solution Architect CLI
          </span>
        </div>
      </div>
    </div>
  );
};
