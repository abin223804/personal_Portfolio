export interface ClientReview {
  id: string;
  clientTitle: string;
  role: string;
  companyContext: string;
  location: string;
  projectDomain: string;
  techStack: string[];
  engagementType: "Fixed-Scope Milestone" | "Dedicated Product Engineering" | "Architecture & Performance Audit";
  quote: string;
  keyOutcome: string;
  date: string;
  verifiedMilestone: string;
  anonymizationNote?: string;
}

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: "fintech-settlement",
    clientTitle: "Engineering Lead",
    role: "VP of Engineering",
    companyContext: "High-Volume Payments & Reconciliation Platform",
    location: "Bengaluru, India",
    projectDomain: "Fintech & Ledger Settlement",
    techStack: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    engagementType: "Dedicated Product Engineering",
    quote:
      "Abin re-engineered our daily reconciliation batch processor from the ground up. He implemented row-level pessimistic locking and idempotent ledger events that completely stopped duplicate ledger postings during bank network timeouts. Working directly with him saved us months of coordination overhead.",
    keyOutcome: "Zero ledger discrepancies across 25,000+ daily bank settlements; P95 batch runtime dropped by 78%.",
    date: "2025-11",
    verifiedMilestone: "Phase 4 Settlement Engine Production Rollout Signed Off",
    anonymizationNote: "Company name generalized under commercial banking non-disclosure agreement.",
  },
  {
    id: "ai-knowledge-mesh",
    clientTitle: "Founder & CEO",
    role: "Founder",
    companyContext: "Enterprise Compliance & Legal Document Intelligence",
    location: "Remote / Singapore",
    projectDomain: "AI / RAG & Document Intelligence",
    techStack: ["Next.js 15", "FastAPI", "pgvector", "OpenAI", "PostgreSQL"],
    engagementType: "Fixed-Scope Milestone",
    quote:
      "We needed a production RAG system that respected document-level access permissions. Abin designed a hybrid vector and keyword search pipeline in PostgreSQL using pgvector, complete with citation chunking and guardrails. He delivered clean code, thorough documentation, and met every milestone ahead of schedule.",
    keyOutcome: "Multi-tenant RAG search launched in 6 weeks with sub-800ms response latency and 100% RBAC permission enforcement.",
    date: "2026-02",
    verifiedMilestone: "Enterprise Pilot Deployment & Security Audit Passed",
    anonymizationNote: "Proprietary enterprise document schema protected under NDA.",
  },
  {
    id: "flutter-mobile-saas",
    clientTitle: "Product Director",
    role: "Director of Product",
    companyContext: "Field Operations & Logistics SaaS",
    location: "Kochi, Kerala",
    projectDomain: "Mobile App & Field Operations",
    techStack: ["Flutter", "Dart", "Node.js", "WebSockets", "Google Maps"],
    engagementType: "Fixed-Scope Milestone",
    quote:
      "Abin delivered our Flutter cross-platform mobile app for iOS and Android on an aggressive 8-week timeline. The offline-first SQLite sync engine he built allowed field technicians to log jobs in remote basements without cell signal and sync seamlessly once reconnected.",
    keyOutcome: "60fps native performance on budget Android devices and 99.8% offline sync success rate.",
    date: "2025-08",
    verifiedMilestone: "App Store & Google Play Production Releases Approved",
    anonymizationNote: "Client brand details omitted under client mutual confidentiality agreement.",
  },
  {
    id: "web-vitals-audit",
    clientTitle: "Chief Technology Officer",
    role: "CTO",
    companyContext: "D2C E-Commerce & Retail Marketplace",
    location: "Mumbai, India",
    projectDomain: "Next.js Core Web Vitals & Performance Audit",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel", "Lighthouse"],
    engagementType: "Architecture & Performance Audit",
    quote:
      "Our Next.js storefront was failing Google Core Web Vitals with an LCP of 4.2 seconds and severe layout shift on mobile. Abin conducted a rigorous audit, stripped out unused polyfills, optimized font loading, and brought our mobile LCP down to 1.1s. Our organic search impressions jumped within three weeks.",
    keyOutcome: "Mobile LCP improved from 4.2s to 1.1s; 100% pass rate on Google PageSpeed Insights.",
    date: "2026-01",
    verifiedMilestone: "Production Performance Remediation Deployed to Vercel",
  },
  {
    id: "cloud-gateway",
    clientTitle: "Co-Founder & Head of Product",
    role: "Co-Founder",
    companyContext: "Developer Tooling & API Platform",
    location: "Remote / North America",
    projectDomain: "Cloud Infrastructure & Gateway",
    techStack: ["Node.js", "Redis", "Fastify", "Kubernetes", "Prometheus"],
    engagementType: "Dedicated Product Engineering",
    quote:
      "Abin is that rare engineer who understands system architecture at depth while executing frontend and backend code cleanly. He designed our distributed rate-limiting gateway with Redis token buckets and handled 50,000+ RPS stress tests without breaking a sweat.",
    keyOutcome: "Sustained 50k+ RPS with P99 latency < 15ms under synthetic k6 load benchmarks.",
    date: "2025-05",
    verifiedMilestone: "Public Beta Release & Benchmark Validation Completed",
  },
];
