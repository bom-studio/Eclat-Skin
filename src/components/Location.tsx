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
          title={"\uC624\uC2DC\uB294 \uAE38"}
          description={
            "\uC870\uC6A9\uD558\uACE0 \uD3B8\uC548\uD55C \uACF5\uAC04\uC5D0\uC11C \uAE30\uB2E4\uB9AC\uACE0 \uC788\uC2B5\uB2C8\uB2E4."
          }
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
                    {"\uC6B4\uC601\uC2DC\uAC04"}
                  </h3>
                </div>
                <ul className="flex flex-col gap-3.5">
                  {STUDIO_INFO.hours.map((row) => (
                    <li
                      key={row.day}
                      className="flex justify-between gap-4 text-[15px] md:text-[16px] border-b border-border/80 pb-3.5 last:border-0 last:pb-0"
                    >
                      <span className="text-subtext">{row.day}</span>
                      <span className="text-text font-medium tracking-wide whitespace-nowrap">
                        {row.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-8">
                {/* Address */}
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 shrink-0 rounded-full bg-primary-light flex items-center justify-center">
                      <IconMapPin size={22} className="text-primary" />
                    </div>
                    <h3 className="text-[18px] md:text-[20px] font-medium tracking-[-0.02em] text-text">
                      {"\uC8FC\uC18C"}
                    </h3>
                  </div>
                  <p className="text-[15px] md:text-[16px] text-text pl-[58px] whitespace-nowrap">
                    {STUDIO_INFO.address}
                  </p>
                  <a
                    href="https://maps.google.com/?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EA%B0%95%EB%82%A8%EA%B5%AC+%EB%8F%84%EC%82%B0%EB%8C%80%EB%A1%9C+123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 pl-[58px] text-[14px] text-primary hover:text-primary-hover transition-colors duration-300 tracking-[0.04em]"
                  >
                    {"\uC9C0\uB3C4\uC5D0\uC11C \uBCF4\uAE30 \u2192"}
                  </a>
                </div>

                {/* Parking */}
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 shrink-0 rounded-full bg-primary-light flex items-center justify-center">
                      <IconParking size={20} className="text-primary" />
                    </div>
                    <h3 className="text-[18px] md:text-[20px] font-medium text-text">
                      {"\uC8FC\uCC28"}
                    </h3>
                  </div>
                  <p className="text-[15px] md:text-[16px] text-subtext pl-[58px] whitespace-nowrap">
                    {STUDIO_INFO.parking}
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 shrink-0 rounded-full bg-primary-light flex items-center justify-center">
                      <IconPhone size={20} className="text-primary" />
                    </div>
                    <h3 className="text-[18px] md:text-[20px] font-medium text-text">
                      {"\uC804\uD654"}
                    </h3>
                  </div>
                  <a
                    href={STUDIO_INFO.phoneHref}
                    className="text-[15px] md:text-[16px] text-text hover:text-primary transition-colors duration-300 pl-[58px] block whitespace-nowrap"
                  >
                    {STUDIO_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.12} className="h-full">
            <div className="relative h-[420px] md:h-[480px] lg:h-full min-h-[480px] lg:min-h-[560px] rounded-[28px] overflow-hidden border border-border bg-surface-warm shadow-[0_18px_48px_rgba(43,43,43,0.08)]">
              <iframe
                title={"\u00C9CLAT SKIN STUDIO \uC704\uCE58"}
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
