"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const gradientText = "linear-gradient(157deg, #184aee 22.9%, #bf18f6 96.4%)";

const MESSAGE_1 = "Mostre os contratos pendentes de assinatura";
const MESSAGE_2_LINE_1 = "15 contratos de assinatura pendentes de encontrados.";
const MESSAGE_2_LINE_2 = "Deseja visualizar?";
const MESSAGE_2 = `${MESSAGE_2_LINE_1}\n${MESSAGE_2_LINE_2}`;

const TYPE_SPEED_MS = 28;
const PAUSE_AFTER_MESSAGE_MS = 650;
const WAVEFORM_PLAY_MS = 4500;
// Everything stays fully visible for this long after finishing, then fades
// out right before the next cycle starts — not the other way around.
const HOLD_MS = 10000;
// Matches the slowest CSS fade (the waveform block's duration-500 opacity
// transition), so "idle" is on screen for exactly as long as the fade takes.
const FADE_OUT_MS = 500;

type Phase = "idle" | "icon1" | "typing1" | "icon2" | "typing2" | "waveform";

function TypedText({ text, onDone }: { text: string; onDone: () => void }) {
  const [shown, setShown] = useState("");
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  // Derives the revealed length from elapsed wall-clock time rather than
  // counting ticks, so a throttled/backgrounded tab (which fires setInterval
  // far less often than requested) catches up instantly instead of crawling
  // one character per tick.
  useEffect(() => {
    const start = Date.now();
    let finished = false;
    const tick = () => {
      const chars = Math.min(text.length, Math.floor((Date.now() - start) / TYPE_SPEED_MS));
      setShown(text.slice(0, chars));
      if (chars >= text.length && !finished) {
        finished = true;
        clearInterval(id);
        onDoneRef.current();
      }
    };
    const id = setInterval(tick, TYPE_SPEED_MS);
    tick();
    return () => clearInterval(id);
  }, [text]);

  const [line1, line2] = shown.split("\n");
  const finished = shown.length >= text.length;

  return (
    <>
      {line1}
      {line2 !== undefined && (
        <>
          <br />
          {line2}
        </>
      )}
      {!finished && <span className="animate-pulse">|</span>}
    </>
  );
}

export default function ChatDemo() {
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const id = setTimeout(() => setPhase("icon1"), 200);
    return () => clearTimeout(id);
  }, []);

  // Fires every time phase re-enters "icon1" — both the initial mount and
  // every loop restart — not just once, so the sequence keeps advancing
  // after the first cycle instead of stalling on icon1 forever.
  useEffect(() => {
    if (phase !== "icon1") return;
    const id = setTimeout(() => setPhase("typing1"), 300);
    return () => clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "icon2") return;
    const id = setTimeout(() => setPhase("typing2"), 300);
    return () => clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "waveform") return;
    const id = setTimeout(() => setPhase("idle"), WAVEFORM_PLAY_MS + HOLD_MS);
    return () => clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "idle") return;
    const id = setTimeout(() => setPhase("icon1"), FADE_OUT_MS);
    return () => clearTimeout(id);
  }, [phase]);

  const showIcon1 = phase !== "idle";
  const showBubble1 = phase === "typing1" || phase === "icon2" || phase === "typing2" || phase === "waveform";
  const showIcon2 = phase === "icon2" || phase === "typing2" || phase === "waveform";
  const showBubble2 = phase === "typing2" || phase === "waveform";
  const showWaveform = phase === "waveform";

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex min-h-[40px] items-start gap-2.5">
        <span
          className={`flex size-[30px] shrink-0 items-center justify-center rounded-full p-1 transition-all duration-300 ${
            showIcon1 ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
          style={{ backgroundImage: "linear-gradient(94deg, #fff0fb 4%, #e3eeff 96.5%)" }}
        >
          <Image src="/icons/features/user-avatar.svg" alt="" aria-hidden="true" width={30} height={30} />
        </span>
        {showBubble1 && (
          <p className="flex-1 rounded-lg bg-azul-bg-superior p-3 text-sm leading-[1.2] font-medium text-texto">
            {phase === "typing1" ? (
              <TypedText text={MESSAGE_1} onDone={() => setTimeout(() => setPhase("icon2"), PAUSE_AFTER_MESSAGE_MS)} />
            ) : (
              MESSAGE_1
            )}
          </p>
        )}
      </div>

      <div className="flex min-h-[40px] items-start gap-2.5">
        <span
          className={`shrink-0 transition-all duration-300 ${
            showIcon2 ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <Image src="/decor/interfy-icon-sm.svg" alt="" aria-hidden="true" width={30} height={30} />
        </span>
        {showBubble2 && (
          <p className="flex-1 rounded-lg bg-branco p-3 text-sm leading-[1.2] font-medium text-texto shadow-[1px_2px_10px_0px_var(--color-shadow)]">
            {phase === "typing2" ? (
              <TypedText text={MESSAGE_2} onDone={() => setTimeout(() => setPhase("waveform"), PAUSE_AFTER_MESSAGE_MS)} />
            ) : (
              <>
                {MESSAGE_2_LINE_1}
                <br />
                {MESSAGE_2_LINE_2}
              </>
            )}
          </p>
        )}
      </div>

      <div
        className={`flex items-start gap-2.5 transition-opacity duration-500 ${
          showWaveform ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative h-[54px] min-h-10 flex-1 overflow-hidden rounded-full">
          <Image
            src="/features/waveform.svg"
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1024px) 260px, 60vw"
            className="object-fill"
          />
          {showWaveform && (
            <div
              className="absolute inset-y-0 left-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.75),transparent)]"
              style={{ animation: "waveform-sweep 1.6s linear infinite" }}
            />
          )}
        </div>
        <span
          className="flex size-[30px] shrink-0 items-center justify-center rounded-full p-1.5"
          style={{ backgroundImage: gradientText }}
        >
          <Image src="/icons/features/voice.svg" alt="Comando de voz" width={18} height={18} />
        </span>
      </div>
    </div>
  );
}
