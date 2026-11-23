"use client";

import React from "react";
import { Clock, TrendingUp, Calendar, ShieldCheck } from "lucide-react";

interface MetricItem {
  value: string;
  label: string;
  detail: string;
  icon: React.ElementType;
}

const METRICS: MetricItem[] = [
  {
    value: "< 60s",
    label: "Instant Customer Response",
    detail: "Every inbound lead answered in seconds across WhatsApp and web.",
    icon: Clock,
  },
  {
    value: "25+ hrs",
    label: "Weekly Time Saved",
    detail: "Reclaim hours lost on repetitive inquiries, emails, and scheduling.",
    icon: TrendingUp,
  },
  {
    value: "3.4x",
    label: "More Booked Consultations",
    detail: "Websites designed specifically to turn qualified visitors into clients.",
    icon: Calendar,
  },
  {
    value: "24/7",
    label: "Always-On Business Automation",
    detail: "Your sales and support systems run smoothly even when you sleep.",
    icon: ShieldCheck,
  },
];

export function MetricsBar() {
  return (
    <section className="relative w-full bg-[#FBFBFD] py-8 sm:py-12 lg:py-14 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Apple Pro Elevated Metrics Chassis in Pure White */}
        <div className="apple-card rounded-[24px] sm:rounded-[32px] bg-white border border-black/[0.08] p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          
          {/* Header Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-black/[0.08]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F7] border border-black/[0.06] text-xs font-mono font-medium text-[#0D9488]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
              <span>PROVEN BUSINESS IMPACT // REAL CLIENT METRICS</span>
            </div>

            <span className="text-xs font-mono text-[#6E6E73] hidden sm:inline-block">
              MEASURED ACROSS ACTIVE CLIENT BUSINESSES
            </span>
          </div>

          {/* 4 Metric Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 pt-6 sm:pt-8 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.06]">
            {METRICS.map((metric, idx) => {
              const IconComp = metric.icon;
              return (
                <div
                  key={metric.label}
                  className={`space-y-2.5 ${idx !== 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-[#1D1D1F]">
                      {metric.value}
                    </span>
                    <div className="p-2 rounded-xl bg-[#F5F5F7] text-[#0D9488]">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-[#1D1D1F] tracking-tight">
                    {metric.label}
                  </h3>

                  <p className="text-xs text-[#6E6E73] leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
