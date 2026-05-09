// @ts-check

import Image from 'next/image';

/**
 * @returns {import('react').ReactElement}
 */
export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="border-t border-[var(--color-divider)] bg-[var(--color-navy-surface)]"
    >
      <div className="section-shell flex flex-col gap-8 py-10 text-sm text-[var(--color-ink-muted)] sm:flex-row sm:items-center sm:justify-between">

        {/* LEFT SIDE */}
        <div className="max-w-lg flex items-center gap-4">

          {/* FAVICON AS LOGO */}
          <Image
            src="/favicon.ico"
            alt="Sarav Motors icon"
            width={48}
            height={48}
            className="rounded-lg object-contain"
          />

          <div>
            <p className="font-semibold text-[var(--color-ink)]">
              Sarav Motors
            </p>

            <p className="mt-1 text-sm leading-6">
              Premium automotive servicing, repairs, and mobile battery replacement in Braeside, Victoria.
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
              
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-2 text-sm sm:text-right">

          <a
            href="tel:+61452066583"
            className="block font-semibold text-[var(--color-brand-light)] hover:underline"
          >
            0452 066 583
          </a>

          <a
            href="mailto:saravmotors@gmail.com"
            className="block font-semibold text-[var(--color-brand-light)] hover:underline"
          >
            saravmotors@gmail.com
          </a>

          <p>3/356 Lower Dandenong Rd, Braeside VIC 3195</p>
          <p>ABN 48 694 343 354</p>

          <p className="mt-3 text-xs text-[var(--color-ink-muted)]">
            &copy; {new Date().getFullYear()} Sarav Motors. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}