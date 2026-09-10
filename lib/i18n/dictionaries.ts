import { cache } from "react";
import { lang } from "next/root-params";
import { locales, defaultLocale, isLocale, type Locale } from "./config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Dictionary = Record<Namespace, any>;

const NAMESPACES = [
  "common",
  "header",
  "footer",
  "home",
  "documents",
  "process",
  "capture",
  "sign",
  "connect",
  "agents",
  "mobile",
  "segments",
  "pricing",
  "testDrive",
  "voice",
  "suporte",
  "contato",
  "blog",
  "cases",
  "status",
  "legal",
] as const;

type Namespace = (typeof NAMESPACES)[number];

// Bundlers need statically analyzable import specifiers — no computed template paths.
const loaders: Record<Locale, Record<Namespace, () => Promise<{ default: unknown }>>> = {
  pt: {
    common: () => import("@/messages/pt/common.json"),
    header: () => import("@/messages/pt/header.json"),
    footer: () => import("@/messages/pt/footer.json"),
    home: () => import("@/messages/pt/home.json"),
    documents: () => import("@/messages/pt/documents.json"),
    process: () => import("@/messages/pt/process.json"),
    capture: () => import("@/messages/pt/capture.json"),
    sign: () => import("@/messages/pt/sign.json"),
    connect: () => import("@/messages/pt/connect.json"),
    agents: () => import("@/messages/pt/agents.json"),
    mobile: () => import("@/messages/pt/mobile.json"),
    segments: () => import("@/messages/pt/segments.json"),
    pricing: () => import("@/messages/pt/pricing.json"),
    testDrive: () => import("@/messages/pt/testDrive.json"),
    voice: () => import("@/messages/pt/voice.json"),
    suporte: () => import("@/messages/pt/suporte.json"),
    contato: () => import("@/messages/pt/contato.json"),
    blog: () => import("@/messages/pt/blog.json"),
    cases: () => import("@/messages/pt/cases.json"),
    status: () => import("@/messages/pt/status.json"),
    legal: () => import("@/messages/pt/legal.json"),
  },
  en: {
    common: () => import("@/messages/en/common.json"),
    header: () => import("@/messages/en/header.json"),
    footer: () => import("@/messages/en/footer.json"),
    home: () => import("@/messages/en/home.json"),
    documents: () => import("@/messages/en/documents.json"),
    process: () => import("@/messages/en/process.json"),
    capture: () => import("@/messages/en/capture.json"),
    sign: () => import("@/messages/en/sign.json"),
    connect: () => import("@/messages/en/connect.json"),
    agents: () => import("@/messages/en/agents.json"),
    mobile: () => import("@/messages/en/mobile.json"),
    segments: () => import("@/messages/en/segments.json"),
    pricing: () => import("@/messages/en/pricing.json"),
    testDrive: () => import("@/messages/en/testDrive.json"),
    voice: () => import("@/messages/en/voice.json"),
    suporte: () => import("@/messages/en/suporte.json"),
    contato: () => import("@/messages/en/contato.json"),
    blog: () => import("@/messages/en/blog.json"),
    cases: () => import("@/messages/en/cases.json"),
    status: () => import("@/messages/en/status.json"),
    legal: () => import("@/messages/en/legal.json"),
  },
  es: {
    common: () => import("@/messages/es/common.json"),
    header: () => import("@/messages/es/header.json"),
    footer: () => import("@/messages/es/footer.json"),
    home: () => import("@/messages/es/home.json"),
    documents: () => import("@/messages/es/documents.json"),
    process: () => import("@/messages/es/process.json"),
    capture: () => import("@/messages/es/capture.json"),
    sign: () => import("@/messages/es/sign.json"),
    connect: () => import("@/messages/es/connect.json"),
    agents: () => import("@/messages/es/agents.json"),
    mobile: () => import("@/messages/es/mobile.json"),
    segments: () => import("@/messages/es/segments.json"),
    pricing: () => import("@/messages/es/pricing.json"),
    testDrive: () => import("@/messages/es/testDrive.json"),
    voice: () => import("@/messages/es/voice.json"),
    suporte: () => import("@/messages/es/suporte.json"),
    contato: () => import("@/messages/es/contato.json"),
    blog: () => import("@/messages/es/blog.json"),
    cases: () => import("@/messages/es/cases.json"),
    status: () => import("@/messages/es/status.json"),
    legal: () => import("@/messages/es/legal.json"),
  },
};

async function loadLocale(locale: Locale): Promise<Dictionary> {
  const entries = await Promise.all(
    NAMESPACES.map(async (ns) => {
      const mod = await loaders[locale][ns]();
      return [ns, mod.default] as const;
    })
  );
  return Object.fromEntries(entries) as Dictionary;
}

/** Resolves the current route's locale from the `[lang]` root param. */
export const getLocale = cache(async (): Promise<Locale> => {
  const l = await lang();
  return isLocale(l ?? "") ? (l as Locale) : defaultLocale;
});

/** For use in Server Components nested under `app/[lang]` — no prop drilling needed. */
export const getDictionary = cache(async (): Promise<Dictionary> => {
  const locale = await getLocale();
  return loadLocale(locale);
});

/** For contexts without root params (sitemap, robots, static generation loops). */
export const getDictionaryFor = cache(async (locale: Locale): Promise<Dictionary> => loadLocale(locale));

export { locales, defaultLocale, isLocale };
export type { Locale };
