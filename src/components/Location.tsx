"use client";

import { STUDIO_INFO } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/motion/FadeUp";
import {
  IconClock,
  IconMapPin,
  IconPhone,
  IconParking,
} from "@/components/ui/Icons";

export function Location() {
  return (
    <section
      id="location"
      className="section-pad-sm section-surface section-divider"
      aria-labelledby="location-title"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="FIND US"
          title="오시는 길"
          description="조용하고 편안한 공간에서 기다리고 있습니다."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] gap-8 lg:gap-10 items-stretch">
          <FadeUp className="h-full">
            <div className="card-premium p-9 md:p-11 h-full min-h-[480px] lg:min-h-[560px] flex flex-col justify-between gap-10">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center">
                    <IconClock size={22} className="text-primary" />
                  </div>
                  <h3
                    id="location-title"
                    className="text-[20px] md:text-[22px] font-medium tracking-[-0.02em] text-text"
                  >
                    운영시간
                  </h3>
                </div>
                <ul className="flex flex-col gap-3.5">
                  {STUDIO_INFO.hours.map((row) => (
                    <li
                      key={row.day}
                      className="flex justify-between gap-4 text-[15px] md:text-[16px] border-b border-border/80 pb-3.5 last:border-0 last:pb-0"
                    >
                      <span className="text-subtext">{row.day}</span>
                      <span className="text-text font-medium tracking-wide">
                        {row.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center">
                    <IconMapPin size={22} className="text-primary" />
                  </div>
                  <h3 className="text-[20px] md:text-[22px] font-medium tracking-[-0.02em] text-text">
                    주소
                  </h3>
                </div>
                <p className="text-[16px] text-text leading-relaxed mb-3 pl-[58px]">
                  {STUDIO_INFO.address}
                </p>
                <a
                  href="https://maps.google.com/?q=서울특별시+강남구+도산대로+123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block pl-[58px] text-[14px] text-primary hover:text-primary-hover transition-colors duration-300 tracking-[0.04em]"
                >
                  지도에서 보기 →
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center">
                      <IconPhone size={20} className="text-primary" />
                    </div>
                    <h3 className="text-[18px] font-medium text-text">전화</h3>
                  </div>
                  <a
                    href={STUDIO_INFO.phoneHref}
                    className="text-[16px] text-text hover:text-primary transition-colors duration-300 pl-[58px] block"
                  >
                    {STUDIO_INFO.phone}
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center">
                      <IconParking size={20} className="text-primary" />
                    </div>
                    <h3 className="text-[18px] font-medium text-text">주차</h3>
                  </div>
                  <p className="text-[15px] text-subtext leading-relaxed pl-[58px]">
                    {STUDIO_INFO.parking}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.12} className="h-full">
            <div className="relative h-[420px] md:h-[480px] lg:h-full min-h-[480px] lg:min-h-[560px] rounded-[28px] overflow-hidden border border-border bg-surface-warm shadow-[0_18px_48px_rgba(43,43,43,0.08)]">
              <iframe
                title="ÉCLAT SKIN STUDIO 위치"
                src={STUDIO_INFO.mapEmbed}
                className="absolute inset-0 w-full h-full border-0 saturate-[0.85] contrast-[0.95] brightness-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
