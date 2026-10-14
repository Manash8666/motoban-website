import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://motoban.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/telemetry", "/api/webhooks/"],
      },
      // Explicitly allow leading AI search & answer engines for AEO & GEO citation
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "Applebot-Extended",
          "Googlebot",
          "Bingbot",
          "DuckDuckBot",
          "CCBot",
        ],
        allow: ["/", "/features", "/pricing", "/docs", "/contact", "/eula", "/llms.txt", "/llms-full.txt"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
