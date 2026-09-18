import type { Locale } from "./config";

/** Placeholder example matching each locale's own country phone-number
 * convention (same locale→country pairing as HTML_LANG in ./config) — a
 * formatting hint shown in the field, not an enforced input mask. */
export const PHONE_PLACEHOLDERS: Record<Locale, string> = {
  pt: "(11) 91234-5678",
  en: "(555) 123-4567",
  es: "612 34 56 78",
  fr: "06 12 34 56 78",
  de: "030 12345678",
  it: "312 345 6789",
  zh: "138 0013 8000",
  ja: "090-1234-5678",
  ko: "010-1234-5678",
  sv: "070-123 45 67",
  fi: "040 123 4567",
  ru: "+7 912 345-67-89",
  ro: "0712 345 678",
  he: "050-123-4567",
};
