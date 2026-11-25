"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, ArrowUpRight, Sparkles, ShieldCheck, ArrowRight, Bot, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type CurrencyRegion = "india" | "international";

interface PricingTier {
  id: string;
  tag: string;
  title: string;
  priceIndia: string;
  priceIntl: string;
  cadenceIndia: string;
  cadenceIntl: string;
  timeline: string;
  featured?: boolean;
  idealFor: string;
  deliverables: string[];
  ctaLabel: string;
}

const WEBSITE_TIERS: PricingTier[] = [
  {
    id: "starter",
    tag: "01 // STARTER",
    title: "Starter Website",
    priceIndia: "₹4,999",
    priceIntl: "$499",
    cadenceIndia: "One-time investment",
    cadenceIntl: "One-time investment",
    timeline: "3–5 Days Delivery",
    idealFor: "Solopreneurs, local businesses & creators needing a fast, high-converting one-page presence.",
    deliverables: [
      "1-Page high-converting modern landing page",
      "Mobile-first responsive design (calibrated for 90% phone traffic)",
      "Direct WhatsApp booking button & 1-tap call",
      "Contact enquiry form with instant email alerts",
      "Google Maps & basic SEO metadata setup",
      "7 Days post-launch complimentary support",
    ],
    ctaLabel: "Get Starter Website",
  },
  {
    id: "gold",
    tag: "02 // GOLD EXPERIENCE",
    title: "Gold Website",
    priceIndia: "₹9,999",
    priceIntl: "$799",
    cadenceIndia: "One-time investment",
    cadenceIntl: "One-time investment",
    timeline: "7–10 Days Delivery",
    featured: true,
    idealFor: "Growing businesses & service companies wanting a complete, polished multi-page platform to win clients.",
    deliverables: [
      "Up to 5 bespoke pages (Home, About, Services, Work, Contact)",
      "Next.js 16 sub-second loading speed & smooth interactions",
      "Direct WhatsApp + Email automated lead routing",
      "Interactive enquiry & quote estimation forms",
      "Google Analytics & Schema.org SEO setup",
      "14 Days post-launch dedicated hypercare",
    ],
    ctaLabel: "Get Gold Website",
  },
  {
    id: "premium",
    tag: "03 // PREMIUM BESPOKE",
    title: "Premium Platform",
    priceIndia: "₹16,999",
    priceIntl: "$999",
    cadenceIndia: "One-time investment",
    cadenceIntl: "One-time investment",
    timeline: "2–3 Weeks Delivery",
    idealFor: "Established brands requiring an advanced bespoke digital experience with automated booking & payments.",
    deliverables: [
      "Up to 10 bespoke high-performance pages or dynamic CMS",
      "Automated appointment booking (Google Calendar / Meet sync)",
      "Payment gateway integration (UPI / Razorpay / Stripe)",
      "Luxury animations, micro-interactions & custom design system",
      "Full Google SEO & AI search engine metadata (AEO)",
      "30 Days dedicated priority hypercare",
    ],
    ctaLabel: "Get Premium Platform",
  },
  {
    id: "custom",
    tag: "04 // CUSTOM PLAN",
    title: "Custom Plan",
    priceIndia: "Custom",
    priceIntl: "Custom",
    cadenceIndia: "Price discussed on call",
    cadenceIntl: "Price discussed on call",
    timeline: "Flexible Roadmap",
    idealFor: "Larger organizations, custom web apps, multi-vendor portals, or specialized enterprise requirements.",
    deliverables: [
      "Tailored scope, architecture & wireframe blueprint",
      "Custom web application, portal, or e-commerce store",
      "Custom third-party APIs, CRM & database integrations",
      "Optional 24/7 autonomous AI voice/chat agent setup",
      "Dedicated development squad & priority SLA support",
      "Milestone-based phase delivery & custom hypercare",
    ],
    ctaLabel: "Discuss Custom Plan",
  },
];

