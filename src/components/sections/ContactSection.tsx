"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Clock,
  Globe,
  Building2,
  User,
  Mail,
  Phone,
  Calendar,
  Lock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ServiceType = "Website Platform" | "AI Automation" | "Website + AI" | "Custom Scope";
type TimelineType = "< 1 Week" | "1–3 Weeks" | "Flexible";
type Currency = "INR" | "USD";

interface BudgetTier {
  id: string;
  title: string;
  badge: string;
  priceINR: string;
  priceUSD: string;
  timeline: string;
  subtitle: string;
}

const BUDGET_TIERS: BudgetTier[] = [
  {
    id: "starter",
    title: "Starter Platform",
    badge: "5-Day Launch",
    priceINR: "₹4,999",
    priceUSD: "$499",
    timeline: "< 1 Week",
    subtitle: "High-converting single-page platform",
  },
  {
    id: "signature",
    title: "Signature (Gold)",
    badge: "Most Selected",
    priceINR: "₹9,999",
    priceUSD: "$799",
    timeline: "1–2 Weeks",
    subtitle: "Multi-section custom brand flagship",
  },
  {
    id: "premium",
    title: "Premium Architecture",
    badge: "Enterprise",
    priceINR: "₹16,999",
    priceUSD: "$999",
    timeline: "2–3 Weeks",
    subtitle: "Full custom CMS & conversion funnel",
  },
  {
    id: "automation",
    title: "AI Automation System",
    badge: "24/7 Autopilot",
    priceINR: "From ₹19,999",
    priceUSD: "From $1,499",
    timeline: "1–2 Weeks",
    subtitle: "WhatsApp bot, CRM & auto booking",
  },
  {
    id: "custom",
    title: "Custom Scope",
    badge: "Tailored",
    priceINR: "Custom Quote",
    priceUSD: "Custom Quote",
    timeline: "Flexible",
    subtitle: "Full-scale enterprise architecture",
  },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: ServiceType;
  timeline: TimelineType;
  budgetTierId: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  description?: string;
  general?: string;
}

