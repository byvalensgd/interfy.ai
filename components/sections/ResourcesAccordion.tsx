"use client";

import { useState } from "react";
import Image from "next/image";
import { resourceSections } from "@/config/pricing";

function ProductResourceToggle({ label, features }: { label: string; features: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full flex-col items-start">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex h-[60px] w-full items-center overflow-hidden rounded-2xl px-5"
        style={{ backgroundImage: "linear-gradient(-31deg, rgb(158, 16, 193) 3.53%, rgb(0, 64, 166) 95.98%)" }}
      >
        <span className="flex-1 text-left text-lg font-bold leading-[1.2] text-branco">{label}</span>
        <Image
          src="/icons/pricing/chevron-white.svg"
          alt=""
          aria-hidden="true"
          width={15}
          height={10}
          className={`transition-transform ${open ? "" : "rotate-180"}`}
        />
      </button>
      {open && (
        <ul className="grid w-full grid-cols-1 gap-2.5 rounded-2xl border border-contorno-base p-5 sm:grid-cols-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 rounded-xl bg-bg-base p-2.5">
              <Image src="/icons/pricing/compare-check.svg" alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />
              <span className="text-sm font-medium leading-[1.2] text-texto">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ResourcesAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full flex-col items-center gap-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex h-[60px] w-full max-w-[494px] items-center justify-center gap-2.5 rounded-2xl px-5"
        style={{ backgroundImage: "linear-gradient(117deg,#184aee 22.86%,#bf18f6 96.41%)" }}
      >
        <span className="text-lg font-bold leading-[1.2] text-branco">
          Veja todos os recursos e compare os planos
        </span>
        <Image
          src="/icons/pricing/chevron-white.svg"
          alt=""
          aria-hidden="true"
          width={15}
          height={10}
          className={`transition-transform ${open ? "" : "rotate-180"}`}
        />
      </button>

      {open && (
        <div className="flex w-full flex-col gap-2.5">
          {resourceSections.map((section) => (
            <ProductResourceToggle key={section.key} label={section.label} features={section.features} />
          ))}
        </div>
      )}
    </div>
  );
}
