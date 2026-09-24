import React from "react";
import { CapabilityStatus, STATUS_CONFIG } from "@/content/capabilities";

interface StatusBadgeProps {
  status: CapabilityStatus;
  size?: "sm" | "md";
  showDot?: boolean;
  className?: string;
}

export function StatusBadge({
  status,
  size = "md",
  showDot = true,
  className = "",
}: StatusBadgeProps) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.pilot;

  const sizeClasses = size === "sm" ? "text-xs px-2 py-0.5" : "text-xs font-medium px-2.5 py-1";

  const dotColor =
    status === "pilot"
      ? "bg-emerald-500"
      : status === "in-development"
        ? "bg-blue-500"
        : "bg-slate-400";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${config.bgColor} ${config.textColor} ${config.borderColor} ${sizeClasses} ${className}`}
      title={config.description}
    >
      {showDot && (
        <span
          className={`h-1.5 w-1.5 rounded-full ${dotColor} flex-shrink-0 animate-pulse`}
          aria-hidden="true"
        />
      )}
      <span>{config.label}</span>
    </span>
  );
}

export default StatusBadge;
