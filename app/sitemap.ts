import { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { SERVICES } from "@/data/services";
import { BLOG_POSTS } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.abinschandran.in";
  const now = new Date();

  const projectUrls = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date("2025-07-01"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const serviceUrls = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date("2025-08-01"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogUrls = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1.0,
      images: [
        `${baseUrl}/abin-s-chandran.png`,
        `${baseUrl}/photo.png`,
        `${baseUrl}/og-image.png`,
      ],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: [
        `${baseUrl}/abin-s-chandran.png`,
        `${baseUrl}/photo.png`,
      ],
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
      images: [`${baseUrl}/og-image.png`],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2025-08-01"),
      changeFrequency: "monthly" as const,
      priority: 0.95,
      images: [`${baseUrl}/og-image.png`],
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date("2025-07-01"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: [`${baseUrl}/og-image.png`],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2025-08-10"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${baseUrl}/abin-s-chandran.png`],
    },
    ...blogUrls,
    ...serviceUrls,
    ...projectUrls,
  ];
}
