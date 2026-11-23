"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function StatementSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const textVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full bg-[#FBFBFD] py-16 sm:py-24 lg:py-30 overflow-hidden scroll-mt-14"
    >
      {/* Structural Hairlines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12% 0px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start"
        >
          {/* Left Column: Metadata & Eyebrow Label (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:space-y-0 lg:h-full lg:min-h-[260px]">
            <motion.div variants={textVariants} className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.08] text-xs font-mono font-medium text-[#1D1D1F] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                <span className="tracking-wide uppercase">
                  A Better Way to Grow
                </span>
              </div>
              <div className="text-[11px] font-mono text-[#86868B] tracking-[0.08em] uppercase pt-1">
                01 // OUR PHILOSOPHY
              </div>
            </motion.div>

            {/* Architectural Rule */}
            <motion.div
              variants={textVariants}
              className="hidden lg:flex items-center gap-3 pt-8"
            >
              <div className="w-12 h-[1px] bg-[#0D9488]/40" />
              <span className="text-[10px] font-mono text-[#86868B] tracking-wider uppercase">
                AUTOMATION MEETS DESIGN
              </span>
            </motion.div>
          </div>

          {/* Right Column: Statement & Editorial Body (Cols 5-12) */}
          <div className="lg:col-span-8 flex flex-col space-y-8 lg:space-y-12">
            
            {/* Main Statement */}
            <div className="space-y-1 sm:space-y-2">
              <div className="overflow-hidden pb-1">
                <motion.div
                  variants={lineVariants}
                  className="text-4xl sm:text-5xl lg:text-6xl text-[#1D1D1F] font-semibold tracking-[-0.04em] leading-[1.04] break-words"
                >
                  Less manual.
                </motion.div>
              </div>

              <div className="overflow-hidden pb-1">
                <motion.div
                  variants={lineVariants}
                  className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[1.04] text-[#1D1D1F] break-words"
                >
                  More{" "}
                  <span className="relative inline-block text-shimmer-teal">
                    momentum.
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Supporting Text */}
            <motion.div
              variants={textVariants}
              className="lg:max-w-xl lg:ml-auto pt-4 border-t border-black/[0.08] lg:border-t-0"
            >
              <p className="text-lg sm:text-xl text-[#6E6E73] leading-[1.65] font-normal">
                Technology should remove friction—not create more of it. We help businesses replace repetitive work, missed leads, and outdated digital experiences with smarter ways to grow.
              </p>

              <div className="mt-8 flex items-center gap-4 text-xs text-[#86868B]">
                <span className="font-mono tracking-widest text-[#0D9488] font-semibold">01</span>
                <span className="w-8 h-[1px] bg-black/[0.1]" />
                <span className="font-mono uppercase tracking-[0.1em]">EFFORTLESS SCALING</span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