export function EngagementModelsSection() {
  const [region, setRegion] = useState<CurrencyRegion>("india");

  // Auto-detect visitor location: default to India if timezone contains Kolkata or IST
  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && (tz.includes("Calcutta") || tz.includes("Kolkata") || tz.includes("India"))) {
        setRegion("india");
      } else {
        setRegion("international");
      }
    } catch {
      setRegion("india");
    }
  }, []);

  return (
    <section id="pricing" className="relative w-full bg-[#FBFBFD] py-16 sm:py-24 lg:py-32 overflow-hidden scroll-mt-14">
      {/* Structural Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ==============================================================
            APPLE SECTION HEADER + REGION TOGGLE
           ============================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-xs font-medium text-[#1D1D1F] tracking-wide shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
              <span>TRANSPARENT WEBSITE PRICING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-[#1D1D1F] leading-[1.08] break-words">
              Clear website pricing. <br />
              <span className="text-[#6E6E73]">Zero hidden costs.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#6E6E73] font-normal leading-relaxed">
              Transparent packages tailored for Indian & global businesses—from fast starter launches to custom enterprise platforms.
            </p>
          </div>

          {/* Apple-Style Currency Region Switcher */}
          <div className="shrink-0 flex flex-col sm:items-end gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E6E73] font-semibold">
              Select Region & Currency:
            </span>

            <div className="inline-flex items-center p-1 rounded-full bg-white border border-black/[0.1] shadow-xs relative">
              <button
                type="button"
                onClick={() => setRegion("india")}
                className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  region === "india" ? "text-white font-semibold" : "text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
                aria-pressed={region === "india"}
              >
                <span>🇮🇳</span>
                <span>India (₹ INR)</span>
              </button>

              <button
                type="button"
                onClick={() => setRegion("international")}
                className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  region === "international" ? "text-white font-semibold" : "text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
                aria-pressed={region === "international"}
              >
                <span>🌍</span>
                <span>International ($ USD)</span>
              </button>

              {/* Animated Sliding Pill */}
              <motion.div
                className="absolute inset-y-1 rounded-full bg-[#1D1D1F] shadow-sm pointer-events-none"
                initial={false}
                animate={{
                  left: region === "india" ? "4px" : "50%",
                  width: "calc(50% - 4px)",
                }}
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            </div>
          </div>
        </div>

        {/* ==============================================================
            APPLE 4-COLUMN WEBSITE INVESTMENT CARDS (STARTER, GOLD, PREMIUM, CUSTOM)
           ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {WEBSITE_TIERS.map((tier) => {
            const currentPrice = region === "india" ? tier.priceIndia : tier.priceIntl;
            const currentCadence = region === "india" ? tier.cadenceIndia : tier.cadenceIntl;
            const isCustom = tier.id === "custom";

            return (
              <div
                key={tier.id}
                className={`apple-card rounded-[24px] sm:rounded-[28px] bg-white border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.featured
                    ? "border-[#0D9488]/40 ring-1 ring-[#0D9488]/20 shadow-[0_16px_48px_rgba(13,148,136,0.08)] xl:-translate-y-2"
                    : isCustom
                    ? "border-black/[0.12] bg-gradient-to-b from-white to-[#F8F8FA] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-black/[0.18]"
                    : "border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-black/[0.14]"
                }`}
              >
                {/* Featured Badge */}
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1D1D1F] text-white text-[10px] font-semibold shadow-md tracking-tight whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-[#0D9488]" />
                    <span>MOST POPULAR CHOICE</span>
                  </div>
                )}

                {/* Custom Badge */}
                {isCustom && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0D9488] text-white text-[10px] font-semibold shadow-md tracking-tight whitespace-nowrap">
                    <PhoneCall className="w-3 h-3" />
                    <span>TAILORED SCOPE</span>
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

                    {/* Animated Price Switcher */}
                    <div className="pt-1">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${tier.id}-${region}`}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                        >
                          {isCustom ? (
                            <div>
                              <div className="flex items-baseline gap-1.5">
                                <span className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
                                  Custom Scope
                                </span>
                              </div>
                              <span className="text-[11px] font-mono text-[#0D9488] font-semibold block mt-0.5">
                                Price discussed on call
                              </span>
                            </div>
                          ) : (
                            <div>
                              <div className="flex items-baseline gap-1.5">
                                <span className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
                                  {currentPrice}
                                </span>
                                <span className="text-xs text-[#6E6E73] font-medium">
                                  /-
                                </span>
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
                  <p className="text-xs text-[#6E6E73] leading-relaxed min-h-[36px]">
                    {tier.idealFor}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6E73] block font-semibold">
                      WHAT IS INCLUDED
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
                        : isCustom
                        ? "btn-apple-primary !bg-[#1D1D1F] hover:!bg-black"
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

        {/* Security & Ownership Guarantee Note */}
        <div className="p-4 px-5 sm:px-6 rounded-2xl bg-white border border-black/[0.08] shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#6E6E73]">
          <div className="flex items-center gap-2 text-[#1D1D1F] font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
            <span>
              {region === "india"
                ? "100% Code Ownership • UPI / NetBanking / GST Invoices Available • Zero Hidden Fees"
                : "100% Code Ownership • Global Stripe, Cards & Wire Accepted • Zero Hidden Fees"}
            </span>
          </div>
          <span>All packages include milestone guarantees and direct developer support.</span>
        </div>

      </div>
    </section>
  );
}
