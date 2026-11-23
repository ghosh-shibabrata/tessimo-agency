import React from "react";

interface TessimoIconProps extends React.SVGProps<SVGSVGElement> {
  variant?: "solid" | "teal" | "chrome" | "outline";
  size?: number | string;
}

export function TessimoIcon({
  variant = "solid",
  size = 28,
  className = "",
  ...props
}: TessimoIconProps) {
  const iconId = React.useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        {/* Subtle metallic chrome gradient */}
        <linearGradient
          id={`chrome-grad-${iconId}`}
          x1="15"
          y1="15"
          x2="85"
          y2="85"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#D4D4D8" />
          <stop offset="70%" stopColor="#A1A1AA" />
          <stop offset="100%" stopColor="#52525B" />
        </linearGradient>

        {/* Luminous teal gradient */}
        <linearGradient
          id={`teal-grad-${iconId}`}
          x1="15"
          y1="15"
          x2="85"
          y2="85"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8DF6E5" />
          <stop offset="50%" stopColor="#66E5D1" />
          <stop offset="100%" stopColor="#2BB8A3" />
        </linearGradient>

        {/* Dark graphite stealth gradient */}
        <linearGradient
          id={`dark-grad-${iconId}`}
          x1="20"
          y1="20"
          x2="80"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#3F3F46" />
          <stop offset="50%" stopColor="#27272A" />
          <stop offset="100%" stopColor="#18181B" />
        </linearGradient>
      </defs>

      {/* Top aerodynamic wing bar */}
      <path
        d="M 18 24 C 22 23 30 22 42 22 L 78 22 C 86 22 88 25 82 28 C 76 31 68 33 58 34 L 38 34 C 26 34 18 30 18 24 Z"
        fill={
          variant === "teal"
            ? `url(#teal-grad-${iconId})`
            : variant === "chrome"
            ? `url(#chrome-grad-${iconId})`
            : variant === "outline"
            ? "none"
            : "#F3F4F4"
        }
        stroke={variant === "outline" ? "#66E5D1" : undefined}
        strokeWidth={variant === "outline" ? "2.5" : undefined}
      />

      {/* Secondary sculpted blade & vertical stem */}
      <path
        d="M 44 32 C 55 32 72 31 78 35 C 72 40 60 44 48 44 C 44 44 42 47 42 52 L 42 78 C 42 84 46 86 52 83 L 52 86 C 45 88 38 88 34 83 C 32 80 32 72 32 64 L 32 46 C 32 37 37 32 44 32 Z"
        fill={
          variant === "teal"
            ? `url(#teal-grad-${iconId})`
            : variant === "chrome"
            ? `url(#chrome-grad-${iconId})`
            : variant === "outline"
            ? "none"
            : "#F3F4F4"
        }
        stroke={variant === "outline" ? "#66E5D1" : undefined}
        strokeWidth={variant === "outline" ? "2.5" : undefined}
      />
    </svg>
  );
}
