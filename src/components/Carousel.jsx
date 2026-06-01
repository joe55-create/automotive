// @ts-check

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import AnimatedHeading from '@/components/AnimatedHeading';

const easing = /** @type {[number, number, number, number]} */ ([0.22, 1, 0.36, 1]);

/**
 * @param {{
 *   items: {
 *     src: string;
 *     alt: string;
 *     width: number;
 *     height: number;
 *     title: string;
 *     caption: string;
 *   }[];
 * }} props
 * @returns {import('react').ReactElement}
 */
export default function Carousel({ items }) {
  return (
    <section
      aria-labelledby="workshop-view-heading"
      className="relative border-b border-gray-200 bg-white py-[var(--section-space)]"
    >
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: easing }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
            Workshop View
          </p>

          <AnimatedHeading
            as="h2"
            id="workshop-view-heading"
            text="Our top services, trusted by local drivers for everyday care and major repairs."
            className="text-balance mt-4 max-w-3xl text-[2rem] leading-[1.1] font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-[2.6rem] lg:text-[3rem]"
          />

          <p className="mt-6 max-w-2xl text-[1.05rem] leading-[1.7] text-[var(--color-ink-soft)] sm:text-lg">
            Explore the services that keep Victorian drivers moving, from preventative
            maintenance and diagnostics to repairs, inspections, and specialist support.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: easing,
                delay: Math.min(index * 0.05, 0.3),
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)] hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-[1.2rem] leading-[1.15] font-semibold tracking-[-0.01em] text-[var(--color-ink)] sm:text-[1.3rem]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[0.95rem] leading-7 text-[var(--color-ink-soft)]">
                  {item.caption}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
