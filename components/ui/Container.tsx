import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "full";
}

/**
 * Container component for horizontal containment and responsive gutters.
 * Conforms to the 1200px max-width grid specification.
 */
export function Container({ children, className = "", size = "lg", ...props }: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-[768px]",
    md: "max-w-[960px]",
    lg: "max-w-[1200px]",
    full: "max-w-full",
  }[size];

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses} ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Container;
