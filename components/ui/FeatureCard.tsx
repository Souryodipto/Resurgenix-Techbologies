import React from "react";
import Link from "next/link";
import { Card } from "./Card";
import { IconBox, IconBoxVariant } from "./IconBox";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconVariant?: IconBoxVariant;
  badge?: React.ReactNode;
  href?: string;
  linkText?: string;
  className?: string;
}

/**
 * FeatureCard component uniting an icon box, title, description, and action link.
 */
export function FeatureCard({
  title,
  description,
  icon,
  iconVariant = "blue",
  badge,
  href,
  linkText = "Learn more",
  className = "",
}: FeatureCardProps) {
  return (
    <Card hoverable className={`flex flex-col justify-between h-full ${className}`}>
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          {icon && (
            <IconBox variant={iconVariant} size="md">
              {icon}
            </IconBox>
          )}
          {badge && <div className="ml-auto flex-shrink-0">{badge}</div>}
        </div>

        <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A] tracking-tight mb-2">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-[#5B6B7F] leading-relaxed font-normal">
          {description}
        </p>
      </div>

      {href && (
        <div className="pt-4 mt-6 border-t border-[#E2E8F0]/70">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group"
          >
            <span>{linkText}</span>
            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </div>
      )}
    </Card>
  );
}

export default FeatureCard;
