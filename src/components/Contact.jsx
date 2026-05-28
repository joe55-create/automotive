// @ts-check

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const easing = /** @type {[number, number, number, number]} */ ([0.22, 1, 0.36, 1]);

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: easing,
      delay,
    },
  }),
};

export default function WorkshopGarage() {
  return (
    <section
      id="workshop"
      aria-labelledby="workshop-heading"
      className="bg-white py-[var(--section-space)]"
    >
      <div className="section-shell">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={reveal}
          >
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-orange-600">
              Workshop & Garage
            </p>

            <h2
              id="workshop-heading"
              className="mt-5 max-w-xl text-[2.8rem] leading-[0.95] font-bold tracking-[-0.06em] text-black"
            >
              Precision mechanical servicing backed by a modern workshop environment.
            </h2>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.08}
            variants={reveal}
            className="max-w-2xl text-[1rem] leading-8 text-gray-600"
          >
            Sarav Motors combines professional workshop capability with responsive
            mobile support, delivering reliable diagnostics, repairs, battery
            replacement, and hands-on mechanical servicing with a premium customer
            experience.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          {/* Main Workshop Card */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.04}
            variants={reveal}
            className="overflow-hidden rounded-[2rem] bg-white"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/maintainence.png"
                alt="Sarav Motors technician working inside the workshop garage"
                width={1600}
                height={1000}
                priority
                className="h-full w-full object-cover transition duration-[1600ms] ease-out hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="text-[11px] uppercase tracking-[0.28em] text-orange-300">
                  Mechanical Repairs
                </p>

                <h3 className="mt-3 max-w-xl text-[1.9rem] leading-[1.02] font-semibold tracking-[-0.045em] text-white">
                  Workshop servicing focused on precision, reliability, and technical expertise.
                </h3>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-sm leading-7 text-gray-600">
                From engine diagnostics and routine servicing to complex repairs and
                inspections, the Sarav Motors workshop is built to deliver dependable
                mechanical solutions with modern tools, experienced technicians, and
                attention to detail.
              </p>
            </div>
          </motion.article>

          {/* Mobile Support Card */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            variants={reveal}
            className="overflow-hidden rounded-[2rem] bg-white"
          >
            <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/sarav-mobile-battery-replacement(2).jpeg"
                alt="Sarav Motors mobile support and battery replacement service"
                width={1200}
                height={1400}
                className="h-full w-full object-cover transition duration-[1600ms] ease-out hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <p className="text-[11px] uppercase tracking-[0.28em] text-orange-300">
                  Mobile Assistance
                </p>

                <h3 className="mt-3 text-[1.45rem] leading-[1.08] font-semibold tracking-[-0.04em] text-white">
                  Fast roadside support and battery replacement when customers need immediate help.
                </h3>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-sm leading-7 text-gray-600">
                The mobile service division extends the workshop experience directly
                to customers, providing rapid support, battery replacement,
                diagnostics, and on-site mechanical assistance across the local area.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}