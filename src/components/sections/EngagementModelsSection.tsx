"use client";

import React from "react";
import { CheckCircle2, ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";

interface ModelTier {
  id: string;
  tag: string;
  title: string;
  price: string;
  cadence: string;
  timeline: string;
  featured?: boolean;
  idealFor: string;
  deliverables: string[];
  ctaLabel: string;
}

const MODELS: ModelTier[] = [
  {
    id: "starter",
    tag: "01 // STARTER SPRINT",
    title: "Starter Quick Launch",
    price: "From $950",
    cadence: "Fixed one-time investment",
    timeline: "5–7 Days Delivery",
    idealFor: "Emerging businesses or solopreneurs wanting a rapid, high-converting one-page launch and direct WhatsApp booking.",
    deliverables: [
      "1-Page high-converting landing page",
      "Mobile-first design with 1-tap call",
      "Direct WhatsApp booking integration",
      "Google Business & search metadata",
      "7-Day fast launch guarantee",
      "14 Days post-launch support",
    ],
    ctaLabel: "Start with $950 Sprint",
  },
  {
    id: "sprint",
    tag: "02 // FULL PLATFORM",
    title: "Digital Experience Launch",
    price: "From $2,400",
    cadence: "Fixed one-time investment",
    timeline: "2–3 Weeks Delivery",
    idealFor: "Growing businesses wanting a bespoke multi-page website engineered to win clients and rank on Google.",
    deliverables: [
      "Multi-page custom design system",
      "Next.js 16 sub-second loading speed",
      "Interactive booking & calendar sync",
      "Google SEO & AI search metadata (AEO)",
      "Comprehensive conversion analytics",
      "30 Days post-launch hypercare",
    ],
    ctaLabel: "Start with Website",
  },
  {
    id: "intelligence",
    tag: "03 // 24/7 AUTOMATION",
    title: "Autonomous AI System",
    price: "From $4,800",
    cadence: "Fixed one-time investment",
    timeline: "3–4 Weeks Delivery",
    featured: true,
    idealFor: "Businesses losing leads to slow replies, needing 24/7 automated customer qualification and appointment booking.",
    deliverables: [
      "24/7 AI conversational agent",
      "Instant WhatsApp & web replies (<60s)",
      "Automatic Google Calendar scheduling",
      "Live CRM & customer data synchronization",
      "Automated lead qualification & scoring",
      "Private data protection & zero hallucinations",
    ],
    ctaLabel: "Deploy Autonomous System",
  },
  {
    id: "enterprise",
    tag: "04 // ONGOING PARTNER",
    title: "Dedicated Growth Retainer",
    price: "From $2,500 / mo",
    cadence: "Flexible monthly partnership",
    timeline: "Continuous Evolution",
    idealFor: "Established brands that want continuous website improvements, new automations, and dedicated priority support.",
    deliverables: [
      "Dedicated development & AI team",
      "Bi-weekly feature & conversion updates",
      "New workflow & tool automations",
      "Real-time uptime & error monitoring",
      "Priority same-day Slack & WhatsApp",
      "Monthly conversion & ROI reviews",
    ],
    ctaLabel: "Discuss Growth Retainer",
  },
];

export function EngagementModelsSection() {
  return (
    <section id="pricing" className="relative w-full bg-[#FBFBFD] py-16 sm:py-24 lg:py-32 overflow-hidden scroll-mt-14">
      {/* Structural Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ==============================================================
            APPLE SECTION HEADER
           ============================================================== */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-xs font-medium text-[#1D1D1F] tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
            <span>07 // TRANSPARENT INVESTMENT</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-[#1D1D1F] leading-[1.08] break-words">
              Straightforward pricing. <br />
              <span className="text-[#6E6E73]">Built for businesses at every stage.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#6E6E73] max-w-md lg:pb-1 font-normal leading-relaxed">
              Transparent, fixed investments from our $950 fast starter sprint to full autonomous AI pipelines. Zero hidden fees.
            </p>
          </div>
        </div>

        {/* ==============================================================
            APPLE 4-COLUMN INVESTMENT CARDS
           ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {MODELS.map((model) => (
            <div
              key={model.id}
              className={`apple-card rounded-[24px] sm:rounded-[28px] bg-white border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                model.featured
                  ? "border-[#0D9488]/40 ring-1 ring-[#0D9488]/20 shadow-[0_12px_44px_rgba(13,148,136,0.08)] -translate-y-1"
                  : "border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-black/[0.14]"
              }`}
            >
              {/* Featured Badge */}
              {model.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1D1D1F] text-white text-[10px] font-semibold shadow-md tracking-tight whitespace-nowrap">
                  <Sparkles className="w-3 h-3 text-[#0D9488]" />
                  <span>MOST POPULAR CHOICE</span>
                </div>
              )}

              <div className="space-y-5">
                {/* Header Strip */}
                <div className="space-y-2.5 pb-5 border-b border-black/[0.08]">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#F5F5F7] border border-black/[0.06] text-[11px] font-mono font-semibold text-[#0D9488]">
                    <span>{model.tag}</span>
                    <span className="text-black/20">•</span>
                    <span>{model.timeline}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] tracking-tight leading-snug">
                    {model.title}
                  </h3>

                  <div className="pt-1">
                    <span className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight block">
                      {model.price}
                    </span>
                    <span className="text-[11px] font-mono text-[#6E6E73] block mt-0.5">
                      {model.cadence}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#6E6E73] leading-relaxed min-h-[40px]">
                  {model.idealFor}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6E73] block font-semibold">
                    WHAT IS INCLUDED
                  </span>
                  <ul className="space-y-2">
                    {model.deliverables.map((item) => (
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
                  className={`w-full h-10 rounded-full text-xs font-semibold tracking-tight transition-all flex items-center justify-center gap-1.5 ${
                    model.featured
                      ? "btn-apple-primary"
                      : "btn-apple-secondary"
                  }`}
                >
                  <span>{model.ctaLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Ownership Guarantee Note */}
        <div className="p-4 px-5 sm:px-6 rounded-2xl bg-white border border-black/[0.08] shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#6E6E73]">
          <div className="flex items-center gap-2 text-[#1D1D1F] font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
            <span>100% Code & Data Ownership • Zero Lock-In • Full Client Control</span>
          </div>
          <span>All proposals include transparent milestone deliverables.</span>
        </div>

      </div>
    </section>
  );
}
