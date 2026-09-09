"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { productsMenu } from "@/config/products-menu";

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

export default function ProductsMenu() {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex items-center gap-1.5 whitespace-nowrap text-base transition-colors ${
          open ? "text-azul-base" : "text-texto hover:text-azul-base"
        }`}
      >
        Produtos
        <ChevronDown
          className={`size-[18px] shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="fixed inset-x-0 top-[calc(var(--header-height)+12px)] z-50 flex justify-center px-5">
          <div className="w-full max-w-[1400px] rounded-2xl border border-contorno-base bg-branco p-6 shadow-[0_8px_30px_var(--color-shadow)]">
            <p className="text-xs leading-[1.2] font-bold tracking-wide text-texto-medio uppercase">
              Mais produtos
            </p>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-4">
              {productsMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-w-0 items-center gap-2.5 rounded-lg px-2.5 py-3 transition-colors hover:bg-bg-base"
                >
                  <Image src={item.icon} alt="" aria-hidden="true" width={22} height={22} className="shrink-0" />
                  <span className="flex min-w-0 flex-1 flex-col gap-[5px]">
                    <span className="text-sm leading-[1.2] font-bold text-texto">{item.label}</span>
                    <span className="w-full text-xs leading-[1.3] font-medium text-texto-medio">
                      {item.description}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
