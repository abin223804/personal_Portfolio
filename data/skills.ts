export interface SkillPillar {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // Percentage
    experienceYears: string;
    realWorldUsage: string;
    tags: string[];
  }[];
}

export const SKILL_PILLARS: SkillPillar[] = [
  {
    title: "Mobile & Flutter Application Engineering",
    description: "Building cross-platform iOS & Android mobile applications with native performance, clean architecture, and seamless backend integration.",
    iconName: "Smartphone",
    skills: [
      { name: "Flutter & Dart", level: 92, experienceYears: "3+ yrs", realWorldUsage: "Cross-platform mobile apps for iOS & Android with native performance", tags: ["Flutter", "Dart", "iOS", "Android"] },
      { name: "Mobile State & Architecture", level: 90, experienceYears: "3+ yrs", realWorldUsage: "Clean architecture, BLoC / Provider state management, & offline storage", tags: ["BLoC", "Provider", "Clean Architecture"] },
      { name: "Mobile Backend & API Integration", level: 95, experienceYears: "5+ yrs", realWorldUsage: "Connecting Flutter frontends with Node.js REST APIs, OAuth2, & Webhooks", tags: ["REST APIs", "Node.js", "Firebase"] },
      { name: "App Store & Play Store Deployment", level: 88, experienceYears: "3+ yrs", realWorldUsage: "Building, signing, and deploying production release builds to Apple App Store & Google Play Store", tags: ["App Store", "Play Store", "CI/CD"] }
    ]
  },
  {
    title: "System & Solution Architecture",
    description: "Designing scalable, decoupled, high-availability multi-region architectures with low latency and clean boundaries.",
    iconName: "Cpu",
    skills: [
      { name: "Microservices Architecture", level: 95, experienceYears: "5+ yrs", realWorldUsage: "Decoupled 40+ enterprise services with gRPC & Kafka", tags: ["Distributed Systems", "Domain-Driven Design"] },
      { name: "Event-Driven Architecture", level: 92, experienceYears: "4+ yrs", realWorldUsage: "Kafka event streams handling 50k+ events/sec", tags: ["Kafka", "RabbitMQ", "Event Sourcing"] },
      { name: "API Gateway & Mesh Design", level: 94, experienceYears: "5+ yrs", realWorldUsage: "Envoy Proxy, Kong, & Custom Go Edge Routers", tags: ["Envoy", "Kong", "eBPF"] },
      { name: "High Availability & Failover", level: 90, experienceYears: "4+ yrs", realWorldUsage: "Multi-region active-active VPC setup with 99.99% SLA", tags: ["AWS Route53", "Anycast CDN"] }
    ]
  },
  {
    title: "Backend & Distributed Systems",
    description: "Engineering secure, high-concurrency microservices, REST/GraphQL/gRPC APIs, and resilient data engines.",
    iconName: "Server",
    skills: [
      { name: "Node.js & TypeScript", level: 96, experienceYears: "5+ yrs", realWorldUsage: "Core backend stack for APIs, event processors, & SSE", tags: ["Express", "Fastify", "NestJS"] },
      { name: "Go (Golang)", level: 88, experienceYears: "3+ yrs", realWorldUsage: "High-performance edge utilities & concurrent worker pools", tags: ["Goroutines", "gRPC"] },
      { name: "Python & AI Ingestion", level: 86, experienceYears: "3+ yrs", realWorldUsage: "FastAPI vector search RAG pipelines & document parsing", tags: ["FastAPI", "PyTorch", "LangChain"] },
      { name: "RESTful & gRPC APIs", level: 95, experienceYears: "5+ yrs", realWorldUsage: "Designed OpenAPI specs & Protobuf schemas for enterprise clients", tags: ["OpenAPI 3.0", "Protobuf"] }
    ]
  },
  {
    title: "Frontend Engineering & Motion",
    description: "Building ultra-responsive, accessible, pixel-perfect user interfaces with modern React, Next.js, and kinetic motion.",
    iconName: "Layout",
    skills: [
      { name: "Next.js 15 & React 19", level: 96, experienceYears: "5+ yrs", realWorldUsage: "App Router, SSR, Server Components, & Edge Functions", tags: ["SSR", "RSC", "SEO"] },
      { name: "TypeScript Specialist", level: 95, experienceYears: "5+ yrs", realWorldUsage: "Strict type safety across end-to-end full stack monorepos", tags: ["Generics", "AST Parsing"] },
      { name: "Tailwind CSS & Styling Systems", level: 95, experienceYears: "5+ yrs", realWorldUsage: "Bento layouts, custom theme tokens, zero CSS runtime", tags: ["Tailwind CSS", "CSS Variables"] },
      { name: "Framer Motion & Canvas Motion", level: 90, experienceYears: "4+ yrs", realWorldUsage: "Interactive 60fps animations, custom cursors, & blueprint visualizers", tags: ["Framer Motion", "HTML5 Canvas"] }
    ]
  },
  {
    title: "Cloud & Infrastructure (DevOps)",
    description: "Automating zero-downtime deployments, immutable infrastructure, and cloud security compliance.",
    iconName: "Cloud",
    skills: [
      { name: "Amazon Web Services (AWS)", level: 92, experienceYears: "5+ yrs", realWorldUsage: "EKS, Lambda, S3, CloudFront, DynamoDB, RDS, VPC", tags: ["AWS Certified", "Cloud Architecture"] },
      { name: "Kubernetes & Docker Containerization", level: 90, experienceYears: "4+ yrs", realWorldUsage: "Cluster provisioning, helm charts, pod autoscaling (HPA)", tags: ["K8s", "Docker", "Helm"] },
      { name: "Terraform (IaC)", level: 88, experienceYears: "3+ yrs", realWorldUsage: "100% automated AWS VPC & multi-region deployment modules", tags: ["Infrastructure as Code"] },
      { name: "CI/CD & GitHub Actions", level: 94, experienceYears: "5+ yrs", realWorldUsage: "Automated pipelines with matrix testing, security scanning, & canary deploys", tags: ["GitHub Actions", "ArgoCD"] }
    ]
  },
  {
    title: "Databases, Caching & Vector Search",
    description: "Optimizing relational schemas, in-memory caching layers, and high-dimensional vector search engines.",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL & pgvector", level: 94, experienceYears: "5+ yrs", realWorldUsage: "Complex queries, index tuning, partitioning, and RAG vector search", tags: ["PostgreSQL", "pgvector"] },
      { name: "Redis & ElastiCache", level: 92, experienceYears: "5+ yrs", realWorldUsage: "Global pub/sub, distributed locking, rate-limiting, and state store", tags: ["Redis", "Redlock"] },
      { name: "MongoDB & NoSQL", level: 88, experienceYears: "4+ yrs", realWorldUsage: "Document database architecture & aggregation pipelines", tags: ["MongoDB", "DynamoDB"] },
      { name: "Query Optimization & Indexing", level: 92, experienceYears: "5+ yrs", realWorldUsage: "Reduced P99 query latency from 1.5s to 12ms via index optimization", tags: ["B-Trees", "EXPLAIN ANALYZE"] }
    ]
  },
  {
    title: "Security, Auth & Governance",
    description: "Enforcing zero-trust security model, OAuth2/OIDC protocols, rate limiting, and data encryption at rest/in-transit.",
    iconName: "Shield",
    skills: [
      { name: "OAuth2, OIDC & JWT Auth", level: 94, experienceYears: "5+ yrs", realWorldUsage: "Single Sign-On (SSO) and RBAC for enterprise platforms", tags: ["Auth0", "Keycloak", "OAuth2"] },
      { name: "Zero Trust Architecture", level: 90, experienceYears: "4+ yrs", realWorldUsage: "mTLS authentication between internal microservices", tags: ["mTLS", "Vault"] },
      { name: "API Security & Rate Limiting", level: 95, experienceYears: "5+ yrs", realWorldUsage: "Token bucket & sliding window rate limiters against DDoS attacks", tags: ["OWASP", "Rate Limiting"] }
    ]
  }
];
