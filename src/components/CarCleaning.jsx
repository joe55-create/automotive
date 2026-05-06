// @ts-check

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const easing = /** @type {[number, number, number, number]} */ ([0.22, 1, 0.36, 1]);

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easing, delay },
  }),
};

const featureCards = [
  {
    label: 'Mobile Support',
    title: 'Mobile battery replacement when you need help fast.',
    description:
      'Sarav Motors provides mobile battery replacement, battery testing, and jump-start support at your location, helping you get back on the road with less stress.',
    image: '/images/sarav-mobile-battery-replacement2.jpeg',
    alt: 'Sarav Motors mobile battery replacement service flyer',
  },
  {
    label: 'Workshop Detail',
    title: 'Professional workshop servicing with care and attention to detail.',
    description:
      'From engine checks to mechanical repairs, Sarav Motors delivers practical diagnostics, clear communication, and dependable workmanship for everyday drivers.',
    image: '/images/sarav-workshop-engine-service.jpeg',
    alt: 'Sarav Motors technician working on an engine inside the workshop',
  },
];

/**
 * @returns {import('react').ReactElement}
 */
export default function CarCleaning() {
  return (
    <section
      id="cleaning"
      aria-labelledby="cleaning-heading"
      className="border-b border-[var(--color-divider)] py-[var(--section-space)]"
    >
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            variants={reveal}
          >
            <p className="section-label text-[11px] font-semibold">
              Mobile & Workshop Support
            </p>

            <h2 id="cleaning-heading" className="section-heading mt-4 text-[var(--color-ink)]">
              Reliable automotive support at the workshop and on the road.
            </h2>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.08}
            variants={reveal}
            className="section-copy max-w-2xl"
          >
            Sarav Motors combines professional workshop servicing with convenient mobile battery
            support, giving customers a simple, dependable way to access help when their vehicle
            needs attention.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {featureCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index * 0.08}
              variants={reveal}
              className="glass-panel overflow-hidden rounded-[2rem]"
            >
              <div className="relative w-full overflow-hidden bg-[#061225]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={1536}
                  height={1024}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>

              <div className="p-7 sm:p-8">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-ink-muted)]">
                  {card.label}
                </p>

                <h3 className="mt-3 text-[1.5rem] font-semibold leading-tight text-[var(--color-ink)] sm:text-[1.8rem]">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}