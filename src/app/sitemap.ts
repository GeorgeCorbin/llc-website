import type { MetadataRoute } from "next";
import { featureFlags } from "@/config/featureFlags";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.corbinsw.com";

const staticPages = [
  { path: "", changefreq: "weekly", priority: 1 },
];

const featurePages: Array<{ feature: keyof typeof featureFlags; path: string }> = [
  { feature: "services", path: "services" },
  { feature: "pricing", path: "pricing" },
  { feature: "portfolio", path: "portfolio" },
  { feature: "about", path: "about" },
  { feature: "contact", path: "contact" },
  { feature: "privacy", path: "privacy" },
  { feature: "terms", path: "terms" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ...staticPages,
    ...featurePages
      .filter(({ feature }) => featureFlags[feature])
      .map(({ path }) => ({ path, changefreq: "monthly", priority: 0.7 })),
  ];

  return pages.map(({ path, changefreq, priority }) => ({
    url: `${BASE_URL}/${path}`.replace(/\/$/, ""),
    lastModified: new Date(),
    changeFrequency: changefreq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority,
  }));
}
