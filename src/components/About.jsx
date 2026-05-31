// @ts-check

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BadgeCheck, MessageCircle, ShieldCheck, Wrench } from 'lucide-react';

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

        <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/15" />
      </div>

      <div className="section-shell relative z-10 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
          className="rounded-[2.5rem] border border-white/60 bg-white/78 p-7 shadow-[0_35px_120px_rgba(15,23,42,0.22)] backdrop-blur-2xl sm:p-8"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/70 bg-white/80 text-[var(--color-brand)] shadow-sm">
            <ShieldCheck size={26} strokeWidth={2.3} />
          </div>

          <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-brand)]">
            Why Choose Sarav Motors
          </p>

          <h3 className="mt-4 max-w-xl text-[2rem] leading-[1.02] font-black tracking-[-0.045em] text-black sm:text-[2.5rem]">
            Professional automotive care backed by trust, skill, and attention to detail.
          </h3>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-700">
            From diagnostics to mechanical servicing, Sarav Motors focuses on
            clear communication, dependable workmanship, and practical solutions
            for everyday drivers.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {trustStats.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-white/70 bg-white/82 p-5 shadow-sm backdrop-blur-xl"
              >
                <p className="text-[2rem] font-black tracking-[-0.045em] text-[var(--color-brand)]">
                  {item.value}
                </p>

                <p className="mt-2 text-sm font-semibold leading-6 text-gray-700">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
          className="rounded-[2.5rem] border border-white/60 bg-white/82 p-7 shadow-[0_35px_120px_rgba(15,23,42,0.20)] backdrop-blur-2xl sm:p-8"
        >
          <p className="inline-flex rounded-full border border-blue-200 bg-white/85 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-brand)] shadow-sm backdrop-blur-md">
            About Sarav Motors
          </p>

          <h2
            id={headingId}
            className="mt-6 max-w-4xl text-[2.35rem] leading-[1.02] font-black tracking-[-0.06em] text-black sm:text-[3.15rem] lg:text-[3.85rem]"
          >
            A trusted local workshop focused on quality, honesty, and reliable workmanship.
          </h2>

          <div className="mt-8 space-y-6 text-[1.02rem] leading-8 text-gray-700 sm:text-lg">
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

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="group rounded-[1.7rem] border border-white/70 bg-white/82 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.12)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/95 hover:shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/70 bg-white/80 text-[var(--color-brand)] shadow-sm transition duration-300 group-hover:bg-[var(--color-brand)] group-hover:text-white">
                <Wrench size={22} strokeWidth={2.2} />
              </div>

              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.26em] text-gray-500">
                Workshop Focus
              </p>

              <p className="mt-4 text-[1.05rem] leading-7 font-bold tracking-[-0.02em] text-black">
                Professional servicing and repairs delivered with accuracy,
                care, and attention to detail.
              </p>
            </div>

            <div className="group rounded-[1.7rem] border border-white/70 bg-white/82 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.12)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/95 hover:shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/70 bg-white/80 text-[var(--color-brand)] shadow-sm transition duration-300 group-hover:bg-[var(--color-brand)] group-hover:text-white">
                <MessageCircle size={22} strokeWidth={2.2} />
              </div>

              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.26em] text-gray-500">
                Customer Experience
              </p>

              <p className="mt-4 text-[1.05rem] leading-7 font-bold tracking-[-0.02em] text-black">
                Honest communication, practical recommendations, and a smooth
                experience from booking to completion.
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-[1.4rem] border border-white/70 bg-white/82 p-4 shadow-[0_14px_45px_rgba(15,23,42,0.10)] backdrop-blur-xl">
            <BadgeCheck
              size={24}
              strokeWidth={2.3}
              className="shrink-0 text-[var(--color-brand)]"
            />

            <p className="text-sm font-semibold leading-6 text-gray-700">
              Trusted servicing for Braeside drivers, with a focus on clear
              communication and dependable workmanship.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}