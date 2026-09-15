export const locales = [
  "pt",
  "en",
  "es",
  "fr",
  "de",
  "it",
  "zh",
  "ja",
  "ko",
  "sv",
  "fi",
  "ru",
  "ro",
  "he",
] as const;

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
  fr: "fr-FR",
  de: "de-DE",
  it: "it-IT",
  zh: "zh-CN",
  ja: "ja-JP",
  ko: "ko-KR",
  sv: "sv-SE",
  fi: "fi-FI",
  ru: "ru-RU",
  ro: "ro-RO",
  he: "he-IL",
};

export const OG_LOCALE: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
  it: "it_IT",
  zh: "zh_CN",
  ja: "ja_JP",
  ko: "ko_KR",
  sv: "sv_SE",
  fi: "fi_FI",
  ru: "ru_RU",
  ro: "ro_RO",
  he: "he_IL",
};
