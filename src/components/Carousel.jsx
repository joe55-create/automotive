// @ts-check

'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['3%', '-52%']);
  const rotate = useTransform(scrollYProgress, [0, 1], ['-0.45deg', '0.45deg']);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="workshop-view-heading"
      className="relative h-[190vh] overflow-hidden border-b border-gray-200"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/sarav-workshop-engine-service.jpeg"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/72 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-transparent to-black/25" />
      </div>

      <div className="sticky top-[81px] z-10 overflow-hidden">
        <div className="section-shell pt-14 pb-9 sm:pt-16 sm:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: easing }}
            className="max-w-4xl"
          >
            <p className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-brand)] shadow-sm backdrop-blur-md">
              Workshop View
            </p>

            <h2
              id="workshop-view-heading"
              className="mt-6 max-w-5xl text-[2.65rem] leading-[0.98] font-black tracking-[-0.065em] text-black sm:text-[3.8rem] lg:text-[4.8rem]"
            >
              Our top services, trusted by local drivers for everyday care and major repairs.
            </h2>

            <p className="mt-6 max-w-3xl text-[1.05rem] leading-8 text-gray-800 sm:text-lg">
              Explore the services that keep Victorian drivers moving, from preventative
              maintenance and diagnostics to repairs, inspections, and specialist support.
            </p>
          </motion.div>
        </div>

        <motion.div
          style={{ x, rotate }}
          className="flex w-max items-stretch gap-5 px-6 pb-20 sm:px-8"
        >
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                ease: easing,
                delay: Math.min(index * 0.04, 0.24),
              }}
              className="group relative flex w-[72vw] max-w-[390px] shrink-0 flex-col overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 shadow-[0_18px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/85 hover:shadow-[0_30px_90px_rgba(15,23,42,0.24)] md:w-[31vw] lg:w-[27vw]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 72vw, (max-width: 1024px) 31vw, 27vw"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-brand)]">
                  {String(index + 1).padStart(2, '0')}
                </p>

                <h3 className="mt-2 text-[1.2rem] leading-[1.08] font-black tracking-[-0.035em] text-black sm:text-[1.32rem]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-sm text-[0.95rem] leading-7 text-gray-700">
                  {item.caption}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}