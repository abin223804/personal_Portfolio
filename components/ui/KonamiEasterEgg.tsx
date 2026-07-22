"use client";

import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { ShieldAlert, Cpu, Sparkles, X, Terminal } from "lucide-react";

export const KonamiEasterEgg: React.FC = () => {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let index = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === konamiCode[index].toLowerCase()) {
        index++;
        if (index === konamiCode.length) {
          setUnlocked(true);
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
            colors: ["#E06D53", "#F59E0B", "#10B981", "#8E9BAE"],
          });
          index = 0;
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!unlocked) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-bg/90 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-obsidian-surface border-2 border-copper rounded-2xl p-6 shadow-2xl overflow-hidden font-sans">
        {/* Animated Blueprint Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-copper/10 rounded-full blur-3xl" />

        <div className="flex items-center justify-between border-b border-obsidian-border pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-copper/20 border border-copper flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-copper animate-spin" />
            </div>
            <div>
              <h3 className="text-base font-bold text-ivory flex items-center gap-2">
                Secret Architecture Mode Unlocked!
              </h3>
              <p className="text-xs font-mono text-copper">
                Konami Code Code Sequence Verified: [↑ ↑ ↓ ↓ ← → ← → B A]
              </p>
            </div>
          </div>
          <button
            onClick={() => setUnlocked(false)}
            className="p-1 rounded-lg hover:bg-obsidian-border text-titanium hover:text-ivory"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs font-mono text-titanium">
          <div className="bg-obsidian-card p-4 rounded-xl border border-obsidian-border space-y-2">
            <div className="text-emerald-400 font-semibold flex items-center gap-2">
              <Terminal className="w-4 h-4" /> System Telemetry Diagnostic:
            </div>
            <pre className="text-[11px] text-ivory leading-relaxed overflow-x-auto">
{`[SYSTEM OK] - Abin S Chandran Architecture Core v5.2.0
[CLUSTER]   - Multi-Region Active-Active Mesh (AWS EKS + Envoy Proxy)
[LATENCY]   - P99 Routing: 7.8ms | Edge Cache Hit Rate: 99.4%
[SECURITY]  - Zero Trust mTLS Enabled | JWT Cryptography Active
[SLAs]      - Guaranteed 99.99% Availability Boundary`}
            </pre>
          </div>

          <p className="text-titanium text-xs leading-relaxed">
            You&apos;ve triggered the developer easter egg. As a Solution Architect, I build systems with hidden depth, strict boundaries, and extreme attention to detail.
          </p>

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => setUnlocked(false)}
              className="px-5 py-2 rounded-lg bg-copper text-white font-semibold text-xs hover:bg-copper-light transition-all shadow-lg shadow-copper/20"
            >
              Resume Standard Interface
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
