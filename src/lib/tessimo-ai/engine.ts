/**
 * Tessimo AI — Offline NLP & Deterministic Intelligence Engine
 * 
 * Works 100% locally in the browser/client without any paid GenAI API.
 * Features:
 * - Multilingual intent extraction (English, Hindi, Hinglish)
 * - Typo tolerance & fuzzy token scoring
 * - Contextual response synthesis with Apple-grade formatting
 * - Dynamic currency awareness (INR ₹ & USD $)
 * - Action triggers (start project, book demo, open calculator)
 */

import { TESSIMO_KNOWLEDGE, PricingTier } from "./knowledge";

export interface AIAction {
  label: string;
  type: "link" | "scroll" | "calculator" | "email";
  value: string;
}

export interface TessimoAIResponse {
  id: string;
  intent: string;
  text: string;
  suggestedPills: string[];
  action?: AIAction;
  highlightCard?: {
    title: string;
    badge: string;
    price: string;
    subtext: string;
    features: string[];
  };
}

// Common Hinglish / English synonym mapping
const SYNONYMS: Record<string, string[]> = {
  pricing: ["price", "pricing", "cost", "rates", "rate", "fees", "fee", "kitna", "kharcha", "paisa", "rupees", "dollar", "budget", "dam", "package", "packages", "plan", "plans", "tier", "tiers"],
  website: ["website", "web", "site", "landing", "page", "portfolio", "portal", "webpage", "webdesign"],
  automation: ["automation", "automate", "ai", "system", "systems", "bot", "agent", "whatsapp", "workflow", "crm", "pipeline", "booking", "leads"],
  timeline: ["timeline", "time", "days", "duration", "turnaround", "delivery", "fast", "kitne din", "kab tak", "kab", "speed", "schedule", "week", "weeks"],
  contact: ["contact", "email", "mail", "phone", "number", "call", "reach", "support", "talk", "baat", "connect", "inquiry", "hello"],
  demo: ["demo", "meeting", "consultation", "book", "call", "appointment", "slot", "schedule", "calendar"],
  starter: ["starter", "basic", "cheap", "lowest", "starting", "4999", "499", "shuru", "entry"],
  gold: ["gold", "signature", "medium", "popular", "best", "9999", "799"],
  premium: ["premium", "pro", "enterprise", "high", "top", "16999", "999", "full"],
  india: ["india", "indian", "inr", "rupees", "rs", "₹", "desh", "bharat"],
  international: ["international", "global", "usa", "us", "uk", "dollar", "dollars", "$", "usd", "foreign", "abroad", "outside"],
  tech: ["tech", "technology", "stack", "framework", "code", "nextjs", "react", "tailwind", "typescript", "supabase"],
  ownership: ["ownership", "ip", "intellectual", "property", "code", "repository", "github", "copyright", "owner", "haq"],
  founder: ["founder", "shibabrata", "ghosh", "shiba", "creator", "architect", "linkedin", "ceo", "who made", "founder kaun hai", "founder kaun"],
};

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s\u0900-\u097F₹$]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function computeRelevance(tokens: string[], keywordGroup: string[]): number {
  let score = 0;
  for (const token of tokens) {
    for (const kw of keywordGroup) {
      if (token === kw) {
        score += 2;
      } else if (token.length > 3 && (kw.includes(token) || token.includes(kw))) {
        score += 1;
      }
    }
  }
  return score;
}

