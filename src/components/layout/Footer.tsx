"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { TessimoIcon } from "@/components/brand/TessimoIcon";
import { Globe } from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const serviceLinks = [
    { name: "Digital Experiences", href: "#services" },
    { name: "Intelligent Systems", href: "#services" },
    { name: "Autonomous AI Agents", href: "#approach" },
    { name: "Workflow Automation", href: "#approach" },
    { name: "CRM Integrations", href: "#approach" },
  ];

  const architectureLinks = [
    { name: "Autonomous Pipeline", href: "#approach" },
    { name: "Instant Lead Routing", href: "#approach" },
    { name: "Lead Qualification", href: "#approach" },
    { name: "WhatsApp & Calendar Sync", href: "#approach" },
    { name: "Real-time Telemetry", href: "#services" },
  ];

  const capabilityLinks = [
    { name: "Conversion UI/UX Design", href: "#services" },
    { name: "Next.js 16 Web Engineering", href: "#services" },
    { name: "Mobile-First Platforms", href: "#services" },
    { name: "Google SEO & AI Metadata", href: "#services" },
    { name: "High-Speed Infrastructure", href: "#services" },
  ];

  const processLinks = [
    { name: "01 Discover & Audit", href: "#approach" },
    { name: "02 Design & Architect", href: "#approach" },
    { name: "03 Build & Integrate", href: "#approach" },
    { name: "04 Launch & Accelerate", href: "#approach" },
  ];

  const agencyLinks = [
    { name: "About Tessimo", href: "#about" },
    { name: "Founder & Leadership", href: "#founder" },
    { name: "Editorial Insights", href: "#blog" },
    { name: "Selected Work", href: "#work" },
    { name: "Investment Models", href: "#pricing" },
    { name: "Start a Project", href: "#contact" },
    { name: "Privacy & Ownership", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-[#F5F5F7] text-[#6E6E73] text-xs font-normal border-t border-black/[0.08] relative overflow-hidden">
      <div className="w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        
        {/* ==============================================================
            APPLE FOOTNOTES / DISCLAIMERS
           ============================================================== */}
        <div className="space-y-2 pb-8 border-b border-black/[0.08] text-[11px] leading-relaxed text-[#86868B] font-normal">
          <p>
            1. Tessimo Intelligence Pipeline simulations and automation benchmarks represent verified multi-stage event flows under standard cloud response latency.
          </p>
          <p>
            2. Web performance metrics reflect real-world mobile Core Web Vitals targets engineered on Next.js 16 and global edge CDN caching.
          </p>
          <p>
            3. All client systems, source code, data stores, and workflow automations remain 100% intellectual property of the respective business owner.
          </p>
        </div>

        {/* ==============================================================
            APPLE BREADCRUMB / MINI BRAND BAR
           ============================================================== */}
        <div className="flex items-center gap-3 py-2 text-xs text-[#6E6E73]">
          <Link
            href="/"
            className="text-[#1D1D1F] hover:opacity-80 transition-opacity p-0.5"
            aria-label="Tessimo Home"
          >
            <TessimoIcon size={20} variant="teal" />
          </Link>
          <span className="text-black/20">/</span>
          <span className="text-[#1D1D1F] font-medium">Studio Agency</span>
          <span className="text-black/20">/</span>
          <span>Websites & 24/7 Autonomous Systems</span>
        </div>

        {/* ==============================================================
            APPLE 5-COLUMN DIRECTORY
           ============================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-4">
          
          {/* Col 1: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#1D1D1F] tracking-tight">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#1D1D1F] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Automation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#1D1D1F] tracking-tight">
              Automation
            </h4>
            <ul className="space-y-2">
              {architectureLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#1D1D1F] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#1D1D1F] tracking-tight">
              Capabilities
            </h4>
            <ul className="space-y-2">
              {capabilityLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#1D1D1F] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Process */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#1D1D1F] tracking-tight">
              Process
            </h4>
            <ul className="space-y-2">
              {processLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#1D1D1F] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Tessimo */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#1D1D1F] tracking-tight">
              Tessimo
            </h4>
            <ul className="space-y-2">
              {agencyLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#1D1D1F] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-black/[0.08] text-[10px] font-mono text-[#1D1D1F] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
                SYSTEM 100% OPERATIONAL
              </span>
            </div>
          </div>

        </div>

        {/* ==============================================================
            APPLE BOTTOM COPYRIGHT & LEGAL
           ============================================================== */}
        <div className="pt-6 border-t border-black/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#6E6E73]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Copyright © {currentYear} Tessimo Agency. All rights reserved.</span>
            <div className="flex items-center gap-3 text-[#6E6E73]">
              <Link href="#contact" className="hover:text-[#1D1D1F] transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="#contact" className="hover:text-[#1D1D1F] transition-colors">Terms of Service</Link>
              <span>|</span>
              <Link href="#pricing" className="hover:text-[#1D1D1F] transition-colors">Pricing & Scope</Link>
              <span>|</span>
              <Link href="#services" className="hover:text-[#1D1D1F] transition-colors">Site Map</Link>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[#1D1D1F] hover:text-[#0D9488] cursor-pointer transition-colors font-medium">
            <Globe className="w-3.5 h-3.5" />
            <span>Worldwide (English)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
