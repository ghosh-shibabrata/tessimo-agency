import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
          "Googlebot",
          "Bingbot",
          "Applebot",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://tessimo.agency/sitemap.xml",
  };
}
