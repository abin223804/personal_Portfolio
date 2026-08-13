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
    title: "AI, LLMs & Booming Technologies Stack",
    description: "Integrating Generative AI models, vector search, RAG pipelines, and automated LLM workflows into web and mobile products.",
    iconName: "Sparkles",
    skills: [
      { name: "OpenAI, Claude & Gemini APIs", level: 92, experienceYears: "2+ yrs", realWorldUsage: "Connecting frontier LLM models with structured JSON mode and function calling", tags: ["OpenAI", "Anthropic", "Gemini", "LLMs"] },
      { name: "LangChain & AI Agent Workflows", level: 88, experienceYears: "2+ yrs", realWorldUsage: "Architecting multi-step autonomous AI agents, tool calling, and prompt pipelines", tags: ["LangChain", "AI Agents", "Prompt Engineering"] },
      { name: "RAG & Vector Search (pgvector / Pinecone)", level: 90, experienceYears: "2+ yrs", realWorldUsage: "Building semantic search & retrieval-augmented generation pipelines on PostgreSQL pgvector", tags: ["RAG", "pgvector", "Embeddings", "Vector Search"] },
      { name: "AI-Integrated Full-Stack Applications", level: 95, experienceYears: "5+ yrs", realWorldUsage: "Embedding real-time AI streaming, intelligent search, and dynamic summaries into Next.js & Flutter apps", tags: ["AI-Powered", "Next.js", "Flutter", "Stream API"] }
    ]
  },
  {
    title: "Mobile & Flutter Application Engineering",
    description: "Building cross-platform iOS & Android mobile applications with native performance, clean architecture, and seamless backend integration.",
    iconName: "Smartphone",
    skills: [
      { name: "Flutter & Dart Specialist", level: 94, experienceYears: "3+ yrs", realWorldUsage: "Cross-platform mobile apps for iOS & Android with silky smooth 60fps performance", tags: ["Flutter", "Dart", "iOS", "Android"] },
      { name: "Mobile State & BLoC Architecture", level: 92, experienceYears: "3+ yrs", realWorldUsage: "Clean architecture, BLoC / Provider state management, & Hive offline local cache", tags: ["BLoC", "Provider", "Clean Architecture", "Hive"] },
      { name: "Mobile Backend & API Integration", level: 95, experienceYears: "5+ yrs", realWorldUsage: "Connecting Flutter frontends with Node.js REST APIs, OAuth2, Webhooks & FCM Push", tags: ["REST APIs", "Node.js", "Firebase FCM", "Stripe"] },
      { name: "App Store & Play Store Deployment", level: 90, experienceYears: "3+ yrs", realWorldUsage: "Building, signing, and deploying production release builds to Apple App Store & Google Play Store", tags: ["App Store", "Play Store", "Fastlane", "CI/CD"] }
    ]
  },
  {
    title: "System & Solution Architecture",
    description: "Designing scalable, decoupled, high-availability multi-region architectures with low latency and clean boundaries.",
    iconName: "Cpu",
    skills: [
      { name: "Microservices & Distributed Systems", level: 95, experienceYears: "5+ yrs", realWorldUsage: "Decoupled enterprise services with high-throughput gRPC & Kafka communication", tags: ["Distributed Systems", "Domain-Driven Design", "gRPC"] },
      { name: "Event-Driven & Streaming Architecture", level: 92, experienceYears: "4+ yrs", realWorldUsage: "Kafka event streams and RabbitMQ handling 50k+ background events/sec", tags: ["Kafka", "RabbitMQ", "Event Sourcing"] },
      { name: "API Gateway & Mesh Design", level: 94, experienceYears: "5+ yrs", realWorldUsage: "Envoy Proxy, Kong, and custom edge routing with rate-limiting middleware", tags: ["Envoy", "Kong", "Edge Routing"] },
      { name: "High Availability & Multi-Region VPC", level: 90, experienceYears: "4+ yrs", realWorldUsage: "Multi-region active-active VPC setup with 99.99% architecture SLA", tags: ["AWS Route53", "Cloudflare CDN", "SLA"] }
    ]
  },
  {
    title: "Backend Engineering & Node.js REST APIs",
    description: "Engineering secure, high-concurrency Node.js microservices, REST/GraphQL/gRPC APIs, and resilient data engines.",
    iconName: "Server",
    skills: [
      { name: "Node.js, Express & NestJS", level: 96, experienceYears: "5+ yrs", realWorldUsage: "Core backend stack for enterprise APIs, event processors, SSE, and WebSockets", tags: ["Node.js", "Express.js", "NestJS", "TypeScript"] },
      { name: "Go (Golang) Microservices", level: 88, experienceYears: "3+ yrs", realWorldUsage: "High-performance edge utilities & concurrent goroutine worker pools", tags: ["Go", "Goroutines", "gRPC"] },
      { name: "Python & Data Ingestion Pipelines", level: 88, experienceYears: "3+ yrs", realWorldUsage: "FastAPI endpoints, document parsing, and automated data extraction pipelines", tags: ["Python", "FastAPI", "Pandas"] },
      { name: "RESTful & OpenAPI Spec Architecture", level: 95, experienceYears: "5+ yrs", realWorldUsage: "Designed OpenAPI 3.0 specs & Protobuf schemas for global client integration", tags: ["OpenAPI 3.0", "REST APIs", "Protobuf"] }
    ]
  },
  {
    title: "Frontend Engineering & Next.js 15",
    description: "Building ultra-responsive, accessible, pixel-perfect user interfaces with modern React 19, Next.js 15, and kinetic motion.",
    iconName: "Layout",
    skills: [
      { name: "Next.js 15 & React 19 App Router", level: 96, experienceYears: "5+ yrs", realWorldUsage: "App Router, SSR, React Server Components (RSC), Server Actions, & Edge Functions", tags: ["Next.js 15", "React 19", "RSC", "SEO"] },
      { name: "TypeScript Specialist", level: 95, experienceYears: "5+ yrs", realWorldUsage: "Strict type safety across end-to-end full stack monorepos and data interfaces", tags: ["TypeScript", "Generics", "Strict Mode"] },
      { name: "Tailwind CSS & Modern Design Systems", level: 95, experienceYears: "5+ yrs", realWorldUsage: "Bento layouts, dark-mode obsidian themes, zero CSS runtime overhead", tags: ["Tailwind CSS", "CSS Variables", "Bento Grid"] },
      { name: "Framer Motion & Canvas Motion", level: 90, experienceYears: "4+ yrs", realWorldUsage: "Interactive 60fps animations, custom cursors, & blueprint visualizers", tags: ["Framer Motion", "HTML5 Canvas", "Lenis Scroll"] }
    ]
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Automating zero-downtime deployments, immutable infrastructure, and cloud security compliance.",
    iconName: "Cloud",
    skills: [
      { name: "Amazon Web Services (AWS)", level: 92, experienceYears: "5+ yrs", realWorldUsage: "EKS, Lambda, S3, CloudFront, DynamoDB, RDS, VPC network orchestration", tags: ["AWS", "Cloud Architecture", "Lambda"] },
      { name: "Kubernetes & Docker Containerization", level: 90, experienceYears: "4+ yrs", realWorldUsage: "Container provisioning, Helm charts, pod autoscaling (HPA), and multi-stage builds", tags: ["Docker", "Kubernetes", "Helm"] },
      { name: "Terraform (Infrastructure as Code)", level: 88, experienceYears: "3+ yrs", realWorldUsage: "Automated AWS VPC, RDS, and CloudFront deployment modules", tags: ["Terraform", "IaC"] },
      { name: "CI/CD & GitHub Actions Automation", level: 94, experienceYears: "5+ yrs", realWorldUsage: "Automated pipelines with matrix testing, security scanning, & production deploys", tags: ["GitHub Actions", "CI/CD", "Docker Hub"] }
    ]
  },
  {
    title: "Databases, Caching & Vector Search",
    description: "Optimizing relational schemas, in-memory caching layers, and high-dimensional vector search engines.",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL & pgvector", level: 94, experienceYears: "5+ yrs", realWorldUsage: "Complex queries, index tuning, partitioning, and RAG vector embedding search", tags: ["PostgreSQL", "pgvector", "SQL"] },
      { name: "Redis & ElastiCache", level: 92, experienceYears: "5+ yrs", realWorldUsage: "Global pub/sub queues, distributed locking, rate-limiting, and state storage", tags: ["Redis", "Caching", "PubSub"] },
      { name: "MongoDB & NoSQL Stores", level: 88, experienceYears: "4+ yrs", realWorldUsage: "Document database architecture, aggregation pipelines, and sharding", tags: ["MongoDB", "NoSQL", "DynamoDB"] },
      { name: "Database Indexing & Query Tuning", level: 92, experienceYears: "5+ yrs", realWorldUsage: "Reduced P99 query latency from 1.5s to 12ms via index optimization and plan execution", tags: ["Indexing", "EXPLAIN ANALYZE", "B-Tree"] }
    ]
  },
  {
    title: "Security, Authentication & Governance",
    description: "Enforcing zero-trust security models, OAuth2/OIDC protocols, rate limiting, and data encryption.",
    iconName: "Shield",
    skills: [
      { name: "OAuth2, OIDC & JWT Authentication", level: 94, experienceYears: "5+ yrs", realWorldUsage: "Single Sign-On (SSO), refresh token rotation, and RBAC permission guards", tags: ["OAuth2", "JWT", "OIDC", "Security"] },
      { name: "Zero-Trust & Microservice Encryption", level: 90, experienceYears: "4+ yrs", realWorldUsage: "mTLS authentication between internal microservices and secret management", tags: ["Zero-Trust", "mTLS", "Encryption"] },
      { name: "API Security & DDoS Rate Limiting", level: 95, experienceYears: "5+ yrs", realWorldUsage: "Token bucket & sliding window rate limiters against DDoS attacks and brute-forcing", tags: ["OWASP", "Rate Limiting", "CORS"] }
    ]
  }
];
