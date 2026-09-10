import { type Locale, defaultLocale } from "./config";

/**
 * Rewrites a pathname (as seen by the browser, no locale prefix ever appears
 * for `defaultLocale`) so it points to the same page under `locale`.
 */
export function withLocale(pathname: string, locale: Locale): string {
  const stripped = pathname.replace(/^\/(en|es)(?=\/|$)/, "") || "/";
  if (locale === defaultLocale) return stripped;
  return stripped === "/" ? `/${locale}` : `/${locale}${stripped}`;
}
