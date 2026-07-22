export interface TimelineMilestone {
  year: string;
  role: string;
  company: string;
  location: string;
  type: "Architecture" | "Engineering Lead" | "Full Stack";
  description: string;
  highlights: string[];
  technologies: string[];
}

export const CAREER_TIMELINE: TimelineMilestone[] = [
  {
    year: "2024 - Present",
    role: "Lead Solution Architect & Principal Full Stack Engineer",
    company: "Enterprise Cloud Solutions / Strategic Consulting",
    location: "Global Remote",
    type: "Architecture",
    description: "Spearheading multi-region cloud infrastructure, microservice migrations, and AI Knowledge Mesh platforms for global clients.",
    highlights: [
      "Architected Envoy API Gateway processing 50k+ RPS with sub-8ms P99 routing latency.",
      "Designed Enterprise RAG pipeline supporting 10M+ vectorized legal documents with RBAC security.",
      "Reduced infrastructure costs by 35% across AWS Kubernetes environments."
    ],
    technologies: ["Next.js 15", "Go", "AWS EKS", "Envoy", "Kafka", "PostgreSQL", "Terraform"]
  },
  {
    year: "2022 - 2024",
    role: "Senior Full Stack & Systems Architect",
    company: "High-Growth FinTech Infrastructure",
    location: "Hybrid / Remote",
    type: "Engineering Lead",
    description: "Led core ledger and settlement engine development, handling high-frequency double-entry financial accounting.",
    highlights: [
      "Engineered real-time settlement engine processing $12M+ in daily transaction volume.",
      "Implemented CQRS pattern reducing statement query times from 1.2s to 14ms.",
      "Mentored a team of 12 full-stack and backend engineers in distributed systems design."
    ],
    technologies: ["Node.js", "TypeScript", "Kafka", "Redis", "Docker", "PostgreSQL"]
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Engineer & Micro-Frontend Specialist",
    company: "Enterprise SaaS Suite",
    location: "On-site / Remote",
    type: "Full Stack",
    description: "Pioneered unified design systems and module-federated architecture across multiple SaaS web applications.",
    highlights: [
      "Built HyperDrive Design System adopted across 12 core web applications.",
      "Achieved 100/100 WCAG 2.2 AA accessibility score across all component libraries.",
      "Accelerated product feature velocity by 3x through modular UI components."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Module Federation", "Framer Motion"]
  },
  {
    year: "2019 - 2021",
    role: "Software Engineer & Backend Developer",
    company: "Digital Innovation Lab",
    location: "Tech Hub",
    type: "Full Stack",
    description: "Developed RESTful APIs, database schema optimizations, and customer-facing dashboard interfaces.",
    highlights: [
      "Optimized SQL query indexes reducing server CPU utilization by 40%.",
      "Integrated secure payment gateways and OAuth2 authentication pipelines.",
      "Delivered 15+ custom software projects on schedule with zero critical production bugs."
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "React", "AWS S3"]
  }
];
