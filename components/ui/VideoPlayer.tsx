import React from "react";

export interface VideoPlayerProps {
  src?: string;
  poster: string;
  title: string;
  captionSrc?: string;
  captionLabel?: string;
  aspectRatio?: "16/9" | "4/3" | "21/9";
  className?: string;
}

/**
 * Accessible, performance-conscious VideoPlayer component.
 * Disallows unmuted autoplay and respects prefers-reduced-motion.
 */
export function VideoPlayer({
  src,
  poster,
  title,
  captionSrc,
  captionLabel = "English captions",
  aspectRatio = "16/9",
  className = "",
}: VideoPlayerProps) {
  const aspectClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-4/3",
    "21/9": "aspect-21/9",
  }[aspectRatio];

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-slate-900 shadow-xs ${aspectClass} ${className}`}
    >
      {src ? (
        <video
          className="w-full h-full object-cover"
          poster={poster}
          controls
          preload="none"
          playsInline
          aria-label={title}
        >
          <source src={src} type="video/mp4" />
          {captionSrc && (
            <track kind="captions" src={captionSrc} srcLang="en" label={captionLabel} default />
          )}
          Your browser does not support HTML5 video playback.
        </video>
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
            Technical product walkthrough (Illustrative video asset)
          </span>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
