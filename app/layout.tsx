import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { AppShell } from "./AppShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abinschandran.in"),
  title: {
    default: "Freelance Software Developer & Solution Architect | Abin S Chandran",
    template: "%s | Abin S Chandran - Freelance Software Developer",
  },
  description:
    "Freelance Software Developer & Solution Architect based in Kerala, India, serving clients worldwide. Specializing in Web & Mobile App Development with Node.js, React, Next.js, Express, Flutter, PostgreSQL, REST APIs, and SaaS platforms.",
  keywords: [
    "Abin S Chandran",
    "freelance software developer",
    "freelance full stack developer",
    "freelance Flutter developer",
    "freelance mobile app developer",
    "Flutter app developer India",
    "freelance software developer India",
    "freelance full stack developer India",
    "full stack developer Kerala",
    "freelance Flutter developer Kerala",
    "software developer Kerala",
    "freelance Node.js developer",
    "freelance React developer",
    "freelance Next.js developer",
    "Node.js developer for hire",
    "React developer for hire",
    "Next.js developer for hire",
    "Flutter developer for hire",
    "custom web application development",
    "custom mobile app development",
    "SaaS development India",
    "REST API development",
    "admin dashboard development",
    "Solution Architect"
  ],
  authors: [{ name: "Abin S Chandran", url: "https://www.abinschandran.in" }],
  creator: "Abin S Chandran",
  publisher: "Abin S Chandran",
  alternates: {
    canonical: "https://www.abinschandran.in",
  },
  icons: {
    icon: "/photo.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "yPUHnASR6mtR_Ec7qgY5KyWyvIKDvAaKVE5gAiIKREw",
  },
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
    url: "https://www.abinschandran.in",
    siteName: "Abin S Chandran - Freelance Software Developer",
    title: "Freelance Software Developer & Solution Architect | Abin S Chandran",
    description:
      "Hire Abin S Chandran — Freelance Software Developer & Solution Architect in Kerala, India. Building custom web & Flutter mobile applications, SaaS platforms, Node.js APIs, and React/Next.js frontends.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abin S Chandran - Freelance Software Developer & Solution Architect | Kerala, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Software Developer & Solution Architect | Abin S Chandran",
    description:
      "Building high-performance custom web & Flutter mobile applications, Node.js backends, React/Next.js frontends, and SaaS platforms.",
    creator: "@abinschandran",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <JsonLd type="Person" />
        <JsonLd type="ProfessionalService" />
      </head>
      <body className="bg-obsidian-bg text-ivory antialiased selection:bg-copper/30 selection:text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
