export interface IntegrationWorkflow {
  title: string;
  description: string;
  technicalSteps: string[];
}

export interface IntegrationComparison {
  title: string;
  subtitle: string;
  directName: string;
  thirdPartyName: string;
  features: {
    name: string;
    direct: string;
    thirdParty: string;
    advantage: boolean;
  }[];
}

export interface IntegrationCodeSnippet {
  title: string;
  filename: string;
  description: string;
  code: string;
}

export interface IntegrationService {
  slug: string;
  name: string;
  seoTitle?: string;
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
  comparison?: IntegrationComparison;
  codeSnippet?: IntegrationCodeSnippet;
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
    seoTitle: "WhatsApp Business Cloud API Integration Services & Setup | Abin S Chandran",
    badge: "Conversational Automation & Meta Cloud API",
    category: "Messaging & Alerts",
    shortDescription:
      "Enterprise WhatsApp Business Cloud API integration for automated order alerts, customer support bots, appointment confirmations, and transactional updates.",
    h1: "WhatsApp Business Cloud API Integration Services",
    metaDescription:
      "Direct Meta WhatsApp Business Cloud API integration & setup services by Abin S Chandran. Automated notifications, conversational AI bots, secure webhooks, and CRM sync.",
    heroPitch:
      "I engineer production-ready WhatsApp Business Cloud API integrations directly with Meta's official Graph endpoints. Eliminate third-party SaaS markups (WATI, Twilio, Interakt), automate mission-critical transactional alerts, and deploy high-converting interactive bots with 98% open rates.",
    businessProblem:
      "Transactional emails suffer from 18-22% open rates, while SMS suffers from low engagement and high carrier filtering. Modern businesses require direct WhatsApp communication. However, building directly on Meta's WhatsApp Cloud API requires mastering permanent System User tokens, SHA-256 webhook signature verification, HSM template approval workflows, phone number verification, and asynchronous status tracking.",
    technicalScope: [
      "Meta WhatsApp Cloud API setup, Business Manager verification & Permanent System User access tokens",
      "Two-way interactive webhook listener with SHA-256 signature verification (X-Hub-Signature-256)",
      "High-throughput transactional notifications: OTPs, order updates, invoices, and payment links",
      "Template message drafting & approval optimization (HSM parameter mapping for marketing, utility, and auth)",
      "Rich interactive messaging: Quick-Reply buttons, List selectors, CTA links, and catalog products",
      "Media dispatch pipeline: Automated PDF invoice generation, tickets, dynamic images, and documents",
      "Conversational state machine and AI/LLM bot integration for 24/7 automated qualification & support",
      "BullMQ / Redis queued delivery pipeline with automatic retry on rate-limiting or delivery failures",
      "Bi-directional synchronization with PostgreSQL, Supabase, internal CRMs, and ERP webhooks",
      "Fallback routing: Automated SMS failover dispatch when WhatsApp delivery fails",
    ],
    securityAndReliability: [
      {
        title: "Strict Webhook Verification",
        description:
          "Zero-trust endpoint handling Meta's hub.verify_token challenge and strict cryptographic validation of incoming X-Hub-Signature-256 headers using HMAC-SHA256.",
      },
      {
        title: "Rate Limit Buffering & Idempotency",
        description:
          "Distributed Redis / BullMQ message queues buffer outbound bursts, strictly honoring Meta Cloud API tier limits (80–1,000 msgs/sec) with per-message idempotency.",
      },
      {
        title: "Lifecycle Status Reconciliation",
        description:
          "Continuous tracking of sent, delivered, read, and failed statuses stored directly into database audit logs for 100% transparency on deliverability.",
      },
    ],
    comparison: {
      title: "Direct Meta Cloud API vs. Third-Party BSP Aggregators",
      subtitle: "Why building directly on Meta's Cloud API provides maximum control and massive cost savings.",
      directName: "Direct Meta Cloud API (My Integration)",
      thirdPartyName: "Aggregators (Twilio, WATI, AiSensy)",
      features: [
        {
          name: "Monthly Platform Fee",
          direct: "$0 / month (No subscription fees)",
          thirdParty: "$49 – $399 / month recurring software license",
          advantage: true,
        },
        {
          name: "Per-Message Markup",
          direct: "0% markup (Pay Meta's exact conversation rates)",
          thirdParty: "20% – 50% markup on top of Meta fees",
          advantage: true,
        },
        {
          name: "Data Privacy & Compliance",
          direct: "Customer data stays in your own database / cloud",
          thirdParty: "Customer chats stored on 3rd-party SaaS databases",
          advantage: true,
        },
        {
          name: "Custom Bot Logic & AI",
          direct: "Full control: Custom Next.js, Node, Python, or LLMs",
          thirdParty: "Constrained to rigid vendor visual flow-builders",
          advantage: true,
        },
        {
          name: "Throughput & Rate Limits",
          direct: "Direct access to Tier 1-3 Meta limits (up to 1,000 msg/sec)",
          thirdParty: "Shared queue throttling across vendor customers",
          advantage: true,
        },
      ],
    },
    codeSnippet: {
      title: "Production Meta Webhook Listener & Signature Verification",
      filename: "api/webhooks/whatsapp/route.ts",
      description: "Next.js / Node.js webhook handler implementing hub verification and HMAC-SHA256 payload integrity check.",
      code: `import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// 1. Webhook Challenge Verification (GET)
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === process.env.META_VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  }
  return new Response("Forbidden", { status: 403 });
}

// 2. Incoming Event & Signature Verification (POST)
export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-hub-signature-256");

  const expectedSig = "sha256=" + crypto
    .createHmac("sha256", process.env.META_APP_SECRET!)
    .update(rawBody)
    .digest("hex");

  if (signature !== expectedSig) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const payload = JSON.parse(rawBody);
  // Queue incoming message or delivery status to Redis / BullMQ for async processing
  await messageQueue.add("whatsapp-event", payload);

  return NextResponse.json({ status: "success" });
}`,
    },
    supportedWorkflows: [
      {
        title: "Transactional Order Confirmation & Dispatch Notifications",
        description: "Instant notification sequence triggered by backend purchase and dispatch events.",
        technicalSteps: [
          "Customer completes checkout on web or mobile application",
          "Backend worker renders dynamic parameters into pre-approved Meta HSM template",
          "WhatsApp Cloud API delivers message with clickable tracking link and support button",
          "Delivery receipts (sent, delivered, read) synchronize in real-time to internal audit log",
        ],
      },
      {
        title: "Two-Way AI Support & Lead Qualification Bot",
        description: "Automated conversational agent answering customer queries and qualifying leads 24/7.",
        technicalSteps: [
          "Customer sends inbound message or clicks 'Click to WhatsApp' ad",
          "Webhook validates signature and passes customer intent to state machine or LLM backend",
          "Bot sends dynamic Quick-Reply buttons or interactive List menu options",
          "Warm qualified leads are automatically routed to sales reps with CRM sync",
        ],
      },
      {
        title: "Automated Appointment & Payment Reminders",
        description: "Scheduled recurring triggers reducing customer no-shows and outstanding invoices.",
        technicalSteps: [
          "Cron scheduler identifies appointments or overdue balances 24 hours prior",
          "WhatsApp Cloud API dispatches interactive notification with 'Confirm', 'Reschedule', or 'Pay Now' action",
          "Customer tap updates appointment state instantly in database without human intervention",
        ],
      },
    ],
    exampleUseCases: [
      {
        industry: "Healthcare Clinics & Diagnostics",
        scenario: "Automating lab test report PDF delivery and appointment reminder confirmations via direct WhatsApp Cloud API.",
        outcome: "Eliminated no-shows by 38% and removed manual WhatsApp sending by clinic reception staff.",
      },
      {
        industry: "B2B Wholesalers & Logistics",
        scenario: "Automated dispatch notifications with PDF invoice attachments sent to retail store owners.",
        outcome: "100% automated invoice delivery with instant payment reminder buttons.",
      },
      {
        industry: "Direct-to-Consumer (D2C) & E-Commerce",
        scenario: "Abandoned cart recovery alerts and automated COD confirmation buttons directly over WhatsApp.",
        outcome: "Recovered 19% of abandoned checkouts and reduced Return-to-Origin (RTO) courier losses by 27%.",
      },
    ],
    faqs: [
      {
        question: "How does Meta's WhatsApp Business Cloud API differ from On-Premises or 3rd-party BSPs?",
        answer:
          "Meta hosts the Cloud API directly on their global infrastructure, offering higher throughput, 99.9% uptime, and zero server maintenance. Unlike third-party BSPs (Twilio, WATI, Interakt), you pay no recurring SaaS monthly license fees and no per-message markups—you pay Meta directly at official wholesale conversation rates.",
      },
      {
        question: "Can I migrate my existing WhatsApp Business number to the Cloud API without losing it?",
        answer:
          "Yes. If your number is currently on the regular WhatsApp Business app or another provider, we can back up the data, delete the old business account association, and immediately register the number onto Meta's Cloud API under your official Meta Business Manager.",
      },
      {
        question: "Do I need to pay monthly fees to third-party providers like Twilio or Wati?",
        answer:
          "No. By integrating directly with Meta's official WhatsApp Business Cloud API, you eliminate third-party per-message markup fees. You only pay Meta's standard transparent per-conversation rates (with 1,000 free service conversations per month).",
      },
      {
        question: "How do template message approvals (HSM) work?",
        answer:
          "Meta requires proactive outbound messages to use pre-approved templates categorized as Utility, Authentication (OTP), or Marketing. We set up automated template submission through Meta Graph API or Business Manager, ensuring quick approval within minutes while adhering to Meta's strict formatting guidelines.",
      },
      {
        question: "Can you build an automated chat bot to answer customer questions?",
        answer:
          "Yes. I build custom conversational state machines or connect intelligent AI/LLM backends to answer frequently asked business questions, query product catalogs from your database, and collect lead details before seamlessly handing off to human support.",
      },
      {
        question: "How do we prevent WhatsApp from banning our phone number?",
        answer:
          "Meta assigns a quality rating to each phone number. We protect your rating by strictly implementing opt-in consent mechanisms, honoring user opt-outs, categorizing templates accurately, and using queue-based rate limiting to prevent spam flagging.",
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
