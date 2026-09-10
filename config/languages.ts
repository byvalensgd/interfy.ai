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
 * Languages with fully translated content. More entries (fr, de, it, zh, ja,
 * ko, sv, fi, ru, ro, he...) will be added here as their `messages/<locale>`
 * dictionaries are written and `lib/i18n/config.ts#locales` is extended.
 */
export const LANGUAGES: LanguageOption[] = [
  { locale: "pt", label: "Português (BR)", flag: "/flags/flag-br.svg", aspectW: 512, aspectH: 512, compactLabel: "BR", dir: "ltr" },
  { locale: "en", label: "English (USA)", flag: "/flags/flag-usa-30px.svg", aspectW: 18, aspectH: 18, compactLabel: "EN", dir: "ltr" },
  { locale: "es", label: "Español", flag: "/flags/flag-es.svg", aspectW: 22, aspectH: 22, compactLabel: "ES", dir: "ltr" },
];

export const LANGUAGE_INFO: Record<Locale, LanguageOption> = Object.fromEntries(
  LANGUAGES.map((l) => [l.locale, l])
) as Record<Locale, LanguageOption>;
