"use client";

import Image from "next/image";
import { DIRECTOR } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/ui/Icons";

export function Director() {
  return (
    <section
      id="director"
      className="section-pad section-surface section-divider"
      aria-labelledby="director-title"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="MEET THE DIRECTOR"
          title="원장 소개"
          description="섬세한 손길과 깊은 이해로, 피부 본연의 균형을 설계합니다."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] gap-12 lg:gap-16 items-center">
          <FadeUp>
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-border img-frame shadow-[0_18px_48px_rgba(43,43,43,0.06)]">
              <Image
                src={DIRECTOR.image}
                alt={`${DIRECTOR.name} 원장`}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center img-tone"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="max-w-[560px]">
              <p className="text-[13px] tracking-[0.2em] uppercase text-primary mb-3">
                {DIRECTOR.role}
              </p>
              <h3
                id="director-title"
                className="font-display text-[36px] md:text-[42px] leading-[1.15] tracking-[-0.03em] text-text mb-6"
              >
                {DIRECTOR.name}
              </h3>
              <p className="text-[16px] md:text-[18px] text-subtext leading-[2] mb-6">
                {DIRECTOR.intro}
              </p>
              <p className="font-display text-[22px] md:text-[24px] text-text leading-[1.5] tracking-[-0.02em] mb-10">
                “{DIRECTOR.philosophy}”
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-11">
                <div>
                  <p className="text-[12px] tracking-[0.16em] uppercase text-primary mb-3">
                    Career
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {DIRECTOR.career.map((item) => (
                      <li
                        key={item}
                        className="text-[14px] md:text-[15px] text-text leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[12px] tracking-[0.16em] uppercase text-primary mb-3">
                    Specialty
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {DIRECTOR.specialties.map((item) => (
                      <li
                        key={item}
                        className="text-[14px] md:text-[15px] text-text leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[12px] tracking-[0.16em] uppercase text-primary mb-3">
                    Credentials
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {DIRECTOR.credentials.map((item) => (
                      <li
                        key={item}
                        className="text-[14px] md:text-[15px] text-text leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button href="#booking" icon={<IconArrow size={18} />}>
                상담 예약하기
              </Button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
