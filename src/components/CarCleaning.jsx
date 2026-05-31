// @ts-check

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const easing = [0.22, 1, 0.36, 1];

export default function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="relative overflow-hidden border-b border-gray-200 py-[var(--section-space)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/suspension.png"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/86 via-white/48 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/10" />
      </div>

      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-brand)] shadow-sm backdrop-blur-md">
            Location
          </p>

          <h2
            id="location-heading"
            className="mt-6 text-[2.8rem] font-black leading-[1] tracking-[-0.06em] text-black sm:text-[4rem] lg:text-[5rem]"
          >
            Conveniently Located in Braeside, Victoria
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Sarav Motors proudly services Braeside and surrounding suburbs,
            providing professional mechanical repairs, diagnostics, servicing,
            battery replacement, roadside assistance and expert automotive care.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easing }}
            className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 shadow-[0_25px_90px_rgba(15,23,42,0.18)] backdrop-blur-xl"
          >
            <iframe
              title="Sarav Motors Braeside Location"
              src="https://www.google.com/maps?q=Braeside+Victoria+Australia&output=embed"
              width="100%"
              height="720"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easing, delay: 0.1 }}
            className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 shadow-[0_25px_90px_rgba(15,23,42,0.18)] backdrop-blur-xl"
          >
            <div className="relative min-h-[720px] bg-slate-950 p-3">
              <Image
                src="/images/sarav-mobile-battery-replacement(2).jpeg"
                alt="Sarav Motors mobile battery replacement service"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-contain p-3"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              label: 'Workshop Location',
              title: 'Central Braeside Access',
              text: 'Conveniently positioned in Braeside, making it easy for local drivers and businesses to access professional automotive services.',
            },
            {
              label: 'Mobile Support',
              title: 'On-Site Assistance',
              text: 'Mobile battery replacement, roadside assistance, diagnostics, and emergency support available across the local area.',
            },
            {
              label: 'Local Expertise',
              title: 'Trusted Automotive Care',
              text: 'Supporting Victorian drivers with quality servicing, repairs, diagnostics, inspections, and professional automotive solutions.',
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.06 + index * 0.07 }}
              className="rounded-[1.5rem] border border-white/60 bg-white/75 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.12)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/90"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-brand)]">
                {card.label}
              </p>

              <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-black">
                {card.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-700">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}