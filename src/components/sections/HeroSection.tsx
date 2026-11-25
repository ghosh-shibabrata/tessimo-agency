"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Zap,
  Users,
  Calendar,
  MessageSquare,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Clock,
  Sparkles,
} from "lucide-react";
import { TessimoIcon } from "@/components/brand/TessimoIcon";

type GrowthFilter = "all" | "leads" | "time";

export function HeroSection() {
  const [activeFilter, setActiveFilter] = useState<GrowthFilter>("all");

  const businessPills = [
    { name: "High-Converting Websites", icon: Zap },
    { name: "24/7 AI Customer Support", icon: Bot },
    { name: "Instant WhatsApp Replies", icon: MessageSquare },
    { name: "Automatic Appointment Booking", icon: Calendar },
    { name: "Lead CRM Synchronization", icon: Users },
  ];

  const growthData: Record<
    GrowthFilter,
    {
      stat1: { val: string; label: string; sub: string };
      stat2: { val: string; label: string; sub: string };
      stat3: { val: string; label: string; sub: string };
      trend: string;
      log: string;
      logTime: string;
    }
  > = {
    all: {
      stat1: { val: "+142%", label: "New inbound customers", sub: "Captured 24/7 day & night" },
      stat2: { val: "< 60s", label: "Instant reply speed", sub: "Zero missed inquiries" },
      stat3: { val: "25+ hrs", label: "Time saved every week", sub: "No manual follow-up work" },
      trend: "Operational growth & telemetry console",
      log: "New client inquiry qualified • Auto-routed to calendar",
      logTime: "Just now",
    },
    leads: {
      stat1: { val: "3.4x", label: "Conversion multiplier", sub: "Visitors to qualified meetings" },
      stat2: { val: "100%", label: "Inquiry capture rate", sub: "Zero unanswered inbound leads" },
      stat3: { val: "$48,000+", label: "Pipeline value routed", sub: "Attributed to autonomous workflows" },
      trend: "Customer acquisition & conversion mode",
      log: "High-intent inquiry qualified by AI • Added to customer pipeline",
      logTime: "4s ago",
    },
    time: {
      stat1: { val: "85%", label: "Manual work reduced", sub: "Focus team on high-leverage execution" },
      stat2: { val: "0 hrs", label: "Scheduling friction", sub: "Autonomous calendar management" },
      stat3: { val: "$0", label: "Additional overhead", sub: "Scale operations without headcount bloat" },
      trend: "Operational efficiency & systems mode",
      log: "Calendar & CRM records synced without human intervention",
      logTime: "12s ago",
    },
  };

  const currentStats = growthData[activeFilter];

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-start overflow-hidden bg-[#FAF9F5] pt-14 sm:pt-20 lg:pt-28 pb-24 sm:pb-32 lg:pb-36">
      
      {/* 1. Subtle Ambient Backlight on Warm Canvas with Living Breath Motion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft centered jade atmospheric halo with slow living pulse */}
        <motion.div
          animate={{
            scale: [1, 1.08, 0.98, 1],
            opacity: [0.28, 0.44, 0.28],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[720px] lg:w-[1040px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 0%, rgba(13, 148, 136, 0.16) 0%, rgba(13, 148, 136, 0.03) 50%, transparent 75%)",
          }}
        />

        {/* Sculpted Monogram in Background with gentle float */}
        <motion.div
          animate={{
            rotate: [0, 2, -2, 0],
            y: [0, -6, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 -translate-x-1/2 top-[10%] lg:top-[6%] opacity-[0.03] pointer-events-none select-none text-[#191919]"
        >
          <TessimoIcon size={750} variant="solid" />
        </motion.div>
      </div>

      {/* 2. Editorial Headline & Value Proposition (Calm, Academic, Confident) */}
      <div className="relative z-10 w-full max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-4 sm:pt-6">
        
        {/* Small Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2"
        >
          <span className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-[11px] font-mono font-medium text-[#191919] tracking-wider uppercase shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9488] opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D9488]"></span>
            </span>
            <span>Digital Architecture & Systems</span>
            <span className="text-[#66635E]/40">•</span>
            <span className="text-[#66635E] font-normal lowercase">v2.4 production</span>
          </span>
        </motion.div>

        {/* Main Headline (Newsreader Serif, Literary, Staggered Line Animation) */}
        <div className="max-w-4xl mx-auto pt-2 pb-1">
          <h1 className="text-apple-hero text-center select-none">
            <div className="overflow-hidden pb-1">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block font-serif text-[#191919] font-normal"
              >
                Premium web interfaces
              </motion.span>
            </div>
            <div className="overflow-hidden pb-1">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="block font-serif text-[#191919]/90 font-normal"
              >
                engineered alongside
              </motion.span>
            </div>
            <div className="overflow-hidden pb-2">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                className="block font-serif italic text-[#191919] font-normal"
              >
                intelligent business automation.
              </motion.span>
            </div>
          </h1>
        </div>

        {/* Calm Confident Editorial Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          className="text-apple-subhead max-w-2xl mx-auto leading-relaxed text-[#66635E] text-base sm:text-lg font-sans"
        >
          We replace repetitive manual work and fragmented digital experiences with clear, high-performance platforms. Our systems work quietly in the background to capture, qualify, and route your customer operations seamlessly.
        </motion.p>

        {/* Action Buttons: Minimalist Solid Matte Ink Pills */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3 w-full max-w-md mx-auto sm:max-w-none"
        >
          <Link
            href="#contact"
            className="btn-apple-primary w-full sm:w-auto !py-3.5 !px-8 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Start a project</span>
            <ArrowUpRight className="w-4 h-4 opacity-70" />
          </Link>

          <Link
            href="#contact"
            className="btn-apple-secondary w-full sm:w-auto !py-3.5 !px-8 text-sm font-medium flex items-center justify-center gap-2 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-4 h-4 text-[#191919]" />
            <span>Schedule consultation</span>
          </Link>
        </motion.div>

        {/* Capability Badges with Gentle Levitating Zero-Gravity Motion */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
          className="pt-6 flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto"
        >
          {businessPills.map((pill, idx) => {
            const IconComp = pill.icon;
            return (
              <motion.div
                key={pill.name}
                animate={{
                  y: [0, -3.5, 0],
                }}
                transition={{
                  duration: 3.5 + (idx % 3) * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.25,
                }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E2DFD7] text-xs font-mono font-medium text-[#191919] shadow-[0_1px_4px_rgba(0,0,0,0.02)] hover:border-[#191919]/40 transition-all cursor-default"
              >
                <span className="p-0.5 rounded-full bg-[#F3F1EB] group-hover:bg-[#EAE7DF] transition-colors">
                  <IconComp className="w-3.5 h-3.5 text-[#191919]" />
                </span>
                <span>{pill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* 3. Ultra-Clean MacBook Pro Hardware Centerpiece (Off-White & Crisp Black) */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12"
      >
        {/* Soft floor shadow */}
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-24 rounded-full opacity-15 blur-2xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 0.4), transparent 70%)",
          }}
        />

        {/* Space Gray / Silver Unibody Chassis */}
        <div className="relative rounded-[20px] sm:rounded-[32px] border border-[#E2DFD7] bg-[#ECEAE2] p-2 sm:p-3.5 shadow-[0_20px_60px_rgba(25,25,25,0.08)]">
          
          {/* Inner Display Screen Frame */}
          <div className="rounded-[14px] sm:rounded-[22px] border border-[#E2DFD7] bg-[#FAF9F5] overflow-hidden">
            
            {/* Display Header */}
            <div className="px-3 sm:px-5 py-2.5 sm:py-3 bg-[#F3F1EB] border-b border-[#E2DFD7] flex flex-wrap items-center justify-between gap-2.5 relative">
              {/* Traffic Lights */}
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-[10px] sm:text-[11px] font-mono text-[#191919] font-semibold tracking-wider uppercase hidden sm:inline-block">
                  Tessimo Growth Console
                </span>
              </div>

              {/* Centered Camera Notch Detail */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 w-24 h-3 bg-black/80 rounded-b-lg items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#333336]" />
              </div>

              {/* View Filter Switcher for Business Owners */}
              <div className="flex items-center gap-1 bg-[#FAF9F5] p-0.5 sm:p-1 rounded-full border border-[#E2DFD7] shadow-xs">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium transition-all ${
                    activeFilter === "all"
                      ? "bg-[#191919] text-[#FAF9F5] font-semibold shadow-xs"
                      : "text-[#66635E] hover:text-[#191919]"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveFilter("leads")}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium transition-all ${
                    activeFilter === "leads"
                      ? "bg-[#191919] text-[#FAF9F5] font-semibold shadow-xs"
                      : "text-[#66635E] hover:text-[#191919]"
                  }`}
                >
                  Leads
                </button>
                <button
                  onClick={() => setActiveFilter("time")}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium transition-all ${
                    activeFilter === "time"
                      ? "bg-[#191919] text-[#FAF9F5] font-semibold shadow-xs"
                      : "text-[#66635E] hover:text-[#191919]"
                  }`}
                >
                  Time Saved
                </button>
              </div>
            </div>

            {/* Display Canvas Content (Ultra-Clean, Spacious) */}
            <div className="p-5 sm:p-9 space-y-6 bg-[#FAF9F5]">
              
              {/* 3 Clear Business Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F3F1EB] border border-[#E2DFD7] space-y-1">
                  <span className="text-[10px] font-mono text-[#66635E] block uppercase tracking-wider font-semibold">
                    {currentStats.stat1.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-semibold text-[#191919] block tracking-tight">
                    {currentStats.stat1.val}
                  </span>
                  <span className="text-xs text-[#0D9488] font-medium block pt-0.5">
                    {currentStats.stat1.sub}
                  </span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#F3F1EB] border border-[#E2DFD7] space-y-1">
                  <span className="text-[10px] font-mono text-[#66635E] block uppercase tracking-wider font-semibold">
                    {currentStats.stat2.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-semibold text-[#191919] block tracking-tight">
                    {currentStats.stat2.val}
                  </span>
                  <span className="text-xs text-[#0D9488] font-medium block pt-0.5">
                    {currentStats.stat2.sub}
                  </span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#F3F1EB] border border-[#E2DFD7] space-y-1">
                  <span className="text-[10px] font-mono text-[#66635E] block uppercase tracking-wider font-semibold">
                    {currentStats.stat3.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-semibold text-[#191919] block tracking-tight">
                    {currentStats.stat3.val}
                  </span>
                  <span className="text-xs text-[#0D9488] font-medium block pt-0.5">
                    {currentStats.stat3.sub}
                  </span>
                </div>
              </div>

              {/* Real-time Growth Spline Curve */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F3F1EB] border border-[#E2DFD7] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#191919] flex items-center gap-2 font-semibold">
                    <TrendingUp className="w-4 h-4 text-[#0D9488]" />
                    {currentStats.trend}
                  </span>
                  <span className="text-[#0D9488] bg-[#0D9488]/10 px-2.5 py-0.5 rounded-full border border-[#0D9488]/20 font-semibold text-[10px]">
                    24/7 ACTIVE
                  </span>
                </div>

                <div className="h-24 sm:h-32 w-full relative pt-1">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 500 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="appleGrowthSpline" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0D9488" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#0D9488" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 85 Q 80 65 150 70 T 300 35 T 420 42 T 500 14 L 500 100 L 0 100 Z"
                      fill="url(#appleGrowthSpline)"
                    />
                    <path
                      d="M 0 85 Q 80 65 150 70 T 300 35 T 420 42 T 500 14"
                      fill="none"
                      stroke="#0D9488"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="500" cy="14" r="5" fill="#0D9488" className="animate-ping" />
                    <circle cx="500" cy="14" r="3.5" fill="#0D9488" />
                  </svg>
                </div>
              </div>

              {/* Clean Bottom Activity Line */}
              <div className="p-3.5 px-4 rounded-xl bg-[#F3F1EB] border border-[#E2DFD7] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2.5 text-[#191919] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>{currentStats.log}</span>
                </div>
                <div className="flex items-center gap-3 text-[#66635E] text-[11px]">
                  <span>RESPONSE: &lt;60S</span>
                  <span>•</span>
                  <span className="text-[#0D9488] font-semibold">{currentStats.logTime}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Opening Notch Lip */}
          <div className="w-28 h-1 rounded-b-sm bg-black/20 mx-auto mt-1" />
        </div>

      </motion.div>

    </section>
  );
}
