"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/motion/FadeUp";

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(FAQS[0]?.id ?? null);

  return (
    <section
      id="faq"
      className="section-pad-sm section-cream section-divider"
      aria-labelledby="faq-title"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="FAQ"
          title="자주 묻는 질문"
          description="방문 전 궁금하신 점을 먼저 확인해보세요."
        />

        <FadeUp>
          <ul className="max-w-[840px] mx-auto flex flex-col border-t border-border">
            {FAQS.map((item, index) => {
              const isOpen = openId === item.id;

              return (
                <li key={item.id} className="border-b border-border">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left group"
                  >
                    <span
                      id={index === 0 ? "faq-title" : undefined}
                      className="text-[16px] md:text-[18px] font-medium text-text tracking-[-0.01em] group-hover:text-primary transition-colors duration-300"
                    >
                      {item.question}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-[18px] leading-none transition-all duration-300 ${
                        isOpen
                          ? "bg-primary text-white border-primary"
                          : "bg-card text-text"
                      }`}
                      aria-hidden
                    >
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-12 text-[15px] md:text-[16px] text-subtext leading-[1.95]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
