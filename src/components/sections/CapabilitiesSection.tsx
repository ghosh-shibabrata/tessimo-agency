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
    <section className="relative w-full bg-[#FAF9F5] py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Structural Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-[#E2DFD7]" />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* ==============================================================
            ACADEMIC SECTION HEADER
           ============================================================== */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-xs font-mono font-medium text-[#66635E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#191919]" />
            <span>04 // Capability Matrix</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] leading-[1.12] tracking-tight">
              Thoughtfully engineered. <br />
              <span className="text-[#66635E] italic">Autonomously orchestrated.</span>
            </h2>

            <p className="text-base text-[#66635E] max-w-md lg:pb-1 font-sans leading-relaxed">
              Every system we deploy is calibrated toward one standard: establishing lasting authority, sub-second speed, and operational freedom.
            </p>
          </div>
        </div>

        {/* Status Capsule */}
        <div className="px-5 py-3 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] flex items-center justify-between transition-all">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#191919]" />
            <span className="text-xs font-mono text-[#191919] tracking-wide">
              {hoveredItem ? `CAPABILITY ACTIVE: ${hoveredItem} // VERIFIED` : "EXPLORE ARCHITECTURAL CAPABILITIES"}
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#66635E] bg-[#FAF9F5] px-3 py-0.5 rounded-full border border-[#E2DFD7] hidden sm:inline-block font-medium">
            TESSIMO TECHNOLOGY
          </span>
        </div>

        {/* ==============================================================
            TECH SPEC CARDS: DIGITAL & INTELLIGENCE
           ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* CATEGORY 1: DIGITAL */}
          <div className="rounded-[28px] sm:rounded-[36px] bg-[#FAF9F5] border border-[#E2DFD7] p-8 sm:p-10 space-y-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all">
            <div className="space-y-3 pb-5 border-b border-[#E2DFD7]">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-xs font-mono font-medium text-[#66635E]">
                <span>Category 01</span>
                <span className="text-[#66635E]/40">•</span>
                <span>Visual & Conversational Platforms</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#191919] tracking-tight">
                Digital Interfaces
              </h3>
            </div>

            {/* Spec Rows */}
            <div className="divide-y divide-[#E2DFD7]">
              {DIGITAL_CAPABILITIES.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="py-5 group transition-all duration-200 cursor-default"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono text-[#66635E] font-medium">
                        {item.id}
                      </span>
                      <h4 className="text-base sm:text-lg font-serif font-medium text-[#191919] group-hover:text-[#66635E] transition-colors tracking-tight">
                        {item.name}
                      </h4>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#191919] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                  <p className="mt-1.5 pl-7 text-xs sm:text-sm text-[#66635E] font-sans leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CATEGORY 2: INTELLIGENCE */}
          <div className="rounded-[28px] sm:rounded-[36px] bg-[#FAF9F5] border border-[#E2DFD7] p-8 sm:p-10 space-y-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all">
            <div className="space-y-3 pb-5 border-b border-[#E2DFD7]">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-xs font-mono font-medium text-[#66635E]">
                <span>Category 02</span>
                <span className="text-[#66635E]/40">•</span>
                <span>Autonomous Operational Systems</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#191919] tracking-tight">
                Intelligent Automation
              </h3>
            </div>

            {/* Spec Rows */}
            <div className="divide-y divide-[#E2DFD7]">
              {INTELLIGENCE_CAPABILITIES.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="py-5 group transition-all duration-200 cursor-default"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono text-[#66635E] font-medium">
                        {item.id}
                      </span>
                      <h4 className="text-base sm:text-lg font-serif font-medium text-[#191919] group-hover:text-[#66635E] transition-colors tracking-tight">
                        {item.name}
                      </h4>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#191919] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                  <p className="mt-1.5 pl-7 text-xs sm:text-sm text-[#66635E] font-sans leading-relaxed">
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
