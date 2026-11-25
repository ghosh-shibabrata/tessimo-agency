"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, MessageSquare } from "lucide-react";
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
      {/* Floating Launcher Pill at bottom-right */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
        <button
          type="button"
          onClick={() => {
            setInitialQuery(undefined);
            setIsOpen(true);
          }}
          className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1D1D1F] text-white hover:bg-black transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.24)] hover:shadow-[0_16px_40px_rgba(13,148,136,0.3)] hover:scale-[1.02] active:scale-[0.98] border border-white/10"
          aria-label="Open Tessimo AI Assistant"
        >
          {/* Pulsing Jade Halo */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9488] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0D9488]" />
          </span>

          <div className="flex items-center gap-1.5">
            <TessimoIcon size={16} variant="teal" />
            <span className="text-xs font-semibold tracking-tight text-white">
              Tessimo AI
            </span>
          </div>

          <span className="hidden sm:inline-block text-[10px] font-mono font-medium text-teal-300/90 pl-1 border-l border-white/15">
            Zero Latency
          </span>

          <Sparkles className="w-3.5 h-3.5 text-teal-300 group-hover:rotate-12 transition-transform" />
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
