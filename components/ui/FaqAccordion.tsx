"use client";

import { useState } from "react";
import Image from "next/image";

type FaqItem = { question: string; answer: string };

/** Generic FAQ accordion (same interaction as PricingFaq) reused outside pricing. */
export default function FaqAccordion({
  faq,
  heading,
  ariaExpand,
}: {
  faq: FaqItem[];
  heading: string;
  ariaExpand: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex w-full flex-col gap-6">
      <h2 className="text-center text-[clamp(1.5rem,0.8333vw+1.3333rem,2rem)] font-extrabold leading-[1.2] text-texto">
        {heading}
      </h2>
      <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={item.question} className="rounded-xl border border-contorno-base bg-branco">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-label={ariaExpand}
                className="flex min-h-[40px] w-full items-center gap-2.5 p-4 text-left"
              >
                <span className="flex-1 text-base font-bold leading-[1.2] text-texto">{item.question}</span>
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
                <p className="px-4 pt-1 pb-4 text-sm leading-[1.4] font-medium text-texto-medio">{item.answer}</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
