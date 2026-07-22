import React from "react";
import type { Metadata } from "next";
import { InteractiveTerminal } from "@/components/terminal/InteractiveTerminal";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Consult Architect & CLI Terminal",
  description:
    "Connect with Solution Architect Abin S Chandran via the interactive UNIX command line shell or direct consultation form.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-obsidian-bg">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", item: "https://abinschandran.com" },
          { name: "Contact", item: "https://abinschandran.com/contact" },
        ]}
      />

      <InteractiveTerminal />
    </div>
  );
}
