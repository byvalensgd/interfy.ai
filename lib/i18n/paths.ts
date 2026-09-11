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

/**
 * Same as `withLocale`, but safe for hrefs coming straight from dictionary
 * content that mix internal paths with `mailto:`/`tel:`/`#anchor` links —
 * only same-site paths (starting with "/") get the locale prefix.
 */
export function localizeHref(href: string, locale: Locale): string {
  return href.startsWith("/") ? withLocale(href, locale) : href;
}
