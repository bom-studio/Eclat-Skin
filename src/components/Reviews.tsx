"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { REVIEWS } from "@/lib/data";
import { FadeUp } from "@/components/motion/FadeUp";

const FEATURED = REVIEWS.slice(0, 5);
const PER_PAGE = 3;

function QuoteMark() {
  return (
    <svg
      width="36"
      height="28"
      viewBox="0 0 36 28"
      fill="none"
      aria-hidden
      className="text-primary/35"
    >
      <path
        d="M0 28V16.8C0 11.2 1.2 6.9 3.6 3.9 6 0.9 9.5 0 14.1 0v6.3c-2.4 0-4.1.7-5.1 2.1-1 1.4-1.5 3.5-1.5 6.3H14V28H0zm22 0V16.8c0-5.6 1.2-9.9 3.6-12.9C28 0.9 31.5 0 36.1 0v6.3c-2.4 0-4.1.7-5.1 2.1-1 1.4-1.5 3.5-1.5 6.3H36V28H22z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Reviews() {
  const [page, setPage] = useState(0);
  const maxPage = Math.max(0, Math.ceil(FEATURED.length / PER_PAGE) - 1);
  const start = page * PER_PAGE;
  const visible = FEATURED.slice(start, start + PER_PAGE);

  const prev = () => setPage((p) => (p - 1 + maxPage + 1) % (maxPage + 1));
  const next = () => setPage((p) => (p + 1) % (maxPage + 1));

  return (
    <section
      id="reviews"
      className="section-pad-lg section-warm"
      aria-labelledby="reviews-title"
    >
      <div className="container-main">
        <div className="flex items-end justify-between gap-6 mb-14 md:mb-20">
          <FadeUp>
            <p className="eyebrow mb-6">REVIEWS</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
          {visible.map((review, i) => (
            <FadeUp key={`${page}-${review.id}`} delay={0.06 * i}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-white rounded-[24px] md:rounded-[28px] border border-border/60 px-8 py-10 md:px-10 md:py-12 shadow-[0_8px_28px_rgba(43,43,43,0.04)] hover:shadow-[0_18px_48px_rgba(43,43,43,0.08)] transition-shadow duration-300"
              >
                <div className="mb-8">
                  <QuoteMark />
                </div>

                <p className="text-[17px] md:text-[18px] text-text leading-[1.9] tracking-wide mb-10 min-h-[5.7em] line-clamp-3">
                  {review.text}
                </p>

                <div className="flex items-center gap-4 pt-8 border-t border-border/70">
                  <div className="relative w-[72px] h-[72px] shrink-0 rounded-full overflow-hidden border border-[#f0e6df] bg-primary-light">
                    {"image" in review && review.image ? (
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        sizes="72px"
                        className="object-cover object-[center_top]"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center text-primary font-display text-[28px]">
                        {review.initial}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[15px] font-medium text-text tracking-wide">
                      {review.name}
                      <span className="text-subtext font-normal">
                        {" "}
                        · {review.age}
                      </span>
                    </p>
                    <p className="text-[13px] text-primary mt-1 tracking-wide">
                      {review.program}
                    </p>
                    <p className="text-primary text-[12px] mt-2 tracking-wide">
                      {"★★★★★"}
                    </p>
                  </div>
                </div>
              </motion.article>
            </FadeUp>
          ))}
        </div>

        <div className="flex gap-2 mt-12 md:mt-14 justify-center">
          {Array.from({ length: maxPage + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === page ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
