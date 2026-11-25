"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  BookOpen,
  X,
  Share2,
  CheckCircle2,
  Sparkles,
  Zap,
  Bot,
  Layers,
} from "lucide-react";

interface Article {
  id: string;
  tag: string;
  category: string;
  title: string;
  readTime: string;
  date: string;
  excerpt: string;
  icon: React.ElementType;
  content: {
    lead: string;
    sections: {
      heading: string;
      body: string[];
    }[];
    takeaways: string[];
    statHighlight: {
      number: string;
      label: string;
    };
  };
}

const ARTICLES: Article[] = [
  {
    id: "60-second-rule",
    tag: "01 // CONVERSION AI",
    category: "AI AUTOMATION & SYSTEMS",
    title: "The 60-Second Rule: Why Businesses Lose 68% of Inbound Customers After 6 PM",
    readTime: "4 min read",
    date: "Nov 2026",
    excerpt:
      "Most businesses spend thousands driving qualified traffic, only to lose 68% of leads because inquiries arrive outside office hours. Here is how 24/7 autonomous ingestion captures them instantly.",
    icon: Bot,
    content: {
      lead:
        "Customer patience has evaporated. In modern B2B and high-ticket service industries, a prospect who submits an inquiry expects an answer within minutes. When that inquiry sits in an unattended inbox until 9:30 AM the next morning, the buyer has already contacted your competitor.",
      sections: [
        {
          heading: "The Anatomy of the After-Hours Drop-Off",
          body: [
            "Data across over 100 client funnels reveals that 52% to 68% of commercial search inquiries occur between 6:00 PM and 11:30 PM, or on weekends. High-intent decision makers browse when their workday meetings end.",
            "If your website relies solely on a static 'We will get back to you in 24 hours' contact form, your conversion velocity drops off a cliff. The prospect's dopamine loop fades, and friction takes over.",
          ],
        },
        {
          heading: "Replacing Static Forms with 24/7 Autonomous Ingestion",
          body: [
            "Autonomous systems do not sleep. When a prospect lands on your platform at 10:15 PM, an integrated AI agent immediately greets them on WhatsApp or webchat, answers product or service questions with zero hallucinations, and qualifies their budget scope.",
            "Within 45 seconds, the prospect is provided a live calendar link to lock a 15-minute consultation directly on your Google Calendar or Cal.com, while CRM records are synchronized in real time.",
          ],
        },
        {
          heading: "Measurable Business Impact",
          body: [
            "Clients transitioning from static contact forms to 24/7 autonomous WhatsApp ingestion experience an average 3.4x surge in booked consultations without spending a single additional dollar on paid advertising.",
          ],
        },
      ],
      takeaways: [
        "Over 60% of high-intent B2B inquiries occur outside traditional working hours.",
        "Response times under 60 seconds yield 7x higher qualification rates than responses delayed by 1 hour.",
        "Automated WhatsApp qualification removes human scheduling friction entirely.",
      ],
      statHighlight: {
        number: "3.4x",
        label: "Average increase in qualified consultations captured after deploying 24/7 autonomous ingestion.",
      },
    },
  },
  {
    id: "nextjs-vs-wordpress",
    tag: "02 // SPEED & ARCHITECTURE",
    category: "WEB ARCHITECTURE & PERFORMANCE",
    title: "Next.js 15 vs Legacy WordPress: Why Modern Brands Are Ditching Bloated CMS",
    readTime: "3 min read",
    date: "Nov 2026",
    excerpt:
      "Sub-second page speeds directly correlate with double-digit conversion gains. A technical breakdown of why enterprise TypeScript platforms consistently outperform 15-year-old PHP plugin ecosystems.",
    icon: Zap,
    content: {
      lead:
        "Every 100 milliseconds of latency costs businesses 1% in conversion revenue. In an era where mobile users demand instant rendering, traditional WordPress sites overloaded with 35 third-party plugins are bleeding customer revenue every single day.",
      sections: [
        {
          heading: "The Plugin Debt Trap",
          body: [
            "Legacy CMS platforms were engineered in the early 2000s for static blogs. As businesses bolt on page builders, CRM connectors, security scanners, and caching plugins, server response times (TTFB) degrade to 1.8–3.2 seconds.",
            "On mobile 4G/5G connections, this results in jarring layout shifts (CLS) and frustrated visitors bouncing before the hero section finishes painting.",
          ],
        },
        {
          heading: "The Next.js 15 Edge Advantage",
          body: [
            "At Tessimo, we build using Next.js 15 App Router, React 19, and Tailwind CSS. Static assets are delivered instantly from global edge CDNs within 0.15–0.30 seconds worldwide.",
            "By eliminating the bloated SQL database query waterfall on every page request, your mobile Core Web Vitals score hits 95–100, elevating your organic Google rank and lowering paid customer acquisition costs (CAC).",
          ],
        },
      ],
      takeaways: [
        "A 1-second delay in mobile page speed reduces visitor conversion rates by up to 20%.",
        "Next.js edge compute delivers sub-second global responses without fragile plugin dependencies.",
        "Strictly-typed TypeScript architecture provides enterprise security with zero SQL injection risks.",
      ],
      statHighlight: {
        number: "0.28s",
        label: "Average global mobile page load speed achieved on Tessimo Next.js platforms.",
      },
    },
  },
  {
    id: "5-day-sprint",
    tag: "03 // METHODOLOGY",
    category: "STUDIO METHODOLOGY",
    title: "The 5-Day Web Sprint: How We Build High-Converting Platforms Without 3-Month Delays",
    readTime: "3 min read",
    date: "Nov 2026",
    excerpt:
      "Traditional agency timelines are filled with endless slide decks and bureaucratic meetings. Inside our agile sprint framework: direct code prototyping, live staging previews, and zero fluff.",
    icon: Layers,
    content: {
      lead:
        "Why does a traditional agency take 12 weeks to deliver a 5-page website? Because 70% of their billable hours are spent in internal account management meetings, lengthy email chains, and bureaucratic approvals. We redesigned the delivery model from the ground up.",
      sections: [
        {
          heading: "Prototyping in Production Code",
          body: [
            "Instead of spending three weeks in static Figma mockups that fail to demonstrate real interaction physics, we move directly into production code on Day 2.",
            "Clients receive private staging links where they can test real mobile responsiveness, fluid transitions, and actual intake forms directly on their own phones.",
          ],
        },
        {
          heading: "Milestone-Driven Momentum",
          body: [
            "Day 1: Architectural audit, conversion wireframes, and brand asset ingestion.",
            "Days 2–3: Next.js frontend engineering, bespoke micro-interactions, and mobile tuning.",
            "Day 4: AI automation hooks, WhatsApp/CRM sync, and technical SEO schema deployment.",
            "Day 5: Verification hypercare, live domain DNS migration, and complete code handoff.",
          ],
        },
      ],
      takeaways: [
        "Direct code prototyping eliminates weeks of design-to-development translation friction.",
        "Private staging links let founders test live on their actual mobile devices from Day 2.",
        "100% intellectual property, GitHub repository, and deployment keys are transferred on handoff.",
      ],
      statHighlight: {
        number: "5 Days",
        label: "From initial brief ingestion to verified live production launch for Starter platforms.",
      },
    },
  },
];

