"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { KonamiEasterEgg } from "@/components/ui/KonamiEasterEgg";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

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
        <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
        
        <main className="flex-grow">{children}</main>

        <Footer />

        {/* Floating Mobile Sticky WhatsApp CTA & Global Modals */}
        <WhatsAppButton variant="floating" />
        
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
        />
        <KonamiEasterEgg />
      </div>
    </SmoothScrollProvider>
  );
};
