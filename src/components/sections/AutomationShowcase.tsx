"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Cpu,
  ShieldCheck,
  Database,
  Send,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Mail,
  UserCheck,
} from "lucide-react";

interface WorkflowStep {
  id: number;
  number: string;
  title: string;
  shortDesc: string;
  category: string;
  icon: React.ElementType;
}

const STEPS: WorkflowStep[] = [
  {
    id: 1,
    number: "01",
    title: "Website Enquiry",
    shortDesc: "Form submission captured",
    category: "INGESTION",
    icon: FileText,
  },
  {
    id: 2,
    number: "02",
    title: "AI Analysis",
    shortDesc: "Intent & budget understood",
    category: "NEURAL PARSING",
    icon: Cpu,
  },
  {
    id: 3,
    number: "03",
    title: "Lead Qualification",
    shortDesc: "Pre-qualified for sales",
    category: "EVALUATION",
    icon: ShieldCheck,
  },
  {
    id: 4,
    number: "04",
    title: "CRM Auto-Sync",
    shortDesc: "Customer details organized",
    category: "SYSTEM SYNC",
    icon: Database,
  },
  {
    id: 5,
    number: "05",
    title: "Instant Follow-Up",
    shortDesc: "WhatsApp & calendar link sent",
    category: "OUTBOUND",
    icon: Send,
  },
];

