"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";
import { TessimoIcon } from "@/components/brand/TessimoIcon";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function FounderSection() {
  return (
    <section
      id="founder"
      className="relative w-full bg-[#FBFBFD] py-16 sm:py-24 lg:py-32 overflow-hidden scroll-mt-14"
    >
      {/* Structural Hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

      {/* Atmospheric Subtle Jade Halo */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 10%, rgba(13, 148, 136, 0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* ==============================================================
            SECTION HEADER
           ============================================================== */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-xs font-mono font-medium text-[#1D1D1F] tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
            <span>LEADERSHIP & ENGINEERING ACCOUNTABILITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-[#1D1D1F] leading-[1.08] break-words">
            Directed by engineering. <br />
            <span className="text-[#6E6E73]">Committed to client velocity.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6E6E73] font-normal leading-relaxed pt-1">
            No bloated account managers. No junior handoffs. You get senior creative technology and direct founder oversight from initial architecture to live production launch.
          </p>
        </div>

        {/* ==============================================================
            APPLE PRO FOUNDER CARD
           ============================================================== */}
        <div className="apple-card rounded-[28px] sm:rounded-[36px] bg-white border border-black/[0.08] shadow-[0_12px_44px_rgba(0,0,0,0.05)] p-6 sm:p-9 lg:p-11 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Founder Profile & Credentials */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="flex items-center gap-4">
                {/* Monogram / Avatar Frame */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#1D1D1F] text-white flex flex-col items-center justify-center shadow-lg border border-white/10 shrink-0 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/30 to-transparent pointer-events-none" />
                  <span className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-white relative z-10">
                    SG
                  </span>
                  <span className="text-[9px] font-mono text-teal-300 uppercase tracking-widest relative z-10 mt-0.5">
                    ARCHITECT
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F] tracking-tight">
                      Shibabrata Ghosh
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-[#0D9488]">
                    Founder & Lead Creative Technologist
                  </p>

                  <div className="pt-1 flex items-center gap-1.5 text-[11px] font-mono text-[#6E6E73]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
                    <span>Direct Architecture & Review</span>
                  </div>
                </div>
              </div>

              {/* Direct Verification Channels */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <a
                  href="https://www.linkedin.com/in/shibabrata-ghosh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5]/15 border border-[#0077B5]/25 text-xs font-semibold transition-all shadow-2xs"
                  aria-label="View Shibabrata Ghosh on LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4 fill-current" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a
                  href="https://github.com/ghosh-shibabrata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1D1D1F] text-white hover:bg-black text-xs font-semibold transition-all shadow-2xs"
                  aria-label="View Shibabrata Ghosh on GitHub"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a
                  href="mailto:hello@tessimo.in"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#EBEBEF] border border-black/[0.08] text-xs font-semibold transition-all shadow-2xs font-mono"
                  aria-label="Email Shibabrata Ghosh"
                >
                  <Mail className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>Direct Mail</span>
                </a>
              </div>

              {/* 3 Executive Trust Pillars */}
              <div className="space-y-2 pt-2 border-t border-black/[0.08] text-xs text-[#6E6E73]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>Zero junior handoffs — senior engineering on every project</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>Guaranteed under 2-hour executive response protocol</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>100% intellectual property & source code handed over</span>
                </div>
              </div>

            </div>

            {/* Right Column: Founder's Personal Manifesto & Direct CTA */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6 lg:border-l border-black/[0.08]">
              
              <div className="space-y-4">
                <span className="text-[11px] font-mono text-[#86868B] uppercase tracking-wider block font-semibold">
                  FOUNDER&apos;S DIRECT STATEMENT
                </span>

                <blockquote className="text-sm sm:text-base text-[#1D1D1F] leading-relaxed font-normal">
                  &quot;Traditional digital agencies are broken. They charge exorbitant retainer fees, drag simple landing pages out for three months, and hide behind bureaucratic account managers.
                  <br className="hidden sm:inline" /><br className="hidden sm:inline" />
                  We founded <span className="font-semibold text-[#1D1D1F]">Tessimo</span> on a singular principle: <span className="text-[#0D9488] font-semibold">Never miss a lead. Never lose a customer.</span> We engineer bespoke platforms in Next.js 15 with sub-second page speeds, and integrate 24/7 autonomous systems that turn visitors into booked buyers while you sleep.
                  <br className="hidden sm:inline" /><br className="hidden sm:inline" />
                  When you partner with Tessimo, you have my personal commitment to unmatched craft, transparent milestone delivery, and direct technical accountability.&quot;
                </blockquote>
              </div>

              {/* Action Strip */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-black/[0.06]">
                <div>
                  <span className="text-xs font-semibold text-[#1D1D1F] block">
                    Have a vision to build or automate?
                  </span>
                  <span className="text-xs text-[#6E6E73]">
                    Book a focused 15-minute consultation directly with Shibabrata.
                  </span>
                </div>

                <Link
                  href="#contact"
                  className="btn-apple-primary !py-2.5 !px-5 text-xs font-semibold shrink-0 flex items-center gap-1.5"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-teal-300" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
