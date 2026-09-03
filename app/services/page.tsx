import React from "react";
import type { Metadata } from "next";
import { ServicesSection } from "@/components/services/ServicesSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConversionCtaSection } from "@/components/cta/ConversionCtaSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Freelance Software Development Services | Abin S Chandran",
  description:
    "Explore freelance full-stack web application development, Node.js backend engineering, React/Next.js frontend development, REST APIs, SaaS platforms, and admin dashboards by Abin S Chandran in Kerala, India.",
  alternates: {
    canonical: "https://www.abinschandran.in/services",
  },
  openGraph: {
    title: "Freelance Software Development Services | Abin S Chandran",
    description:
      "Custom web application development, Node.js APIs, Next.js SaaS platforms, and frontend engineering services for startups and global businesses.",
    url: "https://www.abinschandran.in/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-brand-bg">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: "https://www.abinschandran.in" },
          { name: "Services", item: "https://www.abinschandran.in/services" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="bg-obsidian-card border border-white/[0.08] rounded-2xl p-8 shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>Commercial Offerings</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory tracking-tight">
            Freelance Software Development Services
          </h1>
          <p className="text-titanium text-sm sm:text-base leading-relaxed max-w-3xl font-sans">
            I help startups, entrepreneurs, and businesses transform ideas into production-grade digital products. From custom full-stack web applications and Node.js REST APIs to Next.js SaaS products and database performance optimization, I deliver scalable, secure software solutions.
          </p>
        </div>
      </div>

      <ServicesSection />
      <FaqSection />
      <ConversionCtaSection />
    </div>
  );
}
