"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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
  const startedRef = useRef(false);
  const parsed = useMemo(() => parseValue(value), [value]);
  const [display, setDisplay] = useState<string>(() =>
    parsed ? format(0, parsed) : value,
  );

  useEffect(() => {
    if (!parsed) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay(format(parsed.target * eased, parsed));
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
    // value/duration are the only real dependencies; parsed is derived from value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

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
};

function parseValue(v: string): Parsed | null {
  const match = v.match(/^(\D*?)(-?\d{1,3}(?:[,.]\d{3})*(?:\.\d+)?|-?\d+(?:\.\d+)?)([a-zA-Z%+~]*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const thousandSep = /[,.]/.test(numStr) && /\d{3}([,.]\d{3})/.test(numStr);
  const cleaned = numStr.replace(/,/g, "");
  const num = parseFloat(cleaned);
  if (Number.isNaN(num)) return null;
  const decimals = (cleaned.split(".")[1] || "").length;
  return { prefix, suffix, target: num, decimals, thousandSep };
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
