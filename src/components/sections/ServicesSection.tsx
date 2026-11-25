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
    "Deeply intuitive website architecture",
    "Mobile-first responsive typographic systems",
    "Conversion optimization & trust engineering",
    "Sub-second load latency & core web vitals",
  ];

  const capabilitiesTwo = [
    "Autonomous 24/7 client concierge agents",
    "Intelligent lead qualification & priority routing",
    "Unified multi-channel synchronization",
    "Frictionless calendar scheduling",
    "Real-time CRM & database integration",
  ];

  const terminalLogs: Record<number, { step: string; lines: string[] }> = {
    1: {
      step: "STAGE 01 // INBOUND CLIENT INQUIRY",
      lines: [
        "[01:42:18] Inquiry captured across digital interface",
        "[01:42:18] Client: Marcus Vance • Inquiry: Autonomous logistics systems",
        "[01:42:18] Instant contextual verification dispatched",
      ],
    },
    2: {
      step: "STAGE 02 // INTELLIGENT QUALIFICATION",
      lines: [
        "[01:42:18] Intent and capability evaluated in 0.4 seconds",
        "[01:42:18] Classification: Enterprise Architecture fit confirmed",
        "[01:42:18] Dynamic consultation options prepared",
      ],
    },
    3: {
      step: "STAGE 03 // CALENDAR ROUTING & SYSTEM SYNC",
      lines: [
        "[01:42:19] Enterprise record synchronized with central database",
        "[01:42:19] Private consultation scheduled for Thursday 14:00",
        "[01:42:19] Briefing documents delivered • Zero manual friction",
      ],
    },
  };

  const currentLog = terminalLogs[activeWorkflowStep];

  return (
    <section id="services" className="relative w-full bg-[#FAF9F5] py-24 sm:py-32 lg:py-40 overflow-hidden scroll-mt-14">
      {/* Structural Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-[#E2DFD7]" />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* ==============================================================
            ACADEMIC SECTION HEADER
           ============================================================== */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-xs font-mono font-medium text-[#66635E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#191919]" />
            <span>01 // Core Disciplines</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] leading-[1.12] tracking-tight">
              Two core disciplines. <br />
              <span className="text-[#66635E] italic">One unified architecture.</span>
            </h2>

            <p className="text-base text-[#66635E] max-w-md lg:pb-1 font-sans leading-relaxed">
              We design digital flagships that command trust, alongside autonomous back-office systems that handle qualification, scheduling, and operations silently.
            </p>
          </div>
        </div>

        {/* ==============================================================
            CARD 01: CONVERSATIONAL & VISUAL INTERFACES
           ============================================================== */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-[#FAF9F5] border border-[#E2DFD7] p-8 sm:p-12 lg:p-14 overflow-hidden relative shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-xs font-mono font-medium text-[#66635E]">
                  <span>01</span>
                  <span className="text-[#66635E]/40">•</span>
                  <span>VISUAL & CONVERSATIONAL INTERFACES</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#191919] leading-snug">
                  Conversational & Visual Interfaces
                </h3>
              </div>

              <p className="text-[#66635E] text-base leading-relaxed">
                We design deeply intuitive websites that establish instant trust and guide visitors smoothly toward engagement.
              </p>

              {/* Capabilities List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#66635E]">
                  Engineered capabilities
                </span>
                <div className="flex flex-col gap-2.5">
                  {capabilitiesOne.map((cap) => (
                    <div
                      key={cap}
                      className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#191919]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#191919] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#191919] hover:underline underline-offset-4 group transition-colors"
                >
                  Explore visual interfaces
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Right Interactive Browser Frame */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl sm:rounded-3xl border border-[#E2DFD7] bg-[#F3F1EB] shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
                {/* Browser Title Bar */}
                <div className="px-4 py-3 bg-[#EAE7DF] border-b border-[#E2DFD7] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#191919]/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#191919]/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#191919]/20" />
                    <span className="ml-2 px-3 py-0.5 rounded-full bg-[#FAF9F5] text-[11px] font-mono text-[#66635E] border border-[#E2DFD7]">
                      {activeDevice === "desktop" ? "tessimotechnology.com" : "m.tessimotechnology.com"}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 bg-[#FAF9F5] p-1 rounded-full border border-[#E2DFD7]">
                    <button
                      onClick={() => setActiveDevice("desktop")}
                      className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
                        activeDevice === "desktop"
                          ? "bg-[#191919] text-[#FAF9F5] font-semibold"
                          : "text-[#66635E] hover:text-[#191919]"
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
                          ? "bg-[#191919] text-[#FAF9F5] font-semibold"
                          : "text-[#66635E] hover:text-[#191919]"
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
                  <div className="p-6 sm:p-8 bg-[#FAF9F5] space-y-6">
                    <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#191919]" />
                        <span className="text-xs font-semibold text-[#191919] tracking-tight">
                          TESSIMO TECHNOLOGY
                        </span>
                      </div>
                      <div className="flex gap-3 text-[10px] font-mono text-[#66635E]">
                        <span>RESPONSIVE</span>
                        <span>INDEXED</span>
                        <span className="text-[#191919] font-medium">100% HEALTH</span>
                      </div>
                    </div>

                    <div className="space-y-3 py-2">
                      <span className="text-[10px] font-mono text-[#66635E] tracking-wider uppercase font-medium">
                        EDITORIAL DIGITAL ARCHITECTURE
                      </span>
                      <h4 className="text-xl sm:text-2xl text-[#191919] font-serif tracking-tight leading-snug">
                        Quiet authority engineered into every viewport.
                      </h4>
                      <p className="text-xs sm:text-sm text-[#66635E] leading-relaxed">
                        Constructed with sub-second response times, book-grade typography, and clear customer engagement funnels.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 pt-2">
                      <div className="rounded-xl bg-[#F3F1EB] border border-[#E2DFD7] p-3.5 flex flex-col justify-between">
                        <span className="text-[10px] font-mono text-[#66635E]">PERFORMANCE</span>
                        <span className="text-sm font-serif font-semibold text-[#191919]">100 / 100</span>
                      </div>
                      <div className="rounded-xl bg-[#F3F1EB] border border-[#E2DFD7] p-3.5 flex flex-col justify-between">
                        <span className="text-[10px] font-mono text-[#66635E]">LATENCY</span>
                        <span className="text-sm font-serif font-semibold text-[#191919]">0.28s</span>
                      </div>
                      <div className="rounded-xl bg-[#F3F1EB] border border-[#E2DFD7] p-3.5 flex flex-col justify-between">
                        <span className="text-[10px] font-mono text-[#66635E]">ENGAGEMENT</span>
                        <span className="text-sm font-serif font-semibold text-[#191919]">+142%</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* AUTHENTIC MOBILE VIEWPORT (iPhone Frame) */
                  <div className="p-6 bg-[#F3F1EB] flex justify-center">
                    <div className="w-full max-w-[300px] rounded-[32px] border border-[#E2DFD7] bg-[#FAF9F5] p-4 space-y-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                      {/* Dynamic Island & Status Bar */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#66635E] px-2 pt-1">
                        <span>9:41</span>
                        <div className="w-16 h-3.5 rounded-full bg-[#191919] flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FAF9F5]" />
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#191919]">
                          <Wifi className="w-3 h-3" />
                          <Battery className="w-3 h-3" />
                        </div>
                      </div>

                      {/* Mobile Brand Bar */}
                      <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-2.5 px-1">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#191919]" />
                          <span className="text-[11px] font-semibold text-[#191919]">TESSIMO</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#66635E] bg-[#F3F1EB] px-2 py-0.5 rounded-full font-medium border border-[#E2DFD7]">
                          ONLINE
                        </span>
                      </div>

                      {/* Mobile Card Hero */}
                      <div className="space-y-2 p-3.5 rounded-xl bg-[#F3F1EB] border border-[#E2DFD7]">
                        <span className="text-[9px] font-mono text-[#66635E] uppercase tracking-wider block font-medium">
                          MOBILE FIRST ARCHITECTURE
                        </span>
                        <h5 className="text-sm font-serif font-semibold text-[#191919] leading-snug">
                          Cohesive across all viewports.
                        </h5>
                        <p className="text-[11px] text-[#66635E] leading-relaxed">
                          Refined touch ergonomics, high-density legibility, and seamless navigation.
                        </p>
                      </div>

                      {/* Mobile Metrics Row */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2.5 rounded-lg bg-[#F3F1EB] border border-[#E2DFD7] text-center">
                          <span className="text-[9px] font-mono text-[#66635E] block">LOAD TIME</span>
                          <span className="text-xs font-serif font-semibold text-[#191919]">Sub-second</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#F3F1EB] border border-[#E2DFD7] text-center">
                          <span className="text-[9px] font-mono text-[#66635E] block">INTERACTION</span>
                          <span className="text-xs font-serif font-semibold text-[#191919]">Instant</span>
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className="w-20 h-1 rounded-full bg-[#191919]/20 mx-auto mt-2" />
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

        {/* ==============================================================
            CARD 02: AUTONOMOUS WORKFLOWS
           ============================================================== */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-[#FAF9F5] border border-[#E2DFD7] p-8 sm:p-12 lg:p-14 overflow-hidden relative shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual Showcase (Cols 1-7): Connected Workflow Nodes */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-2xl sm:rounded-3xl border border-[#E2DFD7] bg-[#F3F1EB] shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-8 space-y-5">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#191919]" />
                    <span className="text-xs font-mono font-medium text-[#191919] tracking-tight uppercase">
                      Operational Pipeline
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#66635E] bg-[#FAF9F5] px-2.5 py-0.5 rounded-full border border-[#E2DFD7] font-medium">
                    ACTIVE
                  </span>
                </div>

                {/* Connected Nodes Pipeline Canvas */}
                <div className="space-y-2.5">
                  {/* Node 1 */}
                  <div
                    onClick={() => setActiveWorkflowStep(1)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      activeWorkflowStep === 1
                        ? "bg-[#FAF9F5] border-[#191919] shadow-xs"
                        : "bg-[#FAF9F5]/70 border-[#E2DFD7] hover:border-[#191919]/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#F3F1EB] text-[#191919] border border-[#E2DFD7]">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-[#66635E] uppercase block font-medium">STEP 01</span>
                          <span className="text-xs sm:text-sm font-medium text-[#191919]">Client Initiates Digital Inquiry</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-[#66635E]">Instant</span>
                    </div>
                  </div>

                  {/* Node 2 */}
                  <div
                    onClick={() => setActiveWorkflowStep(2)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      activeWorkflowStep === 2
                        ? "bg-[#FAF9F5] border-[#191919] shadow-xs"
                        : "bg-[#FAF9F5]/70 border-[#E2DFD7] hover:border-[#191919]/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#F3F1EB] text-[#191919] border border-[#E2DFD7]">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-[#66635E] uppercase block font-medium">STEP 02</span>
                          <span className="text-xs sm:text-sm font-medium text-[#191919]">Autonomous Qualification & Context Parsing</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-[#66635E]">0.4s</span>
                    </div>
                  </div>

                  {/* Node 3 */}
                  <div
                    onClick={() => setActiveWorkflowStep(3)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      activeWorkflowStep === 3
                        ? "bg-[#FAF9F5] border-[#191919] shadow-xs"
                        : "bg-[#FAF9F5]/70 border-[#E2DFD7] hover:border-[#191919]/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#F3F1EB] text-[#191919] border border-[#E2DFD7]">
                          <GitBranch className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-[#66635E] uppercase block font-medium">STEP 03</span>
                          <span className="text-xs sm:text-sm font-medium text-[#191919]">Calendar Synchronization & Database Dispatch</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-[#66635E]">Synchronized</span>
                    </div>
                  </div>
                </div>

                {/* Live Activity Log */}
                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7] font-mono text-[11px] text-[#66635E] space-y-1.5 shadow-2xs">
                  <div className="flex items-center justify-between text-[#191919] text-[10px] border-b border-[#E2DFD7] pb-1.5 mb-2 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#191919]" />
                      {currentLog.step}
                    </span>
                    <span className="text-[#66635E]">SYSTEM VERIFIED</span>
                  </div>
                  {currentLog.lines.map((line, i) => (
                    <p key={i} className={i === currentLog.lines.length - 1 ? "text-[#191919] font-medium" : "text-[#66635E]"}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-xs font-mono font-medium text-[#66635E]">
                  <span>02</span>
                  <span className="text-[#66635E]/40">•</span>
                  <span>AUTONOMOUS WORKFLOWS</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#191919] leading-snug">
                  Autonomous Workflows
                </h3>
              </div>

              <p className="text-[#66635E] text-base leading-relaxed">
                We bridge your everyday enterprise software with safe, 24/7 intelligent agents that manage scheduling, client routing, and syncs around the clock.
              </p>

              {/* Capabilities */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#66635E]">
                  Engineered capabilities
                </span>
                <div className="flex flex-col gap-2.5">
                  {capabilitiesTwo.map((cap) => (
                    <div
                      key={cap}
                      className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#191919]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#191919] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#191919] hover:underline underline-offset-4 group transition-colors"
                >
                  Configure autonomous workflows
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
