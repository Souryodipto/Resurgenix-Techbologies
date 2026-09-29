"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { trackVideoPlay, trackVideoComplete } from "@/lib/analytics";

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

/**
 * Clean cross-browser fullscreen helper
 * Fully compatible with Chrome, Edge, Firefox, Safari (desktop), and iOS Safari (iPhone/iPad)
 */
function enterVideoFullscreen(video: HTMLVideoElement | null) {
  if (!video) return;
  const anyVideo = video as any;
  if (video.requestFullscreen) {
    video.requestFullscreen().catch(() => {});
  } else if (anyVideo.webkitEnterFullscreen) {
    anyVideo.webkitEnterFullscreen(); // iOS Safari specific
  } else if (anyVideo.webkitRequestFullscreen) {
    anyVideo.webkitRequestFullscreen();
  } else if (anyVideo.mozRequestFullScreen) {
    anyVideo.mozRequestFullScreen();
  } else if (anyVideo.msRequestFullscreen) {
    anyVideo.msRequestFullscreen();
  }
}

export function ProductIntelligenceDemonstration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef<boolean>(false);
  const hasTrackedPlayRef = useRef<boolean>(false);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);

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
                  if (!hasTrackedPlayRef.current) {
                    hasTrackedPlayRef.current = true;
                    trackVideoPlay("AI CCTV Intelligence - Live Product Demonstration");
                  }
                })
                .catch((err) => {
                  console.info("Autoplay deferred until user interaction:", err?.message || err);
                });
            }
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.1) {
            // Pause when scrolled outside viewport to save CPU and battery
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

  const handlePlay = () => {
    userPausedRef.current = false;
    setIsPlaying(true);
    if (!hasTrackedPlayRef.current) {
      hasTrackedPlayRef.current = true;
      trackVideoPlay("AI CCTV Intelligence - Live Product Demonstration");
    }
  };

  const handlePause = () => {
    // Check if pause occurred while in view (user intentional pause)
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        userPausedRef.current = true;
      }
    }
    setIsPlaying(false);
  };

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

  const handleFullscreenClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    enterVideoFullscreen(videoRef.current);
  }, []);

  return (
    <section
      id="product-demonstration"
      ref={containerRef}
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0] relative overflow-hidden"
      aria-label="AI CCTV Intelligence Product Demonstration"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
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

        {/* Clean Video Player Frame */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="relative rounded-[16px] overflow-hidden border border-[#CBD5E1] bg-slate-950 shadow-md group">
            {/* HTML5 Video Element with Full Native Controls & Seamless Fullscreen */}
            <video
              ref={videoRef}
              src="/video/resurgenix-ai-cctv-intelligence.mp4"
              poster="/images/resurgenix-video-poster.jpg"
              className="w-full aspect-video object-cover block"
              controls
              controlsList="nodownload"
              playsInline
              muted={isMuted}
              loop
              preload="auto"
              onPlay={handlePlay}
              onPause={handlePause}
              onVolumeChange={() => {
                if (videoRef.current) {
                  setIsMuted(videoRef.current.muted || videoRef.current.volume === 0);
                }
              }}
              onEnded={() => {
                setIsPlaying(false);
                trackVideoComplete("AI CCTV Intelligence - Live Product Demonstration");
              }}
              aria-label="Resurgenix AI CCTV Intelligence Video Demonstration"
            >
              <source src="/video/resurgenix-ai-cctv-intelligence.mp4" type="video/mp4" />
              Your browser does not support HTML5 video playback.
            </video>

            {/* Tap-to-Unmute Floating Quick Button (when playing muted) */}
            {isPlaying && isMuted && (
              <button
                type="button"
                onClick={toggleSound}
                className="absolute top-4 right-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white text-xs font-semibold backdrop-blur-md shadow-lg transition-transform transform hover:scale-105 active:scale-95 border border-white/20 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-400"
                aria-label="Unmute video audio"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                  />
                </svg>
                <span>Tap for Sound</span>
              </button>
            )}

            {/* Centered Play Button Trigger (when paused or before start) */}
            {!isPlaying && (
              <button
                type="button"
                onClick={() => {
                  const video = videoRef.current;
                  if (!video) return;
                  userPausedRef.current = false;
                  video
                    .play()
                    .then(() => setIsPlaying(true))
                    .catch(() => {});
                }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/30 hover:bg-slate-950/20 backdrop-blur-2xs transition-all cursor-pointer group/btn"
                aria-label="Play product video"
              >
                <div className="w-16 h-16 rounded-full bg-blue-600/90 group-hover/btn:bg-blue-600 group-hover/btn:scale-110 border border-white/30 flex items-center justify-center text-white shadow-xl transition-all duration-200">
                  <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="mt-3 text-xs font-mono font-medium text-white/90 px-3 py-1 rounded-full bg-slate-900/70 border border-white/10">
                  Click to Play Demonstration
                </span>
              </button>
            )}
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

          {/* Action Links */}
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
