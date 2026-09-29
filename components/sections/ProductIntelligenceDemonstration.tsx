"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { trackVideoPlay, trackVideoComplete } from "@/lib/analytics";

interface PipelineStage {
  id: string;
  name: string;
  subtext: string;
  indicator: string;
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: "feed",
    name: "Camera Feed",
    subtext: "Existing RTSP / ONVIF stream ingestion",
    indicator: "RTSP 1080p",
  },
  {
    id: "detection",
    name: "AI Detection",
    subtext: "Real-time edge neural inference",
    indicator: "< 50ms Inference",
  },
  {
    id: "intelligence",
    name: "Intelligence",
    subtext: "Spatial logic, tracking & dwell counting",
    indicator: "Spatial Engine",
  },
  {
    id: "analytics",
    name: "Analytics",
    subtext: "Structured events, alerts & dashboard telemetry",
    indicator: "Instant Metadata",
  },
];

const CAPABILITIES = [
  {
    id: "attendance",
    label: "AI-Based Attendance",
    description: "Automated contactless workforce check-in and biometric verification.",
    tag: "Workforce",
  },
  {
    id: "crowd",
    label: "Crowd Counting",
    description: "Real-time density estimation and automated occupancy threshold monitoring.",
    tag: "Safety",
  },
  {
    id: "car-parking",
    label: "Automated Car Parking",
    description: "Bay availability detection and automated license plate entry logging.",
    tag: "Mobility",
  },
  {
    id: "bike-parking",
    label: "Automated Bike Parking",
    description: "Two-wheeler zone perimeter security and bay utilization analytics.",
    tag: "Perimeter",
  },
  {
    id: "vehicle-tracking",
    label: "Vehicle Entry & Exit Tracking",
    description: "Automated gate barrier interface with optical timestamp verification.",
    tag: "Access",
  },
  {
    id: "dwell-time",
    label: "Parking Dwell-Time Calculation",
    description: "Overstay detection, duration metrics, and automated lot turnover tracking.",
    tag: "Analytics",
  },
  {
    id: "video-analytics",
    label: "AI Video Analytics",
    description: "Directional vector evaluation, line-crossing detection, and speed estimation.",
    tag: "Vision",
  },
  {
    id: "centralized-cctv",
    label: "Centralized CCTV Intelligence",
    description: "Unified multi-camera dashboard synchronizing distributed site feeds.",
    tag: "Central Console",
  },
];

