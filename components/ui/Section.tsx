import React from "react";
import { Container } from "./Container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  eyebrow?: string;
  heading?: string;
  headingId?: string;
  lead?: string;
  background?: "white" | "soft" | "muted";
  containerSize?: "sm" | "md" | "lg" | "full";
  align?: "left" | "center";
  className?: string;
}

/**
 * Section component with standardized white-theme backgrounds and vertical rhythm.
 * Enforces 80-112px desktop and 56-72px mobile padding per design tokens.
 */
export function Section({
  children,
  eyebrow,
  heading,
  headingId,
  lead,
  background = "white",
  containerSize = "lg",
  align = "left",
  className = "",
  ...props
}: SectionProps) {
  const bgClasses = {
    white: "bg-[#FFFFFF]",
    soft: "bg-[#F7F9FC] border-y border-[#E2E8F0]/60",
    muted: "bg-[#EEF2F7] border-y border-[#E2E8F0]",
  }[background];

  const alignmentClasses =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <section
      className={`py-14 sm:py-16 lg:py-24 transition-colors ${bgClasses} ${className}`}
      {...props}
    >
      <Container size={containerSize}>
        {(eyebrow || heading || lead) && (
          <div className={`flex flex-col ${alignmentClasses} mb-12 sm:mb-16`}>
            {eyebrow && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4]" aria-hidden="true" />
                {eyebrow}
              </span>
            )}
            {heading && (
              <h2
                id={headingId}
                className="text-fluid-h2 font-bold text-[#0B1F3A] tracking-tight max-w-3xl"
              >
                {heading}
              </h2>
            )}
            {lead && (
              <p className="mt-4 text-base sm:text-lg text-[#5B6B7F] prose-optimal leading-relaxed font-normal">
                {lead}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

export default Section;