export function BlogSection() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <section
      id="blog"
      className="relative w-full bg-[#FBFBFD] py-16 sm:py-24 lg:py-32 overflow-hidden scroll-mt-14"
    >
      {/* Structural Hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ==============================================================
            SECTION HEADER
           ============================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-xs font-mono font-medium text-[#1D1D1F] tracking-wide shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
              <span>PERSPECTIVES & ENGINEERING NOTES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-[#1D1D1F] leading-[1.08] break-words">
              Actionable insights. <br />
              <span className="text-[#6E6E73]">Engineered for business momentum.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#6E6E73] font-normal leading-relaxed pt-1">
              Field notes, conversion telemetry, and architectural blueprints from the frontlines of modern web engineering and autonomous AI systems.
            </p>
          </div>

          <div className="shrink-0">
            <span className="text-xs font-mono text-[#86868B] uppercase tracking-wider block">
              Curated by Tessimo Research
            </span>
          </div>
        </div>

        {/* ==============================================================
            3-COLUMN EDITORIAL ARTICLE CARDS
           ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => {
            const IconComp = article.icon;

            return (
              <div
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="apple-card rounded-[24px] sm:rounded-[28px] bg-white border border-black/[0.08] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-black/[0.14] cursor-pointer group relative"
              >
                <div className="space-y-4">
                  {/* Category Pill & Read Time */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F5F5F7] border border-black/[0.06] text-[10px] font-mono font-semibold text-[#0D9488]">
                      <span>{article.tag}</span>
                    </span>

                    <span className="text-[11px] font-mono text-[#86868B] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#86868B]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-base sm:text-lg font-semibold text-[#1D1D1F] tracking-tight leading-snug group-hover:text-[#0D9488] transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-[#6E6E73] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-5 mt-4 border-t border-black/[0.06] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#1D1D1F] group-hover:text-[#0D9488] transition-colors flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>

                  <span className="text-[11px] font-mono text-[#86868B]">
                    {article.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ==============================================================
          INTERACTIVE ARTICLE READING MODAL (SILKY SMOOTH DRAWER)
         ============================================================== */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 24 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative w-full max-w-[720px] h-[92vh] sm:h-[85vh] max-h-[800px] bg-[#FBFBFD] rounded-t-[28px] sm:rounded-[28px] border-t sm:border border-black/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden"
            >
              {/* Header Bar */}
              <div className="px-5 py-4 bg-white/90 backdrop-blur-md border-b border-black/[0.06] flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#0D9488]/10 text-[#0D9488] border border-[#0D9488]/20">
                    {activeArticle.category}
                  </span>
                  <span className="text-xs font-mono text-[#86868B]">
                    • {activeArticle.readTime}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-full text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-black/[0.05] transition-colors cursor-pointer"
                  aria-label="Close article"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Editorial Article Content */}
              <div className="flex-1 p-6 sm:p-9 overflow-y-auto space-y-6">
                
                {/* Article Title */}
                <div className="space-y-3 pb-4 border-b border-black/[0.08]">
                  <h1 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight leading-snug">
                    {activeArticle.title}
                  </h1>

                  <div className="flex items-center justify-between text-xs text-[#86868B] font-mono">
                    <span>By Shibabrata Ghosh • Tessimo Studio</span>
                    <span>Published {activeArticle.date}</span>
                  </div>
                </div>

                {/* Lead Paragraph */}
                <p className="text-sm sm:text-base text-[#1D1D1F] font-medium leading-relaxed bg-[#F5F5F7] p-4 sm:p-5 rounded-2xl border border-black/[0.04]">
                  {activeArticle.content.lead}
                </p>

                {/* Stat Highlight Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-50/60 to-emerald-50/40 border border-teal-200/60 flex items-center gap-4">
                  <div className="text-3xl sm:text-4xl font-mono font-bold text-[#0D9488] shrink-0">
                    {activeArticle.content.statHighlight.number}
                  </div>
                  <p className="text-xs sm:text-sm text-[#1D1D1F] font-medium leading-snug">
                    {activeArticle.content.statHighlight.label}
                  </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-6 pt-2">
                  {activeArticle.content.sections.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                      <h3 className="text-base sm:text-lg font-semibold text-[#1D1D1F] tracking-tight">
                        {section.heading}
                      </h3>
                      {section.body.map((p, pIdx) => (
                        <p key={pIdx} className="text-sm text-[#6E6E73] leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Key Takeaways Box */}
                <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-3">
                  <h4 className="text-xs font-mono font-semibold text-[#1D1D1F] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>KEY ARCHITECTURAL TAKEAWAYS</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[#6E6E73]">
                    {activeArticle.content.takeaways.map((point, ptIdx) => (
                      <li key={ptIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Callout at end of article */}
                <div className="p-6 rounded-2xl bg-[#1D1D1F] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold tracking-tight">
                      Ready to deploy this architecture?
                    </h4>
                    <p className="text-xs text-white/70">
                      We build sub-second platforms and 24/7 AI systems in days, not months.
                    </p>
                  </div>

                  <Link
                    href="#contact"
                    onClick={() => setActiveArticle(null)}
                    className="btn-apple-white !py-2 !px-4 text-xs font-semibold shrink-0"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-3 h-3 text-[#0D9488]" />
                  </Link>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
