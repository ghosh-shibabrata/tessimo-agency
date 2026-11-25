"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  Plane,
  HeartPulse,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

interface CaseStudy {
  id: string;
  tag: string;
  category: string;
  client: string;
  headline: string;
  summary: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  icon: React.ElementType;
  previewDetails: {
    title: string;
    sub: string;
    statA: { label: string; val: string };
    statB: { label: string; val: string };
    highlight: string;
  };
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "aether",
    tag: "01 // LOGISTICS & FLEET",
    category: "CUSTOMER DISPATCH & FAST PLATFORM",
    client: "Aether Fleet Logistics",
    headline: "Automated booking dispatch and instant client tracking.",
    summary:
      "Built a modern web platform and automated dispatch pipeline that captures inquiries, confirms customer bookings on autopilot, and provides real-time shipment updates.",
    metrics: [
      { value: "3.4x", label: "More Inbound Bookings" },
      { value: "0.32s", label: "Instant Mobile Load Speed" },
      { value: "100%", label: "Inquiries Handled 24/7" },
    ],
    tags: ["High-Speed Website", "Mobile-First", "Instant WhatsApp Updates"],
    icon: Plane,
    previewDetails: {
      title: "FLEET DISPATCH CONSOLE",
      sub: "STATUS: AUTOMATED • 48 SHIPMENTS CONFIRMED TODAY",
      statA: { label: "INQUIRY TO BOOKING", val: "< 60s" },
      statB: { label: "MANUAL WORK", val: "Zero" },
      highlight: "Fully Automated Pipeline",
    },
  },
  {
    id: "lumina",
    tag: "02 // HEALTHCARE & CLINIC",
    category: "24/7 APPOINTMENT BOOKING AI",
    client: "Lumina Health Systems",
    headline: "Automated patient scheduling and zero phone hold time.",
    summary:
      "Deployed a smart AI assistant that answers patient questions 24/7, schedules clinic appointments directly into the calendar, and sends automatic SMS & WhatsApp reminders.",
    metrics: [
      { value: "78%", label: "Bookings Handled by AI" },
      { value: "0 mins", label: "Customer Hold Time" },
      { value: "25 hrs", label: "Staff Hours Saved Weekly" },
    ],
    tags: ["24/7 AI Receptionist", "Calendar Sync", "WhatsApp Reminders"],
    icon: HeartPulse,
    previewDetails: {
      title: "PATIENT APPOINTMENT FLOW",
      sub: "PATIENT: CONFIRMED • APPOINTMENT: THURS 14:00 • SMS SENT",
      statA: { label: "PATIENT SATISFACTION", val: "99.2%" },
      statB: { label: "MISSED CALLS", val: "0" },
      highlight: "No Extra Staff Required",
    },
  },
  {
    id: "nexus",
    tag: "03 // PROFESSIONAL SERVICES",
    category: "CLIENT ACQUISITION & CRM",
    client: "Nexus Advisory Partners",
    headline: "High-converting corporate portal with instant CRM sync.",
    summary:
      "Redesigned an outdated corporate website into a high-trust client acquisition engine that pre-qualifies prospect budgets and routes consultations directly to the right partner.",
    metrics: [
      { value: "4.2x", label: "More Qualified Consultations" },
      { value: "85%", label: "Less Repetitive Admin Work" },
      { value: "$18M+", label: "Client Inquiries Handled" },
    ],
    tags: ["High-Trust Redesign", "Lead Qualification", "HubSpot CRM Sync"],
    icon: TrendingUp,
    previewDetails: {
      title: "NEW CONSULTATION QUALIFIED",
      sub: "BUDGET: QUALIFIED • CALENDAR: BOOKED • CRM: UPDATED",
      statA: { label: "SALES VELOCITY", val: "+4.2x" },
      statB: { label: "LEAD LOSS", val: "0%" },
      highlight: "Pre-Qualified Inquiries",
    },
  },
];