export function ContactSection() {
  const [currency, setCurrency] = useState<Currency>("INR");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Website + AI",
    timeline: "< 1 Week",
    budgetTierId: "signature",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);

  // Auto-detect timezone currency
  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && (tz.includes("Calcutta") || tz.includes("Kolkata") || tz.includes("India"))) {
        setCurrency("INR");
      } else {
        setCurrency("USD");
      }
    } catch {
      setCurrency("INR");
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your business email.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please describe what you are looking to build or automate.";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Please provide a little more detail (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    const selectedTier = BUDGET_TIERS.find((t) => t.id === formData.budgetTierId) || BUDGET_TIERS[1];
    const budgetFormatted = `${selectedTier.title} (${currency === "INR" ? selectedTier.priceINR : selectedTier.priceUSD})`;

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company || "N/A",
        service: formData.service,
        timeline: formData.timeline,
        scope: budgetFormatted,
        description: formData.description,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setSubmittedLeadId(data.leadId || `LEAD-${Date.now().toString().slice(-4)}`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrors((prev) => ({ ...prev, general: message }));
    } finally {
      setIsLoading(false);
    }
  };

  const services: ServiceType[] = [
    "Website Platform",
    "AI Automation",
    "Website + AI",
    "Custom Scope",
  ];

  const timelines: TimelineType[] = ["< 1 Week", "1–3 Weeks", "Flexible"];

  const activeTier = BUDGET_TIERS.find((t) => t.id === formData.budgetTierId) || BUDGET_TIERS[1];

  return (
    <section
      id="contact"
      className="relative w-full bg-[#FBFBFD] py-16 sm:py-24 lg:py-32 overflow-hidden scroll-mt-14"
    >
      {/* Structural Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

      {/* Atmospheric Subtle Jade Halo */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 90%, rgba(13, 148, 136, 0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ==============================================================
              LEFT COLUMN: Executive Narrative & Direct Trust Channels
             ============================================================== */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-xs font-mono font-medium text-[#1D1D1F] tracking-wide shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                <span>09 // INITIATE PARTNERSHIP</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-[#1D1D1F] leading-[1.08] break-words">
                Ready to grow? <br />
                <span className="text-[#6E6E73]">Let&apos;s talk business.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#6E6E73] font-normal leading-relaxed pt-1">
                Tell us what you&apos;re looking to build, improve, or automate. We&apos;ll analyze your goals and share a clear roadmap with zero sales pressure.
              </p>
            </div>

            {/* Direct Studio Channels Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#6E6E73] uppercase tracking-wider block font-semibold">
                  DIRECT STUDIO INQUIRIES
                </span>
                <a
                  href="mailto:hello@tessimo.in"
                  className="text-base font-mono text-[#1D1D1F] font-semibold hover:text-[#0D9488] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4 text-[#0D9488]" />
                  <span>hello@tessimo.in</span>
                </a>
              </div>

              <div className="pt-2 border-t border-black/[0.06] space-y-1">
                <span className="text-[11px] font-mono text-[#6E6E73] uppercase tracking-wider block font-semibold">
                  GLOBAL CLIENT SUPPORT
                </span>
                <p className="text-xs font-mono text-[#6E6E73]">
                  Remote Worldwide • Mon—Fri (24/7 Automated Ingestion)
                </p>
              </div>

              <div className="pt-1 flex items-center gap-2 text-xs font-mono text-[#0D9488] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
                <span>RESPONSE PROTOCOL: UNDER 2 BUSINESS HOURS</span>
              </div>
            </div>

            {/* Instant WhatsApp Priority Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50/60 to-teal-50/40 border border-emerald-200/60 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#0D9488] text-white flex items-center justify-center shrink-0 shadow-xs">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#1D1D1F] block">
                  Prefer Instant WhatsApp Chat?
                </span>
                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  Have quick questions about pricing or timelines? Connect with our studio team for immediate assistance.
                </p>
                <a
                  href="mailto:hello@tessimo.in?subject=WhatsApp%20Inquiry%20for%20Tessimo"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0D9488] hover:underline pt-1"
                >
                  <span>Request WhatsApp callback</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Executive Client Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 pt-1 text-xs text-[#6E6E73]">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F5F5F7] border border-black/[0.04]">
                <ShieldCheck className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>100% Intellectual Property & Code Ownership</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F5F5F7] border border-black/[0.04]">
                <Clock className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>Guaranteed Under 2-Hour Response Time</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F5F5F7] border border-black/[0.04]">
                <Lock className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>Strict Enterprise Privacy & NDA Protection</span>
              </div>
            </div>

          </div>

          {/* ==============================================================
              RIGHT COLUMN: Apple Pro Intake Form Card
             ============================================================== */}
          <div className="lg:col-span-7">
            <div className="apple-card rounded-[28px] sm:rounded-[36px] bg-white border border-black/[0.08] shadow-[0_12px_44px_rgba(0,0,0,0.06)] p-6 sm:p-9 lg:p-10 relative overflow-hidden">
              
              {submittedLeadId ? (
                /* SUCCESS STATE */
                <div className="py-12 sm:py-16 text-center space-y-6 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#0D9488]/10 border border-[#0D9488]/30 flex items-center justify-center mx-auto text-[#0D9488]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
                      Inquiry Received Successfully
                    </h3>
                    <p className="text-sm text-[#6E6E73] max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-[#1D1D1F] font-semibold">{formData.name}</span>. Your brief has been registered under reference <span className="text-[#0D9488] font-mono font-semibold">{submittedLeadId}</span>.
                    </p>
                    <p className="text-xs text-[#6E6E73] max-w-sm mx-auto">
                      Our response protocol guarantees a personal reply to <span className="font-mono text-[#1D1D1F] font-medium">{formData.email}</span> in under 2 business hours.
                    </p>
                  </div>

                  {/* Summary of submitted package */}
                  <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.06] max-w-md mx-auto text-left text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#6E6E73]">Service Focus:</span>
                      <span className="font-semibold text-[#1D1D1F]">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6E6E73]">Selected Tier:</span>
                      <span className="font-semibold text-[#0D9488]">{activeTier.title} ({currency === "INR" ? activeTier.priceINR : activeTier.priceUSD})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6E6E73]">Target Timeline:</span>
                      <span className="font-semibold text-[#1D1D1F]">{formData.timeline}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedLeadId(null);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        service: "Website + AI",
                        timeline: "< 1 Week",
                        budgetTierId: "signature",
                        description: "",
                      });
                    }}
                    className="btn-apple-secondary text-xs font-medium cursor-pointer"
                  >
                    <span>Submit another project brief</span>
                  </button>
                </div>
              ) : (
                /* ACTIVE FORM */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Header Strip with Currency Selector */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-black/[0.08]">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] tracking-tight">
                        Project Consultation Brief
                      </h3>
                      <p className="text-xs text-[#6E6E73] mt-0.5">
                        Takes ~60 seconds • We reply within 2 business hours
                      </p>
                    </div>

                    {/* Currency Switcher */}
                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <span className="text-[11px] font-mono text-[#6E6E73] uppercase hidden sm:inline-block">
                        Currency:
                      </span>
                      <div className="inline-flex items-center p-0.5 rounded-full bg-[#F5F5F7] border border-black/[0.08] text-xs font-mono">
                        <button
                          type="button"
                          onClick={() => setCurrency("INR")}
                          className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                            currency === "INR"
                              ? "bg-white text-[#1D1D1F] font-semibold shadow-xs"
                              : "text-[#6E6E73] hover:text-[#1D1D1F]"
                          }`}
                        >
                          ₹ INR (India)
                        </button>
                        <button
                          type="button"
                          onClick={() => setCurrency("USD")}
                          className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                            currency === "USD"
                              ? "bg-white text-[#1D1D1F] font-semibold shadow-xs"
                              : "text-[#6E6E73] hover:text-[#1D1D1F]"
                          }`}
                        >
                          $ USD (Global)
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* General Error Alert */}
                  {errors.general && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700 animate-fade-in"
                    >
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{errors.general}</span>
                    </div>
                  )}

                  {/* Row 1: Name & Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-medium text-[#1D1D1F] tracking-tight flex items-center gap-1.5"
                      >
                        <User className="w-3.5 h-3.5 text-[#6E6E73]" />
                        <span>Your Name</span> <span className="text-[#0D9488]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Marcus Vance"
                        aria-invalid={!!errors.name}
                        className={`w-full h-11 px-4 rounded-xl bg-[#F5F5F7] border text-sm text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:bg-white transition-all ${
                          errors.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-black/[0.08] focus:border-[#0D9488] focus:ring-3 focus:ring-[#0D9488]/15"
                        }`}
                      />
                      {errors.name && (
                        <p role="alert" className="text-xs text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="email"
                          className="text-xs font-medium text-[#1D1D1F] tracking-tight flex items-center gap-1.5"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#6E6E73]" />
                          <span>Business Email</span> <span className="text-[#0D9488]">*</span>
                        </label>
                        {formData.email.includes("@") && formData.email.includes(".") && (
                          <span className="text-[10px] font-mono text-[#0D9488] flex items-center gap-1 font-semibold">
                            <CheckCircle2 className="w-3 h-3" />
                            Valid
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="marcus@company.com"
                          aria-invalid={!!errors.email}
                          className={`w-full h-11 px-4 pr-9 rounded-xl bg-[#F5F5F7] border text-sm text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:bg-white transition-all ${
                            errors.email
                              ? "border-red-500 focus:border-red-500"
                              : "border-black/[0.08] focus:border-[#0D9488] focus:ring-3 focus:ring-[#0D9488]/15"
                          }`}
                        />
                        {formData.email.includes("@") && formData.email.includes(".") && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        )}
                      </div>
                      {errors.email && (
                        <p role="alert" className="text-xs text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Company Name & WhatsApp / Phone (Optional) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="company"
                        className="text-xs font-medium text-[#1D1D1F] tracking-tight flex items-center gap-1.5"
                      >
                        <Building2 className="w-3.5 h-3.5 text-[#6E6E73]" />
                        <span>Company / Organization</span>{" "}
                        <span className="text-[#86868B] text-[11px] font-normal">(optional)</span>
                      </label>
                      <input
                        id="company"
                        name="organization"
                        type="text"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Growth Corp"
                        className="w-full h-11 px-4 rounded-xl bg-[#F5F5F7] border border-black/[0.08] text-sm text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:bg-white focus:border-[#0D9488] focus:ring-3 focus:ring-[#0D9488]/15 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-xs font-medium text-[#1D1D1F] tracking-tight flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#6E6E73]" />
                        <span>WhatsApp / Phone</span>{" "}
                        <span className="text-[#86868B] text-[11px] font-normal">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="tel"
                        type="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210 or +1 (555)..."
                        className="w-full h-11 px-4 rounded-xl bg-[#F5F5F7] border border-black/[0.08] text-sm text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:bg-white focus:border-[#0D9488] focus:ring-3 focus:ring-[#0D9488]/15 transition-all font-mono"
                      />
                    </div>
                  </div>

                  {/* Row 3: Area of Focus as Apple Segmented Buttons */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#1D1D1F] tracking-tight block">
                      What are you looking for? <span className="text-[#0D9488]">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {services.map((svc) => {
                        const isSelected = formData.service === svc;
                        return (
                          <button
                            key={svc}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: svc })}
                            className={`min-h-[44px] px-3 py-2 rounded-xl text-xs font-medium transition-all text-center flex items-center justify-center border cursor-pointer ${
                              isSelected
                                ? "bg-[#1D1D1F] text-white border-[#1D1D1F] shadow-sm font-semibold"
                                : "bg-[#F5F5F7] border-black/[0.08] text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#EBEBEF]"
                            }`}
                          >
                            <span>{svc}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Estimated Budget & Tier Architecture (Award-Winning Non-Truncating Grid) */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-medium text-[#1D1D1F] tracking-tight block">
                        Estimated Budget & Package Tier <span className="text-[#0D9488]">*</span>
                      </label>
                      <span className="text-[11px] font-mono text-[#0D9488] font-semibold">
                        Showing in {currency === "INR" ? "₹ INR" : "$ USD"}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {BUDGET_TIERS.map((tier) => {
                        const isSelected = formData.budgetTierId === tier.id;
                        const price = currency === "INR" ? tier.priceINR : tier.priceUSD;

                        return (
                          <button
                            key={tier.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, budgetTierId: tier.id })}
                            className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative flex flex-col justify-between ${
                              isSelected
                                ? "bg-[#1D1D1F] text-white border-[#1D1D1F] shadow-md ring-2 ring-[#0D9488]/30"
                                : "bg-[#F5F5F7] border-black/[0.08] text-[#1D1D1F] hover:bg-[#EBEBEF] hover:border-black/[0.14]"
                            }`}
                          >
                            {/* Card Header */}
                            <div className="flex items-center justify-between gap-1 mb-1.5">
                              <span
                                className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                                  isSelected
                                    ? "bg-white/15 text-teal-300"
                                    : "bg-white text-[#0D9488] border border-black/[0.06]"
                                }`}
                              >
                                {tier.badge}
                              </span>

                              {isSelected ? (
                                <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                              ) : (
                                <span className="text-[10px] font-mono text-[#86868B]">
                                  {tier.timeline}
                                </span>
                              )}
                            </div>

                            {/* Card Title & Price */}
                            <div className="space-y-0.5">
                              <h4
                                className={`text-xs font-semibold tracking-tight ${
                                  isSelected ? "text-white" : "text-[#1D1D1F]"
                                }`}
                              >
                                {tier.title}
                              </h4>
                              <div
                                className={`text-sm font-mono font-bold ${
                                  isSelected ? "text-teal-300" : "text-[#1D1D1F]"
                                }`}
                              >
                                {price}
                              </div>
                            </div>

                            <p
                              className={`text-[10px] mt-1 line-clamp-1 ${
                                isSelected ? "text-white/70" : "text-[#6E6E73]"
                              }`}
                            >
                              {tier.subtitle}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 5: Target Timeline */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#1D1D1F] tracking-tight block">
                      Target Delivery Timeline
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timelines.map((tl) => {
                        const isSelected = formData.timeline === tl;
                        return (
                          <button
                            key={tl}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: tl })}
                            className={`min-h-[42px] px-3 rounded-xl text-xs font-medium transition-all text-center flex items-center justify-center border cursor-pointer ${
                              isSelected
                                ? "bg-[#0D9488] border-[#0D9488] text-white font-semibold shadow-xs"
                                : "bg-[#F5F5F7] border-black/[0.08] text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#EBEBEF]"
                            }`}
                          >
                            <span>{tl}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 6: Project Description */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="description"
                        className="text-xs font-medium text-[#1D1D1F] tracking-tight block"
                      >
                        Tell us about your project <span className="text-[#0D9488]">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-[#6E6E73]">
                        {formData.description.length} chars
                      </span>
                    </div>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Briefly describe what your business does, your ideal website or AI automation goals, and any specific requirements..."
                      aria-invalid={!!errors.description}
                      className={`w-full p-4 rounded-xl bg-[#F5F5F7] border text-sm text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:bg-white transition-all resize-none leading-relaxed ${
                        errors.description
                          ? "border-red-500 focus:border-red-500"
                          : "border-black/[0.08] focus:border-[#0D9488] focus:ring-3 focus:ring-[#0D9488]/15"
                      }`}
                    />
                    {errors.description && (
                      <p role="alert" className="text-xs text-red-600">
                        {errors.description}
                      </p>
                    )}
                  </div>

                  {/* Submit Button (Apple Pill CTA) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-apple-primary w-full rounded-full h-12 sm:h-13 text-sm font-semibold tracking-tight shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99]"
                    >
                      {isLoading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting brief...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <ArrowUpRight className="w-4 h-4 text-teal-300" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy / Encryption Subtext */}
                  <div className="pt-1 text-center">
                    <span className="text-[11px] font-mono text-[#86868B]">
                      Protected by end-to-end encryption • We respect your privacy • Zero spam guarantee
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
