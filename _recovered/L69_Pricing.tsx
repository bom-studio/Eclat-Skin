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
      id="pricing"
      className="section-cream section-divider"
      aria-labelledby="programs-title"
    >
      <div className="container-main pt-[128px] md:pt-[168px] lg:pt-[188px] pb-10 md:pb-14">
        <FadeUp>
          <p className="eyebrow mb-5">CARE PROGRAMS</p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2
            id="programs-title"
            className="font-display text-[36px] md:text-[44px] lg:text-[48px] leading-[1.18] tracking-[-0.03em] text-text whitespace-pre-line mb-4"
          >
            섬세하게 설계된{"\n"}케어 프로그램
          </h2>
        </FadeUp>
        <FadeUp delay={0.14}>
          <p className="text-subtext text-[16px] md:text-[18px] leading-[1.9] max-w-xl">
            피부 본연의 균형을 위한 네 가지 솔루션입니다.
          </p>
        </FadeUp>
      </div>

      <div className="flex flex-col">
        {PROGRAMS.map((program, index) => {
          const imageLeft = index % 2 === 0;
          const surface =
            index % 2 === 0 ? "bg-transparent" : "section-surface";

          return (
            <article
              key={program.id}
              id={`program-${program.id}`}
              className={`${surface} section-divider`}
              aria-labelledby={`program-title-${program.id}`}
            >
              <div className="container-main py-16 md:py-24 lg:py-28">
                <div
                  className={`grid grid-cols-1 items-center gap-12 lg:gap-16 xl:gap-20 ${
                    imageLeft
                      ? "lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]"
                      : "lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]"
                  }`}
                >
                  <FadeUp
                    delay={0.05}
                    className={`order-1 ${imageLeft ? "" : "lg:order-2"}`}
                  >
                    <motion.div
                      className="relative aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5] overflow-hidden rounded-[28px] img-frame"
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
                        className="object-cover object-center img-tone"
                      />
                    </motion.div>
                  </FadeUp>

                  <FadeUp
                    delay={0.12}
                    className={`order-2 ${imageLeft ? "" : "lg:order-1"}`}
                  >
                    <div className="max-w-[420px] lg:max-w-[440px] lg:py-4 lg:mx-auto lg:ml-0">
                      <p className="font-display text-[18px] md:text-[20px] tracking-[0.2em] text-primary mb-6">
                        {program.number}
                      </p>

                      <p className="text-[12px] md:text-[13px] tracking-[0.28em] uppercase text-subtext mb-3">
                        {program.name}
                      </p>

                      <h3
                        id={`program-title-${program.id}`}
                        className="font-display text-[32px] md:text-[40px] lg:text-[44px] leading-[1.15] tracking-[-0.03em] text-text md:whitespace-nowrap mb-6"
                      >
                        {program.korean}
                      </h3>

                      <p className="mb-8">
                        <span className="font-display text-[28px] md:text-[32px] leading-none tracking-[-0.03em] text-text">
                          {program.price}
                        </span>
                        <span className="text-[14px] text-subtext ml-2 tracking-wide">
                          원 · VAT 포함
                        </span>
                      </p>

                      <p className="text-[16px] md:text-[17px] text-subtext leading-[1.9] mb-10">
                        {program.description}
                      </p>

                      <ul className="flex flex-col gap-3.5 mb-11">
                        {program.effects.map((effect) => (
                          <li
                            key={effect}
                            className="flex items-center gap-3 text-[15px] text-text tracking-wide"
                          >
                            <span className="text-primary shrink-0">
                              <CheckIcon />
                            </span>
                            {effect}
                          </li>
                        ))}
                      </ul>

                      <Button href="#booking" icon={<IconArrow size={18} />}>
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
