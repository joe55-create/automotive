// @ts-check
'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  { title: 'Log Book Service', description: 'Scheduled servicing aligned with manufacturer intervals to protect reliability and warranty.' },
  { title: 'Mechanical Repairs', description: 'Diagnostics and repair work for drivability issues and critical faults.' },
  { title: 'Brakes', description: 'Brake inspections, pad/rotor replacement, and servicing for safe stopping.' },
  { title: 'Clutch / Transmission', description: 'Driveline servicing to restore smooth gear changes and power delivery.' },
  { title: 'Tyres & Wheels', description: 'Tyre fitting, balancing, and wheel support for stability and grip.' },
  { title: 'Pre Purchase Inspection', description: 'Independent inspections to help buyers make informed decisions.' },
  { title: 'Battery Replacement', description: 'Battery testing and replacement for reliable starting performance.' },
  { title: 'Roadside Assistance', description: 'Immediate support when your vehicle is immobilised.' },
];

const mobileService = {
  title: 'Mobile Battery Replacement & Vehicle Servicing',
  summary:
    'On-site battery replacement, jump-start support, and practical servicing delivered at your location.',
  details: [
    'On-site battery testing and replacement',
    'Emergency jump-start assistance',
    'Battery health diagnostics',
    'Basic vehicle servicing',
    'Convenient mobile support',
  ],
};

const headingClasses = 'section-heading mt-4 text-[var(--color-ink)]';

/**
 * @typedef {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} HeadingLevel
 */

/**
 * @param {{
 *   level?: HeadingLevel;
 *   id: string;
 *   text: string;
 * }} props
 * @returns {import('react').ReactElement}
 */
function SectionHeading(props) {
  const { level = 'h2', id, text } = props;
  const Tag = level;

  return (
    <Tag id={id} className={headingClasses}>
      {text}
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
export default function Services({ headingLevel = 'h2', headingId = 'services-heading' }) {
  const [isOpen, setIsOpen] = useState(false);

  /** @type {import('react').RefObject<HTMLDivElement | null>} */
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    /**
     * @param {MouseEvent} event
     */
    const handleClick = (event) => {
      if (!dropdownRef.current?.contains(/** @type {Node} */ (event.target))) {
        setIsOpen(false);
      }
    };

    /**
     * @param {KeyboardEvent} event
     */
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  return (
    <section
      id="services"
      aria-labelledby={headingId}
      className="border-b border-[var(--color-divider)] py-[var(--section-space)]"
    >
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-label text-[11px] font-semibold">Services</p>

          <SectionHeading
            level={headingLevel}
            id={headingId}
            text="Straightforward workshop services, clearly listed."
          />

          <p className="section-copy mt-6">
            We focus on essential servicing, repairs, and inspections — presented clearly and
            without unnecessary complexity.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {services.map((service) => (
            <span
              key={service.title}
              className="rounded-full border border-[var(--color-divider)] bg-[var(--color-surface-overlay)] px-4 py-2 text-sm text-[var(--color-ink-soft)]"
            >
              {service.title}
            </span>
          ))}

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-service-dropdown"
              onClick={() => setIsOpen((prev) => !prev)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isOpen
                  ? 'border-[var(--color-brand)] bg-[var(--color-brand)] text-white'
                  : 'border-[var(--color-divider)] bg-[var(--color-surface-overlay)] text-[var(--color-ink-soft)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand-light)]'
              }`}
            >
              {mobileService.title}
            </button>

            {isOpen ? (
              <div
                id="mobile-service-dropdown"
                className="absolute left-0 z-20 mt-3 w-[min(28rem,calc(100vw-2rem))] rounded-[1.6rem] border border-[var(--color-divider)] bg-[rgba(7,16,31,0.96)] p-5 shadow-xl backdrop-blur"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
                  Mobile Support
                </p>

                <p className="mt-3 text-sm text-[var(--color-ink-soft)]">
                  {mobileService.summary}
                </p>

                <div className="mt-4 grid gap-2">
                  {mobileService.details.map((detail) => (
                    <p
                      key={detail}
                      className="rounded-[1rem] border border-[var(--color-divider)] bg-[var(--color-surface-overlay)] px-3 py-2 text-sm text-[var(--color-ink-soft)]"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="glass-panel rounded-[1.6rem] p-6">
              <h3 className="text-[1.1rem] font-semibold text-[var(--color-ink)]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm text-[var(--color-ink-soft)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}