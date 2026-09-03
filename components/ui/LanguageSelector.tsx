"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useLang, type Lang } from "@/context/LanguageContext";
import { LANGUAGES, COMPACT_LABEL, FULL_INFO, type LanguageOption } from "@/config/languages";

function FlagImg({ flag, aspectW, aspectH }: Pick<LanguageOption, "flag" | "aspectW" | "aspectH">) {
  return (
    <div className="flex size-5 shrink-0 items-center justify-center">
      <div className="relative w-full flex-1" style={{ aspectRatio: `${aspectW}/${aspectH}` }}>
        <Image src={flag} alt="" fill sizes="20px" className="object-contain" />
      </div>
    </div>
  );
}

function DropdownMenu({
  align,
  lang,
  setLang,
  onClose,
}: {
  align: "up" | "down";
  lang: Lang;
  setLang: (l: Lang) => void;
  onClose: () => void;
}) {
  return (
    <div
      className={`absolute right-[-1px] z-50 flex w-[290px] flex-col gap-3 rounded-md border border-contorno-base bg-branco px-5 py-5 shadow-[0_0_5px_var(--color-shadow)] ${
        align === "up" ? "bottom-[calc(100%+4px)]" : "top-[calc(100%+4px)]"
      }`}
    >
      {LANGUAGES.map((item) => {
        const isActive = item.langCode === lang;
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => {
              setLang(item.langCode);
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

/** Footer variant: full label + flag. */
export function LanguageSelectorFull() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const ref = useClickOutside(() => setOpen(false));
  const info = FULL_INFO[lang];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
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
      {open && <DropdownMenu align="up" lang={lang} setLang={setLang} onClose={() => setOpen(false)} />}
    </div>
  );
}

/** Header variant: compact code label + flag. */
export function LanguageSelectorCompact() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const ref = useClickOutside(() => setOpen(false));

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={`Selecionar idioma: ${FULL_INFO[lang].label}`}
        className={`flex items-center gap-1.5 rounded-md border p-1.5 transition-colors ${
          open ? "border-azul-base bg-bg-base" : "border-transparent hover:bg-bg-base"
        }`}
      >
        <FlagImg flag={FULL_INFO[lang].flag} aspectW={FULL_INFO[lang].aspectW} aspectH={FULL_INFO[lang].aspectH} />
        <span className={`shrink-0 text-sm font-bold leading-[1.2] whitespace-nowrap ${open ? "text-azul-base" : "text-texto"}`}>
          {COMPACT_LABEL[lang]}
        </span>
        <ChevronDown
          className={`size-[18px] shrink-0 text-texto transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && <DropdownMenu align="down" lang={lang} setLang={setLang} onClose={() => setOpen(false)} />}
    </div>
  );
}
