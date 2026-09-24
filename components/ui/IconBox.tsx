import React from "react";

export type IconBoxVariant = "blue" | "cyan" | "neutral";
export type IconBoxSize = "sm" | "md" | "lg";

export interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: IconBoxVariant;
  size?: IconBoxSize;
  className?: string;
}

/**
 * IconBox container with 10px corner radius and light theme accents.
 */
export function IconBox({
  children,
  variant = "blue",
  size = "md",
  className = "",
  ...props
}: IconBoxProps) {
  const variantStyles = {
    blue: "bg-blue-50 text-[#2563EB] border-blue-100",
    cyan: "bg-cyan-50 text-cyan-700 border-cyan-100",
    neutral: "bg-[#F7F9FC] text-[#0B1F3A] border-[#E2E8F0]",
  }[variant];

  const sizeStyles = {
    sm: "w-8 h-8 rounded-[8px] text-sm",
    md: "w-11 h-11 rounded-[10px] text-base",
    lg: "w-14 h-14 rounded-[12px] text-xl",
  }[size];

  return (
    <div
      className={`inline-flex items-center justify-center border flex-shrink-0 transition-transform ${variantStyles} ${sizeStyles} ${className}`}
      aria-hidden="true"
      {...props}
    >
      {children}
    </div>
  );
}

export default IconBox;
