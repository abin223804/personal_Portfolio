export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: "Cloud Architecture" | "Distributed Systems" | "Full Stack Enterprise" | "Frontend & Design System";
  period: string;
  role: string;
  client: string;
  summary: string;
  metrics: { label: string; value: string; detail: string }[];
  techStack: string[];
  architectureOverview: string;
  keyChallenges: string[];
  architecturalDecisions: { title: string; reasoning: string; impact: string }[];
  fullNarrative: string;
  featured: boolean;
}

export const PROJECTS: CaseStudy[] = [
  {
    slug: "omniscale-cloud-gateway",
    title: "OmniScale Enterprise Cloud Gateway",
    subtitle: "High-Throughput Multi-Region API Router & Microservice Mesh",
    category: "Cloud Architecture",
    period: "2024 - 2025",
    role: "Lead Solution Architect",
    client: "Global SaaS Enterprise",
    summary: "Designed and implemented a multi-region API Gateway and service mesh capable of handling 50,000+ requests per second with sub-8ms routing overhead and zero-downtime blue/green deployments.",
    metrics: [
      { label: "Request Throughput", value: "50,000+ RPS", detail: "Sustained peak workload" },
      { label: "P99 Routing Latency", value: "< 8ms", detail: "Sub-millisecond Edge cache" },
      { label: "Platform Uptime", value: "99.99%", detail: "Zero single points of failure" },
      { label: "Infrastructure Cost Savings", value: "35%", detail: "Optimized resource allocation" }
    ],
    techStack: ["Go", "Kubernetes", "AWS EKS", "Envoy", "Redis Cluster", "Terraform", "Prometheus", "Grafana"],
    architectureOverview: "OmniScale functions as the unified ingress point for 40+ microservices across 3 AWS regions (us-east-1, eu-west-1, ap-southeast-1). Utilizing Envoy Proxy custom filters written in Go and backed by a global Redis cluster for dynamic rate-limiting and token verification, the architecture ensures resilient fault isolations through circuit breakers and rate limit quotas.",
    keyChallenges: [
      "Cross-region data consistency during high-velocity tenant authentication bursts.",
      "Eliminating noisy-neighbor memory saturation in multi-tenant shared Kubernetes clusters.",
      "Seamless blue/green canary deployments without invalidating client session tokens."
    ],
    architecturalDecisions: [
      {
        title: "Decentralized Auth Verification via Distributed JWT Validation",
        reasoning: "Centralized auth checks created an unacceptable bottleneck at 30k RPS. Moving key validation to edge proxies using asymmetric keys reduced auth latency by 82%.",
        impact: "Saved 18ms per API call and eliminated auth service overload during peak traffic."
      },
      {
        title: "eBPF-driven Observability Layer",
        reasoning: "Traditional sidecar logging injected a 4ms penalty. Implementing Cilium eBPF allowed network tracing directly at the Linux kernel level.",
        impact: "Achieved zero-overhead deep packet inspection and real-time distributed tracing."
      }
    ],
    fullNarrative: `
### Background & Engineering Vision
Modern enterprise workloads require seamless scale, multi-region fault tolerance, and strict SLAs. As Lead Solution Architect, I spearheaded the overhaul of legacy monolithic reverse proxies into a decoupled, Envoy-driven API Gateway.

### Core Architectural Blueprint
1. **Edge Routing**: Cloudflare Anycast CDN terminates TLS at the edge, routing requests to the nearest AWS EKS cluster.
2. **Ingress Mesh**: Envoy Gateway instances dynamically evaluate path routing, headers, and rate-limit budgets using a distributed Redis instance with local memory caching.
3. **Service Discovery & Fault Tolerance**: HashiCorp Consul syncs service endpoints across VPCs while automated circuit breakers gracefully fallback to cached responses during microservice outages.
4. **Automated Infrastructure**: 100% defined as code via Terraform modules with automated integration testing in GitHub Actions pipelines.

### Business & Operational Impact
By implementing strict architectural boundary controls and proactive health checks, the client achieved 99.99% operational availability and saved over $180,000 annually in compute over-provisioning.
`,
    featured: true,
  },
  {
    slug: "fintech-settlement-engine",
    title: "Real-Time FinTech Settlement Engine",
    subtitle: "Event-Driven Ledger System with Sub-10ms Transaction Validation",
    category: "Distributed Systems",
    period: "2023 - 2024",
    role: "Senior Backend Architect",
    client: "Tier-1 Payment Service Provider",
    summary: "Architected an event-driven financial settlement engine with idempotent transaction processing, double-entry bookkeeping, and real-time fraud detection pipelines.",
    metrics: [
      { label: "Daily Processing Volume", value: "$12M+", detail: "Settled securely every 24h" },
      { label: "Transaction Latency", value: "9.4ms", detail: "End-to-end event resolution" },
      { label: "Data Integrity", value: "100%", detail: "Zero reconciliation discrepancies" },
      { label: "Audit Accuracy", value: "100%", detail: "Cryptographic ledger hashing" }
    ],
    techStack: ["Node.js", "TypeScript", "Apache Kafka", "PostgreSQL", "Prisma", "Docker", "AWS ElastiCache", "Datadog"],
    architectureOverview: "Built on an Event-Sourcing pattern using Apache Kafka as the append-only event log, paired with PostgreSQL isolated schemas for transactional double-entry accounting. Write models and Read models are completely decoupled via CQRS (Command Query Responsibility Segregation).",
    keyChallenges: [
      "Guaranteeing exactly-once processing across unreliable payment gateway Webhooks.",
      "Maintaining atomic balance updates under concurrent burst payouts.",
      "Meeting strict PCI-DSS Compliance & immutable audit logs."
    ],
    architecturalDecisions: [
      {
        title: "Idempotency Key Reservation via Redis Redlock",
        reasoning: "To prevent duplicate withdrawals from concurrent user taps, a distributed lock guarantees unique request key execution before database write phases.",
        impact: "Completely eliminated duplicate charge incidents across 4 million monthly transactions."
      },
      {
        title: "CQRS Read-Optimized Materialized Views",
        reasoning: "Complex account statement queries slowed down double-entry write tables. Decoupling reads into optimized PostgreSQL materialized views eliminated table locks.",
        impact: "Query response times dropped from 1.2s to 14ms."
      }
    ],
    fullNarrative: `
### Financial Security & Systems Integrity
Processing high-frequency financial settlements demands zero tolerance for data drift or race conditions. I designed a double-entry ledger framework where every credit requires an equal debit, secured by cryptographic hash chaining.

### System Flow
- **Ingress Event**: Webhook payload validated with HMAC-SHA256 signature.
- **Kafka Pipeline**: Event published to partitioned topic keyed by Account ID ensuring strict per-account sequence ordering.
- **Ledger Worker**: Distributed worker validates balance sufficiency, applies cryptographic double-entry write, and emits transactional completion event.
- **Audit Engine**: Background worker computes Merkle tree root hashes for end-of-day banking reconciliation.
`,
    featured: true,
  },
  {
    slug: "enterprise-ai-knowledge-mesh",
    title: "Enterprise AI Knowledge Mesh & RAG Pipeline",
    subtitle: "Semantic Search Engine over 10M+ Enterprise Documents with Granular RBAC",
    category: "Full Stack Enterprise",
    period: "2024",
    role: "Full Stack Solution Architect",
    client: "Global Legal & Consultancy Firm",
    summary: "Engineered an enterprise Retrieval-Augmented Generation (RAG) platform incorporating hybrid dense-sparse vector search, streaming LLM responses, and document-level permission enforcement.",
    metrics: [
      { label: "Document Vectorized", value: "10M+", detail: "PDFs, Docs, and Schemas" },
      { label: "Search Relevance (mAP)", value: "94.2%", detail: "Hybrid Dense/BM25 Ranker" },
      { label: "Time-to-First-Token", value: "320ms", detail: "Streaming WebSockets" },
      { label: "Role Permission Checks", value: "0ms Overhead", detail: "Vector metadata filtering" }
    ],
    techStack: ["Next.js 15", "Python", "FastAPI", "pgvector", "PostgreSQL", "Pinecone", "Tailwind CSS", "Docker"],
    architectureOverview: "A hybrid solution featuring a Next.js 15 frontend consuming a FastAPI async orchestration engine. Document ingestion pipelines chunk text into contextually preserved paragraphs, generate 1536-dimensional embeddings, and store them alongside tenant permission metadata in PostgreSQL with pgvector.",
    keyChallenges: [
      "Preventing sensitive legal document leakage across client organization tiers.",
      "Managing memory overhead during large document vector batching.",
      "Achieving instant sub-second conversational UI feedback."
    ],
    architecturalDecisions: [
      {
        title: "Metadata-Level Dynamic Vector Filtering",
        reasoning: "Post-filtering search results by user roles wasted query time and leaked item counts. Inlining user group IDs directly into pgvector SQL queries filtered at index retrieval.",
        impact: "Guaranteed absolute tenant isolation with zero performance degradation."
      },
      {
        title: "Server-Sent Events (SSE) Response Streaming",
        reasoning: "Waiting for complete LLM token synthesis created 4s perceived user latency. SSE streaming allowed real-time token rendering directly to the React UI.",
        impact: "Perceived system responsiveness improved by 92%."
      }
    ],
    fullNarrative: `
### Reimagining Enterprise Search
Unstructured data scattered across Google Drive, SharePoint, and internal databases often stalls enterprise decision-making. We built a enterprise knowledge mesh that answers complex legal questions with pinpoint source citations.

### Security Framework
Security was paramount. We embedded access-control lists (ACLs) into every vector embedding payload, ensuring that search queries return only information the authenticated user has explicit permissions to read.
`,
    featured: true,
  },
  {
    slug: "hyperdrive-design-system",
    title: "HyperDrive Design System & Micro-Frontend Mesh",
    subtitle: "Unified UI Architecture and Module Federation for 12 Enterprise Web Products",
    category: "Frontend & Design System",
    period: "2023",
    role: "Principal Frontend Architect",
    client: "Multi-Product Tech Ecosystem",
    summary: "Created a zero-runtime CSS design system and module federated micro-frontend framework adopted by 80+ engineers across 12 distinct web applications.",
    metrics: [
      { label: "Component Adoption", value: "98%", detail: "Across 12 core web apps" },
      { label: "UI Bundle Reduction", value: "42%", detail: "Shared baseline bundles" },
      { label: "Accessibility Score", value: "100/100", detail: "WCAG 2.2 AA Compliance" },
      { label: "Feature Velocity Increase", value: "3x", detail: "Faster team delivery" }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Module Federation", "Storybook", "Framer Motion", "Jest", "Playwright"],
    architectureOverview: "A modular design system library backed by automated visual regression tests in CI/CD. Coupled with Webpack Module Federation, product teams publish independent micro-frontends into a master host shell without requiring full system rebuilds.",
    keyChallenges: [
      "Eliminating CSS class collisions across legacy and modern React applications.",
      "Enforcing strict WCAG 2.2 AA accessibility standards across all dynamic components.",
      "Ensuring seamless state synchronization across independently deployed micro-frontends."
    ],
    architecturalDecisions: [
      {
        title: "Strict CSS Variable Tokens with Dark/Light Engine",
        reasoning: "Hardcoded Tailwind utility overrides led to inconsistent brand themes. Centralizing design tokens via CSS custom properties enabled instant sub-millisecond theme switching.",
        impact: "Reduced total styling bundle sizes and achieved unified dark/light themes."
      }
    ],
    fullNarrative: `
### Scaling UI Development Across Teams
Disparate UI teams were creating duplicated component logic and breaking brand consistency. HyperDrive established a single source of truth for component specs, design tokens, and interaction motion.

### Engineering Excellence
- **Keyboard Navigation**: 100% accessible via arrow keys, escape controls, and focus locks.
- **Automated QA**: Every pull request undergoes visual diff checking via Storybook Chromatic and automated E2E testing in Playwright.
`,
    featured: false,
  }
];
