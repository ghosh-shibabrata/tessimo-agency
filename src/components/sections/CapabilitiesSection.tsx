"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface CapabilityItem {
  id: string;
  name: string;
  detail: string;
}

const DIGITAL_CAPABILITIES: CapabilityItem[] = [
  {
    id: "01.1",
    name: "Conversion-Focused UI/UX Design",
    detail: "Human-centered interfaces engineered to turn curious visitors into paying clients with zero confusion.",
  },
  {
    id: "01.2",
    name: "Next.js 16 High-Performance Websites",
    detail: "Sub-second load times on mobile, zero lag, and instant page transitions that customers love.",
  },
  {
    id: "01.3",
    name: "Mobile-First Architecture",
    detail: "Flawless touch controls, one-tap calling, and rapid booking calibrated for 90% smartphone users.",
  },
  {
    id: "01.4",
    name: "Google SEO & AI Search Optimization",
    detail: "Structured rich snippets and metadata that place your business in front of high-intent searchers.",
  },
  {
    id: "01.5",
    name: "Landing Pages That Win Bookings",
    detail: "Targeted landing pages crafted to present your offers with high credibility and immediate calls to action.",
  },
];

const INTELLIGENCE_CAPABILITIES: CapabilityItem[] = [
  {
    id: "02.1",
    name: "24/7 AI Customer Support Agents",
    detail: "Instant, friendly responses to customer inquiries on your website and WhatsApp without hiring extra staff.",
  },
  {
    id: "02.2",
    name: "Automated Appointment Scheduling",
    detail: "Direct calendar booking with automatic Google Meet and Zoom links dispatched in seconds.",
  },
  {
    id: "02.3",
    name: "Smart Lead Qualification & Scoring",
    detail: "Pre-screens potential clients based on your criteria so your team only talks to serious buyers.",
  },
  {
    id: "02.4",
    name: "CRM & Database Auto-Sync",
    detail: "Automatically updates HubSpot, Salesforce, or Google Sheets so no contact or deal gets lost.",
  },
  {
    id: "02.5",
    name: "Omnichannel WhatsApp & Email Flows",
    detail: "Instant confirmation messages, follow-up reminders, and quote dispatch without human delay.",
  },
];

export function CapabilitiesSection() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-[#FBFBFD] py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Structural Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ==============================================================
            APPLE SECTION HEADER
           ============================================================== */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-xs font-medium text-[#1D1D1F] tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
            <span>05 // CAPABILITY MATRIX</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-[#1D1D1F] leading-[1.08] break-words">
              Thoughtfully designed. <br />
              <span className="text-[#6E6E73]">Intelligently automated.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#6E6E73] max-w-md lg:pb-1 font-normal leading-relaxed">
              Every feature we build is focused on one outcome: giving your business an unfair advantage in speed, conversion, and operational freedom.
            </p>
          </div>
        </div>

        {/* Apple Capsule Status HUD */}
        <div className="px-5 py-3 rounded-full bg-white border border-black/[0.08] shadow-xs flex items-center justify-between transition-all">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
            <span className="text-xs font-mono text-[#1D1D1F] tracking-wide">
              {hoveredItem ? `CAPABILITY ACTIVE: ${hoveredItem} // READY TO DEPLOY` : "EXPLORE OUR TAILORED BUSINESS CAPABILITIES"}
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#0D9488] bg-[#0D9488]/10 px-3 py-0.5 rounded-full border border-[#0D9488]/20 hidden sm:inline-block font-semibold">
            TESSIMO ENTERPRISE
          </span>
        </div>

        {/* ==============================================================
            APPLE TECH SPEC CARDS: DIGITAL & INTELLIGENCE
           ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* CATEGORY 1: DIGITAL */}
          <div className="apple-card rounded-[28px] sm:rounded-[36px] bg-white border border-black/[0.08] p-8 sm:p-10 space-y-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] transition-all">
            <div className="space-y-3 pb-5 border-b border-black/[0.08]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F7] border border-black/[0.06] text-xs font-mono font-semibold text-[#0D9488]">
                <span>CATEGORY 01</span>
                <span className="text-black/20">•</span>
                <span>CUSTOMER-WINNING PLATFORMS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
                Digital Experiences
              </h3>
            </div>

            {/* Spec Rows */}
            <div className="divide-y divide-black/[0.06]">
              {DIGITAL_CAPABILITIES.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="py-5 group transition-all duration-200 cursor-default"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono text-[#0D9488] font-semibold">
                        {item.id}
                      </span>
                      <h4 className="text-base sm:text-lg font-semibold text-[#1D1D1F] group-hover:text-[#0D9488] transition-colors tracking-tight">
                        {item.name}
                      </h4>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#0D9488] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                  <p className="mt-1.5 pl-7 text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CATEGORY 2: INTELLIGENCE */}
          <div className="apple-card rounded-[28px] sm:rounded-[36px] bg-white border border-black/[0.08] p-8 sm:p-10 space-y-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] transition-all">
            <div className="space-y-3 pb-5 border-b border-black/[0.08]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F7] border border-black/[0.06] text-xs font-mono font-semibold text-[#0D9488]">
                <span>CATEGORY 02</span>
                <span className="text-black/20">•</span>
                <span>24/7 AUTONOMOUS SYSTEMS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
                Intelligent Automation
              </h3>
            </div>

            {/* Spec Rows */}
            <div className="divide-y divide-black/[0.06]">
              {INTELLIGENCE_CAPABILITIES.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="py-5 group transition-all duration-200 cursor-default"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono text-[#0D9488] font-semibold">
                        {item.id}
                      </span>
                      <h4 className="text-base sm:text-lg font-semibold text-[#1D1D1F] group-hover:text-[#0D9488] transition-colors tracking-tight">
                        {item.name}
                      </h4>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#0D9488] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                  <p className="mt-1.5 pl-7 text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
