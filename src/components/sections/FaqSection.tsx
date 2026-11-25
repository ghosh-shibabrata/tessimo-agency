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
    <section className="relative w-full bg-[#FAF9F5] py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Structural Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-[#E2DFD7]" />

      <div className="relative z-10 w-full max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* ==============================================================
            ACADEMIC SECTION HEADER
           ============================================================== */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F1EB] border border-[#E2DFD7] text-xs font-mono font-medium text-[#66635E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#191919]" />
            <span>07 // Common Inquiries</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] leading-[1.12] tracking-tight">
              Direct clarity. <br />
              <span className="text-[#66635E] italic">Zero ambiguity.</span>
            </h2>

            <p className="text-base text-[#66635E] max-w-md lg:pb-1 font-sans leading-relaxed">
              Essential principles governing source code ownership, enterprise data safety, responsive viewports, and production deployment timelines.
            </p>
          </div>
        </div>

        {/* ==============================================================
            ACCORDION LIST
           ============================================================== */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className={`rounded-[20px] sm:rounded-[24px] bg-[#FAF9F5] border transition-all duration-200 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)] ${
                  isOpen
                    ? "border-[#191919]"
                    : "border-[#E2DFD7] hover:border-[#191919]/40"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1.5 pr-2">
                    <span className="text-[10px] font-mono text-[#66635E] uppercase tracking-wider block font-medium">
                      {faq.category.toLowerCase().replace(/(^|\s)\S/g, (t) => t.toUpperCase())}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-medium text-[#191919] tracking-tight leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`p-2 rounded-full border shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#191919] text-[#FAF9F5] border-[#191919]"
                        : "bg-[#F3F1EB] border-[#E2DFD7] text-[#191919]"
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
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 border-t border-[#E2DFD7]">
                        <p className="text-sm sm:text-base text-[#66635E] font-sans leading-relaxed">
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
