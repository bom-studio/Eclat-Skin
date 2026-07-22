"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BEFORE_AFTER } from "@/lib/data";
import { FadeUp } from "@/components/motion/FadeUp";

export function BeforeAfter() {
  const [active, setActive] = useState(0);
  const total = BEFORE_AFTER.length;
  const current = BEFORE_AFTER[active];

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  return (
    <section
      id="results"
      className="section-pad-lg section-surface"
      aria-labelledby="results-title"
    >
      <div className="container-main">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-20">
          <FadeUp>
            <p className="eyebrow mb-6">REAL RESULTS</p>
            <h2
              id="results-title"
              className="display-section text-text whitespace-pre-line"
            >
              {"실제 고객의\n피부 변화"}
            </h2>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="text-subtext text-[16px] md:text-[18px] leading-[1.95] max-w-md lg:text-right">
              {current.treatment}
              <span className="text-border mx-3">|</span>
              {current.concern}
              <span className="block mt-2 text-[14px] text-primary tracking-wide">
                {current.duration}
              </span>
            </p>
          </FadeUp>
        </div>

        {/* Large Before | After split with side arrows on desktop */}
        <FadeUp delay={0.08}>
          <div className="relative">
            <button
              type="button"
              onClick={prev}
              aria-label={"\uC774\uC804 \uC0AC\uC9C4"}
              className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-10 flex w-11 h-11 md:w-12 md:h-12 items-center justify-center rounded-full border border-border/80 bg-white/90 text-text hover:border-primary hover:text-primary transition-colors duration-300 shadow-[0_4px_16px_rgba(43,43,43,0.08)]"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              aria-label={"\uB2E4\uC74C \uC0AC\uC9C4"}
              className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-10 flex w-11 h-11 md:w-12 md:h-12 items-center justify-center rounded-full border border-border/80 bg-white/90 text-text hover:border-primary hover:text-primary transition-colors duration-300 shadow-[0_4px_16px_rgba(43,43,43,0.08)]"
            >
              →
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6"
              >
                {[
                  { src: current.before, label: "Before" },
                  { src: current.after, label: "After" },
                ].map((img) => (
                  <div
                    key={img.label}
                    className="relative aspect-[3/4] md:aspect-[4/5] max-h-[72vh] overflow-hidden rounded-[22px] md:rounded-[28px] bg-surface-warm"
                  >
                    <Image
                      src={img.src}
                      alt={`${current.treatment} ${img.label}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 560px"
                      className="object-cover object-center img-tone"
                      quality={95}
                      priority={active === 0}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-[28%]"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(43,43,43,0.45) 0%, transparent 100%)",
                      }}
                    />
                    <span className="absolute bottom-5 left-5 md:bottom-7 md:left-7 text-[13px] md:text-[14px] tracking-[0.22em] uppercase text-white">
                      {img.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <p className="mt-5 text-center text-[13px] tracking-[0.16em] text-subtext">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </p>
          </div>
        </FadeUp>

        {/* Thumbnail strip */}
        <FadeUp delay={0.12}>
          <ul className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide pb-1 mt-8 md:mt-10">
            {BEFORE_AFTER.map((item, index) => (
              <li key={item.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                  aria-label={item.treatment}
                  className={`relative w-[100px] md:w-[140px] aspect-[3/4] rounded-[14px] md:rounded-[16px] overflow-hidden transition-all duration-300 ${
                    active === index
                      ? "ring-1 ring-primary opacity-100"
                      : "opacity-50 hover:opacity-85"
                  }`}
                >
                  <Image
                    src={item.after}
                    alt={item.treatment}
                    fill
                    sizes="140px"
                    className="object-cover img-tone"
                    quality={85}
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
