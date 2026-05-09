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

/**
 * @returns {import('react').ReactElement}
 */
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-navy-border)] bg-[rgba(10,22,40,0.92)] shadow-[0_10px_40px_rgba(10,22,40,0.28)] backdrop-blur-2xl">
      <nav
        aria-label="Primary navigation"
        className="section-shell py-4"
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Sarav Motors home"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/favicon.ico"
              alt="Sarav Motors icon"
              width={44}
              height={44}
              priority
              className="h-11 w-11 rounded-xl object-contain"
            />

            <span className="text-base font-semibold tracking-wide text-[var(--color-ink)] sm:text-lg">
              Sarav Motors
            </span>
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-navy-border)] bg-[var(--color-hover-overlay)] text-[var(--color-ink)] transition hover:bg-[var(--color-brand)] md:hidden"
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
                  className={`rounded-full border px-4 py-2.5 transition duration-300 ${
                    isActive
                      ? 'border-[var(--color-navy-border)] bg-[var(--color-hover-overlay)] text-[var(--color-brand-light)]'
                      : 'border-transparent text-[var(--color-ink-muted)] hover:border-[var(--color-navy-border)] hover:bg-[var(--color-hover-overlay)] hover:text-[var(--color-brand-light)]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href="tel:+61452066583"
              className="rounded-full border border-[var(--color-brand)] bg-[var(--color-brand)] px-5 py-2.5 font-semibold text-[var(--color-ink)] transition duration-300 hover:bg-[var(--color-brand-hover)]"
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
          <div className="flex flex-col gap-3 rounded-2xl border border-[var(--color-navy-border)] bg-[rgba(10,22,40,0.96)] p-4 shadow-xl">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition duration-300 ${
                    isActive
                      ? 'border-[var(--color-brand)] bg-[var(--color-hover-overlay)] text-[var(--color-brand-light)]'
                      : 'border-[var(--color-navy-border)] text-[var(--color-ink-muted)] hover:bg-[var(--color-hover-overlay)] hover:text-[var(--color-brand-light)]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href="tel:+61452066583"
              className="rounded-xl border border-[var(--color-brand)] bg-[var(--color-brand)] px-5 py-3 text-center font-semibold text-[var(--color-ink)] transition duration-300 hover:bg-[var(--color-brand-hover)]"
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}