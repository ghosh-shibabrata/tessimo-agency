import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "teal" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      iconLeft,
      iconRight,
      isLoading = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const variantClass = {
      primary: "btn-primary",
      teal: "btn-teal",
      secondary: "btn-secondary",
      ghost: "btn-ghost",
    }[variant];

    const sizeClass = {
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    }[size];

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "btn-base",
          variantClass,
          sizeClass,
          (disabled || isLoading) && "opacity-50 pointer-events-none cursor-not-allowed",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-1" />
        ) : (
          iconLeft
        )}
        {children}
        {!isLoading && iconRight}
      </button>
    );
  }
);

Button.displayName = "Button";
