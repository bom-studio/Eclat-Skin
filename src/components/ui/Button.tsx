"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost" | "white";
  className?: string;
  icon?: ReactNode;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-hover border border-transparent shadow-[0_10px_28px_rgba(201,143,122,0.28)] hover:shadow-[0_14px_36px_rgba(185,131,112,0.34)]",
  outline:
    "bg-transparent text-text border border-border hover:border-primary hover:text-primary",
  ghost: "bg-transparent text-text hover:text-primary",
  white:
    "bg-white text-text border border-border hover:border-primary hover:text-primary shadow-[0_8px_24px_rgba(43,43,43,0.04)]",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  icon,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 h-[54px] md:h-[58px] px-9 md:px-10 rounded-full text-[15px] md:text-[16px] font-medium tracking-[0.04em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        whileHover={{ scale: 1.025, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.28 }}
      >
        {children}
        {icon}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.025, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.28 }}
    >
      {children}
      {icon}
    </motion.button>
  );
}
