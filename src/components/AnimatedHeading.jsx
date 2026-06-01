// @ts-check

'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

const SCRAMBLE_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!<>-_/[]{}=+*?#';

/**
 * Heading with a scramble / decode reveal.
 *
 * The real text is rendered in the markup and exposed via `aria-label`, so
 * SSR, SEO, and screen readers are unaffected. When the heading scrolls into
 * view it plays a one-time scramble-to-resolve animation. Honours
 * `prefers-reduced-motion` (shows the final text, no animation).
 *
 * Pass either a plain `text` string, or `segments` to keep a coloured
 * sub-phrase (e.g. a blue tail on the heading).
 *
 * @param {{
 *   as?: 'h1' | 'h2' | 'h3' | 'h4',
 *   text?: string,
 *   segments?: { text: string, className?: string }[],
 *   className?: string,
 *   id?: string,
 * }} props
 * @returns {import('react').ReactElement}
 */
export default function AnimatedHeading({
  as = 'h2',
  text = '',
  segments,
  className,
  id,
}) {
  const parts = segments ?? [{ text, className: undefined }];
  const full = parts.map((part) => part.text).join('');

  /** @type {import('react').RefObject<HTMLHeadingElement | null>} */
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const prefersReduced = useReducedMotion();

  const [output, setOutput] = useState(full);

  useEffect(() => {
    if (!inView || prefersReduced) {
      setOutput(full);
      return undefined;
    }

    const queue = full.split('').map((char, index) => ({
      char,
      // each character resolves slightly later → left-to-right decode sweep
      end: Math.floor(index * 0.7) + Math.floor(Math.random() * 12) + 6,
    }));

    let frame = 0;
    let raf = 0;

    const tick = () => {
      let next = '';
      let done = 0;

      for (let i = 0; i < queue.length; i += 1) {
        const { char, end } = queue[i];

        if (char === ' ' || char === ' ') {
          next += char;
          done += 1;
        } else if (frame >= end) {
          next += char;
          done += 1;
        } else {
          next +=
            SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }

      setOutput(next);

      if (done === queue.length) return;

      frame += 1;
      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => cancelAnimationFrame(raf);
  }, [inView, prefersReduced, full]);

  // pre-compute slice ranges so each segment keeps its own className
  const slices = [];
  let offset = 0;
  for (const part of parts) {
    slices.push({
      className: part.className,
      start: offset,
      end: offset + part.text.length,
    });
    offset += part.text.length;
  }

  const Tag = as;

  return (
    <Tag id={id} ref={ref} className={className} aria-label={full}>
      <span aria-hidden="true">
        {slices.map((slice, index) => (
          <span key={index} className={slice.className}>
            {output.slice(slice.start, slice.end)}
          </span>
        ))}
      </span>
    </Tag>
  );
}
