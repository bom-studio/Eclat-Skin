"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATS } from "@/lib/data";
import { FadeUp } from "@/components/motion/FadeUp";

function AnimatedValue({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(decimals > 0 ? "0.0" : "0");

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;
      setDisplay(
        decimals > 0
          ? current.toFixed(decimals)
          : Math.round(current).toLocaleString("en-US"),
      );
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function SocialProof() {
  return (
    <section
      className="section-surface border-y border-border"
      aria-label="brand trust"
    >
      <div className="container-main py-20 md:py-28 lg:py-32">
        <FadeUp>
          <p className="eyebrow mb-14 md:mb-16 text-center">IN NUMBERS</p>
        </FadeUp>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
          {STATS.map((stat, index) => (
            <FadeUp key={stat.id} delay={index * 0.08} as="li">
              <div className="text-center">
                <p className="font-display text-[48px] md:text-[64px] lg:text-[72px] leading-none tracking-[-0.04em] text-text mb-4">
                  <AnimatedValue
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={"decimals" in stat ? stat.decimals : 0}
                  />
                </p>
                <p className="text-[12px] md:text-[13px] tracking-[0.22em] uppercase text-subtext">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
