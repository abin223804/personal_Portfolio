import React from "react";
import type { Metadata } from "next";
import { InteractiveTerminal } from "@/components/terminal/InteractiveTerminal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Mail, MapPin, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Hire Freelance Full-Stack Developer | Contact Abin S Chandran",
  description:
    "Get in touch with Abin S Chandran — Freelance Software Developer & Solution Architect based in Kerala, India. Available for custom web development, Node.js APIs, Next.js apps, and remote consulting worldwide.",
  alternates: {
    canonical: "https://abnschandran.in/contact",
  },
  openGraph: {
    title: "Hire Freelance Full-Stack Developer | Contact Abin S Chandran",
    description:
      "Start your custom software project with Abin S Chandran. Email direct or interact with the UNIX command line terminal.",
    url: "https://abnschandran.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-obsidian-bg">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: "https://abnschandran.in" },
          { name: "Contact", item: "https://abnschandran.in/contact" },
        ]}
      />

      <InteractiveTerminal />
    </div>
  );
}
