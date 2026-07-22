import type { ReactNode } from "react";
import { FadeUp } from "@/components/motion/FadeUp";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div
      className={`flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20 ${align === "center" ? "md:flex-col md:items-center" : ""}`}
    >
      <div className={`flex flex-col gap-5 md:gap-6 max-w-2xl ${alignClass}`}>
        {eyebrow && (
          <FadeUp>
            <p className="eyebrow">{eyebrow}</p>
          </FadeUp>
        )}
        <FadeUp delay={0.08}>
          <h2 className="font-display text-[36px] md:text-[44px] lg:text-[48px] leading-[1.18] tracking-[-0.03em] text-text whitespace-pre-line">
            {title}
          </h2>
        </FadeUp>
        {description && (
          <FadeUp delay={0.14}>
            <p className="text-subtext text-[16px] md:text-[18px] leading-[1.9] whitespace-pre-line max-w-xl">
              {description}
            </p>
          </FadeUp>
        )}
      </div>
      {action && <FadeUp delay={0.16}>{action}</FadeUp>}
    </div>
  );
}
