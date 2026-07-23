import React from "react";

interface JsonLdProps {
  type?: "Person" | "CreativeWork" | "WebSite" | "BreadcrumbList";
  projectData?: {
    title: string;
    description: string;
    url: string;
    image?: string;
  };
  breadcrumbs?: { name: string; item: string }[];
}

export const JsonLd: React.FC<JsonLdProps> = ({ type = "Person", projectData, breadcrumbs }) => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abin S Chandran",
    "jobTitle": "Solution Architect",
    "alternateName": ["Abin Chandran", "Abin S C"],
    "description": "Solution Architect & Full Stack Developer with 5+ years of experience specializing in high-throughput cloud architectures, microservices, and enterprise platforms.",
    "url": "https://abinschandran.com",
    "sameAs": [
      "https://github.com/abin223804",
      "https://www.linkedin.com/in/abinschandran/"
    ],
    "knowsAbout": [
      "Solution Architecture",
      "System Design",
      "Microservices",
      "Node.js",
      "TypeScript",
      "Go (Golang)",
      "Next.js",
      "Amazon Web Services (AWS)",
      "Kubernetes",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "Vector Search & RAG Architecture"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Enterprise Cloud Architecture Consulting"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Abin S Chandran - Solution Architect & Full Stack Developer",
    "url": "https://abinschandran.com",
    "publisher": {
      "@type": "Person",
      "name": "Abin S Chandran"
    }
  };

  if (type === "CreativeWork" && projectData) {
    const projectSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      "name": projectData.title,
      "description": projectData.description,
      "url": projectData.url,
      "author": {
        "@type": "Person",
        "name": "Abin S Chandran"
      },
      "codeRepository": "https://github.com/abin223804"
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
    );
  }

  if (type === "BreadcrumbList" && breadcrumbs) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((b, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": b.name,
        "item": b.item
      }))
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};
