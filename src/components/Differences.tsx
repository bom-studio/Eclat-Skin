"use client";

import { DIFFERENCES } from "@/lib/data";
import { FadeUp } from "@/components/motion/FadeUp";

export function Differences() {
  return (
    <section
      id="why"
      className="section-pad-sm section-surface border-y border-border"
      aria-labelledby="why-title"
    >
      <div className="container-main">
        <FadeUp>
          <h2 id="why-title" className="sr-only">
            Why ÉCLAT
          </h2>
        </FadeUp>
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {DIFFERENCES.map((item, index) => (
            <FadeUp key={item.id} delay={index * 0.07} as="li">
              <p className="font-display text-[15px] tracking-[0.16em] text-primary mb-4">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-[18px] font-medium text-text tracking-[-0.02em] mb-3">
                {item.title}
              </h3>
              <p className="text-[14px] text-subtext leading-[1.85]">
                {item.description}
              </p>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
