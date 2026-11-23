import React from "react";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsBar } from "@/components/sections/MetricsBar";
import { StatementSection } from "@/components/sections/StatementSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { AutomationShowcase } from "@/components/sections/AutomationShowcase";
import { TechEcosystemSection } from "@/components/sections/TechEcosystemSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { EngagementModelsSection } from "@/components/sections/EngagementModelsSection";
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

      {/* 04. Core Disciplines & Bento Grid Highlights */}
      <ServicesSection />

      {/* 05. Flagship Selected Work & Case Studies */}
      <SelectedWorkSection />

      {/* 06. Apple Intelligence Interactive Automation Pipeline */}
      <AutomationShowcase />

      {/* 07. Autonomous Tech Stack & Partner Ecosystem */}
      <TechEcosystemSection />

      {/* 08. Full Specification & Capability Matrix */}
      <CapabilitiesSection />

      {/* 09. Structured 4-Milestone Client Process */}
      <ProcessSection />

      {/* 10. Transparent Engagement & Investment Models */}
      <EngagementModelsSection />

      {/* 11. Architectural Advisory & Enterprise FAQ */}
      <FaqSection />

      {/* 12. Apple Consultation Intake & Contact */}
      <ContactSection />
    </main>
  );
}
