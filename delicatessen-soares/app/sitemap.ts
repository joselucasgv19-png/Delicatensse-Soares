import type { MetadataRoute } from "next";
import { NAV_ITEMS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://delicatessensoares.vercel.app";
  return NAV_ITEMS.map((item) => ({
    url: `${base}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
