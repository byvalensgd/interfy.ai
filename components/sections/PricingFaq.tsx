"use client";

import { useState } from "react";
import Image from "next/image";
import { pricingFaq } from "@/config/pricing";

export default function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex h-full flex-col gap-5 rounded-[14px] bg-bg-base p-5">
      <h3 className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] font-bold leading-[1.2] text-texto">Perguntas frequentes</h3>
      <ul className="grid flex-1 grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {pricingFaq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={item.question} className="rounded-xl border border-contorno-base bg-branco">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex min-h-[40px] w-full items-center gap-2.5 p-2.5 text-left"
              >
                <span className="flex-1 text-sm font-bold leading-[1.2] text-texto">{item.question}</span>
                <Image
                  src="/icons/pricing/chevron-down.svg"
                  alt=""
                  aria-hidden="true"
                  width={10}
                  height={10}
                  className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <p className="px-2.5 pt-2 pb-2.5 text-sm leading-[1.2] font-medium text-texto-medio">
                  {item.answer}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
