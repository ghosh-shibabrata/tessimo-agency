"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * AnimatedTessimoTLogo:
 * Tessimo's custom aerodynamic "T" emblem, sculpted and animated with
 * Claude's signature meditative organic breath, ambient glow pulse,
 * and liquid light glint across the wing blades.
 */
function AnimatedTessimoTLogo({ size = 56 }: { size?: number }) {
  return (
    <div className="relative flex items-center justify-center">
      {/* 1. Claude-style Organic Ambient Glow Pulse */}
      <motion.div
        animate={{
          scale: [1, 1.28, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(13, 148, 136, 0.32) 0%, rgba(45, 212, 191, 0.12) 50%, transparent 75%)",
        }}
      />

      {/* 2. Elevated Apple Frosted Glass Enclosure with Gentle Claude Breath */}
      <motion.div
        animate={{
          scale: [0.96, 1.04, 0.96],
          y: [0, -3, 0],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 p-5 sm:p-6 rounded-[28px] sm:rounded-[32px] bg-[#FAF9F5] border border-[#E2DFD7] shadow-[0_16px_48px_rgba(25,25,25,0.06),0_4px_16px_rgba(13,148,136,0.12)] flex items-center justify-center group"
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <defs>
            {/* Luminous Precision Teal Gradient */}
            <linearGradient
              id="claude-teal-grad"
              x1="15"
              y1="15"
              x2="85"
              y2="85"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#2DD4BF" />
              <stop offset="45%" stopColor="#0D9488" />
              <stop offset="100%" stopColor="#0F766E" />
            </linearGradient>

            {/* Moving Liquid Shimmer Across the T */}
            <linearGradient
              id="t-shimmer"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0D9488" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Top Aerodynamic Wing Blade of the T */}
          <motion.path
            d="M 18 24 C 22 23 30 22 42 22 L 78 22 C 86 22 88 25 82 28 C 76 31 68 33 58 34 L 38 34 C 26 34 18 30 18 24 Z"
            fill="url(#claude-teal-grad)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.85, 1, 0.85],
            }}
            transition={{
              pathLength: { duration: 1.2, ease: "easeOut" },
              opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          {/* Sculpted Blade & Vertical Stem of the T */}
          <motion.path
            d="M 44 32 C 55 32 72 31 78 35 C 72 40 60 44 48 44 C 44 44 42 47 42 52 L 42 78 C 42 84 46 86 52 83 L 52 86 C 45 88 38 88 34 83 C 32 80 32 72 32 64 L 32 46 C 32 37 37 32 44 32 Z"
            fill="url(#claude-teal-grad)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              pathLength: { duration: 1.4, delay: 0.15, ease: "easeOut" },
              opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </svg>

        {/* Ambient Corner Specular Highlights */}
        <div className="absolute top-1.5 left-2 w-6 h-3 bg-gradient-to-r from-white to-transparent opacity-80 rounded-full blur-[1px] pointer-events-none" />
      </motion.div>
    </div>
  );
}

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    "Synthesizing digital platforms…",
    "Calibrating autonomous systems…",
    "Tessimo Technology Ready",
  ];

  useEffect(() => {
    // Cycle Claude-style thinking statuses
    const step1 = setTimeout(() => setStatusIndex(1), 700);
    const step2 = setTimeout(() => setStatusIndex(2), 1450);

    // Complete loading after 2.1s
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2100);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="claude-tessimo-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.02,
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          }}
          onClick={() => setIsLoading(false)}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF9F5] select-none cursor-pointer"
          title="Click anywhere to skip"
        >
          {/* Subtle Ambient Radial Backlight */}
          <div
            className="absolute w-[440px] h-[440px] rounded-full pointer-events-none opacity-45"
            style={{
              background:
                "radial-gradient(circle, rgba(13, 148, 136, 0.15) 0%, rgba(13, 148, 136, 0.03) 50%, transparent 75%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Tessimo Stylish T Logo with Claude-style Breathing Motion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <AnimatedTessimoTLogo size={52} />
            </motion.div>

            {/* Brand Eyebrow Title (Tessimo Technology) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="mt-6 flex flex-col items-center text-center space-y-1"
            >
              <span className="text-xs font-mono font-semibold tracking-[0.28em] text-[#191919] uppercase">
                TESSIMO TECHNOLOGY
              </span>
              <span className="text-[11px] font-sans text-[#66635E] tracking-tight">
                Autonomous Intelligence & Bespoke Web Systems
              </span>
            </motion.div>

            {/* Claude-style Signature Hairline Progress Track */}
            <div className="w-40 sm:w-48 h-[2px] bg-[#E2DFD7] rounded-full overflow-hidden mt-6 relative">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.95,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full rounded-full bg-gradient-to-r from-[#0F766E] via-[#0D9488] to-[#2DD4BF]"
              />
            </div>

            {/* Dynamic Claude-style Thinking Status Line with Smooth Crossfade */}
            <div className="h-6 mt-3 flex items-center justify-center">
              <motion.p
                key={statusIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] font-mono text-[#66635E] flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
                <span>{statuses[statusIndex]}</span>
              </motion.p>
            </div>

          </div>

          {/* Bottom subtle prompt */}
          <div className="absolute bottom-6 text-[10px] font-mono text-[#66635E]/60 tracking-wider">
            CLICK ANYWHERE TO ENTER
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
