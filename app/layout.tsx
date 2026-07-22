import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { AppShell } from "./AppShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://abinschandran.com"),
  title: {
    default: "Abin S Chandran | Solution Architect & Full Stack Developer",
    template: "%s | Abin S Chandran - Solution Architect",
  },
  description:
    "Official portfolio of Abin S Chandran — Solution Architect & Full Stack Developer with 5+ years experience engineering multi-region cloud platforms, sub-10ms microservices, and zero-downtime distributed systems.",
  keywords: [
    "Solution Architect",
    "Abin S Chandran",
    "Full Stack Developer",
    "Backend Engineer",
    "Cloud Solutions Engineer",
    "Microservices Architecture",
    "Distributed Systems",
    "Next.js Architect",
    "Go Engineer",
    "AWS Certified Architect",
    "Kafka Event Sourcing",
    "System Design Specialist"
  ],
  authors: [{ name: "Abin S Chandran" }],
  creator: "Abin S Chandran",
  publisher: "Abin S Chandran",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abinschandran.com",
    siteName: "Abin S Chandran Portfolio",
    title: "Abin S Chandran | Solution Architect & Full Stack Engineer",
    description:
      "Engineering resilient cloud architectures, high-throughput backend microservices, and ultra-fast web platforms.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Abin S Chandran Solution Architect Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abin S Chandran | Solution Architect & Full Stack Developer",
    description:
      "Designing intelligent digital architectures, high-concurrency microservices, and enterprise web solutions.",
    creator: "@abinschandran",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd type="Person" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian-bg text-ivory antialiased selection:bg-copper/30 selection:text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
