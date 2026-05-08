// @ts-check

'use client';

import { motion } from 'framer-motion';

const easing = /** @type {[number, number, number, number]} */ ([
  0.22, 1, 0.36, 1,
]);

const contactDetails = [
  {
    label: 'Phone',
    value: '0452 066 583',
    href: 'tel:+61452066583',
  },
  {
    label: 'Email',
    value: 'saravmotors@gmail.com',
    href: 'mailto:saravmotors@gmail.com',
  },
];

const address =
  '3/356 Lower Dandenong Rd, Braeside VIC 3195, Australia';

const mapUrl =
  'https://www.google.com/maps?q=3%2F356%20Lower%20Dandenong%20Rd%2C%20Braeside%20VIC%203195%2C%20Australia&z=15&output=embed';

const googleMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=3%2F356%20Lower%20Dandenong%20Rd%2C%20Braeside%20VIC%203195%2C%20Australia';

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
    <Tag id={id} className="section-heading mt-4 text-[var(--color-ink)]">
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
export default function Contact({
  headingLevel = 'h2',
  headingId = 'contact-heading',
}) {
  return (
    <section
      id="contact"
      aria-labelledby={headingId}
      className="relative overflow-hidden py-[var(--section-space)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(245,158,11,0.10),transparent_32%),radial-gradient(circle_at_90%_75%,rgba(37,99,235,0.08),transparent_35%)]" />

      <div className="section-shell relative z-10 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.82, ease: easing }}
          className="glass-panel rounded-[2.2rem] p-7 shadow-xl sm:p-8"
        >
          <p className="section-label text-[11px] font-semibold">
            Contact Sarav Motors
          </p>

          <SectionHeading level={headingLevel} id={headingId}>
            Visit the workshop or call directly.
          </SectionHeading>

          <p className="mt-5 text-base leading-8 text-[var(--color-ink-soft)]">
            For bookings, inspections, servicing, repairs, battery support,
            roadside help, or general enquiries, contact the workshop directly.
          </p>

          <div className="mt-9 space-y-5">
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.4rem] border border-[var(--color-divider)] bg-[var(--color-surface-overlay)] p-5 transition duration-300 hover:border-[var(--color-brand)]/40"
              >
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-ink-muted)]">
                  {item.label}
                </p>

                <a
                  href={item.href}
                  className="mt-3 block text-[1.18rem] font-semibold tracking-[-0.02em] text-[var(--color-brand-light)] transition hover:text-[var(--color-brand)]"
                >
                  {item.value}
                </a>
              </div>
            ))}

            <div className="rounded-[1.4rem] border border-[var(--color-divider)] bg-[var(--color-surface-overlay)] p-5 transition duration-300 hover:border-[var(--color-brand)]/40">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-ink-muted)]">
                Workshop Address
              </p>

              <p className="mt-3 text-[1.05rem] leading-8 text-[var(--color-ink)]">
                {address}
              </p>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-full border border-[var(--color-brand)]/40 px-5 py-2.5 text-sm font-semibold text-[var(--color-brand-light)] transition duration-300 hover:border-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.82, ease: easing, delay: 0.05 }}
          className="relative min-h-[420px] overflow-hidden rounded-[2.2rem] border border-[var(--color-navy-border)] bg-[var(--color-navy-surface)] shadow-2xl lg:min-h-[600px]"
        >
          <iframe
            title="Map showing the Sarav Motors workshop location in Braeside"
            src={mapUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
}