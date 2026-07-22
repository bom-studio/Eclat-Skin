"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BEFORE_AFTER } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/motion/FadeUp";

export function BeforeAfter() {
  return (
    <section
      id="results"
      className="section-pad section-surface section-divider"
      aria-labelledby="results-title"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="REAL RESULTS"
          title="실제 고객의&#10;피부 변화"
          description="섬세한 케어가 만든 자연스러운 결과입니다."
        />

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-9 lg:gap-10">
          {BEFORE_AFTER.map((item, index) => (
            <FadeUp key={item.id} delay={index * 0.1} as="li">
              <article className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-3 md:gap-3.5">
                  {[
                    { src: item.before, label: "Before" },
                    { src: item.after, label: "After" },
                  ].map((img) => (
                    <div
                      key={img.label}
                      className="group relative aspect-[3/4] rounded-[28px] overflow-hidden border border-border bg-surface-warm"
                    >
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Image
                          src={img.src}
                          alt={`${item.treatment} ${img.label} 이미지`}
                          fill
                          sizes="(max-width: 768px) 45vw, 240px"
                          className="object-cover object-center img-tone"
                        />
                      </motion.div>

                      <span className="absolute bottom-3.5 left-3.5 z-10 px-3 py-1.5 rounded-full bg-white/90 text-[11px] tracking-[0.18em] uppercase text-text opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        {img.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="px-1">
                  <h3
                    id={index === 0 ? "results-title" : undefined}
                    className="text-[20px] md:text-[22px] font-medium tracking-[-0.02em] text-text mb-2"
                  >
                    {item.treatment}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-subtext tracking-wide mb-1">
                    {item.concern}
                  </p>
                  <p className="text-[13px] text-primary tracking-[0.04em]">
                    {item.duration}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </ul>

        <FadeUp delay={0.2}>
          <p className="mt-12 text-[13px] text-subtext/75 text-center md:text-left tracking-wide">
            * 개인차에 따라 결과는 다를 수 있으며, 이미지는 이해를 돕기 위한
            플레이스홀더입니다.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
