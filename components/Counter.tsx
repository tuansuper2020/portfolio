"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counter — animates a number up to its target when scrolled into view.
 * Accepts: "$53.7k", "1,588", "65.1%", "962", "+24.7%" — preserves prefix/suffix and formatting.
 * For non-numeric values (e.g. "#2", "Phase 2"), renders the value as-is.
 */
export function Counter({
  value,
  duration = 1200,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const parsed = parseValue(value);

  useEffect(() => {
    if (!parsed) return;
    const el = ref.current;
    if (!el) return;
    let started = false;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              const cur = parsed.target * eased;
              setDisplay(format(cur, parsed));
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [parsed, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

type Parsed = {
  prefix: string;
  suffix: string;
  target: number;
  decimals: number;
  thousandSep: boolean;
  multiplier: number;
};

function parseValue(v: string): Parsed | null {
  // Match optional prefix (non-digit), the number, optional suffix
  const match = v.match(/^(\D*?)(-?\d{1,3}(?:[,.]\d{3})*(?:\.\d+)?|-?\d+(?:\.\d+)?)([a-zA-Z%+~]*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const thousandSep = /,/.test(numStr);
  const cleaned = numStr.replace(/,/g, "");
  const num = parseFloat(cleaned);
  if (Number.isNaN(num)) return null;

  // Detect k / M multiplier in suffix
  let multiplier = 1;
  let suffixOut = suffix;
  if (/^k/i.test(suffix)) {
    multiplier = 1; // keep "k" suffix; we animate the displayed number directly
  } else if (/^M/.test(suffix)) {
    multiplier = 1;
  }

  const decimals = (cleaned.split(".")[1] || "").length;

  return {
    prefix,
    suffix: suffixOut,
    target: num,
    decimals,
    thousandSep,
    multiplier,
  };
}

function format(n: number, p: Parsed): string {
  let str: string;
  if (p.decimals > 0) {
    str = n.toFixed(p.decimals);
  } else {
    str = Math.floor(n).toString();
  }
  if (p.thousandSep && p.decimals === 0) {
    str = parseInt(str, 10).toLocaleString("en-US");
  } else if (p.thousandSep) {
    const [intPart, dec] = str.split(".");
    str = parseInt(intPart, 10).toLocaleString("en-US") + (dec ? "." + dec : "");
  }
  return p.prefix + str + p.suffix;
}
