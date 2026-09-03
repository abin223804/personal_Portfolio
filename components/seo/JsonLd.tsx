import React from "react";
import { SERVICES } from "@/data/services";
import { FAQS } from "@/data/faq";

interface JsonLdProps {
  type?: "Person" | "CreativeWork" | "WebSite" | "BreadcrumbList" | "ProfessionalService" | "Service" | "FAQPage" | "BlogPosting" | "AboutPage" | "ProfilePage";
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
  articleData?: {
    title: string;
    description: string;
    url: string;
    datePublished: string;
    dateModified?: string;
    authorName: string;
    image?: string;
    keywords?: string[];
    wordCount?: number;
    articleSection?: string;
  };
  breadcrumbs?: { name: string; item: string }[];
}

export const JsonLd: React.FC<JsonLdProps> = ({ type = "Person", projectData, serviceData, articleData, breadcrumbs }) => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.abinschandran.in/#person",
    "name": "Abin S Chandran",
    "givenName": "Abin",
    "familyName": "Chandran",
    "additionalName": "S",
    "alternateName": [
      "Abin",
      "Abin S",
      "Abin Chandran",
      "Abin S Chandran",
      "Abin S C",
      "Abin S. Chandran",
      "Abin SC",
      "abinschandran",
      "abischandran",
      "Abin Software Developer",
      "Abin S Software Developer",
      "Abin S Chandran Software Developer",
      "Abin Freelance Developer"
    ],
    "disambiguatingDescription": "Abin (Abin S Chandran), Freelance Software Developer and Solution Architect in Kerala, India.",
    "jobTitle": "Freelance Software Developer & Solution Architect",
    "description": "Abin (Abin S Chandran) is a Freelance Software Developer & Solution Architect in Kerala, India. Specializing in AI-Powered Web Applications, Node.js REST APIs, Next.js SaaS platforms, Flutter Mobile Apps, and custom enterprise software.",
    "url": "https://www.abinschandran.in",
    "sameAs": [
      "https://github.com/abin223804",
      "https://www.linkedin.com/in/abinschandran/",
      "https://hashnode.com/@abinschandran",
      "https://medium.com/@abinschandran",
      "https://dev.to/abin223804"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Kerala",
      "addressCountry": "India"
    },
    "knowsAbout": [
      "Freelance Software Development",
      "AI-Powered Web Applications",
      "AI-Integrated Node.js REST APIs",
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
    ],
    "image": {
      "@type": "ImageObject",
      "@id": "https://www.abinschandran.in/#primaryimage",
      "url": "https://www.abinschandran.in/abin-s-chandran.png",
      "contentUrl": "https://www.abinschandran.in/abin-s-chandran.png",
      "caption": "Abin S Chandran (Abin, Abin S) - Freelance Software Developer & Solution Architect",
      "name": "Abin S Chandran - Freelance Software Developer Photo",
      "description": "Profile photo of Abin S Chandran (Abin, Abin S), Freelance Software Developer & Solution Architect based in Kerala, India.",
      "representativeOfPage": true,
      "width": 400,
      "height": 400
    },
    "mainEntityOfPage": "https://www.abinschandran.in"
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.abinschandran.in/#professionalService",
    "name": "Abin S Chandran - Freelance Web & Mobile Software Development Services",
    "provider": {
      "@type": "Person",
      "@id": "https://www.abinschandran.in/#person"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://www.abinschandran.in/og-image.png",
      "width": 1200,
      "height": 630
    },
    "url": "https://www.abinschandran.in",
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
          "url": `https://www.abinschandran.in/services/${service.slug}`
        }
      }))
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Abin S Chandran - Freelance Software Developer",
    "url": "https://www.abinschandran.in",
    "publisher": {
      "@type": "Person",
      "name": "Abin S Chandran"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.abinschandran.in/projects?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  if (type === "AboutPage" || type === "ProfilePage") {
    const aboutPageSchema = {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "name": "About Abin S Chandran | Freelance Software Developer in Kerala, India",
      "url": "https://www.abinschandran.in/about",
      "mainEntity": {
        "@type": "Person",
        "@id": "https://www.abinschandran.in/#person",
        "name": "Abin S Chandran",
        "givenName": "Abin",
        "familyName": "Chandran",
        "additionalName": "S",
        "alternateName": [
          "Abin",
          "Abin S",
          "Abin Chandran",
          "Abin S Chandran",
          "Abin S C",
          "Abin Software Developer",
          "Abin S Software Developer"
        ],
        "jobTitle": "Freelance Software Developer & Solution Architect",
        "description": "Freelance Software Developer & Solution Architect based in Kerala, India with 5+ years of experience building custom web applications, Node.js REST APIs, Next.js SaaS platforms, and Flutter mobile apps.",
        "url": "https://www.abinschandran.in",
        "image": {
          "@type": "ImageObject",
          "@id": "https://www.abinschandran.in/#primaryimage",
          "url": "https://www.abinschandran.in/abin-s-chandran.png",
          "contentUrl": "https://www.abinschandran.in/abin-s-chandran.png",
          "caption": "Abin S Chandran (Abin, Abin S) - Freelance Software Developer & Solution Architect",
          "name": "Abin S Chandran - Profile Photo",
          "description": "Profile photo of Abin S Chandran (Abin), Freelance Software Developer based in Kerala, India.",
          "representativeOfPage": true,
          "width": 400,
          "height": 400
        },
        "sameAs": [
          "https://github.com/abin223804",
          "https://www.linkedin.com/in/abinschandran/",
          "https://hashnode.com/@abinschandran",
          "https://medium.com/@abinschandran",
          "https://dev.to/abin223804"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Kerala",
          "addressCountry": "India"
        },
        "knowsAbout": [
          "Freelance Software Development",
          "AI-Powered Web Applications",
          "Node.js Backend Architecture",
          "React.js & Next.js 15 Frontend Development",
          "Flutter Mobile App Development",
          "PostgreSQL & MongoDB",
          "RESTful API Integration",
          "SaaS Application Architecture",
          "Solution Architecture"
        ]
      }
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
    );
  }

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
        "url": "https://www.abinschandran.in"
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

  if (type === "BlogPosting" && articleData) {
    const blogPostingSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": articleData.title,
      "description": articleData.description,
      "url": articleData.url,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": articleData.url
      },
      "datePublished": articleData.datePublished,
      "dateModified": articleData.dateModified || articleData.datePublished,
      "wordCount": articleData.wordCount,
      "articleSection": articleData.articleSection,
      "author": {
        "@type": "Person",
        "name": articleData.authorName,
        "url": "https://www.abinschandran.in",
        "sameAs": [
          "https://github.com/abin223804",
          "https://www.linkedin.com/in/abinschandran/"
        ]
      },
      "publisher": {
        "@type": "Person",
        "name": "Abin S Chandran",
        "url": "https://www.abinschandran.in",
        "image": {
          "@type": "ImageObject",
          "url": "https://www.abinschandran.in/abin-s-chandran.png",
          "width": 400,
          "height": 400
        }
      },
      "image": {
        "@type": "ImageObject",
        "url": articleData.image || "https://www.abinschandran.in/og-image.png",
        "width": 1200,
        "height": 630
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "article"]
      },
      "keywords": articleData.keywords ? articleData.keywords.join(", ") : undefined,
      "inLanguage": "en-US",
      "isAccessibleForFree": true
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
    );
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Abin S Chandran - Freelance Software Development & Solution Architecture",
    "url": "https://www.abinschandran.in",
    "logo": "https://www.abinschandran.in/logo.png",
    "sameAs": [
      "https://github.com/abin223804",
      "https://www.linkedin.com/in/abinschandran/",
      "https://hashnode.com/@abinschandran",
      "https://medium.com/@abinschandran",
      "https://dev.to/abin223804"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Kerala",
      "addressCountry": "India"
    }
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
};
