"use client";

import Image from "next/image";
import { DIRECTOR } from "@/lib/data";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/ui/Icons";

export function Director() {
  return (
    <section
      id="director"
      className="relative section-cream overflow-hidden"
      aria-labelledby="director-title"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
        <FadeUp className="relative min-h-[55vh] lg:min-h-full order-1 overflow-hidden">
          <Image
            src={DIRECTOR.image}
            alt={DIRECTOR.name}
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover object-[50%_22%] md:object-[48%_18%] img-tone"
            quality={95}
            priority
          />
        </FadeUp>

        <div className="order-2 flex items-center section-pad lg:py-0">
          <div className="container-main lg:pl-16 xl:pl-24 lg:pr-12 w-full max-w-xl lg:max-w-none">
            <FadeUp delay={0.08}>
              <p className="eyebrow mb-8">DIRECTOR</p>
              <p
                id="director-title"
                className="display-quote text-text mb-10 md:mb-12 max-w-lg"
              >
                “{DIRECTOR.philosophy}”
              </p>
              <p className="text-[15px] tracking-[0.16em] uppercase text-primary mb-2">
                {DIRECTOR.role}
              </p>
              <h3 className="font-display text-[32px] md:text-[40px] tracking-[-0.03em] text-text mb-6">
                {DIRECTOR.name}
              </h3>
              <p className="text-[16px] md:text-[17px] text-subtext leading-[1.95] mb-10 max-w-md">
                {DIRECTOR.intro}
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-12 text-[14px] text-text tracking-wide">
                {DIRECTOR.career.slice(0, 2).map((item) => (
                  <li key={item} className="text-subtext">
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="#reservation" icon={<IconArrow size={18} />}>
                {"\uC0C1\uB2F4 \uC608\uC57D\uD558\uAE30"}
              </Button>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
