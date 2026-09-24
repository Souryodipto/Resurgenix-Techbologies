"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { buttonStyles, ButtonVariant, ButtonSize } from "./Button";
import { trackCtaClick } from "@/lib/analytics";

export interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

/**
 * LinkButton component rendering a Next.js Link styled identically to the Button component.
 */
export function LinkButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  leftIcon,
  rightIcon,
  onClick,
  ...props
}: LinkButtonProps) {
  const variantClass = buttonStyles.variants[variant];
  const sizeClass = buttonStyles.sizes[size];

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    try {
      const label = typeof children === "string" ? children : "CTA Button";
      const location = typeof window !== "undefined" ? window.location.pathname : "";
      trackCtaClick(label, location, String(href));
    } catch {
      // Safe no-op
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${buttonStyles.base} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
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
    </Link>
  );
}

export default LinkButton;
