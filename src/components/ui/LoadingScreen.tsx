"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TessimoIcon } from "@/components/brand/TessimoIcon";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2-second loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FBFBFD] select-none"
        >
          {/* Subtle Ambient Backlight */}
          <div
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(13, 148, 136, 0.12) 0%, rgba(13, 148, 136, 0.02) 50%, transparent 70%)",
            }}
          />

          {/* Centered Animated Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{
              opacity: 1,
              scale: [0.92, 1.02, 1],
              transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
            }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="p-4 rounded-3xl bg-white border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <TessimoIcon size={44} variant="teal" />
            </div>

            {/* Apple-style Progress Track */}
            <div className="w-36 h-[2.5px] bg-black/[0.08] rounded-full overflow-hidden mt-7">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.85, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-[#0D9488] rounded-full"
              />
            </div>

            {/* Subtle Operational Status */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-3 text-[10px] font-mono text-[#6E6E73] uppercase tracking-[0.2em] font-medium"
            >
              INITIALIZING STUDIO
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
