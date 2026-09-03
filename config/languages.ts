import type { Lang } from "@/context/LanguageContext";

export type LanguageOption = {
  code: string;
  label: string;
  flag: string;
  aspectW: number;
  aspectH: number;
  langCode: Lang;
};

export const LANGUAGES: LanguageOption[] = [
  { code: "pt-br", label: "Português (BR)", flag: "/flags/flag-br.svg", aspectW: 512, aspectH: 512, langCode: "pt" },
  { code: "en-gb", label: "English (England)", flag: "/flags/flag-uk.svg", aspectW: 20, aspectH: 20, langCode: "en-gb" },
  { code: "en", label: "English (USA)", flag: "/flags/flag-usa-30px.svg", aspectW: 18, aspectH: 18, langCode: "en" },
  { code: "pt-pt", label: "Português (Portugal)", flag: "/flags/flag-pt.svg", aspectW: 1, aspectH: 1, langCode: "pt-pt" },
  { code: "es", label: "Español", flag: "/flags/flag-es.svg", aspectW: 22, aspectH: 22, langCode: "es" },
  { code: "fr", label: "Français", flag: "/flags/flag-fr.svg", aspectW: 30, aspectH: 30, langCode: "fr" },
  { code: "de", label: "Deutsch", flag: "/flags/flag-de.svg", aspectW: 306.6, aspectH: 306.7, langCode: "de" },
  { code: "it", label: "Italiano", flag: "/flags/flag-it.svg", aspectW: 30, aspectH: 30, langCode: "it" },
  { code: "zh", label: "中文", flag: "/flags/flag-zh.svg", aspectW: 512, aspectH: 512, langCode: "zh" },
  { code: "ja", label: "日本語", flag: "/flags/flag-ja.svg", aspectW: 512, aspectH: 512, langCode: "ja" },
  { code: "ko", label: "한국어", flag: "/flags/flag-ko.svg", aspectW: 374, aspectH: 374, langCode: "ko" },
  { code: "sv", label: "Svenska", flag: "/flags/flag-sv.svg", aspectW: 512, aspectH: 512, langCode: "sv" },
  { code: "fi", label: "Suomi", flag: "/flags/flag-fi.svg", aspectW: 512, aspectH: 512, langCode: "fi" },
  { code: "ru", label: "Русский", flag: "/flags/flag-ru.svg", aspectW: 512, aspectH: 512, langCode: "ru" },
  { code: "ro", label: "Română", flag: "/flags/flag-ro.svg", aspectW: 326, aspectH: 326, langCode: "ro" },
  { code: "he", label: "עברית", flag: "/flags/flag-he.svg", aspectW: 512, aspectH: 512, langCode: "he" },
];

export const COMPACT_LABEL: Record<Lang, string> = {
  pt: "BR",
  "pt-pt": "PT",
  en: "EN",
  "en-gb": "GB",
  es: "ES",
  fr: "FR",
  de: "DE",
  it: "IT",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
  sv: "SV",
  fi: "FI",
  ru: "RU",
  ro: "RO",
  he: "HE",
};

export const FULL_INFO: Record<Lang, Omit<LanguageOption, "code" | "langCode">> = Object.fromEntries(
  LANGUAGES.map((l) => [l.langCode, { label: l.label, flag: l.flag, aspectW: l.aspectW, aspectH: l.aspectH }])
) as Record<Lang, Omit<LanguageOption, "code" | "langCode">>;
