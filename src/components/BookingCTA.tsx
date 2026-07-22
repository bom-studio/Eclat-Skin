"use client";

import Image from "next/image";
import { BOOKING_IMAGE, STUDIO_INFO } from "@/lib/data";
import { FadeUp } from "@/components/motion/FadeUp";
import { IconArrow } from "@/components/ui/Icons";

export function BookingCTA() {
  return (
    <section
      id="reservation"
      className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden"
      aria-labelledby="booking-title"
    >
      <div className="absolute inset-0">
        <Image
          src={BOOKING_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover img-tone scale-105"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[rgba(43,43,43,0.38)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(43,43,43,0.55)] via-[rgba(43,43,43,0.25)] to-transparent" />
      </div>

      <div className="container-main relative z-10 py-24 md:py-32">
        <div className="max-w-xl">
          <FadeUp>
            <p className="text-[12px] tracking-[0.28em] uppercase text-white/70 mb-8">
              RESERVE
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              id="booking-title"
              className="font-display text-[44px] md:text-[60px] lg:text-[68px] leading-[1.12] tracking-[-0.035em] text-white mb-8 whitespace-pre-line"
            >
              {"당신만의 빛이\n시작되는 자리"}
            </h2>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="text-[16px] md:text-[18px] text-white/80 leading-[1.9] mb-12 max-w-md">
              Quiet care. Lasting radiance.
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={STUDIO_INFO.kakaoHref}
                className="inline-flex items-center justify-center gap-2 h-[54px] px-9 rounded-full bg-white text-text text-[15px] font-medium tracking-[0.04em] transition-all duration-300 hover:bg-primary-light hover:-translate-y-px"
              >
                {"\uC0C1\uB2F4 \uC608\uC57D\uD558\uAE30"}
                <IconArrow size={18} />
              </a>
              <a
                href={STUDIO_INFO.phoneHref}
                className="inline-flex items-center justify-center h-[54px] px-9 rounded-full border border-white/45 text-white text-[15px] tracking-[0.04em] transition-colors duration-300 hover:border-white"
              >
                {STUDIO_INFO.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
