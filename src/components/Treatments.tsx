"use client";

import { TREATMENTS } from "@/lib/data";
import { FadeUp } from "@/components/motion/FadeUp";

export function Treatments() {
  return (
    <section
      id="treatments"
      className="section-pad-sm section-cream"
      aria-labelledby="treatments-title"
    >
      <div className="container-main">
        <FadeUp>
          <p className="eyebrow mb-6">APPROACH</p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2
            id="treatments-title"
            className="display-section text-text mb-14 md:mb-20 max-w-2xl whitespace-pre-line"
          >
            {"피부 고민에 맞춘\n섬세한 솔루션"}
          </h2>
        </FadeUp>

        <ul className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 border-t border-border">
          {TREATMENTS.map((item, index) => (
            <FadeUp key={item.id} delay={index * 0.06} as="li">
              <article className="pt-8 md:pt-10">
                <p className="font-display text-[15px] tracking-[0.18em] text-primary mb-5">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[18px] md:text-[19px] font-medium tracking-[-0.02em] text-text mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] text-subtext leading-[1.85] whitespace-pre-line">
                  {item.description}
                </p>
              </article>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
