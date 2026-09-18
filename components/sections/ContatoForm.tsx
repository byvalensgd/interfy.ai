"use client";

import { useState, type ComponentPropsWithoutRef, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { withLocale } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/config";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  consent: false,
};

type ContatoFormDict = {
  ariaLabel: string;
  heading: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  subjectOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  errors: { name: string; email: string; subject: string; message: string; consent: string };
  consentPrefix: string;
  consentPrivacy: string;
  consentSuffix: string;
  submitButton: string;
  submittingButton: string;
  successHeading: string;
  successMessagePrefix: string;
  successMessageSuffix: string;
};

function validate(values: FormValues, errorMessages: ContatoFormDict["errors"]): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = errorMessages.name;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = errorMessages.email;
  if (!values.subject) errors.subject = errorMessages.subject;
  if (values.message.trim().length < 5) errors.message = errorMessages.message;
  if (!values.consent) errors.consent = errorMessages.consent;
  return errors;
}

function FormField({
  label,
  id,
  error,
  ...inputProps
}: {
  label: string;
  id: string;
  error?: string;
} & ComponentPropsWithoutRef<"input">) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <label htmlFor={id} className="text-sm font-bold leading-[1.2] text-texto">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`h-[50px] w-full rounded-lg border bg-branco px-4 text-base leading-[1.2] text-texto placeholder:text-texto-medio focus:outline-none focus:ring-2 focus:ring-azul-base/20 ${
          error ? "border-red-500" : "border-contorno-base focus:border-azul-base"
        }`}
        {...inputProps}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContatoForm({ dict, locale }: { dict: ContatoFormDict; locale: Locale }) {
  const [values, setValues] = useState<FormValues>(initialValues);
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

    // No contact API exists yet — simulate the request until one is wired up.
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 900);
  }

  return (
    <section aria-label={dict.ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <div
        id="mensagem"
        className="flex w-full max-w-[1400px] flex-col gap-5 rounded-[20px] border border-contorno-base bg-branco p-5 sm:p-[30px]"
      >
        {status === "success" ? (
          <div className="flex flex-col items-center gap-5 py-5 text-center">
            <CheckCircle2 className="size-14 text-ecm" aria-hidden="true" strokeWidth={1.5} />
            <div className="flex flex-col gap-2.5">
              <h3 className="text-lg font-extrabold leading-[1.2] text-texto">{dict.successHeading}</h3>
              <p className="text-sm leading-[1.2] font-medium text-texto-medio">
                {dict.successMessagePrefix}
                <span className="font-bold text-texto">{values.email}</span>
                {dict.successMessageSuffix}
              </p>
            </div>
          </div>
        ) : (
          <>
            <p className="text-2xl leading-[1.2] font-extrabold text-texto">{dict.heading}</p>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 sm:flex-row">
                <FormField
                  label={dict.nameLabel}
                  id="contato-name"
                  autoComplete="name"
                  placeholder={dict.namePlaceholder}
                  value={values.name}
                  error={errors.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                <FormField
                  label={dict.emailLabel}
                  id="contato-email"
                  type="email"
                  autoComplete="email"
                  placeholder={dict.emailPlaceholder}
                  value={values.email}
                  error={errors.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contato-subject" className="text-sm font-bold leading-[1.2] text-texto">
                  {dict.subjectLabel} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="contato-subject"
                    value={values.subject}
                    aria-invalid={!!errors.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    className={`h-[50px] w-full appearance-none rounded-lg border bg-branco py-0 pr-[50px] pl-4 text-base leading-[1.2] text-texto focus:outline-none focus:ring-2 focus:ring-azul-base/20 ${
                      errors.subject ? "border-red-500" : "border-contorno-base focus:border-azul-base"
                    }`}
                  >
                    <option value="">{dict.subjectPlaceholder}</option>
                    {dict.subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex w-[50px] items-center justify-center">
                    <ChevronDown className="size-5 text-texto-medio" aria-hidden="true" />
                  </span>
                </div>
                {errors.subject && <p className="text-xs font-medium text-red-600">{errors.subject}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contato-message" className="text-sm font-bold leading-[1.2] text-texto">
                  {dict.messageLabel} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contato-message"
                  rows={5}
                  aria-invalid={!!errors.message}
                  placeholder={dict.messagePlaceholder}
                  value={values.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`w-full resize-none rounded-lg border bg-branco px-4 py-3 text-base leading-[1.4] text-texto placeholder:text-texto-medio focus:outline-none focus:ring-2 focus:ring-azul-base/20 ${
                    errors.message ? "border-red-500" : "border-contorno-base focus:border-azul-base"
                  }`}
                />
                {errors.message && <p className="text-xs font-medium text-red-600">{errors.message}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2.5 text-sm font-medium leading-[1.2] text-texto-medio">
                  <input
                    type="checkbox"
                    checked={values.consent}
                    onChange={(e) => handleChange("consent", e.target.checked)}
                    className="size-4 shrink-0 rounded border-contorno-base text-azul-base focus:ring-azul-base"
                  />
                  <span>
                    {dict.consentPrefix}
                    <Link href={withLocale("/legal/privacidade", locale)} className="font-bold text-azul-base hover:underline">
                      {dict.consentPrivacy}
                    </Link>
                    {dict.consentSuffix}
                  </span>
                </label>
                {errors.consent && <p className="text-xs font-medium text-red-600">{errors.consent}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-full bg-azul-base px-5 text-base leading-[1.2] font-bold text-branco transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="size-5 animate-spin" aria-hidden="true" />
                    {dict.submittingButton}
                  </>
                ) : (
                  <>
                    {dict.submitButton}
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
