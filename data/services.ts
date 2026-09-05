export interface ServiceModule {
  title: string;
  description: string;
  items?: string[];
}

export interface EngagementType {
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProofCaseStudy {
  slug: string;
  title: string;
  typeTag: string;
  note: string;
  highlights: string[];
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface AuditComparisonRow {
  measure: string;
  before: string;
  changeMade: string;
  after: string;
  measurementMethod: string;
}

export interface LabVsFieldInfo {
  labData: string;
  fieldData: string;
  applicationBenchmark: string;
}

export interface InternalCrossLink {
  title: string;
  href: string;
  badge?: string;
  description: string;
}

export interface ServiceOffering {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  targetAudience: string[];
  problemsSolved: string[];
  deliverables: string[];
  techStack: string[];
  ctaText: string;
  featured: boolean;
  h1?: string;
  seoTitle?: string;
  metaDescription?: string;
  heroCopy?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  serviceModules?: ServiceModule[];
  engagementTypes?: EngagementType[];
  processSteps?: ProcessStep[];
  proofCaseStudy?: ProofCaseStudy;
  faqs?: ServiceFaq[];
  auditDeliverables?: string[];
  auditComparisonTable?: AuditComparisonRow[];
  labVsFieldNotes?: LabVsFieldInfo;
  internalCrossLinks?: InternalCrossLink[];
}

export const SERVICES: ServiceOffering[] = [
  {
    slug: "ai-integration-rag-development",
    title: "AI Integration & RAG Development Services",
    h1: "AI Integration & RAG Development for Production Applications",
    seoTitle: "AI Integration & RAG Development Services | Abin S Chandran",
    metaDescription: "Build production-ready AI features, RAG search, document intelligence, and secure LLM integrations for web and SaaS products with Abin S Chandran.",
    shortDescription: "Production-ready AI integrations, Retrieval-Augmented Generation (RAG) search, document intelligence, and secure LLM workflows for modern web apps and SaaS.",
    heroCopy: "I help startups and businesses integrate practical AI features into web applications and SaaS products—from document search and retrieval-augmented generation to secure model APIs, streaming responses, and permission-aware knowledge systems.",
    fullDescription: "Integrating Artificial Intelligence into commercial software requires more than calling an API. I design production-ready AI workflows, private document retrieval pipelines (RAG), and deterministic tool execution systems tailored to web and SaaS applications. Using Node.js, Next.js, Python, FastAPI, and PostgreSQL with pgvector, I engineer high-speed conversational interfaces with streaming responses, strict permission gating, hallucination guardrails, and model token cost controls.",
    iconName: "Cpu",
    targetAudience: [
      "B2B SaaS founders adding document search, automated workflows, and conversational AI",
      "Enterprises needing secure, permission-aware RAG pipelines over private repositories",
      "Digital product teams requiring evaluated LLM integrations with predictable latency and costs"
    ],
    problemsSolved: [
      "Slow, generic LLM responses lacking domain knowledge and citing nonexistent facts",
      "Security and privacy leaks when exposing internal corporate documents to third-party models",
      "Runaway API token bills, unmonitored query failures, and high Time-To-First-Token (TTFT) latency"
    ],
    deliverables: [
      "Hybrid dense-sparse RAG pipeline with contextual document chunking and vector search",
      "Role-based permission gating (RBAC) filtering documents at the vector database query layer",
      "Real-time Server-Sent Events (SSE) streaming conversational UI in React & Next.js",
      "Model integration (OpenAI, Anthropic Claude, Google Gemini) with JSON schema validation",
      "Token cost controls, latency caching with Redis, and prompt evaluation benchmarks"
    ],
    techStack: ["Next.js 15", "Node.js", "Python", "FastAPI", "PostgreSQL", "pgvector", "LangChain", "OpenAI API", "Anthropic Claude", "Redis", "Docker"],
    ctaText: "Discuss an AI Project",
    featured: true,
    primaryCta: {
      text: "Discuss an AI Project",
      href: "/contact"
    },
    secondaryCta: {
      text: "View the Enterprise AI Case Study",
      href: "/projects/enterprise-ai-knowledge-mesh"
    },
    serviceModules: [
      {
        title: "AI Feature Integration into Existing Web Applications",
        description: "Seamlessly embed conversational intelligence, natural language command bars, and automated summaries into existing React, Next.js, or Node.js web platforms without architectural rewrites.",
        items: ["Contextual inline copilots", "Automated text synthesis & classification", "Structured JSON extraction from messy input"]
      },
      {
        title: "Retrieval-Augmented Generation (RAG) Systems",
        description: "Ground large language models in your proprietary data. We build RAG architectures that index documentation, product catalogs, and help centers to return verified answers with exact source citations.",
        items: ["Hybrid dense + BM25 keyword reranking", "Multi-query retrieval expansion", "Deterministic source citation citations"]
      },
      {
        title: "Document Ingestion, Chunking & Vector Search",
        description: "Transform unstructured PDFs, spreadsheets, and markdown manuals into clean vector embeddings. Optimized chunking preserves semantic context while eliminating index bloat.",
        items: ["Context-aware recursive text splitters", "1536-dim embedding generation", "PostgreSQL pgvector indexing with HNSW/IVFFlat"]
      },
      {
        title: "Permission-Aware Enterprise Knowledge Search",
        description: "Strict multi-tenant security guarantees. Access Control Lists (ACLs) are applied at the database retrieval level, ensuring users only retrieve information they have permissions to view.",
        items: ["Row-level vector metadata filtering", "Tenant data boundary isolation", "Zero cross-organization data leakage"]
      },
      {
        title: "LLM & Model API Integrations",
        description: "Integrate frontier LLMs (OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini 1.5 Pro) with automated fallback routing, circuit breakers, and rate-limit backpressure queues.",
        items: ["Multi-provider failover routing", "JSON mode & strict tool calling schemas", "Zero-downtime model version migrations"]
      },
      {
        title: "Streaming Responses & Conversational Interfaces",
        description: "Sub-second Time-To-First-Token (TTFT) using Server-Sent Events (SSE) and WebSocket streaming to deliver instant, fluid conversational feedback to end users.",
        items: ["React streaming hook integration", "Markdown, LaTeX, and code block formatting", "Interactive follow-up suggestion chips"]
      },
      {
        title: "AI Workflow Automation & Structured Outputs",
        description: "Automate repetitive business workflows with multi-step deterministic agent pipelines, reliable JSON validation via Zod/Pydantic, and human-in-the-loop review queues.",
        items: ["Structured JSON schema guarantees", "Autonomous document triage & tagging", "Human review escalation webhooks"]
      },
      {
        title: "Evaluation, Privacy, Monitoring & Cost Controls",
        description: "Implement continuous evaluation metrics for answer relevance and factual precision. Protect sensitive PII with masking and optimize token usage to prevent unexpected bills.",
        items: ["Synthesized evaluation datasets & test suites", "Prompt caching & semantic response cache with Redis", "Real-time token and compute expense telemetry"]
      }
    ],
    engagementTypes: [
      {
        title: "AI Discovery & Feasibility Review",
        subtitle: "1 to 2 Weeks",
        description: "Evaluate your data assets, identify high-ROI AI use cases, test sample embeddings, and define the target retrieval architecture before writing production code.",
        deliverables: ["Data audit & chunking strategy", "Model benchmark matrix & cost projection", "Architectural blueprint & security spec"]
      },
      {
        title: "Evaluated AI Prototype",
        subtitle: "2 to 3 Weeks",
        description: "A fast, functional proof-of-concept proving retrieval accuracy and model output quality against representative internal datasets and user prompts.",
        deliverables: ["Working RAG retrieval demo", "Initial evaluation benchmark report", "UI component prototype with streaming"]
      },
      {
        title: "Production AI MVP",
        subtitle: "4 to 8 Weeks",
        description: "Full end-to-end development: robust ingestion pipelines, pgvector persistence, RBAC permission enforcement, streaming frontend UI, and cloud deployment.",
        deliverables: ["Production-grade vector pipeline", "Full web/SaaS integration", "Automated deployment & monitoring telemetry"]
      },
      {
        title: "Existing-System AI Integration",
        subtitle: "Milestone-Based",
        description: "Add conversational search, document analysis, or LLM workflows directly into your running Node.js, Next.js, or Python production applications.",
        deliverables: ["Non-breaking API endpoints", "Database migration for pgvector", "Frontend conversational components"]
      },
      {
        title: "Performance, Quality & Cost Optimization",
        subtitle: "Targeted Audit",
        description: "Improve an existing AI implementation experiencing high hallucination rates, slow response times, or excessive OpenAI/Claude API costs.",
        deliverables: ["Reranker and chunking optimization", "Redis semantic cache integration", "Measurable latency and token bill reduction"]
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Define the User Problem & Success Metric",
        description: "Identify exact user friction points, target retrieval precision (mAP), acceptable latency limits, and monthly API budget constraints."
      },
      {
        step: "02",
        title: "Audit Data, Permissions & System Architecture",
        description: "Examine source documents (PDFs, docs, databases), evaluate access control hierarchies, and inspect existing web application backends."
      },
      {
        step: "03",
        title: "Select Model, Retrieval & Vector Storage Approach",
        description: "Architect the retrieval stack—selecting optimal chunking sizes, embedding models, vector databases (pgvector vs Pinecone), and rerankers."
      },
      {
        step: "04",
        title: "Build Small Evaluated Prototype",
        description: "Assemble a test suite of representative queries, run automated evaluation checks, and tune retrieval parameters to eliminate hallucinations."
      },
      {
        step: "05",
        title: "Integrate Security, Observability & Cost Controls",
        description: "Wire in tenant RBAC filters, PII redaction, token rate limiters, Redis semantic caching, and APM telemetry before going live."
      },
      {
        step: "06",
        title: "Deploy, Measure & Iteratively Improve",
        description: "Deploy to production infrastructure (AWS / Vercel / Docker), monitor user interactions, track query quality, and refine retrieval rankings."
      }
    ],
    proofCaseStudy: {
      slug: "enterprise-ai-knowledge-mesh",
      title: "Enterprise AI Knowledge Mesh & RAG Pipeline",
      typeTag: "Representative Architecture & Anonymized Enterprise Engagement",
      note: "Engineered an enterprise Retrieval-Augmented Generation (RAG) platform indexing 10M+ documents with hybrid dense/sparse search, sub-400ms time-to-first-token streaming, and zero-overhead vector permission filtering.",
      highlights: [
        "10M+ documents vectorized with pgvector & PostgreSQL",
        "320ms Time-To-First-Token via Server-Sent Events streaming",
        "Granular RBAC vector filtering at query execution level",
        "94.2% search relevance precision (mAP) via hybrid BM25 ranker"
      ]
    },
    faqs: [
      {
        question: "What is RAG and when is it better than model fine-tuning?",
        answer: "Retrieval-Augmented Generation (RAG) retrieves relevant facts from an external database (such as PostgreSQL with pgvector) and injects them into the model's prompt at query time. RAG is significantly superior to fine-tuning for proprietary enterprise knowledge because: (1) it updates instantly when documents change without expensive model retraining, (2) it cites verifiable source references, and (3) it enforces strict role-based access permissions so users never see unauthorized facts. Fine-tuning is primarily reserved for teaching a model a specialized tone, syntax, or niche dialect, not for storing volatile knowledge."
      },
      {
        question: "Can you add AI features to an existing SaaS product or web application?",
        answer: "Yes. Most of my AI integration projects involve enhancing established web applications and SaaS platforms. By designing clean Node.js or FastAPI backend microservices and modern React/Next.js UI components, we can introduce AI search, document intelligence, or streaming conversational helpers without refactoring your existing core business logic or database schemas."
      },
      {
        question: "How do you protect private company documents and sensitive user data?",
        answer: "Data privacy is designed into the architecture from day one. We use enterprise model APIs with zero-data-retention policies (ensuring your data is never used to train third-party public models), hash all sensitive identifiers, redact PII prior to embedding, and enforce row-level access control lists (ACLs) directly inside the vector database queries so cross-tenant data leaks are mathematically impossible."
      },
      {
        question: "How are AI quality and model hallucinations evaluated?",
        answer: "Rather than relying on subjective manual testing, we build programmatic evaluation pipelines. We establish a synthetic ground-truth test suite of domain queries, measure context retrieval precision (mAP), evaluate answer faithfulness using automated LLM-as-a-judge heuristics, and tune chunking thresholds until hallucinations are systematically suppressed."
      },
      {
        question: "What affects the ongoing cost of an AI feature?",
        answer: "The primary ongoing cost drivers are model API tokens (input tokens for context + output tokens for generation), vector database compute/storage, and document embedding generation during ingestion. We minimize these expenses by implementing semantic Redis caching for repetitive queries, optimizing prompt token sizes, and using cost-effective smaller models for classification while reserving flagship frontier models for complex synthesis."
      },
      {
        question: "Can users receive real-time streaming responses in the browser?",
        answer: "Yes. Waiting 3 to 6 seconds for a complete LLM response causes severe user drop-off. By utilizing Server-Sent Events (SSE) or WebSockets from Node.js/FastAPI to React/Next.js frontends, tokens stream to the user's screen in real time with an initial Time-To-First-Token (TTFT) under 400 milliseconds."
      },
      {
        question: "How do you prevent runaway model and infrastructure bills?",
        answer: "We implement hard budget caps, per-user token quotas, rate limiters, query complexity timeouts, and Redis response caching for high-frequency questions. Furthermore, document chunking and vector indexing are optimized so that queries only pass the exact paragraphs needed for synthesis rather than entire documents."
      }
    ],
    internalCrossLinks: [
      {
        title: "Custom SaaS Product Development",
        href: "/services/saas-development",
        badge: "Architecture",
        description: "Multi-tenant architecture, Stripe billing, and team permissions for AI-powered SaaS platforms."
      },
      {
        title: "Node.js & Express Backend Development",
        href: "/services/nodejs-development",
        badge: "Backend",
        description: "High-concurrency microservices, async worker queues, and robust API endpoints."
      },
      {
        title: "REST API Development & Integrations",
        href: "/services/api-development-integration",
        badge: "Integrations",
        description: "Webhook pipelines, OpenAPI specifications, and external SaaS connectivity."
      },
      {
        title: "Performance Audit & Optimization",
        href: "/services/performance-optimization",
        badge: "Optimization",
        description: "Database query indexing, latency reduction, and Core Web Vitals acceleration."
      },
      {
        title: "Enterprise AI Knowledge Mesh Case Study",
        href: "/projects/enterprise-ai-knowledge-mesh",
        badge: "Proof of Work",
        description: "Deep dive into 10M+ document vectorization with pgvector and sub-400ms streaming."
      },
      {
        title: "Book an Architecture Discovery Call",
        href: "/contact",
        badge: "Contact",
        description: "Direct technical consultation with Abin S Chandran with < 24h response time."
      }
    ]
  },
  {
    slug: "web-development",
    title: "Custom Web Application & Website Development",
    shortDescription: "High-performance custom web application and website development with Next.js 15, React, Node.js, and PostgreSQL for modern businesses.",
    fullDescription: "I engineer responsive, blazing-fast web applications and high-conversion business websites tailored to your product goals. Based in Kerala, India and serving clients worldwide, I combine modern Next.js 15 App Router architecture, Node.js REST API backends, Tailwind CSS design systems, and secure PostgreSQL databases to deliver scalable digital platforms that load in milliseconds and rank effectively on search engines.",
    iconName: "Globe",
    targetAudience: [
      "Startups and digital brands needing custom web applications",
      "Businesses in Kerala, India, and worldwide replacing slow legacy websites",
      "Founders requiring production-grade web platforms with custom workflows"
    ],
    problemsSolved: [
      "Slow page speeds, poor Core Web Vitals, and lost organic search traffic",
      "Fragile WordPress or generic templates that cannot scale with business growth",
      "Lack of secure authentication, database persistence, and API integrations"
    ],
    deliverables: [
      "Custom Next.js 15 and React web application with responsive mobile-first UI",
      "Scalable Node.js & Express REST API architecture with robust database schemas",
      "Core Web Vitals optimization (sub-second LCP, zero CLS, 95+ PageSpeed scores)",
      "SEO architecture with JSON-LD structured data, metadata, and automated sitemaps",
      "Secure cloud deployment on AWS, Vercel, or containerized Docker platforms"
    ],
    techStack: ["Next.js 15", "React", "Node.js", "Express.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "REST APIs"],
    ctaText: "Hire Freelance Web Developer",
    featured: true,
  },
  {
    slug: "flutter-development",
    title: "Flutter & Mobile Application Development",
    shortDescription: "Cross-platform iOS and Android mobile app development with Flutter, Dart, clean architecture, and seamless Node.js backend integration.",
    fullDescription: "Launch high-performance mobile applications across iOS and Android from a single unified codebase. I specialize in building custom Flutter mobile apps for startups and businesses, complete with responsive UIs, offline storage, push notifications, payment processing, and fast Node.js REST API backends.",
    iconName: "Smartphone",
    targetAudience: [
      "Startups & Founders building mobile MVPs",
      "Businesses expanding from web to mobile platforms",
      "Companies wanting a unified iOS & Android mobile application"
    ],
    problemsSolved: [
      "High costs of maintaining separate native iOS & Android teams",
      "Unresponsive or slow mobile user interfaces",
      "Brittle mobile API integration and data sync issues"
    ],
    deliverables: [
      "Custom Flutter iOS & Android mobile app frontend",
      "Node.js & Express REST API backend & database setup",
      "State management (BLoC / Provider) & offline caching",
      "Push notifications & third-party API integration",
      "App Store & Google Play Store release build deployment"
    ],
    techStack: ["Flutter", "Dart", "Node.js", "Express.js", "PostgreSQL", "Firebase", "REST APIs", "iOS / Android"],
    ctaText: "Hire Flutter App Developer",
    featured: true,
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Web & Mobile Application Development",
    shortDescription: "End-to-end custom web and mobile application engineering from database architecture and REST APIs to responsive React/Next.js and Flutter frontends.",
    fullDescription: "I build complete, high-performance web and mobile software applications tailored to your business needs. Using Node.js, Express, React, Next.js, Flutter, and PostgreSQL or MongoDB, I deliver scalable, secure, and maintainable software applications that turn your business ideas into production-ready platforms.",
    iconName: "Layers",
    targetAudience: [
      "Startups & Founders building MVPs",
      "Small to medium businesses needing custom software",
      "Companies replacing legacy web or mobile applications"
    ],
    problemsSolved: [
      "Outgrown off-the-shelf software or templates",
      "Slow, buggy, or unscalable existing web/mobile apps",
      "Need for unified front-end, mobile, and back-end engineering leadership"
    ],
    deliverables: [
      "Custom React / Next.js web app & Flutter mobile app",
      "Secure Node.js & Express RESTful API backend",
      "Optimized PostgreSQL / MongoDB database design",
      "Authentication (OAuth2, JWT, Role-Based Access)",
      "Production deployment & cloud infrastructure setup"
    ],
    techStack: ["Node.js", "Express.js", "React.js", "Next.js 15", "Flutter", "TypeScript", "PostgreSQL", "MongoDB"],
    ctaText: "Discuss Your Web & Mobile Project",
    featured: true,
  },
  {
    slug: "nodejs-development",
    title: "Node.js & Express Backend Development",
    shortDescription: "Scalable microservices, asynchronous event processors, and high-concurrency Node.js backend systems built for reliability.",
    fullDescription: "Robust backend architecture is the core of any digital product. I engineer Node.js and Express backend services capable of handling heavy concurrent traffic, fast database queries, automated payment workflows, and real-time data pipelines.",
    iconName: "Server",
    targetAudience: [
      "Businesses needing custom API backend systems",
      "Mobile (Flutter) and web apps requiring fast backend APIs",
      "Companies migrating from monolithic legacy backends"
    ],
    problemsSolved: [
      "High database latencies and API response bottlenecks",
      "Unreliable backend authentication and data leaks",
      "Lack of clean microservices or modular API architecture"
    ],
    deliverables: [
      "RESTful API endpoints with OpenAPI 3.0 documentation",
      "Asynchronous background worker queues & Redis caching",
      "Database schema indexing & query optimization",
      "Secure JWT authentication and rate limiting",
      "Comprehensive unit & integration test suites"
    ],
    techStack: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Redis", "Kafka", "Docker"],
    ctaText: "Hire Node.js Developer",
    featured: true,
  },
  {
    slug: "react-nextjs-development",
    title: "React & Next.js Frontend Development",
    shortDescription: "Blazing-fast, SEO-optimized, pixel-perfect user interfaces with modern React 19, Next.js App Router, and Tailwind CSS.",
    fullDescription: "Create impression-making, ultra-responsive web applications that engage users and load instantly. I specialize in building modern Next.js 15 and React user interfaces with dynamic server components, smooth animations, and strict accessibility standards.",
    iconName: "Layout",
    targetAudience: [
      "SaaS products needing modern Web Dashboards",
      "Businesses wanting high-converting web portals",
      "Design agencies needing specialized frontend implementation"
    ],
    problemsSolved: [
      "Slow initial page load speeds destroying SEO and conversion",
      "Clunky user interface and poor mobile responsiveness",
      "Disorganized frontend code that is difficult to maintain"
    ],
    deliverables: [
      "Server-Side Rendered (SSR) & Static Next.js pages",
      "Responsive Tailwind CSS UI component libraries",
      "State management & API data fetching hook pipelines",
      "Search engine optimization (SEO) & Core Web Vitals optimization",
      "Cross-browser and mobile responsive testing"
    ],
    techStack: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    ctaText: "Hire React / Next.js Developer",
    featured: true,
  },
  {
    slug: "api-development-integration",
    title: "REST API Development & Third-Party Integrations",
    shortDescription: "Custom API engineering, Webhook handlers, and seamless integration with Stripe, PayPal, Auth0, AWS, and external SaaS services.",
    fullDescription: "Connect your applications with external tools or build robust APIs for public consumption. I design clean RESTful and gRPC API interfaces with rate limiting, error logging, automated documentation, and strict security compliance.",
    iconName: "Zap",
    targetAudience: [
      "Businesses needing payment gateway integrations (Stripe, Razorpay)",
      "Mobile apps (Flutter) & platforms integrating third-party SaaS APIs",
      "Companies building public developer APIs"
    ],
    problemsSolved: [
      "Failing third-party API Webhooks losing financial records",
      "Undocumented, brittle API integrations breaking in production",
      "Security vulnerabilities in API payload verification"
    ],
    deliverables: [
      "Idempotent API endpoints with rate-limiting protection",
      "Payment gateway integration (Stripe, PayPal, Razorpay)",
      "Webhook processing pipelines with automatic retry queues",
      "OpenAPI / Swagger interactive documentation",
      "Third-party OAuth2 & SSO authentication setup"
    ],
    techStack: ["Node.js", "Express.js", "TypeScript", "REST APIs", "gRPC", "Postgres", "Redis", "Swagger"],
    ctaText: "Get API Integration Support",
    featured: true,
  },
  {
    slug: "saas-development",
    title: "Custom SaaS Product Development",
    shortDescription: "End-to-end SaaS application development for entrepreneurs and companies, from multi-tenant architecture to billing subscription flows.",
    fullDescription: "Turn your SaaS concept into a recurring revenue business. I architect multi-tenant SaaS platforms complete with subscription billing, team management, role-based permissions, usage tracking, and automated onboarding across web and mobile.",
    iconName: "Cpu",
    targetAudience: [
      "Founders building B2B or B2C SaaS products",
      "Businesses launching proprietary software services",
      "Startups replacing spreadsheet workflows with web & mobile tools"
    ],
    problemsSolved: [
      "Complex multi-tenant data isolation requirements",
      "Subscription recurring billing integration challenges",
      "Scaling backend systems as user subscriber counts grow"
    ],
    deliverables: [
      "Multi-tenant database schema architecture",
      "Stripe / Razorpay subscription billing & invoice automation",
      "User auth, organization team management, and role permissions",
      "SaaS Admin Dashboard & Mobile Client Application",
      "Production cloud deployment on AWS / Vercel"
    ],
    techStack: ["Next.js 15", "Node.js", "Express", "Flutter", "PostgreSQL", "Stripe API", "AWS"],
    ctaText: "Build Your SaaS Product",
    featured: true,
    internalCrossLinks: [
      {
        title: "AI Integration & RAG Development",
        href: "/services/ai-integration-rag-development",
        badge: "AI & RAG",
        description: "Integrate vector search, document intelligence, and LLM automation into your SaaS."
      },
      {
        title: "PulseFit Mobile SaaS Case Study",
        href: "/projects/flutter-mobile-saas-app",
        badge: "Case Study",
        description: "Review production mobile SaaS engineering with Node.js API and Stripe subscriptions."
      }
    ]
  },
  {
    slug: "admin-dashboard-development",
    title: "Custom Admin Dashboards & Internal Tools",
    shortDescription: "Data-rich, intuitive admin panels and internal workflow dashboards to streamline business operations and analytics.",
    fullDescription: "Equip your operations team with custom internal dashboards that make data management effortless. I build secure admin panels with data grids, chart visualizers, CSV export, role permissions, and real-time database management.",
    iconName: "Activity",
    targetAudience: [
      "Businesses needing custom operational dashboards",
      "E-commerce stores managing inventory and orders",
      "SaaS companies monitoring user analytics and activity"
    ],
    problemsSolved: [
      "Managing business data manually through raw database edits",
      "Lack of clear analytics and real-time operational visibility",
      "Slow, cluttered generic admin dashboard templates"
    ],
    deliverables: [
      "Custom dashboard UI with dark/light theme support",
      "Interactive data tables with search, filter, and pagination",
      "Role-based permission controls (Admin, Manager, Viewer)",
      "Real-time analytics charts & PDF/CSV reporting exports",
      "Fast backend CRUD API integrations"
    ],
    techStack: ["React", "Next.js", "Node.js", "Tailwind CSS", "TypeScript", "PostgreSQL", "MongoDB"],
    ctaText: "Build Custom Dashboard",
    featured: false,
  },
  {
    slug: "performance-optimization",
    title: "Performance Audit & Optimization for Web Applications",
    h1: "Performance Audit & Optimization for Web Applications",
    seoTitle: "Web App Performance & Core Web Vitals Optimization | Abin S Chandran",
    metaDescription: "Professional performance audit and Core Web Vitals optimization for slow or unstable web apps. Identify bottlenecks across frontend, APIs, databases, and caching.",
    shortDescription: "Measurable web application performance audits, Core Web Vitals optimization, database indexing, and backend latency tuning with validated before/after data.",
    heroCopy: "I audit slow or unstable web applications, identify the highest-impact bottlenecks, and validate improvements across frontend delivery, APIs, databases, caching, and deployment.",
    fullDescription: "Is your web application suffering from sluggish page loads, failing Core Web Vitals, high server CPU usage, or degraded API responsiveness? I conduct rigorous, end-to-end technical performance audits that isolate exact bottlenecks across your frontend bundle, network requests, database execution plans, and caching tier. Rather than theoretical advice, you receive a concrete, prioritized remediation roadmap followed by verified before-and-after benchmark reporting.",
    iconName: "ShieldCheck",
    targetAudience: [
      "Startups and SaaS companies suffering from poor Google Search rankings due to failing Core Web Vitals",
      "Businesses with slow Node.js or Next.js applications buckling under concurrent user traffic",
      "Engineering teams needing a specialized external audit to resolve stubborn database or memory bottlenecks"
    ],
    problemsSolved: [
      "Failing Largest Contentful Paint (LCP) and Interaction to Next Paint (INP) dragging down SEO conversions",
      "Unindexed PostgreSQL or MongoDB database queries locking server CPUs during traffic spikes",
      "Bloated client-side JavaScript bundles exceeding 1MB and delaying Time-To-Interactive on mobile"
    ],
    deliverables: [
      "Technical crawl & page-level performance diagnostic report",
      "Core Web Vitals field and lab data audit (LCP, INP, CLS)",
      "Webpack & Next.js JavaScript bundle breakdown with elimination targets",
      "PostgreSQL / MongoDB query EXPLAIN profiling and index recommendations",
      "Prioritized remediation action plan and post-fix validation benchmark report"
    ],
    techStack: ["Chrome DevTools", "Lighthouse v12", "PostgreSQL EXPLAIN", "Redis", "Next.js 15", "Node.js", "k6 Load Testing", "AWS CloudWatch"],
    ctaText: "Request a Performance Audit",
    featured: true,
    primaryCta: {
      text: "Request a Performance Audit",
      href: "/contact"
    },
    secondaryCta: {
      text: "Review High-Throughput Gateway Case Study",
      href: "/projects/omniscale-cloud-gateway"
    },
    auditDeliverables: [
      "1. Technical crawl and page-level architectural review",
      "2. Core Web Vitals audit (LCP, INP, CLS across mobile and desktop)",
      "3. JavaScript bundle analysis and dependency tree tree-shaking",
      "4. Image, video, and font delivery optimization audit",
      "5. API latency, payload size, and P95/P99 bottleneck profiling",
      "6. Database query EXPLAIN plan and missing index audit",
      "7. Caching and CDN edge-routing review (Cloudflare / CloudFront)",
      "8. Deployment, container sizing, and server compute resource review",
      "9. Prioritized remediation action plan ranked by business impact vs effort",
      "10. Post-fix validation report comparing before vs after metrics"
    ],
    labVsFieldNotes: {
      labData: "Controlled synthetic measurements captured via Lighthouse v12 and Chrome DevTools under simulated mobile network throttling (4G) and 4x CPU slowdown. Lab tests reveal reproducible rendering and bundle bottlenecks.",
      fieldData: "Real-user monitoring (RUM) data aggregated over 28-day rolling windows via Google Search Console and Chrome User Experience Report (CrUX), reflecting actual customer device variety and geographic latency.",
      applicationBenchmark: "Controlled backend stress testing executed in isolated staging environments using k6 or Autocannon with concurrent virtual users to identify database connection starvation and compute saturation."
    },
    auditComparisonTable: [
      {
        measure: "Largest Contentful Paint (LCP)",
        before: "4.2s (Failing)",
        changeMade: "Converted hero images to optimized WebP, enabled React 19 streaming Server Components, and inlined critical CSS tokens",
        after: "1.1s (Good)",
        measurementMethod: "Lab: Lighthouse v12 (Mobile Moto G4, throttled 4G, Aug 2025)"
      },
      {
        measure: "API P95 Latency",
        before: "1,850ms",
        changeMade: "Added composite B-Tree indexes on (tenant_id, created_at) and implemented Redis query result caching for hot catalog reads",
        after: "42ms",
        measurementMethod: "Benchmark: k6 load test (250 sustained VUs in staging environment)"
      },
      {
        measure: "Initial JavaScript Transfer",
        before: "840 KiB",
        changeMade: "Employed next/dynamic code splitting for below-the-fold components and eliminated un-tree-shaken legacy dependencies",
        after: "148 KiB (-82%)",
        measurementMethod: "Lab: Webpack Bundle Analyzer & Chrome Network Tab"
      },
      {
        measure: "Peak Load Error Rate (5xx)",
        before: "4.8%",
        changeMade: "Scaled PostgreSQL connection pool via pgBouncer and added Redis rate-limiting queue backpressure buffer",
        after: "0.01%",
        measurementMethod: "Field: Production Datadog APM over 30-day post-launch window"
      }
    ],
    internalCrossLinks: [
      {
        title: "React & Next.js Frontend Development",
        href: "/services/react-nextjs-development",
        badge: "Frontend",
        description: "Modern SSR and Server Component architectures built for speed."
      },
      {
        title: "Node.js & Express Backend Development",
        href: "/services/nodejs-development",
        badge: "Backend",
        description: "Optimized asynchronous APIs with sub-20ms database queries."
      },
      {
        title: "OmniScale Cloud Gateway Case Study",
        href: "/projects/omniscale-cloud-gateway",
        badge: "Case Study",
        description: "How we routed 50,000+ RPS with sub-8ms latency and 35% cost reduction."
      },
      {
        title: "Node.js REST API Audit Checklist",
        href: "/blog/nodejs-rest-api-audit-checklist",
        badge: "Engineering Guide",
        description: "A technical checklist for diagnosing slow or unreliable backend architectures."
      },
      {
        title: "Next.js Core Web Vitals Optimization",
        href: "/blog/nextjs-core-web-vitals-optimization",
        badge: "Engineering Guide",
        description: "What to measure and optimize before considering an expensive rewrite."
      },
      {
        title: "Request a Performance Audit",
        href: "/contact",
        badge: "Contact",
        description: "Get a prioritized performance assessment for your web application."
      }
    ]
  }
];
