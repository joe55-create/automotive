// @ts-check

'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    title: 'Log Book Service',
    description:
      'Scheduled servicing aligned with manufacturer intervals to help protect reliability, performance, and warranty requirements.',
  },
  {
    title: 'Mechanical Repairs',
    description:
      'Accurate diagnostics and repair work for drivability issues, engine concerns, unusual noises, and critical faults.',
  },
  {
    title: 'Brakes',
    description:
      'Brake inspections, pad and rotor replacement, and servicing for safe, confident stopping.',
  },
  {
    title: 'Clutch / Transmission',
    description:
      'Driveline, clutch, and transmission support to help restore smooth gear changes and power delivery.',
  },
  {
    title: 'Tyres & Wheels',
    description:
      'Tyre fitting, balancing, and wheel support for better stability, grip, comfort, and road safety.',
  },
  {
    title: 'Pre Purchase Inspection',
    description:
      'Independent vehicle inspections to help buyers understand condition, risks, and repair needs before purchase.',
  },
  {
    title: 'Battery Replacement',
    description:
      'Battery testing and replacement to support reliable starting and everyday vehicle performance.',
  },
  {
    title: 'Wheel Alignment',
    description:
      'Alignment checks and adjustments to improve steering response, straight-line tracking, and tyre life.',
  },
  {
    title: 'Roadside Assistance',
    description:
      'Practical support when your vehicle is immobilised and you need help getting moving again.',
  },
];

const mobileService = {
  title: 'Mobile Battery Replacement & Vehicle Servicing',
  summary:
    'Convenient on-site battery testing, replacement, jump-start support, and practical vehicle servicing delivered at your location.',
  details: [
    'On-site battery testing and replacement',
    'Emergency jump-start assistance',
    'Battery health diagnostics',
    'Basic vehicle servicing',
    'Convenient mobile support',
  ],
};

/**
 * @typedef {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} HeadingLevel
 */

/**
 * @param {{
 *   level?: HeadingLevel;
 *   id: string;
 *   children: import('react').ReactNode;
 * }} props
 * @returns {import('react').ReactElement}
 */
function SectionHeading({ level = 'h2', id, children }) {
  const Tag = level;

  return (
    <Tag
      id={id}
      className="section-heading mt-4 max-w-5xl text-[var(--color-ink)]"
    >
      {children}
    </Tag>
  );
}

/**
 * @param {{
 *   headingLevel?: HeadingLevel;
 *   headingId?: string;
 * }} props
 * @returns {import('react').ReactElement}
 */
export default function Services({
  headingLevel = 'h2',
  headingId = 'services-heading',
}) {
  const [isOpen, setIsOpen] = useState(false);

  /** @type {import('react').RefObject<HTMLDivElement | null>} */
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    /**
     * @param {MouseEvent} event
     */
    const handleClickOutside = (event) => {
      if (!dropdownRef.current?.contains(/** @type {Node} */ (event.target))) {
        setIsOpen(false);
      }
    };

    /**
     * @param {KeyboardEvent} event
     */
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <section
      id="services"
      aria-labelledby={headingId}
      className="relative isolate overflow-hidden border-b border-[var(--color-divider)] py-[var(--section-space)]"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Mechanics.png"
          alt="Sarav Motors mechanics working inside the workshop"
          fill
          sizes="100vw"
          priority={false}
          className="object-cover object-center opacity-120"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.9)_0%,rgba(3,10,25,0.94)_48%,rgba(2,6,23,0.98)_100%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(245,158,11,0.16),transparent_30%),radial-gradient(circle_at_88%_78%,rgba(37,99,235,0.12),transparent_34%)]" />
      </div>

      <div className="section-shell">
        <div className="max-w-4xl">
          <p className="section-label text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-brand-light)]">
            Services
          </p>

          <SectionHeading level={headingLevel} id={headingId}>
            Complete workshop services for everyday drivers and modern vehicles.
          </SectionHeading>

          <p className="section-copy mt-6 max-w-3xl text-[var(--color-ink-soft)]">
            Sarav Motors provides reliable servicing, diagnostics, repairs,
            inspections, battery support, tyres, wheels, and roadside assistance
            with clear communication and practical advice.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {services.map((service) => (
            <span
              key={service.title}
              className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-[var(--color-ink-soft)] backdrop-blur-md transition duration-300 hover:border-[var(--color-brand)]/40 hover:bg-white/[0.08] hover:text-white"
            >
              {service.title}
            </span>
          ))}

          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-service-dropdown"
              onClick={() => setIsOpen((prev) => !prev)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-300 ${
                isOpen
                  ? 'border-[var(--color-brand)] bg-[var(--color-brand)] text-white'
                  : 'border-white/10 bg-white/[0.05] text-[var(--color-ink-soft)] hover:border-[var(--color-brand)]/60 hover:bg-white/[0.08] hover:text-white'
              }`}
            >
              {mobileService.title}
            </button>

            {isOpen ? (
              <div
                id="mobile-service-dropdown"
                className="absolute left-0 z-30 mt-3 w-[min(29rem,calc(100vw-2rem))] rounded-[1.7rem] border border-white/10 bg-[rgba(6,12,24,0.97)] p-5 shadow-2xl backdrop-blur-2xl"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-brand-light)]">
                  Mobile Support
                </p>

                <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
                  {mobileService.summary}
                </p>

                <div className="mt-5 grid gap-2">
                  {mobileService.details.map((detail) => (
                    <p
                      key={detail}
                      className="rounded-[1rem] border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-[var(--color-ink-soft)]"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,30,56,0.84)_0%,rgba(10,20,40,0.92)_100%)] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/45 hover:bg-[linear-gradient(180deg,rgba(22,39,70,0.9)_0%,rgba(12,24,46,0.95)_100%)]"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-ink-muted)]">
                  {String(index + 1).padStart(2, '0')}
                </p>

                <span className="h-2 w-2 rounded-full bg-[var(--color-brand)] opacity-70 transition duration-300 group-hover:scale-125 group-hover:opacity-100" />
              </div>

              <h3 className="mt-4 text-[1.15rem] font-semibold tracking-[-0.02em] text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}