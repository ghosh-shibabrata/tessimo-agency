/**
 * Tessimo AI — Agency Knowledge Base Core
 * Completely self-contained knowledge matrix for Tessimo Agency.
 * Operates 100% deterministically without external Generative AI APIs.
 */

export interface PricingTier {
  id: string;
  name: string;
  category: "website" | "automation" | "custom";
  priceINR: string;
  priceUSD: string;
  period?: string;
  description: string;
  timeline: string;
  features: string[];
  recommendedFor: string;
}

export interface AgencyKnowledge {
  name: string;
  tagline: string;
  mission: string;
  email: string;
  founder: {
    name: string;
    role: string;
    email: string;
    linkedin: string;
    github: string;
    bio: string;
  };
  responseProtocol: string;
  supportAvailability: string;
  demoDuration: string;
  techStack: string[];
  websitePricing: {
    inr: PricingTier[];
    usd: PricingTier[];
  };
  automationPricing: {
    inr: PricingTier;
    usd: PricingTier;
  };
  customPlan: {
    inr: string;
    usd: string;
    description: string;
  };
  services: {
    title: string;
    description: string;
    capabilities: string[];
  }[];
  turnaroundTimes: {
    service: string;
    timeline: string;
    details: string;
  }[];
  faq: {
    question: string;
    answer: string;
    category: string;
  }[];
}

