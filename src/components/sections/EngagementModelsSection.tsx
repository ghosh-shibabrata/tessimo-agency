"use client";

import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Bot,
  Zap,
  Globe,
  SlidersHorizontal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Currency = "USD" | "INR";

interface InvestmentTier {
  id: string;
  tag: string;
  title: string;
  priceUSD: string;
  priceINR: string;
  cadenceUSD: string;
  cadenceINR: string;
  timeline: string;
  featured?: boolean;
  idealFor: string;
  deliverables: string[];
  ctaLabel: string;
}

const INVESTMENT_TIERS: InvestmentTier[] = [
  {
    id: "starter",
    tag: "01 // ESSENTIAL",
    title: "Essential Architecture",
    priceUSD: "$499",
    priceINR: "₹4,999",
    cadenceUSD: "Fixed investment",
    cadenceINR: "Fixed investment",
    timeline: "3–5 Days Delivery",
    idealFor: "Emerging practices and boutique operations requiring an editorial, conversion-engineered digital flagship.",
    deliverables: [
      "1-Page high-converting editorial landing architecture",
      "Mobile-first responsive typographic system (sub-second load)",
      "Direct consultation routing & calendar integration",
      "Client intake pipeline with authenticated notification dispatch",
      "Structured SEO metadata & search indexation",
      "7 Days post-launch verification hypercare",
    ],
    ctaLabel: "Commission Essential Architecture",
  },
  {
    id: "signature",
    tag: "02 // BESPOKE",
    title: "Bespoke Digital Flagship",
    priceUSD: "$799",
    priceINR: "₹9,999",
    cadenceUSD: "Fixed investment",
    cadenceINR: "Fixed investment",
    timeline: "7–10 Days Delivery",
    featured: true,
    idealFor: "Growing enterprises seeking an authoritative multi-page presence with automated qualification.",
    deliverables: [
      "Up to 5 bespoke pages (Overview, Practice, Systems, Portfolio, Inquiries)",
      "Next.js fluid compute with sub-second navigation transitions",
      "Automated lead qualification & intelligent routing",
      "Interactive consultation intake & contextual scope estimation",
      "Schema.org rich snippets & global search indexing",
      "14 Days dedicated production hypercare",
    ],
    ctaLabel: "Commission Bespoke Flagship",
  },
  {
    id: "flagship",
    tag: "03 // ENTERPRISE",
    title: "Enterprise Infrastructure",
    priceUSD: "$999",
    priceINR: "₹16,999",
    cadenceUSD: "Fixed investment",
    cadenceINR: "Fixed investment",
    timeline: "2–3 Weeks Delivery",
    idealFor: "Established organizations requiring integrated transaction rails, dynamic content, and automated operations.",
    deliverables: [
      "Up to 10 bespoke platform pages or dynamic CMS architecture",
      "Automated calendar & multi-party video scheduling rails",
      "Enterprise payment processing rails (Stripe / Razorpay)",
      "Editorial micro-interactions & telemetry analytics",
      "Comprehensive AI search optimization (AEO) & schema modeling",
      "30 Days dedicated priority hypercare",
    ],
    ctaLabel: "Commission Enterprise Infrastructure",
  },
  {
    id: "enterprise",
    tag: "04 // AUTONOMOUS",
    title: "Custom AI & Systems",
    priceUSD: "Custom Quote",
    priceINR: "Custom Quote",
    cadenceUSD: "Systems architecture from $1,499",
    cadenceINR: "Systems architecture from ₹19,999",
    timeline: "Milestone-based",
    idealFor: "Organizations deploying 24/7 autonomous agents, operational pipelines, or bespoke web infrastructure.",
    deliverables: [
      "Bespoke scope architecture & technical blueprint",
      "24/7 AI conversational agent for WhatsApp & web (<60s reply)",
      "Bi-directional CRM & calendar synchronization (HubSpot / Sheets)",
      "Private encrypted vector store & deterministic execution",
      "Dedicated senior engineering squad & priority SLA support",
      "Flexible monthly optimization retainer tailored to your model",
    ],
    ctaLabel: "Discuss Custom Scope",
  },
];

