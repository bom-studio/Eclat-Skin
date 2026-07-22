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
          className="object-cover img-tone"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(43,43,43,0.42) 0%, rgba(43,43,43,0.12) 38%, transparent 68%)",
          }}
        />
      </div>

      <div className="container-main relative z-10 pb-16 md:pb-24 lg:pb-28">
        <FadeUp>
          <p className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.25] tracking-[-0.03em] text-white max-w-xl whitespace-pre-line">
            {caption}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
