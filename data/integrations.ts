export interface IntegrationWorkflow {
  title: string;
  description: string;
  technicalSteps: string[];
}

export interface IntegrationService {
  slug: string;
  name: string;
  badge: string;
  category: "Payments & Billing" | "Messaging & Alerts" | "Geolocation & Maps";
  shortDescription: string;
  h1: string;
  metaDescription: string;
  heroPitch: string;
  businessProblem: string;
  technicalScope: string[];
  securityAndReliability: {
    title: string;
    description: string;
  }[];
  supportedWorkflows: IntegrationWorkflow[];
  exampleUseCases: {
    industry: string;
    scenario: string;
    outcome: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const INTEGRATIONS: IntegrationService[] = [
  {
    slug: "stripe",
    name: "Stripe & SaaS Billing Integration",
    badge: "Global SaaS & Subscriptions",
    category: "Payments & Billing",
    shortDescription:
      "Production-grade Stripe integration for SaaS subscriptions, usage-based metering, checkout sessions, customer portal, and idempotent webhook listeners.",
    h1: "Stripe Payment & SaaS Subscription Integration Services",
    metaDescription:
      "Production Stripe integration for SaaS and web applications by Abin S Chandran. Idempotent webhook handling, subscription lifecycles, and SCA compliance.",
    heroPitch:
      "I engineer resilient, secure Stripe payment backends for modern SaaS products and digital platforms. From tiered subscription billing and usage metering to bulletproof webhook listeners and automated invoice sync, your payments infrastructure runs with zero lost revenue.",
    businessProblem:
      "Most naive payment integrations break when webhooks arrive out-of-order, fail to handle subscription grace periods or failed card retries, or leave customers trapped when changing tiers. A production billing system must be strictly idempotent, replay-safe, and self-reconciling.",
    technicalScope: [
      "Stripe Checkout & Elements with custom brand theming",
      "Tiered, metered, and seat-based SaaS recurring subscriptions",
      "Stripe Customer Portal integration for self-serve cancellation and invoice downloads",
      "Strict webhook signature verification using `stripe.webhooks.constructEvent`",
      "Idempotency key enforcement on all mutating API calls",
      "Automated dunning logic, payment failure notifications, and grace period access controls",
      "Strong Customer Authentication (SCA) & 3D Secure 2 compliance",
      "Stripe Tax calculation and automated PDF invoice dispatch",
    ],
    securityAndReliability: [
      {
        title: "Idempotency & Replay Protection",
        description:
          "All webhook events (`invoice.payment_succeeded`, `customer.subscription.updated`, etc.) are deduplicated in PostgreSQL using unique Stripe event IDs before triggering database mutations.",
      },
      {
        title: "Out-of-Order Webhook Resilience",
        description:
          "Event timestamps and object versioning guarantee that delayed webhooks never overwrite fresher state from subsequent updates.",
      },
      {
        title: "Zero-Downtime Secret Rotation",
        description:
          "Dual webhook endpoint signing secrets allow seamless rollover without dropping live webhook notifications during credential updates.",
      },
    ],
    supportedWorkflows: [
      {
        title: "SaaS Subscription Lifecycle",
        description: "Complete handling from initial checkout through renewals, upgrades, downgrades, and cancellations.",
        technicalSteps: [
          "Frontend initializes Stripe Checkout Session with customer reference and success/cancel URLs",
          "Customer authenticates payment with 3D Secure 2",
          "Webhook `checkout.session.completed` activates subscriber role in database",
          "Subsequent `invoice.payment_succeeded` extends subscription validity period",
          "`customer.subscription.deleted` downgrades tenant to free tier without data loss",
        ],
      },
      {
        title: "Usage-Based Metered Billing",
        description: "Tracking high-volume API requests or storage units and reporting to Stripe for accurate end-of-month invoicing.",
        technicalSteps: [
          "Microservice buffers usage metrics in Redis",
          "Batch cron job flushes usage aggregates to Stripe Metering API",
          "Stripe automatically calculates tiered price overages on billing anniversary",
        ],
      },
    ],
    exampleUseCases: [
      {
        industry: "B2B SaaS",
        scenario: "Multi-tenant workspace requiring per-seat billing and self-service team management.",
        outcome: "Zero support tickets for billing updates; 100% automated seat provisioning and invoice generation.",
      },
      {
        industry: "Digital Media & News",
        scenario: "Paywall subscription with monthly and annual plans and automatic coupon code application.",
        outcome: "Sub-second checkout flow with automated subscription renewals and card expiry reminder emails.",
      },
    ],
    faqs: [
      {
        question: "Can you migrate existing Stripe customers to a new pricing model?",
        answer:
          "Yes. I write zero-downtime migration scripts that update existing subscription items in Stripe while preserving active billing cycles, grandfathered discount rates, and proration rules.",
      },
      {
        question: "How do you test Stripe webhooks in staging?",
        answer:
          "Staging environments are paired with dedicated Stripe Test Mode accounts, leveraging the Stripe CLI for deterministic mock event forwarding and automated end-to-end webhook regression tests.",
      },
    ],
  },
  {
    slug: "razorpay",
    name: "Razorpay & Indian UPI Integration",
    badge: "India Payments & UPI",
    category: "Payments & Billing",
    shortDescription:
      "Robust Razorpay payment integration for India: UPI QR, Google Pay, PhonePe, net banking, recurring auto-debit, and HMAC-SHA256 signature verification.",
    h1: "Razorpay Payment Gateway & UPI Integration Services",
    metaDescription:
      "Enterprise Razorpay integration for web and mobile apps by Abin S Chandran. UPI Autopay, webhook verification, order creation, and RBI compliance.",
    heroPitch:
      "I implement seamless, high-converting Razorpay checkout workflows for Indian startups, e-commerce stores, and SaaS businesses. From instant UPI intent flows to automated HMAC-SHA256 webhook verification and auto-refund handling, your domestic revenue collection operates flawlessly.",
    businessProblem:
      "In India, over 75% of digital consumer payments occur over UPI. If your checkout drops user intent, mishandles UPI timeout callbacks, or fails to verify webhook signatures securely, payments get stuck in limbo and customers churn.",
    technicalScope: [
      "Custom Razorpay Standard & Custom Checkout integration",
      "Native UPI Intent flow for mobile apps (PhonePe, Google Pay, Paytm)",
      "Razorpay Route for marketplace multi-vendor fund splits",
      "Razorpay Subscriptions & UPI Autopay for recurring Indian billing",
      "Server-side Order creation (`/v1/orders`) preventing client-side price tampering",
      "Strict HMAC-SHA256 signature verification for payment callbacks and webhooks",
      "Automated instant refunds and dispute status synchronization",
      "GST invoice data capture and GSTIN tax breakdown generation",
    ],
    securityAndReliability: [
      {
        title: "Cryptographic HMAC Verification",
        description:
          "Every payment callback verifies the combination of `order_id|payment_id` against the secret key using crypto HMAC-SHA256 before marking orders as paid.",
      },
      {
        title: "Payment Reconciliation Engine",
        description:
          "A fallback scheduled reconciler queries the Razorpay API for pending transactions, capturing payments that succeeded even if customer closed the browser prematurely.",
      },
      {
        title: "RBI Compliance & Tokenization",
        description:
          "Full adherence to Reserve Bank of India (RBI) card tokenization directives and two-factor authentication requirements.",
      },
    ],
    supportedWorkflows: [
      {
        title: "Server-Validated Checkout Flow",
        description: "Tamper-proof order creation and payment capture sequence.",
        technicalSteps: [
          "Frontend requests checkout: server calculates cart total from database and calls Razorpay API to generate Order ID",
          "Razorpay modal opens with prefilled customer details and localized UPI apps",
          "Customer completes UPI payment in their preferred mobile UPI application",
          "Client receives response tokens and submits to backend verification endpoint",
          "Backend validates cryptographic signature and delivers digital goods / activates service",
        ],
      },
    ],
    exampleUseCases: [
      {
        industry: "E-Commerce & Retail",
        scenario: "D2C online store needing instant UPI checkout with automatic order slip generation.",
        outcome: "Reduced checkout drop-off by 24% with sub-3-second UPI completion and automated order dispatch.",
      },
      {
        industry: "Online Education & EdTech",
        scenario: "Course platform requiring installment payments and automated GST invoicing.",
        outcome: "100% automated course unlocking with immediate SMS and WhatsApp receipt delivery.",
      },
    ],
    faqs: [
      {
        question: "Can you integrate Razorpay into both Next.js web and Flutter mobile apps?",
        answer:
          "Yes. I integrate Razorpay SDK across web (Next.js/React) and mobile (Flutter `razorpay_flutter`), backed by a unified Node.js API service for server order creation and webhook processing.",
      },
      {
        question: "How do you prevent users from tampering with payment amounts?",
        answer:
          "The payment amount is never sent from the frontend. The server calculates cart prices directly from authoritative database records and registers the order with Razorpay, ensuring the customer can only pay the exact verified amount.",
      },
    ],
  },
  {
    slug: "whatsapp-business-api",
    name: "WhatsApp Business Cloud API",
    badge: "Conversational Automation",
    category: "Messaging & Alerts",
    shortDescription:
      "Enterprise WhatsApp Business Cloud API integration for automated order alerts, customer support bots, appointment confirmations, and transactional updates.",
    h1: "WhatsApp Business Cloud API Integration Services",
    metaDescription:
      "Custom WhatsApp Business Cloud API integration by Abin S Chandran. Automated notifications, conversational bots, webhook listeners, and CRM sync.",
    heroPitch:
      "I build custom, reliable WhatsApp Business Cloud API integrations that connect directly to your backend applications, CRMs, and e-commerce stores. Deliver high-engagement transactional alerts, customer support flows, and lead qualification bots with 98% open rates.",
    businessProblem:
      "Transactional emails suffer from low open rates (18-22%) and spam filters. Customers expect real-time notifications, delivery updates, and support on WhatsApp. Integrating Meta's Cloud API requires handling rate limits, webhook verification tokens, HSM template approvals, and message status callbacks.",
    technicalScope: [
      "Meta WhatsApp Cloud API setup and system user token management",
      "Two-way interactive webhook listener with SHA-256 payload verification",
      "Template message submission and parameter mapping (order status, appointment, OTP)",
      "Interactive message elements: Quick Reply buttons, List menus, and Call-to-Action links",
      "Media message delivery: PDF invoices, tickets, catalogs, and images",
      "Conversational state machine for customer support and automated qualification",
      "Fallback SMS routing when WhatsApp delivery fails",
      "Seamless integration with internal databases, PostgreSQL, and CRM webhooks",
    ],
    securityAndReliability: [
      {
        title: "Webhook Hub Verification",
        description:
          "Robust endpoint handling Meta's `hub.verify_token` challenge and continuous verification of incoming `X-Hub-Signature-256` headers.",
      },
      {
        title: "Rate Limit Buffering",
        description:
          "Message queuing system (BullMQ / Redis) ensuring bursts of notifications never exceed Meta API tier quotas.",
      },
      {
        title: "Delivery Status Tracking",
        description:
          "Automatic tracking of `sent`, `delivered`, and `read` receipts directly into your database for transparent delivery analytics.",
      },
    ],
    supportedWorkflows: [
      {
        title: "Transactional Order Confirmation & Dispatch",
        description: "Instant notification sequence triggered by backend purchase events.",
        technicalSteps: [
          "Customer completes order on web or mobile app",
          "Backend worker renders dynamic parameters into pre-approved WhatsApp HSM template",
          "WhatsApp Cloud API delivers message with clickable tracking button",
          "Delivery and read statuses synchronize back to customer history log",
        ],
      },
    ],
    exampleUseCases: [
      {
        industry: "Healthcare Clinics & Diagnostics",
        scenario: "Automating lab test report PDF delivery and appointment reminder confirmations.",
        outcome: "Eliminated no-shows by 38% and removed manual WhatsApp sending by clinic reception staff.",
      },
      {
        industry: "B2B Wholesalers & Logistics",
        scenario: "Automated dispatch notifications with PDF invoice attachments sent to retail store owners.",
        outcome: "100% automated invoice delivery with instant payment reminder buttons.",
      },
    ],
    faqs: [
      {
        question: "Do I need to pay monthly fees to third-party providers like Twilio or Wati?",
        answer:
          "No. I integrate directly with Meta's official WhatsApp Business Cloud API, eliminating third-party per-message markup fees. You only pay Meta's standard low per-conversation rates.",
      },
      {
        question: "Can you build an automated chat bot to answer customer questions?",
        answer:
          "Yes. I build custom conversational state machines or connect intelligent AI/RAG backends to answer frequently asked business questions and collect customer inquiry details before routing to a human team member.",
      },
    ],
  },
  {
    slug: "google-maps",
    name: "Google Maps Platform & Geolocation",
    badge: "Location & Fleet Tracking",
    category: "Geolocation & Maps",
    shortDescription:
      "High-performance Google Maps integration: Places autocomplete, geocoding, real-time driver tracking, route optimization, and distance calculations.",
    h1: "Google Maps Platform & Geolocation Integration Services",
    metaDescription:
      "Custom Google Maps Platform integration for web and Flutter mobile apps by Abin S Chandran. Geocoding, Places API, route calculation, and real-time tracking.",
    heroPitch:
      "I integrate Google Maps Platform and geolocation APIs into web portals and Flutter mobile apps. From smooth driver tracking and location autocompletion to intelligent distance matrix calculations and server-side geocoding, I build location features that are fast and cost-optimized.",
    businessProblem:
      "Unoptimized Google Maps implementations cause ballooning API bills, battery drain on mobile devices, and sluggish UI rendering. High-performance location architecture requires client-side session token caching, server-side reverse geocoding, and smooth polyline interpolation.",
    technicalScope: [
      "Places Autocomplete with session token optimization to reduce API costs by up to 60%",
      "Forward and reverse geocoding with server-side Redis caching",
      "Directions API and Distance Matrix for delivery estimation and dispatch routing",
      "Real-time GPS tracking in Flutter with WebSocket streaming and smooth marker animations",
      "Dynamic custom map styling matching dark-mode and custom brand palettes",
      "Geofencing boundaries and polygon containment calculations",
      "Static Maps API caching for fast, low-cost email and receipt embeds",
      "Strict Google Cloud API key restrictions (HTTP referrers, Android SHA-1, iOS bundle IDs)",
    ],
    securityAndReliability: [
      {
        title: "API Cost Control & Session Tokens",
        description:
          "Session tokens group Autocomplete keystroke queries into a single billable event, preventing runaway Google Cloud bills.",
      },
      {
        title: "Aggressive Server-Side Geocode Caching",
        description:
          "Common addresses and zip code coordinates are cached in Redis and PostgreSQL, cutting repeat API calls by up to 80%.",
      },
      {
        title: "Strict Key Hardening",
        description:
          "All frontend Google Maps keys are locked to specific domain origins or app bundle signatures; sensitive API calls (Distance Matrix, Elevation) execute exclusively via protected backend proxies.",
      },
    ],
    supportedWorkflows: [
      {
        title: "Real-Time Driver & Delivery Tracking",
        description: "End-to-end flow from mobile driver app to consumer tracking screen.",
        technicalSteps: [
          "Driver Flutter app broadcasts GPS coordinates via WebSockets with battery-conscious throttle",
          "Backend computes ETA using Distance Matrix with live traffic data",
          "Customer Next.js web or Flutter app renders vehicle marker with smooth interpolation along polyline",
        ],
      },
    ],
    exampleUseCases: [
      {
        industry: "Logistics & On-Demand Delivery",
        scenario: "Real-time dispatch system tracking delivery fleets across regional routes.",
        outcome: "Smooth, 60fps marker tracking on mobile with automated arrival proximity notifications.",
      },
      {
        industry: "Real Estate & Property Portals",
        scenario: "Interactive property map with neighborhood amenities, boundary polygons, and radius filtering.",
        outcome: "Sub-second map rendering with custom dark styling and cluster marker management.",
      },
    ],
    faqs: [
      {
        question: "How do you keep Google Maps API costs manageable?",
        answer:
          "I use Places session tokens, server-side caching of coordinates, debounced search inputs, and Static Maps for read-only previews. These optimizations routinely reduce client API billing by 40% to 70%.",
      },
      {
        question: "Can you implement custom map themes matching our website design?",
        answer:
          "Yes. I apply custom JSON map styles directly to Google Maps, ensuring seamless integration with dark mode, obsidian palettes, or custom brand themes.",
      },
    ],
  },
];
