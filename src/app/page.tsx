import React from "react";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsBar } from "@/components/sections/MetricsBar";
import { StatementSection } from "@/components/sections/StatementSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { AutomationShowcase } from "@/components/sections/AutomationShowcase";
import { TechEcosystemSection } from "@/components/sections/TechEcosystemSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { EngagementModelsSection } from "@/components/sections/EngagementModelsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="w-full bg-[#FBFBFD] overflow-x-hidden">
      {/* 2-Second Apple Loading Experience */}
      <LoadingScreen />

      {/* 01. Flagship Apple Pro Keynote Hero */}
      <HeroSection />

      {/* 02. Proven Impact & Client ROI Telemetry */}
      <MetricsBar />

      {/* 03. Manifesto & Philosophical Visual Pause */}
      <StatementSection />

      {/* 04. Executive Leadership & Founder Commitment */}
      <FounderSection />

      {/* 05. Core Disciplines & Bento Grid Highlights */}
      <ServicesSection />

      {/* 06. Flagship Selected Work & Case Studies */}
      <SelectedWorkSection />

      {/* 07. Apple Intelligence Interactive Automation Pipeline */}
      <AutomationShowcase />

      {/* 08. Autonomous Tech Stack & Partner Ecosystem */}
      <TechEcosystemSection />

      {/* 09. Full Specification & Capability Matrix */}
      <CapabilitiesSection />

      {/* 10. Structured 4-Milestone Client Process */}
      <ProcessSection />

      {/* 11. Transparent Engagement & Investment Models */}
      <EngagementModelsSection />

      {/* 12. Editorial Insights & Engineering Perspectives */}
      <BlogSection />

      {/* 13. Architectural Advisory & Enterprise FAQ */}
      <FaqSection />

      {/* 14. Apple Consultation Intake & Contact */}
      <ContactSection />
    </main>
  );
}
