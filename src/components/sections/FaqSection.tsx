"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  category: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    category: "CODE & IP OWNERSHIP",
    question: "Do I 100% own the website and automation workflows?",
    answer:
      "Yes. 100% of all website source code, design assets, and automation workflows belong completely to your company. You are never locked into proprietary platforms or held hostage by hidden recurring agency fees.",
  },
  {
    category: "CUSTOMER PRIVACY & SAFETY",
    question: "Is our business and customer data kept secure and private?",
    answer:
      "Strictly private. Your customer records, inquiries, and company documents are never shared or used to train public AI models. All databases and webhooks are protected with bank-grade encryption and secure private keys.",
  },
  {
    category: "SPEED OF DELIVERY",
    question: "How quickly can we launch our website and AI automations?",
    answer:
      "High-converting websites and standard automated customer flows typically launch in 2 to 3 weeks. Full multi-system workflows and custom integrations go live in 3 to 4 weeks with weekly progress walk-throughs.",
  },
  {
    category: "MOBILE COMPATIBILITY",
    question: "Will our website look and work perfectly on smartphones?",
    answer:
      "Absolutely. Over 90% of prospective clients visit websites via mobile phones. We design mobile-first with sub-second loading speed, large thumb-friendly buttons, and seamless 1-tap booking so you never lose a phone visitor.",
  },
  {
    category: "POST-LAUNCH SUPPORT",
    question: "What happens after our website and automations go live?",
    answer:
      "Every launch includes 30 days of complimentary hypercare support. We monitor your system live, ensure every inquiry is routed correctly, and provide hands-on video training for you and your staff.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative w-full bg-[#FBFBFD] py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Structural Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

      <div className="relative z-10 w-full max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ==============================================================
            APPLE SECTION HEADER
           ============================================================== */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-xs font-medium text-[#1D1D1F] tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
            <span>08 // COMMON QUESTIONS</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-[#1D1D1F] leading-[1.08] break-words">
              Clear answers. <br />
              <span className="text-[#6E6E73]">Zero ambiguity.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#6E6E73] max-w-md lg:pb-1 font-normal leading-relaxed">
              Everything you need to know about code ownership, customer data privacy, mobile performance, and launch timelines.
            </p>
          </div>
        </div>

        {/* ==============================================================
            APPLE ACCORDION LIST
           ============================================================== */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className={`apple-card rounded-[20px] sm:rounded-[24px] bg-white border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#0D9488]/40 ring-1 ring-[#0D9488]/20 shadow-[0_8px_28px_rgba(13,148,136,0.06)]"
                    : "border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-black/[0.14]"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1.5 pr-2">
                    <span className="text-[10px] font-mono text-[#0D9488] uppercase tracking-wider block font-semibold">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-[#1D1D1F] tracking-tight leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`p-2 rounded-full border shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#1D1D1F] text-white border-[#1D1D1F]"
                        : "bg-[#F5F5F7] border-black/[0.08] text-[#1D1D1F]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 border-t border-black/[0.06]">
                        <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
