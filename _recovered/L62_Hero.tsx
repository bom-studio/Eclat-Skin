"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { IconArrow, trustIcons } from "@/components/ui/Icons";

function HeroVisual({
  className = "",
  mobile = false,
}: {
  className?: string;
  mobile?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Soft brand blobs — behind image */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -left-[12%] top-[18%] z-0 h-[58%] w-[70%] opacity-40"
        viewBox="0 0 400 400"
        fill="none"
      >
        <ellipse cx="200" cy="200" rx="180" ry="160" fill="#C98F7A" />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-[8%] bottom-[8%] z-0 h-[42%] w-[48%] opacity-25"
        viewBox="0 0 300 300"
        fill="none"
      >
        <circle cx="150" cy="150" r="140" fill="#D8C8B5" />
      </svg>
      <div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-[30%] z-0 h-[55%] w-[70%] rounded-full bg-primary/20 blur-[80px]"
      />

      {/* Full-bleed image — no card radius / shadow */}
      <motion.div
        className="absolute inset-0 z-[1] overflow-hidden"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={HERO.image}
          alt="ÉCLAT Skin Studio Hero"
          fill
          priority
          sizes={mobile ? "100vw" : "(max-width: 1280px) 55vw, 50vw"}
          className={`object-cover img-tone ${
            mobile
              ? "object-center scale-[1.04]"
              : "object-[72%_16%] lg:object-[74%_14%] scale-[1.05] origin-right"
          }`}
        />

        {/* Left-edge fade into page background */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-[42%] md:w-[38%] lg:w-[32%]"
          style={{
            background:
              "linear-gradient(to right, var(--color-background) 0%, rgba(252,250,248,0.92) 28%, rgba(252,250,248,0.45) 58%, transparent 100%)",
          }}
        />

        {/* Soft top/bottom wash so the image feels part of the section */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[18%]"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-background) 0%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[14%]"
          style={{
            background:
              "linear-gradient(to top, var(--color-background) 0%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Floating proof cards — bridge image & copy */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className={`absolute z-[2] ${
          mobile
            ? "left-4 bottom-4"
            : "left-0 bottom-[12%] -translate-x-[18%] lg:-translate-x-[22%]"
        }`}
      >
        <div className="rounded-[18px] bg-card/95 backdrop-blur-[2px] border border-border/80 px-5 py-4 shadow-[0_14px_40px_rgba(43,43,43,0.08)] min-w-[168px]">
          <p className="text-[13px] tracking-[0.08em] text-primary mb-1">
            ★ 4.9
          </p>
          <p className="text-[14px] font-medium text-text tracking-wide">
            고객 만족도
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85 }}
        className={`absolute z-[2] ${
          mobile
            ? "right-4 top-4"
            : "right-[8%] top-[18%]"
        }`}
      >
        <div className="rounded-[18px] bg-card/95 backdrop-blur-[2px] border border-border/80 px-5 py-4 shadow-[0_14px_40px_rgba(43,43,43,0.08)]">
          <p className="font-display text-[26px] leading-none tracking-[-0.03em] text-text mb-1">
            3,500+
          </p>
          <p className="text-[12px] text-subtext tracking-wide">누적 시술</p>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const titleLines = HERO.title.split("\n");

  return (
    <section
      id="top"
      className="relative min-h-[92vh] lg:min-h-[100svh] flex flex-col justify-center pt-[88px] overflow-hidden bg-background"
      aria-labelledby="hero-title"
    >
      {/* Desktop / tablet: full-bleed right visual */}
      <HeroVisual
        className="pointer-events-none hidden md:block absolute top-[88px] bottom-0 right-0 z-0 w-[54%] lg:w-[52%] xl:w-[50%]"
      />

      <div className="container-main relative z-10 w-full py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 md:gap-10 lg:gap-14 md:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] min-h-[calc(92vh-120px)] lg:min-h-[calc(100svh-140px)]">
          {/* Copy */}
          <div className="relative z-10 max-w-[480px] lg:max-w-[500px] order-1">
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
              ÉCLAT SKIN STUDIO
            </motion.p>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.32 }}
              className="font-display text-[40px] md:text-[48px] lg:text-[54px] leading-[1.18] tracking-[-0.03em] text-text mb-7 md:mb-8 break-keep"
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
              className="text-subtext text-[16px] md:text-[17px] lg:text-[18px] leading-[2.1] whitespace-pre-line mb-10 md:mb-12 max-w-[440px]"
            >
              {HERO.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.56 }}
            >
              <Button href="#booking" icon={<IconArrow size={18} />}>
                상담 예약하기
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-14 md:mt-16 pt-9 border-t border-border/80 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-5"
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

          {/* Desktop spacer to reserve grid column for absolute visual */}
          <div className="hidden md:block order-2" aria-hidden />

          {/* Mobile visual — stacked below copy, same fade/blob language */}
          <HeroVisual
            mobile
            className="order-2 md:hidden w-full h-[min(62vh,520px)] -mx-6 w-[calc(100%+48px)] max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
