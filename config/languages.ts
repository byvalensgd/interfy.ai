import type { Locale } from "@/lib/i18n/config";

export type LanguageOption = {
  locale: Locale;
  label: string;
  flag: string;
  aspectW: number;
  aspectH: number;
  compactLabel: string;
  /** Text direction of this language's script — drives the RTL toggle. */
  dir: "ltr" | "rtl";
};

/**
 * Português, English, and Español are the site's base languages and always
 * sit at the top of the dropdown; the rest follow in the order below.
 */
export const LANGUAGES: LanguageOption[] = [
  { locale: "pt", label: "Português (BR)", flag: "/flags/flag-br.svg", aspectW: 512, aspectH: 512, compactLabel: "BR", dir: "ltr" },
  { locale: "en", label: "English (USA)", flag: "/flags/flag-usa-30px.svg", aspectW: 18, aspectH: 18, compactLabel: "EN", dir: "ltr" },
  { locale: "es", label: "Español", flag: "/flags/flag-es.svg", aspectW: 22, aspectH: 22, compactLabel: "ES", dir: "ltr" },
  { locale: "fr", label: "Français", flag: "/flags/flag-fr.svg", aspectW: 30, aspectH: 30, compactLabel: "FR", dir: "ltr" },
  { locale: "de", label: "Deutsch", flag: "/flags/flag-de.svg", aspectW: 306.6, aspectH: 306.7, compactLabel: "DE", dir: "ltr" },
  { locale: "it", label: "Italiano", flag: "/flags/flag-it.svg", aspectW: 30, aspectH: 30, compactLabel: "IT", dir: "ltr" },
  { locale: "zh", label: "中文", flag: "/flags/flag-zh.svg", aspectW: 512, aspectH: 512, compactLabel: "中文", dir: "ltr" },
  { locale: "ja", label: "日本語", flag: "/flags/flag-ja.svg", aspectW: 512, aspectH: 512, compactLabel: "日本語", dir: "ltr" },
  { locale: "ko", label: "한국어", flag: "/flags/flag-ko.svg", aspectW: 374, aspectH: 374, compactLabel: "한국어", dir: "ltr" },
  { locale: "sv", label: "Svenska", flag: "/flags/flag-sv.svg", aspectW: 512, aspectH: 512, compactLabel: "SV", dir: "ltr" },
  { locale: "fi", label: "Suomi", flag: "/flags/flag-fi.svg", aspectW: 512, aspectH: 512, compactLabel: "FI", dir: "ltr" },
  { locale: "ru", label: "Русский", flag: "/flags/flag-ru.svg", aspectW: 512, aspectH: 512, compactLabel: "RU", dir: "ltr" },
  { locale: "ro", label: "Română", flag: "/flags/flag-ro.svg", aspectW: 326, aspectH: 326, compactLabel: "RO", dir: "ltr" },
  { locale: "he", label: "עברית", flag: "/flags/flag-he.svg", aspectW: 512, aspectH: 512, compactLabel: "HE", dir: "rtl" },
];

export const LANGUAGE_INFO: Record<Locale, LanguageOption> = Object.fromEntries(
  LANGUAGES.map((l) => [l.locale, l])
) as Record<Locale, LanguageOption>;
