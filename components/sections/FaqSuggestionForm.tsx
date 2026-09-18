"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

type FaqSuggestionDict = {
  ariaLabel: string;
  heading: string;
  description: string;
  emailPlaceholder: string;
  questionPlaceholder: string;
  errors: { email: string; question: string };
  submitButton: string;
  submittingButton: string;
  successMessage: string;
};

type FormValues = { email: string; question: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

function validate(values: FormValues, errorMessages: FaqSuggestionDict["errors"]): FormErrors {
  const errors: FormErrors = {};
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = errorMessages.email;
  if (values.question.trim().length < 5) errors.question = errorMessages.question;
  return errors;
}

export default function FaqSuggestionForm({ dict }: { dict: FaqSuggestionDict }) {
  const [values, setValues] = useState<FormValues>({ email: "", question: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleChange<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values, dict.errors);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // No FAQ-suggestion API exists yet — simulate the request until one is wired up.
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="flex w-full flex-col items-center gap-2.5 rounded-2xl border border-contorno-base bg-bg-base p-6 text-center">
        <CheckCircle2 className="size-8 text-ecm" aria-hidden="true" strokeWidth={1.5} />
        <p className="text-sm leading-[1.2] font-medium text-texto-medio">{dict.successMessage}</p>
      </div>
    );
  }

  return (
    <form
      aria-label={dict.ariaLabel}
      onSubmit={handleSubmit}
      noValidate
      className="flex w-full flex-col gap-3 rounded-2xl border border-contorno-base bg-bg-base p-6"
    >
      <div className="flex flex-col gap-1">
        <p className="text-base leading-[1.2] font-extrabold text-texto">{dict.heading}</p>
        <p className="text-sm leading-[1.2] font-medium text-texto-medio">{dict.description}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-1 flex-col gap-1">
          <input
            type="email"
            aria-label={dict.emailPlaceholder}
            aria-invalid={!!errors.email}
            placeholder={dict.emailPlaceholder}
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`h-[50px] w-full rounded-lg border bg-branco px-4 text-sm leading-[1.2] text-texto placeholder:text-texto-medio focus:outline-none focus:ring-2 focus:ring-azul-base/20 ${
              errors.email ? "border-red-500" : "border-contorno-base focus:border-azul-base"
            }`}
          />
          {errors.email && <p className="text-xs font-medium text-red-600">{errors.email}</p>}
        </div>
        <div className="flex flex-[2] flex-col gap-1">
          <input
            type="text"
            aria-label={dict.questionPlaceholder}
            aria-invalid={!!errors.question}
            placeholder={dict.questionPlaceholder}
            value={values.question}
            onChange={(e) => handleChange("question", e.target.value)}
            className={`h-[50px] w-full rounded-lg border bg-branco px-4 text-sm leading-[1.2] text-texto placeholder:text-texto-medio focus:outline-none focus:ring-2 focus:ring-azul-base/20 ${
              errors.question ? "border-red-500" : "border-contorno-base focus:border-azul-base"
            }`}
          />
          {errors.question && <p className="text-xs font-medium text-red-600">{errors.question}</p>}
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-[50px] shrink-0 items-center justify-center gap-2 rounded-lg bg-azul-base px-5 text-sm leading-[1.2] font-bold text-branco transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="size-4" aria-hidden="true" />
          )}
          {status === "submitting" ? dict.submittingButton : dict.submitButton}
        </button>
      </div>
    </form>
  );
}
