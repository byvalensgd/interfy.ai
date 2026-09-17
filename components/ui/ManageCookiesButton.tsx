"use client";

import { openCookiePreferences } from "@/lib/cookieConsent";

export default function ManageCookiesButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className="text-sm leading-[1.2] font-medium whitespace-nowrap text-texto-medio transition-colors hover:text-azul-base"
    >
      {label}
    </button>
  );
}
