"use client";

import { useState, type ComponentPropsWithoutRef, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { withLocale } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/config";
import { PHONE_PLACEHOLDERS } from "@/lib/i18n/phoneFormat";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  companySize: string;
  interest: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<
  Record<"firstName" | "lastName" | "email" | "company" | "phone" | "companySize" | "interest" | "consent", string>
>;

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phone: "",
  companySize: "",
  interest: "",
  message: "",
  consent: false,
};

type DemoFormDict = {
  heading: string;
  subheading: string;
  firstNameLabel: string;
  lastNameLabel: string;
  emailLabel: string;
  companyLabel: string;
  phoneLabel: string;
  companySizeLabel: string;
  companySizePlaceholder: string;
  companySizeOptions: string[];
  interestLabel: string;
  interestPlaceholder: string;
  interestOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  optionalLabel: string;
  errors: { name: string; email: string; company: string; phone: string; companySize: string; interest: string; consent: string };
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

function validate(values: FormValues, errorMessages: DemoFormDict["errors"]): FormErrors {
  const errors: FormErrors = {};
  if (!values.firstName.trim()) errors.firstName = errorMessages.name;
  if (!values.lastName.trim()) errors.lastName = errorMessages.name;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = errorMessages.email;
  if (!values.company.trim()) errors.company = errorMessages.company;
  if (!values.phone.trim()) errors.phone = errorMessages.phone;
  if (!values.companySize) errors.companySize = errorMessages.companySize;
  if (!values.interest) errors.interest = errorMessages.interest;
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
        {optional ? (
          <span className="font-medium text-texto-medio"> {optionalLabel}</span>
        ) : (
          <span className="text-red-500"> *</span>
        )}
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

export default function DemoForm({ dict, locale }: { dict: DemoFormDict; locale: Locale }) {
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

    // No CRM/scheduling API exists yet — simulate the request until one is wired up.
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 900);
  }

  return (
    <div className="flex w-full flex-col gap-5 rounded-[20px] border border-contorno-base bg-gradient-to-br from-branco to-bg-base p-5 sm:p-[30px]">
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
            href={withLocale("/test-drive", locale)}
            className="inline-flex min-h-[40px] items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-azul-base px-5 py-2.5 text-sm leading-[1.2] font-bold text-azul-base transition-colors hover:bg-azul-bg-superior"
          >
            {dict.specialistLink}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                label={dict.firstNameLabel}
                id="demo-first-name"
                autoComplete="given-name"
                value={values.firstName}
                error={errors.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
              <FormField
                label={dict.lastNameLabel}
                id="demo-last-name"
                autoComplete="family-name"
                value={values.lastName}
                error={errors.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>

            <FormField
              label={dict.emailLabel}
              id="demo-email"
              type="email"
              autoComplete="email"
              value={values.email}
              error={errors.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            <FormField
              label={dict.phoneLabel}
              id="demo-phone"
              type="tel"
              autoComplete="tel"
              placeholder={PHONE_PLACEHOLDERS[locale]}
              value={values.phone}
              error={errors.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                label={dict.companyLabel}
                id="demo-company"
                autoComplete="organization"
                value={values.company}
                error={errors.company}
                onChange={(e) => handleChange("company", e.target.value)}
              />
              <div className="flex flex-col gap-2">
                <label htmlFor="demo-size" className="text-sm font-bold leading-[1.2] text-texto">
                  {dict.companySizeLabel} <span className="text-red-500">*</span>
                </label>
                <select
                  id="demo-size"
                  aria-invalid={!!errors.companySize}
                  value={values.companySize}
                  onChange={(e) => handleChange("companySize", e.target.value)}
                  className={`h-[50px] w-full rounded-lg border bg-branco px-4 text-base leading-[1.2] text-texto focus:outline-none focus:ring-2 focus:ring-azul-base/20 ${
                    errors.companySize ? "border-red-500" : "border-contorno-base focus:border-azul-base"
                  }`}
                >
                  <option value="">{dict.companySizePlaceholder}</option>
                  {dict.companySizeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.companySize && <p className="text-xs font-medium text-red-600">{errors.companySize}</p>}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="demo-interest" className="text-sm font-bold leading-[1.2] text-texto">
                {dict.interestLabel} <span className="text-red-500">*</span>
              </label>
              <select
                id="demo-interest"
                aria-invalid={!!errors.interest}
                value={values.interest}
                onChange={(e) => handleChange("interest", e.target.value)}
                className={`h-[50px] w-full rounded-lg border bg-branco px-4 text-base leading-[1.2] text-texto focus:outline-none focus:ring-2 focus:ring-azul-base/20 ${
                  errors.interest ? "border-red-500" : "border-contorno-base focus:border-azul-base"
                }`}
              >
                <option value="">{dict.interestPlaceholder}</option>
                {dict.interestOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.interest && <p className="text-xs font-medium text-red-600">{errors.interest}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="demo-message" className="text-sm font-bold leading-[1.2] text-texto">
                {dict.messageLabel}
                <span className="font-medium text-texto-medio"> {dict.optionalLabel}</span>
              </label>
              <textarea
                id="demo-message"
                rows={3}
                placeholder={dict.messagePlaceholder}
                value={values.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="w-full resize-none rounded-lg border border-contorno-base bg-branco px-4 py-3 text-base leading-[1.4] text-texto placeholder:text-texto-medio focus:border-azul-base focus:outline-none focus:ring-2 focus:ring-azul-base/20"
              />
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
              className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-full bg-[linear-gradient(111.8deg,#184aee_22.86%,#bf18f6_96.41%)] px-5 text-base leading-[1.2] font-bold text-branco transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
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
