// @ts-check

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/85 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
      <nav aria-label="Primary navigation" className="section-shell py-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Sarav Motors home"
            className="group flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 group-hover:border-[var(--color-brand)]">
              <Image
                src="/favicon.ico"
                alt="Sarav Motors icon"
                width={44}
                height={44}
                priority
                className="h-9 w-9 rounded-xl object-contain"
              />
            </div>

            <div>
              <span className="block text-base font-black tracking-[-0.03em] text-black sm:text-lg">
                Sarav Motors
              </span>
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 sm:block">
                Braeside Automotive Care
              </span>
            </div>
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-black shadow-sm transition hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] md:hidden"
          >
            <span className="sr-only">Open menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-6 rounded-full bg-current transition ${
                  isOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`h-0.5 w-6 rounded-full bg-current transition ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-6 rounded-full bg-current transition ${
                  isOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>

          <div className="hidden items-center gap-2 text-sm md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-full border px-4 py-2.5 font-semibold transition duration-300 ${
                    isActive
                      ? 'border-[var(--color-brand)] bg-blue-50 text-[var(--color-brand)]'
                      : 'border-transparent text-gray-600 hover:border-gray-200 hover:bg-white hover:text-[var(--color-brand)]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href="tel:+61452066583"
              className="ml-2 rounded-full bg-[var(--color-brand)] px-5 py-2.5 font-bold text-white shadow-[0_12px_30px_rgba(37,99,235,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-hover)]"
            >
              Call Now
            </a>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? 'max-h-96 pt-5 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-xl backdrop-blur-2xl">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl border px-4 py-3 text-sm font-bold transition duration-300 ${
                    isActive
                      ? 'border-[var(--color-brand)] bg-blue-50 text-[var(--color-brand)]'
                      : 'border-gray-200 text-gray-700 hover:bg-blue-50 hover:text-[var(--color-brand)]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href="tel:+61452066583"
              className="rounded-xl bg-[var(--color-brand)] px-5 py-3 text-center font-bold text-white shadow-[0_12px_30px_rgba(37,99,235,0.25)] transition duration-300 hover:bg-[var(--color-brand-hover)]"
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}