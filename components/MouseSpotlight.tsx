"use client";

import { useEffect } from "react";

export function MouseSpotlight() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(animate);
    };

    const animate = () => {
      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;
      root.style.setProperty("--mx", `${cx}px`);
      root.style.setProperty("--my", `${cy}px`);
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
        raf = requestAnimationFrame(animate);
      } else {
        raf = 0;
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen"
      style={{
        background:
          "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(124, 138, 255, 0.10), transparent 60%)",
      }}
    />
  );
}
