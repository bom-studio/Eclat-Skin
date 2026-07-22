"use client";

import { useState } from "react";
import Image from "next/image";
import { BEFORE_AFTER } from "@/lib/data";
import { FadeUp } from "@/components/motion/FadeUp";

export function BeforeAfter() {
  const [active, setActive] = useState(0);
  const current = BEFORE_AFTER[active];

  return (
    <section
      id="results"
      className="section-pad-lg section-surface"
      aria-labelledby="results-title"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] gap-12 lg:gap-16 xl:gap-20 items-end mb-12 md:mb-16">
          <FadeUp>
            <p className="eyebrow mb-6">REAL RESULTS</p>
            <h2
              id="results-title"
              className="display-section text-text whitespace-pre-line"
            >
              {"실제 고객의\n피부 변화"}
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-subtext text-[16px] md:text-[18px] leading-[1.95] max-w-md lg:ml-auto lg:text-right">
              {current.treatment}
              <span className="text-border mx-3">|</span>
              {current.concern}
              <span className="block mt-2 text-[14px] text-primary tracking-wide">
                {current.duration}
              </span>
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.08}>
          <div className="grid grid-cols-2 gap-3 md:gap-5 mb-8 md:mb-10">
            {[
              { src: current.before, label: "Before" },
              { src: current.after, label: "After" },
            ].map((img) => (
              <div
                key={img.label}
                className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-[20px] md:rounded-[24px] bg-surface-warm"
              >
                <Image
                  src={img.src}
                  alt={`${current.treatment} ${img.label}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 40vw"
                  className="object-cover object-center img-tone"
                />
                <span className="absolute bottom-4 left-4 text-[12px] tracking-[0.2em] uppercase text-white/95">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.12}>
          <ul className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide pb-1">
            {BEFORE_AFTER.map((item, index) => (
              <li key={item.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                  className={`relative w-[88px] md:w-[120px] aspect-[3/4] rounded-[14px] overflow-hidden transition-all duration-300 ${
                    active === index
                      ? "ring-1 ring-primary opacity-100"
                      : "opacity-55 hover:opacity-85"
                  }`}
                >
                  <Image
                    src={item.after}
                    alt={item.treatment}
                    fill
                    sizes="120px"
                    className="object-cover img-tone"
                  />
                </button>
              </li>
            ))}
          </ul>
        </FadeUp>

        <p className="mt-10 text-[12px] text-subtext/70 tracking-wide">
          * Results may vary. Images are for reference.
        </p>
      </div>
    </section>
  );
}
