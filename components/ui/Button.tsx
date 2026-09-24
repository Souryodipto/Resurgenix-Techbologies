import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const buttonStyles = {
  base: "inline-flex items-center justify-center font-semibold rounded-[10px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none active:scale-[0.98]",
  variants: {
    primary: "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xs border border-transparent",
    secondary:
      "bg-white hover:bg-[#F7F9FC] text-[#1F2937] border border-[#E2E8F0] shadow-xs hover:border-[#CBD5E1]",
    ghost: "bg-transparent hover:bg-[#F7F9FC] text-[#1F2937] hover:text-[#0B1F3A]",
    whatsapp: "bg-[#059669] hover:bg-[#047857] text-white shadow-xs border border-transparent",
  },
  sizes: {
    sm: "min-h-[40px] px-3.5 py-1.5 text-xs gap-1.5",
    md: "min-h-[44px] px-5 py-2 text-sm gap-2", // Meets 44px min touch target
    lg: "min-h-[48px] px-6 py-2.5 text-base gap-2.5",
  },
};

/**
 * Standard enterprise Button component.
 * Follows 10px corner radius, strict light palette, and WCAG touch targets.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const variantClass = buttonStyles.variants[variant];
  const sizeClass = buttonStyles.sizes[size];

  return (
    <button
      className={`${buttonStyles.base} ${variantClass} ${sizeClass} ${className}`}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon && (
            <span className="flex-shrink-0" aria-hidden="true">
              {leftIcon}
            </span>
          )}
          <span>{children}</span>
          {rightIcon && (
            <span className="flex-shrink-0" aria-hidden="true">
              {rightIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
}

export default Button;
