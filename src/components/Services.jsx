// @ts-check

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  BatteryCharging,
  Car,
  CircleGauge,
  Cog,
  Disc,
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

export default function Services({
  headingLevel = 'h2',
  headingId = 'services-heading',
}) {
  const [isOpen, setIsOpen] = useState(false);

  /** @type {import('react').RefObject<HTMLDivElement | null>} */
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleClickOutside = (event) => {
      if (!dropdownRef.current?.contains(/** @type {Node} */ (event.target))) {
        setIsOpen(false);
      }
    };

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

  const Heading = headingLevel === 'h1' ? 'h1' : 'h2';

  return (
    <section
      id="services"
      aria-labelledby={headingId}
      className="relative overflow-hidden border-b border-gray-200"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/braeside-diagnostics.webp"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/82 via-white/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10" />
      </div>

      <div className="section-shell relative z-10 py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          custom={0}
          variants={fadeUp}
          className="max-w-5xl"
        >
          <p className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-brand)] shadow-sm backdrop-blur-md">
            Premium Workshop Services
          </p>

          <Heading
            id={headingId}
            className="mt-6 max-w-6xl text-[3rem] leading-[0.9] font-black tracking-[-0.08em] text-black sm:text-[4.5rem] lg:text-[5.8rem]"
          >
            Professional servicing,
            <br />
            diagnostics and repairs
            <span className="block text-[var(--color-brand)]">
              delivered with confidence.
            </span>
          </Heading>

          <p className="mt-8 max-w-3xl text-[1.08rem] leading-8 text-gray-700 sm:text-lg">
            From routine maintenance to complex mechanical repairs, Sarav Motors
            combines advanced diagnostics, experienced technicians, and honest
            advice to keep your vehicle performing at its best.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.08}
          variants={fadeUp}
          className="mt-12 flex flex-wrap gap-3"
        >
          {services.map((service) => (
            <span
              key={service.title}
              className="rounded-full border border-white/70 bg-white/80 px-5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand)] hover:bg-white/95 hover:text-[var(--color-brand)]"
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
              className={`rounded-full border px-5 py-2.5 text-sm font-bold shadow-sm backdrop-blur-xl transition-all duration-300 ${
                isOpen
                  ? 'border-[var(--color-brand)] bg-[var(--color-brand)] text-white shadow-[0_14px_35px_rgba(37,99,235,0.25)]'
                  : 'border-white/70 bg-white/80 text-gray-800 hover:-translate-y-0.5 hover:border-[var(--color-brand)] hover:bg-white/95 hover:text-[var(--color-brand)]'
              }`}
            >
              {mobileService.title}
            </button>

            {isOpen ? (
              <motion.div
                id="mobile-service-dropdown"
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25, ease: easing }}
                className="absolute left-0 z-30 mt-3 w-[min(29rem,calc(100vw-2rem))] rounded-[1.7rem] border border-white/70 bg-white/92 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur-2xl"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                  Mobile Support
                </p>

                <p className="mt-3 text-sm leading-7 text-gray-700">
                  {mobileService.summary}
                </p>

                <div className="mt-5 grid gap-2">
                  {mobileService.details.map((detail) => (
                    <p
                      key={detail}
                      className="rounded-[1rem] border border-white/70 bg-white/80 px-3 py-2 text-sm font-medium text-gray-700 backdrop-blur"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </div>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                custom={0.08 + index * 0.04}
                variants={fadeUp}
                className="group overflow-hidden rounded-[2.2rem] border border-white/60 bg-white/75 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl backdrop-saturate-150 transition-all duration-500 hover:-translate-y-2 hover:border-white/80 hover:bg-white/88 hover:shadow-[0_28px_90px_rgba(15,23,42,0.22)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-gray-500">
                    {String(index + 1).padStart(2, '0')}
                  </p>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/70 bg-white/70 text-[var(--color-brand)] shadow-sm backdrop-blur-md transition duration-300 group-hover:bg-[var(--color-brand)] group-hover:text-white">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                </div>

                <h3 className="mt-5 text-[1.18rem] font-black tracking-[-0.03em] text-black">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-700">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}