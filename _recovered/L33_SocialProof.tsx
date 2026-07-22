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

    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;

      if (decimals > 0) {
        setDisplay(current.toFixed(decimals));
      } else {
        setDisplay(Math.round(current).toLocaleString("en-US"));
      }

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
      aria-label="브랜드 신뢰 지표"
    >
      <div className="container-main py-16 md:py-20">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {STATS.map((stat, index) => (
            <FadeUp key={stat.id} delay={index * 0.08} as="li">
              <div className="text-center md:text-left">
                <p className="font-display text-[40px] md:text-[48px] lg:text-[52px] leading-none tracking-[-0.03em] text-text mb-3">
                  <AnimatedValue
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={"decimals" in stat ? stat.decimals : 0}
                  />
                </p>
                <p className="text-[12px] md:text-[13px] tracking-[0.18em] uppercase text-subtext">
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
