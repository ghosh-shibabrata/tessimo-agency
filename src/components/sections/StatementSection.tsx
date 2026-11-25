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
      className="relative w-full bg-[#FAF9F5] py-24 sm:py-32 lg:py-40 overflow-hidden scroll-mt-14"
    >
      {/* Structural Hairlines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#E2DFD7]" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#E2DFD7]" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-xs font-mono font-medium text-[#66635E]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#191919]" />
                <span className="tracking-wide">
                  A better way to grow
                </span>
              </div>
              <div className="text-[11px] font-mono text-[#66635E] tracking-[0.08em] uppercase pt-1">
                01 // Philosophy
              </div>
            </motion.div>

            {/* Architectural Rule */}
            <motion.div
              variants={textVariants}
              className="hidden lg:flex items-center gap-3 pt-8"
            >
              <div className="w-12 h-[1px] bg-[#191919]/40" />
              <span className="text-[10px] font-mono text-[#66635E] tracking-wider uppercase">
                Automation meets design
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
                  className="text-4xl sm:text-5xl lg:text-6xl text-[#191919] font-serif tracking-tight leading-[1.08] break-words"
                >
                  Less manual.
                </motion.div>
              </div>

              <div className="overflow-hidden pb-1">
                <motion.div
                  variants={lineVariants}
                  className="text-4xl sm:text-5xl lg:text-6xl text-[#191919] font-serif tracking-tight leading-[1.08] break-words"
                >
                  More <span className="italic text-[#66635E]">momentum.</span>
                </motion.div>
              </div>
            </div>

            {/* Supporting Text */}
            <motion.div
              variants={textVariants}
              className="lg:max-w-xl lg:ml-auto pt-4 border-t border-[#E2DFD7] lg:border-t-0"
            >
              <p className="text-lg sm:text-xl text-[#66635E] leading-[1.65] font-sans">
                Technology should remove friction—not create more of it. We help businesses replace repetitive work, missed leads, and fragmented digital experiences with smarter ways to grow.
              </p>

              <div className="mt-8 flex items-center gap-4 text-xs text-[#66635E]">
                <span className="font-mono tracking-widest text-[#191919] font-medium">01</span>
                <span className="w-8 h-[1px] bg-[#E2DFD7]" />
                <span className="font-mono uppercase tracking-[0.1em]">Effortless scaling</span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
