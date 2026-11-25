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
    }, 4200);

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
      className="relative w-full bg-[#FBFBFD] py-16 sm:py-24 lg:py-32 overflow-hidden scroll-mt-14"
    >
      {/* Structural Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ==============================================================
            APPLE SECTION HEADER
           ============================================================== */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-xs font-medium text-[#1D1D1F] tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
            <span>03 // AUTOMATION SIMULATION</span>
            <span className="text-black/20">•</span>
            <span className="text-[#0D9488] font-semibold">SEE HOW IT WORKS</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-[#1D1D1F] leading-[1.08] break-words">
              From enquiry to action. <br />
              <span className="text-[#6E6E73]">Completely automated.</span>
            </h2>

            <div className="space-y-1.5 max-w-md lg:pb-1">
              <p className="text-sm sm:text-base text-[#6E6E73] font-normal leading-relaxed">
                Watch how an incoming customer inquiry is parsed, qualified, and scheduled in under 60 seconds.
              </p>
            </div>
          </div>
        </div>

        {/* ==============================================================
            INTERACTIVE CHASSIS (Clean White on Off-White)
           ============================================================== */}
        <div className="apple-card rounded-[28px] sm:rounded-[36px] bg-white border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="px-6 py-4 bg-[#F5F5F7] border-b border-black/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488] animate-pulse" />
                <span className="text-xs font-semibold text-[#1D1D1F] tracking-tight uppercase">
                  Tessimo Customer Pipeline
                </span>
              </div>
              <span className="text-xs font-mono text-[#6E6E73] hidden sm:inline-block">
                • Step {currentStep} of 5
              </span>
            </div>

            {/* Play, Pause, Replay Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-black/[0.1] bg-white text-xs font-medium text-[#1D1D1F] hover:bg-neutral-50 shadow-2xs transition-colors"
                aria-label={isPlaying ? "Pause simulation" : "Play simulation"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>Resume</span>
                  </>
                )}
              </button>

              <button
                onClick={handleReplay}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-black/[0.1] bg-white text-xs font-medium text-[#1D1D1F] hover:bg-neutral-50 shadow-2xs transition-colors"
                aria-label="Replay sequence"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#6E6E73]" />
                <span>Replay</span>
              </button>
            </div>
          </div>

          {/* Progress Timeline Nodes */}
          <div className="px-4 sm:px-6 py-3.5 bg-[#FAFAFC] border-b border-black/[0.06] overflow-x-auto no-scrollbar">
            <div className="flex sm:grid sm:grid-cols-5 gap-2 sm:gap-2.5 min-w-max sm:min-w-0">
              {STEPS.map((step) => {
                const isActive = currentStep === step.id;
                const isPassed = currentStep > step.id;
                const IconComponent = step.icon;

                return (
                  <button
                    key={step.id}
                    onClick={() => handleStepClick(step.id)}
                    className={`text-left p-2.5 sm:p-3 rounded-2xl border transition-all duration-200 relative min-w-[135px] sm:min-w-0 flex-shrink-0 sm:flex-shrink cursor-pointer ${
                      isActive
                        ? "bg-[#1D1D1F] text-white border-black shadow-xs"
                        : isPassed
                        ? "bg-white border-black/[0.08] text-[#1D1D1F]"
                        : "bg-white/60 border-black/[0.04] text-[#86868B] hover:border-black/[0.1]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono font-semibold ${
                        isActive ? "text-[#14B8A6]" : isPassed ? "text-[#1D1D1F]" : "text-[#86868B]"
                      }`}>
                        {step.number}
                      </span>
                      <IconComponent className={`w-3.5 h-3.5 ${
                        isActive ? "text-[#14B8A6]" : isPassed ? "text-[#0D9488]" : "text-[#86868B]"
                      }`} />
                    </div>

                    <p className={`text-xs font-medium tracking-tight truncate ${
                      isActive ? "text-white" : isPassed ? "text-[#1D1D1F]" : "text-[#86868B]"
                    }`}>
                      {step.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Stage Canvas Presentation */}
          <div className="p-6 sm:p-10 lg:p-12 min-h-[420px] flex items-center justify-center bg-[#FFFFFF]">
            <AnimatePresence mode="wait">
              
              {/* STAGE 1: WEBSITE ENQUIRY */}
              {currentStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full max-w-2xl space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-black/[0.08] pb-3">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-[#0D9488]" />
                      <span className="text-xs font-semibold uppercase text-[#1D1D1F] tracking-wider">
                        Stage 01 // Inbound Customer Inquiry Captured
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#0D9488] bg-[#0D9488]/10 px-2.5 py-0.5 rounded-full font-semibold">
                      INQUIRY RECEIVED
                    </span>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-black/[0.06] space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <span className="text-[10px] font-mono text-[#6E6E73] uppercase block mb-1">Customer Email</span>
                        <div className="px-3.5 py-2 rounded-xl bg-white border border-black/[0.08] text-xs font-medium text-[#1D1D1F]">
                          marcus@novatech-logistics.com
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#6E6E73] uppercase block mb-1">Company Name</span>
                        <div className="px-3.5 py-2 rounded-xl bg-white border border-black/[0.08] text-xs font-medium text-[#1D1D1F]">
                          NovaTech Logistics
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-[#6E6E73] uppercase block mb-1">Customer Message</span>
                      <div className="p-4 rounded-xl bg-white border border-black/[0.08] text-sm text-[#1D1D1F] leading-relaxed">
                        &quot;Hi, our dispatch team spends 20+ hours every week manually responding to customer quote requests and typing data into our system. Can you help us automate customer bookings and build a modern portal?&quot;
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-[#6E6E73] pt-1">
                      <span>Source: Website Form</span>
                      <span className="text-[#0D9488] font-semibold">Timestamp: 14:02:11</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STAGE 2: AI ANALYSIS */}
              {currentStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full max-w-2xl space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-black/[0.08] pb-3">
                    <div className="flex items-center gap-2.5">
                      <Cpu className="w-4 h-4 text-[#0D9488]" />
                      <span className="text-xs font-semibold uppercase text-[#1D1D1F] tracking-wider">
                        Stage 02 // AI Understands & Evaluates Inquiry
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#0D9488] bg-[#0D9488]/10 px-2.5 py-0.5 rounded-full font-semibold">
                      0.4S REASONING SPEED
                    </span>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#0D9488]/30 shadow-xs space-y-5">
                    <div className="space-y-2.5">
                      <span className="text-[11px] font-mono text-[#0D9488] uppercase tracking-wider block font-semibold">
                        KEY INFORMATION EXTRACTED BY AI
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-xl bg-white border border-black/[0.06]">
                          <span className="text-[10px] font-mono text-[#6E6E73] block">CUSTOMER NEED</span>
                          <span className="text-xs font-semibold text-[#1D1D1F]">Booking Automation</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-white border border-black/[0.06]">
                          <span className="text-[10px] font-mono text-[#6E6E73] block">TIME WASTED</span>
                          <span className="text-xs font-semibold text-[#0D9488]">20+ hrs / week</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-white border border-black/[0.06]">
                          <span className="text-[10px] font-mono text-[#6E6E73] block">CLIENT FIT</span>
                          <span className="text-xs font-semibold text-[#1D1D1F]">High Intent (Ready)</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-black/[0.06] text-xs font-mono space-y-1 text-[#1D1D1F]">
                      <p><span className="text-[#0D9488] font-semibold">AI Assessment:</span> High-priority client seeking immediate automation setup.</p>
                      <p><span className="text-[#0D9488] font-semibold">Next Action:</span> Qualify lead & route directly to executive calendar.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STAGE 3: LEAD QUALIFICATION */}
              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full max-w-2xl space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-black/[0.08] pb-3">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
                      <span className="text-xs font-semibold uppercase text-[#1D1D1F] tracking-wider">
                        Stage 03 // Automatic Lead Qualification
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#0D9488] bg-[#0D9488]/10 px-2.5 py-0.5 rounded-full font-semibold">
                      TIER 1 CLIENT
                    </span>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-black/[0.06] space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#0D9488]/40 shadow-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#0D9488]/10 flex items-center justify-center text-[#0D9488]">
                          <UserCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#1D1D1F]">NovaTech Logistics</p>
                          <p className="text-xs text-[#6E6E73]">Decision Maker: Marcus V. (COO)</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-mono text-[#6E6E73] block">FIT SCORE</span>
                        <span className="text-base font-bold text-[#0D9488]">98 / 100</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3.5 rounded-xl bg-white border border-black/[0.06]">
                        <span className="text-[#6E6E73] block text-[10px]">ASSIGNED TO</span>
                        <span className="text-[#1D1D1F] font-semibold">Solutions Director</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white border border-black/[0.06]">
                        <span className="text-[#6E6E73] block text-[10px]">RESPONSE SPEED</span>
                        <span className="text-[#0D9488] font-semibold">&lt; 60 Seconds</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STAGE 4: CRM AUTO-SYNC */}
              {currentStep === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full max-w-2xl space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-black/[0.08] pb-3">
                    <div className="flex items-center gap-2.5">
                      <Database className="w-4 h-4 text-[#0D9488]" />
                      <span className="text-xs font-semibold uppercase text-[#1D1D1F] tracking-wider">
                        Stage 04 // Customer Database Auto-Update
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#0D9488] bg-[#0D9488]/10 px-2.5 py-0.5 rounded-full font-semibold">
                      CRM UPDATED
                    </span>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-black/[0.06] space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-black/[0.06]">
                      <span className="text-[#6E6E73]">CLIENT RECORD: #9482</span>
                      <span className="text-[#0D9488] font-semibold">ZERO MANUAL TYPING</span>
                    </div>

                    <div className="space-y-2 text-[#1D1D1F]">
                      <div className="flex justify-between py-2 px-3.5 rounded-xl bg-white border border-black/[0.05]">
                        <span className="text-[#6E6E73]">Company:</span>
                        <span className="font-semibold">NovaTech Logistics</span>
                      </div>
                      <div className="flex justify-between py-2 px-3.5 rounded-xl bg-white border border-black/[0.05]">
                        <span className="text-[#6E6E73]">Opportunity:</span>
                        <span className="font-semibold">Automation & Web Portal</span>
                      </div>
                      <div className="flex justify-between py-2 px-3.5 rounded-xl bg-white border border-black/[0.05]">
                        <span className="text-[#6E6E73]">Status:</span>
                        <span className="text-[#0D9488] font-semibold">Meeting Prepared</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STAGE 5: INSTANT FOLLOW-UP */}
              {currentStep === 5 && (
                <motion.div
                  key="step-5"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full max-w-2xl space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-black/[0.08] pb-3">
                    <div className="flex items-center gap-2.5">
                      <Send className="w-4 h-4 text-[#0D9488]" />
                      <span className="text-xs font-semibold uppercase text-[#1D1D1F] tracking-wider">
                        Stage 05 // Instant Personalized Reply Delivered
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#0D9488] bg-[#0D9488]/10 px-2.5 py-0.5 rounded-full font-semibold">
                      SENT IN 42 SECONDS
                    </span>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#0D9488]/30 shadow-xs space-y-4">
                    <div className="flex items-center justify-between border-b border-black/[0.06] pb-3">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#0D9488]" />
                        <span className="text-xs font-semibold text-[#1D1D1F]">
                          WhatsApp & Email Follow-Up
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#0D9488] font-semibold">
                        DELIVERED
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-black/[0.06] text-sm text-[#1D1D1F] leading-relaxed space-y-2">
                      <p>
                        &quot;Hello Marcus, thank you for contacting Tessimo.
                      </p>
                      <p className="text-[#6E6E73] text-xs">
                        We reviewed your dispatch automation requirements and reserved Thursday at 14:00 for your 15-minute consultation. Here is your direct confirmation link: yourcompany.com/portal/novatech&quot;
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-[#0D9488] font-semibold">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Handled automatically with zero staff effort
                      </span>
                      <span>Total: 42s</span>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-3.5 bg-[#F5F5F7] border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#6E6E73]">
            <div className="flex items-center gap-4">
              <span>SYSTEM STATUS: ACTIVE</span>
              <span className="hidden sm:inline-block">•</span>
              <span className="hidden sm:inline-block">AVG RESPONSE: 42S</span>
            </div>
            <div className="flex items-center gap-2 text-[#0D9488] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
              <span>LIVE AUTOMATION PREVIEW</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
