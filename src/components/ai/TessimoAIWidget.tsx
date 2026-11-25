"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { TessimoIcon } from "@/components/brand/TessimoIcon";
import { TessimoAIModal } from "./TessimoAIModal";

export function TessimoAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleOpenAI = (event: CustomEvent<{ query?: string }>) => {
      if (event.detail?.query) {
        setInitialQuery(event.detail.query);
      }
      setIsOpen(true);
    };

    window.addEventListener("open-tessimo-ai" as any, handleOpenAI);
    return () => {
      window.removeEventListener("open-tessimo-ai" as any, handleOpenAI);
    };
  }, []);

  return (
    <>
      {/* Floating Launcher Button
          - Mobile (< sm): Compact 48x48 circular logo button to prevent any overlap
          - Desktop (sm+): Full luxury pill with 'Tessimo AI' and 'Zero Latency' indicator
      */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <button
          type="button"
          onClick={() => {
            setInitialQuery(undefined);
            setIsOpen(true);
          }}
          className="group relative flex items-center justify-center w-12 h-12 sm:w-auto sm:h-auto sm:px-4 sm:py-2.5 rounded-full bg-[#1D1D1F] text-white hover:bg-black transition-all duration-300 shadow-[0_10px_28px_rgba(0,0,0,0.28)] hover:shadow-[0_16px_40px_rgba(13,148,136,0.3)] hover:scale-105 active:scale-95 border border-white/10 focus:outline-none"
          aria-label="Open Tessimo AI Assistant"
        >
          {/* Mobile Status Dot (top-right corner of circle) */}
          <span className="sm:hidden absolute top-1 right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9488] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0D9488] ring-2 ring-[#1D1D1F]" />
          </span>

          {/* Desktop Pulsing Jade Halo */}
          <span className="hidden sm:relative sm:flex h-2.5 w-2.5 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9488] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0D9488]" />
          </span>

          {/* Tessimo Logo Icon */}
          <TessimoIcon
            size={22}
            variant="teal"
            className="sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:scale-110"
          />

          {/* Desktop-only Text & Badges (Hidden on mobile to eliminate overlap) */}
          <div className="hidden sm:flex items-center gap-1.5 ml-1.5">
            <span className="text-xs font-semibold tracking-tight text-white">
              Tessimo AI
            </span>
            <span className="text-[10px] font-mono font-medium text-teal-300/90 pl-1.5 border-l border-white/15">
              Zero Latency
            </span>
          </div>

          <Sparkles className="hidden sm:inline-block w-3.5 h-3.5 text-teal-300 ml-1.5 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Full Modal Drawer */}
      <TessimoAIModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialQuery={initialQuery}
      />
    </>
  );
}
