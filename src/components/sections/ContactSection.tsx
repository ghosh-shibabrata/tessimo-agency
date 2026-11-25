"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, Send, Sparkles } from "lucide-react";

type ServiceType = "Website" | "AI Automation" | "Website + AI" | "Custom Scope";
type TimelineType = "< 1 Week" | "1–3 Weeks" | "Flexible";
type ScopeType = "< $500 (Under ₹25k)" | "$500–$1,500 (₹25k–₹75k)" | "$1,500+ / Custom";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: ServiceType;
  timeline: TimelineType;
  scope: ScopeType;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  description?: string;
  general?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "Website + AI",
    timeline: "< 1 Week",
    scope: "< $500 (Under ₹25k)",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);

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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setSubmittedLeadId(data.leadId || "LEAD-CONFIRMED");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrors((prev) => ({ ...prev, general: message }));
    } finally {
      setIsLoading(false);
    }
  };

  const services: ServiceType[] = ["Website", "AI Automation", "Website + AI", "Custom Scope"];
  const timelines: TimelineType[] = ["< 1 Week", "1–3 Weeks", "Flexible"];
  const scopes: ScopeType[] = [
    "< $500 (Under ₹25k)",
    "$500–$1,500 (₹25k–₹75k)",
    "$1,500+ / Custom",
  ];

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
          background: "radial-gradient(ellipse 65% 55% at 50% 90%, rgba(13, 148, 136, 0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ==============================================================
              LEFT COLUMN: Apple Editorial Narrative
             ============================================================== */}
          <div className="lg:col-span-5 space-y-8 lg:pr-4">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-xs font-medium text-[#1D1D1F] tracking-wide shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                <span>09 // START A CONVERSATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-[#1D1D1F] leading-[1.08] break-words">
                Ready to grow? <br />
                <span className="text-[#6E6E73]">Let&apos;s talk business.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#6E6E73] max-w-md font-normal leading-relaxed">
              Tell us what you&apos;re looking to build, improve, or automate. We&apos;ll analyze your goals and share a clear roadmap with zero pressure.
            </p>

            {/* Direct Studio Channels */}
            <div className="space-y-5 pt-6 border-t border-black/[0.08]">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#6E6E73] uppercase tracking-wider block font-semibold">
                  DIRECT INQUIRIES
                </span>
                <a
                  href="mailto:hello@tessimo.in"
                  className="text-sm font-mono text-[#1D1D1F] font-medium hover:text-[#0D9488] transition-colors"
                >
                  hello@tessimo.in
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-[#6E6E73] uppercase tracking-wider block font-semibold">
                  GLOBAL CLIENT SUPPORT
                </span>
                <p className="text-sm font-mono text-[#6E6E73]">
                  Remote Worldwide • Mon—Fri (24/7 Automated Ingestion)
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#0D9488] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
                <span>RESPONSE PROTOCOL: UNDER 2 BUSINESS HOURS</span>
              </div>
            </div>
          </div>

          {/* ==============================================================
              RIGHT COLUMN: Apple Pro Intake Form Card
             ============================================================== */}
          <div className="lg:col-span-7">
            <div className="apple-card rounded-[28px] sm:rounded-[36px] bg-white border border-black/[0.08] shadow-[0_12px_44px_rgba(0,0,0,0.06)] p-7 sm:p-10 relative overflow-hidden">
              
              {submittedLeadId ? (
                /* SUCCESS STATE */
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#0D9488]/10 border border-[#0D9488]/30 flex items-center justify-center mx-auto text-[#0D9488]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-[#1D1D1F] tracking-tight">
                      Inquiry Received Successfully
                    </h3>
                    <p className="text-sm text-[#6E6E73] max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-[#1D1D1F] font-semibold">{formData.name}</span>. Your brief has been registered under reference <span className="text-[#0D9488] font-mono font-semibold">{submittedLeadId}</span>. We will review your goals and get back to you shortly.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSubmittedLeadId(null);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        service: "Website + AI",
                        timeline: "< 1 Week",
                        scope: "< $500 (Under ₹25k)",
                        description: "",
                      });
                    }}
                    className="btn-apple-secondary text-xs font-medium"
                  >
                    <span>Submit another inquiry</span>
                  </button>
                </div>
              ) : (
                /* ACTIVE FORM */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* General Error Alert */}
                  {errors.general && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700"
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
                        className="text-xs font-medium text-[#1D1D1F] tracking-tight block"
                      >
                        Your Name <span className="text-[#0D9488]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Marcus Vance"
                        aria-invalid={!!errors.name}
                        className={`w-full h-11 px-4 rounded-xl bg-[#F5F5F7] border text-sm text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:bg-white transition-colors ${
                          errors.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-black/[0.08] focus:border-[#1D1D1F] focus:ring-1 focus:ring-[#1D1D1F]"
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
                          className="text-xs font-medium text-[#1D1D1F] tracking-tight block"
                        >
                          Business Email <span className="text-[#0D9488]">*</span>
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
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="marcus@company.com"
                          aria-invalid={!!errors.email}
                          className={`w-full h-11 px-4 pr-8 rounded-xl bg-[#F5F5F7] border text-sm text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:bg-white transition-colors ${
                            errors.email
                              ? "border-red-500 focus:border-red-500"
                              : "border-black/[0.08] focus:border-[#1D1D1F] focus:ring-1 focus:ring-[#1D1D1F]"
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

                  {/* Row 2: Company Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="company"
                      className="text-xs font-medium text-[#1D1D1F] tracking-tight block"
                    >
                      Company Name <span className="text-[#6E6E73] text-[11px]">(optional)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Growth Corp"
                      className="w-full h-11 px-4 rounded-xl bg-[#F5F5F7] border border-black/[0.08] text-sm text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:bg-white focus:border-[#1D1D1F] focus:ring-1 focus:ring-[#1D1D1F] transition-colors"
                    />
                  </div>

                  {/* Row 3: Area of Focus as Apple Pills */}
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
                            className={`h-10 px-3 rounded-full text-xs font-medium transition-all text-center flex items-center justify-center border ${
                              isSelected
                                ? "bg-[#1D1D1F] text-white border-[#1D1D1F] shadow-sm font-semibold"
                                : "bg-[#F5F5F7] border-black/[0.08] text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#EBEBEF]"
                            }`}
                          >
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Timeline & Investment Scope */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-[#1D1D1F] tracking-tight block">
                        Target Timeline
                      </label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {timelines.map((tl) => {
                          const isSelected = formData.timeline === tl;
                          return (
                            <button
                              key={tl}
                              type="button"
                              onClick={() => setFormData({ ...formData, timeline: tl })}
                              className={`h-9 px-2 rounded-full text-[11px] font-medium transition-all text-center flex items-center justify-center border truncate ${
                                isSelected
                                  ? "bg-[#0D9488]/15 border-[#0D9488] text-[#0D9488] font-semibold"
                                  : "bg-[#F5F5F7] border-black/[0.08] text-[#6E6E73] hover:text-[#1D1D1F]"
                              }`}
                            >
                              {tl}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium text-[#1D1D1F] tracking-tight block">
                        Estimated Budget
                      </label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {scopes.map((sc) => {
                          const isSelected = formData.scope === sc;
                          return (
                            <button
                              key={sc}
                              type="button"
                              onClick={() => setFormData({ ...formData, scope: sc })}
                              className={`h-9 px-2 rounded-full text-[11px] font-medium transition-all text-center flex items-center justify-center border truncate ${
                                isSelected
                                  ? "bg-[#0D9488]/15 border-[#0D9488] text-[#0D9488] font-semibold"
                                  : "bg-[#F5F5F7] border-black/[0.08] text-[#6E6E73] hover:text-[#1D1D1F]"
                              }`}
                            >
                              {sc}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Row 5: Project Description */}
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
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Briefly describe what your business does and what you'd like to improve or automate..."
                      aria-invalid={!!errors.description}
                      className={`w-full p-4 rounded-xl bg-[#F5F5F7] border text-sm text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:bg-white transition-colors resize-none leading-relaxed ${
                        errors.description
                          ? "border-red-500 focus:border-red-500"
                          : "border-black/[0.08] focus:border-[#1D1D1F] focus:ring-1 focus:ring-[#1D1D1F]"
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
                      className="btn-apple-primary w-full rounded-full h-12 text-sm font-semibold tracking-tight shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isLoading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send project inquiry</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy / Encryption Subtext */}
                  <div className="pt-1 text-center">
                    <span className="text-[11px] font-mono text-[#6E6E73]">
                      Protected by end-to-end encryption • We respect your privacy
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
