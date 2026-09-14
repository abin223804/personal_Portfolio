"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { KonamiEasterEgg } from "@/components/ui/KonamiEasterEgg";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { FloatingContactCapsule } from "@/components/ui/FloatingContactCapsule";
import { MobileBottomNav } from "@/components/ui/MobileBottomNav";
import { MobileMenuSheet } from "@/components/ui/MobileMenuSheet";

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col justify-between relative">
        <Navbar 
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />
        
        {/* Main Content with bottom padding clearance on mobile for bottom navigation */}
        <main className="flex-grow pb-[calc(4.85rem+env(safe-area-inset-bottom,0px))] md:pb-0">
          {children}
        </main>

        <Footer />

        {/* Global Floating Quick-Contact Capsule (Positioned above bottom nav on mobile) */}
        <FloatingContactCapsule />

        {/* Native Mobile Bottom Navigation Bar (Fixed on mobile, hidden on desktop) */}
        <MobileBottomNav 
          onOpenMenu={() => setIsMobileMenuOpen((prev) => !prev)}
          isMenuOpen={isMobileMenuOpen}
        />

        {/* Native Mobile Secondary Menu Bottom Sheet */}
        <MobileMenuSheet
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          onOpenCommandPalette={() => {
            setIsMobileMenuOpen(false);
            setIsCommandPaletteOpen(true);
          }}
        />
        
        {/* Command Palette / Search Dialog */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
        />
        <KonamiEasterEgg />
      </div>
    </SmoothScrollProvider>
  );
};
