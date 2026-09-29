"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { trackVideoPlay, trackVideoComplete } from "@/lib/analytics";

export interface VideoPlayerProps {
  src?: string;
  poster: string;
  title: string;
  subtitle?: string;
  captionSrc?: string;
  captionLabel?: string;
  aspectRatio?: "16/9" | "4/3" | "21/9";
  autoPlayOnScroll?: boolean;
  className?: string;
}

/**
 * Accessible, high-performance VideoPlayer component with:
 * - Viewport-based autoplay on scroll (IntersectionObserver)
 * - Safe muted autoplay complying with modern browser media engagement policies
 * - Tap-to-unmute quick sound toggle overlay
 * - Pause on scroll out to conserve bandwidth and compute
 * - Full manual controls, captions, and fallback support
 * - Honors prefers-reduced-motion accessibility preference
 */
export function VideoPlayer({
  src,
  poster,
  title,
  subtitle = "Technical product walkthrough (Illustrative video asset)",
  captionSrc,
  captionLabel = "English captions",
  aspectRatio = "16/9",
  autoPlayOnScroll = true,
  className = "",
}: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef<boolean>(false);
  const hasTrackedPlayRef = useRef<boolean>(false);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [showUnmuteHint, setShowUnmuteHint] = useState<boolean>(true);

  const aspectClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-4/3",
    "21/9": "aspect-21/9",
  }[aspectRatio];

  // IntersectionObserver for autoplay when scrolled into view
  useEffect(() => {
    if (!autoPlayOnScroll || !src) return;

    // Check prefers-reduced-motion
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
    }

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (!video) return;

          // When at least 35% visible on screen
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            if (!userPausedRef.current && video.paused) {
              // Ensure muted for browser autoplay policy compliance
              video.muted = isMuted;
              video
                .play()
                .then(() => {
                  setIsPlaying(true);
                  if (!hasTrackedPlayRef.current) {
                    hasTrackedPlayRef.current = true;
                    trackVideoPlay(title);
                  }
                })
                .catch((err) => {
                  // Autoplay prevented by browser policy (e.g. unmuted or low user interaction score)
                  console.info("Autoplay deferred until user interaction:", err?.message || err);
                });
            }
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.15) {
            // When scrolled away, pause video to save battery, memory and network
            if (!video.paused) {
              video.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      {
        threshold: [0, 0.2, 0.35, 0.6, 1.0],
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [autoPlayOnScroll, src, title, isMuted]);

  const toggleSound = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      setIsMuted(false);
      setShowUnmuteHint(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  }, []);

  const handlePlay = () => {
    userPausedRef.current = false;
    setIsPlaying(true);
    if (!hasTrackedPlayRef.current) {
      hasTrackedPlayRef.current = true;
      trackVideoPlay(title);
    }
  };

  const handlePause = () => {
    // If the video was paused while still in viewport, respect the user's manual pause
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        userPausedRef.current = true;
      }
    }
    setIsPlaying(false);
  };

  const handleVolumeChange = () => {
    if (videoRef.current) {
      setIsMuted(videoRef.current.muted || videoRef.current.volume === 0);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`group relative w-full overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-slate-950 shadow-md ${aspectClass} ${className}`}
    >
      {src ? (
        <>
          <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover"
            poster={poster}
            controls
            playsInline
            muted={isMuted}
            preload="auto"
            onPlay={handlePlay}
            onPause={handlePause}
            onVolumeChange={handleVolumeChange}
            onEnded={() => {
              setIsPlaying(false);
              trackVideoComplete(title);
            }}
            aria-label={title}
          >
            <source src={src} type="video/mp4" />
            {captionSrc && (
              <track kind="captions" src={captionSrc} srcLang="en" label={captionLabel} default />
            )}
            Your browser does not support HTML5 video playback.
          </video>

          {/* Subtitle / Asset Badge Overlay (top-left) */}
          <div className="absolute top-3 left-3 pointer-events-none z-10 transition-opacity duration-300 opacity-90 group-hover:opacity-100">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide bg-slate-900/80 backdrop-blur-md text-slate-200 border border-white/10 shadow-sm">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isPlaying ? "bg-emerald-400 animate-pulse" : "bg-blue-400"
                }`}
                aria-hidden="true"
              />
              {subtitle}
            </span>
          </div>

          {/* Centered Play Button Overlay when paused */}
          {!isPlaying && (
            <button
              type="button"
              onClick={() => {
                const video = videoRef.current;
                if (!video) return;
                userPausedRef.current = false;
                video.play().then(() => setIsPlaying(true)).catch(() => {});
              }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/30 hover:bg-slate-950/20 backdrop-blur-2xs transition-all cursor-pointer group/btn"
              aria-label="Play video"
            >
              <div className="w-16 h-16 rounded-full bg-blue-600/90 group-hover/btn:bg-blue-600 group-hover/btn:scale-110 border border-white/30 flex items-center justify-center text-white shadow-xl transition-all duration-200">
                <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="mt-3 text-xs font-mono font-medium text-white/90 px-3 py-1 rounded-full bg-slate-900/70 border border-white/10">
                Click to Watch 60-Second Overview
              </span>
            </button>
          )}

          {/* Floating Unmute Button Overlay */}
          {isPlaying && isMuted && showUnmuteHint && (
            <button
              type="button"
              onClick={toggleSound}
              className="absolute bottom-14 right-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white text-xs font-semibold backdrop-blur-md shadow-lg transition-transform transform hover:scale-105 active:scale-95 border border-white/20 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-400"
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
        </>
      ) : (
        /* Poster Placeholder View */
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-slate-900/90 text-white p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-3 backdrop-blur-xs">
            <span className="text-xl ml-0.5" aria-hidden="true">
              ▶
            </span>
          </div>
          <span className="font-heading font-bold text-sm sm:text-base text-white">{title}</span>
          <span className="text-[11px] text-slate-300 mt-1 max-w-sm">
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
