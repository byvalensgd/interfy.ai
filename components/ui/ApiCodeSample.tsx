"use client";

import { useEffect, useRef, useState } from "react";

/** Integrações "Chamada de API" code sample — one continuous piece of text (colors and
 *  indentation are just inline styling within it, not separate line elements), so
 *  `white-space: pre-wrap` naturally wraps whichever line is too long for the current card
 *  width instead of needing per-line sizing logic. Plays a 4s top-to-bottom "being built"
 *  reveal (code-build-reveal, globals.css) once scrolled into view, same IntersectionObserver
 *  trigger Reveal.tsx uses, so the animation is never already finished by the time a reader
 *  scrolls down to it.
 *
 *  fileName/tags are the only human-facing (translated) values in the sample — everything
 *  else (HTTP verbs, header names, JSON field names, ids) is left as real API syntax, the
 *  same in every locale. */
export default function ApiCodeSample({ fileName, tags }: { fileName: string; tags: [string, string] }) {
  const ref = useRef<HTMLPreElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlaying(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <pre
      ref={ref}
      className="w-full min-w-0 flex-1 font-mono text-[13px] leading-[1.6] whitespace-pre-wrap text-[#d9dee8]"
      style={{ animation: playing ? "code-build-reveal 4s ease-out both" : "none" }}
    >
      <span className="font-bold text-[#4fc778]">POST</span> /v1/documents{"\n"}
      {" \n"}
      curl -X <span className="font-bold text-[#4fc778]">POST</span> /v1/documents \{"\n"}
      {"  "}
      <span className="text-[#ad82de]">-H</span> <span className="text-[#e5bf6b]">&quot;Authorization: Bearer {"{"}token{"}"}&quot;</span>,{" "}
      <span className="text-[#ad82de]">-H</span> <span className="text-[#e5bf6b]">&quot;Content-Type: application/json&quot;</span>,{" "}
      <span className="text-[#ad82de]">-H</span> <span className="text-[#e5bf6b]">&quot;X-Request-Id: req_8f14e45f&quot;</span> \{"\n"}
      {"  "}
      <span className="text-[#ad82de]">-d</span> {"'{"}
      {"\n"}
      {"    "}
      <span className="text-[#8cc7f2]">&quot;title&quot;</span>: <span className="text-[#de9457]">&quot;{fileName}&quot;</span>,{" "}
      <span className="text-[#8cc7f2]">&quot;folderId&quot;</span>: <span className="text-[#de9457]">&quot;12345&quot;</span>,{"\n"}
      {"    "}
      <span className="text-[#8cc7f2]">&quot;tags&quot;</span>: [<span className="text-[#de9457]">&quot;{tags[0]}&quot;</span>, <span className="text-[#de9457]">&quot;{tags[1]}&quot;</span>],{"\n"}
      {"    "}
      <span className="text-[#8cc7f2]">&quot;fileUrls&quot;</span>: [<span className="text-[#de9457]">&quot;{fileName}&quot;</span>]{"\n"}
      {"  }'"}
    </pre>
  );
}
