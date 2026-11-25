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
            <span>05 // Methodology</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] leading-[1.12] tracking-tight">
              Calibrated milestones. <br />
              <span className="text-[#66635E] italic">Zero ambiguity.</span>
            </h2>

            <p className="text-base text-[#66635E] max-w-md lg:pb-1 font-sans leading-relaxed">
              Structured across four disciplined stages so you always understand what is being built, when it will be deployed, and how it will advance operations.
            </p>
          </div>
        </div>

        {/* ==============================================================
            PROCESS CARDS GRID
           ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const isHovered = activeStep === idx;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(idx)}
                className={`rounded-[24px] sm:rounded-[28px] bg-[#FAF9F5] border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group cursor-default shadow-[0_2px_12px_rgba(0,0,0,0.02)] ${
                  isHovered
                    ? "border-[#191919] -translate-y-1"
                    : "border-[#E2DFD7] hover:border-[#191919]/40"
                }`}
              >
                <div className="space-y-5">
                  {/* Phase Pill Badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-xs font-mono font-medium text-[#66635E]">
                      <span>{step.number}</span>
                      <span className="text-[#66635E]/40">•</span>
                      <span>{step.phase.toLowerCase().replace(/(^|\s)\S/g, (t) => t.toUpperCase())}</span>
                    </span>

                    <span className={`w-2 h-2 rounded-full transition-all ${
                      isHovered ? "bg-[#191919]" : "bg-[#191919]/20"
                    }`} />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-serif text-[#191919] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#66635E] font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="pt-5 mt-6 border-t border-[#E2DFD7] space-y-2.5">
                  <span className="text-[10px] font-mono text-[#66635E] uppercase tracking-wider block font-medium">
                    Verified deliverables
                  </span>
                  <div className="flex flex-col gap-2">
                    {step.deliverables.map((item) => (
                      <div
                        key={item}
                        className="inline-flex items-center gap-2 text-xs text-[#191919] font-sans font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#191919] shrink-0" />
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
