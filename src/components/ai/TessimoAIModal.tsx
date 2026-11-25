"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Send,
  X,
  ArrowUpRight,
  RotateCcw,
  CheckCircle2,
  Calculator,
  ChevronRight,
  Mail,
  Zap,
} from "lucide-react";
import { TessimoIcon } from "@/components/brand/TessimoIcon";
import { processTessimoAIQuery, TessimoAIResponse } from "@/lib/tessimo-ai/engine";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  responseMeta?: TessimoAIResponse;
  timestamp: string;
}

interface TessimoAIModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export function TessimoAIModal({ isOpen, onClose, initialQuery }: TessimoAIModalProps) {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showEstimator, setShowEstimator] = useState(false);

  // Estimator State
  const [estService, setEstService] = useState<"website" | "automation" | "both">("both");
  const [estWebTier, setEstWebTier] = useState<"starter" | "gold" | "premium">("gold");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-welcome",
      sender: "ai",
      text: "Hello! I am **Tessimo AI**, our proprietary agency intelligence system. I run completely without third-party GenAI APIs with zero latency.\n\nAsk me anything about our dual-market pricing (India ₹ & Global $), 24/7 AI systems, turnaround timelines, or how we scale client conversions.",
      timestamp: "Just now",
      responseMeta: {
        id: "welcome-meta",
        intent: "WELCOME",
        text: "",
        suggestedPills: [
          "Website Pricing",
          "AI Automation Plans",
          "Turnaround Timelines",
          "Interactive Estimator",
        ],
        action: {
          label: "Book a 15-min Demo",
          type: "scroll",
          value: "#contact",
        },
      },
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  useEffect(() => {
    if (initialQuery && isOpen) {
      handleSend(initialQuery);
    }
  }, [initialQuery, isOpen]);

  const handleSend = (userText: string) => {
    const query = userText.trim();
    if (!query) return;

    const userMessage: Message = {
      id: "user-" + Date.now(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Fast simulated intelligence calculation (150ms - sub-second Apple feel)
    setTimeout(() => {
      const aiResponse = processTessimoAIQuery(query, currency);

      const aiMessage: Message = {
        id: "ai-" + Date.now(),
        sender: "ai",
        text: aiResponse.text,
        responseMeta: aiResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 180);
  };

  const handleAction = (action: { type: string; value: string }) => {
    if (action.type === "scroll") {
      onClose();
      const element = document.querySelector(action.value);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (action.type === "email") {
      window.location.href = action.value;
    } else if (action.type === "calculator") {
      setShowEstimator(true);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "cleared-welcome",
        sender: "ai",
        text: "Conversation reset. What would you like to know about Tessimo Agency?",
        timestamp: "Just now",
        responseMeta: {
          id: "cleared-meta",
          intent: "WELCOME",
          text: "",
          suggestedPills: [
            "Website Pricing",
            "AI Automation Plans",
            "Turnaround Timelines",
            "Contact & Support",
          ],
        },
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 24 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="relative w-full max-w-[620px] h-[92vh] sm:h-[85vh] max-h-[740px] bg-[#FBFBFD] rounded-t-[28px] sm:rounded-[28px] border-t sm:border border-black/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.18)] flex flex-col overflow-hidden"
      >
        {/* ================================================================
            MODAL HEADER: Apple Luxury Bar
           ================================================================ */}
        <div className="px-4 py-3 sm:px-5 sm:py-4 bg-white/80 backdrop-blur-md border-b border-black/[0.06] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0D9488]/10 border border-[#0D9488]/20 flex items-center justify-center shadow-xs shrink-0">
              <TessimoIcon size={18} variant="teal" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h3 className="text-sm font-semibold text-[#1D1D1F] tracking-tight">
                  Tessimo AI
                </h3>
                <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-medium bg-[#0D9488]/10 text-[#0D9488] border border-[#0D9488]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
                  Zero-API
                </span>
              </div>
              <p className="hidden sm:block text-[11px] text-[#6E6E73] font-normal">
                Proprietary Agency Knowledge Base • Instant Latency
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Currency Switcher */}
            <div className="inline-flex items-center p-0.5 rounded-full bg-[#F5F5F7] border border-black/[0.08] text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  currency === "INR"
                    ? "bg-white text-[#1D1D1F] font-semibold shadow-xs"
                    : "text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
              >
                ₹ INR
              </button>
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  currency === "USD"
                    ? "bg-white text-[#1D1D1F] font-semibold shadow-xs"
                    : "text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
              >
                $ USD
              </button>
            </div>

            {/* Clear Chat */}
            <button
              type="button"
              onClick={handleClearChat}
              title="Reset conversation"
              className="p-2 rounded-full text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-black/[0.04] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            {/* Close Modal */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-black/[0.04] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ================================================================
            QUICK PROMPTS BAR (Apple Horizontal Scroll)
           ================================================================ */}
        <div className="px-5 py-2.5 bg-[#F5F5F7]/70 border-b border-black/[0.04] flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          <button
            type="button"
            onClick={() => handleSend("Website pricing")}
            className="px-3 py-1 rounded-full bg-white border border-black/[0.06] text-[11px] font-medium text-[#1D1D1F] hover:border-[#0D9488]/40 hover:text-[#0D9488] transition-all whitespace-nowrap shadow-2xs"
          >
            💰 Website Pricing
          </button>
          <button
            type="button"
            onClick={() => handleSend("AI Automation plans and cost")}
            className="px-3 py-1 rounded-full bg-white border border-black/[0.06] text-[11px] font-medium text-[#1D1D1F] hover:border-[#0D9488]/40 hover:text-[#0D9488] transition-all whitespace-nowrap shadow-2xs"
          >
            🤖 AI Automation
          </button>
          <button
            type="button"
            onClick={() => handleSend("Delivery and turnaround timeline")}
            className="px-3 py-1 rounded-full bg-white border border-black/[0.06] text-[11px] font-medium text-[#1D1D1F] hover:border-[#0D9488]/40 hover:text-[#0D9488] transition-all whitespace-nowrap shadow-2xs"
          >
            ⚡ Turnaround Time
          </button>
          <button
            type="button"
            onClick={() => setShowEstimator(!showEstimator)}
            className={`px-3 py-1 rounded-full border text-[11px] font-medium transition-all whitespace-nowrap shadow-2xs flex items-center gap-1 ${
              showEstimator
                ? "bg-[#0D9488] text-white border-[#0D9488]"
                : "bg-white border-black/[0.06] text-[#1D1D1F] hover:border-[#0D9488]/40 hover:text-[#0D9488]"
            }`}
          >
            <Calculator className="w-3 h-3" />
            <span>Scope Estimator</span>
          </button>
          <button
            type="button"
            onClick={() => handleSend("Contact and support email")}
            className="px-3 py-1 rounded-full bg-white border border-black/[0.06] text-[11px] font-medium text-[#1D1D1F] hover:border-[#0D9488]/40 hover:text-[#0D9488] transition-all whitespace-nowrap shadow-2xs"
          >
            📞 Contact & Support
          </button>
        </div>

        {/* ================================================================
            OPTIONAL: INTERACTIVE PROJECT ESTIMATOR OVERLAY
           ================================================================ */}
        {showEstimator && (
          <div className="p-4 bg-white border-b border-black/[0.08] shrink-0 animate-fade-in space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F]">
                <Calculator className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>Instant Project Scope & Investment Estimator</span>
              </div>
              <button
                type="button"
                onClick={() => setShowEstimator(false)}
                className="text-[11px] text-[#6E6E73] hover:text-[#1D1D1F]"
              >
                Hide
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* Select Service */}
              <div>
                <label className="text-[11px] font-medium text-[#6E6E73] block mb-1">
                  Deliverable Scope
                </label>
                <div className="grid grid-cols-3 gap-1">
                  {(["website", "automation", "both"] as const).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setEstService(s)}
                      className={`h-7 px-2 rounded-lg text-[11px] font-medium border capitalize transition-all ${
                        estService === s
                          ? "bg-[#1D1D1F] text-white border-[#1D1D1F]"
                          : "bg-[#F5F5F7] border-black/[0.06] text-[#6E6E73]"
                      }`}
                    >
                      {s === "both" ? "Web + AI" : s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Web Tier if website or both */}
              {estService !== "automation" && (
                <div>
                  <label className="text-[11px] font-medium text-[#6E6E73] block mb-1">
                    Website Package Tier
                  </label>
                  <div className="grid grid-cols-3 gap-1">
                    {(["starter", "gold", "premium"] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setEstWebTier(t)}
                        className={`h-7 px-2 rounded-lg text-[11px] font-medium border capitalize transition-all ${
                          estWebTier === t
                            ? "bg-[#0D9488] text-white border-[#0D9488]"
                            : "bg-[#F5F5F7] border-black/[0.06] text-[#6E6E73]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Calculated Estimate Box */}
            <div className="p-3 rounded-xl bg-[#F5F5F7] border border-black/[0.06] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#6E6E73] uppercase block">
                  Estimated Total Investment
                </span>
                <span className="text-base font-semibold text-[#1D1D1F] font-mono">
                  {currency === "INR" ? (
                    estService === "website"
                      ? estWebTier === "starter"
                        ? "₹4,999"
                        : estWebTier === "gold"
                        ? "₹9,999"
                        : "₹16,999"
                      : estService === "automation"
                      ? "₹19,999 setup + retainer"
                      : estWebTier === "starter"
                      ? "₹24,998 + retainer"
                      : estWebTier === "gold"
                      ? "₹29,998 + retainer"
                      : "₹36,998 + retainer"
                  ) : (
                    estService === "website"
                      ? estWebTier === "starter"
                        ? "$499"
                        : estWebTier === "gold"
                        ? "$799"
                        : "$999"
                      : estService === "automation"
                      ? "$1,499 setup + retainer"
                      : estWebTier === "starter"
                      ? "$1,998 + retainer"
                      : estWebTier === "gold"
                      ? "$2,298 + retainer"
                      : "$2,498 + retainer"
                  )}
                </span>
                <span className="text-[11px] text-[#6E6E73] block mt-0.5">
                  Timeline:{" "}
                  {estService === "website" && estWebTier === "starter"
                    ? "< 1 Week"
                    : "1–2 Weeks"}
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowEstimator(false);
                  handleAction({ type: "scroll", value: "#contact" });
                }}
                className="btn-apple-primary !py-1.5 !px-3.5 text-xs font-medium"
              >
                <span>Lock This Scope</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* ================================================================
            CONVERSATION STREAM
           ================================================================ */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-[#1D1D1F] text-white font-medium rounded-tr-xs shadow-xs"
                    : "bg-white border border-black/[0.08] text-[#1D1D1F] rounded-tl-xs shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
                }`}
              >
                {/* Render formatted message content */}
                <div className="space-y-2 whitespace-pre-wrap">
                  {msg.text.split("\n\n").map((paragraph, idx) => {
                    // Check for markdown headers ###
                    if (paragraph.startsWith("### ")) {
                      return (
                        <h4
                          key={idx}
                          className="text-sm font-semibold text-[#1D1D1F] tracking-tight border-b border-black/[0.06] pb-1.5 mb-1.5"
                        >
                          {paragraph.replace("### ", "")}
                        </h4>
                      );
                    }
                    return (
                      <p key={idx} className="leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Highlight Card if present */}
                {msg.responseMeta?.highlightCard && (
                  <div className="mt-3 p-3.5 rounded-xl bg-[#FBFBFD] border border-black/[0.08] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-[#1D1D1F]">
                        {msg.responseMeta.highlightCard.title}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0D9488]/10 text-[#0D9488] font-semibold">
                        {msg.responseMeta.highlightCard.badge}
                      </span>
                    </div>

                    <div className="text-base font-bold text-[#1D1D1F] font-mono">
                      {msg.responseMeta.highlightCard.price}
                    </div>

                    <p className="text-[11px] text-[#6E6E73]">
                      {msg.responseMeta.highlightCard.subtext}
                    </p>

                    <div className="pt-2 border-t border-black/[0.06] space-y-1">
                      {msg.responseMeta.highlightCard.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-1.5 text-[11px] text-[#1D1D1F]"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#0D9488] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action CTA Button */}
                {msg.responseMeta?.action && (
                  <div className="mt-3 pt-2.5 border-t border-black/[0.06]">
                    <button
                      type="button"
                      onClick={() => handleAction(msg.responseMeta!.action!)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1D1D1F] text-white hover:bg-black text-[11px] font-semibold transition-all shadow-xs"
                    >
                      <span>{msg.responseMeta.action.label}</span>
                      <ArrowUpRight className="w-3 h-3 text-teal-300" />
                    </button>
                  </div>
                )}
              </div>

              {/* Follow-up suggestions pills */}
              {msg.responseMeta?.suggestedPills && msg.responseMeta.suggestedPills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                  {msg.responseMeta.suggestedPills.map((pill, pIdx) => (
                    <button
                      key={pIdx}
                      type="button"
                      onClick={() => handleSend(pill)}
                      className="px-2.5 py-1 rounded-full bg-white border border-black/[0.06] text-[10px] font-medium text-[#6E6E73] hover:text-[#1D1D1F] hover:border-[#0D9488]/40 hover:bg-[#F5F5F7] transition-all"
                    >
                      {pill} →
                    </button>
                  ))}
                </div>
              )}

              <span className="text-[10px] font-mono text-[#86868B] mt-1 px-1">
                {msg.timestamp}
              </span>
            </div>
          ))}

          {/* Typing animation indicator */}
          {isTyping && (
            <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white border border-black/[0.08] w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-bounce [animation-delay:0.4s]" />
              <span className="text-[11px] font-mono text-[#6E6E73] ml-1">
                Processing knowledge core...
              </span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* ================================================================
            MODAL INPUT FOOTER: Apple Capsule Input
           ================================================================ */}
        <div className="p-3 sm:p-4 bg-white/95 backdrop-blur-md border-t border-black/[0.06] shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex items-center gap-2"
          >
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about pricing, automation, delivery..."
                className="w-full h-10 sm:h-11 pl-3.5 pr-8 sm:pl-4 sm:pr-10 rounded-full bg-[#F5F5F7] border border-black/[0.08] text-xs sm:text-sm text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:bg-white focus:border-[#1D1D1F] transition-colors"
              />
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0D9488] absolute right-3 sm:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-80" />
            </div>

            <button
              type="submit"
              disabled={!input.trim()}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1D1D1F] text-white flex items-center justify-center hover:bg-black transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0 shadow-xs cursor-pointer"
              aria-label="Send query"
            >
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </form>

          <div className="pt-1.5 sm:pt-2 text-center">
            <span className="text-[9px] sm:text-[10px] font-mono text-[#86868B] block truncate">
              Tessimo AI • Zero-API Architecture • 100% Private & Instant
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
