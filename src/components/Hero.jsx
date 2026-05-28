// @ts-check
'use client';

import { motion } from 'framer-motion';

const easing = /** @type {[number, number, number, number]} */ ([0.22, 1, 0.36, 1]);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easing, delay },
  }),
};

const trustSignals = [
  { label: '4.9 Google Rating', icon: '★' },
  { label: '10+ Years Experience', icon: '•' },
  { label: 'Logbook Service Approved', icon: '•' },
];

/**
 * @returns {import('react').ReactElement}
 */
export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="bg-white border-b border-gray-200"
    >
      <div className="section-shell flex min-h-[calc(100vh-89px)] items-center py-16 sm:py-20">
        <div className="max-w-[52rem]">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.05}
            variants={fadeUp}
            className="mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-brand)]"
          >
            Premium Automotive Service · Braeside
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.08}
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.08em] text-gray-500"
          >
            Reliable Automotive Care You Can Trust
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial="hidden"
            animate="visible"
            custom={0.12}
            variants={fadeUp}
            className="mt-4 text-[2.7rem] leading-[1.02] font-bold tracking-[-0.06em] text-black sm:text-[3.8rem] lg:text-[5.4rem]"
          >
            Car Servicing, Repairs & Mobile Battery Support
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.22}
            variants={fadeUp}
            className="mt-7 max-w-2xl text-[1.05rem] leading-8 text-gray-600 sm:text-lg"
          >
            Professional servicing, mechanical repairs, inspections, and mobile
            battery replacement delivered with honest advice, accurate diagnostics,
            and quality workmanship.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[var(--color-brand-hover)]"
            >
              Get a Quote
            </a>

            <a
              href="tel:+61452066583"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
            >
              Call 0452 066 583
            </a>
          </motion.div>

          {/* TRUST SIGNALS */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4 text-sm text-gray-600"
          >
            {trustSignals.map((signal, index) => (
              <div key={signal.label} className="flex items-center gap-3">
                <span className="text-[var(--color-gold)]" aria-hidden="true">
                  {signal.icon}
                </span>

                <span>{signal.label}</span>

                {index < trustSignals.length - 1 ? (
                  <span
                    className="hidden h-4 w-px bg-gray-300 sm:block"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}