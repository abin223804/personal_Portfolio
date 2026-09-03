"use client";

import React from "react";

interface WhatsAppButtonProps {
  variant?: "primary" | "secondary" | "outline" | "floating";
  className?: string;
  size?: "sm" | "md" | "lg";
  message?: string;
  glare?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  variant = "primary",
  className = "",
  size = "md",
  message = "Hi Abin, I found your portfolio and I'd like to discuss a software development project.",
  glare = false,
}) => {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918086223804";
  const cleanNumber = rawNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  const WhatsAppIcon = () => (
    <svg
      className="w-4 h-4 shrink-0 fill-current"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.982L2 22l5.176-1.348c1.455.795 3.097 1.213 4.835 1.214h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.038-5.174-2.925-7.06A9.923 9.923 0 0012.012 2zm.004 18.172h-.003a8.27 8.27 0 01-4.22-1.157l-.303-.18-3.137.817.836-3.048-.198-.313a8.261 8.261 0 01-1.267-4.308c.002-4.568 3.719-8.284 8.29-8.284 2.213 0 4.292.862 5.857 2.428a8.232 8.232 0 012.424 5.86c-.002 4.569-3.719 8.285-8.279 8.285zm4.542-6.203c-.249-.125-1.472-.727-1.7-.81-.228-.083-.394-.125-.56.125-.166.249-.643.81-.788.976-.145.166-.29.187-.539.062-.249-.125-1.052-.388-2.003-1.236-.74-.66-1.239-1.475-1.385-1.724-.145-.249-.015-.384.109-.508.112-.112.249-.29.373-.435.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.435-.062-.125-.56-1.349-.767-1.847-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.249-.871.851-.871 2.076 0 1.225.892 2.408 1.016 2.574.125.166 1.756 2.681 4.254 3.76.594.256 1.058.409 1.42.524.597.19 1.141.163 1.57.099.479-.071 1.472-.602 1.679-1.183.208-.581.208-1.079.145-1.183-.063-.104-.228-.166-.477-.291z" />
    </svg>
  );

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuss your software development project on WhatsApp"
        className="fixed bottom-5 right-5 z-40 md:hidden flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white shadow-2xl shadow-emerald-950/60 border border-emerald-400/40 transition-all font-mono text-xs font-bold"
      >
        <WhatsAppIcon />
        <span>Discuss Project</span>
      </a>
    );
  }

  const baseStyles =
    "relative overflow-hidden group inline-flex items-center justify-center gap-2.5 rounded-xl font-mono text-xs font-bold transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-500/50";

  const sizeStyles = {
    sm: "px-4 py-2.5",
    md: "px-5 py-3.5",
    lg: "px-6 py-4",
  }[size];

  const variantStyles = {
    primary:
      "bg-emerald-700 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-950/30 border border-emerald-500/40",
    secondary:
      "bg-obsidian-card hover:bg-obsidian-hover text-emerald-400 border border-emerald-500/40 hover:border-emerald-400 shadow-md",
    outline:
      "bg-transparent hover:bg-emerald-500/10 text-emerald-400 border border-emerald-500/50 hover:border-emerald-400",
  }[variant];

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuss your software development project on WhatsApp"
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {/* Lightweight Glare Passing (Clickable Tempting Effect) - Controlled via glare prop */}
      {glare && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-xl"
        >
          <span className="absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/35 to-transparent animate-glare-sweep group-hover:via-white/50" />
        </span>
      )}

      <span className="relative z-10 flex items-center gap-2.5">
        <WhatsAppIcon />
        <span>Discuss Your Project</span>
      </span>
    </a>
  );
};
