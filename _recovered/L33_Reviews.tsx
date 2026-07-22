"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { REVIEWS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/motion/FadeUp";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-primary" aria-label={`${count}점`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[13px] leading-none tracking-wide">
          ★
        </span>
      ))}
    </div>
  );
}

export function Reviews() {
  const scrollerRef = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <section
      id="reviews"
      className="section-pad section-warm section-divider"
      aria-labelledby="reviews-title"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="CUSTOMER STORIES"
          title="방문하신 분들의&#10;진솔한 이야기"
          action={
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label="이전 후기"
                className="w-12 h-12 rounded-full border border-border bg-card text-text hover:border-primary hover:text-primary transition-colors duration-300"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label="다음 후기"
                className="w-12 h-12 rounded-full border border-border bg-card text-text hover:border-primary hover:text-primary transition-colors duration-300"
              >
                →
              </button>
            </div>
          }
        />

        <FadeUp>
          <ul
            ref={scrollerRef}
            className="flex gap-6 md:gap-7 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-3 -mx-1 px-1"
            aria-label="고객 후기 목록"
          >
            {REVIEWS.map((review) => (
              <li
                key={review.id}
                className="snap-start shrink-0 w-[320px] md:w-[400px]"
              >
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="card-review h-full p-8 md:p-10 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-12 h-12 rounded-full bg-primary-light text-primary flex items-center justify-center font-display text-[20px] tracking-wide"
                        aria-hidden
                      >
                        {review.initial}
                      </div>
                      <div>
                        <p className="text-[15px] font-medium text-text tracking-wide">
                          {review.name}
                          <span className="text-subtext font-normal">
                            {" "}
                            · {review.age}
                          </span>
                        </p>
                        <p className="text-[12px] text-subtext mt-1 tracking-wide">
                          {review.date}
                        </p>
                      </div>
                    </div>
                    <span
                      className="font-display text-[36px] leading-none text-primary/35 select-none"
                      aria-hidden
                    >
                      ❝
                    </span>
                  </div>

                  <Stars count={review.rating} />

                  <p
                    id={review.id === 1 ? "reviews-title" : undefined}
                    className="mt-5 text-[16px] md:text-[17px] text-text leading-[1.95] flex-1 tracking-[-0.01em]"
                  >
                    {review.text}
                  </p>

                  <div className="mt-8 pt-5 border-t border-border">
                    <p className="text-[12px] tracking-[0.16em] uppercase text-primary mb-1.5">
                      Program
                    </p>
                    <p className="text-[14px] text-subtext tracking-wide">
                      {review.program}
                    </p>
                  </div>
                </motion.article>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
