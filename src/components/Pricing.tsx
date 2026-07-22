"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROGRAMS } from "@/lib/data";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/ui/Icons";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <path
        d="M3.5 8.5l3 3 6-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Pricing() {
  return (
    <section
      id="programs"
      className="section-cream section-divider"
      aria-labelledby="programs-title"
    >
      <div className="container-main pt-[140px] md:pt-[180px] lg:pt-[200px] pb-12 md:pb-16">
        <FadeUp>
          <p className="eyebrow mb-6">CARE PROGRAMS</p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2
            id="programs-title"
            className="display-section text-text whitespace-pre-line mb-5"
          >
            {"섬세하게 설계된\n케어 프로그램"}
          </h2>
        </FadeUp>
        <FadeUp delay={0.14}>
          <p className="text-subtext text-[16px] md:text-[18px] leading-[1.9] max-w-xl">
            피부 본연의 균형을 위한 세 가지 솔루션입니다.
          </p>
        </FadeUp>
      </div>

      <div className="flex flex-col">
        {PROGRAMS.map((program, index) => {
          const surface =
            index % 2 === 0 ? "bg-transparent" : "section-surface";

          return (
            <article
              key={program.id}
              id={`program-${program.id}`}
              className={`${surface} section-divider`}
              aria-labelledby={`program-title-${program.id}`}
            >
              <div className="container-main py-14 md:py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] gap-10 lg:gap-14 xl:gap-16 items-center">
                  {/* Visual — landscape program graphic */}
                  <FadeUp delay={0.05} className="order-1">
                    <motion.div
                      className="relative aspect-[3/2] w-full overflow-hidden rounded-[24px] md:rounded-[28px]"
                      whileHover={{ scale: 1.01 }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Image
                        src={program.image}
                        alt={program.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover object-center"
                        quality={90}
                      />
                    </motion.div>
                  </FadeUp>

                  {/* Info — price, effects, CTA (avoid duplicating image copy) */}
                  <FadeUp delay={0.12} className="order-2">
                    <div className="max-w-[400px] lg:py-2">
                      <p className="font-display text-[18px] tracking-[0.2em] text-primary mb-5">
                        {program.number}
                      </p>

                      <h3
                        id={`program-title-${program.id}`}
                        className="sr-only"
                      >
                        {program.name} {program.korean}
                      </h3>

                      <p className="mb-3">
                        <span className="font-display text-[40px] md:text-[48px] leading-none tracking-[-0.035em] text-text">
                          {program.price}
                        </span>
                        <span className="text-[15px] text-subtext ml-2 tracking-wide">
                          원
                        </span>
                      </p>
                      <p className="text-[13px] text-subtext tracking-wide mb-9">
                        VAT 포함 · 약 60분
                      </p>

                      <ul className="flex flex-col gap-3.5 mb-10 pt-8 border-t border-border">
                        {program.effects.map((effect) => (
                          <li
                            key={effect}
                            className="flex items-center gap-3 text-[15px] md:text-[16px] text-text tracking-wide"
                          >
                            <span className="text-primary shrink-0">
                              <CheckIcon />
                            </span>
                            {effect}
                          </li>
                        ))}
                      </ul>

                      <Button href="#reservation" icon={<IconArrow size={18} />}>
                        예약하기
                      </Button>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
