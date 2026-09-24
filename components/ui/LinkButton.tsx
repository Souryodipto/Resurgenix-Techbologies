import React from "react";
import Link, { LinkProps } from "next/link";
import { buttonStyles, ButtonVariant, ButtonSize } from "./Button";

export interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  target?: string;
  rel?: string;
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
  ...props
}: LinkButtonProps) {
  const variantClass = buttonStyles.variants[variant];
  const sizeClass = buttonStyles.sizes[size];

  return (
    <Link
      href={href}
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