export function SelectedWorkSection() {
  const [selectedId, setSelectedId] = useState<string>("aether");
  const activeStudy = CASE_STUDIES.find((c) => c.id === selectedId) || CASE_STUDIES[0];
  const IconComponent = activeStudy.icon;

  return (
    <section id="work" className="relative w-full bg-[#FAF9F5] py-24 sm:py-32 lg:py-40 overflow-hidden scroll-mt-14">
      {/* Structural Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-[#E2DFD7]" />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* ==============================================================
            ACADEMIC SECTION HEADER
           ============================================================== */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-xs font-mono font-medium text-[#66635E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#191919]" />
            <span>03 // Selected Deployments</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] leading-[1.12] tracking-tight">
              Documented outcomes. <br />
              <span className="text-[#66635E] italic">Validated across operating disciplines.</span>
            </h2>

            <p className="text-base text-[#66635E] max-w-md lg:pb-1 font-sans leading-relaxed">
              Examine how modern interfaces paired with autonomous systems capture qualified demand and reclaim operational capacity.
            </p>
          </div>
        </div>

        {/* ==============================================================
            CASE STUDY TABS
           ============================================================== */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] max-w-fit">
          {CASE_STUDIES.map((study) => {
            const isSelected = study.id === selectedId;
            return (
              <button
                key={study.id}
                onClick={() => setSelectedId(study.id)}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-sans transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#191919] text-[#FAF9F5] font-medium shadow-xs"
                    : "text-[#66635E] hover:text-[#191919]"
                }`}
              >
                {study.client}
              </button>
            );
          })}
        </div>

        {/* ==============================================================
            ACTIVE CASE STUDY CARD
           ============================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStudy.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="rounded-[28px] sm:rounded-[36px] bg-[#FAF9F5] border border-[#E2DFD7] p-8 sm:p-12 lg:p-14 overflow-hidden relative shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Narrative, Details, Metrics */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-xs font-mono font-medium text-[#66635E]">
                    <span>{studyTag(activeStudy.tag)}</span>
                    <span className="text-[#66635E]/40">•</span>
                    <span>{studyCategory(activeStudy.category)}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#191919] leading-snug">
                    {activeStudy.headline}
                  </h3>
                </div>

                <p className="text-base text-[#66635E] font-sans leading-relaxed">
                  {activeStudy.summary}
                </p>

                {/* 3 Impact Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-3 pb-3 border-y border-[#E2DFD7]">
                  {activeStudy.metrics.map((m) => (
                    <div key={m.label} className="space-y-1">
                      <span className="text-xl sm:text-2xl font-serif font-semibold text-[#191919] block">
                        {m.value}
                      </span>
                      <span className="text-[11px] text-[#66635E] block leading-tight font-sans">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* What Was Built */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#66635E]">
                    Key architectural deliverables
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-xs font-medium text-[#191919]"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#191919]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#191919] hover:underline underline-offset-4 transition-colors group"
                  >
                    Discuss your organizational objectives
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Console Preview */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl sm:rounded-3xl border border-[#E2DFD7] bg-[#F3F1EB] shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-8 space-y-5">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7] flex items-center justify-center text-[#191919]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-serif font-semibold text-[#191919] block">
                          {activeStudy.previewDetails.title}
                        </span>
                        <span className="text-[10px] font-mono text-[#66635E] block">
                          {activeStudy.previewDetails.sub}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#66635E] bg-[#FAF9F5] px-2.5 py-0.5 rounded-full border border-[#E2DFD7] font-medium">
                      ACTIVE
                    </span>
                  </div>

                  {/* Stats Box */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7] space-y-1">
                      <span className="text-[10px] font-mono text-[#66635E] block">
                        {activeStudy.previewDetails.statA.label}
                      </span>
                      <span className="text-xl font-serif font-semibold text-[#191919]">
                        {activeStudy.previewDetails.statA.val}
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7] space-y-1">
                      <span className="text-[10px] font-mono text-[#66635E] block">
                        {activeStudy.previewDetails.statB.label}
                      </span>
                      <span className="text-xl font-serif font-semibold text-[#191919]">
                        {activeStudy.previewDetails.statB.val}
                      </span>
                    </div>
                  </div>

                  {/* Benefit Callout */}
                  <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E2DFD7] space-y-1 text-xs">
                    <span className="text-[10px] font-mono text-[#191919] font-medium block">
                      {activeStudy.previewDetails.highlight}
                    </span>
                    <p className="text-[#66635E] text-xs font-sans leading-relaxed">
                      Captured qualified leads, handled inquiries automatically, and scheduled consultations with zero staff intervention.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

function studyTag(tag: string): string {
  return tag.replace("LOGISTICS & FLEET", "Logistics & Fleet").replace("HEALTHCARE & CLINIC", "Healthcare & Clinic").replace("PROFESSIONAL SERVICES", "Professional Services");
}

function studyCategory(cat: string): string {
  return cat.toLowerCase().replace(/(^|\s)\S/g, (t) => t.toUpperCase());
}
