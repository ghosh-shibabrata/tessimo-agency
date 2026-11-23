import React from "react";

interface TessimoWordmarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "muted" | "stealth";
}

export function TessimoWordmark({
  className = "",
  size = "md",
  variant = "primary",
}: TessimoWordmarkProps) {
  const sizeClasses = {
    sm: "text-lg tracking-[-0.03em]",
    md: "text-xl tracking-[-0.03em]",
    lg: "text-2xl tracking-[-0.035em]",
    xl: "text-3xl tracking-[-0.04em]",
  };

  const variantClasses = {
    primary: "text-[#F3F4F4]",
    muted: "text-[#969B9D]",
    stealth: "text-[#27272A]",
  };

  return (
    <span
      className={`font-semibold font-grotesk select-none inline-flex items-center ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      Tessimo
    </span>
  );
}
