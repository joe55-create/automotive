// @ts-check
'use client';

import { motion } from 'framer-motion';
import { Phone, Star } from 'lucide-react';

import AnimatedHeading from '@/components/AnimatedHeading';

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
  '4.9 Google Rating',
  '10+ Years Experience',
  'Logbook Service Approved',
];

// Official Google logo colours, letter by letter
const googleColored = [
  ['G', '#4285F4'],
  ['o', '#EA4335'],
  ['o', '#FBBC05'],
  ['g', '#4285F4'],
  ['l', '#34A853'],
  ['e', '#EA4335'],
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-gray-200 bg-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/braeside-car-service-hero.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />

        {/* Calm, even overlay — text area stays clean */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
      </div>

      <div className="section-shell relative z-10 flex min-h-[calc(100vh-89px)] items-center py-20 sm:py-24 lg:py-28">
        <div className="max-w-[44rem]">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.05}
            variants={fadeUp}
            className="mb-7 inline-flex items-center text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500"
          >
            Automotive Service · Braeside
          </motion.p>

          <AnimatedHeading
            as="h1"
            id="hero-heading"
            text="Car servicing, repairs & mobile battery support"
            className="text-balance max-w-3xl text-[2.6rem] leading-[1.05] font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-[3.4rem] lg:text-[4.25rem]"
          />

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.22}
            variants={fadeUp}
            className="mt-7 max-w-xl text-[1.05rem] leading-[1.7] text-[var(--color-ink-soft)] sm:text-lg"
          >
            Honest advice, accurate diagnostics, and quality workmanship — from
            routine servicing and mechanical repairs to inspections and on-site
            battery replacement.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-8 py-4 text-sm font-medium text-white shadow-[0_10px_30px_rgba(37,99,235,0.20)] transition duration-300 hover:bg-[var(--color-brand-hover)]"
            >
              Get a Quote
            </a>

            <a
              href="tel:+61452066583"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gray-300 px-8 py-4 text-sm font-medium text-[var(--color-ink)] transition duration-300 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
            >
              <Phone size={16} strokeWidth={2} aria-hidden="true" />
              0452 066 583
            </a>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-semibold text-gray-800"
          >
            {trustSignals.map((label, index) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  {index === 0 ? (
                    <>
                      <Star
                        size={14}
                        strokeWidth={0}
                        className="fill-[#FBBC05]"
                        aria-hidden="true"
                      />
                      4.9{' '}
                      <span aria-label="Google">
                        {googleColored.map(([letter, color], i) => (
                          <span key={i} style={{ color }}>
                            {letter}
                          </span>
                        ))}
                      </span>{' '}
                      Rating
                    </>
                  ) : (
                    label
                  )}
                </span>

                {index < trustSignals.length - 1 ? (
                  <span
                    className="h-3.5 w-px bg-gray-300"
                    aria-hidden="true"
                  />
                ) : null}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}