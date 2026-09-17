export type CookieConsentPrefs = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "interfy-cookie-consent";
export const OPEN_PREFERENCES_EVENT = "interfy:open-cookie-preferences";

export function readCookieConsent(): CookieConsentPrefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return { necessary: true, analytics: !!parsed.analytics, marketing: !!parsed.marketing };
  } catch {
    return null;
  }
}

export function writeCookieConsent(prefs: Omit<CookieConsentPrefs, "necessary">) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ necessary: true, analytics: prefs.analytics, marketing: prefs.marketing, savedAt: Date.now() })
    );
  } catch {
    // Storage unavailable (private mode, quota) — consent simply won't persist across reloads.
  }
}

export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
