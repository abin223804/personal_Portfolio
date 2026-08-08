import React from "react";
import { SERVICES } from "@/data/services";
import { FAQS } from "@/data/faq";

interface JsonLdProps {
  type?: "Person" | "CreativeWork" | "WebSite" | "BreadcrumbList" | "ProfessionalService" | "Service" | "FAQPage";
  projectData?: {
    title: string;
    description: string;
    url: string;
    image?: string;
  };
  serviceData?: {
    title: string;
    description: string;
    url: string;
  };
  breadcrumbs?: { name: string; item: string }[];
}

export const JsonLd: React.FC<JsonLdProps> = ({ type = "Person", projectData, serviceData, breadcrumbs }) => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abin S Chandran",
    "jobTitle": "Freelance Software Developer & Solution Architect",
    "alternateName": ["Abin Chandran", "Abin S C", "abnschandran", "abischandran"],
    "description": "Freelance Software Developer & Solution Architect in Kerala, India. Specializing in Web & Mobile App Development with Flutter, Node.js, Express, React, Next.js, REST APIs, SaaS platforms, and custom software for startups and global clients.",
    "url": "https://abnschandran.in",
    "sameAs": [
      "https://github.com/abin223804",
      "https://www.linkedin.com/in/abinschandran/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Kerala",
      "addressCountry": "India"
    },
    "knowsAbout": [
      "Freelance Software Development",
      "Full-Stack Web Development",
      "Flutter Mobile App Development",
      "Dart & Cross-Platform iOS/Android Apps",
      "Node.js Backend Architecture",
      "React.js & Next.js Frontend Development",
      "RESTful API Design & Integration",
      "SaaS Application Engineering",
      "Admin Dashboard Development",
      "PostgreSQL & MongoDB",
      "Solution Architecture",
      "Performance Optimization"
    ]
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Abin S Chandran - Freelance Web & Mobile Software Development Services",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
    "url": "https://abnschandran.in",
    "telephone": "+918086223804",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.8505,
      "longitude": 76.2711
    },
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "AdministrativeArea", "name": "Kerala" },
      { "@type": "Place", "name": "Worldwide Remote" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Freelance Web & Mobile Software Development Services",
      "itemListElement": SERVICES.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.shortDescription,
          "url": `https://abnschandran.in/services/${service.slug}`
        }
      }))
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Abin S Chandran - Freelance Software Developer",
    "url": "https://abnschandran.in",
    "publisher": {
      "@type": "Person",
      "name": "Abin S Chandran"
    }
  };

  if (type === "ProfessionalService") {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    );
  }

  if (type === "FAQPage") {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    );
  }

  if (type === "Service" && serviceData) {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceData.title,
      "description": serviceData.description,
      "url": serviceData.url,
      "provider": {
        "@type": "Person",
        "name": "Abin S Chandran",
        "jobTitle": "Freelance Software Developer",
        "url": "https://abnschandran.in"
      },
      "areaServed": ["Kerala", "India", "Worldwide Remote"]
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    );
  }

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
