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
}

export const SERVICES: ServiceOffering[] = [
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
    title: "Application Maintenance & Performance Optimization",
    shortDescription: "Accelerate slow web and Flutter mobile applications, fix stubborn bugs, reduce cloud server costs, and optimize database query performance.",
    fullDescription: "Is your web or Flutter mobile application loading slowly or crashing during traffic spikes? I diagnose performance bottlenecks, optimize SQL indexes, reduce JavaScript/Dart bundle size, implement caching, and eliminate critical bugs to make your app fast and stable.",
    iconName: "ShieldCheck",
    targetAudience: [
      "Companies with slow React/Next.js, Node.js, or Flutter applications",
      "Businesses experiencing high AWS / server hosting bills",
      "App owners needing ongoing maintenance and bug fixes"
    ],
    problemsSolved: [
      "Poor Core Web Vitals scores driving away search traffic",
      "High database CPU usage under moderate traffic load",
      "Frequent memory leaks and server crash outages"
    ],
    deliverables: [
      "Comprehensive performance audit & bottleneck report",
      "Database query indexing & EXPLAIN query optimization",
      "Frontend & mobile code splitting & image/asset compression",
      "Redis caching layer implementation for hot data",
      "Bug fixes and security vulnerability patching"
    ],
    techStack: ["Node.js", "React", "Next.js", "Flutter", "PostgreSQL", "Redis", "Chrome DevTools", "AWS"],
    ctaText: "Optimize My Application",
    featured: false,
  }
];
