type IconProps = {
  className?: string;
  size?: number;
};

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.5,
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function StarLogo({ className = "", size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 2 L18.2 13.8 L30 16 L18.2 18.2 L16 30 L13.8 18.2 L2 16 L13.8 13.8 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconSparkle({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M16 4v8M16 20v8M4 16h8M20 16h8M8.5 8.5l5.5 5.5M18 18l5.5 5.5M23.5 8.5L18 14M14 18l-5.5 5.5" {...stroke} />
    </svg>
  );
}

export function IconLift({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M8 22c2-6 6-10 8-10s6 4 8 10" {...stroke} />
      <path d="M12 12l4-6 4 6" {...stroke} />
    </svg>
  );
}

export function IconDrop({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M16 4c0 0 8 10 8 16a8 8 0 1 1-16 0c0-6 8-16 8-16z" {...stroke} />
    </svg>
  );
}

export function IconLeaf({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M6 26c8-2 14-8 16-18 0 0-8 2-14 10S6 26 6 26z" {...stroke} />
      <path d="M12 18c2 2 4 4 6 5" {...stroke} />
    </svg>
  );
}

export function IconBody({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="7" r="3" {...stroke} />
      <path d="M10 28v-6a6 6 0 0 1 12 0v6" {...stroke} />
      <path d="M8 14h16" {...stroke} />
    </svg>
  );
}

export function IconShield({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M16 4l10 4v8c0 6.5-4.2 11-10 12-5.8-1-10-5.5-10-12V8l10-4z" {...stroke} />
      <path d="M12 16l3 3 5-6" {...stroke} />
    </svg>
  );
}

export function IconStethoscope({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M8 6v8a8 8 0 0 0 16 0V6" {...stroke} />
      <path d="M8 6h3M21 6h3" {...stroke} />
      <circle cx="24" cy="20" r="3" {...stroke} />
      <path d="M24 23v2a4 4 0 0 1-4 4h-2" {...stroke} />
    </svg>
  );
}

export function IconSparkles({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M12 6l1.5 4.5L18 12l-4.5 1.5L12 18l-1.5-4.5L6 12l4.5-1.5L12 6z" {...stroke} />
      <path d="M22 16l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" {...stroke} />
    </svg>
  );
}

export function IconHeart({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M16 27s-10-6.2-10-13a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 6.8-10 13-10 13z"
        {...stroke}
      />
    </svg>
  );
}

export function IconUser({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="11" r="5" {...stroke} />
      <path d="M6 26c1.8-5 5.2-7.5 10-7.5S24.2 21 26 26" {...stroke} />
    </svg>
  );
}

export function IconGem({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M8 12l4-6h8l4 6-8 14-8-14z" {...stroke} />
      <path d="M8 12h16M12 6l-2 6 6 14 6-14-2-6" {...stroke} />
    </svg>
  );
}

export function IconAward({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="13" r="7" {...stroke} />
      <path d="M12 19l-2 9 6-3 6 3-2-9" {...stroke} />
    </svg>
  );
}

export function IconArrow({ className = "", size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path d="M4 10h12M12 6l4 4-4 4" {...stroke} strokeWidth={1.6} />
    </svg>
  );
}

export function IconCalendar({ className = "", size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" {...stroke} />
      <path d="M3 10h18M8 3v4M16 3v4" {...stroke} />
    </svg>
  );
}

export function IconClock({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" {...stroke} />
      <path d="M12 7v5l3 2" {...stroke} />
    </svg>
  );
}

export function IconMapPin({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" {...stroke} />
      <circle cx="12" cy="10" r="2.5" {...stroke} />
    </svg>
  );
}

export function IconPhone({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z"
        {...stroke}
      />
    </svg>
  );
}

export function IconParking({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" {...stroke} />
      <path d="M9 17V7h4.5a3.5 3.5 0 0 1 0 7H9" {...stroke} />
    </svg>
  );
}

export function IconInstagram({ className = "", size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" {...stroke} />
      <circle cx="12" cy="12" r="4" {...stroke} />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBlog({ className = "", size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M5 5h14v14H5z" {...stroke} />
      <path d="M8 9h8M8 12h8M8 15h5" {...stroke} />
    </svg>
  );
}

export const treatmentIcons = {
  sparkle: IconSparkle,
  lift: IconLift,
  drop: IconDrop,
  leaf: IconLeaf,
  body: IconBody,
};

export const trustIcons = {
  shield: IconShield,
  stethoscope: IconStethoscope,
  sparkles: IconSparkles,
  heart: IconHeart,
};

export const differenceIcons = {
  user: IconUser,
  gem: IconGem,
  award: IconAward,
  heart: IconHeart,
};
