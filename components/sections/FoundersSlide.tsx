"use client";

import React, { useState, useEffect, useCallback, useId } from "react";
import Link from "next/link";
import { teamMembers } from "@/content/team";
import Badge from "@/components/ui/Badge";

interface FoundersSlideProps {
  className?: string;
  id?: string;
  showHeading?: boolean;
}

export function FoundersSlide({
  className = "",
  id = "leadership",
  showHeading = true,
}: FoundersSlideProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");
  const [isPaused, setIsPaused] = useState(false);
  const headingId = useId();

  const currentMember = teamMembers[activeIndex];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Gentle auto-rotation when slider is active and not hovered
  useEffect(() => {
    if (viewMode !== "slider" || isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [viewMode, isPaused, handleNext]);

  return (
    <div id={id} className={`w-full ${className}`}>
      {showHeading && (
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#2563EB] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" aria-hidden="true" />
            Leadership &amp; Core Team
          </div>
          <h2
            id={headingId}
            className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-2"
          >
            The Team Building the Intelligence Layer
          </h2>
          <p className="text-xs sm:text-sm text-[#5B6B7F] leading-relaxed">
            Engineers, product builders, and business leaders shaping physical surveillance infrastructure
            into real-time operational intelligence.
          </p>
        </div>
      )}

      {/* Control Strip: View Mode & Slide Selector Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        {/* Member Selector Tabs */}
        <div
          role="tablist"
          aria-label="Founders and Team Members"
          className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-slate-100/90 border border-slate-200"
        >
          {teamMembers.map((member, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={member.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveIndex(idx);
                  setViewMode("slider");
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[#0B1F3A] shadow-sm border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold text-white bg-gradient-to-br ${member.gradient}`}
                >
                  {member.initials}
                </span>
                <span className="truncate max-w-[120px] sm:max-w-none">{member.name.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* View Switcher & Carousel Arrows */}
        <div className="flex items-center gap-2">
          {viewMode === "slider" && (
            <div className="flex items-center gap-1 mr-2">
              <button
                onClick={handlePrev}
                aria-label="Previous team member"
                className="w-8 h-8 rounded-lg border border-slate-200 bg-white text-slate-700 hover:text-[#2563EB] hover:border-[#2563EB] flex items-center justify-center transition-colors shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-xs font-mono text-slate-500 px-1">
                {activeIndex + 1}/{teamMembers.length}
              </span>
              <button
                onClick={handleNext}
                aria-label="Next team member"
                className="w-8 h-8 rounded-lg border border-slate-200 bg-white text-slate-700 hover:text-[#2563EB] hover:border-[#2563EB] flex items-center justify-center transition-colors shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

          <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
            <button
              onClick={() => setViewMode("slider")}
              aria-label="Slide view"
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                viewMode === "slider"
                  ? "bg-white text-[#2563EB] shadow-xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Slide
            </button>
            <button
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                viewMode === "grid"
                  ? "bg-white text-[#2563EB] shadow-xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Grid
            </button>
          </div>
        </div>
      </div>

      {/* Slide Carousel Mode */}
      {viewMode === "slider" ? (
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative"
        >
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-10 shadow-sm transition-all duration-300 relative overflow-hidden">
            {/* Top Accent Gradient Bar */}
            <div
              className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${currentMember.gradient}`}
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Avatar & Monogram */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div
                    className={`w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br ${currentMember.gradient} flex items-center justify-center shadow-lg text-white font-mono font-bold text-3xl sm:text-4xl tracking-tight border-4 border-white ring-2 ring-slate-100`}
                  >
                    {currentMember.initials}
                  </div>
                  <span className="absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-mono tracking-wider font-semibold shadow-xs">
                    0{activeIndex + 1} / 04
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A] mb-1">
                  {currentMember.name}
                </h3>
                <Badge variant="blue" size="md" className="font-semibold mb-2">
                  {currentMember.role}
                </Badge>
                <span className="text-[11px] font-mono text-slate-500">
                  Resurgenix Technologies
                </span>
              </div>

              {/* Right Column: Bio & Core Focus */}
              <div className="md:col-span-8 space-y-4 md:border-l md:border-slate-100 md:pl-8">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold block mb-1">
                    Leadership Statement
                  </span>
                  <p className="text-base sm:text-lg text-[#0B1F3A] font-medium leading-relaxed italic">
                    &ldquo;{currentMember.bio}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#E2E8F0]">
                    <span className="text-[11px] font-mono uppercase text-slate-500 font-bold block mb-1">
                      Primary Domain
                    </span>
                    <p className="text-xs font-semibold text-[#0B1F3A]">{currentMember.focus}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#E2E8F0]">
                    <span className="text-[11px] font-mono uppercase text-slate-500 font-bold block mb-1">
                      Verification Status
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                      <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Verified Core Team</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    {teamMembers.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Jump to slide ${i + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeIndex === i
                            ? "w-8 bg-[#2563EB]"
                            : "w-2 bg-slate-200 hover:bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
                  >
                    <span>Connect with Resurgenix</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Grid Mode: All 4 Members in Balanced Layout */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-sm hover:border-[#2563EB]/40 hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient}`}
              />

              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-mono font-bold text-base shadow-sm flex-shrink-0`}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1F3A] group-hover:text-[#2563EB] transition-colors leading-tight">
                      {member.name}
                    </h3>
                    <Badge variant="blue" size="sm" className="mt-1 font-medium">
                      {member.role}
                    </Badge>
                  </div>
                </div>

                <p className="text-xs text-[#5B6B7F] leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>0{idx + 1} / 04</span>
                <span className="text-[#2563EB] font-sans font-semibold">Resurgenix Core</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FoundersSlide;
