"use client";

import Image from "next/image";
import { PROGRAMS } from "@/lib/data";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/ui/Icons";

export function Pricing() {
  return (
    <section
      id="programs"
      className="section-cream section-divider"
      aria-labelledby="programs-title"
    >
      <div className="container-main pt-[140px] md:pt-[180px] lg:pt-[200px] pb-10 md:pb-14">
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
          const reversed = index % 2 === 1;
          const surface =
            index % 2 === 0 ? "bg-transparent" : "section-surface";

          return (
            <article
              key={program.id}
              id={`program-${program.id}`}
              className={`${surface}`}
              aria-labelledby={`program-title-${program.id}`}
            >
              <div className="container-main py-20 md:py-28 lg:py-32">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center`}
                >
                  {/* Image — larger editorial plane */}
                  <FadeUp
                    delay={0.05}
                    className={`lg:col-span-7 ${
                      reversed ? "lg:order-2" : "lg:order-1"
                    } order-1`}
                  >
                    <div className="relative aspect-[3/2] w-full max-w-[960px] overflow-hidden rounded-[24px] md:rounded-[28px] bg-surface-warm">
                      <Image
                        src={program.image}
                        alt={program.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 720px"
                        className="object-cover object-center"
                        quality={95}
                      />
                    </div>
                  </FadeUp>

                  {/* Copy — name → description → quiet price → CTA */}
                  <FadeUp
                    delay={0.12}
                    className={`lg:col-span-5 ${
                      reversed ? "lg:order-1" : "lg:order-2"
                    } order-2`}
                  >
                    <div
                      className={`max-w-[420px] ${
                        reversed ? "lg:ml-0 lg:mr-auto" : "lg:ml-auto"
                      }`}
                    >
                      <p className="font-display text-[15px] md:text-[16px] tracking-[0.22em] text-primary mb-6">
                        {program.number}
                      </p>

                      <h3
                        id={`program-title-${program.id}`}
                        className="font-display text-[36px] md:text-[44px] lg:text-[48px] leading-[1.15] tracking-[-0.03em] text-text mb-3"
                      >
                        {program.korean}
                      </h3>
                      <p className="text-[13px] tracking-[0.18em] uppercase text-subtext mb-8">
                        {program.name}
                      </p>

                      <p className="text-[16px] md:text-[17px] text-subtext leading-[1.95] mb-10 max-w-sm">
                        {program.description}
                      </p>

                      <div className="mb-10 pt-8 border-t border-border">
                        <p className="flex items-baseline gap-1.5">
                          <span className="font-display text-[28px] md:text-[32px] leading-none tracking-[-0.03em] text-text">
                            {program.price}
                          </span>
                          <span className="text-[14px] text-subtext tracking-wide">
                            원
                          </span>
                        </p>
                        <p className="text-[13px] text-subtext tracking-wide mt-2">
                          VAT 포함 · 약 60분
                        </p>
                      </div>

                      <ul className="flex flex-col gap-3 mb-10">
                        {program.effects.map((effect) => (
                          <li
                            key={effect}
                            className="text-[15px] text-text tracking-wide"
                          >
                            <span className="text-primary mr-3">—</span>
                            {effect}
                          </li>
                        ))}
                      </ul>

                      <Button href="#reservation" icon={<IconArrow size={18} />}>
                        {"\uC608\uC57D\uD558\uAE30"}
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