export function ProductIntelligenceDemonstration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef<boolean>(false);
  const hasTrackedPlayRef = useRef<boolean>(false);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentTimeStr, setCurrentTimeStr] = useState<string>("00:00");
  const [durationStr, setDurationStr] = useState<string>("00:00");
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);
  const [isAutoplayBlocked, setIsAutoplayBlocked] = useState<boolean>(false);

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return "00:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Viewport Scroll Autoplay (IntersectionObserver)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect user's reduced-motion preference
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        return;
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (!video) return;

          // When at least 30% of the section is visible in viewport
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            if (!userPausedRef.current && video.paused) {
              video.muted = isMuted;
              video
                .play()
                .then(() => {
                  setIsPlaying(true);
                  setIsAutoplayBlocked(false);
                  if (!hasTrackedPlayRef.current) {
                    hasTrackedPlayRef.current = true;
                    trackVideoPlay("AI CCTV Intelligence - Live Product Demonstration");
                  }
                })
                .catch((err) => {
                  console.info("Autoplay restricted by browser, showing play trigger:", err?.message || err);
                  setIsAutoplayBlocked(true);
                });
            }
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.1) {
            // Pause when scrolled sufficiently outside viewport to save resources
            if (!video.paused) {
              video.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      {
        threshold: [0, 0.15, 0.3, 0.5, 0.8],
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [isMuted]);

  // Video Time Update & Stage Sync
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const current = video.currentTime;
    const dur = video.duration;
    const pct = (current / dur) * 100;
    setProgress(pct);
    setCurrentTimeStr(formatTime(current));

    // Map playback duration to 4 Pipeline Stages
    const stageIdx = Math.min(3, Math.floor((current / dur) * 4));
    setActiveStageIndex(stageIdx);
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      setDurationStr(formatTime(video.duration));
    }
  };

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      userPausedRef.current = false;
      video
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsAutoplayBlocked(false);
          if (!hasTrackedPlayRef.current) {
            hasTrackedPlayRef.current = true;
            trackVideoPlay("AI CCTV Intelligence - Live Product Demonstration");
          }
        })
        .catch(() => setIsAutoplayBlocked(true));
    } else {
      userPausedRef.current = true;
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleSound = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  }, []);

  const toggleFullscreen = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (!document.fullscreenElement) {
      if (video.requestFullscreen) {
        video.requestFullscreen().catch(() => {});
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }, []);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    video.currentTime = ratio * video.duration;
  };

  return (
    <section
      id="product-demonstration"
      ref={containerRef}
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0] relative overflow-hidden"
      aria-label="AI CCTV Intelligence Product Demonstration"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-mono font-semibold tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" aria-hidden="true" />
            AI CCTV INTELLIGENCE
          </div>

          <h2 className="text-fluid-h2 font-heading font-extrabold text-[#0B1F3A] tracking-tight">
            See What Your Cameras Understand
          </h2>

          <p className="text-sm sm:text-base text-[#5B6B7F] leading-relaxed max-w-2xl mx-auto">
            Real-time neural analysis operating directly across active camera streams — transforming passive recording into instant attendance, crowd density, vehicle movement, and parking dwell metrics.
          </p>
        </div>

        {/* Dynamic Pipeline Progression Strip */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-3 sm:p-4 shadow-2xs">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 relative">
              {PIPELINE_STAGES.map((stage, idx) => {
                const isActive = activeStageIndex === idx;
                const isPassed = activeStageIndex > idx;
                return (
                  <div
                    key={stage.id}
                    className={`relative p-3 rounded-[8px] transition-all duration-300 border ${
                      isActive
                        ? "bg-blue-50/80 border-[#2563EB]/40 shadow-xs"
                        : isPassed
                        ? "bg-slate-50 border-slate-200"
                        : "bg-white border-transparent opacity-75"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors ${
                          isActive
                            ? "bg-[#2563EB] animate-pulse"
                            : isPassed
                            ? "bg-emerald-500"
                            : "bg-slate-300"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0B1F3A]">
                        {stage.name}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#5B6B7F] leading-tight hidden sm:block">
                      {stage.subtext}
                    </p>
                    <span className="mt-1.5 inline-block text-[9px] font-mono px-1.5 py-0.5 rounded bg-white border border-[#E2E8F0] text-[#2563EB] font-medium">
                      {stage.indicator}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Video Player Display Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="relative rounded-[16px] overflow-hidden border border-[#CBD5E1] bg-slate-950 shadow-md group">
            {/* Top Console Telemetry Header */}
            <div className="absolute top-0 left-0 right-0 z-20 px-4 py-2.5 bg-slate-950/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between text-xs text-slate-200 select-none">
              <div className="flex items-center gap-2.5">
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE DEMO
                </span>
                <span className="text-slate-400 font-mono text-[11px] hidden sm:inline-block">
                  RTSP 1080P &bull; 30 FPS &bull; EDGE INFERENCE
                </span>
              </div>

              {/* Top Controls: Unmute / Mute / Fullscreen */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleSound}
                  className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-[11px] border border-white/15 transition-colors flex items-center gap-1.5 cursor-pointer"
                  aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
                >
                  {isMuted ? (
                    <>
                      <svg className="w-3.5 h-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                      <span>Muted</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                      <span className="text-emerald-300">Sound On</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors cursor-pointer"
                  aria-label="Toggle fullscreen"
                >
                  <svg className="w-3.5 h-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Video Element */}
            <div
              className="relative aspect-video w-full cursor-pointer bg-slate-950"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src="/video/resurgenix-ai-cctv-intelligence.mp4"
                poster="/images/resurgenix-video-poster.jpg"
                className="w-full h-full object-cover"
                playsInline
                muted={isMuted}
                loop
                preload="metadata"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => {
                  setIsPlaying(false);
                  trackVideoComplete("AI CCTV Intelligence - Live Product Demonstration");
                }}
                aria-label="Resurgenix AI CCTV Intelligence Video Demonstration"
              />

              {/* Play / Pause Center Overlay Trigger */}
              {(!isPlaying || isAutoplayBlocked) && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-2xs transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-blue-600/90 border border-white/30 flex items-center justify-center text-white shadow-xl hover:scale-105 transition-transform duration-200">
                    <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="mt-3 text-xs font-mono font-medium text-white/90 px-3 py-1 rounded-full bg-slate-900/70 border border-white/10">
                    Click to Play Live Demonstration
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Scrubber & Time Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20 px-4 py-2 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
              <div
                className="w-full h-1.5 bg-white/20 hover:h-2 rounded-full cursor-pointer transition-all relative overflow-hidden mb-2"
                onClick={handleSeek}
              >
                <div
                  className="h-full bg-[#2563EB] transition-all duration-100 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>
                  <span>
                    {currentTimeStr} / {durationStr}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-slate-400">
                  <span>Detection Layer: Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Caption Notice */}
          <p className="text-xs text-center text-[#5B6B7F] italic">
            Technical product walkthrough demonstrating real-time edge computer vision inference across existing IP CCTV streams.
          </p>

          {/* Interactive Demonstrated Capabilities Badges */}
          <div className="pt-4 border-t border-[#E2E8F0]">
            <div className="text-center mb-3">
              <span className="text-xs font-mono font-bold text-[#0B1F3A] uppercase tracking-wider">
                Capabilities Demonstrated in this Video
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {CAPABILITIES.map((cap) => {
                const isSelected = selectedCapability === cap.id;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() =>
                      setSelectedCapability(isSelected ? null : cap.id)
                    }
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#2563EB] text-white border-[#2563EB] shadow-xs"
                        : "bg-white text-[#0B1F3A] border-[#E2E8F0] hover:border-[#2563EB]/40 hover:bg-slate-50"
                    }`}
                    title={cap.description}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isSelected ? "bg-white" : "bg-[#2563EB]"
                      }`}
                      aria-hidden="true"
                    />
                    <span>{cap.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Expanded Capability Detail Card (if clicked) */}
            {selectedCapability && (
              <div className="mt-4 p-4 rounded-[10px] bg-white border border-[#2563EB]/30 shadow-xs max-w-2xl mx-auto text-center transition-all animate-fadeIn">
                {(() => {
                  const cap = CAPABILITIES.find((c) => c.id === selectedCapability);
                  if (!cap) return null;
                  return (
                    <div className="space-y-1">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-heading font-bold text-sm text-[#0B1F3A]">
                          {cap.label}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#2563EB] font-bold">
                          {cap.tag}
                        </span>
                      </div>
                      <p className="text-xs text-[#5B6B7F]">{cap.description}</p>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>

          {/* Telemetry Footer Callout Strip */}
          <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="p-3 rounded-[8px] bg-white border border-[#E2E8F0]">
              <div className="text-xs font-mono font-bold text-[#0B1F3A]">Sub-50ms</div>
              <div className="text-[11px] text-[#5B6B7F]">Edge Latency</div>
            </div>
            <div className="p-3 rounded-[8px] bg-white border border-[#E2E8F0]">
              <div className="text-xs font-mono font-bold text-[#0B1F3A]">Zero Hardware</div>
              <div className="text-[11px] text-[#5B6B7F]">Rip &amp; Replace</div>
            </div>
            <div className="p-3 rounded-[8px] bg-white border border-[#E2E8F0]">
              <div className="text-xs font-mono font-bold text-[#0B1F3A]">&lt; 50 Kbps</div>
              <div className="text-[11px] text-[#5B6B7F]">Metadata Footprint</div>
            </div>
            <div className="p-3 rounded-[8px] bg-white border border-[#E2E8F0]">
              <div className="text-xs font-mono font-bold text-[#0B1F3A]">100% On-Premise</div>
              <div className="text-[11px] text-[#5B6B7F]">Data Privacy</div>
            </div>
          </div>

          {/* Next Steps CTA */}
          <div className="pt-6 text-center flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/request-pilot"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <span>Test AI Detection On Your Cameras</span>
              <span>&rarr;</span>
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[8px] bg-white hover:bg-slate-50 text-[#0B1F3A] border border-[#E2E8F0] text-xs font-semibold shadow-2xs transition-colors"
            >
              <span>Explore All 9 Modules</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProductIntelligenceDemonstration;
