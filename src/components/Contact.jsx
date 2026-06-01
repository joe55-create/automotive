// @ts-check

'use client';

import { motion } from 'framer-motion';
import {
  Calendar,
  Search,
  Wrench,
  Car,
} from 'lucide-react';

import AnimatedHeading from '@/components/AnimatedHeading';

const steps = [
  {
    icon: Calendar,
    title: 'Book Your Service',
    description:
      'Contact us online or by phone to arrange a convenient appointment.',
  },
  {
    icon: Search,
    title: 'Vehicle Inspection',
    description:
      'We inspect your vehicle, diagnose any issues, and explain our findings.',
  },
  {
    icon: Wrench,
    title: 'Professional Repairs',
    description:
      'Our technicians complete servicing and repairs using quality parts and proven methods.',
  },
  {
    icon: Car,
    title: 'Back On The Road',
    description:
      'Your vehicle is returned ready to drive with confidence and peace of mind.',
  },
];

export default function CustomerJourney() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-b border-gray-200 bg-white py-[var(--section-space)]"
    >
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-brand)]">
            Our Process
          </p>

          <AnimatedHeading
            as="h2"
            text="Simple, Transparent Automotive Care"
            className="mt-6 text-[2.8rem] font-black tracking-[-0.06em] text-black sm:text-[4rem]"
          />

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From booking to completion, we make vehicle servicing easy,
            straightforward, and stress-free.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[var(--color-brand)] transition duration-300 group-hover:bg-[var(--color-brand)] group-hover:text-white">
                  <Icon size={26} />
                </div>

                <div className="mt-6">
                  <span className="text-sm font-bold text-[var(--color-brand)]">
                    Step {index + 1}
                  </span>

                  <h3 className="mt-2 text-xl font-black text-black">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}