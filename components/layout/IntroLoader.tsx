"use client";

import React, { useEffect, useState, useCallback, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * SSR-safe client mount hook (React 19 compliant, zero cascading renders)
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
 * IntroLoader - High-Fidelity First-Load Intro Animation (Step 16)
 *
 * Visual Components:
 * - CAMERA: Realistic bullet CCTV camera with wall mount plate, swivel arm, rounded body,
 *   lens housing ring with 5 IR-LED dots, inner glass lens with glare ellipse, and blinking status LED.
 * - LINK: Dual-rail bezier conduit (primary blue, secondary cyan offset by 6px with 120ms stagger),
 *   with 3 glowing packets traveling the primary rail via animateMotion.
 * - BRAIN: Organic silhouette with central sulcus fissure, 6 curved gyri folds, distinct cerebellar lobe,
 *   and internal neural net (7 contour nodes, 10 synapse lines cascading in ~60ms intervals).
 * - FLASH: Soft radial cyan flash at 2.15s marking scene "understood".
 * - WORDMARK: Fades in at 2.25s with expanding electric-blue underline rule.
 * - STATUS LINE: Cross-fades through "Connecting camera feed", "Analyzing in real time", "Understanding the scene".
 *
 * Constraints & Invariants:
 * - Session-scoped: plays once per session via sessionStorage("introPlayed").
 * - Client-only: returns null during SSR, never appears in server HTML or delays LCP.
 * - Accessible: role="status", aria-label="Loading Resurgenix", unmounted on exit.
 * - Reduced motion: skips animation, displays static brand mark hold for 550ms.
 * - Escape / click skips immediately; all timers and listeners cleaned up on unmount.
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
    }, 320);
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
      // Safe fallback if sessionStorage is blocked
    }

    // Schedule visibility asynchronously to allow clean initial paint
    const startTimer = setTimeout(() => {
      setVisible(true);
    }, 10);

    // Sequence duration: ~3.05s standard sequence vs 550ms reduced motion
    const autoDismissDuration = reducedMotion ? 550 : 3050;
    const autoDismissTimer = setTimeout(() => {
      dismiss();
    }, autoDismissDuration);

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

  // Server-side and post-dismissal render nothing to prevent SSR leakage or keyboard trapping
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
        /* =========================================================================
           CAMERA ANIMATIONS
           ========================================================================= */
        @keyframes ledBlink {
          0%, 100% {
            opacity: 0.2;
            fill: #64748b;
          }
          45%, 55% {
            opacity: 1;
            fill: #10b981;
            filter: drop-shadow(0 0 3px #10b981);
          }
        }

        @keyframes lensPulseRing {
          0% {
            r: 3;
            opacity: 0.9;
            stroke-width: 2;
          }
          100% {
            r: 16;
            opacity: 0;
            stroke-width: 0.5;
          }
        }

        /* =========================================================================
           DUAL-RAIL LINK ANIMATIONS
           ========================================================================= */
        @keyframes drawRailPrimary {
          0% {
            stroke-dashoffset: 300;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes drawRailSecondary {
          0% {
            stroke-dashoffset: 300;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        /* =========================================================================
           BRAIN & NEURAL CASCADE ANIMATIONS
           ========================================================================= */
        @keyframes nodeCascade {
          0% {
            fill: #cbd5e1;
            stroke: #94a3b8;
            r: 3.5;
            filter: none;
          }
          50% {
            fill: #06b6d4;
            stroke: #ffffff;
            r: 5.5;
            filter: drop-shadow(0 0 6px #06b6d4);
          }
          100% {
            fill: #2563eb;
            stroke: #ffffff;
            r: 4.2;
            filter: drop-shadow(0 0 3px #2563eb);
          }
        }

        @keyframes synapseCascade {
          0% {
            stroke: #e2e8f0;
            stroke-opacity: 0.35;
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
            stroke-width: 1.35;
          }
        }

        @keyframes radialUnderstandFlash {
          0% {
            r: 0;
            opacity: 0;
          }
          35% {
            opacity: 0.75;
          }
          100% {
            r: 110;
            opacity: 0;
          }
        }

        /* =========================================================================
           SCENE TRANSITION & WORDMARK REVEAL
           ========================================================================= */
        @keyframes sceneRetract {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0.22;
            transform: scale(0.96);
          }
        }

        @keyframes wordmarkEntrance {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes underlineGrow {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        /* =========================================================================
           STATUS PHRASE CROSS-FADES (3 Phrases across 3.0s)
           ========================================================================= */
        @keyframes phraseOne {
          0% {
            opacity: 0;
            transform: translateY(3px);
          }
          12%, 80% {
            opacity: 1;
            transform: translateY(0);
          }
          95%, 100% {
            opacity: 0;
            transform: translateY(-3px);
          }
        }

        @keyframes phraseTwo {
          0% {
            opacity: 0;
            transform: translateY(3px);
          }
          12%, 80% {
            opacity: 1;
            transform: translateY(0);
          }
          95%, 100% {
            opacity: 0;
            transform: translateY(-3px);
          }
        }

        @keyframes phraseThree {
          0% {
            opacity: 0;
            transform: translateY(3px);
          }
          15%, 85% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-2px);
          }
        }

        .anim-led {
          animation: ledBlink 1.1s ease-in-out infinite;
        }

        .anim-pulse-ring {
          animation: lensPulseRing 0.35s ease-out 0.05s forwards;
        }

        .anim-rail-primary {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: drawRailPrimary 1.25s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
        }

        .anim-rail-secondary {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: drawRailSecondary 1.25s cubic-bezier(0.4, 0, 0.2, 1) 0.42s forwards;
        }

        .anim-synapse {
          animation: synapseCascade 0.5s ease-out forwards;
        }

        .anim-node {
          animation: nodeCascade 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .anim-radial-flash {
          animation: radialUnderstandFlash 0.75s ease-out 2.15s forwards;
        }

        .anim-scene-fade {
          animation: sceneRetract 0.55s cubic-bezier(0.4, 0, 0.2, 1) 2.25s forwards;
        }

        .anim-wordmark {
          animation: wordmarkEntrance 0.5s cubic-bezier(0.16, 1, 0.3, 1) 2.28s forwards;
        }

        .anim-underline {
          transform-origin: center;
          animation: underlineGrow 0.5s cubic-bezier(0.16, 1, 0.3, 1) 2.38s forwards;
        }

        .anim-phrase-1 {
          animation: phraseOne 0.95s ease-in-out 0.05s forwards;
        }

        .anim-phrase-2 {
          animation: phraseTwo 0.95s ease-in-out 1.05s forwards;
        }

        .anim-phrase-3 {
          animation: phraseThree 0.95s ease-in-out 2.05s forwards;
        }
      `}</style>

      {/* Screen Reader Announcement */}
      <span className="sr-only">Initializing Resurgenix AI Video Intelligence...</span>

      {reducedMotion ? (
        /* =========================================================================
           PREFERS-REDUCED-MOTION FALLBACK: Static Crisp Presentation
           ========================================================================= */
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] flex items-center justify-center shadow-xs">
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
        /* =========================================================================
           FULL ANIMATED SEQUENCE (~3.0-3.1s)
           ========================================================================= */
        <div className="relative flex flex-col items-center justify-center max-w-xl w-full px-6">
          {/* Main SVG Artwork with subtle corporate drop shadow */}
          <div className="relative w-full flex items-center justify-center drop-shadow-[0_4px_16px_rgba(11,31,58,0.06)]">
            <svg
              viewBox="0 0 520 190"
              className="w-full max-w-[500px] h-auto overflow-visible anim-scene-fade"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                {/* Dual-Rail Linear Gradients */}
                <linearGradient id="railPrimaryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="60%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>

                <linearGradient id="railSecondaryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.5" />
                </linearGradient>

                {/* Radial Understand Flash Gradient */}
                <radialGradient id="understandFlashGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.65" />
                  <stop offset="50%" stopColor="#2563EB" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* =================================================================
                  1. BULLET-STYLE CCTV CAMERA (Wall Mount, Articulated Arm, Barrel)
                 ================================================================= */}
              <g transform="translate(14, 52)">
                {/* Wall Mount Backplate */}
                <rect x="14" y="24" width="7" height="42" rx="2" fill="#0B1F3A" />
                <rect x="15" y="26" width="2" height="38" rx="1" fill="#1E293B" />
                {/* Screws */}
                <circle cx="17.5" cy="31" r="1.2" fill="#94A3B8" />
                <circle cx="17.5" cy="59" r="1.2" fill="#94A3B8" />

                {/* Articulated Mounting Arm & Pivot Joint */}
                <path
                  d="M 21 45 L 35 45 L 43 45"
                  stroke="#475569"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <circle cx="33" cy="45" r="4.5" fill="#0B1F3A" stroke="#2563EB" strokeWidth="1" />
                {/* Cable Loop Detail */}
                <path
                  d="M 21 50 Q 28 58 38 52"
                  stroke="#94A3B8"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Camera Rear Cap */}
                <path
                  d="M 43 38 C 41 40, 41 50, 43 52"
                  stroke="#334155"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Main Cylindrical Bullet Body */}
                <path
                  d="M 42 36 L 86 36 C 89 36 91 38 91 41 L 91 49 C 91 52 89 54 86 54 L 42 54 C 40 54 39 52 39 49 L 39 41 C 39 38 40 36 42 36 Z"
                  fill="#0B1F3A"
                  stroke="#1E3A8A"
                  strokeWidth="1.2"
                />

                {/* Sunshield / Hood Protector Extending Forward */}
                <path
                  d="M 37 32 L 95 29 C 97 29 98 31 97 33 L 93 37 L 37 37 Z"
                  fill="#1E293B"
                  stroke="#0B1F3A"
                  strokeWidth="0.8"
                />

                {/* Blinking Status LED (Near top of body) */}
                <circle cx="50" cy="34" r="1.5" className="anim-led" />

                {/* Lens Bezel Ring Housing */}
                <ellipse
                  cx="91"
                  cy="45"
                  rx="3.5"
                  ry="9.5"
                  fill="#0F172A"
                  stroke="#2563EB"
                  strokeWidth="1.2"
                />

                {/* 5 IR-LED Dots Arranged Around Rim */}
                <circle cx="89.5" cy="37.5" r="1.1" fill="#64748B" />
                <circle cx="92.5" cy="41" r="1.1" fill="#64748B" />
                <circle cx="93" cy="45" r="1.1" fill="#64748B" />
                <circle cx="92.5" cy="49" r="1.1" fill="#64748B" />
                <circle cx="89.5" cy="52.5" r="1.1" fill="#64748B" />

                {/* Inner Lens Element (Navy fill, Blue ring) */}
                <ellipse
                  cx="92.5"
                  cy="45"
                  rx="2"
                  ry="5.5"
                  fill="#0B1F3A"
                  stroke="#2563EB"
                  strokeWidth="1.2"
                />
                {/* Optical Core */}
                <circle cx="92.8" cy="45" r="1.8" fill="#06B6D4" />
                {/* Glass Glare Ellipse Highlight */}
                <ellipse
                  cx="92"
                  cy="43.5"
                  rx="0.6"
                  ry="1.4"
                  fill="#FFFFFF"
                  opacity="0.85"
                  transform="rotate(-15 92 43.5)"
                />

                {/* Lens Pulse Ring (0.0-0.3s) */}
                <circle
                  cx="93"
                  cy="45"
                  r="3"
                  stroke="#06B6D4"
                  fill="none"
                  className="anim-pulse-ring"
                />
              </g>

              {/* =================================================================
                  2. DUAL-RAIL CONDUIT & TRAVELING DATA PACKETS
                 ================================================================= */}
              {/* Secondary Rail (Cyan, offset by ~6px, 120ms stagger) */}
              <path
                d="M 107 103 C 185 68, 275 137, 355 103"
                stroke="url(#railSecondaryGrad)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                strokeLinecap="round"
                fill="none"
                className="anim-rail-secondary"
              />

              {/* Primary Rail (Blue, main transmission conduit) */}
              <path
                id="mainRail"
                d="M 107 97 C 185 62, 275 131, 355 97"
                stroke="url(#railPrimaryGrad)"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
                className="anim-rail-primary"
              />

              {/* 3 Small Glowing Packets Traveling Primary Rail */}
              {/* Packet 1 */}
              <circle r="3.2" fill="#06B6D4" filter="drop-shadow(0 0 4px #06B6D4)">
                <animateMotion
                  path="M 107 97 C 185 62, 275 131, 355 97"
                  dur="1.0s"
                  begin="0.45s"
                  fill="freeze"
                  calcMode="linear"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.12;0.88;1"
                  dur="1.0s"
                  begin="0.45s"
                  fill="freeze"
                />
              </circle>

              {/* Packet 2 */}
              <circle r="2.8" fill="#2563EB" filter="drop-shadow(0 0 3px #2563EB)">
                <animateMotion
                  path="M 107 97 C 185 62, 275 131, 355 97"
                  dur="0.95s"
                  begin="0.75s"
                  fill="freeze"
                  calcMode="linear"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.12;0.88;1"
                  dur="0.95s"
                  begin="0.75s"
                  fill="freeze"
                />
              </circle>

              {/* Packet 3 */}
              <circle r="2.5" fill="#06B6D4" filter="drop-shadow(0 0 3px #06B6D4)">
                <animateMotion
                  path="M 107 97 C 185 62, 275 131, 355 97"
                  dur="0.9s"
                  begin="1.05s"
                  fill="freeze"
                  calcMode="linear"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.12;0.88;1"
                  dur="0.9s"
                  begin="1.05s"
                  fill="freeze"
                />
              </circle>

              {/* =================================================================
                  3. ORGANIC BRAIN SILHOUETTE & NEURAL NETWORK (7 Nodes, 10 Synapses)
                 ================================================================= */}
              <g transform="translate(0, 0)">
                {/* Soft Radial Cyan Flash (at 2.15s) */}
                <circle
                  cx="424"
                  cy="96"
                  r="0"
                  fill="url(#understandFlashGrad)"
                  className="anim-radial-flash"
                />

                {/* Organic Brain Silhouette Outline with Cerebellar Lobe */}
                <path
                  d="M 355 97 C 354 72, 380 50, 412 48 C 438 47, 462 55, 476 72 C 488 86, 487 106, 474 120 C 478 128, 473 140, 455 143 C 440 145, 428 136, 422 128 C 408 135, 382 135, 368 122 C 357 112, 355 104, 355 97 Z"
                  stroke="#0B1F3A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                {/* Central Sulcus Fissure Line Down Middle */}
                <path
                  d="M 420 50 C 418 66, 425 82, 421 100"
                  stroke="#94A3B8"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeDasharray="1 2"
                  fill="none"
                />

                {/* 6 Curved Gyri Folds (Low-opacity navy strokes, not closed) */}
                {/* 1. Anterior Frontal Fold */}
                <path
                  d="M 378 62 C 388 66, 384 76, 395 78"
                  stroke="#0B1F3A"
                  strokeOpacity="0.25"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* 2. Superior Frontal Arch */}
                <path
                  d="M 402 56 Q 396 68 408 72"
                  stroke="#0B1F3A"
                  strokeOpacity="0.22"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* 3. Parieto-Occipital Crest */}
                <path
                  d="M 454 62 C 448 72, 454 84, 446 90"
                  stroke="#0B1F3A"
                  strokeOpacity="0.26"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* 4. Occipital Posterior Fold */}
                <path
                  d="M 475 92 Q 464 100 467 110"
                  stroke="#0B1F3A"
                  strokeOpacity="0.24"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* 5. Temporal Ventral Crease */}
                <path
                  d="M 370 110 C 384 106, 394 116, 406 114"
                  stroke="#0B1F3A"
                  strokeOpacity="0.25"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* 6. Cerebellar Horizontal Folia */}
                <path
                  d="M 432 134 Q 446 131 460 137"
                  stroke="#0B1F3A"
                  strokeOpacity="0.32"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Staggered Synapse Lines (Cascade ~60ms intervals 1.45s-2.05s) */}
                <line x1="355" y1="97" x2="384" y2="70" className="anim-synapse" style={{ animationDelay: "1.45s" }} />
                <line x1="355" y1="97" x2="408" y2="94" className="anim-synapse" style={{ animationDelay: "1.50s" }} />
                <line x1="355" y1="97" x2="388" y2="120" className="anim-synapse" style={{ animationDelay: "1.55s" }} />

                <line x1="384" y1="70" x2="426" y2="64" className="anim-synapse" style={{ animationDelay: "1.61s" }} />
                <line x1="384" y1="70" x2="408" y2="94" className="anim-synapse" style={{ animationDelay: "1.66s" }} />

                <line x1="426" y1="64" x2="464" y2="88" className="anim-synapse" style={{ animationDelay: "1.72s" }} />
                <line x1="408" y1="94" x2="464" y2="88" className="anim-synapse" style={{ animationDelay: "1.78s" }} />
                <line x1="408" y1="94" x2="388" y2="120" className="anim-synapse" style={{ animationDelay: "1.84s" }} />

                <line x1="464" y1="88" x2="446" y2="126" className="anim-synapse" style={{ animationDelay: "1.90s" }} />
                <line x1="388" y1="120" x2="446" y2="126" className="anim-synapse" style={{ animationDelay: "1.96s" }} />

                {/* 7 Internal Neural Nodes (Cascade ~60ms per node) */}
                {/* Node 1: Ingress Gateway */}
                <circle cx="355" cy="97" r="4.2" className="anim-node" style={{ animationDelay: "1.45s" }} />
                {/* Node 2: Anterior Frontal */}
                <circle cx="384" cy="70" r="3.8" className="anim-node" style={{ animationDelay: "1.51s" }} />
                {/* Node 3: Deep Central Hub */}
                <circle cx="408" cy="94" r="4.4" className="anim-node" style={{ animationDelay: "1.57s" }} />
                {/* Node 4: Temporal Hub */}
                <circle cx="388" cy="120" r="3.8" className="anim-node" style={{ animationDelay: "1.63s" }} />
                {/* Node 5: Superior Parietal */}
                <circle cx="426" cy="64" r="3.8" className="anim-node" style={{ animationDelay: "1.69s" }} />
                {/* Node 6: Posterior Occipital */}
                <circle cx="464" cy="88" r="4.2" className="anim-node" style={{ animationDelay: "1.75s" }} />
                {/* Node 7: Cerebellar Anchor */}
                <circle cx="446" cy="126" r="3.8" className="anim-node" style={{ animationDelay: "1.81s" }} />
              </g>
            </svg>

            {/* Wordmark Reveal Container (Overlaid seamlessly at 2.25s) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none anim-wordmark opacity-0">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#2563EB] shadow-xs" />
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1F3A] tracking-tight">
                  Resurgenix
                </span>
              </div>
              <p className="text-xs font-mono font-medium text-[#5B6B7F] tracking-wide mt-1">
                AI Video Intelligence Layer
              </p>
              {/* Expanding Underline Rule */}
              <div className="w-28 h-0.5 mt-2 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent anim-underline" />
            </div>
          </div>

          {/* =========================================================================
              4. STATUS LINE (Cross-fading 3 phrases, absolute layout, zero layout shift)
             ========================================================================= */}
          <div className="relative h-6 w-full max-w-xs mt-3 flex items-center justify-center overflow-hidden">
            <span className="absolute text-xs font-mono text-[#5B6B7F] tracking-wide whitespace-nowrap opacity-0 anim-phrase-1">
              Connecting camera feed
            </span>
            <span className="absolute text-xs font-mono text-[#2563EB] font-medium tracking-wide whitespace-nowrap opacity-0 anim-phrase-2">
              Analyzing in real time
            </span>
            <span className="absolute text-xs font-mono text-[#06B6D4] font-medium tracking-wide whitespace-nowrap opacity-0 anim-phrase-3">
              Understanding the scene
            </span>
          </div>
        </div>
      )}

      {/* Skip Action Hint */}
      <div className="absolute bottom-8 text-[11px] font-mono text-[#94A3B8] tracking-widest uppercase hover:text-[#5B6B7F] transition-colors">
        Click anywhere or Esc to skip
      </div>
    </div>
  );
}
