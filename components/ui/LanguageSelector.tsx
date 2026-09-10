"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, ArrowLeftRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/paths";
import { LANGUAGES, LANGUAGE_INFO, type LanguageOption } from "@/config/languages";

const COOKIE = "interfy-lang";
const MAX_AGE = 60 * 60 * 24 * 365;
const DIR_STORAGE_KEY = "interfy-dir-override";

function writeCookie(locale: Locale) {
  document.cookie = `${COOKIE}=${locale}; path=/; max-age=${MAX_AGE}; SameSite=Lax`;
}

function FlagImg({ flag, aspectW, aspectH }: Pick<LanguageOption, "flag" | "aspectW" | "aspectH">) {
  return (
    <div className="flex size-5 shrink-0 items-center justify-center">
      <div className="relative w-full flex-1" style={{ aspectRatio: `${aspectW}/${aspectH}` }}>
        <Image src={flag} alt="" fill sizes="20px" className="object-contain" />
      </div>
    </div>
  );
}

function useClickOutside(onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [onClose]);
  return ref;
}

/** Switches the locale via a client-side transition (no full page reload). */
function useLocaleSwitch() {
  const router = useRouter();
  const pathname = usePathname();

  return (locale: Locale) => {
    writeCookie(locale);
    router.push(withLocale(pathname, locale), { scroll: false });
  };
}

/**
 * Manual LTR/RTL override for right-to-left languages (e.g. Hebrew, Arabic),
 * shown only when the active language's script is RTL.
 */
function RtlToggle() {
  const [dir, setDir] = useState<"ltr" | "rtl">("rtl");

  useEffect(() => {
    const stored = localStorage.getItem(DIR_STORAGE_KEY) as "ltr" | "rtl" | null;
    if (stored) {
      setDir(stored);
      document.documentElement.dir = stored;
    }
  }, []);

  function toggle() {
    const next = dir === "rtl" ? "ltr" : "rtl";
    setDir(next);
    document.documentElement.dir = next;
    localStorage.setItem(DIR_STORAGE_KEY, next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dir === "rtl" ? "Switch to left-to-right layout" : "Switch to right-to-left layout"}
      className="flex size-9 shrink-0 items-center justify-center rounded-md border border-contorno-base text-texto transition-colors hover:bg-bg-base"
    >
      <ArrowLeftRight className="size-4" aria-hidden="true" />
    </button>
  );
}

function DropdownMenu({
  align,
  locale,
  onSelect,
  onClose,
}: {
  align: "up" | "down";
  locale: Locale;
  onSelect: (l: Locale) => void;
  onClose: () => void;
}) {
  return (
    <div
      className={`absolute right-[-1px] z-50 flex w-[290px] flex-col gap-3 rounded-md border border-contorno-base bg-branco px-5 py-5 shadow-[0_0_5px_var(--color-shadow)] ${
        align === "up" ? "bottom-[calc(100%+4px)]" : "top-[calc(100%+4px)]"
      }`}
    >
      {LANGUAGES.map((item) => {
        const isActive = item.locale === locale;
        return (
          <button
            key={item.locale}
            type="button"
            onClick={() => {
              onSelect(item.locale);
              onClose();
            }}
            className="flex w-full shrink-0 items-center gap-2.5 transition-opacity hover:opacity-70"
          >
            <FlagImg flag={item.flag} aspectW={item.aspectW} aspectH={item.aspectH} />
            <span
              className={`min-w-0 flex-1 shrink-0 text-left text-base leading-[1.2] whitespace-nowrap text-texto ${
                isActive ? "font-bold" : "font-normal"
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/** Footer variant: full label + flag. */
export function LanguageSelectorFull({ locale, ariaLabel }: { locale: Locale; ariaLabel: string }) {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));
  const switchLocale = useLocaleSwitch();
  const info = LANGUAGE_INFO[locale];

  return (
    <div className="flex items-center gap-2.5">
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={ariaLabel}
          className={`flex w-[220px] min-w-[200px] items-center gap-1.5 rounded-md border p-2.5 transition-colors ${
            open ? "border-azul-base bg-bg-base" : "border-contorno-base"
          }`}
        >
          <FlagImg flag={info.flag} aspectW={info.aspectW} aspectH={info.aspectH} />
          <span className={`min-w-0 flex-1 text-left text-sm font-bold leading-[1.2] ${open ? "text-azul-base" : "text-texto"}`}>
            {info.label}
          </span>
          <ChevronDown
            className={`size-[18px] shrink-0 text-texto transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
        {open && (
          <DropdownMenu align="up" locale={locale} onSelect={switchLocale} onClose={() => setOpen(false)} />
        )}
      </div>
      {info.dir === "rtl" && <RtlToggle />}
    </div>
  );
}

/** Header variant: compact code label + flag. */
export function LanguageSelectorCompact({ locale, ariaLabel }: { locale: Locale; ariaLabel: string }) {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));
  const switchLocale = useLocaleSwitch();
  const info = LANGUAGE_INFO[locale];

  return (
    <div className="flex items-center gap-1.5">
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={`${ariaLabel}: ${info.label}`}
          className={`flex items-center gap-1.5 rounded-md border p-1.5 transition-colors ${
            open ? "border-azul-base bg-bg-base" : "border-transparent hover:bg-bg-base"
          }`}
        >
          <FlagImg flag={info.flag} aspectW={info.aspectW} aspectH={info.aspectH} />
          <span className={`shrink-0 text-sm font-bold leading-[1.2] whitespace-nowrap ${open ? "text-azul-base" : "text-texto"}`}>
            {info.compactLabel}
          </span>
          <ChevronDown
            className={`size-[18px] shrink-0 text-texto transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
        {open && (
          <DropdownMenu align="down" locale={locale} onSelect={switchLocale} onClose={() => setOpen(false)} />
        )}
      </div>
      {info.dir === "rtl" && <RtlToggle />}
    </div>
  );
}
