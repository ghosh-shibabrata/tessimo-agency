"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Mail,
  Sparkles,
} from "lucide-react";

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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function FounderSection() {
  return (
    <section
      id="founder"
      className="relative w-full bg-[#FBFBFD] py-12 sm:py-16 lg:py-20 overflow-hidden scroll-mt-14"
    >
      {/* Structural Hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==============================================================
            COMPACT APPLE EXECUTIVE FOUNDER CARD
           ============================================================== */}
        <div className="apple-card rounded-[28px] sm:rounded-[36px] bg-white border border-black/[0.08] shadow-[0_8px_36px_rgba(0,0,0,0.04)] p-6 sm:p-9 lg:p-10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-7 sm:gap-9 items-center">
            
            {/* Left Column: Authentic Executive Keynote Photograph */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center sm:items-start">
              <div className="relative w-full max-w-[280px] md:max-w-none aspect-[4/5] rounded-[22px] overflow-hidden border border-black/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.08)] bg-[#1D1D1F] group">
                <Image
                  src="/images/founder.jpg"
                  alt="Shibabrata Ghosh, Founder of Tessimo Agency"
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                
                {/* Subtle Gradient Shadow on Photo Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Status Indicator Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
                    <span>Lead Architect</span>
                  </div>
                  <span className="text-teal-300 font-semibold">Tessimo</span>
                </div>
              </div>
            </div>

            {/* Right Column: Compact Executive Statement & Direct Verification */}
            <div className="md:col-span-7 lg:col-span-8 space-y-4 text-left">
              
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F7] border border-black/[0.06] text-xs font-mono font-medium text-[#0D9488] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                <span>LEADERSHIP & ENGINEERING INTEGRITY</span>
              </div>

              {/* Title & Role */}
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
                  Shibabrata Ghosh
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#0D9488]">
                  Founder & Lead Creative Technologist
                </p>
              </div>

              {/* Compact Statement */}
              <blockquote className="text-xs sm:text-sm text-[#1D1D1F] leading-relaxed font-normal bg-[#FBFBFD] p-4 rounded-2xl border border-black/[0.05]">
                &quot;We founded Tessimo to eliminate traditional agency bloat. No 3-month delays, no bureaucratic account managers, and zero junior handoffs. Every platform and AI system is built with obsessive craft and sub-second performance. You have my direct personal commitment to your business momentum.&quot;
              </blockquote>

              {/* Direct Verification Channels */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href="https://www.linkedin.com/in/shibabrata-ghosh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5]/15 border border-[#0077B5]/20 text-xs font-semibold transition-all shadow-2xs"
                  aria-label="View Shibabrata Ghosh on LinkedIn"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href="mailto:shibabrata@tessimo.in"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#EBEBEF] border border-black/[0.08] text-xs font-mono font-semibold transition-all shadow-2xs"
                  aria-label="Email Shibabrata Ghosh directly"
                >
                  <Mail className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>shibabrata@tessimo.in</span>
                </a>

                <a
                  href="https://github.com/ghosh-shibabrata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1D1D1F] text-white hover:bg-black text-xs font-medium transition-all shadow-2xs"
                  aria-label="View Shibabrata Ghosh on GitHub"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Bottom Trust & CTA Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-black/[0.06] text-xs text-[#6E6E73]">
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#0D9488] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>GUARANTEED UNDER 2-HOUR RESPONSE PROTOCOL</span>
                </div>

                <Link
                  href="#contact"
                  className="btn-apple-primary !py-2 !px-4 text-xs font-semibold shrink-0 flex items-center gap-1.5"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3 h-3 text-teal-300" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