export function EngagementModelsSection() {
  const [currency, setCurrency] = useState<Currency>("USD");

  // Subtle auto-detection based on user's timezone locale
  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && (tz.includes("Calcutta") || tz.includes("Kolkata") || tz.includes("India"))) {
        setCurrency("INR");
      } else {
        setCurrency("USD");
      }
    } catch {
      setCurrency("USD");
    }
  }, []);

  return (
    <section
      id="pricing"
      className="relative w-full bg-[#FAF9F5] py-24 sm:py-32 lg:py-40 overflow-hidden scroll-mt-14"
    >
      {/* Structural Hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-[#E2DFD7]" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* ==============================================================
            ACADEMIC SECTION HEADER + REFINED CURRENCY SELECTOR
           ============================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-2">
          <div className="space-y-5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-xs font-mono font-medium text-[#66635E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#191919]" />
              <span>Investment Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] leading-[1.12] tracking-tight">
              Predictable models. <br />
              <span className="text-[#66635E] italic">Engineered for enduring momentum.</span>
            </h2>

            <p className="text-base text-[#66635E] font-sans leading-relaxed max-w-xl">
              Transparent, milestone-based investment frameworks tailored to deliver high conversion, sub-second speed, and autonomous business operations.
            </p>
          </div>

          {/* Minimalist Currency Selector */}
          <div className="shrink-0 flex flex-col sm:items-end gap-2">
            <span className="text-[11px] font-mono text-[#66635E] uppercase tracking-wider flex items-center gap-1.5 font-medium">
              <Globe className="w-3.5 h-3.5 text-[#191919]" />
              <span>Display currency</span>
            </span>

            <div className="inline-flex items-center p-1 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] relative">
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-colors cursor-pointer ${
                  currency === "USD" ? "text-[#FAF9F5]" : "text-[#66635E] hover:text-[#191919]"
                }`}
                aria-pressed={currency === "USD"}
              >
                USD ($)
              </button>

              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-colors cursor-pointer ${
                  currency === "INR" ? "text-[#FAF9F5]" : "text-[#66635E] hover:text-[#191919]"
                }`}
                aria-pressed={currency === "INR"}
              >
                INR (₹)
              </button>

              {/* Animated Sliding Pill */}
              <motion.div
                className="absolute inset-y-1 rounded-full bg-[#191919] pointer-events-none"
                initial={false}
                animate={{
                  left: currency === "USD" ? "4px" : "50%",
                  width: "calc(50% - 4px)",
                }}
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            </div>
          </div>
        </div>

        {/* ==============================================================
            ACADEMIC 4-COLUMN INVESTMENT CARDS
           ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {INVESTMENT_TIERS.map((tier) => {
            const currentPrice = currency === "USD" ? tier.priceUSD : tier.priceINR;
            const currentCadence = currency === "USD" ? tier.cadenceUSD : tier.cadenceINR;
            const isCustom = tier.id === "enterprise";

            return (
              <div
                key={tier.id}
                className={`rounded-[24px] sm:rounded-[28px] bg-[#FAF9F5] border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative shadow-[0_2px_12px_rgba(0,0,0,0.02)] ${
                  tier.featured
                    ? "border-[#191919] ring-1 ring-[#191919]/20 xl:-translate-y-2 bg-[#FAF9F5]"
                    : "border-[#E2DFD7] hover:border-[#191919]/40"
                }`}
              >
                {/* Featured Badge */}
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#191919] text-[#FAF9F5] text-[10px] font-mono tracking-tight whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-[#FAF9F5]" />
                    <span>RECOMMENDED FLAGSHIP</span>
                  </div>
                )}

                <div className="space-y-5">
                  {/* Header Strip */}
                  <div className="space-y-3 pb-5 border-b border-[#E2DFD7]">
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-[11px] font-mono font-medium text-[#66635E]">
                      <span>{tier.tag}</span>
                      <span className="text-[#66635E]/40">•</span>
                      <span>{tier.timeline}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif text-[#191919] tracking-tight leading-snug">
                      {tier.title}
                    </h3>

                    {/* Animated Price */}
                    <div className="pt-1">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${tier.id}-${currency}`}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                        >
                          {isCustom ? (
                            <div>
                              <span className="text-2xl sm:text-3xl font-serif font-semibold text-[#191919] tracking-tight block">
                                {currentPrice}
                              </span>
                              <span className="text-[11px] font-mono text-[#66635E] block mt-0.5">
                                {currentCadence}
                              </span>
                            </div>
                          ) : (
                            <div>
                              <div className="flex items-baseline gap-1">
                                <span className="text-2xl sm:text-3xl font-serif font-semibold text-[#191919] tracking-tight">
                                  {currentPrice}
                                </span>
                                {currency === "INR" && (
                                  <span className="text-xs text-[#66635E] font-sans">/-</span>
                                )}
                              </div>
                              <span className="text-[11px] font-mono text-[#66635E] block mt-0.5">
                                {currentCadence}
                              </span>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <p className="text-xs text-[#66635E] font-sans leading-relaxed min-h-[38px]">
                    {tier.idealFor}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#66635E] block font-medium">
                      Architecture deliverables
                    </span>
                    <ul className="space-y-2">
                      {tier.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#191919] font-medium leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#191919] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-6 mt-6 border-t border-[#E2DFD7]">
                  <a
                    href="#contact"
                    className={`w-full h-10 rounded-full text-xs font-mono font-medium tracking-tight transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      tier.featured
                        ? "bg-[#191919] text-[#FAF9F5] hover:bg-[#191919]/90"
                        : "bg-[#F3F1EB] text-[#191919] border border-[#E2DFD7] hover:bg-[#EAE7DF]"
                    }`}
                  >
                    <span>{tier.ctaLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Security & Direct Ownership Guarantee */}
        <div className="p-4 px-5 sm:px-6 rounded-2xl bg-[#F3F1EB] border border-[#E2DFD7] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#66635E]">
          <div className="flex items-center gap-2 text-[#191919] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#191919]" />
            <span>100% intellectual property & source code ownership • Zero vendor lock-in</span>
          </div>
          <span className="text-[11px] text-[#66635E]">
            All commissions include structured delivery milestones and post-launch verification hypercare.
          </span>
        </div>

      </div>
    </section>
  );
}
