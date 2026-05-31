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

        {/* Elite readable overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/78 to-white/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/30" />
      </div>

      {/* Subtle premium glow */}
      <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-[-12rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-orange-400/10 blur-3xl" />

      <div className="section-shell relative z-10 flex min-h-[calc(100vh-89px)] items-center py-20 sm:py-24 lg:py-28">
        <div className="max-w-[48rem]">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.05}
            variants={fadeUp}
            className="mb-6 inline-flex rounded-full border border-blue-200 bg-white/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-brand)] shadow-sm backdrop-blur"
          >
            Premium Automotive Service · Braeside
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.08}
            variants={fadeUp}
            className="text-sm font-bold uppercase tracking-[0.12em] text-gray-700"
          >
            Reliable Automotive Care You Can Trust
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial="hidden"
            animate="visible"
            custom={0.12}
            variants={fadeUp}
            className="mt-4 max-w-5xl text-[2.65rem] leading-[1.02] font-black tracking-[-0.065em] text-black sm:text-[3.7rem] lg:text-[4.8rem]"
          >
            Car Servicing, Repairs & Mobile Battery Support
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.22}
            variants={fadeUp}
            className="mt-7 max-w-2xl text-[1.05rem] leading-8 text-gray-800 sm:text-lg"
          >
            Professional servicing, mechanical repairs, inspections, and mobile
            battery replacement delivered with honest advice, accurate diagnostics,
            and quality workmanship.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-8 py-4 text-sm font-bold text-white shadow-[0_18px_45px_rgba(37,99,235,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-hover)]"
            >
              Get a Quote
            </a>

            <a
              href="tel:+61452066583"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white/90 px-8 py-4 text-sm font-bold text-black shadow-[0_14px_35px_rgba(15,23,42,0.12)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
            >
              Call 0452 066 583
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="mt-11 flex flex-wrap items-center gap-4 rounded-full border border-gray-200 bg-white/70 px-5 py-3 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur-md"
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