export const TESSIMO_KNOWLEDGE: AgencyKnowledge = {
  name: "Tessimo",
  tagline: "Never miss a lead. Never lose a customer.",
  mission:
    "We build premium websites that turn visitors into booked clients, and 24/7 AI systems that automatically answer inquiries and schedule appointments.",
  email: "hello@tessimo.in",
  founder: {
    name: "Shibabrata Ghosh",
    role: "Founder & Lead Creative Technologist",
    email: "shibabrata@tessimo.in",
    linkedin: "https://www.linkedin.com/in/shibabrata-ghosh/",
    github: "https://github.com/ghosh-shibabrata",
    bio: "Systems architect and creative technologist leading Tessimo. Personally oversees all client architectures with a guarantee of under 2-hour response, 100% IP ownership, and zero junior handoffs.",
  },
  responseProtocol: "RESPONSE PROTOCOL: UNDER 2 BUSINESS HOURS",
  supportAvailability: "Remote Worldwide • Mon—Fri (24/7 Automated Ingestion)",
  demoDuration: "15-minute executive consultation",
  techStack: [
    "Next.js 15 App Router",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Vercel Fluid Compute",
    "Node.js",
    "n8n / Make.com / Custom Webhooks",
    "Cal.com / Calendly integrations",
  ],
  websitePricing: {
    inr: [
      {
        id: "web-starter-inr",
        name: "Starter Platform",
        category: "website",
        priceINR: "₹4,999",
        priceUSD: "$499",
        period: "one-time",
        description: "High-converting, responsive single-page landing architecture for fast market launch.",
        timeline: "< 1 Week (3–5 Business Days)",
        recommendedFor: "Solo founders, new ventures, and local businesses wanting a high-speed, modern web presence.",
        features: [
          "Bespoke single-page landing design",
          "Sub-second load performance & Core Web Vitals",
          "Mobile-first responsive architecture",
          "Integrated lead capture form with email alerts",
          "SEO meta tags & schema markup",
          "14-day post-launch support",
        ],
      },
      {
        id: "web-gold-inr",
        name: "Signature (Gold)",
        category: "website",
        priceINR: "₹9,999",
        priceUSD: "$799",
        period: "one-time",
        description: "Comprehensive multi-section brand experience engineered for elevated market positioning.",
        timeline: "1–2 Weeks",
        recommendedFor: "Growing businesses and service agencies seeking elevated authority and higher conversions.",
        features: [
          "Full multi-page or multi-section architecture",
          "Smooth Apple-grade interactive micro-animations",
          "Automated lead routing & inquiry intake",
          "Interactive appointment calendar booking embed",
          "Full technical SEO & Google Analytics setup",
          "30-day post-launch optimization warranty",
        ],
      },
      {
        id: "web-premium-inr",
        name: "Premium Architecture",
        category: "website",
        priceINR: "₹16,999",
        priceUSD: "$999",
        period: "one-time",
        description: "Enterprise-grade digital flagship with custom animations and full conversion funnel.",
        timeline: "2–3 Weeks",
        recommendedFor: "Established brands and scaling companies needing uncompromising quality and custom features.",
        features: [
          "Bespoke digital platform architecture",
          "Custom animated visual interactions & UI components",
          "Dynamic CMS integration (Notion / Supabase)",
          "Conversion funnel tracking & CRM webhooks",
          "Performance score 95+ on Google Lighthouse",
          "60-day priority support & technical handoff",
        ],
      },
    ],
    usd: [
      {
        id: "web-starter-usd",
        name: "Starter Platform",
        category: "website",
        priceINR: "₹4,999",
        priceUSD: "$499",
        period: "one-time",
        description: "High-converting single-page digital flagship designed for rapid global deployment.",
        timeline: "< 1 Week (3–5 Business Days)",
        recommendedFor: "International startups and creators wanting a sleek, ultra-fast landing page.",
        features: [
          "Bespoke single-page landing architecture",
          "Sub-second global CDN delivery via Vercel Edge",
          "Mobile-first responsive design",
          "Instant lead capture with direct alerts",
          "Full OpenGraph & SEO optimization",
          "14-day post-launch support",
        ],
      },
      {
        id: "web-gold-usd",
        name: "Signature (Gold)",
        category: "website",
        priceINR: "₹9,999",
        priceUSD: "$799",
        period: "one-time",
        description: "Elevated brand experience with interactive components, appointment sync, and deep SEO.",
        timeline: "1–2 Weeks",
        recommendedFor: "B2B companies, boutique agencies, and high-growth founders.",
        features: [
          "Multi-section bespoke narrative architecture",
          "Apple-grade fluid animations & micro-interactions",
          "Embedded Cal.com / Calendly appointment sync",
          "Lead intake telemetry & analytics integration",
          "Global SEO & search schema deployment",
          "30-day post-launch optimization warranty",
        ],
      },
      {
        id: "web-premium-usd",
        name: "Premium Architecture",
        category: "website",
        priceINR: "₹16,999",
        priceUSD: "$999",
        period: "one-time",
        description: "Enterprise-grade bespoke platform with custom micro-animations and full conversion pipeline.",
        timeline: "2–3 Weeks",
        recommendedFor: "Venture-backed startups and established firms needing best-in-class digital authority.",
        features: [
          "End-to-end bespoke digital ecosystem",
          "Advanced interactive graphics & custom state machines",
          "Dynamic CMS & database sync (Supabase / Headless)",
          "Multi-channel webhook routing (HubSpot / Airtable)",
          "99.9% uptime SLA & sub-second global performance",
          "60-day priority engineering & video handoff session",
        ],
      },
    ],
  },
  automationPricing: {
    inr: {
      id: "auto-inr",
      name: "AI Automation & Systems",
      category: "automation",
      priceINR: "Starts at ₹19,999",
      priceUSD: "Starts at $1,499",
      period: "one-time setup + monthly retainer",
      description:
        "One-time system setup starts at ₹19,999. Monthly retainer is tailored specifically according to your automation model and throughput volume.",
      timeline: "1–2 Weeks",
      recommendedFor: "Businesses losing leads after hours or drowning in repetitive manual customer communication.",
      features: [
        "24/7 AI Customer Support Agent (Website & Webchat)",
        "Instant WhatsApp Business AI Response System",
        "Automated calendar qualification & appointment booking",
        "Real-time CRM & Google Sheets / Airtable synchronization",
        "Multi-step automated email follow-up sequences",
        "Telemetry dashboard & monthly workflow health monitoring",
      ],
    },
    usd: {
      id: "auto-usd",
      name: "AI Automation & Systems",
      category: "automation",
      priceINR: "Starts at ₹19,999",
      priceUSD: "Starts at $1,499",
      period: "one-time setup + monthly retainer",
      description:
        "One-time infrastructure setup starts at $1,499. Ongoing monthly retainer is scoped as per your automation plan, agent throughput, and API volume.",
      timeline: "1–2 Weeks",
      recommendedFor: "Global companies wanting autonomous lead ingestion, instant responses, and zero lost pipeline.",
      features: [
        "24/7 Autonomous AI Customer Support Agent",
        "Instant WhatsApp / Multi-channel lead qualification",
        "Cal.com / Google Calendar automated scheduling",
        "HubSpot / Notion / Airtable bi-directional sync",
        "Custom event webhook integrations & Zapier/n8n pipelines",
        "Telemetry observability & ongoing model maintenance",
      ],
    },
  },
  customPlan: {
    inr: "Custom Quote (Discussed per project scope)",
    usd: "Custom Quote (Discussed per project scope)",
    description:
      "For enterprise platforms, high-volume bespoke AI agents, internal workflow tools, or hybrid full-stack web + multi-agent systems. Scoped during our 15-minute discovery call.",
  },
  services: [
    {
      title: "High-Converting Websites",
      description:
        "Custom websites built with Next.js 15, React 19, and Tailwind CSS. Clean, responsive, and engineered to convert visitors into booked clients.",
      capabilities: [
        "Sub-second load times",
        "Mobile-first responsive design",
        "Apple-grade minimalist aesthetic",
        "Built-in conversion funnels & lead capture",
      ],
    },
    {
      title: "24/7 AI Customer Support",
      description:
        "Autonomous AI support systems that answer questions instantly, qualify inbound leads, and capture contact details around the clock.",
      capabilities: [
        "Zero-latency response",
        "Trained on your business knowledge",
        "Lead scoring & qualification",
        "Escalation to human team when needed",
      ],
    },
    {
      title: "Instant WhatsApp Business AI",
      description:
        "Automate your WhatsApp customer inquiries. The AI answers product queries, shares pricing, and collects client details in seconds.",
      capabilities: [
        "Instant 24/7 replies on WhatsApp",
        "Catalogue & pricing guidance",
        "Direct appointment booking inside chat",
        "Auto-sync with CRM",
      ],
    },
    {
      title: "Automatic Appointment Booking",
      description:
        "Remove the back-and-forth friction. Inbound prospects choose available slots directly synced to your Google Calendar or Cal.com.",
      capabilities: [
        "Direct calendar integration",
        "Timezone auto-detection",
        "Automated email & SMS reminders",
        "Zero scheduling conflicts",
      ],
    },
    {
      title: "CRM & Pipeline Synchronization",
      description:
        "Every lead captured from your website, WhatsApp, or AI chat is automatically routed to your CRM in real time.",
      capabilities: [
        "HubSpot, Airtable, Notion, Google Sheets",
        "Instant Slack / Telegram / Email notification",
        "Lead enrichment & tagging",
        "No manual data entry required",
      ],
    },
  ],
  turnaroundTimes: [
    {
      service: "Starter Website Platform",
      timeline: "< 1 Week (3–5 Business Days)",
      details: "Sprint build from initial wireframe to live production launch.",
    },
    {
      service: "Signature (Gold) Website",
      timeline: "1–2 Weeks",
      details: "Multi-section custom build with interactive animations and SEO setup.",
    },
    {
      service: "Premium Web Architecture",
      timeline: "2–3 Weeks",
      details: "Full bespoke platform with custom CMS, integrations, and deep performance audit.",
    },
    {
      service: "AI Automation Setup",
      timeline: "1–2 Weeks",
      details: "Full agent configuration, knowledge ingestion, WhatsApp/CRM sync, and end-to-end testing.",
    },
    {
      service: "Custom Enterprise Solution",
      timeline: "Discussed during discovery call",
      details: "Milestone-driven roadmap aligned with your business launch calendar.",
    },
  ],
  faq: [
    {
      category: "Ownership",
      question: "Who owns the code, design, and intellectual property built by Tessimo?",
      answer:
        "You do. You retain 100% full intellectual property and code ownership. We hand over the complete GitHub repository, design files, and deployment keys with zero vendor lock-in.",
    },
    {
      category: "Privacy & Security",
      question: "How does Tessimo ensure client data privacy with AI systems?",
      answer:
        "We enforce strict enterprise data boundaries. Your internal business data and customer conversations are never used to train public foundation models. All databases, webhooks, and tokens run within encrypted environments.",
    },
    {
      category: "Support & Warranty",
      question: "What happens after the project is launched?",
      answer:
        "All projects include post-launch support and warranty (14 to 60 days depending on your tier). We also offer ongoing monthly maintenance and automation retainer packages.",
    },
    {
      category: "Response Time",
      question: "What is your response protocol?",
      answer:
        "Under 2 business hours guaranteed. For global client inquiries, we operate remote worldwide with 24/7 automated ingestion at hello@tessimo.in.",
    },
  ],
};
