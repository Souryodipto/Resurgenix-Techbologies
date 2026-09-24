import React from "react";

export interface IllustrativeDashboardProps {
  className?: string;
}

/**
 * IllustrativeDashboard: Mockup component of an event console.
 * Strictly respects truth guardrails:
 * - Abstract placeholder content only
 * - Permanent "Illustrative interface" caption
 * - No fake customer names or fabricated metrics
 */
export function IllustrativeDashboard({ className = "" }: IllustrativeDashboardProps) {
  const events = [
    {
      id: "EV-1042",
      type: "Zone Intrusion Alert",
      camera: "Camera 04 - East Boundary",
      time: "14:32:08",
      severity: "High",
      severityBg: "bg-red-50 text-red-700 border-red-200",
    },
    {
      id: "EV-1041",
      type: "Workforce Entry Log",
      camera: "Camera 01 - Main Gate Checkpoint",
      time: "14:30:45",
      severity: "Standard",
      severityBg: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      id: "EV-1040",
      type: "Line-Crossing Event",
      camera: "Camera 07 - Loading Dock B",
      time: "14:28:12",
      severity: "Medium",
      severityBg: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      id: "EV-1039",
      type: "Stream Health Check",
      camera: "Camera 02 - North Perimeter",
      time: "14:25:00",
      severity: "Normal",
      severityBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ];

  return (
    <figure
      className={`rounded-[12px] border border-[#E2E8F0] bg-white shadow-xs overflow-hidden ${className}`}
      aria-label="Illustrative Security Event Dashboard Interface"
    >
      {/* Console Header Bar */}
      <div className="bg-[#F7F9FC] border-b border-[#E2E8F0] px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
          </div>
          <span className="font-heading font-bold text-[#0B1F3A] ml-2">
            Central Security Console
          </span>
          <span className="text-[11px] font-mono text-[#5B6B7F] bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">
            Live Node: Local Edge 01
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[11px] text-[#059669]">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            <span>Streams Active: 4 / 4</span>
          </div>
          <span className="text-[11px] font-mono bg-blue-50 text-[#2563EB] px-2 py-0.5 rounded border border-blue-200">
            Events Today: 24
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E8F0]">
        {/* Left Side: Camera Grid with Detection Bounding Boxes */}
        <div className="lg:col-span-7 p-4 bg-white">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-semibold text-[#0B1F3A]">Live Stream Feeds</span>
            <span className="text-[#5B6B7F] text-[11px]">RTSP 1080p @ 15fps</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Camera Tile 1: Restricted Zone with Detection Box */}
            <div className="relative aspect-video bg-[#EEF2F7] rounded-[8px] border border-[#E2E8F0] p-2 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-center text-[10px] text-[#5B6B7F] z-10">
                <span className="font-mono bg-white/90 px-1.5 py-0.5 rounded">
                  CAM 01 - Server Room
                </span>
                <span className="bg-red-100 text-red-700 font-bold px-1 rounded">ZONE BREACH</span>
              </div>

              {/* Simulated Detection Box with thin cyan outline */}
              <div className="absolute inset-8 border-2 border-[#06B6D4] rounded-[4px] bg-[#06B6D4]/5 flex flex-col justify-between p-1">
                <span className="text-[9px] font-mono text-[#06B6D4] bg-[#0B1F3A] px-1 py-0.5 rounded self-start">
                  Person 94.2%
                </span>
              </div>

              <div className="text-[9px] text-[#5B6B7F] self-end z-10 font-mono">14:32:10 LIVE</div>
            </div>

            {/* Camera Tile 2: Vehicle Gate */}
            <div className="relative aspect-video bg-[#EEF2F7] rounded-[8px] border border-[#E2E8F0] p-2 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-center text-[10px] text-[#5B6B7F] z-10">
                <span className="font-mono bg-white/90 px-1.5 py-0.5 rounded">
                  CAM 02 - East Gate
                </span>
                <span className="bg-emerald-100 text-emerald-800 font-bold px-1 rounded">
                  ANPR LOGGED
                </span>
              </div>

              {/* Simulated Vehicle Bounding Box with thin blue outline */}
              <div className="absolute inset-10 border-2 border-[#2563EB] rounded-[4px] bg-[#2563EB]/5 flex flex-col justify-between p-1">
                <span className="text-[9px] font-mono text-white bg-[#2563EB] px-1 py-0.5 rounded self-start">
                  Vehicle [Commercial]
                </span>
              </div>

              <div className="text-[9px] text-[#5B6B7F] self-end z-10 font-mono">14:32:09 LIVE</div>
            </div>

            {/* Camera Tile 3: Loading Yard */}
            <div className="relative aspect-video bg-[#EEF2F7] rounded-[8px] border border-[#E2E8F0] p-2 flex flex-col justify-between">
              <div className="flex justify-between items-center text-[10px] text-[#5B6B7F]">
                <span className="font-mono bg-white/90 px-1.5 py-0.5 rounded">
                  CAM 03 - Yard Bay
                </span>
                <span className="text-[10px] text-slate-500">Virtual Fence Active</span>
              </div>
              <div className="text-[9px] text-[#5B6B7F] self-end font-mono">14:32:08 LIVE</div>
            </div>

            {/* Camera Tile 4: Main Corridor */}
            <div className="relative aspect-video bg-[#EEF2F7] rounded-[8px] border border-[#E2E8F0] p-2 flex flex-col justify-between">
              <div className="flex justify-between items-center text-[10px] text-[#5B6B7F]">
                <span className="font-mono bg-white/90 px-1.5 py-0.5 rounded">CAM 04 - Lobby</span>
                <span className="text-[10px] text-slate-500">Normal</span>
              </div>
              <div className="text-[9px] text-[#5B6B7F] self-end font-mono">14:32:08 LIVE</div>
            </div>
          </div>
        </div>

        {/* Right Side: Real-Time Event Feed */}
        <div className="lg:col-span-5 p-4 bg-[#F7F9FC]">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-semibold text-[#0B1F3A]">Real-Time Incident Stream</span>
            <span className="text-[11px] text-[#2563EB] font-medium">Auto-Refresh Active</span>
          </div>

          <div className="space-y-2">
            {events.map((ev) => (
              <div
                key={ev.id}
                className="p-2.5 rounded-[8px] border border-[#E2E8F0] bg-white text-xs hover:border-[#CBD5E1] transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.2 rounded border ${ev.severityBg}`}
                  >
                    {ev.type}
                  </span>
                  <span className="text-[10px] font-mono text-[#5B6B7F]">{ev.time}</span>
                </div>
                <div className="text-[11px] text-[#0B1F3A] font-medium truncate">{ev.camera}</div>
                <div className="text-[10px] font-mono text-[#5B6B7F] mt-0.5">Event ID: {ev.id}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mandatory Truth Caption */}
      <figcaption className="bg-white border-t border-[#E2E8F0] px-4 py-2 text-center text-[11px] text-[#5B6B7F]">
        <span className="font-semibold text-[#0B1F3A]">Illustrative interface</span> — Conceptual
        representation of live security telemetry. No client names or unverified metrics shown.
      </figcaption>
    </figure>
  );
}

export default IllustrativeDashboard;
