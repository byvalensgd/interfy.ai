import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n/config";

const LOCALE_COOKIE = "interfy-lang";
const PREFIXED = locales.filter((l) => l !== defaultLocale);
const PREFIXED_RE = new RegExp(`^/(${PREFIXED.join("|")})(?=/|$)`);
const DEFAULT_RE = new RegExp(`^/${defaultLocale}(?=/|$)`);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Canonicalize away the default locale's own prefix (e.g. /pt/planos -> /planos)
  // so there is only ever one indexable URL per page.
  if (DEFAULT_RE.test(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(DEFAULT_RE, "") || "/";
    return NextResponse.redirect(url, 308);
  }

  // Already has an explicit non-default locale prefix — let it flow through.
  if (PREFIXED_RE.test(pathname)) {
    return NextResponse.next();
  }

  // Unprefixed root: honor a previously chosen locale preference.
  if (pathname === "/") {
    const preferred = request.cookies.get(LOCALE_COOKIE)?.value;
    if (preferred && PREFIXED.includes(preferred as (typeof PREFIXED)[number])) {
      const url = request.nextUrl.clone();
      url.pathname = `/${preferred}`;
      return NextResponse.redirect(url, 307);
    }
  }

  // Unprefixed path == default locale content, rewritten internally to app/[lang].
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|api|favicon.ico|sitemap.xml|robots.txt|opengraph-image|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico|otf|ttf|woff|woff2|css|js|map|json|xml|txt)$).*)",
  ],
};