export function processTessimoAIQuery(
  rawQuery: string,
  currentCurrency: "INR" | "USD" = "INR"
): TessimoAIResponse {
  const query = normalizeText(rawQuery);
  const tokens = query.split(" ").filter(Boolean);

  // Region detection override
  const wantsIndia = computeRelevance(tokens, SYNONYMS.india) > 0;
  const wantsGlobal = computeRelevance(tokens, SYNONYMS.international) > 0;
  const currency: "INR" | "USD" = wantsIndia ? "INR" : wantsGlobal ? "USD" : currentCurrency;

  const isINR = currency === "INR";

  // Score main intents
  const pricingScore = computeRelevance(tokens, SYNONYMS.pricing);
  const websiteScore = computeRelevance(tokens, SYNONYMS.website);
  const automationScore = computeRelevance(tokens, SYNONYMS.automation);
  const timelineScore = computeRelevance(tokens, SYNONYMS.timeline);
  const contactScore = computeRelevance(tokens, SYNONYMS.contact);
  const demoScore = computeRelevance(tokens, SYNONYMS.demo);
  const techScore = computeRelevance(tokens, SYNONYMS.tech);
  const ownershipScore = computeRelevance(tokens, SYNONYMS.ownership);
  const starterScore = computeRelevance(tokens, SYNONYMS.starter);
  const goldScore = computeRelevance(tokens, SYNONYMS.gold);
  const premiumScore = computeRelevance(tokens, SYNONYMS.premium);
  const founderScore = computeRelevance(tokens, SYNONYMS.founder);

  // 1. GREETINGS
  if (
    query === "hi" ||
    query === "hello" ||
    query === "hey" ||
    query === "namaste" ||
    query === "tessimo" ||
    query.startsWith("good morning") ||
    query.startsWith("good evening")
  ) {
    return {
      id: "greeting",
      intent: "GREETING",
      text: `Hello! I am **Tessimo AI**, the agency intelligence core. I can answer any question about our services, dual-market pricing (${isINR ? "India ₹" : "Global $"}), turnaround timelines, and how our 24/7 autonomous systems scale your business.\n\nHow can I assist your business today?`,
      suggestedPills: [
        "Website Pricing",
        "AI Automation Plans",
        "Delivery Timelines",
        "Contact & Support",
      ],
      action: {
        label: "Book a 15-min Demo",
        type: "scroll",
        value: "#contact",
      },
    };
  }

  // 1.5 FOUNDER & LEADERSHIP
  if (founderScore > 0 || tokens.includes("shibabrata") || tokens.includes("ghosh") || tokens.includes("founder")) {
    return {
      id: "founder-profile",
      intent: "FOUNDER",
      text: `### Shibabrata Ghosh — Founder & Lead Technologist\n\nTessimo Technology was founded and is directed by **Shibabrata Ghosh**.\n\n• **Role**: Founder & Lead Creative Technologist\n• **Direct Oversight**: Shibabrata personally architects and reviews all client platforms with zero junior handoffs.\n• **LinkedIn**: [linkedin.com/in/shibabrata-ghosh](https://www.linkedin.com/in/shibabrata-ghosh/)\n• **GitHub**: [github.com/ghosh-shibabrata](https://github.com/ghosh-shibabrata)\n• **Direct Founder Email**: [shibabrata@tessimotechnology.com](mailto:shibabrata@tessimotechnology.com)\n• **General Inquiries**: [hello@tessimotechnology.com](mailto:hello@tessimotechnology.com)\n\nShibabrata guarantees our under 2-hour executive response protocol and 100% intellectual property ownership.`,
      suggestedPills: [
        "View Founder Section",
        "Website Pricing",
        "Book a 15-min Demo",
      ],
      action: {
        label: "View Founder Section",
        type: "scroll",
        value: "#founder",
      },
    };
  }

  // 2. SPECIFIC STARTER TIER INQUIRY
  if (starterScore > 0 && (pricingScore > 0 || websiteScore > 0)) {
    const tier = isINR ? TESSIMO_KNOWLEDGE.websitePricing.inr[0] : TESSIMO_KNOWLEDGE.websitePricing.usd[0];
    return {
      id: "starter-tier",
      intent: "STARTER_TIER",
      text: `### Essential Architecture — ${isINR ? "₹4,999" : "$499"}\n\nOur fastest route to high-conversion market authority. Engineered for boutique practices, creators, and new ventures.\n\n• **Turnaround**: < 1 Week (3–5 business days)\n• **Included**: Bespoke single-page landing architecture, mobile-first responsive design, lead capture form with instant alerts, and 7-day post-launch hypercare.\n• **Ideal For**: Quick launches where speed and sub-second load times are paramount.`,
      highlightCard: {
        title: "Essential Architecture",
        badge: "Rapid 5-Day Launch",
        price: isINR ? "₹4,999" : "$499",
        subtext: "One-time investment",
        features: tier.features.slice(0, 4),
      },
      suggestedPills: [
        "What is Bespoke Flagship?",
        "How about AI Automation?",
        "Start Essential Architecture",
      ],
      action: {
        label: "Select Essential Architecture",
        type: "scroll",
        value: "#contact",
      },
    };
  }

  // 3. SPECIFIC GOLD / SIGNATURE TIER
  if (goldScore > 0 && (pricingScore > 0 || websiteScore > 0)) {
    const tier = isINR ? TESSIMO_KNOWLEDGE.websitePricing.inr[1] : TESSIMO_KNOWLEDGE.websitePricing.usd[1];
    return {
      id: "gold-tier",
      intent: "GOLD_TIER",
      text: `### Bespoke Digital Flagship — ${isINR ? "₹9,999" : "$799"}\n\nOur most popular, comprehensive brand flagship designed to command elevated market positioning and conversion authority.\n\n• **Turnaround**: 1–2 Weeks (7–10 business days)\n• **Included**: Multi-section bespoke layout, quiet editorial micro-interactions, embedded live appointment booking calendar, technical SEO & Google Analytics.\n• **Warranty**: 14-day dedicated production hypercare.`,
      highlightCard: {
        title: "Bespoke Digital Flagship",
        badge: "Recommended Flagship",
        price: isINR ? "₹9,999" : "$799",
        subtext: "One-time investment",
        features: tier.features.slice(0, 4),
      },
      suggestedPills: [
        "Compare with Enterprise",
        "Add AI Automation",
        "Book a 15-min Demo",
      ],
      action: {
        label: "Select Bespoke Flagship",
        type: "scroll",
        value: "#contact",
      },
    };
  }

  // 4. SPECIFIC PREMIUM TIER
  if (premiumScore > 0 && (pricingScore > 0 || websiteScore > 0)) {
    const tier = isINR ? TESSIMO_KNOWLEDGE.websitePricing.inr[2] : TESSIMO_KNOWLEDGE.websitePricing.usd[2];
    return {
      id: "premium-tier",
      intent: "PREMIUM_TIER",
      text: `### Enterprise Infrastructure — ${isINR ? "₹16,999" : "$999"}\n\nUncompromising digital platform architecture with custom animations, database integration, and high-performance conversion funnels.\n\n• **Turnaround**: 2–3 Weeks\n• **Included**: Bespoke UI component library, dynamic Supabase/headless CMS, payment rails, webhook lead ingestion, 95+ Google Lighthouse guarantee.\n• **Warranty**: 30-day dedicated priority hypercare.`,
      highlightCard: {
        title: "Enterprise Infrastructure",
        badge: "Enterprise Grade",
        price: isINR ? "₹16,999" : "$999",
        subtext: "One-time investment",
        features: tier.features.slice(0, 4),
      },
      suggestedPills: [
        "Include AI Automation",
        "Custom Enterprise Scope",
        "Start Enterprise Project",
      ],
      action: {
        label: "Select Enterprise Infrastructure",
        type: "scroll",
        value: "#contact",
      },
    };
  }

  // 5. AUTOMATION PRICING & DETAILS
  if (automationScore > 0 && (pricingScore > 0 || tokens.includes("cost") || tokens.includes("retainer"))) {
    const auto = isINR ? TESSIMO_KNOWLEDGE.automationPricing.inr : TESSIMO_KNOWLEDGE.automationPricing.usd;
    return {
      id: "automation-pricing",
      intent: "AUTOMATION_PRICING",
      text: `### Autonomous Systems Investment\n\n• **One-Time Architecture**: Starts at **${isINR ? "₹19,999" : "$1,499"}**\n• **Monthly Retainer**: Tailored specifically as per your business automation model, monthly agent throughput, and integration scope.\n\n**What is included:**\n1. **24/7 AI Concierge**: Autonomous web agent that qualifies leads 24/7.\n2. **Instant WhatsApp AI**: Automatic service guidance & 0-delay chat replies.\n3. **Appointment Scheduling**: Auto-calendar qualification via Cal.com / Google Calendar.\n4. **CRM Sync**: Direct live pipeline updates to Airtable, HubSpot, or Google Sheets.\n5. **Health Telemetry**: Ongoing model tuning and monthly performance monitoring.`,
      highlightCard: {
        title: "Autonomous Systems",
        badge: "Active Autonomous Flow",
        price: isINR ? "From ₹19,999" : "From $1,499",
        subtext: "One-time setup + tailored retainer",
        features: [
          "24/7 Autonomous AI agent",
          "Instant WhatsApp Business replies",
          "Automated calendar booking sync",
          "Live CRM & Sheet ingestion",
        ],
      },
      suggestedPills: [
        "How WhatsApp bot works",
        "Website + Automation combo",
        "Schedule 15-min Demo",
      ],
      action: {
        label: "Discuss Automation Scope",
        type: "scroll",
        value: "#contact",
      },
    };
  }

  // 6. GENERAL PRICING (WEBSITES + GENERAL)
  if (pricingScore > 0 || tokens.includes("rates") || tokens.includes("cost") || tokens.includes("package")) {
    if (isINR) {
      return {
        id: "pricing-overview-inr",
        intent: "PRICING_INR",
        text: `### Tessimo Technology Investment Architecture (India Tiers)\n\n**1. High-Converting Digital Platforms (One-time):**\n• **Essential Architecture**: ₹4,999 *(< 1 Week delivery)*\n• **Bespoke Digital Flagship**: ₹9,999 *(1–2 Weeks delivery, quiet editorial interactions)*\n• **Enterprise Infrastructure**: ₹16,999 *(2–3 Weeks delivery, payment rails & dynamic CMS)*\n• **Custom Solution**: Custom Quote *(Complex enterprise requirements)*\n\n**2. Autonomous Systems:**\n• **Architecture**: Starts at **₹19,999** one-time setup\n• **Monthly Retainer**: Tailored according to your operational model & message volume.\n\n*All commissions include 100% intellectual property ownership and direct post-launch hypercare.*`,
        suggestedPills: [
          "Show International ($ USD)",
          "AI Automation Details",
          "Calculate Project Scope",
          "Book a 15-min Demo",
        ],
        action: {
          label: "View Pricing Table",
          type: "scroll",
          value: "#pricing",
        },
      };
    } else {
      return {
        id: "pricing-overview-usd",
        intent: "PRICING_USD",
        text: `### Tessimo Technology Investment Architecture (International Tiers)\n\n**1. High-Converting Digital Platforms (One-time):**\n• **Essential Architecture**: $499 *(< 1 Week delivery)*\n• **Bespoke Digital Flagship**: $799 *(1–2 Weeks delivery, quiet editorial interactions)*\n• **Enterprise Infrastructure**: $999 *(2–3 Weeks delivery, bespoke CMS & payment rails)*\n• **Custom Solution**: Custom Quote *(Full enterprise platforms)*\n\n**2. Autonomous Systems:**\n• **Architecture**: Starts at **$1,499** one-time setup\n• **Monthly Retainer**: Scoped as per automation throughput & agent models.\n\n*All commissions include 100% full IP code ownership and sub-second global CDN performance.*`,
        suggestedPills: [
          "Show India Pricing (₹ INR)",
          "AI Automation Details",
          "Calculate Project Scope",
          "Book a 15-min Demo",
        ],
        action: {
          label: "View Pricing Table",
          type: "scroll",
          value: "#pricing",
        },
      };
    }
  }

  // 7. WHATSAPP & AUTOMATION FEATURES
  if (tokens.includes("whatsapp") || (automationScore > 0 && !pricingScore)) {
    return {
      id: "whatsapp-automation",
      intent: "WHATSAPP_AUTOMATION",
      text: `### Autonomous 24/7 AI & WhatsApp Systems\n\nOur intelligent systems handle client ingestion while you sleep:\n\n• **Instant WhatsApp Business AI**: Greets clients within seconds, answers product/service queries, and shares links.\n• **Lead Qualification**: Asks 2–3 smart diagnostic questions to filter serious prospects.\n• **Automated Booking**: In-chat link to lock a 15-min call directly into your calendar.\n• **CRM Ingestion**: Auto-writes lead name, phone, email, and conversation summary directly into Notion, Airtable, or HubSpot.\n\n**Setup**: Starts at ${isINR ? "₹19,999" : "$1,499"} one-time + monthly retainer.`,
      suggestedPills: [
        "What is the setup timeline?",
        "Can it integrate with Google Sheets?",
        "Book a 15-min Demo",
      ],
      action: {
        label: "Book a 15-min Demo",
        type: "scroll",
        value: "#contact",
      },
    };
  }

  // 8. TIMELINE & TURNAROUND
  if (timelineScore > 0 || tokens.includes("how long") || tokens.includes("fast")) {
    return {
      id: "timelines",
      intent: "TIMELINE",
      text: `### Delivery & Turnaround Schedules\n\nWe operate with strict milestone velocity:\n\n• **Essential Architecture**: **< 1 Week** *(3 to 5 Business Days)*\n• **Bespoke Digital Flagship**: **1 to 2 Weeks** *(7 to 10 Business Days)*\n• **Enterprise Infrastructure**: **2 to 3 Weeks**\n• **Autonomous Pipeline**: **1 to 2 Weeks** *(includes testing & verification)*\n• **Custom Enterprise Systems**: Milestone-aligned schedule established on discovery call.\n\nEvery project includes regular staging previews so you see progress in real time.`,
      suggestedPills: [
        "Essential Architecture details",
        "Website + AI timeline",
        "Start a Project",
      ],
      action: {
        label: "Start a Project",
        type: "scroll",
        value: "#contact",
      },
    };
  }

  // 9. CONTACT / EMAIL / SUPPORT
  if (contactScore > 0 || tokens.includes("support") || tokens.includes("reach") || tokens.includes("office")) {
    return {
      id: "contact-channels",
      intent: "CONTACT",
      text: `### Technology Inquiries & Global Support\n\n• **Direct Email**: [hello@tessimotechnology.com](mailto:hello@tessimotechnology.com)\n• **Response Protocol**: **UNDER 2 BUSINESS HOURS GUARANTEED**\n• **Global Client Support**: Remote Worldwide • Mon—Fri (24/7 Automated Ingestion)\n• **Discovery Consultation**: 15-Minute Zero-Pressure Strategy Call\n\nYou can fill our project intake form on this page or email us directly at **hello@tessimotechnology.com**.`,
      suggestedPills: [
        "Jump to Contact Form",
        "Check Pricing Plans",
        "Book a 15-min Demo",
      ],
      action: {
        label: "Email hello@tessimotechnology.com",
        type: "email",
        value: "mailto:hello@tessimotechnology.com",
      },
    };
  }

  // 10. DEMO / MEETING
  if (demoScore > 0 || tokens.includes("consultation") || tokens.includes("talk")) {
    return {
      id: "book-demo",
      intent: "DEMO",
      text: `### 15-Minute Strategy & Discovery Consultation\n\nIn this focused 15-minute session, we will:\n1. Audit your current website and conversion bottlenecks.\n2. Review repetitive manual workflows that can be automated.\n3. Recommend the exact tier or automation system tailored to your budget (${isINR ? "INR ₹" : "USD $"}).\n4. Provide a transparent timeline with zero sales pressure.\n\nSubmit your details via the form below or email us at **hello@tessimotechnology.com**.`,
      suggestedPills: [
        "Fill Contact Form",
        "Review Website Tiers",
        "Email hello@tessimo.in",
      ],
      action: {
        label: "Go to Booking Form",
        type: "scroll",
        value: "#contact",
      },
    };
  }

  // 11. INTELLECTUAL PROPERTY & CODE OWNERSHIP
  if (ownershipScore > 0 || tokens.includes("rights") || tokens.includes("github")) {
    return {
      id: "ownership-ip",
      intent: "IP_OWNERSHIP",
      text: `### 100% Intellectual Property & Code Ownership\n\n• **Full Ownership**: You own 100% of the custom code, design files, and database schemas created for your project.\n• **Zero Vendor Lock-in**: At launch, we hand over the full GitHub repository, production environment variables, and deployment dashboard.\n• **Standard Modern Tech**: Built with standard TypeScript, Next.js 15, and Tailwind CSS so any competent engineer can maintain or extend it seamlessly.`,
      suggestedPills: [
        "What tech stack is used?",
        "Check Website Pricing",
        "Start a Project",
      ],
      action: {
        label: "Start a Project",
        type: "scroll",
        value: "#contact",
      },
    };
  }

  // 12. TECH STACK
  if (techScore > 0) {
    return {
      id: "tech-stack",
      intent: "TECH_STACK",
      text: `### Production Architecture & Stack\n\nWe build using modern, battle-tested technologies:\n\n• **Frontend & Framework**: Next.js 15 App Router, React 19, TypeScript\n• **Styling & Motion**: Tailwind CSS v4, Framer Motion\n• **Backend & Storage**: Supabase (PostgreSQL), Vercel Fluid Compute\n• **Automation Engine**: n8n, Make.com, custom Node.js serverless functions, Cal.com\n• **Observability**: Sub-second Core Web Vitals, 99.9% uptime SLA.`,
      suggestedPills: [
        "Website Pricing",
        "AI Automation Plans",
        "Book a 15-min Demo",
      ],
      action: {
        label: "View Selected Work",
        type: "scroll",
        value: "#work",
      },
    };
  }

  // 13. PROJECT ESTIMATOR / CALCULATOR
  if (tokens.includes("calculator") || tokens.includes("estimate") || tokens.includes("calculate") || tokens.includes("quote")) {
    return {
      id: "calculator",
      intent: "CALCULATOR",
      text: `### Instant Scope & Budget Calculator\n\nNeed an exact price for your project? Use our interactive estimator to select your required deliverables and region (${isINR ? "India ₹" : "Global $"}).\n\n• **Website Starter**: ${isINR ? "₹4,999" : "$499"}\n• **Website Signature**: ${isINR ? "₹9,999" : "$799"}\n• **Website Premium**: ${isINR ? "₹16,999" : "$999"}\n• **AI Automation**: Starts at ${isINR ? "₹19,999" : "$1,499"} + retainer\n• **Complete Web + AI Suite**: Custom bundled package`,
      suggestedPills: [
        "Website + AI Bundle",
        "Starter Website Only",
        "Book a 15-min Demo",
      ],
      action: {
        label: "Start Intake Form",
        type: "scroll",
        value: "#contact",
      },
    };
  }

  // 14. SERVICES OVERVIEW
  if (websiteScore > 0 || tokens.includes("service") || tokens.includes("services") || tokens.includes("what do you do")) {
    return {
      id: "services-overview",
      intent: "SERVICES",
      text: `### Tessimo Core Agency Disciplines\n\n1. **High-Converting Websites**\nBespoke platforms engineered on Next.js 15 that turn visitors into paying clients with sub-second performance.\n\n2. **24/7 AI Customer Support**\nAutonomous intelligent agents that answer inquiries, explain services, and capture leads 24/7.\n\n3. **Instant WhatsApp Business AI**\nAutomated instant replies, customer routing, and booking directly inside WhatsApp.\n\n4. **Automated Appointment Booking**\nZero back-and-forth friction — prospects lock slots directly into your calendar.\n\n5. **CRM & Pipeline Synchronization**\nEvery inquiry automatically routed to HubSpot, Airtable, Notion, or Google Sheets in real time.`,
      suggestedPills: [
        "Website Pricing",
        "AI Automation Setup",
        "Delivery Timelines",
        "Book a 15-min Demo",
      ],
      action: {
        label: "Explore Services Section",
        type: "scroll",
        value: "#services",
      },
    };
  }

  // 15. DEFAULT / FALLBACK
  return {
    id: "fallback",
    intent: "GENERAL_KNOWLEDGE",
    text: `I understand you are inquiring about Tessimo Agency.\n\nAt Tessimo, we build **high-converting bespoke websites** and **24/7 autonomous AI systems** so your business never misses a lead or loses a customer.\n\n• **Website Platforms**: ${isINR ? "₹4,999 (Starter) / ₹9,999 (Gold) / ₹16,999 (Premium)" : "$499 (Starter) / $799 (Gold) / $999 (Premium)"}\n• **AI Automation**: Setup starts at ${isINR ? "₹19,999" : "$1,499"} + tailored retainer\n• **Response Guarantee**: Under 2 business hours\n• **Direct Founder Email**: [shibabrata@tessimo.in](mailto:shibabrata@tessimo.in)
• **General Inquiries**: [hello@tessimo.in](mailto:hello@tessimo.in)\n\nWhich area would you like to explore?`,
    suggestedPills: [
      "Website Pricing",
      "AI Automation Plans",
      "Turnaround Timelines",
      "Book a 15-min Demo",
    ],
    action: {
      label: "Start a Project",
      type: "scroll",
      value: "#contact",
    },
  };
}
