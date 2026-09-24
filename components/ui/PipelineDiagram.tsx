import React from "react";

export interface PipelineDiagramProps {
  className?: string;
}

/**
 * PipelineDiagram: Accessible inline SVG diagram illustrating the 6-stage infrastructure flow.
 * Existing Cameras > NVR/DVR/RTSP > AI Vision Layer > Detection > Real-time Alert > Dashboard
 */
export function PipelineDiagram({ className = "" }: PipelineDiagramProps) {
  const stages = [
    {
      step: "01",
      title: "Existing Cameras",
      subtitle: "IP / CCTV / PoE",
      color: "border-[#E2E8F0] bg-white text-[#0B1F3A]",
    },
    {
      step: "02",
      title: "Stream Ingest",
      subtitle: "RTSP / ONVIF / NVR",
      color: "border-[#E2E8F0] bg-white text-[#0B1F3A]",
    },
    {
      step: "03",
      title: "AI Vision Layer",
      subtitle: "Edge GPU Inference",
      color: "border-blue-200 bg-blue-50/70 text-[#2563EB]",
      isHighlight: true,
    },
    {
      step: "04",
      title: "Event Detection",
      subtitle: "Spatial Rules & Filters",
      color: "border-[#06B6D4]/30 bg-cyan-50/50 text-cyan-900",
    },
    {
      step: "05",
      title: "Sub-Second Alert",
      subtitle: "Instant Push & Webhooks",
      color: "border-amber-200 bg-amber-50/50 text-amber-900",
    },
    {
      step: "06",
      title: "SOC Dashboard",
      subtitle: "Central Management",
      color: "border-[#E2E8F0] bg-white text-[#0B1F3A]",
    },
  ];

  return (
    <figure
      className={`w-full p-6 sm:p-8 rounded-[12px] border border-[#E2E8F0] bg-white shadow-xs ${className}`}
      aria-label="Resurgenix Video Intelligence Architecture Diagram"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#E2E8F0]">
        <div>
          <h3 className="font-heading font-bold text-base text-[#0B1F3A]">
            Infrastructure Intelligence Flow
          </h3>
          <p className="text-xs text-[#5B6B7F]">
            From passive optical recording to real-time incident alerting
          </p>
        </div>
        <span className="text-[11px] font-mono text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 self-start sm:self-auto">
          Protocol: RTSP / ONVIF Profile S
        </span>
      </div>

      {/* Responsive Visual Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 sm:gap-2 relative">
        {stages.map((stage, idx) => (
          <div key={idx} className="flex flex-col items-center text-center relative group">
            <div
              className={`w-full p-4 rounded-[10px] border ${stage.color} flex flex-col items-center justify-center min-h-[105px] transition-all hover:border-[#CBD5E1] shadow-2xs`}
            >
              <span className="text-[10px] font-mono font-bold text-[#5B6B7F] mb-1">
                STAGE {stage.step}
              </span>
              <span className="font-bold text-xs sm:text-sm text-[#0B1F3A] leading-tight">
                {stage.title}
              </span>
              <span className="text-[11px] text-[#5B6B7F] mt-1">{stage.subtitle}</span>
            </div>

            {/* Connecting Chevron Arrow (hidden on last item, vertical on mobile) */}
            {idx < stages.length - 1 && (
              <div
                className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-white border border-[#E2E8F0] items-center justify-center text-[10px] text-[#2563EB] shadow-2xs"
                aria-hidden="true"
              >
                &rarr;
              </div>
            )}
          </div>
        ))}
      </div>

      <figcaption className="mt-6 pt-4 border-t border-[#E2E8F0]/70 flex items-center justify-between text-[11px] text-[#5B6B7F]">
        <span>Zero camera replacement required &bull; Edge-first architecture</span>
        <span className="font-mono text-[#06B6D4]">Latency: &lt; 1000ms</span>
      </figcaption>
    </figure>
  );
}

export default PipelineDiagram;
