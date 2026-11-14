import { useId, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { business, contactCopy, serviceOptions } from "../content";
import { PhoneLink } from "./PhoneLink";

type Fields = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<"name" | "phone" | "email" | "service", string>>;

const empty: Fields = { name: "", phone: "", email: "", service: "", message: "" };

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = contactCopy.errors.name;
  if (!fields.phone.trim()) errors.phone = contactCopy.errors.phoneRequired;
  else if (!/^\d{10}$/.test(fields.phone.replace(/[^\d]/g, ""))) {
    errors.phone = contactCopy.errors.phoneInvalid;
  }
  if (!fields.email.trim()) errors.email = contactCopy.errors.emailRequired;
  else if (!/\S+@\S+\.\S+/.test(fields.email)) errors.email = contactCopy.errors.emailInvalid;
  if (!fields.service) errors.service = contactCopy.errors.service;
  return errors;
}

export function Contact() {
  const formId = useId();
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (name: keyof Fields, value: string) => {
    setFields((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate(fields);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0];
      document.getElementById(`${formId}-${first}`)?.focus();
      return;
    }
    setSent(true);
  };

  return (
    <section id={contactCopy.id} className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <h2 className="font-serif text-4xl leading-tight font-medium text-pine text-balance md:text-5xl">
            {contactCopy.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-bark">{contactCopy.lead}</p>
          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-sm font-semibold tracking-wide text-fern uppercase">{contactCopy.phoneLabel}</dt>
              <dd className="mt-1">
                <PhoneLink className="font-serif text-3xl text-pine hover:text-cedar">{business.phoneDisplay}</PhoneLink>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold tracking-wide text-fern uppercase">{contactCopy.emailLabel}</dt>
              <dd className="mt-1">
                <a className="text-lg text-ink underline decoration-line underline-offset-4 hover:text-cedar" href={`mailto:${business.email}`}>
                  {business.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold tracking-wide text-fern uppercase">{contactCopy.addressLabel}</dt>
              <dd className="mt-1 text-lg text-ink">
                <address className="not-italic">{business.addressLine}</address>
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-sand p-5 md:p-8">
          {sent ? (
            <div>
              <h3 className="font-serif text-3xl font-medium text-pine">{contactCopy.successTitle}</h3>
              <p className="mt-3 text-base leading-relaxed text-bark">{contactCopy.successBody}</p>
              <button
                type="button"
                className="mt-6 font-semibold text-fern underline underline-offset-4"
                onClick={() => setSent(false)}
              >
                {contactCopy.reset}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  id={`${formId}-name`}
                  label={contactCopy.nameLabel}
                  error={errors.name}
                  className="sm:col-span-1"
                >
                  <input
                    id={`${formId}-name`}
                    name="name"
                    autoComplete="name"
                    value={fields.name}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                    onChange={(event) => update("name", event.target.value)}
                    className={inputClass(Boolean(errors.name))}
                  />
                </Field>
                <Field id={`${formId}-phone`} label={contactCopy.phoneLabel} error={errors.phone}>
                  <input
                    id={`${formId}-phone`}
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={fields.phone}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
                    onChange={(event) => update("phone", event.target.value)}
                    className={inputClass(Boolean(errors.phone))}
                  />
                </Field>
              </div>
              <Field id={`${formId}-email`} label={contactCopy.emailLabel} error={errors.email} className="mt-4">
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                  onChange={(event) => update("email", event.target.value)}
                  className={inputClass(Boolean(errors.email))}
                />
              </Field>
              <Field id={`${formId}-service`} label={contactCopy.serviceLabel} error={errors.service} className="mt-4">
                <select
                  id={`${formId}-service`}
                  name="service"
                  value={fields.service}
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? `${formId}-service-error` : undefined}
                  onChange={(event) => update("service", event.target.value)}
                  className={inputClass(Boolean(errors.service))}
                >
                  <option value="">{contactCopy.servicePlaceholder}</option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id={`${formId}-message`} label={contactCopy.messageLabel} className="mt-4">
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  rows={4}
                  value={fields.message}
                  onChange={(event) => update("message", event.target.value)}
                  className={`${inputClass(false)} resize-y`}
                />
              </Field>
              <p className="mt-4 text-sm leading-relaxed text-bark">{contactCopy.privacy}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink">{contactCopy.browserOnly}</p>
              <button
                type="submit"
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center bg-cedar px-6 text-base font-semibold text-white hover:bg-cedar-deep"
              >
                {contactCopy.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function inputClass(invalid: boolean) {
  return `min-h-12 w-full border bg-white px-3 text-base text-ink ${
    invalid ? "border-cedar" : "border-line"
  }`;
}

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-cedar">
          {error}
        </p>
      ) : null}
    </div>
  );
}