export function AutomationShowcase() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentStep((prev) => (prev < 5 ? prev + 1 : 1));
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId);
    setIsPlaying(false);
  };

  const handleReplay = () => {
    setCurrentStep(1);
    setIsPlaying(true);
  };

  return (
    <section
      id="approach"
      className="relative w-full bg-[#FAF9F5] py-24 sm:py-32 lg:py-40 overflow-hidden scroll-mt-14"
    >
      {/* Structural Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-[#E2DFD7]" />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* ==============================================================
            ACADEMIC SECTION HEADER
           ============================================================== */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-xs font-mono font-medium text-[#66635E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#191919]" />
            <span>02 // Pipeline Simulation</span>
            <span className="text-[#66635E]/40">•</span>
            <span>Five-stage autonomous flow</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] leading-[1.12] tracking-tight">
              From inquiry to operation. <br />
              <span className="text-[#66635E] italic">Completely autonomous.</span>
            </h2>

            <div className="space-y-1.5 max-w-md lg:pb-1">
              <p className="text-base text-[#66635E] font-sans leading-relaxed">
                A live demonstration of how client requirements are captured, evaluated, and routed without manual intervention.
              </p>
            </div>
          </div>
        </div>

        {/* ==============================================================
            FLAT BOOK DIAGRAM CONTAINER
           ============================================================== */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-[#FAF9F5] border border-[#E2DFD7] shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="px-6 py-4 bg-[#F3F1EB] border-b border-[#E2DFD7] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#191919]" />
                <span className="text-xs font-mono font-medium text-[#191919] tracking-tight uppercase">
                  Tessimo Technology Pipeline
                </span>
              </div>
              <span className="text-xs font-mono text-[#66635E] hidden sm:inline-block">
                • Step {currentStep} of 5
              </span>
            </div>

            {/* Play, Pause, Replay Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#E2DFD7] bg-[#FAF9F5] text-xs font-mono text-[#191919] hover:bg-[#EAE7DF] transition-colors"
                aria-label={isPlaying ? "Pause simulation" : "Play simulation"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-[#191919]" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-[#191919]" />
                    <span>Resume</span>
                  </>
                )}
              </button>

              <button
                onClick={handleReplay}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#E2DFD7] bg-[#FAF9F5] text-xs font-mono text-[#66635E] hover:text-[#191919] hover:bg-[#EAE7DF] transition-colors"
                aria-label="Replay sequence"
              >
                <RotateCcw className="w-3 h-3 text-[#66635E]" />
                <span>Replay</span>
              </button>
            </div>
          </div>

          {/* Progress Timeline Nodes */}
          <div className="px-4 sm:px-6 py-3 bg-[#FAF9F5] border-b border-[#E2DFD7] overflow-x-auto no-scrollbar">
            <div className="flex sm:grid sm:grid-cols-5 gap-2 sm:gap-2.5 min-w-max sm:min-w-0">
              {STEPS.map((step) => {
                const isActive = currentStep === step.id;
                const isPassed = currentStep > step.id;
                const IconComponent = step.icon;

                return (
                  <button
                    key={step.id}
                    onClick={() => handleStepClick(step.id)}
                    className={`text-left p-3 rounded-xl border transition-all duration-200 relative min-w-[140px] sm:min-w-0 flex-shrink-0 sm:flex-shrink cursor-pointer ${
                      isActive
                        ? "bg-[#191919] text-[#FAF9F5] border-[#191919] shadow-xs"
                        : isPassed
                        ? "bg-[#F3F1EB] border-[#E2DFD7] text-[#191919]"
                        : "bg-[#FAF9F5] border-[#E2DFD7]/60 text-[#66635E] hover:border-[#191919]/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[10px] font-mono font-medium ${
                        isActive ? "text-[#FAF9F5]" : isPassed ? "text-[#191919]" : "text-[#66635E]"
                      }`}>
                        {step.number}
                      </span>
                      <IconComponent className={`w-3.5 h-3.5 ${
                        isActive ? "text-[#FAF9F5]" : isPassed ? "text-[#191919]" : "text-[#66635E]"
                      }`} />
                    </div>

                    <p className={`text-xs font-medium tracking-tight truncate ${
                      isActive ? "text-[#FAF9F5]" : isPassed ? "text-[#191919]" : "text-[#66635E]"
                    }`}>
                      {step.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Stage Canvas Presentation */}
          <div className="p-6 sm:p-10 lg:p-12 min-h-[400px] flex items-center justify-center bg-[#FAF9F5]">
            <AnimatePresence mode="wait">
              
              {/* STAGE 1: WEBSITE ENQUIRY */}
              {currentStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-full max-w-2xl space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-3">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-[#191919]" />
                      <span className="text-xs font-mono font-medium uppercase text-[#191919] tracking-wider">
                        Stage 01 // Inbound Client Inquiry Captured
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#66635E] bg-[#F3F1EB] px-2.5 py-0.5 rounded-full font-medium border border-[#E2DFD7]">
                      INQUIRY RECEIVED
                    </span>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F3F1EB] border border-[#E2DFD7] space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <span className="text-[10px] font-mono text-[#66635E] uppercase block mb-1">Client Contact</span>
                        <div className="px-3.5 py-2 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7] text-xs font-mono text-[#191919]">
                          marcus@novatech-logistics.com
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#66635E] uppercase block mb-1">Organization</span>
                        <div className="px-3.5 py-2 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7] text-xs font-mono text-[#191919]">
                          NovaTech Logistics
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-[#66635E] uppercase block mb-1">Inquiry Context</span>
                      <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7] text-sm text-[#191919] font-serif leading-relaxed">
                        &ldquo;Our operations team spends 20+ hours weekly manually routing client requests and transcribing data across disparate tools. We require an automated booking infrastructure and custom digital interface.&rdquo;
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-[#66635E] pt-1">
                      <span>Source: Digital Architecture Interface</span>
                      <span className="text-[#191919] font-medium">Timestamp: 14:02:11</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STAGE 2: AI ANALYSIS */}
              {currentStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-full max-w-2xl space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-3">
                    <div className="flex items-center gap-2.5">
                      <Cpu className="w-4 h-4 text-[#191919]" />
                      <span className="text-xs font-mono font-medium uppercase text-[#191919] tracking-wider">
                        Stage 02 // Autonomous Context Evaluation
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#66635E] bg-[#F3F1EB] px-2.5 py-0.5 rounded-full font-medium border border-[#E2DFD7]">
                      0.4S REASONING LATENCY
                    </span>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F3F1EB] border border-[#E2DFD7] space-y-5">
                    <div className="space-y-2.5">
                      <span className="text-[11px] font-mono text-[#66635E] uppercase tracking-wider block font-medium">
                        Extracted System Parameters
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7]">
                          <span className="text-[10px] font-mono text-[#66635E] block">REQUIREMENT</span>
                          <span className="text-xs font-serif font-semibold text-[#191919]">Workflow Automation</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7]">
                          <span className="text-[10px] font-mono text-[#66635E] block">TIME RECLAIMED</span>
                          <span className="text-xs font-serif font-semibold text-[#191919]">20+ hrs / week</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7]">
                          <span className="text-[10px] font-mono text-[#66635E] block">CLASSIFICATION</span>
                          <span className="text-xs font-serif font-semibold text-[#191919]">Enterprise Fit</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7] text-xs font-mono space-y-1 text-[#191919]">
                      <p><span className="text-[#66635E] font-medium">System Evaluation:</span> High-intent organizational engagement seeking infrastructure setup.</p>
                      <p><span className="text-[#66635E] font-medium">Autonomous Action:</span> Verified credentials & prepared executive consultation schedule.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STAGE 3: LEAD QUALIFICATION */}
              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-full max-w-2xl space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-3">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#191919]" />
                      <span className="text-xs font-mono font-medium uppercase text-[#191919] tracking-wider">
                        Stage 03 // Priority Qualification & Scoring
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#66635E] bg-[#F3F1EB] px-2.5 py-0.5 rounded-full font-medium border border-[#E2DFD7]">
                      VERIFIED TIER 1
                    </span>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F3F1EB] border border-[#E2DFD7] space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] flex items-center justify-center text-[#191919]">
                          <UserCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-serif font-semibold text-[#191919]">NovaTech Logistics</p>
                          <p className="text-xs text-[#66635E]">Decision Maker: Marcus V. (COO)</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-mono text-[#66635E] block">ALIGNMENT</span>
                        <span className="text-base font-serif font-semibold text-[#191919]">98 / 100</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7]">
                        <span className="text-[#66635E] block text-[10px]">DIRECTED TO</span>
                        <span className="text-[#191919] font-medium">Principal Architect</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7]">
                        <span className="text-[#66635E] block text-[10px]">PROCESSING TIME</span>
                        <span className="text-[#191919] font-medium">&lt; 60 Seconds</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STAGE 4: CRM AUTO-SYNC */}
              {currentStep === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-full max-w-2xl space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-3">
                    <div className="flex items-center gap-2.5">
                      <Database className="w-4 h-4 text-[#191919]" />
                      <span className="text-xs font-mono font-medium uppercase text-[#191919] tracking-wider">
                        Stage 04 // Central Database Synchronization
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#66635E] bg-[#F3F1EB] px-2.5 py-0.5 rounded-full font-medium border border-[#E2DFD7]">
                      SYNCHRONIZED
                    </span>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F3F1EB] border border-[#E2DFD7] space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E2DFD7]">
                      <span className="text-[#66635E]">ENTERPRISE RECORD: #9482</span>
                      <span className="text-[#191919] font-medium">AUTOMATIC AUDIT TRAIL</span>
                    </div>

                    <div className="space-y-2 text-[#191919]">
                      <div className="flex justify-between py-2 px-3.5 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7]">
                        <span className="text-[#66635E]">Organization:</span>
                        <span className="font-medium">NovaTech Logistics</span>
                      </div>
                      <div className="flex justify-between py-2 px-3.5 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7]">
                        <span className="text-[#66635E]">Infrastructure:</span>
                        <span className="font-medium">Bespoke Digital Flagship & Automation</span>
                      </div>
                      <div className="flex justify-between py-2 px-3.5 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7]">
                        <span className="text-[#66635E]">State:</span>
                        <span className="font-medium text-[#191919]">Consultation Scheduled</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STAGE 5: INSTANT FOLLOW-UP */}
              {currentStep === 5 && (
                <motion.div
                  key="step-5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-full max-w-2xl space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-3">
                    <div className="flex items-center gap-2.5">
                      <Send className="w-4 h-4 text-[#191919]" />
                      <span className="text-xs font-mono font-medium uppercase text-[#191919] tracking-wider">
                        Stage 05 // Contextual Confirmation Delivered
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#66635E] bg-[#F3F1EB] px-2.5 py-0.5 rounded-full font-medium border border-[#E2DFD7]">
                      DISPATCHED IN 42S
                    </span>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F3F1EB] border border-[#E2DFD7] space-y-4">
                    <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-3">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#191919]" />
                        <span className="text-xs font-mono font-medium text-[#191919]">
                          Authenticated Dispatch
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#66635E]">
                        DELIVERED
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7] text-sm text-[#191919] leading-relaxed space-y-2">
                      <p className="font-serif">
                        &ldquo;Hello Marcus, thank you for contacting Tessimo Technology.
                      </p>
                      <p className="text-[#66635E] text-xs font-sans">
                        We reviewed your dispatch automation requirements and reserved Thursday at 14:00 for your 15-minute consultation. Your calendar invitation and initial brief have been delivered.&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-[#191919]">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#191919]" />
                        Orchestrated autonomously with zero manual friction
                      </span>
                      <span className="text-[#66635E]">Elapsed: 42s</span>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-3.5 bg-[#F3F1EB] border-t border-[#E2DFD7] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#66635E]">
            <div className="flex items-center gap-4">
              <span>STATUS: OPERATIONAL</span>
              <span className="hidden sm:inline-block">•</span>
              <span className="hidden sm:inline-block">AVG LATENCY: 42S</span>
            </div>
            <div className="flex items-center gap-2 text-[#191919] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#191919]" />
              <span>TESSIMO TECHNOLOGY ARCHITECTURE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
