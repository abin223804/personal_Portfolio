import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abin S Chandran | Freelance Software Developer & Solution Architect",
    short_name: "Abin Portfolio",
    description:
      "Official portfolio of Abin S Chandran — Freelance Software Developer & Solution Architect in Kerala, India. Specializing in AI-Powered Web Apps, Node.js APIs, Next.js SaaS, and Flutter Mobile Apps.",
    start_url: "/",
    display: "standalone",
    background_color: "#090B10",
    theme_color: "#090B10",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
