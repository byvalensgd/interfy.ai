"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export function useClickOutside(onClose: () => void) {
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

/** Shared trigger button + centered, full-width mega-menu panel used by every
    desktop header dropdown (Produtos/Recursos/Empresa) — only the panel's
    inner content differs per menu. */
export default function NavMenuShell({
  trigger,
  panelClassName = "max-w-[1400px]",
  children,
}: {
  trigger: string;
  panelClassName?: string;
  children: (close: () => void) => ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const ref = useClickOutside(close);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex items-center gap-1.5 whitespace-nowrap text-[clamp(0.875rem,0.4808vw+0.5673rem,1rem)] transition-colors ${
          open ? "text-azul-base" : "text-texto hover:text-azul-base"
        }`}
      >
        <span className="flex min-h-[18px] items-center leading-[1.5rem]">{trigger}</span>
        <ChevronDown
          className={`size-[18px] shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="fixed inset-x-0 top-[calc(var(--header-height)+4px)] z-50 flex justify-center px-5">
          <div
            className={`w-full rounded-[12px] border border-contorno-base bg-branco p-5 shadow-[0_8px_30px_var(--color-shadow)] ${panelClassName}`}
          >
            {children(close)}
          </div>
        </div>
      )}
    </div>
  );
}
