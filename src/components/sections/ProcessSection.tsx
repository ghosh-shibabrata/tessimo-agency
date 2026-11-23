"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    phase: "PHASE 01",
    title: "Discover & Audit",
    description: "We analyze your business, customer flow, and repetitive manual tasks.",
    deliverables: ["Lead Flow Assessment", "Bottleneck Identification", "Growth & Automation Roadmap"],
  },
  {
    number: "02",
    phase: "PHASE 02",
    title: "Design & Architect",
    description: "We design high-converting visual interfaces and map autonomous workflows.",
    deliverables: ["Conversion-Optimized Wireframes", "Mobile-First UX Prototypes", "AI Knowledge Architecture"],
  },
  {
    number: "03",
    phase: "PHASE 03",
    title: "Build & Integrate",
    description: "We build your high-speed platform and connect WhatsApp, CRM, and calendar tools.",
    deliverables: ["Next.js 16 Web Engineering", "24/7 AI Agent Training", "End-to-End Tool Automation"],
  },
  {
    number: "04",
    phase: "PHASE 04",
    title: "Launch & Accelerate",
    description: "We deploy live, test real customer journeys, and train your team on managing it.",
    deliverables: ["Production Verification", "Team Walkthrough Session", "30-Day Hypercare Support"],
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

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
            <span>06 // HOW WE DELIVER</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-[#1D1D1F] leading-[1.08] break-words">
              Clear milestones. <br />
              <span className="text-[#6E6E73]">Zero guesswork.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#6E6E73] max-w-md lg:pb-1 font-normal leading-relaxed">
              Structured in four straightforward steps so you always know what is being built, when it will launch, and how it will drive business results.
            </p>
          </div>
        </div>

        {/* ==============================================================
            APPLE PROCESS CARDS GRID
           ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const isHovered = activeStep === idx;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(idx)}
                className={`apple-card rounded-[24px] sm:rounded-[28px] bg-white border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group cursor-default shadow-[0_4px_24px_rgba(0,0,0,0.03)] ${
                  isHovered
                    ? "border-[#0D9488]/40 shadow-[0_12px_36px_rgba(13,148,136,0.08)] -translate-y-1"
                    : "border-black/[0.08] hover:border-black/[0.14]"
                }`}
              >
                <div className="space-y-5">
                  {/* Phase Pill Badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F7] border border-black/[0.06] text-xs font-mono font-semibold text-[#0D9488]">
                      <span>{step.number}</span>
                      <span className="text-black/20">•</span>
                      <span>{step.phase}</span>
                    </span>

                    <span className={`w-2 h-2 rounded-full transition-all ${
                      isHovered ? "bg-[#0D9488] shadow-[0_0_8px_rgba(13,148,136,0.5)]" : "bg-black/20"
                    }`} />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#6E6E73] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Deliverables as Apple Pills */}
                <div className="pt-5 mt-6 border-t border-black/[0.06] space-y-2.5">
                  <span className="text-[10px] font-mono text-[#6E6E73] uppercase tracking-wider block font-semibold">
                    WHAT YOU RECEIVE
                  </span>
                  <div className="flex flex-col gap-2">
                    {step.deliverables.map((item) => (
                      <div
                        key={item}
                        className="inline-flex items-center gap-2 text-xs text-[#1D1D1F] font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
