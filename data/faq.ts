export interface FaqItem {
  question: string;
  answer: string;
  category: "Services" | "Process" | "Stack" | "Location & Remote";
}

export const FAQS: FaqItem[] = [
  {
    question: "What types of freelance software development projects do you handle?",
    answer: "I specialize in full-stack web applications, SaaS platforms, Node.js & Express REST APIs, React and Next.js frontends, custom admin dashboards, third-party API integrations, and database performance optimization for startups, small businesses, and growing digital brands.",
    category: "Services",
  },
  {
    question: "Are you available for remote freelance projects in India and internationally?",
    answer: "Yes! I am based in Kerala, India, and work with clients across India (Bengaluru, Mumbai, Delhi, Kochi, Trivandrum) as well as international remote clients in North America, Europe, Australia, and the Middle East.",
    category: "Location & Remote",
  },
  {
    question: "Can you build a custom web application or MVP completely from scratch?",
    answer: "Absolutely. I take custom software projects from initial concept and architecture blueprinting all the way to database modeling, REST API development, responsive UI implementation, and cloud deployment.",
    category: "Services",
  },
  {
    question: "Can you work with an existing codebase to add features, fix bugs, or optimize speed?",
    answer: "Yes. I frequently audit existing codebases in Node.js, Express, React, and Next.js to fix performance bottlenecks, refactor backend APIs, resolve database query slowdowns, and introduce modern features without breaking existing workflows.",
    category: "Process",
  },
  {
    question: "What core technologies do you use for full-stack web development?",
    answer: "My core stack includes Node.js, Express.js, JavaScript, TypeScript, React 19, Next.js 15, PostgreSQL (with pgvector), MongoDB, Redis, Tailwind CSS, Docker, and AWS cloud infrastructure.",
    category: "Stack",
  },
  {
    question: "Do you provide backend and API development services separately?",
    answer: "Yes. If you already have a design team or mobile developers and only need a robust, high-performance Node.js REST API or microservice backend, I can build and document the standalone backend API.",
    category: "Services",
  },
  {
    question: "How do you estimate project costs and timelines?",
    answer: "Project cost and timeline depend on scope, complexity, required integrations, and deadline constraints. After an initial discovery discussion, I provide a detailed project roadmap with fixed-scope milestones or flexible milestone-based billing.",
    category: "Process",
  },
  {
    question: "Do you offer deployment, hosting, and ongoing post-launch maintenance?",
    answer: "Yes. I configure cloud deployment pipelines on AWS, Vercel, or Docker containers, set up SSL, domain DNS, automated backups, and offer ongoing technical maintenance contracts to keep your web application secure and updated.",
    category: "Process",
  },
  {
    question: "How do we communicate and track project progress?",
    answer: "I maintain transparent communication using email, Slack, WhatsApp, Google Meet, or Zoom, with regular code updates pushed to GitHub repositories and milestone progress reports.",
    category: "Process",
  },
  {
    question: "How do I start a project with you?",
    answer: "You can reach out directly via email at abinschandran1@gmail.com, send a message through the contact form, or use the interactive CLI terminal on this website. I typically respond within 24 hours to schedule an initial project discovery call.",
    category: "Process",
  }
];
