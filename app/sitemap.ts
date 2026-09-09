import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/planos", priority: 0.9, changeFrequency: "weekly" },
    { path: "/comece-gratis", priority: 0.9, changeFrequency: "monthly" },
    { path: "/segmentos", priority: 0.8, changeFrequency: "monthly" },
    { path: "/platform/agents", priority: 0.8, changeFrequency: "monthly" },
    { path: "/platform/documents", priority: 0.9, changeFrequency: "monthly" },
    { path: "/platform/process", priority: 0.9, changeFrequency: "monthly" },
    { path: "/platform/capture", priority: 0.9, changeFrequency: "monthly" },
    { path: "/platform/sign", priority: 0.9, changeFrequency: "monthly" },
    { path: "/platform/connect", priority: 0.9, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
