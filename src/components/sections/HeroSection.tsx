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
      stat1: { val: "+142%", label: "NEW INBOUND CUSTOMERS", sub: "Captured 24/7 day & night" },
      stat2: { val: "< 60s", label: "INSTANT REPLY SPEED", sub: "Zero missed inquiries" },
      stat3: { val: "25+ hrs", label: "TIME SAVED EVERY WEEK", sub: "No manual follow-up work" },
      trend: "Total Business Growth & Automation Dashboard",
      log: "New client booked consultation call • Auto-confirmed via WhatsApp",
      logTime: "Just now",
    },
    leads: {
      stat1: { val: "3.4x", label: "MORE WEBSITE BOOKINGS", sub: "Turn visitors into buyers" },
      stat2: { val: "100%", label: "LEAD CAPTURE RATE", sub: "Every inquiry answered instantly" },
      stat3: { val: "$48,000+", label: "PIPELINE VALUE GENERATED", sub: "Directly attributed to automations" },
      trend: "Customer Acquisition & Website Conversion Mode",
      log: "High-intent inquiry qualified by AI • Added to customer pipeline",
      logTime: "4s ago",
    },
    time: {
      stat1: { val: "85%", label: "LESS REPETITIVE WORK", sub: "Staff focuses on closing sales" },
      stat2: { val: "0 hrs", label: "MANUAL CALENDAR MANAGEMENT", sub: "Completely automated scheduling" },
      stat3: { val: "$0", label: "EXTRA HEADCOUNT NEEDED", sub: "Scale business without hiring more staff" },
      trend: "Operational Freedom & Time Savings Mode",
      log: "Calendar & CRM records synced without human intervention",
      logTime: "12s ago",
    },
  };

  const currentStats = growthData[activeFilter];

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-start overflow-hidden bg-[#FBFBFD] pt-8 sm:pt-12 pb-14 sm:pb-20 lg:pb-28">
      
      {/* 1. Subtle Ambient Backlight on Off-White Canvas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft centered jade atmospheric halo */}
        <div
          className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[700px] lg:w-[1000px] h-[500px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 0%, rgba(13, 148, 136, 0.12) 0%, rgba(13, 148, 136, 0.02) 50%, transparent 75%)",
          }}
        />

        {/* Sculpted Monogram in Background */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[10%] lg:top-[6%] opacity-[0.03] pointer-events-none select-none text-[#1D1D1F]">
          <TessimoIcon size={750} variant="solid" />
        </div>
      </div>

      {/* 2. Apple Editorial Headline & Value Proposition for Business Owners */}
      <div className="relative z-10 w-full max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 pt-4 sm:pt-8">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2"
        >
          <span className="text-apple-eyebrow">
            BUILT FOR MODERN BUSINESSES
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="space-y-1"
        >
          <h1 className="text-apple-hero">
            Never miss a lead. <br className="hidden sm:inline" />
            <span className="text-shimmer-teal relative inline-block">
              Never lose a customer.
            </span>
          </h1>
        </motion.div>

        {/* Business Benefit Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-apple-subhead max-w-2xl mx-auto"
        >
          We build premium websites that turn visitors into booked clients, and 24/7 AI systems that automatically answer inquiries and schedule appointments.
        </motion.p>

        {/* Action Buttons: Start a project + Book a demo */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-md mx-auto sm:max-w-none"
        >
          <Link
            href="#contact"
            className="btn-apple-primary w-full sm:w-auto !py-3 !px-7 text-sm font-semibold"
          >
            <span>Start a project</span>
            <ArrowUpRight className="w-4 h-4 opacity-70" />
          </Link>

          <Link
            href="#contact"
            className="btn-apple-secondary w-full sm:w-auto !py-3 !px-7 text-sm font-semibold flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#0D9488]" />
            <span>Book a 15-min demo</span>
          </Link>
        </motion.div>

        {/* Capability Badges: Clean, spacious, mobile-wrapped */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="pt-6 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto"
        >
          {businessPills.map((pill) => {
            const IconComp = pill.icon;
            return (
              <div
                key={pill.name}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-medium text-[#1D1D1F] shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-[#0D9488]/40 transition-all cursor-default"
              >
                <IconComp className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>{pill.name}</span>
              </div>
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
        <div className="relative rounded-[20px] sm:rounded-[32px] border border-black/[0.12] bg-[#E8E8ED] p-2 sm:p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
          
          {/* Inner Display Screen Frame */}
          <div className="rounded-[14px] sm:rounded-[22px] border border-black/[0.1] bg-[#FFFFFF] overflow-hidden">
            
            {/* Display Header */}
            <div className="px-3 sm:px-5 py-2.5 sm:py-3 bg-[#F5F5F7] border-b border-black/[0.08] flex flex-wrap items-center justify-between gap-2.5 relative">
              {/* Traffic Lights */}
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-[10px] sm:text-[11px] font-mono text-[#1D1D1F] font-semibold tracking-wider uppercase hidden sm:inline-block">
                  Tessimo Growth Console
                </span>
              </div>

              {/* Centered Camera Notch Detail */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 w-24 h-3 bg-black/80 rounded-b-lg items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#333336]" />
              </div>

              {/* View Filter Switcher for Business Owners */}
              <div className="flex items-center gap-1 bg-white p-0.5 sm:p-1 rounded-full border border-black/[0.08] shadow-xs">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium transition-all ${
                    activeFilter === "all"
                      ? "bg-[#1D1D1F] text-white font-semibold shadow-xs"
                      : "text-[#6E6E73] hover:text-[#1D1D1F]"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveFilter("leads")}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium transition-all ${
                    activeFilter === "leads"
                      ? "bg-[#1D1D1F] text-white font-semibold shadow-xs"
                      : "text-[#6E6E73] hover:text-[#1D1D1F]"
                  }`}
                >
                  Leads
                </button>
                <button
                  onClick={() => setActiveFilter("time")}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium transition-all ${
                    activeFilter === "time"
                      ? "bg-[#1D1D1F] text-white font-semibold shadow-xs"
                      : "text-[#6E6E73] hover:text-[#1D1D1F]"
                  }`}
                >
                  Time Saved
                </button>
              </div>
            </div>

            {/* Display Canvas Content (Ultra-Clean, Spacious) */}
            <div className="p-5 sm:p-9 space-y-6 bg-[#FFFFFF]">
              
              {/* 3 Clear Business Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F5F7] border border-black/[0.05] space-y-1">
                  <span className="text-[10px] font-mono text-[#6E6E73] block uppercase tracking-wider font-semibold">
                    {currentStats.stat1.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] block tracking-tight">
                    {currentStats.stat1.val}
                  </span>
                  <span className="text-xs text-[#0D9488] font-medium block pt-0.5">
                    {currentStats.stat1.sub}
                  </span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F5F7] border border-black/[0.05] space-y-1">
                  <span className="text-[10px] font-mono text-[#6E6E73] block uppercase tracking-wider font-semibold">
                    {currentStats.stat2.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] block tracking-tight">
                    {currentStats.stat2.val}
                  </span>
                  <span className="text-xs text-[#0D9488] font-medium block pt-0.5">
                    {currentStats.stat2.sub}
                  </span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F5F7] border border-black/[0.05] space-y-1">
                  <span className="text-[10px] font-mono text-[#6E6E73] block uppercase tracking-wider font-semibold">
                    {currentStats.stat3.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] block tracking-tight">
                    {currentStats.stat3.val}
                  </span>
                  <span className="text-xs text-[#0D9488] font-medium block pt-0.5">
                    {currentStats.stat3.sub}
                  </span>
                </div>
              </div>

              {/* Real-time Growth Spline Curve */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F5F7] border border-black/[0.05] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#1D1D1F] flex items-center gap-2 font-semibold">
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
              <div className="p-3.5 px-4 rounded-xl bg-[#F5F5F7] border border-black/[0.05] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2.5 text-[#1D1D1F] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>{currentStats.log}</span>
                </div>
                <div className="flex items-center gap-3 text-[#6E6E73] text-[11px]">
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
