"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  OPEN_PREFERENCES_EVENT,
  readCookieConsent,
  writeCookieConsent,
  type CookieConsentPrefs,
} from "@/lib/cookieConsent";

export type CookieConsentDict = {
  message: string;
  policyLinkLabel: string;
  acceptAllLabel: string;
  rejectLabel: string;
  customizeLabel: string;
  saveLabel: string;
  backLabel: string;
  alwaysActiveLabel: string;
  preferencesTitle: string;
  preferencesDescription: string;
  categories: {
    necessary: { label: string; description: string };
    analytics: { label: string; description: string };
    marketing: { label: string; description: string };
  };
};

type View = "closed" | "banner" | "preferences";

export default function CookieConsent({ dict, privacyHref }: { dict: CookieConsentDict; privacyHref: string }) {
  const [view, setView] = useState<View>("closed");
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const existing = readCookieConsent();
    if (!existing) {
      setView("banner");
    } else {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    }

    const onOpenPreferences = () => {
      const current = readCookieConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setView("preferences");
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, onOpenPreferences);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, onOpenPreferences);
  }, []);

  // Nudges the person with a brief shake every 5s until they interact with
  // the banner — stops as soon as the preferences panel opens or it's saved.
  useEffect(() => {
    if (view !== "banner") return;
    const id = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }, 5000);
    return () => clearInterval(id);
  }, [view]);

  function save(prefs: Omit<CookieConsentPrefs, "necessary">) {
    writeCookieConsent(prefs);
    setAnalytics(prefs.analytics);
    setMarketing(prefs.marketing);
    setView("closed");
  }

  if (view === "closed") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] flex justify-center px-4 pb-4 sm:px-5" role="dialog" aria-modal="false">
      <div
        className={`w-full max-w-[900px] overflow-hidden rounded-[16px] border border-contorno-base bg-branco shadow-[0_8px_30px_var(--color-shadow)] ${
          shake ? "cookie-consent-shake" : ""
        }`}
      >
        {view === "banner" ? (
          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-5">
            <p className="flex-1 text-sm leading-[1.4] font-medium text-texto">
              {dict.message}{" "}
              <Link href={privacyHref} className="font-bold text-azul-base hover:underline">
                {dict.policyLinkLabel}
              </Link>
            </p>
            <div className="flex shrink-0 flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => setView("preferences")}
                className="rounded-lg border border-contorno-base px-4 py-2.5 text-sm font-bold text-texto transition-colors hover:bg-bg-base"
              >
                {dict.customizeLabel}
              </button>
              <button
                type="button"
                onClick={() => save({ analytics: false, marketing: false })}
                className="rounded-lg border border-contorno-base px-4 py-2.5 text-sm font-bold text-texto transition-colors hover:bg-bg-base"
              >
                {dict.rejectLabel}
              </button>
              <button
                type="button"
                onClick={() => save({ analytics: true, marketing: true })}
                className="rounded-lg bg-azul-base px-4 py-2.5 text-sm font-bold text-branco transition-colors hover:bg-azul-base/90"
              >
                {dict.acceptAllLabel}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 p-5">
            <div className="flex flex-col gap-1">
              <p className="text-lg leading-[1.2] font-extrabold text-texto">{dict.preferencesTitle}</p>
              <p className="text-sm leading-[1.4] font-medium text-texto-medio">{dict.preferencesDescription}</p>
            </div>

            <ul className="flex flex-col gap-3">
              <li className="flex items-start justify-between gap-4 rounded-lg border border-contorno-base p-3">
                <div className="flex flex-col gap-[7px]">
                  <p className="text-sm leading-[1.2] font-bold text-texto">{dict.categories.necessary.label}</p>
                  <p className="text-xs leading-[1.2] font-medium text-texto-medio">
                    {dict.categories.necessary.description}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-bg-base px-2.5 py-1 text-xs font-bold text-texto-medio">
                  {dict.alwaysActiveLabel}
                </span>
              </li>

              <li className="flex items-start justify-between gap-4 rounded-lg border border-contorno-base p-3">
                <div className="flex flex-col gap-[7px]">
                  <p className="text-sm leading-[1.2] font-bold text-texto">{dict.categories.analytics.label}</p>
                  <p className="text-xs leading-[1.2] font-medium text-texto-medio">
                    {dict.categories.analytics.description}
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={analytics}
                  aria-label={dict.categories.analytics.label}
                  onClick={() => setAnalytics((v) => !v)}
                  className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                    analytics ? "bg-azul-base" : "bg-contorno-base"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-branco shadow transition-transform ${
                      analytics ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </li>

              <li className="flex items-start justify-between gap-4 rounded-lg border border-contorno-base p-3">
                <div className="flex flex-col gap-[7px]">
                  <p className="text-sm leading-[1.2] font-bold text-texto">{dict.categories.marketing.label}</p>
                  <p className="text-xs leading-[1.2] font-medium text-texto-medio">
                    {dict.categories.marketing.description}
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={marketing}
                  aria-label={dict.categories.marketing.label}
                  onClick={() => setMarketing((v) => !v)}
                  className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                    marketing ? "bg-azul-base" : "bg-contorno-base"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-branco shadow transition-transform ${
                      marketing ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </li>
            </ul>

            <div className="flex flex-wrap items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setView("banner")}
                className="rounded-lg border border-contorno-base px-4 py-2.5 text-sm font-bold text-texto transition-colors hover:bg-bg-base"
              >
                {dict.backLabel}
              </button>
              <button
                type="button"
                onClick={() => save({ analytics, marketing })}
                className="rounded-lg bg-azul-base px-4 py-2.5 text-sm font-bold text-branco transition-colors hover:bg-azul-base/90"
              >
                {dict.saveLabel}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
