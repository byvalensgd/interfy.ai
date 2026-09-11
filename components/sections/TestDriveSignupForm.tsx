"use client";

import { useState, type ComponentPropsWithoutRef, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { withLocale } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/config";

type FormValues = {
  name: string;
  email: string;
  company: string;
  phone: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  consent: false,
};

type FormDict = {
  heading: string;
  subheading: string;
  nameLabel: string;
  emailLabel: string;
  companyLabel: string;
  phoneLabel: string;
  optionalLabel: string;
  errors: {
    name: string;
    email: string;
    company: string;
    consent: string;
  };
  consentPrefix: string;
  consentTerms: string;
  consentMiddle: string;
  consentPrivacy: string;
  consentSuffix: string;
  submitButton: string;
  submittingButton: string;
  successHeading: string;
  successMessagePrefix: string;
  successMessageSuffix: string;
  specialistLink: string;
};

function validate(values: FormValues, errorMessages: FormDict["errors"]): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = errorMessages.name;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = errorMessages.email;
  if (!values.company.trim()) errors.company = errorMessages.company;
  if (!values.consent) errors.consent = errorMessages.consent;
  return errors;
}

function FormField({
  label,
  id,
  error,
  optional,
  optionalLabel,
  ...inputProps
}: {
  label: string;
  id: string;
  error?: string;
  optional?: boolean;
  optionalLabel?: string;
} & ComponentPropsWithoutRef<"input">) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-bold leading-[1.2] text-texto">
        {label}
        {optional && <span className="font-medium text-texto-medio"> {optionalLabel}</span>}
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

export default function TestDriveSignupForm({ dict, locale }: { dict: FormDict; locale: Locale }) {
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

    // No signup API exists yet — simulate the request until one is wired up.
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 900);
  }

  return (
    <div
      id="inscricao"
      className="flex w-full flex-col gap-5 rounded-[20px] border border-contorno-base bg-branco p-5 sm:p-[30px]"
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
          <Link
            href={withLocale("/demo", locale)}
            className="inline-flex min-h-[40px] items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-azul-base px-5 py-2.5 text-sm leading-[1.2] font-bold text-azul-base transition-colors hover:bg-azul-bg-superior"
          >
            {dict.specialistLink}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-extrabold leading-[1.2] text-texto">{dict.heading}</h3>
            <p className="text-sm leading-[1.2] font-medium text-texto-medio">{dict.subheading}</p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <FormField
              label={dict.nameLabel}
              id="td-name"
              autoComplete="name"
              value={values.name}
              error={errors.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <FormField
              label={dict.emailLabel}
              id="td-email"
              type="email"
              autoComplete="email"
              value={values.email}
              error={errors.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <FormField
              label={dict.companyLabel}
              id="td-company"
              autoComplete="organization"
              value={values.company}
              error={errors.company}
              onChange={(e) => handleChange("company", e.target.value)}
            />
            <FormField
              label={dict.phoneLabel}
              id="td-phone"
              type="tel"
              optional
              optionalLabel={dict.optionalLabel}
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />

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
                  <Link href={withLocale("/legal/termos", locale)} className="font-bold text-azul-base hover:underline">
                    {dict.consentTerms}
                  </Link>
                  {dict.consentMiddle}
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
              className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-lg bg-azul-base px-5 text-base leading-[1.2] font-bold text-branco transition-colors hover:bg-azul-base/90 disabled:cursor-not-allowed disabled:opacity-70"
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
  );
}
