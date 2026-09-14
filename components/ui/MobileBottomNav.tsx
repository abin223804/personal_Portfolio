"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cpu, Layers, Briefcase, BookOpen, Menu } from "lucide-react";

interface MobileBottomNavProps {
  className?: string;
  onOpenMenu?: () => void;
  isMenuOpen?: boolean;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ 
  className = "",
  onOpenMenu,
  isMenuOpen = false,
}) => {
  const pathname = usePathname();

  const primaryItems = [
    {
      name: "Overview",
      href: "/",
      icon: Cpu,
      isActive: pathname === "/",
    },
    {
      name: "Services",
      href: "/services",
      icon: Layers,
      isActive: pathname.startsWith("/services"),
    },
    {
      name: "Projects",
      href: "/projects",
      icon: Briefcase,
      isActive: pathname.startsWith("/projects"),
    },
    {
      name: "Blog",
      href: "/blog",
      icon: BookOpen,
      isActive: pathname.startsWith("/blog"),
    },
  ];

  // "More" tab is active if sheet is open or user is browsing secondary destinations
  const isMoreActive = isMenuOpen || [
    "/hire-web-developer",
    "/about",
    "/reviews",
    "/integrations",
    "/contact",
  ].some((prefix) => pathname === prefix || pathname.startsWith(prefix + "/")) || pathname.startsWith("/freelance-software-developer");

  return (
    <nav
      id="mobile-bottom-nav"
      aria-label="Mobile Bottom Navigation"
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090B10]/92 backdrop-blur-2xl border-t border-white/[0.08] shadow-[0_-8px_32px_rgba(0,0,0,0.8)] transition-all duration-300 pb-[env(safe-area-inset-bottom,0.25rem)] ${className}`}
    >
      <div className="grid grid-cols-5 items-center justify-items-stretch px-1 pt-1.5 pb-1 max-w-lg mx-auto">
        {/* First 4 Primary Navigation Links */}
        {primaryItems.map((item) => {
          const Icon = item.icon;
          const active = item.isActive && !isMenuOpen;

          return (
            <Link
              key={item.name}
              id={`mobile-nav-${item.name.toLowerCase()}`}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`relative flex flex-col items-center justify-center py-1.5 px-1 min-h-[48px] rounded-xl transition-all duration-200 select-none active:scale-95 group ${
                active ? "text-cyan" : "text-titanium-muted hover:text-ivory"
              }`}
            >
              {/* Active Tab Ambient Pill Glow */}
              {active && (
                <span
                  className="absolute inset-x-2 -top-1.5 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent rounded-full shadow-[0_0_8px_rgba(85,214,255,0.8)]"
                  aria-hidden="true"
                />
              )}

              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  active
                    ? "bg-cyan/15 text-cyan border border-cyan/40 shadow-[0_0_12px_rgba(85,214,255,0.25)]"
                    : "text-titanium group-hover:text-ivory"
                }`}
              >
                <Icon className={`w-4 h-4 transition-transform ${active ? "scale-105" : ""}`} />
              </div>

              <span
                className={`text-[10px] font-mono tracking-tight transition-colors mt-0.5 truncate max-w-full ${
                  active ? "font-bold text-cyan" : "font-medium text-titanium"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}

        {/* 5th Tab: Native Bottom Drawer Trigger (More / Menu) */}
        <button
          type="button"
          id="mobile-nav-more"
          onClick={onOpenMenu}
          aria-label="Open more navigation options and tools"
          aria-expanded={isMenuOpen}
          className={`relative flex flex-col items-center justify-center py-1.5 px-1 min-h-[48px] rounded-xl transition-all duration-200 select-none active:scale-95 group cursor-pointer ${
            isMoreActive ? "text-cyan" : "text-titanium-muted hover:text-ivory"
          }`}
        >
          {/* Active Tab Ambient Pill Glow */}
          {isMoreActive && (
            <span
              className="absolute inset-x-2 -top-1.5 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent rounded-full shadow-[0_0_8px_rgba(85,214,255,0.8)]"
              aria-hidden="true"
            />
          )}

          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
              isMoreActive
                ? "bg-cyan/15 text-cyan border border-cyan/40 shadow-[0_0_12px_rgba(85,214,255,0.25)]"
                : "text-titanium group-hover:text-ivory"
            }`}
          >
            <Menu className={`w-4 h-4 transition-transform ${isMoreActive ? "scale-105" : ""}`} />
          </div>

          <span
            className={`text-[10px] font-mono tracking-tight transition-colors mt-0.5 truncate max-w-full ${
              isMoreActive ? "font-bold text-cyan" : "font-medium text-titanium"
            }`}
          >
            More
          </span>
        </button>
      </div>
    </nav>
  );
};
