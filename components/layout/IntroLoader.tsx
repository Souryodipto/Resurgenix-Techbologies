"use client";

import React, { useEffect, useState, useCallback, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Hook to safely determine if code is executing on client side (SSR-safe, React 19 compliant)
 */
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, () => false);
}

/**
 * IntroLoader - First-load introduction sequence (Step 15)
 *
 * Sequence:
 * 1. CCTV camera lens pulses.
 * 2. Bezier link path draws from lens to stylized neural brain (~1.1s).
 * 3. Data packets travel along the link path.
 * 4. Brain neural nodes and synapse lines ignite in a staggered sequence.
 * 5. Soft radial flash marks completion.
 * 6. Scene reveals the Resurgenix wordmark and lifts overlay into the page.
 *
 * Requirements:
 * - Session-scoped: plays once per session via sessionStorage("introPlayed").
 * - Client-only: returns null during SSR so search engines see pure page HTML immediately.
 * - Accessibility: role="status", aria-label="Loading Resurgenix", unmounted on completion.
 * - Reduced motion: skips animation, shows static logo hold for 500ms, then dismisses.
 * - Skip handlers: Click anywhere or press Escape to skip immediately.
 */
export function IntroLoader() {
  const isClient = useIsClient();
  const reducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  const dismiss = useCallback(() => {
    setExiting(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Check if intro has already played in this browser session
    try {
      const alreadyPlayed = sessionStorage.getItem("introPlayed");
      if (alreadyPlayed === "true") {
        return;
      }
      sessionStorage.setItem("introPlayed", "true");
    } catch {
      // In case sessionStorage is restricted (e.g. private mode sandboxing)
    }

    // Schedule visibility to decouple from effect mount render and avoid cascading warnings
    const startTimer = setTimeout(() => {
      setVisible(true);
    }, 10);

    // Standard sequence duration vs reduced motion
    const autoDismissDuration = reducedMotion ? 550 : 2800;
    const autoDismissTimer = setTimeout(() => {
      dismiss();
    }, autoDismissDuration);

    // Escape key listener to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismiss();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(autoDismissTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isClient, reducedMotion, dismiss]);

  // Server-side and post-dismissal render nothing to avoid blocking SSR / indexing or keyboard trapping
  if (!isClient || !visible) {
    return null;
  }

  return (
    <div
      role="status"
      aria-label="Loading Resurgenix"
      onClick={dismiss}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white cursor-pointer select-none transition-opacity duration-300 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <style jsx>{`
        @keyframes lensGlow {
          0%, 100% {
            r: 5;
            opacity: 0.4;
          }
          50% {
            r: 10;
            opacity: 1;
          }
        }

        @keyframes drawPath {
          0% {
            stroke-dashoffset: 260;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes nodeIgnite {
          0% {
            fill: #cbd5e1;
            r: 3.5;
            filter: none;
          }
          50% {
            fill: #06b6d4;
            r: 5.5;
            filter: drop-shadow(0 0 6px #06b6d4);
          }
          100% {
            fill: #2563eb;
            r: 4;
            filter: drop-shadow(0 0 3px #2563eb);
          }
        }

        @keyframes synapseLight {
          0% {
            stroke: #e2e8f0;
            stroke-opacity: 0.4;
            stroke-width: 1;
          }
          50% {
            stroke: #06b6d4;
            stroke-opacity: 1;
            stroke-width: 1.75;
          }
          100% {
            stroke: #2563eb;
            stroke-opacity: 0.85;
            stroke-width: 1.25;
          }
        }

        @keyframes radialFlash {
          0% {
            r: 0;
            opacity: 0;
          }
          40% {
            opacity: 0.7;
          }
          100% {
            r: 90;
            opacity: 0;
          }
        }

        @keyframes wordmarkReveal {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .anim-lens-glow {
          animation: lensGlow 1.2s ease-in-out infinite;
        }

        .anim-draw-link {
          stroke-dasharray: 260;
          stroke-dashoffset: 260;
          animation: drawPath 1.1s cubic-bezier(0.4, 0, 0.2, 1) 0.35s forwards;
        }

        .anim-synapse {
          animation: synapseLight 0.6s ease-out forwards;
        }

        .anim-node {
          animation: nodeIgnite 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .anim-radial-flash {
          animation: radialFlash 0.7s ease-out 2.1s forwards;
        }

        .anim-wordmark {
          animation: wordmarkReveal 0.5s ease-out 2.25s forwards;
        }
      `}</style>

      {/* Screen Reader Notification */}
      <span className="sr-only">Initializing Resurgenix AI Video Intelligence...</span>

      {reducedMotion ? (
        /* Reduced Motion Fallback: Crisp static presentation */
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] flex items-center justify-center shadow-sm">
            <svg
              className="w-7 h-7 text-[#06B6D4]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M3 7V5a2 2 0 0 1 2-2h2" />
              <path d="M17 3h2a2 2 0 0 1 2 2v2" />
              <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
              <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
            </svg>
          </div>
          <div className="text-xl font-heading font-extrabold text-[#0B1F3A] tracking-tight">
            Resurgenix
          </div>
          <div className="text-xs font-mono text-[#5B6B7F] tracking-wide">
            AI Video Intelligence
          </div>
        </div>
      ) : (
        /* Full Animated Sequence */
        <div className="relative flex flex-col items-center justify-center max-w-xl w-full px-6">
          <svg
            viewBox="0 0 460 180"
            className="w-full max-w-[440px] h-auto overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              {/* Electric Blue to Cyan Gradient */}
              <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>

              {/* Radial Brain Flash Gradient */}
              <radialGradient id="flashGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#2563EB" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* =================================================================
                LEFT: CCTV CAMERA APPARATUS (Navy & Electric Blue)
               ================================================================= */}
            <g transform="translate(20, 45)">
              {/* Wall Mount Bracket */}
              <path
                d="M 10 30 L 25 30 L 32 45 L 32 55"
                stroke="#CBD5E1"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="30" r="2.5" fill="#94A3B8" />

              {/* Camera Housing Body */}
              <path
                d="M 28 42 L 68 38 L 74 62 L 28 58 Z"
                fill="#0B1F3A"
                stroke="#2563EB"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Sunshield / Top Guard */}
              <path
                d="M 24 38 L 72 34 L 75 38 L 24 42 Z"
                fill="#1E293B"
                stroke="#0B1F3A"
                strokeWidth="1"
              />

              {/* Lens Bezel Barrel */}
              <path
                d="M 68 38 L 78 37 L 78 63 L 68 62 Z"
                fill="#1E293B"
                stroke="#2563EB"
                strokeWidth="1"
              />

              {/* Lens Optical Ring */}
              <ellipse cx="78" cy="50" rx="3.5" ry="12" fill="#0B1F3A" stroke="#06B6D4" strokeWidth="1.5" />

              {/* Lens Center Optical Core */}
              <circle cx="78" cy="50" r="4.5" fill="#06B6D4" />

              {/* Pulsing Lens Glow */}
              <circle
                cx="78"
                cy="50"
                r="6"
                fill="#06B6D4"
                className="anim-lens-glow"
              />

              {/* Camera Status LED */}
              <circle cx="40" cy="52" r="1.5" fill="#2563EB" />
            </g>

            {/* =================================================================
                CENTER: BEZIER LINK PATH (Camera Lens to Brain Entry)
               ================================================================= */}
            <path
              id="neuralPath"
              d="M 98 95 C 165 65, 235 125, 305 95"
              stroke="url(#linkGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              className="anim-draw-link"
            />

            {/* Traveling Data Packets along the Link Path */}
            <circle r="3.5" fill="#06B6D4" filter="drop-shadow(0 0 4px #06B6D4)">
              <animateMotion
                path="M 98 95 C 165 65, 235 125, 305 95"
                dur="1.0s"
                begin="0.8s"
                fill="freeze"
                calcMode="linear"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.85;1"
                dur="1.0s"
                begin="0.8s"
                fill="freeze"
              />
            </circle>

            <circle r="3" fill="#2563EB" filter="drop-shadow(0 0 3px #2563EB)">
              <animateMotion
                path="M 98 95 C 165 65, 235 125, 305 95"
                dur="0.95s"
                begin="1.1s"
                fill="freeze"
                calcMode="linear"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.85;1"
                dur="0.95s"
                begin="1.1s"
                fill="freeze"
              />
            </circle>

            <circle r="2.5" fill="#06B6D4">
              <animateMotion
                path="M 98 95 C 165 65, 235 125, 305 95"
                dur="0.9s"
                begin="1.35s"
                fill="freeze"
                calcMode="linear"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.85;1"
                dur="0.9s"
                begin="1.35s"
                fill="freeze"
              />
            </circle>

            {/* =================================================================
                RIGHT: STYLIZED BRAIN-SHAPED NEURAL NETWORK
               ================================================================= */}
            <g transform="translate(0, 0)">
              {/* Radial Completion Flash */}
              <circle
                cx="370"
                cy="95"
                r="0"
                fill="url(#flashGlow)"
                className="anim-radial-flash"
              />

              {/* Faint Structural Lobe Contours */}
              <path
                d="M 315 95 C 315 70, 340 50, 370 50 C 400 50, 425 65, 430 85 C 435 105, 420 135, 395 140 C 370 145, 340 135, 325 120 Z"
                stroke="#F1F5F9"
                strokeWidth="1"
                strokeDasharray="2 3"
                fill="none"
              />

              {/* Staggered Synapse Lines */}
              <line x1="305" y1="95" x2="330" y2="70" className="anim-synapse" style={{ animationDelay: "1.35s" }} />
              <line x1="305" y1="95" x2="340" y2="95" className="anim-synapse" style={{ animationDelay: "1.4s" }} />
              <line x1="305" y1="95" x2="330" y2="120" className="anim-synapse" style={{ animationDelay: "1.45s" }} />

              <line x1="330" y1="70" x2="365" y2="60" className="anim-synapse" style={{ animationDelay: "1.5s" }} />
              <line x1="330" y1="70" x2="340" y2="95" className="anim-synapse" style={{ animationDelay: "1.52s" }} />
              <line x1="340" y1="95" x2="370" y2="90" className="anim-synapse" style={{ animationDelay: "1.55s" }} />
              <line x1="330" y1="120" x2="360" y2="130" className="anim-synapse" style={{ animationDelay: "1.58s" }} />
              <line x1="330" y1="120" x2="340" y2="95" className="anim-synapse" style={{ animationDelay: "1.6s" }} />

              <line x1="365" y1="60" x2="400" y2="65" className="anim-synapse" style={{ animationDelay: "1.65s" }} />
              <line x1="365" y1="60" x2="370" y2="90" className="anim-synapse" style={{ animationDelay: "1.68s" }} />
              <line x1="370" y1="90" x2="395" y2="95" className="anim-synapse" style={{ animationDelay: "1.7s" }} />
              <line x1="360" y1="130" x2="395" y2="135" className="anim-synapse" style={{ animationDelay: "1.72s" }} />
              <line x1="360" y1="130" x2="370" y2="90" className="anim-synapse" style={{ animationDelay: "1.75s" }} />

              <line x1="400" y1="65" x2="425" y2="85" className="anim-synapse" style={{ animationDelay: "1.8s" }} />
              <line x1="400" y1="65" x2="395" y2="95" className="anim-synapse" style={{ animationDelay: "1.82s" }} />
              <line x1="395" y1="95" x2="425" y2="85" className="anim-synapse" style={{ animationDelay: "1.85s" }} />
              <line x1="395" y1="95" x2="420" y2="115" className="anim-synapse" style={{ animationDelay: "1.88s" }} />
              <line x1="425" y1="85" x2="420" y2="115" className="anim-synapse" style={{ animationDelay: "1.9s" }} />
              <line x1="395" y1="135" x2="420" y2="115" className="anim-synapse" style={{ animationDelay: "1.92s" }} />

              {/* Neural Nodes (Staggered Ignition) */}
              {/* Ingress Gateway Node */}
              <circle cx="305" cy="95" r="4.5" className="anim-node" style={{ animationDelay: "1.3s" }} />

              {/* Frontal Nodes */}
              <circle cx="330" cy="70" r="3.5" className="anim-node" style={{ animationDelay: "1.45s" }} />
              <circle cx="340" cy="95" r="4" className="anim-node" style={{ animationDelay: "1.5s" }} />
              <circle cx="330" cy="120" r="3.5" className="anim-node" style={{ animationDelay: "1.52s" }} />

              {/* Central Lobe Nodes */}
              <circle cx="365" cy="60" r="4" className="anim-node" style={{ animationDelay: "1.6s" }} />
              <circle cx="370" cy="90" r="4.5" className="anim-node" style={{ animationDelay: "1.65s" }} />
              <circle cx="360" cy="130" r="3.5" className="anim-node" style={{ animationDelay: "1.7s" }} />

              {/* Parietal / Occipital Nodes */}
              <circle cx="400" cy="65" r="3.5" className="anim-node" style={{ animationDelay: "1.75s" }} />
              <circle cx="395" cy="95" r="4" className="anim-node" style={{ animationDelay: "1.8s" }} />
              <circle cx="395" cy="135" r="3.5" className="anim-node" style={{ animationDelay: "1.82s" }} />
              <circle cx="425" cy="85" r="4" className="anim-node" style={{ animationDelay: "1.88s" }} />
              <circle cx="420" cy="115" r="3.5" className="anim-node" style={{ animationDelay: "1.92s" }} />
            </g>
          </svg>

          {/* Wordmark Reveal Container */}
          <div className="flex flex-col items-center justify-center mt-3 anim-wordmark">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
              <span className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B1F3A] tracking-tight">
                Resurgenix
              </span>
            </div>
            <p className="text-xs font-mono font-medium text-[#5B6B7F] tracking-wide mt-1">
              AI Video Intelligence Layer
            </p>
          </div>
        </div>
      )}

      {/* Skip Hint */}
      <div className="absolute bottom-8 text-[11px] font-mono text-[#94A3B8] tracking-widest uppercase hover:text-[#5B6B7F] transition-colors">
        Click anywhere or Esc to skip
      </div>
    </div>
  );
}
