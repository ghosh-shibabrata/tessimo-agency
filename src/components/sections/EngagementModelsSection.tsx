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
    title: "Starter Platform",
    priceUSD: "$499",
    priceINR: "₹4,999",
    cadenceUSD: "Fixed investment",
    cadenceINR: "Fixed investment",
    timeline: "3–5 Days Delivery",
    idealFor: "Emerging businesses and creators requiring a fast, conversion-engineered digital presence.",
    deliverables: [
      "1-Page high-converting editorial landing platform",
      "Mobile-first responsive architecture (sub-second load)",
      "Instant WhatsApp booking & 1-tap call routing",
      "Lead intake form with real-time email dispatch",
      "Structured SEO metadata & Google Business setup",
      "7 Days post-launch verification hypercare",
    ],
    ctaLabel: "Start with Starter",
  },
  {
    id: "signature",
    tag: "02 // SIGNATURE",
    title: "Signature Experience",
    priceUSD: "$799",
    priceINR: "₹9,999",
    cadenceUSD: "Fixed investment",
    cadenceINR: "Fixed investment",
    timeline: "7–10 Days Delivery",
    featured: true,
    idealFor: "Growing enterprises seeking a bespoke, multi-page digital platform that commands authority.",
    deliverables: [
      "Up to 5 bespoke pages (Home, About, Services, Work, Contact)",
      "Next.js 16 fluid compute with sub-second page transitions",
      "Automated lead qualification & instant routing",
      "Interactive consultation intake & quote estimation flow",
      "Schema.org rich snippets & Google search optimization",
      "14 Days dedicated production hypercare",
    ],
    ctaLabel: "Deploy Signature",
  },
  {
    id: "flagship",
    tag: "03 // FLAGSHIP",
    title: "Premium Architecture",
    priceUSD: "$999",
    priceINR: "₹16,999",
    cadenceUSD: "Fixed investment",
    cadenceINR: "Fixed investment",
    timeline: "2–3 Weeks Delivery",
    idealFor: "Established brands requiring an advanced digital platform with automated booking and payment processing.",
    deliverables: [
      "Up to 10 bespoke platform pages or dynamic CMS architecture",
      "Automated calendar & video meeting synchronization",
      "Payment processing gateway integration (Stripe / Razorpay)",
      "Custom micro-interactions, telemetry & luxury typography",
      "Comprehensive AEO (AI Engine Optimization) & SEO indexing",
      "30 Days dedicated priority hypercare",
    ],
    ctaLabel: "Build Premium",
  },
  {
    id: "enterprise",
    tag: "04 // AUTONOMOUS & CUSTOM",
    title: "Custom AI & Systems",
    priceUSD: "Custom Quote",
    priceINR: "Custom Quote",
    cadenceUSD: "AI setup from $1,499 + retainer",
    cadenceINR: "AI setup from ₹19,999 + retainer",
    timeline: "Milestone-based",
    idealFor: "Organizations deploying 24/7 autonomous AI agents, multi-agent workflows, or bespoke web applications.",
    deliverables: [
      "Bespoke scope architecture & technical blueprint",
      "24/7 AI conversational agent for WhatsApp & web (<60s reply)",
      "Bi-directional CRM & calendar synchronization (HubSpot / Sheets)",
      "Private encrypted vector store & zero AI hallucinations",
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
      className="relative w-full bg-[#FBFBFD] py-20 sm:py-28 lg:py-36 overflow-hidden scroll-mt-14"
    >
      {/* Structural Hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-18">
        
        {/* ==============================================================
            APPLE LUXURY SECTION HEADER + REFINED CURRENCY SELECTOR
           ============================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-2">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-xs font-mono font-medium text-[#1D1D1F] tracking-wide shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
              <span>TRANSPARENT INVESTMENT ARCHITECTURE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-[#1D1D1F] leading-[1.08] break-words">
              Predictable models. <br />
              <span className="text-[#6E6E73]">Engineered for business momentum.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#6E6E73] font-normal leading-relaxed max-w-xl">
              Transparent, milestone-based investment frameworks tailored to deliver high conversion, sub-second speed, and autonomous business operations.
            </p>
          </div>

          {/* Minimalist Apple-style Currency Selector (Understated Luxury) */}
          <div className="shrink-0 flex flex-col sm:items-end gap-2">
            <span className="text-[11px] font-mono text-[#86868B] uppercase tracking-wider flex items-center gap-1.5 font-medium">
              <Globe className="w-3.5 h-3.5 text-[#0D9488]" />
              <span>Display Currency</span>
            </span>

            <div className="inline-flex items-center p-1 rounded-full bg-white border border-black/[0.1] shadow-xs relative">
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-colors cursor-pointer ${
                  currency === "USD" ? "text-white" : "text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
                aria-pressed={currency === "USD"}
              >
                USD ($)
              </button>

              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-colors cursor-pointer ${
                  currency === "INR" ? "text-white" : "text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
                aria-pressed={currency === "INR"}
              >
                INR (₹)
              </button>

              {/* Animated Sliding Pill */}
              <motion.div
                className="absolute inset-y-1 rounded-full bg-[#1D1D1F] shadow-sm pointer-events-none"
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
            APPLE 4-COLUMN INVESTMENT CARDS (STARTER, SIGNATURE, FLAGSHIP, CUSTOM)
           ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {INVESTMENT_TIERS.map((tier) => {
            const currentPrice = currency === "USD" ? tier.priceUSD : tier.priceINR;
            const currentCadence = currency === "USD" ? tier.cadenceUSD : tier.cadenceINR;
            const isCustom = tier.id === "enterprise";

            return (
              <div
                key={tier.id}
                className={`apple-card rounded-[24px] sm:rounded-[28px] bg-white border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.featured
                    ? "border-[#0D9488]/40 ring-1 ring-[#0D9488]/20 shadow-[0_16px_48px_rgba(13,148,136,0.08)] xl:-translate-y-2"
                    : "border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-black/[0.14]"
                }`}
              >
                {/* Featured Badge */}
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1D1D1F] text-white text-[10px] font-semibold shadow-md tracking-tight whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-[#0D9488]" />
                    <span>STUDIO RECOMMENDED</span>
                  </div>
                )}

                <div className="space-y-5">
                  {/* Header Strip */}
                  <div className="space-y-2.5 pb-5 border-b border-black/[0.08]">
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#F5F5F7] border border-black/[0.06] text-[11px] font-mono font-semibold text-[#0D9488]">
                      <span>{tier.tag}</span>
                      <span className="text-black/20">•</span>
                      <span>{tier.timeline}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] tracking-tight leading-snug">
                      {tier.title}
                    </h3>

                    {/* Animated Price */}
                    <div className="pt-1">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${tier.id}-${currency}`}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                        >
                          {isCustom ? (
                            <div>
                              <span className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight block">
                                {currentPrice}
                              </span>
                              <span className="text-[11px] font-mono text-[#0D9488] font-semibold block mt-0.5">
                                {currentCadence}
                              </span>
                            </div>
                          ) : (
                            <div>
                              <div className="flex items-baseline gap-1">
                                <span className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
                                  {currentPrice}
                                </span>
                                {currency === "INR" && (
                                  <span className="text-xs text-[#6E6E73] font-medium">/-</span>
                                )}
                              </div>
                              <span className="text-[11px] font-mono text-[#6E6E73] block mt-0.5">
                                {currentCadence}
                              </span>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <p className="text-xs text-[#6E6E73] leading-relaxed min-h-[38px]">
                    {tier.idealFor}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6E73] block font-semibold">
                      SCOPE & DELIVERABLES
                    </span>
                    <ul className="space-y-2">
                      {tier.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#1D1D1F] font-medium leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-6 mt-6 border-t border-black/[0.06]">
                  <a
                    href="#contact"
                    className={`w-full h-10 rounded-full text-xs font-semibold tracking-tight transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      tier.featured
                        ? "btn-apple-primary"
                        : "btn-apple-secondary"
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
        <div className="p-4 px-5 sm:px-6 rounded-2xl bg-white border border-black/[0.08] shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#6E6E73]">
          <div className="flex items-center gap-2 text-[#1D1D1F] font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
            <span>100% Intellectual Property & Code Ownership Guaranteed • Zero Vendor Lock-in</span>
          </div>
          <span className="text-[11px] text-[#86868B]">
            All engagements include structured delivery milestones and post-launch hypercare.
          </span>
        </div>

      </div>
    </section>
  );
}
