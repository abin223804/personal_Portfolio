"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, Copy, Check } from "lucide-react";

interface FloatingContactCapsuleProps {
  phoneNumber?: string;
  displayPhoneNumber?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
  className?: string;
}

export const FloatingContactCapsule: React.FC<FloatingContactCapsuleProps> = ({
  phoneNumber = "+918086223804",
  displayPhoneNumber = "+91 80862 23804",
  whatsappNumber = "918086223804",
  whatsappMessage = "Hi Abin, I found your portfolio and I'd like to discuss a software development project.",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isCallHovered, setIsCallHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(phoneNumber);
    } catch {
      /* noop */
    }
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2200);
  };

  const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      className={`${className} shrink-0 fill-current`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.982L2 22l5.176-1.348c1.455.795 3.097 1.213 4.835 1.214h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.038-5.174-2.925-7.06A9.923 9.923 0 0012.012 2zm.004 18.172h-.003a8.27 8.27 0 01-4.22-1.157l-.303-.18-3.137.817.836-3.048-.198-.313a8.261 8.261 0 01-1.267-4.308c.002-4.568 3.719-8.284 8.29-8.284 2.213 0 4.292.862 5.857 2.428a8.232 8.232 0 012.424 5.86c-.002 4.569-3.719 8.285-8.279 8.285zm4.542-6.203c-.249-.125-1.472-.727-1.7-.81-.228-.083-.394-.125-.56.125-.166.249-.643.81-.788.976-.145.166-.29.187-.539.062-.249-.125-1.052-.388-2.003-1.236-.74-.66-1.239-1.475-1.385-1.724-.145-.249-.015-.384.109-.508.112-.112.249-.29.373-.435.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.435-.062-.125-.56-1.349-.767-1.847-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.249-.871.851-.871 2.076 0 1.225.892 2.408 1.016 2.574.125.166 1.756 2.681 4.254 3.76.594.256 1.058.409 1.42.524.597.19 1.141.163 1.57.099.479-.071 1.472-.602 1.679-1.183.208-.581.208-1.079.145-1.183-.063-.104-.228-.166-.477-.291z" />
    </svg>
  );

  // Speed dial items — ordered bottom→top (first = closest to main FAB)
  const actions = [
    {
      id: "mobile-speed-dial-whatsapp",
      label: "WhatsApp",
      sublabel: "Chat now",
      href: whatsappUrl,
      target: "_blank" as const,
      rel: "noopener noreferrer",
      icon: <WhatsAppIcon className="w-5 h-5" />,
      fabClass:
        "bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white shadow-[0_4px_20px_rgba(37,211,102,0.5)] border border-white/20",
      chipClass:
        "bg-[#25D366]/90 text-white border border-white/15 shadow-[0_2px_12px_rgba(37,211,102,0.35)]",
    },
    {
      id: "mobile-speed-dial-call",
      label: "Call directly",
      sublabel: displayPhoneNumber,
      href: `tel:${phoneNumber}`,
      target: undefined,
      rel: undefined,
      icon: <Phone className="w-5 h-5 shrink-0" />,
      fabClass:
        "bg-[#0D1117] hover:bg-cyan/15 active:bg-cyan/25 text-cyan shadow-[0_4px_18px_rgba(85,214,255,0.2)] border border-cyan/40",
      chipClass:
        "bg-[#0D1117]/95 text-cyan border border-cyan/25 shadow-[0_2px_10px_rgba(85,214,255,0.15)]",
    },
  ];

  return (
    <>
      {/* ── MOBILE: Material Design 3 Speed Dial FAB ── */}

      {/* Backdrop scrim — dims page content behind the speed dial */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="speed-dial-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-[39] bg-black/35 backdrop-blur-[2px]"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Speed Dial container */}
      <div
        ref={containerRef}
        className="md:hidden fixed bottom-[calc(4.85rem+env(safe-area-inset-bottom,0px))] right-4 z-40 flex flex-col items-end"
      >
        {/* Action items — animate in above the main FAB */}
        {/*
          SEO-CRITICAL: These action rows are ALWAYS rendered in the DOM (never conditionally
          mounted/unmounted). CSS opacity + transform + pointer-events control visibility so
          Googlebot discovers the tel: and wa.me href anchors in the initial SSR HTML.
        */}
        <div
          role="menu"
          aria-label="Contact options"
          aria-hidden={!isOpen}
          className="flex flex-col items-end gap-3 mb-4"
          style={{
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? "visible" : "hidden",
            transform: isOpen ? "translateY(0) scale(1)" : "translateY(12px) scale(0.92)",
            transition: "opacity 0.2s ease, transform 0.22s cubic-bezier(0.34,1.56,0.64,1), visibility 0.2s",
            pointerEvents: isOpen ? "auto" : "none",
          }}
        >
          {actions.map((action) => (
            <div key={action.id} className="flex items-center gap-3">
              {/* Label chip */}
              <div
                className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-lg whitespace-nowrap ${action.chipClass}`}
              >
                <span className="font-bold">{action.label}</span>
              </div>

              {/* Mini-FAB — always in DOM for SEO crawlability */}
              <a
                id={action.id}
                href={action.href}
                target={action.target}
                rel={action.rel}
                role="menuitem"
                aria-label={action.label}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-center w-[52px] h-[52px] rounded-full active:scale-90 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#090B10] select-none ${action.fabClass}`}
              >
                {action.icon}
              </a>
            </div>
          ))}
        </div>

        {/* Main FAB — toggle button */}
        <motion.button
          id="mobile-contact-fab"
          type="button"
          aria-label={isOpen ? "Close contact options" : "Contact Abin — Call or WhatsApp"}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          onClick={() => setIsOpen((prev) => !prev)}
          whileTap={{ scale: 0.88 }}
          className={`relative flex items-center justify-center w-[58px] h-[58px] rounded-full border transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#090B10] select-none ${
            isOpen
              ? "bg-[#1a1f2e] border-white/20 shadow-[0_8px_28px_rgba(0,0,0,0.55)]"
              : "bg-[#25D366] hover:bg-[#20ba59] border-white/20 shadow-[0_8px_28px_rgba(37,211,102,0.5)]"
          }`}
        >
          {/* Pulsing availability beacon — only when closed */}
          <AnimatePresence>
            {!isOpen && (
              <motion.span
                key="beacon"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 pointer-events-none"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-[#090B10]" />
              </motion.span>
            )}
          </AnimatePresence>

          {/* Icon — WhatsApp ↔ X with spring rotation */}
          <AnimatePresence mode="wait">
            <motion.span
              key={isOpen ? "close-icon" : "open-icon"}
              initial={{ rotate: -30, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 30, opacity: 0, scale: 0.6 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={isOpen ? "text-white/80" : "text-white"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <WhatsAppIcon className="w-6 h-6" />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── DESKTOP: Glassmorphic Floating Quick-Contact Capsule Dock ── */}
      <aside
        aria-label="Direct contact options"
        className={`hidden md:flex fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-6 z-30 items-center gap-1.5 p-1 rounded-full bg-brand-bg/90 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80 transition-all duration-300 hover:border-white/25 ${className}`}
      >
        {/* Number tooltip / copy popover on hover */}
        <AnimatePresence>
          {isCallHovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute bottom-full mb-2.5 right-0 flex flex-col items-end gap-1.5 p-2.5 rounded-2xl bg-brand-secondary/95 border border-cyan/40 backdrop-blur-xl shadow-2xl shadow-black/90 text-xs font-mono min-w-[210px] pointer-events-auto"
              onMouseEnter={() => setIsCallHovered(true)}
              onMouseLeave={() => setIsCallHovered(false)}
            >
              <div className="flex items-center justify-between w-full gap-2 text-ivory font-bold border-b border-white/10 pb-1.5">
                <span className="flex items-center gap-1.5 text-cyan">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Direct Dial</span>
                </span>
                <span className="text-[11px] text-slate-400">IST</span>
              </div>
              <div className="w-full text-right font-bold text-slate-200 tracking-wide text-xs">
                {displayPhoneNumber}
              </div>
              <div className="flex items-center justify-between w-full pt-1">
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-[10px] font-bold text-cyan hover:underline"
                >
                  Click to Call ↗
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 hover:bg-white/10 text-[10px] text-titanium hover:text-ivory border border-white/10 transition-colors"
                  aria-label="Copy phone number to clipboard"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-cyan" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call button */}
        <motion.a
          href={`tel:${phoneNumber}`}
          aria-label={`Call Abin S Chandran at ${displayPhoneNumber}`}
          onMouseEnter={() => setIsCallHovered(true)}
          onMouseLeave={() => setIsCallHovered(false)}
          onFocus={() => setIsCallHovered(true)}
          onBlur={() => setIsCallHovered(false)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center sm:px-3.5 sm:py-2.5 rounded-full bg-cyan/15 hover:bg-cyan/25 text-cyan border border-cyan-400/40 shadow-lg shadow-cyan-950/30 transition-all font-mono text-xs font-bold focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:ring-offset-2 focus:ring-offset-brand-bg"
        >
          <Phone className="w-4 h-4 shrink-0 text-cyan group-hover:rotate-12 transition-transform duration-200" />
          <span className="ml-2 text-ivory group-hover:text-cyan transition-colors">
            Call
          </span>
        </motion.a>

        {/* WhatsApp button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discuss project with Abin S Chandran on WhatsApp"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center sm:px-3.5 sm:py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-400/50 shadow-lg shadow-emerald-950/50 transition-all font-mono text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-brand-bg"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span className="ml-2 text-white">WhatsApp</span>
        </motion.a>
      </aside>
    </>
  );
};

