"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { REVIEWS } from "@/lib/data";
import { FadeUp } from "@/components/motion/FadeUp";

const FEATURED = REVIEWS.slice(0, 5);

export function Reviews() {
  const [index, setIndex] = useState(0);
  const review = FEATURED[index];

  const prev = () =>
    setIndex((i) => (i - 1 + FEATURED.length) % FEATURED.length);
  const next = () => setIndex((i) => (i + 1) % FEATURED.length);

  return (
    <section
      id="reviews"
      className="section-pad-lg section-warm"
      aria-labelledby="reviews-title"
    >
      <div className="container-main">
        <div className="flex items-end justify-between gap-6 mb-16 md:mb-24">
          <FadeUp>
            <p className="eyebrow mb-6">Reivews</p>
            <h2 id="reviews-title" className="display-section text-text">
              Voices of {"\u00C9"}CLAT
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="previous"
                className="w-12 h-12 rounded-full border border-border text-text hover:border-primary hover:text-primary transition-colors duration-300"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="next"
                className="w-12 h-12 rounded-full border border-border text-text hover:border-primary hover:text-primary transition-colors duration-300"
              >
                →
              </button>
            </div>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[320px]">
          <div className="lg:col-span-2">
            <FadeUp>
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-primary-light">
                {"image" in review && review.image ? (
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    sizes="96px"
                    className="object-cover object-center"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-primary font-display text-[32px] md:text-[36px]">
                    {review.initial}
                  </span>
                )}
              </div>
              <p className="mt-6 text-[15px] font-medium text-text tracking-wide">
                {review.name}
                <span className="text-subtext font-normal"> · {review.age}</span>
              </p>
              <p className="text-[13px] text-primary mt-2 tracking-wide">
                {review.program}
              </p>
              <p className="text-primary text-[13px] mt-4 tracking-wide">
                {"★★★★★"}
              </p>
            </FadeUp>
          </div>

          <div className="lg:col-span-10">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={review.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="display-quote text-text max-w-4xl"
              >
                “{review.text}”
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex gap-2 mt-14 md:mt-16">
          {FEATURED.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
