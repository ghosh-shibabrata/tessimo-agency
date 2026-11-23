import React from "react";
import { TessimoIcon } from "./TessimoIcon";
import { TessimoWordmark } from "./TessimoWordmark";

interface TessimoLogoProps {
  className?: string;
  iconVariant?: "solid" | "teal" | "chrome" | "outline";
  wordmarkVariant?: "primary" | "muted" | "stealth";
  size?: "sm" | "md" | "lg" | "xl";
  showWordmark?: boolean;
}

export function TessimoLogo({
  className = "",
  iconVariant = "chrome",
  wordmarkVariant = "primary",
  size = "md",
  showWordmark = true,
}: TessimoLogoProps) {
  const iconSizes = {
    sm: 20,
    md: 26,
    lg: 32,
    xl: 40,
  };

  const gapSizes = {
    sm: "gap-2",
    md: "gap-2.5",
    lg: "gap-3",
    xl: "gap-3.5",
  };

  return (
    <div className={`inline-flex items-center ${gapSizes[size]} ${className}`}>
      <TessimoIcon size={iconSizes[size]} variant={iconVariant} />
      {showWordmark && (
        <TessimoWordmark size={size} variant={wordmarkVariant} />
      )}
    </div>
  );
}
