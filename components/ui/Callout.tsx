import React from "react";

export type CalloutType = "Assumption" | "Note" | "Under development" | "Compliance";

export interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Callout component for transparency notices, assumptions, and life-cycle notes.
 */
export function Callout({ type = "Note", title, children, className = "" }: CalloutProps) {
  const styles = {
    Assumption: {
      border: "border-amber-200",
      bg: "bg-amber-50/60",
      titleColor: "text-amber-900",
      badgeColor: "bg-amber-100 text-amber-800",
      icon: "ℹ️",
    },
    Note: {
      border: "border-blue-200",
      bg: "bg-blue-50/60",
      titleColor: "text-blue-900",
      badgeColor: "bg-blue-100 text-blue-800",
      icon: "📌",
    },
    "Under development": {
      border: "border-slate-300",
      bg: "bg-[#F7F9FC]",
      titleColor: "text-[#0B1F3A]",
      badgeColor: "bg-[#EEF2F7] text-[#5B6B7F]",
      icon: "⚙️",
    },
    Compliance: {
      border: "border-emerald-200",
      bg: "bg-emerald-50/60",
      titleColor: "text-emerald-900",
      badgeColor: "bg-emerald-100 text-emerald-800",
      icon: "🛡️",
    },
  }[type];

  return (
    <div
      className={`p-4 sm:p-5 rounded-[12px] border ${styles.border} ${styles.bg} ${className}`}
      role="note"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs" aria-hidden="true">
          {styles.icon}
        </span>
        <span
          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px] ${styles.badgeColor}`}
        >
          {type}
        </span>
        {title && <h4 className={`text-xs sm:text-sm font-bold ${styles.titleColor}`}>{title}</h4>}
      </div>
      <div className="text-xs sm:text-sm text-[#1F2937] leading-relaxed">{children}</div>
    </div>
  );
}

export default Callout;
