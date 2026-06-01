// @ts-check

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BadgeCheck, MessageCircle, Wrench } from 'lucide-react';

import AnimatedHeading from '@/components/AnimatedHeading';

const easing = /** @type {[number, number, number, number]} */ ([0.22, 1, 0.36, 1]);

const fadeInLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: easing },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: easing, delay: 0.08 },
  },
};

const trustStats = [
  { value: '10+', label: 'Years Industry Experience' },
  { value: '4.9★', label: 'Customer Satisfaction' },
  { value: '100%', label: 'Transparent Advice' },
  { value: 'Local', label: 'Braeside Workshop' },
];

export default function About({ headingId = 'about-heading' }) {
  return (
    <section
      id="about"
      aria-labelledby={headingId}
      className="relative overflow-hidden border-b border-gray-200 py-[var(--section-space)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/Mechanics.png"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Lighter wash — lets the workshop image show through for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/78 to-white/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/55 via-transparent to-transparent" />
      </div>

      <div className="section-shell relative z-10">
        {/* Single section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
            About Sarav Motors
          </p>

          <AnimatedHeading
            as="h2"
            id={headingId}
            text="A trusted local workshop focused on quality, honesty, and reliable workmanship."
            className="text-balance mt-4 text-[2rem] leading-[1.1] font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-[2.6rem] lg:text-[3rem]"
          />

          <div className="mt-6 max-w-2xl space-y-5 text-[1.02rem] leading-[1.7] text-[var(--color-ink-soft)] sm:text-lg">
            <p>
              Sarav Motors provides dependable vehicle servicing, mechanical
              repairs, inspections, tyres, brakes, batteries, and transmission
              support. Every job is approached with care, accurate diagnostics,
              and clear communication.
            </p>

            <p>
              Our focus is to make vehicle maintenance simple and stress-free.
              Whether it is routine logbook servicing or a more complex repair,
              customers can expect practical advice, transparent service, and
              workmanship completed to a high standard.
            </p>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {trustStats.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-gray-200 bg-white p-5"
            >
              <p className="text-[1.9rem] font-semibold tracking-[-0.03em] text-[var(--color-brand)]">
                {item.value}
              </p>

              <p className="mt-1.5 text-sm font-medium leading-6 text-[var(--color-ink-soft)]">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInRight}
          className="mt-4 grid gap-4 sm:grid-cols-2"
        >
          <div className="group rounded-xl border border-gray-200 bg-white p-6 transition duration-300 hover:border-[var(--color-brand)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-[var(--color-brand)] transition duration-300 group-hover:bg-[var(--color-brand)] group-hover:text-white">
              <Wrench size={20} strokeWidth={2} />
            </div>

            <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
              Workshop Focus
            </p>

            <p className="mt-3 text-[0.98rem] leading-7 font-medium tracking-[-0.01em] text-[var(--color-ink)]">
              Professional servicing and repairs delivered with accuracy,
              care, and attention to detail.
            </p>
          </div>

          <div className="group rounded-xl border border-gray-200 bg-white p-6 transition duration-300 hover:border-[var(--color-brand)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-[var(--color-brand)] transition duration-300 group-hover:bg-[var(--color-brand)] group-hover:text-white">
              <MessageCircle size={20} strokeWidth={2} />
            </div>

            <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
              Customer Experience
            </p>

            <p className="mt-3 text-[0.98rem] leading-7 font-medium tracking-[-0.01em] text-[var(--color-ink)]">
              Honest communication, practical recommendations, and a smooth
              experience from booking to completion.
            </p>
          </div>
        </motion.div>

        {/* Closing trust strip */}
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <BadgeCheck
            size={22}
            strokeWidth={2}
            className="shrink-0 text-[var(--color-brand)]"
          />

          <p className="text-sm font-medium leading-6 text-[var(--color-ink-soft)]">
            Trusted servicing for Braeside drivers, with a focus on clear
            communication and dependable workmanship.
          </p>
        </div>
      </div>
    </section>
  );
}