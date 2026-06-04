// @ts-check

'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import AnimatedHeading from '@/components/AnimatedHeading';
import {
  BatteryCharging,
  Car,
  ChevronDown,
  CircleGauge,
  Cog,
  Disc,
  MapPin,
  MoveHorizontal,
  SearchCheck,
  TriangleAlert,
  Wrench,
} from 'lucide-react';

const easing = /** @type {[number, number, number, number]} */ ([0.22, 1, 0.36, 1]);

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easing, delay },
  }),
};

/**
 * @typedef {{
 *   title: string;
 *   icon: import('lucide-react').LucideIcon;
 *   description: string;
 *   details?: string[];
 * }} Service
 */

/** @type {Service[]} */
const services = [
  {
    title: 'Log Book Service',
    icon: Car,
    description:
      'Scheduled servicing aligned with manufacturer intervals to help protect reliability, performance, and warranty requirements.',
  },
  {
    title: 'Mechanical Repairs',
    icon: Wrench,
    description:
      'Accurate diagnostics and repair work for drivability issues, engine concerns, unusual noises, and critical faults.',
  },
  {
    title: 'Brakes',
    icon: Disc,
    description:
      'Brake inspections, pad and rotor replacement, and servicing for safe, confident stopping.',
  },
  {
    title: 'Clutch / Transmission',
    icon: Cog,
    description:
      'Driveline, clutch, and transmission support to help restore smooth gear changes and power delivery.',
  },
  {
    title: 'Tyres & Wheels',
    icon: CircleGauge,
    description:
      'Tyre fitting, balancing, and wheel support for better stability, grip, comfort, and road safety.',
  },
  {
    title: 'Pre Purchase Inspection',
    icon: SearchCheck,
    description:
      'Independent vehicle inspections to help buyers understand condition, risks, and repair needs before purchase.',
  },
  {
    title: 'Battery Replacement',
    icon: BatteryCharging,
    description:
      'Battery testing and replacement to support reliable starting and everyday vehicle performance.',
  },
  {
    title: 'Wheel Alignment',
    icon: MoveHorizontal,
    description:
      'Alignment checks and adjustments to improve steering response, straight-line tracking, and tyre life.',
  },
  {
    title: 'Roadside Assistance',
    icon: TriangleAlert,
    description:
      'Practical support when your vehicle is immobilised and you need help getting moving again.',
  },
];

// Full accordion list — regular services plus the richer mobile offering
/** @type {Service[]} */
const serviceList = [
  ...services,
  {
    title: 'Mobile Battery Replacement & Vehicle Servicing',
    icon: MapPin,
    description:
      'Convenient on-site battery testing, replacement, jump-start support, and practical vehicle servicing delivered at your location.',
    details: [
      'On-site battery testing and replacement',
      'Emergency jump-start assistance',
      'Battery health diagnostics',
      'Basic vehicle servicing',
      'Convenient mobile support',
    ],
  },
];

/**
 * @param {{
 *   headingLevel?: 'h1' | 'h2';
 *   headingId?: string;
 * }} props
 * @returns {import('react').ReactElement}
 */
export default function Services({
  headingLevel = 'h2',
  headingId = 'services-heading',
}) {
  const [openIndex, setOpenIndex] = useState(
    /** @type {number | null} */ (0),
  );

  return (
    <section
      id="services"
      aria-labelledby={headingId}
      className="relative overflow-hidden border-b border-gray-200 bg-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/braeside-diagnostics.webp"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Calm, even overlay — content stays clean */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
      </div>

      <div className="section-shell relative z-10 py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          custom={0}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
            Workshop Services
          </p>

          <AnimatedHeading
            as={headingLevel}
            id={headingId}
            className="text-balance mt-5 max-w-3xl text-[2.4rem] leading-[1.05] font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-[3rem] lg:text-[3.5rem]"
            segments={[
              { text: 'Professional servicing, diagnostics and repairs ' },
              {
                text: 'delivered with confidence.',
                className: 'text-[var(--color-brand)]',
              },
            ]}
          />

          <p className="mt-6 max-w-2xl text-[1.05rem] leading-[1.7] text-[var(--color-ink-soft)] sm:text-lg">
            From routine maintenance to complex mechanical repairs, Sarav Motors
            combines advanced diagnostics, experienced technicians, and honest
            advice to keep your vehicle performing at its best.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          custom={0.08}
          variants={fadeUp}
          className="mt-12 max-w-4xl divide-y divide-gray-200 border-y border-gray-200"
        >
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            const isActive = openIndex === index;

            return (
              <div key={service.title}>
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setOpenIndex(isActive ? null : index)}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition duration-300 ${
                      isActive
                        ? 'border-[var(--color-brand)] bg-[var(--color-brand)] text-white'
                        : 'border-gray-200 bg-gray-50 text-[var(--color-brand)]'
                    }`}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </span>

                  <span className="flex-1 text-[1.05rem] font-semibold tracking-[-0.01em] text-[var(--color-ink)]">
                    {service.title}
                  </span>

                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className={`shrink-0 text-[var(--color-ink)] transition-transform duration-300 ${
                      isActive ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isActive ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: easing }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-14 pr-6">
                        <p className="text-sm leading-7 text-[var(--color-ink-soft)]">
                          {service.description}
                        </p>

                        {service.details ? (
                          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                            {service.details.map((detail) => (
                              <li
                                key={detail}
                                className="flex items-center gap-2.5 text-sm text-[var(--color-ink-soft)]"
                              >
                                <span
                                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand)]"
                                  aria-hidden="true"
                                />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}