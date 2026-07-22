"use client";

import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";

type BrandMomentProps = {
  image: string;
  caption: string;
  alt?: string;
};

export function BrandMoment({ image, caption, alt }: BrandMomentProps) {
  return (
    <section
      className="relative min-h-[70vh] md:min-h-[85vh] flex items-end overflow-hidden"
      aria-label={caption}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={alt ?? caption}
          fill
          sizes="100vw"
          className="object-cover img-tone scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(43,43,43,0.45)] via-[rgba(43,43,43,0.12)] to-transparent" />
      </div>

      <div className="container-main relative z-10 pb-16 md:pb-24 lg:pb-28">
        <FadeUp>
          <p className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.25] tracking-[-0.03em] text-white max-w-xl">
            {caption}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
