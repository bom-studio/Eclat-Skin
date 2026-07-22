"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { IconArrow, trustIcons } from "@/components/ui/Icons";

export function Hero() {
  const titleLines = HERO.title.split("\n");

  return (
    <section
      id="top"
      className="relative min-h-[94vh] lg:min-h-[100svh] flex flex-col justify-center pt-[92px] overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Warm white atmosphere ? soft radial light only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundColor: "var(--color-background)",
          backgroundImage: `
            radial-gradient(ellipse 70% 80% at 8% 40%, color-mix(in srgb, var(--color-glow-soft) 70%, transparent) 0%, transparent 72%),
            radial-gradient(ellipse 65% 85% at 92% 45%, color-mix(in srgb, var(--color-glow-warm) 55%, transparent) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 50% 100%, color-mix(in srgb, var(--color-primary-light) 35%, transparent) 0%, transparent 75%)
          `,
        }}
      />

      <div className="container-main relative z-10 w-full py-20 md:py-24 lg:py-28">
        <div className="grid items-center gap-7 md:gap-6 lg:gap-8 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] min-h-[calc(94vh-140px)] lg:min-h-[calc(100svh-160px)]">
          {/* Copy */}
          <div className="relative z-20 max-w-[460px] lg:max-w-[480px] order-1">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="eyebrow mb-7 md:mb-8"
            >
              {HERO.eyebrow}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.22 }}
              className="font-display text-[18px] md:text-[20px] tracking-[0.32em] text-primary mb-5 md:mb-6"
            >
              {"\u00C9"}CLAT SKIN STUDIO
            </motion.p>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.32 }}
              className="font-display text-[40px] md:text-[50px] lg:text-[56px] leading-[1.16] tracking-[-0.03em] text-text mb-7 md:mb-8 break-keep"
            >
              {titleLines.map((line) => (
                <span key={line} className="block md:whitespace-nowrap">
                  {line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.44 }}
              className="text-subtext text-[16px] md:text-[17px] lg:text-[18px] leading-[2.1] whitespace-pre-line mb-10 md:mb-12 max-w-[420px]"
            >
              {HERO.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.56 }}
            >
              <Button href="#reservation" icon={<IconArrow size={18} />}>
                {"\uC0C1\uB2F4 \uC608\uC57D\uD558\uAE30"}
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-14 md:mt-16 pt-9 border-t border-border/70 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-5"
            >
              {HERO.trusts.map((item) => {
                const Icon = trustIcons[item.icon];
                return (
                  <li key={item.label} className="flex flex-col gap-3">
                    <Icon size={28} className="text-primary" />
                    <div>
                      <p className="text-[14px] md:text-[15px] font-medium text-text tracking-[0.02em]">
                        {item.label}
                      </p>
                      <p className="text-[12px] md:text-[13px] text-subtext mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </motion.ul>
          </div>

          {/* Visual ? model as hero object, not a floating card */}
          <div className="relative order-2 w-full h-[min(58vh,500px)] md:h-[min(80vh,760px)] lg:h-[min(86vh,840px)] self-stretch md:-ml-6 lg:-ml-10 xl:-ml-14">
            {/* Cream glow behind image ? nearly invisible, large blur */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-[12%] z-0 rounded-full blur-[160px] md:blur-[180px] opacity-80"
              style={{
                background:
                  "radial-gradient(circle at 45% 45%, var(--color-glow-soft) 0%, var(--color-glow-warm) 42%, transparent 70%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-[10%] top-[18%] z-0 h-[70%] w-[75%] rounded-full blur-[140px] opacity-50"
              style={{ backgroundColor: "var(--color-glow-warm)" }}
            />

            <motion.div
              className="absolute inset-0 z-[2] overflow-hidden rounded-[16px] md:rounded-[18px]"
              initial={{ scale: 1.04, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={HERO.image}
                alt={"\u00C9CLAT Skin Studio Hero"}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 55vw"
                className="object-cover object-[78%_42%] md:object-[82%_40%] lg:object-[85%_38%] img-tone"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
