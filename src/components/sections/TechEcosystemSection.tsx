"use client";

import React from "react";
import {
  Cpu,
  Layers,
  Database,
  GitMerge,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface TechGroup {
  category: string;
  tag: string;
  description: string;
  technologies: { name: string; role: string; status: string }[];
  icon: React.ElementType;
}

const TECH_GROUPS: TechGroup[] = [
  {
    category: "High-Converting Web Architecture",
    tag: "PLATFORM & SPEED",
    description: "Lightning-fast websites engineered to convert mobile visitors into customers with sub-second speed.",
    icon: Layers,
    technologies: [
      { name: "Next.js 16 & React 19", role: "Sub-second page transitions & instant load", status: "VERIFIED" },
      { name: "Mobile Touch Optimization", role: "Effortless thumb navigation for 90% mobile users", status: "VERIFIED" },
      { name: "Google SEO & AEO Schema", role: "Rank higher on Google search and AI engines", status: "VERIFIED" },
      { name: "Global Edge Network", role: "Instant global content delivery without delays", status: "VERIFIED" },
      { name: "Conversion Analytics", role: "Live visitor tracking and booking insights", status: "VERIFIED" },
    ],
  },
  {
    category: "24/7 Intelligent Automation",
    tag: "AI & INTELLIGENCE",
    description: "Smart autonomous agents that answer inquiries, qualify leads, and close calendar bookings day and night.",
    icon: Cpu,
    technologies: [
      { name: "Autonomous Reasoning", role: "Human-like conversational customer assistance", status: "ACTIVE" },
      { name: "Automated Voice & WhatsApp", role: "Instant spoken and messaging follow-ups in <60s", status: "ACTIVE" },
      { name: "Business Knowledge Store", role: "Accurate answers tailored to your exact business", status: "ACTIVE" },
      { name: "Smart Lead Scoring", role: "Filters high-intent prospects for your sales team", status: "ACTIVE" },
      { name: "Strict Privacy Guardrails", role: "Zero hallucination and protected customer data", status: "ACTIVE" },
    ],
  },
  {
    category: "Enterprise Business Tools",
    tag: "INTEGRATIONS",
    description: "Seamless bi-directional synchronization with your daily business apps and payment systems.",
    icon: GitMerge,
    technologies: [
      { name: "WhatsApp Business API", role: "Automated messaging and appointment reminders", status: "CONNECTED" },
      { name: "Google Calendar & Meet", role: "Instant scheduling without back-and-forth emails", status: "CONNECTED" },
      { name: "HubSpot & Salesforce", role: "Automatic client record updates and pipeline sync", status: "CONNECTED" },
      { name: "Stripe Payment Gateway", role: "Secure customer checkout and automated invoicing", status: "CONNECTED" },
      { name: "Instant SMS & Email Alerts", role: "Live lead notifications sent directly to your phone", status: "CONNECTED" },
    ],
  },
  {
    category: "Security & Cloud Reliability",
    tag: "ENTERPRISE PRIVACY",
    description: "Bank-grade security and 99.99% uptime so your business runs seamlessly around the clock.",
    icon: Database,
    technologies: [
      { name: "100% Client Ownership", role: "You own all code, data, and workflows completely", status: "GUARANTEED" },
      { name: "Encrypted Cloud Storage", role: "End-to-end encryption for customer records", status: "SECURE" },
      { name: "Zero AI Model Training", role: "Your proprietary data is never used to train public AI", status: "ENFORCED" },
      { name: "Automatic Daily Backups", role: "Continuous data redundancy and disaster recovery", status: "ACTIVE" },
      { name: "99.99% Uptime Guarantee", role: "Rock-solid cloud infrastructure that never goes down", status: "VERIFIED" },
    ],
  },
];

export function TechEcosystemSection() {
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
            <span>04 // INTEGRATION & ECOSYSTEM</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-[#1D1D1F] leading-[1.08] break-words">
              Connected to your tools. <br />
              <span className="text-[#6E6E73]">Built on world-class tech.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#6E6E73] max-w-md lg:pb-1 font-normal leading-relaxed">
              We connect directly into the tools you use every day, ensuring automated lead capture, calendar booking, and CRM updates without manual effort.
            </p>
          </div>
        </div>

        {/* ==============================================================
            APPLE 4-COLUMN TECH BENTO GRID
           ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TECH_GROUPS.map((group) => {
            const IconComp = group.icon;
            return (
              <div
                key={group.category}
                className="apple-card rounded-[24px] sm:rounded-[32px] bg-white border border-black/[0.08] p-7 sm:p-9 space-y-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-black/[0.14] transition-all duration-300 relative group"
              >
                {/* Card Top Strip */}
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#F5F5F7] text-[#0D9488]">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#0D9488] uppercase tracking-wider block font-semibold">
                        {group.tag}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] tracking-tight">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
                </div>

                <p className="text-sm text-[#6E6E73] leading-relaxed">
                  {group.description}
                </p>

                {/* Tech Rows */}
                <div className="space-y-2 pt-2">
                  {group.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-3 rounded-xl bg-[#F5F5F7] border border-black/[0.04] flex items-center justify-between transition-colors hover:border-black/[0.12]"
                    >
                      <div className="space-y-0.5 pr-2">
                        <span className="text-xs font-semibold text-[#1D1D1F] block">
                          {tech.name}
                        </span>
                        <span className="text-[11px] text-[#6E6E73] block">
                          {tech.role}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono text-[#0D9488] bg-[#0D9488]/10 px-2.5 py-0.5 rounded-full border border-[#0D9488]/20 font-semibold shrink-0">
                        {tech.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
