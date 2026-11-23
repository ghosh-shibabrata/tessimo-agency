import React from "react";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://tessimo.agency/#organization",
    name: "Tessimo",
    alternateName: "Tessimo Agency",
    legalName: "Tessimo Agency Inc.",
    url: "https://tessimo.agency",
    logo: "https://tessimo.agency/favicon.ico",
    description:
      "Tessimo is an award-winning creative technology and AI automation agency engineering bespoke digital experiences, autonomous AI agents, and workflow integrations for forward-thinking enterprises.",
    slogan: "Less manual. More momentum.",
    email: "hello@tessimo.studio",
    priceRange: "$$",
    currenciesAccepted: "USD, EUR, GBP, INR",
    paymentAccepted: "Credit Card, Wire Transfer, Stripe",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressLocality: "San Francisco",
      addressRegion: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.7749",
      longitude: "-122.4194",
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Global / Worldwide",
      },
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "United Kingdom",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    knowsAbout: [
      "AI Automation",
      "Next.js 16 Web Development",
      "Autonomous AI Agents",
      "Workflow Automation",
      "CRM Integrations",
      "Voice AI Systems",
      "Creative Technology",
      "Enterprise Digital Platforms",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tessimo Agency Services & Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Experiences & Website Development",
            description:
              "Bespoke Next.js 16 web development, editorial brand design systems, and sub-second loading architectures.",
          },
          price: "2400.00",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Autonomous AI Agents & Intelligent Systems",
            description:
              "Custom conversational and voice AI agents, multi-tool API orchestration, and vector knowledge stores.",
          },
          price: "4800.00",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Enterprise Dedicated Architecture Retainer",
            description:
              "Dedicated engineering squad for continuous model fine-tuning, automated pipelines, and priority 24/7 SLA monitoring.",
          },
          price: "2500.00",
          priceCurrency: "USD",
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who owns the intellectual property, design assets, and custom code built by Tessimo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "100% of all custom frontend code, design systems, database schemas, and automated workflow configurations belong entirely to your company upon final delivery. There are zero proprietary vendor lock-ins and zero recurring license fees.",
        },
      },
      {
        "@type": "Question",
        name: "How does Tessimo ensure enterprise data privacy and security with AI models?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tessimo enforces strict enterprise data boundaries. Your internal corporate data and customer interactions are never used to train public foundation models. All vector embeddings, API webhooks, and database instances are provisioned within encrypted SOC-2 and HIPAA-compliant private environments.",
        },
      },
      {
        "@type": "Question",
        name: "Can our in-house technical team maintain and extend the system after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Tessimo builds using strictly-typed TypeScript on Next.js 16 with standard modular architecture. At launch, comprehensive API documentation, environment runbooks, and a dedicated live technical handoff session are provided.",
        },
      },
      {
        "@type": "Question",
        name: "What is the typical timeline from discovery to production deployment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "High-converting landing page experiences and standalone AI workflow integrations typically launch within 2 to 4 weeks. Full-scale digital platform redesigns and complex multi-tool autonomous systems generally ship in 4 to 8 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "What support and telemetry monitoring does Tessimo provide after going live?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every project includes 30 days of comprehensive production hypercare with real-time error telemetry monitoring, followed by optional quarterly optimization retainers.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
