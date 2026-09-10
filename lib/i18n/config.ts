export const locales = ["pt", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** BCP 47 tag used on <html lang="..."> and Open Graph locale. */
export const HTML_LANG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES",
};

export const OG_LOCALE: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
};
