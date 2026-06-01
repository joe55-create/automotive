// @ts-check

'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { useRef, useState } from 'react';

import AnimatedHeading from '@/components/AnimatedHeading';
import { reportError } from '@/lib/monitoring';
import { quoteSchema } from '@/lib/quote-schema';

const easing = /** @type {[number, number, number, number]} */ ([0.22, 1, 0.36, 1]);

/**
 * @param {{
 *   services: { title: string }[];
 *   headingId?: string;
 * }} props
 * @returns {import('react').ReactElement}
 */
export default function QuoteForm({ services, headingId = 'quote-heading' }) {
  /** @type {import('react').RefObject<HTMLFormElement | null>} */
  const formRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(
    /** @type {{ type: 'success' | 'error' | ''; message: string }} */ ({
      type: '',
      message: '',
    })
  );

  const [fieldErrors, setFieldErrors] = useState(
    /** @type {Record<string, string | undefined>} */ ({})
  );

  /**
   * @param {Record<string, string[] | undefined>} errors
   * @returns {Record<string, string | undefined>}
   */
  function normalizeFieldErrors(errors) {
    return {
      name: errors.name?.[0],
      phone: errors.phone?.[0],
      email: errors.email?.[0],
      service: errors.service?.[0],
      car_model: errors.car_model?.[0],
      message: errors.message?.[0],
      website: errors.website?.[0],
    };
  }

  /**
   * @param {import('react').FormEvent<HTMLFormElement>} event
   * @returns {Promise<void>}
   */
  async function handleSubmit(event) {
    event.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const parsed = quoteSchema.safeParse(payload);

    if (!parsed.success) {
      setFieldErrors(normalizeFieldErrors(parsed.error.flatten().fieldErrors));
      setStatus({
        type: 'error',
        message: 'Please correct the highlighted fields before sending.',
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: '', message: '' });
    setFieldErrors({});

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });

      /** @type {{ message?: string; fieldErrors?: Record<string, string[] | undefined> }} */
      const result = await response.json();

      if (!response.ok) {
        if (result.fieldErrors) {
          setFieldErrors(normalizeFieldErrors(result.fieldErrors));
        }

        setStatus({
          type: 'error',
          message:
            typeof result.message === 'string'
              ? result.message
              : 'We could not send your request right now. Please try again shortly.',
        });
        return;
      }

      form.reset();

      setStatus({
        type: 'success',
        message:
          typeof result.message === 'string'
            ? result.message
            : 'Your quote request has been sent. We will be in touch shortly.',
      });
    } catch (error) {
      reportError(error, { source: 'QuoteForm.handleSubmit' });

      setStatus({
        type: 'error',
        message:
          'We could not send your request right now. Please try again or call 0452 066 583.',
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="quote"
      aria-labelledby={headingId}
      className="relative border-b border-gray-200 bg-white py-[var(--section-space)]"
    >
      <div className="section-shell grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.82, ease: easing }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
            Get A Quote
          </p>

          <AnimatedHeading
            as="h2"
            id={headingId}
            text="Tell us what your vehicle needs. We’ll respond with practical next steps."
            className="text-balance mt-4 max-w-3xl text-[2rem] leading-[1.1] font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-[2.6rem] lg:text-[3rem]"
          />

          <p className="mt-6 max-w-2xl text-[1.05rem] leading-[1.7] text-[var(--color-ink-soft)]">
            Send your details once and Sarav Motors will review your request,
            confirm the right service pathway, and get back to you with clear
            advice.
          </p>

          <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
            <ContactCard
              icon={Phone}
              label="Phone"
              value="0452 066 583"
              href="tel:0452066583"
            />

            <ContactCard
              icon={Mail}
              label="Email"
              value="saravmotors@gmail.com"
              href="mailto:saravmotors@gmail.com"
            />

            <ContactCard
              icon={MapPin}
              label="Location"
              value="3/356 Lower Dandenong Rd, Braeside VIC 3195, Australia"
            />
          </div>

        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.82, ease: easing, delay: 0.05 }}
          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] sm:p-7"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              error={fieldErrors.name}
              required
            />

            <Field
              id="phone"
              label="Phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              error={fieldErrors.phone}
              required
            />

            <Field
              id="email"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              error={fieldErrors.email}
              required
            />

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-semibold text-gray-700">
                Service
              </label>

              <select
                id="service"
                name="service"
                required
                defaultValue=""
                aria-describedby={fieldErrors.service ? 'service-error' : undefined}
                aria-invalid={Boolean(fieldErrors.service)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none transition duration-300 focus:border-[var(--color-brand)] focus:ring-2 focus:ring-blue-100"
              >
                <option value="" disabled>
                  Select a service
                </option>

                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>

              {fieldErrors.service ? (
                <p id="service-error" className="text-sm text-red-600">
                  {fieldErrors.service}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-4">
            <Field
              id="car_model"
              label="Car Model"
              name="car_model"
              autoComplete="off"
              error={fieldErrors.car_model}
              required
            />
          </div>

          <div className="mt-4 space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-gray-700">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell us what your vehicle needs, any symptoms, and your preferred timing."
              aria-describedby={fieldErrors.message ? 'message-error' : undefined}
              aria-invalid={Boolean(fieldErrors.message)}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm leading-7 text-[var(--color-ink)] outline-none transition duration-300 placeholder:text-gray-400 focus:border-[var(--color-brand)] focus:ring-2 focus:ring-blue-100"
            />

            {fieldErrors.message ? (
              <p id="message-error" className="text-sm text-red-600">
                {fieldErrors.message}
              </p>
            ) : null}
          </div>

          <div className="sr-only" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-brand)] px-7 py-4 text-sm font-medium text-white shadow-[0_10px_30px_rgba(37,99,235,0.20)] transition duration-300 hover:bg-[var(--color-brand-hover)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? 'Sending...' : 'Request Quote'}
            </button>
          </div>

          {status.message ? (
            <p
              className={`mt-5 rounded-xl border px-4 py-3 text-sm font-medium ${
                status.type === 'success'
                  ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                  : 'border-red-300 bg-red-50 text-red-700'
              }`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          ) : null}
        </motion.form>

        <div className="flex justify-center lg:col-span-2">
          <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 px-8 py-4 text-center">
            <ShieldCheck
              size={20}
              strokeWidth={2}
              className="shrink-0 text-[var(--color-brand)]"
            />

            <p className="text-sm font-medium leading-6 text-[var(--color-ink-soft)]">
              Your enquiry is reviewed by the Sarav Motors team before any work
              is recommended.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * @param {{
 *   icon: import('lucide-react').LucideIcon;
 *   label: string;
 *   value: string;
 *   href?: string;
 * }} props
 * @returns {import('react').ReactElement}
 */
function ContactCard({ icon: Icon, label, value, href }) {
  const content = (
    <div className="group flex items-center gap-4 py-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-[var(--color-brand)] transition duration-300 group-hover:bg-[var(--color-brand)] group-hover:text-white">
        <Icon size={18} strokeWidth={2} />
      </div>

      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
          {label}
        </p>

        <p className="mt-0.5 text-[0.98rem] font-medium leading-6 text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-brand)]">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}

/**
 * @param {{
 *   id: string;
 *   label: string;
 *   name: string;
 *   type?: string;
 *   autoComplete?: string;
 *   required?: boolean;
 *   error?: string;
 * }} props
 * @returns {import('react').ReactElement}
 */
function Field({
  id,
  label,
  name,
  type = 'text',
  autoComplete,
  required = false,
  error,
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-semibold text-gray-700">
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none transition duration-300 placeholder:text-gray-400 focus:border-[var(--color-brand)] focus:ring-2 focus:ring-blue-100"
      />

      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}