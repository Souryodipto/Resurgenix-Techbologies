import React from "react";

export type BadgeVariant = "neutral" | "blue" | "cyan" | "emerald" | "amber";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "md";
  showDot?: boolean;
}

/**
 * General purpose chip / badge component.
 */
export function Badge({
  children,
  variant = "neutral",
  size = "md",
  showDot = false,
  className = "",
  ...props
}: BadgeProps) {
  const variantStyles = {
    neutral: "bg-[#F7F9FC] text-[#1F2937] border-[#E2E8F0]",
    blue: "bg-blue-50 text-blue-700 border-blue-200/80",
    cyan: "bg-cyan-50 text-cyan-800 border-cyan-200",
    emerald: "bg-emerald-50 text-emerald-800 border-emerald-200",
    amber: "bg-amber-50 text-amber-800 border-amber-200",
  }[variant];

  const dotStyles = {
    neutral: "bg-slate-400",
    blue: "bg-[#2563EB]",
    cyan: "bg-[#06B6D4]",
    emerald: "bg-[#059669]",
    amber: "bg-amber-500",
  }[variant];

  const sizeStyles = size === "sm" ? "text-[11px] px-2 py-0.5" : "text-xs px-2.5 py-1 font-medium";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {showDot && (
        <span
          className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${dotStyles}`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}

export default Badge;
