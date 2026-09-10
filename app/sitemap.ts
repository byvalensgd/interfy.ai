import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { locales } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/planos", priority: 0.9, changeFrequency: "weekly" },
    { path: "/comece-gratis", priority: 0.9, changeFrequency: "monthly" },
    { path: "/segmentos", priority: 0.8, changeFrequency: "monthly" },
    { path: "/platform/agents", priority: 0.8, changeFrequency: "monthly" },
    { path: "/platform/documents", priority: 0.9, changeFrequency: "monthly" },
    { path: "/platform/process", priority: 0.9, changeFrequency: "monthly" },
    { path: "/platform/capture", priority: 0.9, changeFrequency: "monthly" },
    { path: "/platform/sign", priority: 0.9, changeFrequency: "monthly" },
    { path: "/platform/connect", priority: 0.9, changeFrequency: "monthly" },
    { path: "/platform/mobile", priority: 0.9, changeFrequency: "monthly" },
    { path: "/platform/voice", priority: 0.8, changeFrequency: "monthly" },
    { path: "/suporte", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contato", priority: 0.6, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
    { path: "/cases", priority: 0.6, changeFrequency: "monthly" },
    { path: "/status", priority: 0.4, changeFrequency: "daily" },
    { path: "/legal/termos", priority: 0.3, changeFrequency: "yearly" },
    { path: "/legal/privacidade", priority: 0.3, changeFrequency: "yearly" },
    { path: "/legal/lgpd", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${siteConfig.url}${withLocale(route.path, locale)}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, `${siteConfig.url}${withLocale(route.path, l)}`])),
          "x-default": `${siteConfig.url}${route.path}`,
        },
      },
    }))
  );
}
