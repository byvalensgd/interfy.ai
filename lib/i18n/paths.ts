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

/**
 * The [home dashboard, login screen] mockup pair used by every hero
 * slideshow across the site. `pt` gets the Portuguese-labeled screens; `en`
 * and `es` both fall back to the same English-labeled ("ENG") pair, since
 * there's no dedicated Spanish mockup.
 */
export function getHeroSlides(locale: Locale): [string, string] {
  return locale === "pt"
    ? ["/hero/hero-slide-home.png", "/hero/hero-slide-login.png"]
    : ["/hero/hero-slide-home-eng.png", "/hero/hero-slide-login-eng.png"];
}

/**
 * The 4-screen White Label mockup slideshow on the home page's trust
 * section. Same locale rule as `getHeroSlides`: `pt` gets the Portuguese
 * screens, `en`/`es` both fall back to the English ("ENG") set.
 */
export function getWhiteLabelSlides(locale: Locale): string[] {
  const suffix = locale === "pt" ? "" : "-eng";
  return [1, 2, 3, 4].map((n) => `/global/white-label-${n}${suffix}.png`);
}
