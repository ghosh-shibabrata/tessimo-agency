"use client";

import React, { useState } from "react";
import {
  Globe,
  Layout,
  Layers,
  Sparkles,
  Bot,
  Zap,
  GitBranch,
  ArrowRight,
  CheckCircle2,
  Monitor,
  Smartphone,
  Terminal,
  ChevronRight,
  Wifi,
  Battery,
} from "lucide-react";

export function ServicesSection() {
  const [activeDevice, setActiveDevice] = useState<"desktop" | "mobile">("desktop");
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(2);

  const capabilitiesOne = [
    "High-converting website design",
    "Mobile-first responsive experiences",
    "Website redesigns that drive sales",
    "Fast loading speeds & Google SEO",
  ];

  const capabilitiesTwo = [
    "24/7 AI customer service agents",
    "Automatic lead qualification & routing",
    "Instant WhatsApp & email replies",
    "Automatic appointment booking",
    "CRM & client database synchronization",
  ];

  const terminalLogs: Record<number, { step: string; lines: string[] }> = {
    1: {
      step: "STAGE 01 // NEW CUSTOMER INQUIRY",
      lines: [
        "[01:42:18] Inquiry received from website contact form",
        "[01:42:18] Customer: Marcus Vance • Interested in logistics automation",
        "[01:42:18] Instant confirmation sent to customer's WhatsApp",
      ],
    },
    2: {
      step: "STAGE 02 // INSTANT AI QUALIFICATION",
      lines: [
        "[01:42:18] AI analyzed customer requirements in 0.4 seconds",
        "[01:42:18] Intent matched: Enterprise Client ready to begin",
        "[01:42:18] Available discovery time slots prepared automatically",
      ],
    },
    3: {
      step: "STAGE 03 // AUTOMATIC BOOKING & CRM SYNC",
      lines: [
        "[01:42:19] Customer record created in CRM without manual typing",
        "[01:42:19] Calendar appointment confirmed for Thursday 14:00",
        "[01:42:19] Meeting link sent • Zero staff hours spent",
      ],
    },
  };

  const currentLog = terminalLogs[activeWorkflowStep];

  return (
    <section id="services" className="relative w-full bg-[#FBFBFD] py-16 sm:py-24 lg:py-32 overflow-hidden scroll-mt-14">
      {/* Structural Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-18">
        
        {/* ==============================================================
            APPLE SECTION HEADER
           ============================================================== */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-xs font-medium text-[#1D1D1F] tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
            <span>01 // WHAT WE DELIVER</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-[#1D1D1F] leading-[1.08] break-words">
              Two core disciplines. <br />
              <span className="text-[#6E6E73]">One goal: Business growth.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#6E6E73] max-w-md lg:pb-1 font-normal leading-relaxed">
              We build premium websites that capture qualified attention, and autonomous systems that turn inquiries into paying clients without manual effort.
            </p>
          </div>
        </div>

        {/* ==============================================================
            CARD 01: DIGITAL EXPERIENCES
           ============================================================== */}
        <div className="apple-card rounded-[28px] sm:rounded-[36px] bg-white border border-black/[0.08] p-6 sm:p-10 lg:p-12 overflow-hidden relative shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#F5F5F7] border border-black/[0.06] text-xs font-mono font-medium text-[#0D9488]">
                  <span>01</span>
                  <span className="text-black/20">•</span>
                  <span>WEBSITES THAT CONVERT</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.03em] text-[#1D1D1F] leading-snug">
                  We build websites that actually win customers.
                </h3>
              </div>

              <p className="text-[#6E6E73] text-base leading-relaxed">
                From first impression to booked call, we design clean, fast, mobile-friendly websites that establish instant trust and turn casual visitors into serious inquiries.
              </p>

              {/* Capabilities List */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#86868B]">
                  What&apos;s Included
                </span>
                <div className="flex flex-col gap-2">
                  {capabilitiesOne.map((cap) => (
                    <div
                      key={cap}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1D1D1F]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] hover:text-[#0F766E] transition-colors group"
                >
                  Explore website solutions
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Right Interactive Browser Frame */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl sm:rounded-3xl border border-black/[0.1] bg-[#F5F5F7] shadow-[0_12px_36px_rgba(0,0,0,0.06)] overflow-hidden">
                {/* Browser Title Bar */}
                <div className="px-4 py-3 bg-[#E8E8ED] border-b border-black/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    <span className="ml-2 px-3 py-0.5 rounded-full bg-white text-[11px] font-mono text-[#6E6E73] border border-black/[0.06]">
                      {activeDevice === "desktop" ? "yourcompany.com" : "m.yourcompany.com"}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-black/[0.08] shadow-2xs">
                    <button
                      onClick={() => setActiveDevice("desktop")}
                      className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
                        activeDevice === "desktop"
                          ? "bg-[#1D1D1F] text-white shadow-xs font-semibold"
                          : "text-[#6E6E73] hover:text-[#1D1D1F]"
                      }`}
                      aria-label="Desktop view"
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Desktop</span>
                    </button>
                    <button
                      onClick={() => setActiveDevice("mobile")}
                      className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
                        activeDevice === "mobile"
                          ? "bg-[#1D1D1F] text-white shadow-xs font-semibold"
                          : "text-[#6E6E73] hover:text-[#1D1D1F]"
                      }`}
                      aria-label="Mobile view"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Mobile</span>
                    </button>
                  </div>
                </div>

                {/* Device Canvas Content */}
                {activeDevice === "desktop" ? (
                  /* DESKTOP VIEWPORT */
                  <div className="p-6 sm:p-8 bg-[#FFFFFF] space-y-6">
                    <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#0D9488]" />
                        <span className="text-xs font-semibold text-[#1D1D1F] tracking-tight">
                          MODERN ENTERPRISE STUDIO
                        </span>
                      </div>
                      <div className="flex gap-3 text-[10px] font-mono text-[#6E6E73]">
                        <span>MOBILE READY</span>
                        <span>SEO RANKED</span>
                        <span className="text-[#0D9488] font-semibold">100% HEALTH</span>
                      </div>
                    </div>

                    <div className="space-y-3 py-2">
                      <span className="text-[10px] font-mono text-[#0D9488] tracking-wider uppercase font-semibold">
                        BUILT FOR MAXIMUM CONVERSION
                      </span>
                      <h4 className="text-xl sm:text-2xl text-[#1D1D1F] font-semibold tracking-tight leading-snug">
                        Clean design that makes your business look like an industry leader.
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                        Engineered with sub-second loading, clean layouts, and clear calls-to-action that guide prospects directly to booking consultations.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 pt-2">
                      <div className="rounded-2xl bg-[#F5F5F7] border border-black/[0.05] p-3.5 flex flex-col justify-between">
                        <span className="text-[10px] font-mono text-[#6E6E73]">GOOGLE CWV</span>
                        <span className="text-sm font-semibold text-[#0D9488]">100 / 100</span>
                      </div>
                      <div className="rounded-2xl bg-[#F5F5F7] border border-black/[0.05] p-3.5 flex flex-col justify-between">
                        <span className="text-[10px] font-mono text-[#6E6E73]">PAGE LOAD</span>
                        <span className="text-sm font-semibold text-[#1D1D1F]">0.32s</span>
                      </div>
                      <div className="rounded-2xl bg-[#F5F5F7] border border-black/[0.05] p-3.5 flex flex-col justify-between">
                        <span className="text-[10px] font-mono text-[#6E6E73]">CONVERSION</span>
                        <span className="text-sm font-semibold text-[#0D9488]">+142%</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* AUTHENTIC MOBILE VIEWPORT (iPhone Frame) */
                  <div className="p-6 bg-[#F5F5F7] flex justify-center">
                    <div className="w-full max-w-[300px] rounded-[36px] border border-black/[0.15] bg-[#FFFFFF] p-4 space-y-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                      {/* Dynamic Island & Status Bar */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#6E6E73] px-2 pt-1">
                        <span>9:41</span>
                        <div className="w-20 h-4 rounded-full bg-black flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#1D1D1F]">
                          <Wifi className="w-3 h-3" />
                          <Battery className="w-3 h-3" />
                        </div>
                      </div>

                      {/* Mobile Brand Bar */}
                      <div className="flex items-center justify-between border-b border-black/[0.06] pb-2.5 px-1">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#0D9488]" />
                          <span className="text-[11px] font-semibold text-[#1D1D1F]">YOUR BRAND</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#0D9488] bg-[#0D9488]/10 px-2 py-0.5 rounded-full font-semibold">
                          OPEN
                        </span>
                      </div>

                      {/* Mobile Card Hero */}
                      <div className="space-y-2 p-3 rounded-2xl bg-[#F5F5F7] border border-black/[0.05]">
                        <span className="text-[9px] font-mono text-[#0D9488] uppercase tracking-wider block font-semibold">
                          MOBILE-FIRST CONVERSION
                        </span>
                        <h5 className="text-sm font-semibold text-[#1D1D1F] leading-snug">
                          Flawless on every phone screen.
                        </h5>
                        <p className="text-[11px] text-[#6E6E73] leading-relaxed">
                          90% of your buyers use phones. We make your website touch-friendly, lightning-fast, and effortless to book.
                        </p>
                      </div>

                      {/* Mobile Metrics Row */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2.5 rounded-xl bg-[#F5F5F7] border border-black/[0.05] text-center">
                          <span className="text-[9px] font-mono text-[#6E6E73] block">PHONE LOAD</span>
                          <span className="text-xs font-semibold text-[#0D9488]">Sub-second</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#F5F5F7] border border-black/[0.05] text-center">
                          <span className="text-[9px] font-mono text-[#6E6E73] block">1-TAP CALL</span>
                          <span className="text-xs font-semibold text-[#1D1D1F]">Enabled</span>
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className="w-24 h-1 rounded-full bg-black/20 mx-auto mt-2" />
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

        {/* ==============================================================
            CARD 02: INTELLIGENT SYSTEMS
           ============================================================== */}
        <div className="apple-card rounded-[28px] sm:rounded-[36px] bg-white border border-black/[0.08] p-6 sm:p-10 lg:p-12 overflow-hidden relative shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual Showcase (Cols 1-7): Connected Workflow Nodes */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-2xl sm:rounded-3xl border border-black/[0.08] bg-[#F5F5F7] shadow-[0_12px_36px_rgba(0,0,0,0.06)] p-6 sm:p-8 space-y-5">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between border-b border-black/[0.06] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488] animate-pulse" />
                    <span className="text-xs font-semibold text-[#1D1D1F] tracking-tight uppercase">
                      Automatic Customer Flow
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#0D9488] bg-[#0D9488]/10 px-2.5 py-0.5 rounded-full border border-[#0D9488]/20 font-semibold">
                    AUTOPILOT
                  </span>
                </div>

                {/* Connected Nodes Pipeline Canvas */}
                <div className="space-y-2.5">
                  {/* Node 1 */}
                  <div
                    onClick={() => setActiveWorkflowStep(1)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                      activeWorkflowStep === 1
                        ? "bg-white border-[#0D9488] shadow-sm"
                        : "bg-white/70 border-black/[0.06] hover:border-black/[0.14]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-[#0D9488]/10 text-[#0D9488]">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-[#6E6E73] uppercase block font-semibold">STEP 01</span>
                          <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F]">Customer Sends WhatsApp / Web Inquiry</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-[#0D9488] font-semibold">Instant</span>
                    </div>
                  </div>

                  {/* Node 2 */}
                  <div
                    onClick={() => setActiveWorkflowStep(2)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                      activeWorkflowStep === 2
                        ? "bg-white border-[#0D9488] shadow-sm"
                        : "bg-white/70 border-black/[0.06] hover:border-black/[0.14]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-[#0D9488]/10 text-[#0D9488]">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-[#6E6E73] uppercase block font-semibold">STEP 02</span>
                          <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F]">AI Understands Need & Qualifies Budget</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-[#0D9488] font-semibold">0.4s</span>
                    </div>
                  </div>

                  {/* Node 3 */}
                  <div
                    onClick={() => setActiveWorkflowStep(3)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                      activeWorkflowStep === 3
                        ? "bg-white border-[#0D9488] shadow-sm"
                        : "bg-white/70 border-black/[0.06] hover:border-black/[0.14]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-[#0D9488]/10 text-[#0D9488]">
                          <GitBranch className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-[#6E6E73] uppercase block font-semibold">STEP 03</span>
                          <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F]">Auto-Books Appointment & Syncs Customer List</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-[#0D9488] font-semibold">Done</span>
                    </div>
                  </div>
                </div>

                {/* Live Activity Log */}
                <div className="p-4 rounded-2xl bg-white border border-black/[0.06] font-mono text-[11px] text-[#6E6E73] space-y-1.5 shadow-2xs">
                  <div className="flex items-center justify-between text-[#1D1D1F] text-[10px] border-b border-black/[0.06] pb-1.5 mb-2 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#0D9488]" />
                      {currentLog.step}
                    </span>
                    <span className="text-[#0D9488]">AUTOMATED</span>
                  </div>
                  {currentLog.lines.map((line, i) => (
                    <p key={i} className={i === currentLog.lines.length - 1 ? "text-[#0D9488] font-medium" : "text-[#6E6E73]"}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#F5F5F7] border border-black/[0.06] text-xs font-mono font-medium text-[#0D9488]">
                  <span>02</span>
                  <span className="text-black/20">•</span>
                  <span>INTELLIGENT SYSTEMS</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.03em] text-[#1D1D1F] leading-snug">
                  Let technology handle the repetitive tasks.
                </h3>
              </div>

              <p className="text-[#6E6E73] text-base leading-relaxed">
                We connect your everyday tools, automate customer replies on WhatsApp & web, and build smart workflows so your team can focus on what matters: closing deals and serving clients.
              </p>

              {/* Capabilities */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#86868B]">
                  What&apos;s Included
                </span>
                <div className="flex flex-col gap-2">
                  {capabilitiesTwo.map((cap) => (
                    <div
                      key={cap}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1D1D1F]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] hover:text-[#0F766E] transition-colors group"
                >
                  Automate your business
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
