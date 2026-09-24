import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "white" | "soft";
  hoverable?: boolean;
  className?: string;
}

/**
 * Standard enterprise Card component.
 * Follows 12px corner radius, thin borders (#E2E8F0), and subtle shadows.
 */
export function Card({
  children,
  variant = "white",
  hoverable = false,
  className = "",
  ...props
}: CardProps) {
  const bgStyles = variant === "soft" ? "bg-[#F7F9FC]" : "bg-white";
  const hoverStyles = hoverable
    ? "transition-all duration-200 hover:border-[#CBD5E1] hover:shadow-sm"
    : "";

  return (
    <div
      className={`rounded-[12px] border border-[#E2E8F0] p-6 shadow-xs ${bgStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
