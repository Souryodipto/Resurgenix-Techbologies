import React from "react";

export interface StepItem {
  number: string | number;
  title: string;
  description: string;
}

export interface StepFlowProps {
  steps: StepItem[];
  orientation?: "horizontal" | "vertical";
  className?: string;
}

/**
 * StepFlow component for sequential pipelines and deployment processes.
 */
export function StepFlow({ steps, orientation = "horizontal", className = "" }: StepFlowProps) {
  return (
    <div
      className={`grid gap-4 sm:gap-6 ${
        orientation === "horizontal" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"
      } ${className}`}
    >
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="relative flex flex-col p-5 rounded-[12px] border border-[#E2E8F0] bg-white shadow-xs"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-[8px] bg-blue-50 text-[#2563EB] text-xs font-mono font-bold border border-blue-100">
              {step.number}
            </span>
            <span className="text-[11px] font-mono text-[#5B6B7F] uppercase tracking-wider">
              Step {idx + 1}
            </span>
          </div>

          <h4 className="font-bold text-sm sm:text-base text-[#0B1F3A] mb-1.5">{step.title}</h4>

          <p className="text-xs text-[#5B6B7F] leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

export default StepFlow;
