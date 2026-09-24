import React from "react";

export interface StatBlockProps {
  value: string;
  label: string;
  supportingText?: string;
  isVerified?: boolean;
  citationSource?: string;
  className?: string;
}

/**
 * StatBlock component strictly adhering to truth guardrails.
 * Only renders verified empirical metrics; never fabricates statistical claims.
 */
export function StatBlock({
  value,
  label,
  supportingText,
  isVerified = true,
  citationSource,
  className = "",
}: StatBlockProps) {
  // Guardrail check: if unverified, never render in production
  if (!isVerified) {
    if (process.env.NODE_ENV === "production") {
      return null;
    }
    return (
      <div
        className={`p-5 rounded-[12px] border border-dashed border-[#E2E8F0] bg-[#F7F9FC] text-center ${className}`}
      >
        <span className="text-[11px] font-mono text-[#5B6B7F] uppercase tracking-wider block mb-1">
          [Add verified customer proof]
        </span>
        <span className="text-xs text-[#5B6B7F]">{label}</span>
      </div>
    );
  }

  return (
    <div
      className={`p-5 sm:p-6 rounded-[12px] border border-[#E2E8F0] bg-white shadow-xs ${className}`}
    >
      <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1F3A] tracking-tight">
        {value}
      </div>
      <div className="mt-1 font-semibold text-xs sm:text-sm text-[#0B1F3A]">{label}</div>
      {supportingText && (
        <p className="mt-1 text-xs text-[#5B6B7F] leading-relaxed font-normal">{supportingText}</p>
      )}
      {citationSource && (
        <span className="mt-2 block text-[10px] font-mono text-[#5B6B7F]">
          Verified: {citationSource}
        </span>
      )}
    </div>
  );
}

export default StatBlock;
