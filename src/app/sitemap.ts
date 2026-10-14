import { MetadataRoute } from "next";
import { SOLUTIONS_DATA } from "@/lib/solutionsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://motoban.in";
  const currentDate = new Date().toISOString();

  const coreRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/eula`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Programmatic SEO Dedicated Landing Hubs (/solutions/[slug])
  const solutionRoutes = Object.keys(SOLUTIONS_DATA).map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Programmatic SEO landing anchors
  const programmaticSections = [
    "two-wheeler-workshops",
    "car-service-centers",
    "detailing-studios",
    "spare-parts-dealers",
    "ev-service-hubs",
  ].map((slug) => ({
    url: `${baseUrl}/features#${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...coreRoutes, ...solutionRoutes, ...programmaticSections];
}
